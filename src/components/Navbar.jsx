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
    <header className="fixed w-full top-0 z-50 bg-white/60 dark:bg-slate-800/60 backdrop-blur border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-gradient-to-tr from-accent to-sky-500 flex items-center justify-center text-white font-bold">A</div>
          <div className="font-semibold">AML ABDELRHMAN ABDELHADY</div>
        </div>

        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map(l => (
          <ScrollLink key={l.id} to={l.id} smooth duration={500} className="inline-block cursor-pointer transition-all duration-500 ease-in-out hover:text-accent hover:scale-110 hover:font-bold hover:tracking-wide">{l.label}</ScrollLink>

          ))}
          <a href="/CV.pdf" download className="btn bg-accent text-white">Download CV</a>
          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="p-2 rounded-md">
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
        </nav>

        <div className="md:hidden flex items-center gap-3">
          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="p-2 rounded-md">
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
          <button onClick={() => setOpen(!open)} className="p-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
          <div className="flex flex-col p-4 gap-3">
            {navLinks.map(l => (
              <ScrollLink key={l.id} to={l.id} smooth duration={500} onClick={() => setOpen(false)} className="cursor-pointer py-2">
                {l.label}
              </ScrollLink>
            ))}
            <a
              href="Aml-Abdelrhman-CV.pdf"
              download
              className="px-4 py-2 rounded-md bg-pink-500 text-white font-semibold shadow-lg hover:bg-pink-600 transition-colors duration-300"
             >
              Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
