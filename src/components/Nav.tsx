'use client'
import { useState, useEffect } from 'react'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certs', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
]

export default function Nav() {
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const sections = navItems.map(item => document.getElementById(item.id))
    const handleScroll = () => {
      let current = ''
      sections.forEach(sec => {
        if (sec && window.scrollY >= sec.offsetTop - 120) current = sec.id
      })
      setActive(current)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav>
        <div className="nav-brand">
          <div className="nav-dot" />
          <span className="nav-name">khalid farah</span>
        </div>
        <ul className="nav-links">
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <a href={`#${id}`} className={active === id ? 'active' : ''}>{label}</a>
            </li>
          ))}
        </ul>
        <a href="mailto:khalidfarah9@gmail.com" className="nav-cta">
          <span className="status-dot" />
          Available for work
        </a>
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {navItems.map(({ id, label }) => (
          <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>
        ))}
      </div>
    </>
  )
}
