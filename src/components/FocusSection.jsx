import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { profile } from '../data/profile'

export default function FocusSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end']
  })

  const words = profile.roles
  const count = words.length

  return (
    <section id="about" ref={ref} className="relative" style={{ height: `${count * 90}vh` }}>
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        <p className="eyebrow mb-6">currently focused on</p>

        <div className="relative h-24 md:h-32 flex items-center justify-center w-full">
          {words.map((word, i) => {
            const segment = 1 / count
            const start = i * segment
            const end = start + segment
            const mid = (start + end) / 2

            const opacity = useTransform(
              scrollYProgress,
              [start, start + segment * 0.25, mid, end - segment * 0.25, end],
              [0, 1, 1, 1, 0]
            )
            const y = useTransform(
              scrollYProgress,
              [start, mid, end],
              [40, 0, -40]
            )

            return (
              <motion.h2
                key={word}
                style={{ opacity, y }}
                className="absolute font-display italic font-medium text-[10vw] md:text-7xl text-center whitespace-nowrap"
              >
                <span className="text-paper-faint font-mono not-italic text-[0.3em] align-top mr-3">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className={i % 2 === 0 ? 'text-signal-violetSoft' : 'text-signal-amberSoft'}>
                  {word}
                </span>
              </motion.h2>
            )
          })}
        </div>

        <p className="mt-10 max-w-lg text-center text-paper-dim text-sm md:text-base leading-relaxed">
          {profile.bio[0]}
        </p>
      </div>
    </section>
  )
}
