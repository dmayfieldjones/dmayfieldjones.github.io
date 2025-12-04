'use client'

import React, { useEffect, useRef, useState } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import './dive-map-styles.css'

// Fix for default Leaflet icons
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

interface DiveSite {
  location: string
  latitude: number
  longitude: number
  dive_count: number
  region: string
  notes: string
}

// Move diveSites outside component to prevent recreation on every render
const diveSites: DiveSite[] = [
    { location: "Tulum - Cenote Car Wash (Aktun Ha)", latitude: 20.227, longitude: -87.498, dive_count: 3, region: "Mexico", notes: "9 km west of Tulum on Coba Road" },
    { location: "Tulum - Cenote Yax-Kin", latitude: 20.215, longitude: -87.47, dive_count: 1, region: "Mexico", notes: "Near Tulum" },
    { location: "Bonne Terre Mine, Missouri", latitude: 37.922, longitude: -90.548, dive_count: 6, region: "USA", notes: "Open Water Training" },
    { location: "Tulum - Cenote Naharon (Cristal)", latitude: 20.19875, longitude: -87.51317, dive_count: 1, region: "Mexico", notes: "6 km south of Tulum on Hwy 307" },
    { location: "Tulum - Nohoch Nah Chich", latitude: 20.299, longitude: -87.404, dive_count: 1, region: "Mexico", notes: "Part of Dos Ojos cave system" },
    { location: "Tulum - Ponderosa (Garden of Eden)", latitude: 20.491576, longitude: -87.258332, dive_count: 1, region: "Mexico", notes: "Near Barceló Maya resort, north of Tulum" },
    { location: "Kona - Garden Eel Cove/Manta Heaven", latitude: 19.736, longitude: -156.054, dive_count: 3, region: "USA", notes: "Makako Bay, off Kona Airport" },
    { location: "Kankakee - High Quarry, Illinois", latitude: 41.12, longitude: -87.861, dive_count: 1, region: "USA", notes: "Reactivation dive" },
    { location: "Tulum - Cenote Mayan Blue (Escondido)", latitude: 20.19665, longitude: -87.50094, dive_count: 4, region: "Mexico", notes: "Across from Cenote Cristal" },
    { location: "Key Largo - French Reef", latitude: 25.034, longitude: -80.35, dive_count: 1, region: "USA", notes: "Advanced Training" },
    { location: "Tulum - Cenote Dreamgate", latitude: 20.308, longitude: -87.357, dive_count: 1, region: "Mexico", notes: "Dos Ojos Park entrance area" },
    { location: "Kona - Manta Ray Night Dive", latitude: 19.736, longitude: -156.054, dive_count: 1, region: "USA", notes: "Garden Eel Cove, Makako Bay" },
    { location: "Nha Trang - Mama Hanh Beach, Vietnam", latitude: 12.171, longitude: 109.308, dive_count: 1, region: "Vietnam", notes: "Hon Mun Marine Park, shallow dive 14m" },
    { location: "Nha Trang - Hon Mun Marine Park, Vietnam", latitude: 12.168, longitude: 109.309, dive_count: 1, region: "Vietnam", notes: "Could not locate 'Cemetery Bay' specifically" },
    { location: "Key Largo - Aquarium", latitude: 25.087, longitude: -80.447, dive_count: 1, region: "USA", notes: "Buoyancy Training" },
    { location: "Key Largo - Sand Island", latitude: 25.137, longitude: -80.446, dive_count: 1, region: "USA", notes: "Navigation Training" },
    { location: "Key Largo - Conch Ledge", latitude: 24.956, longitude: -80.455, dive_count: 1, region: "USA", notes: "Boat Dive" },
    { location: "Key Largo - Snapper Ledge", latitude: 24.982, longitude: -80.422, dive_count: 2, region: "USA", notes: "Night dive site" },
    { location: "Key Largo - Elevator Shaft", latitude: 25.087, longitude: -80.447, dive_count: 1, region: "USA", notes: "Deep Training" },
    { location: "Key Largo - Turtles Ledge", latitude: 25.087, longitude: -80.447, dive_count: 1, region: "USA", notes: "Photo Training" },
    { location: "Key Largo - North Star", latitude: 25.087, longitude: -80.447, dive_count: 1, region: "USA", notes: "Dive site" },
    { location: "Key Largo - Hole In The Wall", latitude: 25.087, longitude: -80.447, dive_count: 1, region: "USA", notes: "Dive site" },
    { location: "Key Largo - Christ Statue (Dry Rocks)", latitude: 25.123, longitude: -80.297, dive_count: 1, region: "USA", notes: "Famous underwater statue" },
    { location: "Key Largo - Minnow Cave", latitude: 25.087, longitude: -80.447, dive_count: 1, region: "USA", notes: "Dive site" },
    { location: "Kona - Lone Tree Arch", latitude: 19.69113, longitude: -156.04075, dive_count: 1, region: "USA", notes: "South Kona coast, lava arch dive - large swim-through arch" },
    { location: "Kona - Turtle Pinnacle", latitude: 19.64, longitude: -155.99, dive_count: 1, region: "USA", notes: "Turtle cleaning station, northern Kona" },
    { location: "Kona - Manta Heaven (Night)", latitude: 19.736, longitude: -156.054, dive_count: 1, region: "USA", notes: "Makako Bay night manta dive" },
    { location: "Kona - Pelagic Blackwater Dive", latitude: 19.67, longitude: -156.065, dive_count: 1, region: "USA", notes: "Night drift dive in deep water" },
    { location: "Kona - Pyramid Pinnacle", latitude: 19.64, longitude: -155.99, dive_count: 1, region: "USA", notes: "Northern Kona reef dive" },
    { location: "Kona - Crescent", latitude: 19.669, longitude: -156.024, dive_count: 1, region: "USA", notes: "Honokohau Harbor, also called Alua Beach" },
    { location: "Koloa - Brennecke's Ledge, Kauai", latitude: 21.886, longitude: -159.435, dive_count: 1, region: "USA", notes: "Poipu area boat dive" },
    { location: "Koloa - Sheraton Caverns, Kauai", latitude: 21.873, longitude: -159.466, dive_count: 1, region: "USA", notes: "Poipu area, lava tubes and caverns" },
    { location: "Tulum - Cenote The Pit", latitude: 20.309, longitude: -87.357, dive_count: 1, region: "Mexico", notes: "Dos Ojos Park, 119m deep" },
    { location: "Tulum - Cenote Dos Ojos", latitude: 20.267, longitude: -87.46, dive_count: 1, region: "Mexico", notes: "Main entrance - world's longest underwater cave" },
    { location: "Cozumel - Punta Tunich", latitude: 20.27, longitude: -87.0, dive_count: 1, region: "Mexico", notes: "Palancar Reef system, south shore drift dive" },
    { location: "Cozumel - Punta Chinik", latitude: 20.28, longitude: -87.01, dive_count: 1, region: "Mexico", notes: "South shore drift dive" },
    { location: "Puerto Morelos - Cenote Zapote", latitude: 20.9, longitude: -87.05, dive_count: 1, region: "Mexico", notes: "Hell's Bells formations" },
    { location: "Puerto Morelos - Cenote Maravilla", latitude: 20.85, longitude: -87.08, dive_count: 1, region: "Mexico", notes: "Bell-shaped stalactites, hydrogen sulfide layer, 60m depth" },
    { location: "Puerto Morelos - Maravilla Reef", latitude: 20.848, longitude: -86.85, dive_count: 1, region: "Mexico", notes: "Caribbean reef dive" },
    { location: "Nuclear Missile Silo Complex, Washington", latitude: 46.908, longitude: -119.756, dive_count: 2, region: "USA", notes: "Cold War missile silo complex, near Royal City, WA" }
  ]

const DiveMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const loadMap = () => {
      if (!mapRef.current || mapInstanceRef.current) return

      try {
        // Create map with initial world view (will be adjusted by fitBounds)
        const leafletMap = L.map(mapRef.current).setView([20, 0], 1)

        // Add tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors'
        }).addTo(leafletMap)

        // Color coding by region
        const regionColors: { [key: string]: string } = {
          'Mexico': '#bf141c',
          'USA': '#2563eb', 
          'Vietnam': '#16a34a'
        }

        // Array to store all markers for bounds calculation
        const markers: L.Marker[] = []

        // Add markers for each dive site
        diveSites.forEach((site) => {
          // Calculate marker size based on dive count (8px to 24px)
          const markerSize = Math.max(8, Math.min(24, 8 + site.dive_count * 2))
          
          // Create custom icon
          const customIcon = L.divIcon({
            className: 'custom-dive-marker',
            html: `<div style="
              width: ${markerSize}px;
              height: ${markerSize}px;
              background-color: ${regionColors[site.region] || '#666'};
              border: 2px solid white;
              border-radius: 50%;
              box-shadow: 0 2px 6px rgba(0,0,0,0.3);
              cursor: pointer;
            "></div>`,
            iconSize: [markerSize, markerSize],
            iconAnchor: [markerSize / 2, markerSize / 2]
          })

          // Create marker
          const marker = L.marker([site.latitude, site.longitude], { icon: customIcon })
            .addTo(leafletMap)

          // Store marker for bounds calculation
          markers.push(marker)

          // Create popup content
          const popupContent = `
            <div style="font-family: Arial, sans-serif; max-width: 300px;">
              <h3 style="margin: 0 0 8px 0; color: #bf141c; font-size: 16px;">${site.location}</h3>
              <p style="margin: 4px 0; font-weight: bold; color: #333;">
                <span style="color: ${regionColors[site.region] || '#666'};">●</span> 
                ${site.region}
              </p>
              <p style="margin: 4px 0; font-size: 14px; color: #666;">${site.notes}</p>
              <p style="margin: 8px 0 0 0; font-size: 12px; color: #999;">
                ${site.latitude.toFixed(3)}°, ${site.longitude.toFixed(3)}°
              </p>
            </div>
          `

          marker.bindPopup(popupContent)
        })

        // Fit map to show all markers with padding
        if (markers.length > 0) {
          const group = new L.FeatureGroup(markers)
          leafletMap.fitBounds(group.getBounds().pad(0.1))
        }

        mapInstanceRef.current = leafletMap
        setIsLoaded(true)
      } catch (error) {
        console.error('Error loading map:', error)
      }
    }

    loadMap()

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [])

  return (
    <div style={{ position: 'relative', width: '100%', height: '500px' }}>
      <div 
        ref={mapRef} 
        style={{ 
          width: '100%', 
          height: '100%', 
          borderRadius: '8px',
          border: '2px solid var(--border-color)',
          boxShadow: '0 4px 12px rgba(191, 20, 28, 0.1)'
        }}
      />
      {!isLoaded && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: '#666',
          fontSize: '14px'
        }}>
          Loading dive site map...
        </div>
      )}
      
      {/* Legend */}
      <div style={{
        position: 'absolute',
        bottom: '10px',
        left: '10px',
        background: 'rgba(255, 255, 255, 0.9)',
        padding: '8px 12px',
        borderRadius: '6px',
        fontSize: '12px',
        boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
        fontFamily: 'Arial, sans-serif'
      }}>
        <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>Regions:</div>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <span><span style={{ color: '#bf141c' }}>●</span> Mexico</span>
          <span><span style={{ color: '#2563eb' }}>●</span> USA</span>
          <span><span style={{ color: '#16a34a' }}>●</span> Vietnam</span>
        </div>
        <div style={{ marginTop: '4px', fontSize: '11px', color: '#666' }}>
          Marker size = number of dives
        </div>
      </div>
    </div>
  )
}

export default DiveMap
