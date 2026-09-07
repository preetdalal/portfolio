'use client';

import React from 'react';
import { STACK_CATEGORIES } from '@/data/stack';

export default function StackMatrix() {
  return (
    <section className="relative z-10 py-20 border-b border-white/[0.08] bg-bg-sectionAlt" id="stack">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col mb-10">
          <span className="font-mono text-xs font-semibold text-brand-ice uppercase tracking-wider px-3 py-1 rounded bg-brand-ice/10 border border-brand-ice/20 w-fit mb-3">
            Technical Arsenal
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2">
            Engineering Stack &amp; Infrastructure Matrix
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            The core tools, languages, container runtimes, and telemetry platforms I deploy in production environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STACK_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="bg-bg-card border border-white/[0.08] rounded-xl p-6 shadow-card hover:border-brand-ice/40 hover:-translate-y-1 transition-all duration-200"
            >
              <h3 className="font-heading text-lg font-bold text-white mb-4 flex items-center gap-2.5">
                <span className="text-brand-ice text-xl">{category.icon}</span>
                <span>{category.title}</span>
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-xs text-slate-300 bg-white/[0.03] border border-white/[0.08] px-3 py-1.5 rounded hover:border-brand-ice hover:text-brand-ice hover:bg-brand-ice/10 transition-all duration-150 cursor-default"
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
