import React from 'react'
import { motion } from 'framer-motion'
import Typewriter from './Typewriter'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center min-h-screen overflow-hidden"
    >
      {/* Radial background glow */}
      <div className="absolute top-[20%] left-[55%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(201,169,110,0.06)_0%,transparent_70%)] pointer-events-none rounded-full" />

      <div className="container grid items-center grid-cols-1 gap-16 pt-24 md:grid-cols-2">

        {/* Left — text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
          className="text-center md:text-left"
        >
          {/* Eyebrow */}
          <p className="font-[var(--font-body)] text-[0.72rem] tracking-[0.3em] uppercase text-[var(--text-accent)] mt-12 md:mt-0 mb-6 flex items-center justify-center md:justify-start gap-3">
            <span className="inline-block w-[30px] h-[1px] bg-[var(--accent)]" />
            Full-Stack Developer
          </p>

          {/* Main heading */}
          <h1 className="font-[var(--font-display)] text-[clamp(3.5rem,7vw,6rem)] font-light leading-none text-[var(--text-primary)] mb-2">
            Aml
          </h1>
          <h1 className="font-[var(--font-display)] text-[clamp(3.5rem,7vw,6rem)] font-light italic leading-none text-[var(--text-accent)] mb-10">
            Abdelrhman
          </h1>

          {/* Typewriter */}
          <p className="font-[var(--font-body)] text-[0.9rem] text-[var(--text-secondary)] mb-3">
            Currently working with
          </p>
          <div className="text-[var(--text-accent)] italic mb-12 font-[var(--font-display)] text-[1.4rem]">
            <Typewriter words={['React.js', 'Next.js', 'Laravel', 'TypeScript', 'MySQL', 'Supabase']} />
          </div>

          {/* Description */}
          <p className="font-[var(--font-body)] text-[0.9rem] leading-[1.8] text-[var(--text-secondary)] max-w-[420px] mb-12 mx-auto md:mx-0">
            Building complete web platforms — from database design and APIs
            to polished, high-performance interfaces.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4 md:justify-start">
            <a href="#projects" className="btn-primary">
              View Work
              <span className="text-[0.7rem]">↘</span>
            </a>
            <a
              href="Aml-Abdelrhman-CV.pdf"
              download
              className="btn-ghost"
            >
              Download CV
            </a>
          </div>
        </motion.div>

        {/* Right — portrait + decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="relative flex items-center justify-center"
        >
          {/* Rotating border */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="absolute w-[280px] h-[280px] md:w-[340px] md:h-[340px] border border-transparent border-l-[var(--accent)] border-r-[var(--accent)] rounded-full opacity-30"
          />

          {/* Photo frame */}
          <div className="w-[240px] h-[300px] md:w-[280px] md:h-[340px] relative rounded-[4px] overflow-hidden border border-[var(--border)]">
            <div className="w-full h-full bg-[url(/aml.jpeg)] bg-cover bg-[center_top] grayscale-[20%] contrast-[1.1]" />
            {/* gold overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(201,169,110,0.15)]" />
          </div>

          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-5 -right-2 bg-[var(--bg-secondary)] border border-[var(--border)] p-[0.75rem_1.25rem] rounded-[4px]"
          >
            <p className="font-[var(--font-display)] text-[1.8rem] text-[var(--accent)] leading-none">1+</p>
            <p className="font-[var(--font-body)] text-[0.65rem] tracking-[0.15em] uppercase text-[var(--text-secondary)]">Years Exp.</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--text-dim)] font-[var(--font-body)] text-[0.65rem] tracking-[0.2em] uppercase"
      >
        <span>Scroll</span>
        <span className="text-[0.7rem]">↓</span>
      </motion.div>
    </section>
  )
}