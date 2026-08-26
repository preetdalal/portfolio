"use client";

import { systemLogs, systemSpecs } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="border-b border-border bg-bg-dark/50">
      <div className="mx-auto max-w-content px-6 py-20">
        {/* Section Header */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-spring mb-1">
              <span className="h-1.5 w-1.5 rounded-full bg-spring" />
              <span>SUBSYSTEM: /var/log/engineer.log</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              System Specifications &amp; Background
            </h2>
          </div>
          <div className="flex items-center gap-3 font-mono text-xs text-ink-muted">
            <span className="rounded bg-bg-card border border-border px-2.5 py-1">
              LOG_LEVEL: <span className="text-spring-light">VERBOSE</span>
            </span>
            <span className="rounded bg-bg-card border border-border px-2.5 py-1">
              STREAM: <span className="text-cyan">LIVE</span>
            </span>
          </div>
        </div>

        {/* Streaming System Log Terminal Window */}
        <div className="rounded-xl border border-border bg-bg-card shadow-2xl overflow-hidden">
          {/* Terminal Window Header Bar */}
          <div className="flex items-center justify-between border-b border-border bg-bg-cardHover px-4 py-3 font-mono text-xs text-ink-muted">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
              <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
              <span className="ml-2 text-ink font-semibold">syslog --tail -f /dev/preet_bio.log</span>
            </div>
            <div className="hidden sm:flex items-center gap-3 text-[11px] text-ink-faint">
              <span>HOST: {systemSpecs.host}</span>
              <span>PID: 1337</span>
              <span>TTY: pts/0</span>
            </div>
          </div>

          {/* Terminal Log Stream Output */}
          <div className="p-5 font-mono text-xs leading-relaxed space-y-3 bg-[#0c1017]">
            {systemLogs.map((log, index) => (
              <div key={index} className="flex flex-col sm:flex-row sm:items-baseline gap-1.5 sm:gap-3 group hover:bg-white/[0.02] p-1 rounded transition-colors">
                <span className="text-ink-faint shrink-0 text-[11px]">
                  [{log.timestamp}]
                </span>
                <span
                  className={`font-bold px-1.5 py-0.2 rounded text-[10px] shrink-0 inline-block w-fit ${
                    log.level === "SUCCESS"
                      ? "bg-spring/15 text-spring-light border border-spring/30"
                      : log.level === "READY"
                      ? "bg-cyan/15 text-cyan border border-cyan/30"
                      : "bg-k8s/15 text-k8s-light border border-k8s/30"
                  }`}
                >
                  {log.level}
                </span>
                <span className="text-ink-muted shrink-0 text-[11px]">
                  {log.component}:
                </span>
                <span className="text-ink-accent font-normal group-hover:text-ink transition-colors">
                  {log.message}
                </span>
              </div>
            ))}

            {/* Structured Narrative Telemetry Log Block */}
            <div className="mt-6 pt-5 border-t border-border-subtle/80 space-y-3">
              <div className="flex items-start gap-2 text-spring">
                <span>&gt;&gt;</span>
                <p className="text-ink-accent text-sm leading-relaxed">
                  <strong className="text-spring-light font-semibold">[EXECUTIVE_SUMMARY]</strong> I am an Information Technology engineer at <span className="text-ink font-medium">DJSCE Mumbai</span> dedicated to bridging backend architecture and modern DevOps infrastructure.
                </p>
              </div>

              <div className="flex items-start gap-2 text-k8s-light">
                <span>&gt;&gt;</span>
                <p className="text-ink-muted text-sm leading-relaxed">
                  <strong className="text-k8s-light font-semibold">[BACKEND_FOUNDATION]</strong> Production-grade <span className="text-ink">Spring Boot 3</span> microservices are my primary engineering foundation — architecting robust JWT authentication, dynamic JPA filters, Flyway migrations, Redis caches, and integration testing with Testcontainers.
                </p>
              </div>

              <div className="flex items-start gap-2 text-cyan">
                <span>&gt;&gt;</span>
                <p className="text-ink-muted text-sm leading-relaxed">
                  <strong className="text-cyan font-semibold">[CLOUD_&amp;_AI_OPS]</strong> On the cloud side, I actively containerize workloads with <span className="text-ink">Docker</span>, manage deployments on <span className="text-ink">Kubernetes</span>, track telemetry with <span className="text-ink">Prometheus &amp; Grafana</span>, and integrate <span className="text-ink">PyTorch &amp; Hugging Face Hub</span> models for resilient AI inference serving.
                </p>
              </div>
            </div>

            {/* Prompt Cursor */}
            <div className="pt-3 flex items-center gap-2 text-spring text-xs">
              <span className="text-ink-muted">root@preet-node:~#</span>
              <span className="inline-block h-3.5 w-2 bg-spring animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
