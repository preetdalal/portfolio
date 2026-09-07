'use client';

import React, { useState } from 'react';
import { PIPELINE_STAGES, PipelineStage } from '@/data/pipeline';
import { Play, CheckCircle2, Terminal } from 'lucide-react';

export default function PipelineVisualizer() {
  const [activeStageId, setActiveStageId] = useState<string>('stage-push');
  const activeStage: PipelineStage =
    PIPELINE_STAGES.find((s) => s.id === activeStageId) || PIPELINE_STAGES[0];

  return (
    <section className="relative z-10 py-20 border-b border-white/[0.08]" id="pipeline">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col mb-10">
          <span className="font-mono text-xs font-semibold text-brand-ice uppercase tracking-wider px-3 py-1 rounded bg-brand-ice/10 border border-brand-ice/20 w-fit mb-3">
            Production Workflow
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2">
            Automated CI/CD &amp; MLOps Pipeline Architecture
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Interactive multi-stage deployment workflow. Click on any pipeline stage below to inspect live build logs, container scanners, and Kubernetes rollout events.
          </p>
        </div>

        {/* Pipeline Stepper Box */}
        <div className="bg-[#0b0e15] border border-white/[0.14] rounded-xl overflow-hidden shadow-2xl">
          {/* Stepper Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 bg-[#090d18] border-b border-white/[0.08]">
            {PIPELINE_STAGES.map((stage) => {
              const isActive = stage.id === activeStageId;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStageId(stage.id)}
                  className={`p-4 text-left border-r border-b md:border-b-0 border-white/[0.08] last:border-r-0 transition-all duration-150 flex flex-col gap-1 relative ${
                    isActive
                      ? 'bg-brand-cobalt/20 border-b-2 md:border-b-2 border-b-brand-ice shadow-inner'
                      : 'hover:bg-white/[0.03]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] font-semibold text-brand-ice tracking-wider">
                      {stage.num}
                    </span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-brand-ice shadow-[0_0_8px_#38bdf8]" />
                    )}
                  </div>
                  <span className="font-heading font-bold text-sm text-white tracking-tight">
                    {stage.name}
                  </span>
                  <span className="font-mono text-[11px] text-slate-400 truncate">
                    {stage.tool}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Terminal Log Panel */}
          <div className="p-6 bg-[#070a10]">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 mb-4 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-brand-ice" />
                <span className="font-heading font-bold text-base text-brand-ice">
                  {activeStage.title}
                </span>
              </div>
              <span className="font-mono text-xs font-semibold text-telemetry-green bg-telemetry-green/10 px-2.5 py-1 rounded border border-telemetry-green/30">
                {activeStage.badge}
              </span>
            </div>

            <div className="font-mono text-xs sm:text-sm text-slate-300 leading-relaxed bg-black/50 p-4 sm:p-5 rounded-lg border border-white/[0.06] min-h-[160px] whitespace-pre-wrap">
              {activeStage.logs.map((logLine, idx) => (
                <div key={idx} className="mb-1.5 flex items-start gap-2">
                  <span className="text-brand-sky select-none">❯</span>
                  <span>{logLine}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
