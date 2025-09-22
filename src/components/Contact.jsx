import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sending, setSending] = useState(false)

  const handleChange = e =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setSending(true)
    try {
      await emailjs.send(
        'service_gwgpibp',
        'template_33hbt8c',
        form,
        'uLdUc3VE0kQDYBMZZ'
      )
      alert('Message sent successfully!')
      setForm({ name: '', email: '', message: '' })
    } catch (error) {
      alert('Failed to send message, try again later.')
      console.error(error)
    } finally {
      setSending(false)
    }
  }

  const contacts = [
    { icon: <FaGithub size={30} />, label: 'GitHub', url: 'https://github.com/aml-abdelrhman' },
    { icon: <FaLinkedin size={30} />, label: 'LinkedIn', url: 'https://linkedin.com/in/aml-abdelrhman-8b849a372' },
    { icon: <FaEnvelope size={30} />, label: 'Email', url: "https://mail.google.com/mail/?view=cm&fs=1&to=amlabdelrhman960@gmail.com" },
    { icon: <FaWhatsapp size={30} />, label: 'WhatsApp', url: 'https://wa.me/01063229052' },
  ]

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900/40">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white text-center">
          Contact
        </h2>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex flex-col gap-6 md:w-1/3">
            {contacts.map((c, idx) => (
              <motion.a
                key={idx}
                href={c.url}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05, backgroundColor: '#ec4899', color: 'white' }}
                className="flex items-center gap-4 p-4 border rounded-md
                           bg-white dark:bg-slate-800
                           text-gray-900 dark:text-white
                           shadow-md transition-all duration-300"
              >
                {c.icon}
                <span className="font-semibold">{c.label}</span>
              </motion.a>
            ))}
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="flex-1 flex flex-col gap-6 items-center"
          >
            {['name', 'email', 'message'].map((field, idx) => (
              <motion.div
                key={field}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="w-full"
              >
                {field !== 'message' ? (
                  <input
                    name={field}
                    type={field === 'email' ? 'email' : 'text'}
                    value={form[field]}
                    onChange={handleChange}
                    placeholder={field === 'name' ? 'Your name' : 'Email'}
                    required
                    className="w-full p-4 border rounded-md text-center
                               text-gray-900 dark:text-gray-800
                               bg-white
                               placeholder-gray-400 dark:placeholder-gray-600
                               focus:border-pink-500 focus:scale-105 focus:outline-none
                               transition-all duration-300"
                  />
                ) : (
                  <textarea
                    name={field}
                    value={form[field]}
                    onChange={handleChange}
                    placeholder="Message"
                    rows={6}
                    required
                    className="w-full p-4 border rounded-md text-center
                               text-gray-900 dark:text-gray-800
                               bg-white
                               placeholder-gray-400 dark:placeholder-gray-600
                               focus:border-pink-500 focus:scale-105 focus:outline-none
                               transition-all duration-300"
                  />
                )}
              </motion.div>
            ))}

            <motion.button
              type="submit"
              disabled={sending}
              whileHover={{ scale: 1.05, backgroundColor: '#db2777' }}
              className="w-full md:w-1/3 px-6 py-3 rounded-md bg-pink-500 text-white font-semibold shadow-lg transition-all duration-300"
            >
              {sending ? 'Sending...' : 'Send Message'}
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  )
}
