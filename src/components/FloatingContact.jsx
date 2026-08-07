import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Mail, X } from 'lucide-react'
import { profile } from '../data/profile'

export default function FloatingContact() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (dismissed) return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-1"
        >
          <a
            href={`mailto:${profile.contact.email}`}
            className="flex items-center gap-2 pl-4 pr-5 py-3 rounded-full bg-ink-soft border border-ink-line shadow-xl shadow-black/40 text-paper font-mono text-xs hover:border-signal-violet transition-colors"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal-amber opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-signal-amber" />
            </span>
            <Mail size={13} />
            let's talk
          </a>
          <button
            onClick={() => setDismissed(true)}
            aria-label="Dismiss contact button"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-ink-soft border border-ink-line text-paper-faint hover:text-paper transition-colors"
          >
            <X size={12} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
