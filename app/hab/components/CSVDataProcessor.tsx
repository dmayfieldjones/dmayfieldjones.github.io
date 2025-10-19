'use client'

import { useState } from 'react'

interface FlightData {
  altitude: number
  temperature: number
  pressure: number
  humidity: number
  timestamp?: string
}

export default function CSVDataProcessor() {
  const [data, setData] = useState<FlightData[]>([])
  const [error, setError] = useState<string>('')
  const [isProcessing, setIsProcessing] = useState(false)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    setIsProcessing(true)
    setError('')

    const reader = new FileReader()
    reader.onload = (e) => {
      try {
        const csv = e.target?.result as string
        const lines = csv.split('\n')
        const headers = lines[0].split(',').map(h => h.trim().toLowerCase())
        
        const processedData: FlightData[] = []
        
        for (let i = 1; i < lines.length; i++) {
          if (lines[i].trim()) {
            const values = lines[i].split(',').map(v => v.trim())
            const row: any = {}
            
            headers.forEach((header, index) => {
              const value = values[index]
              if (value !== undefined && value !== '') {
                // Convert numeric columns
                if (['altitude', 'temperature', 'pressure', 'humidity'].includes(header)) {
                  row[header] = parseFloat(value)
                } else {
                  row[header] = value
                }
              }
            })
            
            // Only add rows with required numeric data
            if (row.altitude !== undefined && row.temperature !== undefined) {
              processedData.push(row as FlightData)
            }
          }
        }
        
        setData(processedData)
        setIsProcessing(false)
      } catch (err) {
        setError('Error processing CSV file. Please check the format.')
        setIsProcessing(false)
      }
    }
    
    reader.readAsText(file)
  }

  const downloadSampleCSV = () => {
    const sampleData = `altitude,temperature,pressure,humidity,timestamp
0,25,1013,60,2024-01-01T00:00:00Z
1000,20,900,55,2024-01-01T00:05:00Z
2000,15,800,50,2024-01-01T00:10:00Z
3000,10,700,45,2024-01-01T00:15:00Z
4000,5,600,40,2024-01-01T00:20:00Z
5000,0,500,35,2024-01-01T00:25:00Z`
    
    const blob = new Blob([sampleData], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'sample_balloon_data.csv'
    a.click()
    window.URL.revokeObjectURL(url)
  }

  return (
    <div className="csv-processor">
      <h3>CSV Data Processor</h3>
      <p>Upload your balloon flight data in CSV format for visualization and analysis.</p>
      
      <div className="upload-section">
        <div className="file-input-wrapper">
          <input
            type="file"
            accept=".csv"
            onChange={handleFileUpload}
            disabled={isProcessing}
            className="file-input"
          />
          <button 
            onClick={downloadSampleCSV}
            className="btn btn-secondary"
            style={{ marginLeft: '10px' }}
          >
            Download Sample CSV
          </button>
        </div>
        
        {isProcessing && <p>Processing data...</p>}
        {error && <p className="error-message">{error}</p>}
      </div>

      {data.length > 0 && (
        <div className="data-visualization">
          <h4>Data Visualization</h4>
          <p>Loaded {data.length} data points</p>
          
          <div className="chart-wrapper" style={{ width: '100%', height: '400px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="altitude" 
                  label={{ value: 'Altitude (ft)', position: 'insideBottom', offset: -10 }}
                />
                <YAxis 
                  yAxisId="left"
                  label={{ value: 'Temperature (°C)', angle: -90, position: 'insideLeft' }}
                />
                <YAxis 
                  yAxisId="right" 
                  orientation="right"
                  label={{ value: 'Pressure (hPa)', angle: 90, position: 'insideRight' }}
                />
                <Tooltip 
                  formatter={(value, name) => [
                    `${value}${name === 'temperature' ? '°C' : name === 'pressure' ? 'hPa' : '%'}`,
                    name.charAt(0).toUpperCase() + name.slice(1)
                  ]}
                  labelFormatter={(altitude) => `Altitude: ${altitude} ft`}
                />
                <Legend />
                <Line 
                  yAxisId="left"
                  type="monotone" 
                  dataKey="temperature" 
                  stroke="#ff6b6b" 
                  strokeWidth={2}
                  name="Temperature"
                />
                <Line 
                  yAxisId="right"
                  type="monotone" 
                  dataKey="pressure" 
                  stroke="#4ecdc4" 
                  strokeWidth={2}
                  name="Pressure"
                />
                <Line 
                  yAxisId="left"
                  type="monotone" 
                  dataKey="humidity" 
                  stroke="#45b7d1" 
                  strokeWidth={2}
                  name="Humidity"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          <div className="data-summary">
            <h4>Data Summary</h4>
            <div className="summary-stats">
              <div className="stat">
                <strong>Max Altitude:</strong> {Math.max(...data.map(d => d.altitude))} ft
              </div>
              <div className="stat">
                <strong>Min Temperature:</strong> {Math.min(...data.map(d => d.temperature))}°C
              </div>
              <div className="stat">
                <strong>Max Temperature:</strong> {Math.max(...data.map(d => d.temperature))}°C
              </div>
              <div className="stat">
                <strong>Min Pressure:</strong> {Math.min(...data.map(d => d.pressure))} hPa
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
