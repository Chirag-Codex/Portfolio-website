import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

export default function ProjectsIndex() {
  const [filter, setFilter] = useState('All')
  const categories = useMemo(
    () => ['All', ...new Set(projects.map((p) => p.category))],
    []
  )
  const visible = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section className="pt-32 md:pt-40 pb-28 px-6 md:px-10 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <p className="eyebrow mb-3">$ ls -la ./projects --all</p>
        <h1 className="font-display text-4xl md:text-6xl text-paper mb-4">
          All <span className="italic text-signal-violetSoft">projects</span>
        </h1>
        <p className="text-paper-dim max-w-xl mb-10">
          Everything I've shipped, from full-stack dashboards to LLM-backed assistants — filtered by kind.
        </p>

        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`font-mono text-xs px-4 py-2 rounded-full border transition-colors ${
                filter === cat
                  ? 'bg-signal-violet border-signal-violet text-white'
                  : 'border-ink-line text-paper-dim hover:text-paper hover:border-paper'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 gap-6 md:gap-8">
          {visible.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </motion.div>

        {visible.length === 0 && (
          <p className="text-paper-dim font-mono text-sm mt-10">
            no projects match this filter yet.
          </p>
        )}
      </div>
    </section>
  )
}
