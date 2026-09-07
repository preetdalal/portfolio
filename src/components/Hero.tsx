'use client';

import React from 'react';
import { Mail, Linkedin, Github, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="py-16 sm:py-24 border-b border-white/[0.07]" id="home">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col items-start gap-6 mb-8">
          
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white tracking-tight mb-2">
              Preet Dalal
            </h1>

            <p className="text-base sm:text-lg text-accent-sky font-mono mb-4">
              B.Tech Information Technology (Honours in DevOps) · D. J. Sanghvi College of Engineering
            </p>

            {/* Resume Contact Links */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-slate-300">
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

        </div>

        {/* Bio Paragraphs */}
        <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-sans pt-6 border-t border-white/[0.07]">
          <p>
            I&apos;m an IT student at <strong className="text-white font-semibold">D. J. Sanghvi College of Engineering</strong>, specializing in <strong className="text-white font-semibold">DevOps and Cloud Engineering</strong>, with backend development as my foundation and applied AI/ML as an additional strength.
          </p>
          <p>
            I build backend systems in <strong className="text-white font-semibold">Java and Python</strong>, then containerize and deploy them, working through <strong className="text-white font-semibold">Docker, Kubernetes</strong>, and monitoring with <strong className="text-white font-semibold">Prometheus and Grafana</strong> along the way. Recent projects include a fraud detection platform running on Kubernetes with autoscaling, and a deep learning model for skin lesion classification that stays robust under adversarial attacks, both involved deploying and operating real ML systems in production, not just training them.
          </p>
          <p>
            I&apos;m currently deepening my Kubernetes and CI/CD skills, moving from single-service deployments toward more complete infrastructure setups.
          </p>
          <div className="pt-2 flex items-center gap-2 text-accent-sky font-medium">
            <span>●</span>
            <span>Open to backend, DevOps, and MLOps internships where I can build things that actually run in production, not just work on a laptop.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
