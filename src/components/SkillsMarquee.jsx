import React from 'react'
import { skills } from '../data/skills'

const loop = [...skills, ...skills]

export default function SkillsMarquee() {
  return (
    <section id="skills" className="relative py-16 border-y border-ink-line overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10 mb-8">
        <p className="eyebrow">$ cat ./skills.js</p>
      </div>

      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {loop.map((skill, i) => (
          <div key={i} className="flex items-center shrink-0">
            <span className="font-display text-4xl md:text-6xl text-paper/90 px-6 md:px-8 whitespace-nowrap">
              {skill}
            </span>
            <span className="w-2 h-2 rounded-full bg-signal-amber/70 shrink-0" />
          </div>
        ))}
      </div>
    </section>
  )
}
