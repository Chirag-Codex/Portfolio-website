import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Lock } from 'lucide-react'

const accentMap = {
  violet: {
    text: 'text-signal-violetSoft',
    ring: 'group-hover:border-signal-violet/60',
    dot: 'bg-signal-violet',
    tagBg: 'bg-signal-violet/10',
    tagText: 'text-signal-violetSoft',
    tagBorder: 'border-signal-violet/30'
  },
  amber: {
    text: 'text-signal-amberSoft',
    ring: 'group-hover:border-signal-amber/60',
    dot: 'bg-signal-amber',
    tagBg: 'bg-signal-amber/10',
    tagText: 'text-signal-amberSoft',
    tagBorder: 'border-signal-amber/30'
  }
}

export default function ProjectCard({ project, index }) {
  const [open, setOpen] = useState(false)
  const [activeImg, setActiveImg] = useState(0)
  const accent = accentMap[project.accent] || accentMap.violet
  const hasImages = project.images && project.images.length > 0

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, delay: (index % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`group rounded-2xl border border-ink-line bg-ink-soft overflow-hidden transition-colors duration-300 ${accent.ring}`}
    >
      {/* browser chrome bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-ink-softer border-b border-ink-line">
        <span className="chrome-dot bg-[#FF5F57]" />
        <span className="chrome-dot bg-[#FEBC2E]" />
        <span className="chrome-dot bg-[#28C840]" />
        <div className="flex-1 flex justify-center">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-ink text-paper-faint font-mono text-[11px] max-w-[220px] truncate">
            <Lock size={10} />
            {project.domain}
          </div>
        </div>
        <span className="eyebrow hidden sm:inline">{project.year}</span>
      </div>

      {/* screen */}
      <div className="relative aspect-[16/10] bg-ink overflow-hidden">
        {hasImages ? (
          <img
            src={project.images[activeImg].src}
            alt={`${project.name} — ${project.images[activeImg].label}`}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-ink-softer to-ink">
            <div className={`w-14 h-14 rounded-full ${accent.tagBg} border ${accent.tagBorder} flex items-center justify-center`}>
              <span className={`font-display italic text-2xl ${accent.text}`}>
                {project.name[0]}
              </span>
            </div>
            <p className="eyebrow">preview coming soon</p>
          </div>
        )}
      </div>

      {hasImages && project.images.length > 1 && (
        <div className="flex gap-1.5 px-4 pt-3">
          {project.images.map((img, i) => (
            <button
              key={img.src}
              onClick={() => setActiveImg(i)}
              aria-label={`Show ${img.label}`}
              className={`h-1 flex-1 rounded-full transition-colors ${
                i === activeImg ? accent.dot : 'bg-ink-line'
              }`}
            />
          ))}
        </div>
      )}

      {/* content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-2">
          <h3 className="font-display text-2xl text-paper">{project.name}</h3>
          <span className={`eyebrow px-2.5 py-1 rounded-full border ${accent.tagBorder} ${accent.tagBg} ${accent.tagText} shrink-0`}>
            {project.category}
          </span>
        </div>

        <p className="text-paper-dim text-sm leading-relaxed mb-4">{project.tagline}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.map((tech) => (
            <span key={tech} className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-ink text-paper-dim border border-ink-line">
              {tech}
            </span>
          ))}
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="flex items-center gap-1.5 font-mono text-xs text-paper-dim hover:text-paper transition-colors"
          aria-expanded={open}
        >
          {open ? 'hide details' : 'read more'}
          <ChevronDown size={14} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <p className="text-paper-dim text-sm leading-relaxed mt-4">{project.description}</p>
              <ul className="mt-4 space-y-2">
                {project.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm text-paper/90">
                    <span className={`mt-1.5 w-1 h-1 rounded-full ${accent.dot} shrink-0`} />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  )
}
