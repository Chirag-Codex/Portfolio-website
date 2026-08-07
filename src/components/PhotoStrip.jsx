import React from 'react'
import { projects } from '../data/projects'

const shots = projects.flatMap((p) => p.images).filter(Boolean)
const loopShots = [...shots, ...shots]

export default function PhotoStrip() {
  if (shots.length === 0) return null

  return (
    <section className="relative py-6 border-y border-ink-line bg-ink-soft overflow-hidden">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {loopShots.map((shot, i) => (
          <div
            key={i}
            className="relative shrink-0 w-[260px] h-[150px] mx-3 rounded-lg overflow-hidden border border-ink-line group"
          >
            <img
              src={shot.src}
              alt={shot.label}
              className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 scale-[1.4] group-hover:scale-[1.45]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <span className="absolute bottom-2 left-3 font-mono text-[10px] text-paper-dim uppercase tracking-wide">
              {shot.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
