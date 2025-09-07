'use client'

import { useState } from 'react'
import { formatDistanceToNow, formatDistanceToNowStrict } from 'date-fns'

function timeSincePastDate(pastDateString: string | Date, endDate: Date = new Date()) {
  // Create Date objects and normalize to UTC midnight
  const pastDate = new Date(pastDateString)
  pastDate.setUTCHours(0, 0, 0, 0)
  
  const now = new Date(endDate)
  now.setUTCHours(0, 0, 0, 0)

  // Calculate the difference in milliseconds
  const differenceInMilliseconds = now.getTime() - pastDate.getTime()

  if (differenceInMilliseconds < 0) {
    return 'Please select a date after the birth date.'
  }

  // Calculate the number of full years
  let years = 0
  let tempDate = new Date(pastDate)
  while (tempDate < now) {
    tempDate.setUTCFullYear(tempDate.getUTCFullYear() + 1)
    if (tempDate <= now) {
      years++
    } else {
      tempDate.setUTCFullYear(tempDate.getUTCFullYear() - 1) // Revert the last increment
      break
    }
  }

  // Calculate the remaining time after accounting for full years
  let remainingMilliseconds = now.getTime() - tempDate.getTime()

  // Calculate the number of full months
  let months = 0
  let tempDateMonths = new Date(tempDate)
  while (tempDateMonths < now) {
    tempDateMonths.setUTCMonth(tempDateMonths.getUTCMonth() + 1)
    if (tempDateMonths <= now) {
      months++
    } else {
      tempDateMonths.setUTCMonth(tempDateMonths.getUTCMonth() - 1) // Revert the last increment
      break
    }
  }

  // Calculate the remaining time after accounting for full months
  remainingMilliseconds = now.getTime() - tempDateMonths.getTime()

  // Calculate the number of full days
  const days = Math.floor(remainingMilliseconds / (1000 * 60 * 60 * 24))

  let resultString = ''

  if (years > 0) {
    resultString += `${years} year${years > 1 ? 's' : ''}, `
  }
  if (months > 0) {
    resultString += `${months} month${months > 1 ? 's' : ''}, `
  }
  if (days >= 0) {
    resultString += `${days} day${days !== 1 ? 's' : ''}`
  }

  // Remove the trailing comma and space if present
  if (resultString.endsWith(', ')) {
    resultString = resultString.slice(0, -2)
  }

  return resultString || '0 days'
}

export default function () {
  // Create birth date at UTC midnight
  const birthDate = new Date(Date.UTC(2024, 7, 19))
  
  const [futureDate, setFutureDate] = useState<string>('')
  const [calculatedAge, setCalculatedAge] = useState<string>('')

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDateStr = event.target.value
    setFutureDate(selectedDateStr)
    
    // Parse the date string and create a UTC date
    const [year, month, day] = selectedDateStr.split('-').map(Number)
    const selectedDate = new Date(Date.UTC(year, month - 1, day))
    
    setCalculatedAge(timeSincePastDate(birthDate, selectedDate))
  }

  // For debugging current date calculation
  const currentDate = new Date()
  currentDate.setHours(0, 0, 0, 0)
  console.log('Current date:', currentDate.toISOString())

  return (
    <div className="content">
      <div className="post-title ">
        <h1>
          Sean x Piper Litter at <span style={{ color: '#bf141c' }}>7</span>
          Sisters Farm
        </h1>
      </div>
      <main className="content-wrapper">
        {/* Hero Section */}
        <section className="hero-section">
          <img
            src="/img/Colorlogo_nobackground.png"
            alt="7Sisters Farm Logo"
            width={300}
            height="auto"
            className="hero-logo"
            loading="lazy"
          />
        </section>
        {/* Litter Information Section */}
        <section className="litter-info-section">
          <div className="litter-details">
            <h2 className="section-title">Litter Information</h2>
            <div className="info-grid">
              <div className="info-item">
                <span className="label">Litter Number:</span>
                <span className="value">WS848503</span>
              </div>
              <div className="info-item">
                <span className="label">Litter's age today:</span>
                <span className="value" id="timeSinceWhelp">
                  {timeSincePastDate(birthDate)}
                </span>
              </div>
              <div className="info-item">
                <span className="label">Litter's age on Selected (Show) Date:</span>
                <div className="age-calculator">
                  <input
                    type="date"
                    id="future-date"
                    value={futureDate}
                    onChange={handleDateChange}
                    className="date-input"
                  />
                  {calculatedAge && (
                    <span className="value">{calculatedAge}</span>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* Parents Information */}
          <div className="parents-info">
            <div className="parent-card">
              <h3 className="parent-title">Sire</h3>
              <p className="parent-name">
                CH Legado N IZYA's Oops! I Did It Again
                <span className="call-name">"Sean"</span>
              </p>
              <p className="registration">
                <a 
                  href="https://ofa.org/advanced-search/?regnum=WS80095602" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="ofa-link"
                >
                  WS80095602
                </a>
              </p>
            </div>
            <div className="parent-card">
              <h3 className="parent-title">Dam</h3>
              <p className="parent-name">
                CH Legado N Danekraaft's How Can I Tell You?
                <span className="call-name">"Piper"</span>
              </p>
              <p className="registration">
                <a 
                  href="https://ofa.org/advanced-search/?regnum=WS69691106" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="ofa-link"
                >
                  WS69691106
                </a>
              </p>
            </div>
          </div>
        </section>
        {/* Offspring Section */}
        <section className="offspring-section">
          <h2 className="section-title">Offspring</h2>
          <div className="puppies-list">
            <div className="puppy-card">
              <p className="puppy-reg">AKC Registration: WS84850301</p>
              <p className="puppy-name">
                <span className="brand-number">7</span>Sisters N Legado's
                Interstellar <span className="call-name">"Stella"</span>
              </p>
            </div>
            <div className="puppy-card">
              <p className="puppy-reg">AKC Registration: WS84850302</p>
              <p className="puppy-name">
                <span className="brand-number">7</span>Sisters Tilly In The Sky
                With Diamonds <span className="call-name">"Tilly"</span>
              </p>
            </div>
            <div className="puppy-card">
              <p className="puppy-reg">AKC Registration: WS84850303</p>
              <p className="puppy-name">
                <span className="brand-number">7</span>Sisters N Legado's
                <span className="call-name">"Cruz"</span>
              </p>
            </div>
            <div className="puppy-card">
              <p className="puppy-reg">AKC Registration: WS84850304</p>
              <p className="puppy-name">
                <span className="brand-number">7</span>Sisters N Legado's Heart
                of Gold <span className="call-name">"Cora"</span>
              </p>
            </div>
          </div>
        </section>
        {/* Litter Advertisement */}
        <section className="advertisement-section">
          <a
            href="/SeanXPiper"
            className="ad-link"
            aria-label="View full Sean X Piper litter details"
          >
            <img
              src="/img/SeanXPiper.jpg"
              alt="Sean X Piper litter advertisement"
              className="ad-image"
              loading="lazy"
            />
          </a>
        </section>
      </main>
      <style
        dangerouslySetInnerHTML={{
          __html:
            ' :root { --primary-color: #bf141c; --text-color: #000000; --background-color: #ffffff; --card-bg-color: #f8f8f8; --border-color: #e0e0e0; --spacing-unit: 1rem; --font-family: Arial, sans-serif; --transition-speed: 0.3s; } .content-wrapper { max-width: 800px; margin: 0 auto; padding: calc(var(--spacing-unit) * 2); font-family: var(--font-family); line-height: 1.6; color: var(--text-color); background-color: var(--background-color); } .hero-section { text-align: center; margin-bottom: calc(var(--spacing-unit) * 3); } .hero-logo { max-width: 100%; height: auto; } .section-title { font-size: 1.75rem; color: var(--primary-color); margin-bottom: calc(var(--spacing-unit) * 1.5); } .info-grid { display: grid; gap: var(--spacing-unit); margin-bottom: calc(var(--spacing-unit) * 2); } .info-item { display: flex; flex-direction: column; gap: calc(var(--spacing-unit) * 0.5); } .label { font-weight: bold; color: #666; } .parents-info { display: grid; gap: calc(var(--spacing-unit) * 2); margin-bottom: calc(var(--spacing-unit) * 3); } .parent-card { background-color: var(--card-bg-color); padding: calc(var(--spacing-unit) * 1.5); border-radius: 8px; } .parent-title { color: var(--primary-color); margin-bottom: var(--spacing-unit); } .parent-name { font-size: 1.1rem; margin-bottom: calc(var(--spacing-unit) * 0.5); } .registration { color: #666; font-family: monospace; } .puppies-list { display: grid; gap: var(--spacing-unit); } .puppy-card { background-color: var(--card-bg-color); padding: calc(var(--spacing-unit) * 1.25); border-radius: 8px; } .puppy-reg { font-family: monospace; color: #666; margin-bottom: calc(var(--spacing-unit) * 0.5); } .brand-number { color: var(--primary-color); } .call-name { font-style: italic; } .advertisement-section { margin-top: calc(var(--spacing-unit) * 3); text-align: center; } .ad-image { max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); transition: transform var(--transition-speed) ease; } .ad-link:hover .ad-image { transform: scale(1.02); } .age-calculator { display: flex; flex-direction: column; gap: 0.5rem; } .date-input { padding: 0.5rem; font-size: 1rem; border: 1px solid #ccc; border-radius: 4px; width: fit-content; } .value { font-size: 1.1rem; color: var(--text-color); } @media (min-width: 768px) { .info-grid { grid-template-columns: repeat(1, 1fr); } .parents-info { grid-template-columns: repeat(2, 1fr); } } @media (max-width: 768px) { .content-wrapper { padding: var(--spacing-unit); } .section-title { font-size: 1.5rem; } } @media print { .puppy-card, .parent-card { background-color: transparent; border: 1px solid var(--border-color); } .ad-image { max-width: 400px; } } .health-testing { margin-top: calc(var(--spacing-unit) * 1); padding-top: calc(var(--spacing-unit) * 1); border-top: 1px solid var(--border-color); } .health-title { color: var(--primary-color); font-size: 1rem; margin-bottom: calc(var(--spacing-unit) * 0.5); font-weight: bold; } .health-description { font-size: 0.9rem; color: #666; margin-bottom: calc(var(--spacing-unit) * 0.75); line-height: 1.4; } .health-link { display: inline-block; background-color: var(--primary-color); color: white; padding: calc(var(--spacing-unit) * 0.5) calc(var(--spacing-unit) * 1); border-radius: 4px; text-decoration: none; font-size: 0.9rem; font-weight: 500; transition: all var(--transition-speed) ease; } .health-link:hover { background-color: #8f0f15; color: white; text-decoration: none; transform: translateY(-1px); } .ofa-link { color: inherit; text-decoration: underline; transition: color 0.2s ease; } .ofa-link:hover { color: var(--primary-color); } ',
        }}
      />
    </div>
  )
}
