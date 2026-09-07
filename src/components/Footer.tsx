'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="relative z-10 py-10 bg-[#06080d] border-t border-white/[0.08] font-mono text-xs text-slate-400">
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <span>© {new Date().getFullYear()} Preet Dalal · Cloud, DevOps &amp; MLOps Infrastructure</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-slate-500">Built with Next.js 15 &amp; Three.js</span>
          <span className="text-slate-600">·</span>
          <a
            href="#home"
            className="text-brand-ice hover:text-white transition-colors"
          >
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
