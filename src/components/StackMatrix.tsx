'use client';

import React from 'react';
import { SKILLS_DATA, AWARDS_DATA } from '@/data/stack';
import { Wrench, Trophy } from 'lucide-react';

export default function StackMatrix() {
  return (
    <section className="py-16 sm:py-20 border-b border-white/[0.07] bg-bg-alt" id="skills">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* SKILLS */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <Wrench className="w-5 h-5 text-accent-sky" />
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight uppercase">
              Skills
            </h2>
          </div>

          <div className="bg-bg-card border border-white/[0.08] rounded-xl p-6 sm:p-7 space-y-5">
            {SKILLS_DATA.map((cat) => (
              <div key={cat.title} className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6 pb-4 last:pb-0 border-b last:border-b-0 border-white/[0.06]">
                <span className="text-xs sm:text-sm font-mono font-semibold text-slate-300 sm:w-44 shrink-0">
                  {cat.title}:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono text-slate-200 bg-white/[0.04] border border-white/[0.08] px-2.5 py-1 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AWARDS */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Trophy className="w-5 h-5 text-accent-sky" />
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight uppercase">
              Awards
            </h2>
          </div>

          <div className="bg-bg-card border border-white/[0.08] rounded-xl p-6 sm:p-7">
            {AWARDS_DATA.map((award) => (
              <div key={award.title} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="font-heading text-base font-bold text-white">
                    {award.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 font-mono mt-0.5">
                    {award.description}
                  </p>
                </div>
                <span className="font-mono text-xs font-semibold text-accent-sky bg-accent-sky/10 border border-accent-sky/20 px-2.5 py-1 rounded w-fit">
                  Merit Rank 53
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
