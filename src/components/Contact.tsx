'use client';

import React, { useState } from 'react';
import { Mail, Copy, Check, Send, Github, Linkedin, FileText } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState<boolean>(false);
  const [formSent, setFormSent] = useState<boolean>(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('mdalal.preet@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section className="relative z-10 py-20 border-b border-white/[0.08] bg-bg-sectionAlt" id="contact">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="font-mono text-xs font-semibold text-brand-ice uppercase tracking-wider px-3 py-1 rounded bg-brand-ice/10 border border-brand-ice/20 mb-4">
              Get in Touch
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4 leading-snug">
              Open to Backend, DevOps &amp; MLOps roles.
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              Whether you are architecting a high-throughput microservice backend, migrating clusters to Kubernetes, setting up Prometheus/Grafana SRE observability, or operationalizing ML inference models—let&apos;s build resilient systems together.
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-8">
              <button
                onClick={handleCopyEmail}
                className="font-mono text-xs sm:text-sm font-semibold px-4 py-2.5 rounded bg-brand-ice/10 border border-brand-ice/30 text-brand-ice hover:bg-brand-ice/20 transition-all duration-150 flex items-center gap-2 cursor-pointer shadow-[0_0_12px_rgba(56,189,248,0.15)]"
              >
                {copied ? <Check className="w-4 h-4 text-telemetry-green" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Email Copied to Clipboard!' : 'Copy mdalal.preet@gmail.com'}</span>
              </button>

              <a
                href="mailto:mdalal.preet@gmail.com"
                className="font-mono text-xs sm:text-sm font-semibold px-4 py-2.5 rounded bg-white/[0.04] border border-white/20 text-white hover:border-brand-ice hover:text-brand-ice transition-all duration-150 flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Open Mail Client ↗</span>
              </a>
            </div>

            <div className="flex items-center gap-3 pt-6 border-t border-white/[0.08] w-full text-slate-400 font-mono text-xs">
              <a
                href="https://github.com/preetdalal"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-ice transition-colors flex items-center gap-1"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <span>·</span>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-ice transition-colors flex items-center gap-1"
              >
                <FileText className="w-4 h-4" />
                <span>Resume.pdf</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-6 bg-bg-card border border-white/[0.08] rounded-xl p-6 sm:p-8 shadow-card backdrop-blur-md">
            <h3 className="font-heading text-xl font-bold text-white mb-6">
              Send a Direct Message
            </h3>

            {formSent ? (
              <div className="bg-telemetry-green/10 border border-telemetry-green/30 rounded-lg p-6 text-center text-telemetry-green font-mono text-sm flex flex-col items-center gap-2">
                <Check className="w-6 h-6 text-telemetry-green" />
                <span className="font-bold">Message Dispatched!</span>
                <span className="text-xs text-slate-300">
                  Thank you for reaching out. I will respond to your inquiry promptly.
                </span>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4 font-mono text-xs sm:text-sm">
                <div>
                  <label className="block text-slate-300 mb-1 font-medium">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full bg-black/40 border border-white/14 rounded-md px-3.5 py-2.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-ice focus:ring-1 focus:ring-brand-ice transition-all"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-1 font-medium">Your Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@company.com"
                    className="w-full bg-black/40 border border-white/14 rounded-md px-3.5 py-2.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-ice focus:ring-1 focus:ring-brand-ice transition-all"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-1 font-medium">Message / Project Inquiry</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your infrastructure, backend service, or collaboration opportunity..."
                    className="w-full bg-black/40 border border-white/14 rounded-md px-3.5 py-2.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-ice focus:ring-1 focus:ring-brand-ice transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full font-heading font-semibold text-sm py-3 rounded bg-gradient-to-r from-brand-cobalt to-brand-royal hover:from-brand-blue hover:to-brand-cobalt border border-brand-ice/50 text-white shadow-glow transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Message</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
