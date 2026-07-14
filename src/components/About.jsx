import React from 'react'
import { motion } from 'framer-motion'

const highlights = [
  { label: 'Projects', value: '13+' },
  { label: 'Technologies', value: '15+' },
  { label: 'Experience', value: '1+ Yrs' },
]

export default function About() {
  return (
    <section id="about" className="relative py-20 lg:py-32 overflow-hidden bg-[var(--bg-secondary)]">
      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-30" />

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-24 items-center">

          {/* Left — heading block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <p className="section-subtitle">About me</p>
            <h2 className="section-title text-[2.5rem] lg:text-[3.5rem] leading-tight">
              Crafting <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Digital</em><br />
              Experiences
            </h2>
            <div className="mx-auto lg:mx-0 divider" />

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 lg:flex lg:flex-col lg:gap-8">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex flex-col items-center gap-2 lg:flex-row lg:items-baseline lg:gap-4"
                >
                  <span className="font-[var(--font-display)] text-[2rem] lg:text-[2.5rem] text-[var(--accent)] font-light leading-none">{h.value}</span>
                  <span className="font-[var(--font-body)] text-[0.6rem] lg:text-[0.72rem] tracking-[0.15em] uppercase text-[var(--text-dim)]">{h.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — text + skills chips */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <p className="font-[var(--font-body)] text-base lg:text-lg leading-[1.8] text-[var(--text-secondary)] mb-6">
              I am a passionate{' '}
              <span className="text-[var(--text-accent)] font-[var(--font-display)] text-[1.1rem] italic">
                Full-Stack Developer
              </span>{' '}
              with hands-on experience building complete web platforms — from database design
              and backend logic to modern, responsive, user-friendly interfaces.
            </p>
            <p className="font-[var(--font-body)] text-[0.95rem] leading-[1.8] text-[var(--text-secondary)] mb-10">
              I have worked on multiple personal and collaborative projects — from a full-stack
              medical booking platform with separate admin and doctor dashboards, to e-commerce
              platforms and business dashboards. Each project deepened my expertise in API design,
              database architecture, authentication flows, deployment pipelines, and crafting
              polished, high-performance user experiences.
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
              {['React.js','Next.js','TypeScript','Laravel','Supabase','MySQL','PostgreSQL','Tailwind CSS','REST APIs','Git & GitHub'].map(tech => (
                <span key={tech} className="tag">{tech}</span>
              ))}
            </div>

            {/* CTA */}
            <div className="flex justify-center mt-10 lg:justify-start">
              <a href="#contact" className="btn-primary">Get In Touch</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}