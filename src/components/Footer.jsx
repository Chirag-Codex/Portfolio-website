import React from 'react'
import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="border-t border-ink-line px-6 md:px-10 py-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="chrome-dot bg-signal-amber/60" />
          <span className="chrome-dot bg-signal-violet/60" />
          <span className="chrome-dot bg-paper/15" />
          <span className="font-mono text-xs text-paper-faint ml-2">
            chirag.dev — process exited (0)
          </span>
        </div>
        <p className="font-mono text-xs text-paper-faint">
          © {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind.
        </p>
      </div>
    </footer>
  )
}
