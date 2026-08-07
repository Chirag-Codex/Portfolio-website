import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function SelectedWorks() {
  const featured = projects.slice(0, 4)

  return (
    <section id="work" className="relative py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-14">
          <div>
            <p className="eyebrow mb-3">$ ls ./projects</p>
            <h2 className="font-display text-4xl md:text-5xl text-paper">
              Selected <span className="italic text-signal-violetSoft">work</span>
            </h2>
          </div>
          <Link
            to="/projects"
            className="font-mono text-xs px-4 py-2 rounded-full border border-ink-line text-paper-dim hover:text-paper hover:border-paper transition-colors"
          >
            view all →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
