'use client';

import React from 'react';
import Image from 'next/image';
import { Mail, Linkedin, Github, Phone, ArrowDown, FileText } from 'lucide-react';

export default function Hero() {
  return (
    <section className="py-16 sm:py-24 border-b border-white/[0.07]" id="home">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between gap-8">
          
          <div className="max-w-2xl">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white tracking-tight mb-3">
              Preet Dalal
            </h1>

            <p className="text-base sm:text-lg text-accent-sky font-mono mb-4">
              B.Tech Information Technology (Honours in DevOps) · DJSCE Mumbai
            </p>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6 font-sans">
              Software and cloud engineering student specializing in distributed backend systems in <strong className="text-slate-100 font-medium">Java &amp; Python</strong>, container orchestration with <strong className="text-slate-100 font-medium">Docker &amp; Kubernetes</strong>, applied <strong className="text-slate-100 font-medium">MLOps pipelines</strong>, and production observability with <strong className="text-slate-100 font-medium">Prometheus &amp; Grafana</strong>.
            </p>

            {/* Resume Contact Links */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-300">
              <a
                href="mailto:mdalal.preet@gmail.com"
                className="px-3 py-1.5 rounded-md bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-accent-blue text-slate-200 hover:text-white transition-all flex items-center gap-2"
              >
                <Mail className="w-3.5 h-3.5 text-accent-sky" />
                <span>mdalal.preet@gmail.com</span>
              </a>

              <a
                href="https://linkedin.com/in/preetdalal"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-md bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-accent-blue text-slate-200 hover:text-white transition-all flex items-center gap-2"
              >
                <Linkedin className="w-3.5 h-3.5 text-accent-sky" />
                <span>linkedin.com/in/preetdalal</span>
              </a>

              <a
                href="https://github.com/preetdalal"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-md bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-accent-blue text-slate-200 hover:text-white transition-all flex items-center gap-2"
              >
                <Github className="w-3.5 h-3.5 text-accent-sky" />
                <span>github.com/preetdalal</span>
              </a>

              <a
                href="tel:+919920629808"
                className="px-3 py-1.5 rounded-md bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-accent-blue text-slate-200 hover:text-white transition-all flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-accent-sky" />
                <span>+91 9920629808</span>
              </a>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="shrink-0">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden border border-white/15 bg-bg-card shadow-lg relative">
              <Image
                src="/selfpic.jpeg"
                alt="Preet Dalal"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
