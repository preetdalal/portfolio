'use client';

import React from 'react';
import { PROJECTS } from '@/data/projects';
import { FolderGit2, Github, ExternalLink } from 'lucide-react';

export default function ProjectsGrid() {
  return (
    <section className="py-16 sm:py-20 border-b border-white/[0.07]" id="projects">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-8">
          <FolderGit2 className="w-5 h-5 text-accent-sky" />
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight uppercase">
            Projects
          </h2>
        </div>

        {/* Project List */}
        <div className="space-y-6">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="bg-bg-card border border-white/[0.08] rounded-xl p-6 sm:p-7 hover:border-white/20 transition-all duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1.5">
                <div className="flex items-center gap-3">
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white transition-colors"
                      title="View GitHub"
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

                <span className="text-xs font-mono text-slate-400">
                  {project.year}
                </span>
              </div>

              {/* Technologies Subtitle */}
              <div className="text-xs sm:text-sm font-mono text-accent-sky mb-4">
                {project.subtitle}
              </div>

              {/* Bullet Points */}
              <ul className="space-y-2.5 mb-5 text-slate-300 text-sm leading-relaxed">
                {project.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-accent-sky font-bold select-none">›</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="pt-3 border-t border-white/[0.07] flex flex-wrap gap-1.5">
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
