'use client';

import React from 'react';
import { STACK_CATEGORIES } from '@/data/stack';

export default function StackMatrix() {
  return (
    <section className="py-20 border-b border-white/[0.07] bg-bg-alt" id="skills">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-xs font-mono font-semibold text-accent-sky uppercase tracking-wider block mb-2">
            Technical Stack
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Skills &amp; Technologies
          </h2>
        </div>

        {/* Stack Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {STACK_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="bg-bg-card border border-white/[0.07] rounded-xl p-5 sm:p-6"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span className="text-accent-sky text-lg">{category.icon}</span>
                <h3 className="font-heading text-base font-bold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs font-mono text-slate-300 bg-white/[0.03] border border-white/[0.07] px-2.5 py-1 rounded hover:border-accent-sky/40 hover:text-white transition-colors cursor-default"
                  >
                    {item}
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
