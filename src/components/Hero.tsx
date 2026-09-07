'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowDown, Github, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="py-20 sm:py-28 border-b border-white/[0.07]" id="home">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-10">
          
          {/* Text Content */}
          <div className="max-w-2xl">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Backend &amp; Cloud Engineering roles</span>
            </div>

            {/* Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[52px] font-bold text-white tracking-tight leading-[1.15] mb-6">
              Engineering Resilient Cloud Infrastructure &amp; Backend Systems.
            </h1>

            {/* Subtitle / Bio */}
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8 font-sans">
              I am <strong className="text-slate-100 font-semibold">Preet Dalal</strong>, an Information Technology student at <strong className="text-slate-100 font-semibold">DJSCE Mumbai</strong> with an official Honours specialization in <strong className="text-slate-100 font-semibold">DevOps &amp; Cloud Infrastructure</strong>. I specialize in building distributed backend services in Java &amp; Python, orchestrating microservices on Kubernetes, and establishing end-to-end telemetry pipelines.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="px-5 py-2.5 rounded-lg bg-accent-cobalt hover:bg-accent-blue text-white text-sm font-medium transition-all duration-150 flex items-center gap-2 shadow-sm"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="px-4 py-2.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-200 text-sm font-medium transition-all duration-150 flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Contact Me</span>
              </a>

              <a
                href="https://github.com/preetdalal"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-200 text-sm font-medium transition-all duration-150 flex items-center gap-2"
              >
                <Github className="w-4 h-4 text-slate-400" />
                <span>GitHub ↗</span>
              </a>
            </div>
          </div>

          {/* Profile Picture */}
          <div className="relative shrink-0">
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border border-white/15 bg-bg-card shadow-lg relative">
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
