'use client';

import React from 'react';
import { GraduationCap, BookOpen } from 'lucide-react';

export default function Education() {
  const coursework = [
    'Advanced Java',
    'Design and Analysis of Algorithms',
    'Formal Languages and Automata Theory',
    'Object-Oriented Programming & UML'
  ];

  return (
    <section className="py-14 sm:py-16 border-b border-white/[0.07] bg-bg-alt" id="education">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-6">
          <GraduationCap className="w-5 h-5 text-accent-sky" />
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight uppercase">
            Education
          </h2>
        </div>

        {/* Education Item Card */}
        <div className="bg-bg-card border border-white/[0.08] rounded-xl p-6 sm:p-7">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1.5">
            <h3 className="font-heading text-lg sm:text-xl font-bold text-white">
              Dwarkadas J. Sanghvi College of Engineering
            </h3>
            <span className="text-xs font-mono text-slate-400">
              Expected 2028
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-4 text-sm font-mono text-slate-300">
            <div>
              <span className="text-accent-sky font-semibold">B.Tech, Information Technology</span>{' '}
              <span className="text-slate-400">(Honours in DevOps)</span>
              <span className="text-slate-500 mx-2">|</span>
              <span className="text-slate-200 font-semibold">GPA: 8.4</span>
            </div>
            <span className="text-xs text-slate-400 font-mono">
              Mumbai, India
            </span>
          </div>

          {/* Relevant Coursework */}
          <div className="pt-4 border-t border-white/[0.07]">
            <div className="text-xs font-mono text-slate-400 mb-2 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-accent-sky" />
              <span className="font-medium text-slate-300">Relevant Coursework:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {coursework.map((course) => (
                <span
                  key={course}
                  className="text-xs font-mono text-slate-300 bg-white/[0.03] border border-white/[0.07] px-2.5 py-1 rounded"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
