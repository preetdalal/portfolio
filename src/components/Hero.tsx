'use client';

import React from 'react';
import { Terminal, Cpu, ShieldCheck, GitBranch, ArrowRight } from 'lucide-react';

export default function Hero() {
  const pods = [
    { name: 'fraudguard-api', status: '[2/2] Running · 184MB', color: 'text-brand-ice' },
    { name: 'jobtracker-spring', status: '[2/2] Running · 312MB', color: 'text-brand-ice' },
    { name: 'prometheus-agent', status: '[1/1] Scraping (15s)', color: 'text-telemetry-orange' },
    { name: 'unet-inference-engine', status: '[1/1] Ready (TorchScript)', color: 'text-telemetry-purple' },
    { name: 'redis-cache-master', status: '[1/1] 0.3% CPU (Healthy)', color: 'text-brand-ice' },
  ];

  return (
    <header className="relative z-10 py-16 lg:py-20 border-b border-white/[0.08] bg-gradient-to-b from-[#080a0f]/40 to-[#0d1118]/60" id="home">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-brand-ice tracking-wider px-3.5 py-1 rounded bg-brand-ice/10 border border-brand-ice/20 mb-5">
              <Cpu className="w-3.5 h-3.5 text-brand-ice" />
              <span>KUBERNETES · INFRASTRUCTURE AS CODE · MLOPS PIPELINES</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[54px] font-extrabold leading-[1.12] tracking-tight text-white mb-4">
              Architecting{' '}
              <span className="bg-gradient-to-r from-white via-brand-light to-brand-ice bg-clip-text text-transparent">
                Production Cloud
              </span>{' '}
              &amp; MLOps Systems.
            </h1>

            <div className="font-mono text-sm sm:text-base text-brand-ice mb-6 font-medium">
              IT Student @ DJSCE Mumbai · Honours in DevOps · Backend, SRE &amp; Model Serving
            </div>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              I engineer resilient distributed backend services in <strong className="text-white font-semibold">Java &amp; Python</strong>, containerize them with <strong className="text-white font-semibold">multi-stage Docker builds</strong>, orchestrate microservices on <strong className="text-white font-semibold">Kubernetes with HPA &amp; Ingress</strong>, and establish end-to-end observability using <strong className="text-white font-semibold">Prometheus &amp; Grafana</strong>. I deploy real ML inference models that survive production conditions, not just laptop benchmarks.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#pipeline"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded font-semibold text-sm text-white bg-gradient-to-r from-brand-cobalt to-brand-royal border border-brand-ice/60 shadow-[0_4px_16px_rgba(56,189,248,0.25)] hover:from-brand-blue hover:to-brand-cobalt hover:scale-[1.02] transition-all duration-150"
              >
                <span>Inspect CI/CD Pipeline</span>
                <span>⚡</span>
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded font-semibold text-sm text-slate-200 border border-white/20 bg-white/[0.04] backdrop-blur-md hover:border-brand-ice hover:text-brand-ice hover:bg-brand-ice/10 transition-all duration-150"
              >
                <span>View Work &amp; Manifests</span>
              </a>

              <a
                href="#terminal"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded font-semibold text-sm text-slate-200 border border-white/20 bg-white/[0.04] backdrop-blur-md hover:border-brand-ice hover:text-brand-ice hover:bg-brand-ice/10 transition-all duration-150"
              >
                <Terminal className="w-4 h-4" />
                <span>Run kubectl CLI ↗</span>
              </a>

              <a
                href="https://github.com/preetdalal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded font-semibold text-sm text-slate-200 border border-white/20 bg-white/[0.04] backdrop-blur-md hover:border-brand-ice hover:text-brand-ice hover:bg-brand-ice/10 transition-all duration-150"
              >
                <GitBranch className="w-4 h-4" />
                <span>GitHub ↗</span>
              </a>
            </div>
          </div>

          {/* Right Cluster Controller HUD Widget */}
          <div className="lg:col-span-5">
            <div className="bg-[#0b0e15] border border-white/[0.14] rounded-xl overflow-hidden shadow-2xl relative">
              {/* HUD Header */}
              <div className="bg-[#0d121c] px-4 py-3 border-b border-white/[0.08] flex items-center justify-between font-mono text-xs">
                <div className="flex items-center gap-2 text-brand-ice font-semibold">
                  <span className="w-2 h-2 rounded-full bg-telemetry-green animate-pulse-ring" />
                  <span>CLUSTER CONTROLLER (ap-south-1)</span>
                </div>
                <span className="text-telemetry-green bg-telemetry-green/10 px-2 py-0.5 rounded border border-telemetry-green/30 text-[11px] font-semibold">
                  100% NOMINAL
                </span>
              </div>

              {/* HUD Body */}
              <div className="p-4 flex flex-col gap-3">
                <div className="flex flex-col gap-2 font-mono text-xs">
                  {pods.map((pod) => (
                    <div
                      key={pod.name}
                      className="flex items-center justify-between px-3 py-1.5 rounded bg-white/[0.02] border border-white/[0.06]"
                    >
                      <div className="flex items-center gap-2 text-slate-200">
                        <span className={pod.color}>●</span>
                        <span>{pod.name}</span>
                      </div>
                      <span className="text-telemetry-green text-[11px]">{pod.status}</span>
                    </div>
                  ))}
                </div>

                {/* HUD Stats */}
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/[0.08]">
                  <div className="bg-black/30 border border-white/[0.06] rounded-md p-2 text-center">
                    <div className="font-mono text-sm sm:text-base font-bold text-brand-ice">99.98%</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">SRE Availability</div>
                  </div>
                  <div className="bg-black/30 border border-white/[0.06] rounded-md p-2 text-center">
                    <div className="font-mono text-sm sm:text-base font-bold text-brand-ice">38.4ms</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">P99 Inference</div>
                  </div>
                  <div className="bg-black/30 border border-white/[0.06] rounded-md p-2 text-center">
                    <div className="font-mono text-sm sm:text-base font-bold text-brand-ice">0 CVEs</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Trivy Scan Passed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
