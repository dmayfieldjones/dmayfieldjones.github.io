'use client'

import { useState } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleSubmenu = (submenuName: string) => {
    setOpenSubmenu(openSubmenu === submenuName ? null : submenuName)
  }

  return (
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
        <li className="nav-item-with-submenu">
          <button
            className={`nav-button ${openSubmenu === 'about' ? 'expanded' : ''}`}
            onClick={() => toggleSubmenu('about')}
          >
            About
          </button>
          <ul className={`submenu ${openSubmenu === 'about' ? 'show' : ''}`}>
            <li><a href="/about">About Us</a></li>
            <li><a href="/Farm">Our Farm</a></li>
          </ul>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li className="nav-item-with-submenu">
          <button
            className={`nav-button ${openSubmenu === 'breeding' ? 'expanded' : ''}`}
            onClick={() => toggleSubmenu('breeding')}
          >
            Breeding
          </button>
          <ul className={`submenu ${openSubmenu === 'breeding' ? 'show' : ''}`}>
            <li><a href="/BreedingPhilosophy">Breeding Philosophy</a></li>
            <li><a href="/Litters">Litters</a></li>
          </ul>
        </li>
        <li className="nav-item-with-submenu">
          <button
            className={`nav-button ${openSubmenu === 'resources' ? 'expanded' : ''}`}
            onClick={() => toggleSubmenu('resources')}
          >
            Resources
          </button>
          <ul className={`submenu ${openSubmenu === 'resources' ? 'show' : ''}`}>
            <li><a href="/Resources">Research Resources</a></li>
            <li><a href="/archive">Blog</a></li>
            <li><a href="/CommonQuestions">Common Questions</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}
