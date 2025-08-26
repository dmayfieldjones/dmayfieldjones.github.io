'use client'

import './index.css'
import './navbar.css'
import { useState } from 'react'
import { GoogleAnalytics } from '@next/third-parties/google'
 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <div className="navbar-container">
            <div className="hamburger-icon" onClick={toggleMenu}>
              <div
                className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}
              ></div>
              <div
                className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}
              ></div>
              <div
                className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}
              ></div>
            </div>
          </div>
          <ul className={`navbar-menu ${isMenuOpen ? 'show' : ''}`}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/BreedingPhilosophy">Breeding Philosophy</a>
            </li>
            <li>
              <a href="/Litters">Litters</a>
            </li>
            <li>
              <a href="/Resources">Resources</a>
            </li>
            <li>
              <a href="/archive">Blog</a>
            </li>
            <li>
              <a href="/CommonQuestions">Common Questions</a>
            </li>
          </ul>
        </nav>
        <div className="wrapper">{children}</div>
      </body>
      <GoogleAnalytics gaId="G-SDSX26JETX" />
    </html>
  )
}
