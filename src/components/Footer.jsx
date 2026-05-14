import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Link as ScrollLink } from 'react-scroll'

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border)',
      padding: '4rem 0 2.5rem',
    }}>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="brand-logo-container">
              <div style={{
                width: 36, height: 36,
                border: '1px solid var(--accent)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-display)',
                fontSize: '1.1rem',
                color: 'var(--accent)',
              }}>A</div>
              <span style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--text-secondary)',
              }}>Aml Abdelrhman</span>
            </div>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.95rem',
              color: 'var(--text-dim)',
              lineHeight: 1.8,
              maxWidth: 240,
              margin: '0 auto',
            }}>
              Front-End Developer crafting refined digital experiences.
            </p>
          </div>

          <nav className="footer-nav">
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--text-dim)',
              marginBottom: '0.5rem',
            }}>Navigation</p>
            {navLinks.map(l => (
              <ScrollLink
                key={l.id}
                to={l.id}
                smooth
                duration={600}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  transition: 'color 0.3s',
                  letterSpacing: '0.05em',
                }}
                className="footer-link"
              >
                {l.label}
              </ScrollLink>
            ))}
          </nav>

          <div className="footer-socials">
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {[
                { icon: FaGithub, href: 'https://github.com/aml-abdelrhman', label: 'GitHub' },
                { icon: FaLinkedin, href: 'https://linkedin.com/in/aml-abdelrhman-8b849a372', label: 'LinkedIn' },
              ].map(s => {
                const Icon = s.icon
                return (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    whileHover={{ scale: 1.1 }}
                    style={{
                      width: 38, height: 38,
                      border: '1px solid var(--border)',
                      borderRadius: '2px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'var(--text-secondary)',
                      textDecoration: 'none',
                      transition: 'all 0.3s',
                    }}
                    className="social-link"
                  >
                    <Icon style={{ fontSize: '0.9rem' }} />
                  </motion.a>
                )
              })}
            </div>

            <a
              href="Aml-Abdelrhman-CV.pdf"
              download
              className="btn-primary"
              style={{ fontSize: '0.8rem', padding: '0.6rem 1.25rem' }}
            >
              Download CV ↓
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Aml Abdelrhman. All rights reserved.</p>
          <p>Designed & Built with ♥</p>
        </div>
      </div>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 3rem;
          align-items: start;
          margin-bottom: 4rem;
        }
        .brand-logo-container {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          marginBottom: 1.25rem;
        }
        .footer-nav {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          align-items: center;
        }
        .footer-socials {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 1.5rem;
        }
        .footer-bottom {
          border-top: 1px solid var(--border);
          padding-top: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
          font-family: var(--font-body);
          font-size: 0.85rem;
          color: var(--text-dim);
          letter-spacing: 0.05em;
        }
        .footer-link:hover { color: var(--accent) !important; }
        .social-link:hover { border-color: var(--accent) !important; color: var(--accent) !important; }
        
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
            text-align: center;
          }
          .brand-logo-container {
            justify-content: center;
            margin-bottom: 1rem;
          }
          .footer-socials {
            align-items: center;
          }
          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  )
}