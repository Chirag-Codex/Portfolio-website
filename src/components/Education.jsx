import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { profile } from '../data/profile'

export default function Education() {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-4xl mx-auto">
        <p className="eyebrow mb-3">$ cat ./education.log</p>
        <h2 className="font-display text-4xl md:text-5xl text-paper mb-14">
          Where it's <span className="italic text-signal-amberSoft">built on</span>
        </h2>

        <div className="space-y-0">
          {profile.education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-5 md:gap-8 py-6 border-b border-ink-line last:border-b-0"
            >
              <div className="shrink-0 flex flex-col items-center">
                <div className="w-10 h-10 rounded-full border border-ink-line bg-ink-soft flex items-center justify-center">
                  <GraduationCap size={16} className="text-signal-violetSoft" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl text-paper">{edu.degree}</h3>
                  <span className="eyebrow">{edu.period}</span>
                </div>
                <p className="text-paper-dim text-sm mt-1">{edu.place}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mt-14">
          {profile.focusAreas.map((area) => (
            <div key={area.label} className="p-5 rounded-xl border border-ink-line bg-ink-soft">
              <p className="font-mono text-xs text-signal-amberSoft mb-2">{area.label}</p>
              <p className="text-paper-dim text-sm leading-relaxed">{area.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
