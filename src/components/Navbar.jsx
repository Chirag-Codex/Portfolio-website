import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'work', href: '/#work' },
  { label: 'about', href: '/#about' },
  { label: 'skills', href: '/#skills' },
  { label: 'contact', href: '/#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-ink/85 backdrop-blur-md border-b border-ink-line' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="flex items-center gap-1.5">
            <span className="chrome-dot bg-signal-amber/80" />
            <span className="chrome-dot bg-signal-violet/80" />
            <span className="chrome-dot bg-paper/20" />
          </span>
          <span className="font-mono text-sm text-paper tracking-tight ml-1">
            chirag<span className="text-signal-violet">.dev</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="eyebrow text-paper-dim hover:text-paper transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Link
            to="/projects"
            className={`eyebrow transition-colors ${
              location.pathname === '/projects' ? 'text-signal-amber' : 'text-paper-dim hover:text-paper'
            }`}
          >
            all projects
          </Link>
        </nav>

        <a
          href="mailto:chirag@gmail.com"
          className="hidden md:inline-flex items-center gap-2 font-mono text-xs px-4 py-2 rounded-full border border-ink-line text-paper hover:border-signal-violet hover:text-signal-violetSoft transition-colors"
        >
          say hello
        </a>
      </div>
    </header>
  )
}
