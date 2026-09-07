'use client';

import React, { useState } from 'react';
import { PROJECTS, Project } from '@/data/projects';
import ManifestModal from './ManifestModal';
import { GitBranch, ExternalLink, FileCode, CheckCircle } from 'lucide-react';

export default function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedManifest, setSelectedManifest] = useState<{ title: string; code: string } | null>(null);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'devops', label: 'DevOps & Infrastructure' },
    { id: 'backend', label: 'Backend Microservices' },
    { id: 'aiml', label: 'Applied ML / MLOps' },
  ];

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.category === activeFilter;
  });

  return (
    <section className="relative z-10 py-20 border-b border-white/[0.08]" id="projects">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col mb-8">
          <span className="font-mono text-xs font-semibold text-brand-ice uppercase tracking-wider px-3 py-1 rounded bg-brand-ice/10 border border-brand-ice/20 w-fit mb-3">
            Production Implementations
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2">
            Engineered Projects &amp; Deployments
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Production systems, containerized microservices, and MLOps deployment architectures. Inspect deployment manifests and Docker configurations directly.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2.5 mb-10">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`font-mono text-xs sm:text-sm px-4 py-2 rounded transition-all duration-150 cursor-pointer ${
                activeFilter === f.id
                  ? 'border border-brand-ice bg-brand-ice/10 text-brand-ice font-semibold shadow-[0_0_12px_rgba(56,189,248,0.2)]'
                  : 'border border-white/[0.08] bg-white/[0.03] text-slate-300 hover:text-white hover:border-white/20'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-bg-card border border-white/[0.08] rounded-xl p-6 sm:p-7 flex flex-col justify-between shadow-card hover:border-brand-ice/40 hover:-translate-y-1 transition-all duration-200 group"
            >
              <div>
                <div className="font-mono text-xs font-semibold text-brand-ice tracking-wider mb-2 flex items-center justify-between">
                  <span>{project.categoryLabel}</span>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-brand-ice flex items-center gap-1 text-[11px]"
                    >
                      <span>GitHub</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>

                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-brand-light transition-colors leading-snug">
                  {project.title}
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                  {project.summary}
                </p>

                <ul className="space-y-2 mb-6">
                  {project.points.map((pt, i) => (
                    <li key={i} className="text-xs sm:text-sm text-slate-300 leading-relaxed flex items-start gap-2">
                      <span className="text-brand-ice font-bold">›</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-white/[0.08] flex flex-col gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] text-slate-400 bg-white/[0.03] border border-white/[0.06] px-2.5 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-2.5">
                  {project.manifestCode && (
                    <button
                      onClick={() =>
                        setSelectedManifest({
                          title: project.manifestTitle || 'Deployment Manifest',
                          code: project.manifestCode || '',
                        })
                      }
                      className="font-mono text-xs font-semibold px-3 py-1.5 rounded bg-brand-sky/10 border border-brand-sky/30 text-brand-light hover:bg-brand-sky/20 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <FileCode className="w-3.5 h-3.5" />
                      <span>{project.manifestType === 'dockerfile' ? 'View Dockerfile ⚙' : 'View K8s Manifest ⚙'}</span>
                    </button>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs font-semibold px-3 py-1.5 rounded bg-brand-ice/10 border border-brand-ice/30 text-brand-ice hover:bg-brand-ice/20 transition-all flex items-center gap-1"
                    >
                      <span>Repository</span>
                      <span>↗</span>
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs font-semibold px-3 py-1.5 rounded bg-white/[0.04] border border-white/20 text-slate-200 hover:border-brand-ice hover:text-brand-ice transition-all flex items-center gap-1"
                    >
                      <span>Live App</span>
                      <span>↗</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Manifest Modal */}
      <ManifestModal
        isOpen={Boolean(selectedManifest)}
        onClose={() => setSelectedManifest(null)}
        title={selectedManifest?.title}
        code={selectedManifest?.code}
      />
    </section>
  );
}
