import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

const contacts = [
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'aml-abdelrhman',
    url: 'https://github.com/aml-abdelrhman',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'aml-abdelrhman',
    url: 'https://linkedin.com/in/aml-abdelrhman-8b849a372',
  },
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'amlabdelrhman960@gmail.com',
    url: 'https://mail.google.com/mail/?view=cm&fs=1&to=amlabdelrhman960@gmail.com',
  },
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    value: '+201019484346',
    url: 'https://wa.me/201019484346',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sending, setSending] = useState(false)

  const handleChange = e =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setSending(true)
    try {
      await emailjs.send('service_j271jqg', 'template_gj2flzj', form, 'SbDomgQQVDv-sjahf')
      alert('Message sent successfully!')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      console.error('EmailJS Error:', err);
      alert('Failed to send message. Please try again.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <p className="section-subtitle">Let's work together</p>
          <h2 className="section-title">
            Get In{' '}
            <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Touch</em>
          </h2>
          <div className="divider divider-center" />
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.5fr',
          gap: '5rem',
          alignItems: 'start',
        }}>

          {/* Left — contact links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '0' }}
          >
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.9rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.8,
              marginBottom: '2.5rem',
            }}>
              I'm always open to new opportunities and collaborations.
              Whether you have a project in mind or just want to say hello — feel free to reach out.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {contacts.map((c, i) => {
                const Icon = c.icon
                return (
                  <motion.a
                    key={c.label}
                    href={c.url}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '1.25rem 0',
                      borderBottom: '1px solid var(--border)',
                      textDecoration: 'none',
                      color: 'var(--text-secondary)',
                      transition: 'all var(--transition)',
                    }}
                    className="contact-link"
                  >
                    <Icon style={{ fontSize: '1.1rem', color: 'var(--text-dim)', flexShrink: 0, transition: 'color var(--transition)' }} className="contact-icon" />
                    <div>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-dim)', marginBottom: '0.1rem' }}>{c.label}</p>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem' }}>{c.value}</p>
                    </div>
                    <span style={{ marginLeft: 'auto', fontSize: '0.75rem', opacity: 0.4 }}>↗</span>
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                { name: 'name',    type: 'text',  placeholder: 'Your Name'    },
                { name: 'email',   type: 'email', placeholder: 'Your Email'   },
              ].map(field => (
                <div key={field.name}>
                  <label style={{
                    display: 'block',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.68rem',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--text-dim)',
                    marginBottom: '0.6rem',
                  }}>{field.placeholder}</label>
                  <input
                    name={field.name}
                    type={field.type}
                    value={form[field.name]}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.875rem 1rem',
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius)',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9rem',
                      outline: 'none',
                      transition: 'border-color var(--transition)',
                    }}
                    className="form-input"
                  />
                </div>
              ))}

              <div>
                <label style={{
                  display: 'block',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.68rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--text-dim)',
                  marginBottom: '0.6rem',
                }}>Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  style={{
                    width: '100%',
                    padding: '0.875rem 1rem',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius)',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem',
                    outline: 'none',
                    resize: 'vertical',
                    transition: 'border-color var(--transition)',
                  }}
                  className="form-input"
                />
              </div>

              <motion.button
                type="submit"
                disabled={sending}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary"
                style={{ alignSelf: 'flex-start', cursor: sending ? 'wait' : 'pointer' }}
              >
                {sending ? 'Sending...' : 'Send Message'}
                {!sending && <span style={{ fontSize: '0.7rem' }}>→</span>}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        .contact-link:hover { color: var(--text-primary) !important; }
        .contact-link:hover .contact-icon { color: var(--accent) !important; }
        .form-input:focus { border-color: var(--accent) !important; }
        @media (max-width: 768px) {
          #contact .container > div:last-child {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  )
}