'use client';

import React, { useState } from 'react';
import { Mail, Copy, Check, Send, Github, FileText } from 'lucide-react';

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
    <section className="py-20 border-b border-white/[0.07] bg-bg-alt" id="contact">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-xs font-mono font-semibold text-accent-sky uppercase tracking-wider block mb-2">
            Get in Touch
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Let&apos;s Connect
          </h2>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Left Info */}
          <div className="md:col-span-5 flex flex-col">
            <p className="text-slate-400 text-base leading-relaxed mb-6 font-sans">
              I am open to software engineering internships, backend development, and cloud/DevOps roles. Feel free to reach out directly via email or drop a message using the form.
            </p>

            <div className="flex flex-col gap-3 mb-8">
              <button
                onClick={handleCopyEmail}
                className="w-fit font-mono text-xs font-medium px-3.5 py-2.5 rounded-lg bg-bg-card border border-white/10 hover:border-accent-blue text-slate-200 hover:text-white transition-all flex items-center gap-2 cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
                <span>{copied ? 'Copied to Clipboard!' : 'mdalal.preet@gmail.com'}</span>
              </button>

              <a
                href="mailto:mdalal.preet@gmail.com"
                className="w-fit font-mono text-xs font-medium px-3.5 py-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 text-slate-300 hover:text-white transition-all flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Open Mail Client ↗</span>
              </a>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-slate-400 pt-4 border-t border-white/[0.07]">
              <a
                href="https://github.com/preetdalal"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <span>·</span>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1.5"
              >
                <FileText className="w-4 h-4" />
                <span>Resume.pdf</span>
              </a>
            </div>
          </div>

          {/* Right Form */}
          <div className="md:col-span-7 bg-bg-card border border-white/[0.07] rounded-xl p-6 sm:p-7">
            <h3 className="font-heading text-lg font-bold text-white mb-5">
              Send a Message
            </h3>

            {formSent ? (
              <div className="p-6 text-center text-emerald-400 font-mono text-sm bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex flex-col items-center gap-2">
                <Check className="w-5 h-5" />
                <span className="font-bold">Message Dispatched!</span>
                <span className="text-xs text-slate-300">
                  Thank you for reaching out. I will get back to you shortly.
                </span>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4 text-xs font-mono">
                <div>
                  <label className="block text-slate-300 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full bg-[#0d0f14] border border-white/10 rounded-lg px-3.5 py-2.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-accent-blue transition-colors text-xs font-mono"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-1">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@company.com"
                    className="w-full bg-[#0d0f14] border border-white/10 rounded-lg px-3.5 py-2.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-accent-blue transition-colors text-xs font-mono"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-1">Message</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your role, project, or collaboration..."
                    className="w-full bg-[#0d0f14] border border-white/10 rounded-lg px-3.5 py-2.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-accent-blue transition-colors text-xs font-mono resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-lg bg-accent-cobalt hover:bg-accent-blue text-white font-heading font-semibold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
