import { useState } from 'react'

const Navigation = ({ currentPage, setCurrentPage }) => {
  const pages = [
    { id: 'hero', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '👤' },
    { id: 'work', label: 'Work', icon: '🎬' },
    { id: 'why-hire-me', label: 'Why Hire Me', icon: '⭐' },
    { id: 'contact', label: 'Contact', icon: '📞' }
  ]

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <span>Diven</span>
        </div>
        <div className="nav-buttons">
          {pages.map((page) => (
            <button
              key={page.id}
              className={`nav-btn ${currentPage === page.id ? 'active' : ''}`}
              onClick={() => setCurrentPage(page.id)}
            >
              <span className="nav-icon">{page.icon}</span>
              <span className="nav-label">{page.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navigation