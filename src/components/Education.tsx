'use client';

import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

export default function Education() {
  return (
    <section className="relative z-10 py-16 border-b border-white/[0.08] bg-bg-sectionAlt" id="education">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col mb-8">
          <span className="font-mono text-xs font-semibold text-brand-ice uppercase tracking-wider px-3 py-1 rounded bg-brand-ice/10 border border-brand-ice/20 w-fit mb-3">
            Academic Credentials
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Education &amp; Specialization
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Main Education Card */}
          <div className="lg:col-span-7 bg-bg-card border border-white/[0.08] rounded-xl p-6 sm:p-8 shadow-card backdrop-blur-md">
            <div className="font-mono text-xs font-semibold text-brand-ice uppercase tracking-wider mb-2 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-brand-ice" />
              <span>2024 – 2028 · Mumbai, India</span>
            </div>

            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-2 leading-snug">
              Dwarkadas J. Sanghvi College of Engineering (DJSCE)
            </h3>

            <div className="font-mono text-sm text-brand-ice font-medium mb-4">
              Bachelor of Technology (B.Tech) - Information Technology
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Enrolled in an official <strong className="text-white font-semibold">Honours Specialization in DevOps &amp; Cloud Infrastructure</strong> alongside core computer science curriculum. Deepening mastery in Linux internals, container runtimes, Kubernetes cluster scheduling, distributed consensus, and automated GitOps workflows.
            </p>
          </div>

          {/* Metric Highlights */}
          <div className="lg:col-span-5 flex flex-col gap-3.5">
            <div className="bg-bg-card border border-white/[0.08] rounded-xl p-5 sm:p-6 flex items-center justify-between shadow-sm hover:border-brand-ice/40 hover:-translate-y-0.5 transition-all duration-200">
              <div className="flex flex-col">
                <span className="text-xs text-slate-400 font-medium">Cumulative GPA</span>
                <span className="text-slate-300 text-sm mt-0.5 font-sans">Autonomous Mumbai Curriculum</span>
              </div>
              <div className="font-mono text-2xl sm:text-3xl font-extrabold text-brand-ice">
                8.4 <span className="text-sm font-normal text-slate-400">/ 10.0</span>
              </div>
            </div>

            <div className="bg-bg-card border border-white/[0.08] rounded-xl p-5 sm:p-6 flex items-center justify-between shadow-sm hover:border-brand-ice/40 hover:-translate-y-0.5 transition-all duration-200">
              <div className="flex flex-col">
                <span className="text-xs text-slate-400 font-medium">Official Specialization</span>
                <span className="text-slate-300 text-sm mt-0.5 font-sans">Advanced Infrastructure Track</span>
              </div>
              <div className="font-mono text-base sm:text-lg font-bold text-brand-ice">
                DevOps Honours
              </div>
            </div>

            <div className="bg-bg-card border border-white/[0.08] rounded-xl p-5 sm:p-6 flex items-center justify-between shadow-sm hover:border-brand-ice/40 hover:-translate-y-0.5 transition-all duration-200">
              <div className="flex flex-col">
                <span className="text-xs text-slate-400 font-medium">National Recognition</span>
                <span className="text-slate-300 text-sm mt-0.5 font-sans">Competitive Merit Examination</span>
              </div>
              <div className="font-mono text-xs sm:text-sm font-bold text-white uppercase bg-white/[0.05] px-2.5 py-1 rounded border border-white/10">
                RANK 53
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
