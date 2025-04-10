import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '7Sisters - Litters',
  description:
    'Our mission and approach to breeding exceptional Great Danes at 7Sisters Farm',
}

export default function () {
  return (
    <div className="content">
      <div className="post-title ">
        <h1>
          <span style={{ color: '#bf141c' }}>7</span>Sisters Great Dane Litters
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
        {/* Club Memberships Section */}
        <section className="memberships-section">
          <p className="membership-text">
            We are members of the Illini Great Dane Club and the{' '}
            <a
              href="https://gdca.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Great Dane Club of America
            </a>
            .
          </p>
        </section>
        {/* Litters Section */}
        <section className="litters-section">
          <h2 className="section-title">
            <span className="accent-color">7</span>Sisters Previous Litters
          </h2>
          <p className="section-description">Click on images for details</p>
          <div className="litter-gallery">
            <a
              href="/SeanXPiper"
              className="litter-link"
              aria-label="View Sean X Piper litter details"
            >
              <img
                src="/img/SeanXPiper.jpg"
                alt="Sean X Piper litter advertisement"
                className="litter-image"
                loading="lazy"
              />
            </a>
            <a
              href="/RolexXPiper"
              className="litter-link"
              aria-label="View Rolex X Piper litter details"
            >
              <img
                src="/img/RolexPiper.jpg"
                alt="Rolex X Piper litter advertisement"
                className="litter-image"
                loading="lazy"
              />
            </a>
          </div>
        </section>
      </main>
      <style
        dangerouslySetInnerHTML={{
          __html:
            ' :root { --primary-color: #bf141c; --text-color: #000000; --background-color: #ffffff; --hover-color: #f8f8f8; --border-color: #e0e0e0; --spacing-unit: 1rem; --font-family: Arial, sans-serif; --transition-speed: 0.3s; } .content-wrapper { max-width: 800px; margin: 0 auto; padding: calc(var(--spacing-unit) * 2); font-family: var(--font-family); line-height: 1.6; color: var(--text-color); background-color: var(--background-color); } .hero-section { text-align: center; margin-bottom: calc(var(--spacing-unit) * 3); } .hero-logo { max-width: 100%; height: auto; } .memberships-section { text-align: center; margin-bottom: calc(var(--spacing-unit) * 3); } .membership-text { font-size: 1.1rem; line-height: 1.6; } .section-title { font-size: 1.75rem; margin-bottom: var(--spacing-unit); text-align: center; } .section-description { text-align: center; margin-bottom: calc(var(--spacing-unit) * 2); font-size: 1.1rem; color: #666; } .litter-gallery { display: grid; gap: calc(var(--spacing-unit) * 2); margin-top: calc(var(--spacing-unit) * 2); } .litter-link { display: block; transition: transform var(--transition-speed) ease; } .litter-link:hover { transform: scale(1.02); } .litter-image { width: 100%; height: auto; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); } .accent-color { color: var(--primary-color); } a { color: var(--primary-color); text-decoration: none; transition: color var(--transition-speed) ease; } a:hover { color: #8f0f15; text-decoration: underline; } @media (max-width: 768px) { .content-wrapper { padding: var(--spacing-unit); } .section-title { font-size: 1.5rem; } } @media print { .litter-gallery { gap: var(--spacing-unit); } .litter-image { max-width: 400px; margin: 0 auto; } } ',
        }}
      />
    </div>
  )
}
