'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="py-8 bg-[#090a0d] border-t border-white/[0.07] font-mono text-xs text-slate-400">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span>© {new Date().getFullYear()} Preet Dalal · Software &amp; Cloud Infrastructure</span>
        </div>

        <div>
          <a
            href="#home"
            className="hover:text-white transition-colors"
          >
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
