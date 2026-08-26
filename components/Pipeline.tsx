"use client";

import { pipelineStages } from "@/lib/data";

export default function Pipeline() {
  return (
    <div
      className="font-mono text-sm"
      role="region"
      aria-label="CI/CD Pipeline & Live System Telemetry"
    >
      <div className="rounded-xl border border-border bg-bg-card/90 p-5 shadow-lg backdrop-blur-sm">
        {/* Terminal Header */}
        <div className="mb-4 flex items-center justify-between border-b border-border-subtle pb-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
            <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
            <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
            <span className="ml-2 font-mono text-xs text-ink-muted">
              pipeline-orchestrator.sh // v3.2
            </span>
          </div>
          <span className="inline-flex items-center gap-1 rounded bg-spring/10 px-2 py-0.5 text-[10px] font-semibold text-spring">
            <span className="h-1.5 w-1.5 rounded-full bg-spring animate-ping" />
            LIVE OPS
          </span>
        </div>

        {/* Live Stage Sequence */}
        <div className="space-y-2.5">
          {pipelineStages.map((stage, i) => (
            <div
              key={stage.id}
              className="group flex items-center justify-between rounded-md border border-border-subtle bg-bg-dark/60 px-3 py-2 transition-all hover:border-spring/40 hover:bg-bg-dark"
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-spring/80">
                  [{stage.id}]
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold tracking-wide text-ink group-hover:text-spring-light transition-colors">
                      {stage.name}
                    </span>
                  </div>
                  <p className="text-[11px] text-ink-muted">
                    {stage.desc}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <span className="rounded border border-spring/30 bg-spring/10 px-1.5 py-0.5 text-[10px] font-semibold text-spring-light">
                  {stage.status}
                </span>
                <span className="h-2 w-2 rounded-full bg-spring animate-pulse" />
              </div>
            </div>
          ))}
        </div>

        {/* Terminal footer with active deployment metrics */}
        <div className="mt-4 pt-3 border-t border-border-subtle/80 flex flex-wrap items-center justify-between gap-2 text-[11px] text-ink-muted">
          <div className="flex items-center gap-2">
            <span className="text-spring">$</span>
            <span className="text-ink">kubectl get pods --all-namespaces</span>
          </div>
          <span className="text-spring-light font-semibold">ALL_HEALTHY (100%)</span>
        </div>
      </div>
    </div>
  );
}
