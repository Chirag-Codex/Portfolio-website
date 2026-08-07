import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/profile'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.contact.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      // clipboard unavailable — no-op, mailto link still works
    }
  }

  return (
    <section id="contact" className="relative py-28 md:py-36 px-6 md:px-10 border-t border-ink-line">
      <div className="max-w-4xl mx-auto text-center">
        <p className="eyebrow mb-4">$ ./contact --open</p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-6xl text-paper mb-6"
        >
          Building something?
          <br />
          <span className="italic text-signal-violetSoft">Let's talk it through.</span>
        </motion.h2>

        <p className="text-paper-dim max-w-md mx-auto mb-10">
          Open to full-stack and AI-agent roles, internships, and freelance builds. Fastest way to reach me is email.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href={`mailto:${profile.contact.email}`}
            className="inline-flex items-center gap-2 font-mono text-sm px-6 py-3.5 rounded-full bg-signal-violet text-white hover:bg-signal-violetSoft transition-colors"
          >
            <Mail size={15} />
            {profile.contact.email}
          </a>
          <button
            onClick={copyEmail}
            className="font-mono text-xs px-4 py-3.5 rounded-full border border-ink-line text-paper-dim hover:text-paper hover:border-paper transition-colors"
          >
            {copied ? 'copied!' : 'copy'}
          </button>
        </div>

        <div className="flex items-center justify-center gap-6">
          <a
            href={profile.contact.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-paper-dim hover:text-paper transition-colors font-mono text-sm"
          >
            <Github size={16} /> GitHub <ArrowUpRight size={12} />
          </a>
          <a
            href={profile.contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-paper-dim hover:text-paper transition-colors font-mono text-sm"
          >
            <Linkedin size={16} /> LinkedIn <ArrowUpRight size={12} />
          </a>
        </div>
      </div>
    </section>
  )
}
