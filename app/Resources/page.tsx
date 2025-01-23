export default function () {
  return (
    <div className="content">
      <div className="post-title ">
        <h1>Research Resources at 7Sisters Farm</h1>
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
        {/* Genome Browser Section */}
        <section className="resource-section" aria-labelledby="genome-title">
          <h2 id="genome-title" className="section-title">
            <span className="accent-color">7</span>Sisters Great Dane Genome
            Browser
          </h2>
          <div className="resource-content">
            <p className="resource-description">
              Click on image to access the genome browser:
            </p>
            <a
              href="/GreatDaneGenomeBrowser"
              className="resource-link"
              aria-label="Access Great Dane Genome Browser"
            >
              <img
                src="/img/246Karyotype_of_Dog.png"
                alt="Dog karyotype showing 39 chromosomes (2n = 78) with telomere signals in red"
                className="resource-image"
                loading="lazy"
              />
            </a>
            <p className="image-caption">
              Dog karyotype: 39 chromosomes, 2n = 78.
            </p>
            <div className="accordion-wrapper">
              <button
                className="accordion"
                aria-expanded="false"
                aria-controls="image-source-panel"
              >
                <span className="accent-color">Image Source</span>
                <span className="accordion-icon" aria-hidden="true" />
              </button>
              <div className="panel" id="image-source-panel">
                <p className="citation">
                  Maeda J, Yurkon CR, Fujisawa H, Kaneko M, Genet SC, Roybal EJ,
                  et al. (2012) Genomic Instability and Telomere Fusion of
                  Canine Osteosarcoma Cells. PLoS ONE 7(8): e43355.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* C-BARQ Section */}
        <section className="resource-section" aria-labelledby="cbarq-title">
          <h2 id="cbarq-title" className="section-title">
            <span className="accent-color">7</span>Sisters Great Dane Canine
            Behavioral Assessment and Research Questionnaire
          </h2>
          <div className="resource-content">
            <p className="resource-description">
              Click on image to access the C-BARQ portal:
            </p>
            <a
              href="https://vetapps.vet.upenn.edu/cbarq/login-page.cfm/"
              className="resource-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Access C-BARQ Assessment Portal"
            >
              <img
                src="/img/piper.jpg"
                alt="Baby Great Dane puppy"
                className="resource-image"
                loading="lazy"
              />
            </a>
            <p className="cbarq-info">
              The C-BARQ is designed to provide dog owners and professionals
              with standardized evaluations of canine temperament and behavior.
              <span className="accent-color">7</span>Sisters is a registered
              group. Contact Karen and Dustin for our group's access code.
            </p>
          </div>
        </section>
      </main>
      <style
        dangerouslySetInnerHTML={{
          __html:
            " :root { --primary-color: #bf141c; --text-color: #000000; --background-color: #ffffff; --hover-color: #f0f0f0; --spacing-unit: 1rem; --font-family: Arial, sans-serif; --transition-speed: 0.3s; } .content-wrapper { max-width: 800px; margin: 0 auto; padding: calc(var(--spacing-unit) * 2); font-family: var(--font-family); line-height: 1.6; color: var(--text-color); background-color: var(--background-color); } .hero-section { text-align: center; margin-bottom: calc(var(--spacing-unit) * 3); } .hero-logo { max-width: 100%; height: auto; } .section-title { font-size: 1.5rem; margin: calc(var(--spacing-unit) * 2) 0 var(--spacing-unit); line-height: 1.3; } .accent-color { color: var(--primary-color); } .resource-section { margin-bottom: calc(var(--spacing-unit) * 4); } .resource-description { margin-bottom: var(--spacing-unit); font-size: 1.1rem; } .resource-link { display: block; margin: var(--spacing-unit) 0; transition: transform var(--transition-speed) ease; } .resource-link:hover { transform: scale(1.02); } .resource-image { max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); } .image-caption { font-style: italic; margin: calc(var(--spacing-unit) * 0.5) 0; color: #666; } /* Accordion Styles */ .accordion-wrapper { margin-top: var(--spacing-unit); } .accordion { width: 100%; padding: calc(var(--spacing-unit) * 0.75); background-color: var(--background-color); border: 1px solid #ddd; border-radius: 4px; font-size: 1rem; text-align: left; cursor: pointer; transition: background-color var(--transition-speed) ease; display: flex; justify-content: space-between; align-items: center; } .accordion:hover { background-color: var(--hover-color); } .accordion-icon::after { content: '+'; font-size: 1.2rem; font-weight: bold; } .accordion[aria-expanded=\"true\"] .accordion-icon::after { content: '−'; } .panel { max-height: 0; overflow: hidden; transition: max-height var(--transition-speed) ease-out; border: 1px solid transparent; } .panel.active { max-height: 500px; border-color: #ddd; border-top: none; padding: var(--spacing-unit); } .citation { font-size: 0.9rem; line-height: 1.5; color: #666; } .cbarq-info { margin-top: var(--spacing-unit); padding: var(--spacing-unit); background-color: rgba(191, 20, 28, 0.05); border-radius: 4px; } @media (max-width: 768px) { .content-wrapper { padding: var(--spacing-unit); } .section-title { font-size: 1.3rem; } .accordion { padding: calc(var(--spacing-unit) * 0.5); } } /* Print styles */ @media print { .accordion { border: none; } .panel { max-height: none; border: none; } .resource-image { max-width: 400px; } } ",
        }}
      />
    </div>
  )
}
