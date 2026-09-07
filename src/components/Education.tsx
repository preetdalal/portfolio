'use client';

import React from 'react';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section className="py-20 border-b border-white/[0.07]" id="education">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-xs font-mono font-semibold text-accent-sky uppercase tracking-wider block mb-2">
            Academic Background
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Education &amp; Credentials
          </h2>
        </div>

        {/* Education Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          
          {/* College Info */}
          <div className="md:col-span-7 bg-bg-card border border-white/[0.07] rounded-xl p-6 sm:p-7">
            <div className="flex items-center gap-2 text-xs font-mono text-accent-sky font-semibold mb-2">
              <GraduationCap className="w-4 h-4" />
              <span>2024 – 2028 · Mumbai, India</span>
            </div>

            <h3 className="font-heading text-xl font-bold text-white mb-1">
              Dwarkadas J. Sanghvi College of Engineering (DJSCE)
            </h3>

            <div className="text-sm font-mono text-accent-sky mb-4">
              B.Tech in Information Technology · Honours in DevOps &amp; Cloud Infrastructure
            </div>

            <p className="text-slate-400 text-sm leading-relaxed">
              Pursuing core computer science foundations alongside specialized curriculum in distributed systems, Linux systems programming, container runtimes, Kubernetes scheduling, and automated infrastructure delivery pipelines.
            </p>
          </div>

          {/* Key Stats */}
          <div className="md:col-span-5 flex flex-col gap-3">
            <div className="bg-bg-card border border-white/[0.07] rounded-xl p-4 sm:p-5 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 block">Cumulative GPA</span>
                <span className="text-sm font-medium text-slate-200">Autonomous DJSCE Track</span>
              </div>
              <div className="font-mono text-2xl font-bold text-white">
                8.4 <span className="text-xs font-normal text-slate-400">/ 10.0</span>
              </div>
            </div>

            <div className="bg-bg-card border border-white/[0.07] rounded-xl p-4 sm:p-5 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 block">Honours Degree</span>
                <span className="text-sm font-medium text-slate-200">DevOps &amp; Cloud Systems</span>
              </div>
              <div className="font-mono text-xs font-semibold text-accent-sky bg-accent-sky/10 border border-accent-sky/20 px-2 py-1 rounded">
                Specialization
              </div>
            </div>

            <div className="bg-bg-card border border-white/[0.07] rounded-xl p-4 sm:p-5 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 block">Merit Rank</span>
                <span className="text-sm font-medium text-slate-200">National Examination</span>
              </div>
              <div className="font-mono text-xs font-semibold text-white bg-white/10 px-2.5 py-1 rounded">
                Rank 53
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
