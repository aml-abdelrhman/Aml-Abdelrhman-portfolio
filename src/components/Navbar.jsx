import React, { useState, useEffect } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { FaSun, FaMoon } from 'react-icons/fa'
  
const navLinks = [
  {id:'home', label:'Home'},
  {id:'About me', label:'About me'},
  {id:'skills', label:'Skills'},
  {id:'projects', label:'Projects'},
  {id:'contact', label:'Contact'},
]

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light'
    return localStorage.getItem('theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  })

  useEffect(() => {
    const root = window.document.documentElement
    if (theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-white/60 dark:bg-slate-800/60 backdrop-blur border-slate-200 dark:border-slate-800">
      <div className="flex items-center justify-between max-w-6xl p-4 mx-auto">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 font-bold text-white rounded-md bg-gradient-to-tr from-accent to-sky-500">A</div>
          <div className="font-semibold">AML ABDELRHMAN ABDELHADY</div>
        </div>

        <nav className="items-center hidden gap-6 md:flex">
          {navLinks.map(l => (
          <ScrollLink key={l.id} to={l.id} smooth duration={500} className="inline-block transition-all duration-500 ease-in-out cursor-pointer hover:text-accent hover:scale-110 hover:font-bold hover:tracking-wide">{l.label}</ScrollLink>

          ))}
          <a href="Aml-Abdelrhman-CV.pdf" download="Aml-Abdelrhman-CV.pdf" target="_blank" rel="noopener noreferrer" className="text-white btn bg-accent">Download CV</a>
          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="p-2 rounded-md">
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="p-2 rounded-md">
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
          <button onClick={() => setOpen(!open)} className="p-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="bg-white border-t md:hidden dark:bg-slate-900 border-slate-200 dark:border-slate-800">
          <div className="flex flex-col gap-3 p-4">
            {navLinks.map(l => (
              <ScrollLink key={l.id} to={l.id} smooth duration={500} onClick={() => setOpen(false)} className="py-2 cursor-pointer">
                {l.label}
              </ScrollLink>
            ))}
            <a
              href="Aml-Abdelrhman-CV.pdf"
              download="Aml-Abdelrhman-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 font-semibold text-white transition-colors duration-300 bg-pink-500 rounded-md shadow-lg hover:bg-pink-600"
             >
              Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
