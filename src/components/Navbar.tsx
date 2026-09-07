'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { label: 'CI/CD Pipeline', href: '#pipeline' },
    { label: 'Live Telemetry', href: '#telemetry' },
    { label: 'Projects', href: '#projects' },
    { label: 'Cloud Stack', href: '#stack' },
    { label: 'K8s Terminal', href: '#terminal' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="relative z-40 border-b border-white/[0.08] bg-[#080a0f]/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <Link
            href="#home"
            className="font-heading font-bold text-lg text-white tracking-tight hover:text-brand-ice transition-colors"
          >
            Preet Dalal
          </Link>
          <span className="font-mono text-[11px] font-semibold px-2 py-0.5 rounded bg-brand-cobalt/15 text-brand-ice border border-brand-cobalt/30 tracking-wider">
            DJSCE &apos;28 · DEVOPS HONOURS
          </span>
        </div>

        {/* Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setActiveSection(link.href.substring(1))}
              className={`text-sm px-3 py-1.5 rounded font-medium transition-all duration-150 ${
                activeSection === link.href.substring(1)
                  ? 'text-brand-ice bg-brand-ice/10 font-semibold'
                  : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs font-semibold px-3.5 py-1.5 rounded border border-white/20 bg-white/[0.04] text-slate-100 hover:border-brand-ice hover:text-brand-ice hover:bg-brand-ice/10 transition-all duration-150 flex items-center gap-1.5"
          >
            <span>Resume.pdf</span>
            <span>↓</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
