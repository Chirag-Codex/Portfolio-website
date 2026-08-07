import React from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/profile'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 }
  }
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
}

const photo = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.35 } }
}

export default function Hero() {
  return (
    <section className="relative pt-32 md:pt-40 pb-20 px-6 md:px-10 overflow-hidden">
      <div className="absolute inset-0 bg-grain pointer-events-none" />
      <div
        className="absolute -top-40 right-[-10%] w-[520px] h-[520px] rounded-full blur-[120px] opacity-25 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #6E5BFF, transparent 70%)' }}
      />
      <div
        className="absolute top-40 left-[-10%] w-[420px] h-[420px] rounded-full blur-[120px] opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #FFB74A, transparent 70%)' }}
      />

      <div className="max-w-5xl mx-auto relative grid md:grid-cols-[1fr_auto] gap-12 md:gap-10 items-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* terminal chrome bar */}
          <motion.div variants={item} className="flex items-center gap-2 mb-8">
            <span className="chrome-dot bg-[#FF5F57]" />
            <span className="chrome-dot bg-[#FEBC2E]" />
            <span className="chrome-dot bg-[#28C840]" />
            <span className="eyebrow ml-3">~/portfolio — zsh</span>
          </motion.div>

          <motion.p variants={item} className="font-mono text-sm text-signal-violetSoft mb-5">
            <span className="text-paper-faint">$</span> whoami
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-[13vw] leading-[0.95] md:text-[6.4rem] md:leading-[0.95] font-semibold text-paper tracking-tight"
          >
            {profile.name}
            <span className="inline-block w-[0.09em] h-[0.8em] bg-signal-amber ml-2 align-middle animate-blink" />
          </motion.h1>

          <motion.p
            variants={item}
            className="font-display italic text-2xl md:text-3xl text-paper-dim mt-4 max-w-2xl"
          >
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="font-mono text-sm px-6 py-3 rounded-full bg-signal-violet text-white hover:bg-signal-violetSoft transition-colors"
            >
              view work →
            </a>
            <a
              href="#contact"
              className="font-mono text-sm px-6 py-3 rounded-full border border-ink-line text-paper hover:border-paper transition-colors"
            >
              get in touch
            </a>
            <span className="eyebrow flex items-center gap-2 ml-1">
              <span className="w-1.5 h-1.5 rounded-full bg-signal-amber animate-pulse" />
              {profile.location}
            </span>
          </motion.div>
        </motion.div>

        {/* profile photo */}
        <motion.div
          variants={photo}
          initial="hidden"
          animate="show"
          className="relative mx-auto md:mx-0 shrink-0"
        >
          <div className="relative w-48 h-48 md:w-64 md:h-64 animate-floaty">
            {/* rotating dashed ring, echoes the browser-chrome / terminal motif */}
            <div
              className="absolute -inset-4 rounded-full border border-dashed border-signal-violet/30"
              style={{ animation: 'spin 22s linear infinite' }}
            />
            <div
              className="absolute -inset-8 rounded-full blur-2xl opacity-30 pointer-events-none"
              style={{ background: 'radial-gradient(circle, #FFB74A, transparent 70%)' }}
            />
            <img
              src="/images/profile.jpg"
              alt={`Portrait of ${profile.name}`}
              className="relative w-full h-full rounded-full object-cover border-2 border-ink-line shadow-2xl shadow-black/50"
            />
            {/* status chip, same "live" language used elsewhere on the site */}
            <span className="absolute bottom-2 right-2 flex items-center gap-1.5 bg-ink-soft border border-ink-line rounded-full pl-2 pr-3 py-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal-amber opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-signal-amber" />
              </span>
              <span className="font-mono text-[10px] text-paper-dim">open to work</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
