'use client';

import React, { useState } from 'react';
import { PROJECTS } from '@/data/projects';
import { ExternalLink, Github } from 'lucide-react';

export default function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'devops', label: 'DevOps & Cloud' },
    { id: 'backend', label: 'Backend Systems' },
    { id: 'aiml', label: 'Applied MLOps' },
  ];

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.category === activeFilter;
  });

  return (
    <section className="py-20 border-b border-white/[0.07]" id="projects">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-xs font-mono font-semibold text-accent-sky uppercase tracking-wider block mb-2">
              Featured Work
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Engineered Projects
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto p-1 bg-[#12151c] rounded-lg border border-white/[0.08] w-fit">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-3.5 py-1.5 rounded-md text-xs font-mono font-medium transition-colors cursor-pointer whitespace-nowrap ${
                  activeFilter === f.id
                    ? 'bg-accent-cobalt text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-bg-card border border-white/[0.07] rounded-xl p-6 sm:p-7 flex flex-col justify-between hover:border-white/20 transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-accent-sky font-semibold tracking-wider">
                    {project.categoryLabel}
                  </span>
                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition-colors"
                        title="View GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition-colors"
                        title="View Live Site"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="font-heading text-xl font-bold text-white mb-2 leading-snug">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {project.summary}
                </p>

                <ul className="space-y-2 mb-6">
                  {project.points.map((pt, i) => (
                    <li key={i} className="text-xs text-slate-300 flex items-start gap-2 leading-relaxed">
                      <span className="text-accent-sky font-bold">›</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="pt-4 border-t border-white/[0.07] flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono text-slate-400 bg-white/[0.03] border border-white/[0.06] px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
