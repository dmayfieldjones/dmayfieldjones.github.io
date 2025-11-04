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
      </ul>
    </nav>
  )
}
