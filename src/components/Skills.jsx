import React from 'react'
import { motion } from 'framer-motion'
import { 
  FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap, FaGitAlt, FaSass, FaDatabase, FaLock, FaShieldAlt
} from 'react-icons/fa'
import { 
  SiTailwindcss, SiFramer, SiRedux, SiVite, SiNextdotjs, SiTypescript, SiAxios
} from 'react-icons/si'
// استبدال المكتبة التي تسببت في الخطأ بمكتبة Hi المستقرة جداً
import { HiLightningBolt, HiOutlineDatabase } from 'react-icons/hi'

const skills = [
  // Core Essentials
  { name: 'Next.js 15',      icon: SiNextdotjs,  color: '#FFFFFF', level: 98 },
  { name: 'React JS',       icon: FaReact,      color: '#61DAFB', level: 99 },
  { name: 'TypeScript',     icon: SiTypescript, color: '#3178C6', level: 95 },
  { name: 'JavaScript',     icon: FaJsSquare,   color: '#F7DF1E', level: 98 },
  
  // State & Data Management
  { name: 'Zustand',        icon: HiOutlineDatabase, color: '#433929', level: 96 }, 
  { name: 'Redux Toolkit',  icon: SiRedux,      color: '#764ABC', level: 92 },
  { name: 'TanStack Query', icon: HiLightningBolt, color: '#FF4154', level: 94 }, 
  { name: 'Axios',          icon: SiAxios,      color: '#5A29E4', level: 95 },

  // Styling & UI
  { name: 'Tailwind CSS',   icon: SiTailwindcss,color: '#38BDF8', level: 99 },
  { name: 'Framer Motion',  icon: SiFramer,     color: '#FF0080', level: 95 },
  { name: 'Sass / SCSS',    icon: FaSass,       color: '#CC6699', level: 90 },
  { name: 'Bootstrap',      icon: FaBootstrap,  color: '#7952B3', level: 85 },

  // Auth & Backend Integration
  { name: 'Auth.js (NextAuth)', icon: FaLock,     color: '#FFFFFF', level: 93 }, 
  { name: 'Zod (Validation)',  icon: FaShieldAlt, color: '#3068B7', level: 94 },
  { name: 'Git & GitHub',   icon: FaGitAlt,     color: '#F05032', level: 92 },

  // Basics
  { name: 'Vite',           icon: SiVite,       color: '#646CFF', level: 95 },
  { name: 'HTML5',          icon: FaHtml5,      color: '#E34F26', level: 100 },
  { name: 'CSS3',           icon: FaCss3Alt,    color: '#1572B6', level: 99 },
]

export default function Skills() {
  return (
    <section id="skills" style={{ 
      background: 'var(--bg-primary)', 
      padding: '100px 0',
      minHeight: '100vh' 
    }}>
      <div className="container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <p className="section-subtitle">Technical Arsenal</p>
          <h2 className="section-title">
            Skills &{' '}
            <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Technologies</em>
          </h2>
          <div className="divider divider-center" />
        </motion.div>

        {/* Grid Container */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
          gap: '1.5rem',
        }}>
          {skills.map((skill, i) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03, duration: 0.5 }}
                whileHover={{ y: -8, borderColor: 'var(--accent)', boxShadow: '0 10px 30px -15px rgba(201,169,110,0.3)' }}
                style={{
                  background: 'var(--bg-card)',
                  padding: '2rem 1.25rem',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                  cursor: 'default',
                  transition: 'all 0.3s ease',
                }}
              >
                <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    gap: '1rem', 
                    textAlign: 'center' 
                }}>
                  <div style={{ 
                    padding: '1rem', 
                    background: 'rgba(255,255,255,0.03)', 
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Icon style={{ fontSize: '2.5rem', color: skill.color, flexShrink: 0 }} />
                  </div>
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                  }}>{skill.name}</span>
                </div>

                <div style={{ marginTop: 'auto' }}>
                  <div style={{
                    height: 2,
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: 10,
                    overflow: 'hidden',
                    marginBottom: '0.5rem'
                  }}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.2 + i * 0.02, ease: "circOut" }}
                      style={{
                        height: '100%',
                        background: `linear-gradient(90deg, var(--accent), ${skill.color})`,
                      }}
                    />
                  </div>
                  
                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <span style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.65rem',
                      color: 'var(--text-dim)',
                      fontWeight: 'bold'
                    }}>{skill.level}%</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      <style>{`
        #skills { position: relative; }
        .divider-center { margin: 1.5rem auto; width: 60px; height: 3px; background: var(--accent); }
        .section-subtitle { color: var(--accent); font-size: 0.9rem; text-transform: uppercase; letter-spacing: 2px; }
        .section-title { font-size: 2.5rem; margin-top: 0.5rem; color: var(--text-primary); }
        
        @media (max-width: 768px) {
          .section-title { font-size: 2rem; }
          .container { padding: 0 20px; }
        }
      `}</style>
    </section>
  )
}