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
          
          {/* Hook */}
          <p className="intro-text hook-text">
            We believe Great Dane breeding is about more than just puppies—it's about stewardship, mentorship, and building a community that spans generations.
          </p>
          
          {/* Individual Expertise */}
          <div className="expertise-section">
            <div className="expertise-grid">
              <div className="expertise-item">
                <h4 className="expertise-name">Dustin</h4>
                <p className="expertise-text">
                  A plant biologist turned startup facilities manager, I fell in love with Great Danes at age 10 in an Iowa BBQ joint. My background in genetics and computational biology keeps me busy with cutting-edge breeding science, while my work with entrepreneurs has taught me the value of hands-on mentorship.
                </p>
                <a 
                  href="https://scholar.google.com/citations?user=MkPrBuoAAAAJ&hl=en" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="expertise-link"
                >
                  View Research Profile →
                </a>
              </div>
              
              <div className="expertise-item">
                <h4 className="expertise-name">Karen</h4>
                <p className="expertise-text">
                  A litigation attorney with lifelong dog experience—from growing up with dachshund breeders to 4-H obedience shows and veterinary clinic work. My legal training ensures ethical, transparent practices with solid contracts that protect both families and our dogs.
                </p>
                <p className="expertise-text">
                  I've dedicated over 20 years to Blood Cancer United, learning that meaningful change comes through sustained commitment and attention to detail—the same approach I bring to breeding.
                </p>
              </div>
            </div>
          </div>
          
          <div className="read-more-section">
            <Link href="/posts/2025-06-23-more-than-show-and-go" className="read-more-link">
              Read more about our journey →
            </Link>
          </div>
        </section>

        {/* Breeding Philosophy Section */}
        <section className="philosophy-section">
          <div className="cta-section">
            <Link href="/BreedingPhilosophy" className="cta-button">
              Learn More About Our Philosophy
            </Link>
          </div>
        </section>

        {/* Farm Section */}
        <section className="farm-section">
          <div className="cta-section">
            <Link href="/Farm" className="cta-button">
              Discover Our Farm's Story
            </Link>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
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
