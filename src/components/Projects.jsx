
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Project Image Imports
import CareStore from '../assets/images/CareStore.PNG'
import seraCafe from '../assets/images/sera.PNG'
import MORK from '../assets/images/MORK..PNG'
import ECY from '../assets/images/ECY.PNG'
import Delivery from '../assets/images/delivery.PNG'
import CRUDS from '../assets/images/CRUDS.PNG'
import NewProject8 from '../assets/images/etech.png'
import NewProject9 from '../assets/images/nest-js2.png'
import NewProject10 from '../assets/images/real-state.png'
import NewProject11 from '../assets/images/shop2.png'
import shop2 from '../assets/images/shop.png' 
import NewProject12 from '../assets/images/real-state-2.png'
import NewProject13 from '../assets/images/warm.png'
import AdminDash from '../assets/images/admindash.png' 
import aljada from '../assets/images/aljada.png' 
import pioneers from '../assets/images/pioneers2.png' 
import saudiRestaurant from '../assets/images/saudi restaurant.PNG'




const projects = [

  {
    title: 'Business Pioneers Solution',
    img: pioneers,
    tech: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'PostgreSQL'],
    category: 'Full-Stack',
    badge: '🏆 2nd Place · Best UI/UX',
    description: 'Ranked 2nd Place in the "Business Pioneers Holding" hackathon by Monafis. Awarded Best UI/UX Design for a production-grade B2B SaaS dashboard with real-time data sync and Deep Dark theme.',
    demo: 'https://fullstack-pioneers.vercel.app/',
    code: 'https://github.com/aml-abdelrhman/fullstack-pioneers',
  },
  {
    title: 'Alshefaa – HealthTech Platform',
    img: AdminDash,
    tech: ['React 19', 'TypeScript', 'Supabase', 'TanStack Query', 'Zustand'],
    category: 'Full-Stack',
    description: 'Scalable SPA with Electronic Health Records, appointment scheduling, and a medical marketplace. CI/CD via GitHub Actions with automated Vercel deployments.',
    demo: 'https://alshefaa-dashbord-fullstack.vercel.app/',
    code: 'https://github.com/aml-abdelrhman/alshefaa-dashbord-fullstack',
  },
  {
    title: 'ETech Educational Website',
    img: NewProject8,
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    category: 'Education',
    description: 'A professional educational website featuring interactive learning modules and a modern UI.',
    demo: 'https://etetch-tm3e.vercel.app/',
    code: 'https://github.com/aml-abdelrhman/etetch.git',
  },
  {
    title: 'Augest Website',
    img: NewProject11,
    tech: ['Next.js', 'TypeScript', 'React Query'],
    category: 'E-Commerce',
    description: 'A professional electronics e-commerce platform with modern UI and product categories.',
    demo: 'https://augest-district.vercel.app/',
    code: 'https://github.com/aml-abdelrhman/augest-district.git',
  },
  {
    title: 'Hemma Real Estate',
    img: NewProject12,
    tech: ['Next.js', 'TypeScript', 'Framer Motion'],
    category: 'Real Estate',
    description: 'A comprehensive real estate system with property listings and integrated booking system.',
    demo: 'https://hemma-real-state.vercel.app/',
    code: 'https://github.com/aml-abdelrhman/Hemma-real-state.git',
  },
  // {
  //   title: 'E-commerce Shop',
  //   img: NewProject9,
  //   tech: ['React', 'Redux', 'SCSS'],
  //   category: 'E-Commerce',
  //   description: 'A dynamic e-commerce app providing a smooth user experience from browsing to checkout.',
  //   demo: 'https://nextjs-ecommerce-blv4.vercel.app/',
  //   code: 'https://github.com/aml-abdelrhman/nextjs-ecommerce.git',
  // },
  {
    title: 'WarmDecor Interior Store',
    img: NewProject13,
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    category: 'E-Commerce',
    description: 'A full-featured interior design e-commerce project with cart management and checkout.',
    demo: 'https://warmdecor-dk19.vercel.app/',
    code: 'https://github.com/aml-abdelrhman/WARMDECOR.git',
  },
  {
    title: 'Care Store',
    img: CareStore,
    tech: ['React', 'Tailwind CSS'],
    category: 'E-Commerce',
    description: 'A modern e-commerce web app with product browsing, wishlist, and cart features.',
    demo: 'https://aml-abdelrhman.github.io/Care-Store/',
    code: 'https://github.com/aml-abdelrhman/Care-Store.git',
  },
  {
    title: 'Al-Jadda Real Estate',
    img: aljada,
    tech: ['Next.js', 'TypeScript', 'React', 'CSS Modules', 'i18n (AR/EN)'],
    category: 'Real Estate',
    description: 'A bilingual (Arabic/English) real estate platform built with Next.js App Router. Features interactive property listings, multi-slide about section, and full RTL/LTR support.',
    demo: 'https://real-state-theta-hazel.vercel.app/',
    code: 'https://github.com/aml-abdelrhman/real-state',
  },
    {
    title: 'Augest District – Design Marketplace',
    img: shop2,
    tech: ['Next.js 15', 'TypeScript', 'Zustand', 'TanStack Query', 'NextAuth', 'Tailwind CSS'],
    category: 'E-Commerce',
    badge: '💎 Premium UI',
    description: 'A high-end marketplace for digital assets featuring a "Glassmorphism" aesthetic. Built with Next.js 15 App Router, it includes a real-time shopping cart via Zustand, multi-language support (AR/EN), and secure authentication.',
    demo: 'https://augest-design.vercel.app/',
    code: 'https://github.com/aml-abdelrhman/AUGEST-DESIGN',
  },
  {
    title: 'Sera Café Website',
    img: seraCafe,
    tech: ['React', 'Bootstrap'],
    category: 'Landing Page',
    description: 'A modern responsive website for Sera Café showcasing menu, services, and contact info.',
    demo: 'https://aml-abdelrhman.github.io/sera-cafe/',
    code: 'https://github.com/aml-abdelrhman/sera-cafe.git',
  },
  {
    title: 'MORK BRAND website',
    img: MORK,
    tech: ['React', 'Vite'],
    category: 'Brand Website',
    description: 'Brand website for MORK including portfolio, about, and product showcase.',
    demo: 'https://aml-abdelrhman.github.io/MORK/',
    code: 'https://github.com/aml-abdelrhman/MORK.git',
  },
  {
    title: 'ECY-Educational-Web',
    img: ECY,
    tech: ['React', 'Vite'],
    category: 'Education',
    description: 'Educational platform for students with courses, resources, and online learning features.',
    demo: 'https://aml-abdelrhman.github.io/ECY-Educational-Web/',
    code: 'https://github.com/aml-abdelrhman/ECY-Educational-Web.git',
  },
  {
    title: 'Saudi Taste Restaurant',
    img: saudiRestaurant,
    tech: ['React', 'Vite'],
    category: 'Restaurant',
    description: 'A cultural restaurant website showcasing authentic menus, online reservations, and location services.',
    demo: 'https://aml-abdelrhman.github.io/restaurant-website/',
    code: 'https://github.com/aml-abdelrhman/restaurant-website.git',
  },
  {
    title: 'Delivery X website',
    img: Delivery,
    tech: ['JavaScript', 'Bootstrap'],
    category: 'Landing Page',
    description: 'A modern responsive website for Delivery-x showcasing about information, services, and contact info.',
    demo: 'https://aml-abdelrhman.github.io/Deliver-X/',
    code: 'https://github.com/aml-abdelrhman/Deliver-X.git',
  },
  // {
  //   title: 'Real Estate website', // Distinct from Hemma Real Estate
  //   img: NewProject10,
  //   tech: ['React', 'CSS', 'Framer Motion'],
  //   category: 'Real Estate',
  //   description: 'A premium real estate listing portal with interactive components and optimized search functionality for high-end properties.',
  //   demo: 'https://real-state-theta-hazel.vercel.app/',
  //   code: 'https://github.com/aml-abdelrhman/real-state.git',
  // },
  {
    title: 'CRUDS Product System',
    img: CRUDS,
    tech: ['JavaScript', 'HTML', 'CSS'],
    category: 'Web App',
    description: 'Full CRUD functionality for seamless product handling with a clean interface.',
    demo: 'https://aml-abdelrhman.github.io/CRUDS-SYSTEM/',
    code: 'https://github.com/aml-abdelrhman/CRUDS-SYSTEM.git',
  },
]

const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))].sort()

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <section id="projects" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '4rem' }}
        >
          <p className="section-subtitle">Selected Work</p>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
            <h2 className="section-title">
              Recent{' '}
              <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Projects</em>
            </h2>

            {/* Filter tabs */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  style={{
                    padding: '0.4rem 1rem',
                    background: 'transparent',
                    border: `1px solid ${active === cat ? 'var(--accent)' : 'var(--border)'}`,
                    color: active === cat ? 'var(--accent)' : 'var(--text-secondary)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.7rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    borderRadius: '2px',
                    transition: 'all var(--transition)',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div className="divider" style={{ marginTop: '2rem' }} />
        </motion.div>

        {/* Grid */}
        <motion.div layout style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '1.5rem',
        }}>
          <AnimatePresence>
            {filtered.map((p, i) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  position: 'relative',
                }}
                whileHover="hover"
              >
                {/* Image */}
                <div style={{ height: 220, overflow: 'hidden', position: 'relative' }}>
                  <motion.img
                    src={p.img}
                    alt={p.title}
                    variants={{ hover: { scale: 1.06 } }}
                    transition={{ duration: 0.5 }}
                    style={{
                      width: '100%', height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      filter: 'grayscale(15%)',
                    }}
                  />
                  {/* Hover overlay */}
                  <motion.div
                    variants={{ hover: { opacity: 1 } }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      position: 'absolute', inset: 0,
                      background: 'rgba(10,10,10,0.85)',
                      backdropFilter: 'blur(4px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '1rem',
                    }}
                  >
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          padding: '0.6rem 1.25rem',
                          border: '1px solid var(--accent)',
                          color: 'var(--accent)',
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.7rem',
                          letterSpacing: '0.15em',
                          textTransform: 'uppercase',
                          textDecoration: 'none',
                          borderRadius: '2px',
                          transition: 'all 0.3s',
                        }}
                        onClick={e => e.stopPropagation()}
                      >Live Demo</a>
                    )}
                    {p.code && (
                      <a
                        href={p.code}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          padding: '0.6rem 1.25rem',
                          border: '1px solid var(--border)',
                          color: 'var(--text-secondary)',
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.7rem',
                          letterSpacing: '0.15em',
                          textTransform: 'uppercase',
                          textDecoration: 'none',
                          borderRadius: '2px',
                          transition: 'all 0.3s',
                        }}
                        onClick={e => e.stopPropagation()}
                      >Source</a>
                    )}
                  </motion.div>
                </div>

                {/* Content */}
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.4rem' }}>
                    <span style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.65rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: 'var(--text-accent)',
                    }}>{p.category}</span>
                    {p.badge && (
                      <span style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.65rem',
                        padding: '0.2rem 0.6rem',
                        background: 'rgba(201,169,110,0.12)',
                        border: '1px solid var(--accent)',
                        borderRadius: '2px',
                        color: 'var(--accent)',
                        letterSpacing: '0.05em',
                        whiteSpace: 'nowrap',
                      }}>{p.badge}</span>
                    )}
                  </div>

                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.3rem',
                    fontWeight: 300,
                    color: 'var(--text-primary)',
                    marginBottom: '0.5rem',
                    lineHeight: 1.2,
                  }}>{p.title}</h3>

                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.82rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                    marginBottom: '1.25rem',
                  }}>{p.description}</p>

                  {/* Tech chips */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {p.tech.map(t => (
                      <span key={t} style={{
                        padding: '0.2rem 0.6rem',
                        border: '1px solid var(--border)',
                        borderRadius: '2px',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.65rem',
                        letterSpacing: '0.08em',
                        color: 'var(--text-dim)',
                      }}>{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}