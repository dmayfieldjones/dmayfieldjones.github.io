import { Metadata } from 'next'
import Link from 'next/link'
import './index.css'

export const metadata: Metadata = {
  title: '7Sisters - About',
  description:
    'Learn about Dustin and Karen, our breeding philosophy, farm history, and how to contact us at 7Sisters Farm',
}

export default function Contents() {
  return (
    <div className="content">
      <div className="post-title">
        <h1>About <span style={{ color: '#bf141c' }}>7</span>Sisters Farm</h1>
      </div>
      <main className="content-wrapper">
        {/* About Us Section */}
        <section className="about-section">
          <h2 className="section-title">About Us</h2>
          <p className="intro-text">
            Meet Dustin and Karen, the passionate breeders behind 7Sisters Farm. Our journey into Great Dane breeding 
            began with a deep love for the breed and a commitment to excellence. We believe in responsible breeding 
            practices, ongoing education, and building lasting relationships with every family we serve.
          </p>
          <p className="intro-text">
            From our early days as newcomers to the Illini Great Dane Club to our current leadership roles, 
            we've learned that great breeding is about more than just producing puppies—it's about stewardship, 
            mentorship, and community.
          </p>
          <div className="read-more-section">
            <Link href="/posts/2025-06-23-more-than-show-and-go" className="read-more-link">
              Read more about our journey →
            </Link>
          </div>
        </section>

        {/* Breeding Philosophy Section */}
        <section className="philosophy-section">
          <h2 className="section-title">Breeding Philosophy</h2>
          <p className="intro-text">
            Health, temperament, and breed preservation guide every breeding decision we make.
          </p>
          <div className="cta-section">
            <Link href="/BreedingPhilosophy" className="cta-button">
              Learn More About Our Philosophy
            </Link>
          </div>
        </section>

        {/* Farm Section */}
        <section className="farm-section">
          <h2 className="section-title">Our Farm</h2>
          <p className="intro-text">
            A historic Illinois property with deep roots and a story spanning generations.
          </p>
          <div className="cta-section">
            <Link href="/Farm" className="cta-button">
              Discover Our Farm's Story
            </Link>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <h2 className="section-title">Get In Touch</h2>
          <p className="intro-text">
            Questions about our Great Danes or breeding program? We'd love to hear from you.
          </p>
          <div className="cta-section">
            <Link href="/contact" className="cta-button">
              Contact Us
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
