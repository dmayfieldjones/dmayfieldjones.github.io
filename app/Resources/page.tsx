'use client'
import './index.css'
import { useState } from 'react'

export default function () {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="content">
      <div className="post-title ">
        <h1>Research Resources</h1>
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
            Canine Genome Browser
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
                className={`accordion ${isOpen ? 'active' : ''}`}
                aria-expanded={isOpen}
                aria-controls="image-source-panel"
                onClick={toggleAccordion}
              >
                <span className="accent-color">Image Source</span>
              </button>
              <div
                className={`panel ${isOpen ? 'panel-open' : ''}`}
                id="image-source-panel"
              >
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
              with standardized evaluations of canine temperament and behavior.{' '}
              <span className="accent-color">7</span>Sisters is a registered
              group. Contact Karen and Dustin for our group's access code.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
