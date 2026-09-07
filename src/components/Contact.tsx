'use client';

import React, { useState } from 'react';
import { Mail, Copy, Check, Linkedin, Github, Phone, FileText, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('mdalal.preet@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-16 sm:py-20 border-b border-white/[0.07] bg-bg-alt" id="contact">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-6">
          <Mail className="w-5 h-5 text-accent-sky" />
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight uppercase">
            Get in Touch
          </h2>
        </div>

        {/* Contact Container */}
        <div className="bg-bg-card border border-white/[0.08] rounded-xl p-6 sm:p-8">
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-3">
            Open to Backend, DevOps &amp; MLOps Opportunities
          </h3>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl font-sans">
            Whether you have an internship opening, software engineering role, or want to discuss distributed backend systems and Kubernetes infrastructure, feel free to reach out directly through any of the channels below.
          </p>

          {/* Direct Channels Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {/* Primary Email Box */}
            <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-4 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="p-2 rounded bg-accent-sky/10 text-accent-sky shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-[11px] font-mono text-slate-400">Email Address</div>
                  <div className="text-sm font-mono text-slate-200 truncate">mdalal.preet@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1.5 rounded bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-slate-300 hover:text-white text-xs font-mono transition-colors flex items-center gap-1 cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>

                <a
                  href="mailto:mdalal.preet@gmail.com"
                  className="p-1.5 rounded bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-slate-300 hover:text-white transition-colors"
                  title="Open mail client"
                >
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/preetdalal"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/[0.02] border border-white/[0.08] hover:border-white/20 rounded-lg p-4 flex items-center justify-between gap-3 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded bg-accent-sky/10 text-accent-sky shrink-0">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400">LinkedIn Profile</div>
                  <div className="text-sm font-mono text-slate-200 group-hover:text-white transition-colors">
                    linkedin.com/in/preetdalal
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/preetdalal"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/[0.02] border border-white/[0.08] hover:border-white/20 rounded-lg p-4 flex items-center justify-between gap-3 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded bg-accent-sky/10 text-accent-sky shrink-0">
                  <Github className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400">GitHub Profile</div>
                  <div className="text-sm font-mono text-slate-200 group-hover:text-white transition-colors">
                    github.com/preetdalal
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
            </a>

            {/* Phone */}
            <a
              href="tel:+919920629808"
              className="bg-white/[0.02] border border-white/[0.08] hover:border-white/20 rounded-lg p-4 flex items-center justify-between gap-3 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded bg-accent-sky/10 text-accent-sky shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400">Direct Phone</div>
                  <div className="text-sm font-mono text-slate-200 group-hover:text-white transition-colors">
                    +91 9920629808
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
            </a>
          </div>

          {/* Direct Resume Download Button */}
          <div className="pt-4 border-t border-white/[0.07] flex items-center justify-between text-xs font-mono text-slate-400">
            <span>Location: Mumbai, India</span>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-sky hover:text-white flex items-center gap-1 transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Download Resume.pdf ↓</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
