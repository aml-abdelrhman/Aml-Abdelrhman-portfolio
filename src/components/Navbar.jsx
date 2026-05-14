import React, { useState, useEffect } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { FaSun, FaMoon } from 'react-icons/fa'

const navLinks = [
  { id: 'home',     label: 'Home'     },
  { id: 'about',    label: 'About'    },
  { id: 'skills',   label: 'Skills'   },
  { id: 'projects', label: 'Projects' },
  { id: 'contact',  label: 'Contact'  },
]

export default function Navbar() {
  const [open,      setOpen]      = useState(false)
  const [scrolled,  setScrolled]  = useState(false)
  const [theme,     setTheme]     = useState(() => {
    if (typeof window === 'undefined') return 'dark'
    return localStorage.getItem('theme') || 'dark'
  })

  /* ── apply theme ── */
  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.remove('light')
    } else {
      root.classList.add('light')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  /* ── scroll shadow ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: '1.25rem 2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: scrolled ? 'rgba(10,10,10,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(201,169,110,0.1)' : '1px solid transparent',
      transition: 'all 0.4s ease',
    }}>

      {/* Logo */}
      <a href="#home" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <div style={{
          width: 36, height: 36,
          border: '1px solid var(--accent)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--font-display)',
          fontSize: '1.1rem',
          color: 'var(--accent)',
          letterSpacing: '0.05em',
        }}>A</div>
        <span style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.75rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--text-secondary)',
        }}>Aml Abdelrhman</span>
      </a>

      {/* Desktop nav */}
      <nav style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }} className="desktop-nav">
        {navLinks.map(l => (
          <ScrollLink
            key={l.id}
            to={l.id}
            smooth
            duration={600}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              textDecoration: 'none',
              transition: 'color 0.3s',
              paddingBottom: '2px',
              borderBottom: '1px solid transparent',
            }}
            className="nav-link"
          >
            {l.label}
          </ScrollLink>
        ))}

        <a
          href="Aml-Abdelrhman-CV.pdf"
          download
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.7rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            padding: '0.5rem 1.25rem',
            border: '1px solid var(--accent)',
            color: 'var(--accent)',
            textDecoration: 'none',
            transition: 'all 0.3s',
            borderRadius: '2px',
          }}
          className="btn-cv"
        >
          CV
        </a>

        <button
          onClick={toggleTheme}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--text-secondary)',
            fontSize: '0.9rem',
            display: 'flex',
            alignItems: 'center',
            transition: 'color 0.3s',
          }}
        >
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>
      </nav>

      {/* Mobile controls */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }} className="mobile-controls">
        <button onClick={toggleTheme} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)', fontSize: '1rem' }}>
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>
        <button
          onClick={() => setOpen(!open)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-primary)', display: 'flex', flexDirection: 'column', gap: '5px' }}
        >
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: 'block', width: 22, height: 1,
              background: 'var(--text-primary)',
              transform: open && i === 0 ? 'rotate(45deg) translate(4px,4px)' :
                         open && i === 2 ? 'rotate(-45deg) translate(4px,-4px)' : 'none',
              opacity:    open && i === 1 ? 0 : 1,
              transition: 'all 0.3s',
            }} />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: 'rgba(10,10,10,0.97)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--border)',
          padding: '2rem',
          display: 'flex', flexDirection: 'column', gap: '1.5rem',
        }}>
          {navLinks.map(l => (
            <ScrollLink
              key={l.id}
              to={l.id}
              smooth
              duration={600}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
              }}
            >
              {l.label}
            </ScrollLink>
          ))}
          <a
            href="Aml-Abdelrhman-CV.pdf"
            download
            style={{ color: 'var(--accent)', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}
          >
            Download CV
          </a>
        </div>
      )}

      <style>{`
        .desktop-nav { display: flex !important; }
        .mobile-controls { display: none !important; }
        .nav-link:hover { color: var(--accent) !important; border-bottom-color: var(--accent) !important; }
        .btn-cv:hover { background: var(--accent) !important; color: var(--bg-primary) !important; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-controls { display: flex !important; }
        }
      `}</style>
    </header>
  )
}