import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '7Sisters - Sean X Piper',
  description:
    'Our mission and approach to breeding exceptional Great Danes at 7Sisters Farm',
}

export default function () {
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
                <span className="label">
                  Time Since Whelp (Aug. 19th, 2024):
                </span>
                <span className="value" id="timeSinceWhelp">
                  0 years, 5 months, 5 days
                </span>
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
              <p className="registration">WS80095602</p>
            </div>
            <div className="parent-card">
              <h3 className="parent-title">Dam</h3>
              <p className="parent-name">
                CH Legado N Danekraaft's How Can I Tell You?
                <span className="call-name">"Piper"</span>
              </p>
              <p className="registration">WS69691106</p>
            </div>
          </div>
        </section>
        {/* Offspring Section */}
        <section className="offspring-section">
          <h2 className="section-title">Offspring</h2>
          <div className="puppies-list">
            <div className="puppy-card">
              <p className="puppy-reg">WS84850301</p>
              <p className="puppy-name">
                <span className="brand-number">7</span>Sisters N Legado's
                Interstellar <span className="call-name">"Stella"</span>
              </p>
            </div>
            <div className="puppy-card">
              <p className="puppy-reg">WS84850302</p>
              <p className="puppy-name">
                <span className="brand-number">7</span>Sisters Tilly In The Sky
                With Diamonds <span className="call-name">"Tilly"</span>
              </p>
            </div>
            <div className="puppy-card">
              <p className="puppy-reg">WS84850303</p>
              <p className="puppy-name">
                <span className="brand-number">7</span>Sisters N Legado's
                <span className="call-name">"Cruz"</span>
              </p>
            </div>
            <div className="puppy-card">
              <p className="puppy-reg">WS84850304</p>
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
            ' :root { --primary-color: #bf141c; --text-color: #000000; --background-color: #ffffff; --card-bg-color: #f8f8f8; --border-color: #e0e0e0; --spacing-unit: 1rem; --font-family: Arial, sans-serif; --transition-speed: 0.3s; } .content-wrapper { max-width: 800px; margin: 0 auto; padding: calc(var(--spacing-unit) * 2); font-family: var(--font-family); line-height: 1.6; color: var(--text-color); background-color: var(--background-color); } .hero-section { text-align: center; margin-bottom: calc(var(--spacing-unit) * 3); } .hero-logo { max-width: 100%; height: auto; } .section-title { font-size: 1.75rem; color: var(--primary-color); margin-bottom: calc(var(--spacing-unit) * 1.5); } .info-grid { display: grid; gap: var(--spacing-unit); margin-bottom: calc(var(--spacing-unit) * 2); } .info-item { display: flex; flex-direction: column; gap: calc(var(--spacing-unit) * 0.5); } .label { font-weight: bold; color: #666; } .parents-info { display: grid; gap: calc(var(--spacing-unit) * 2); margin-bottom: calc(var(--spacing-unit) * 3); } .parent-card { background-color: var(--card-bg-color); padding: calc(var(--spacing-unit) * 1.5); border-radius: 8px; } .parent-title { color: var(--primary-color); margin-bottom: var(--spacing-unit); } .parent-name { font-size: 1.1rem; margin-bottom: calc(var(--spacing-unit) * 0.5); } .registration { color: #666; font-family: monospace; } .puppies-list { display: grid; gap: var(--spacing-unit); } .puppy-card { background-color: var(--card-bg-color); padding: calc(var(--spacing-unit) * 1.25); border-radius: 8px; } .puppy-reg { font-family: monospace; color: #666; margin-bottom: calc(var(--spacing-unit) * 0.5); } .brand-number { color: var(--primary-color); } .call-name { font-style: italic; } .advertisement-section { margin-top: calc(var(--spacing-unit) * 3); text-align: center; } .ad-image { max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); transition: transform var(--transition-speed) ease; } .ad-link:hover .ad-image { transform: scale(1.02); } @media (min-width: 768px) { .info-grid { grid-template-columns: repeat(2, 1fr); } .parents-info { grid-template-columns: repeat(2, 1fr); } } @media (max-width: 768px) { .content-wrapper { padding: var(--spacing-unit); } .section-title { font-size: 1.5rem; } } @media print { .puppy-card, .parent-card { background-color: transparent; border: 1px solid var(--border-color); } .ad-image { max-width: 400px; } } ',
        }}
      />
    </div>
  )
}
