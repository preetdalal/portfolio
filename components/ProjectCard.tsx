"use client";

import { Project } from "@/lib/data";

export default function ProjectCard({ project }: { project: Project }) {
  const isSpring = project.accentColor === "spring";
  const isK8s = project.accentColor === "k8s";

  return (
    <article className="group relative rounded-xl border border-border bg-bg-card p-6 sm:p-8 transition-all duration-200 hover:border-spring/50 hover:bg-bg-cardHover hover:shadow-spring-glow">
      {/* Top Node Header: Node ID, Role Badge, Status */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border-subtle pb-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-bold text-spring-light">
            {project.nodeId}
          </span>
          <span className="rounded border border-border bg-bg-dark px-2 py-0.5 font-mono text-[11px] text-ink-muted">
            {project.roleType}
          </span>
        </div>

        {/* Telemetry Status Badges */}
        <div className="flex items-center gap-2 font-mono text-xs">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-spring/30 bg-spring/10 px-2.5 py-0.5 text-[11px] font-semibold text-spring-light">
            <span className="h-1.5 w-1.5 rounded-full bg-spring animate-pulse" />
            BUILD: {project.buildStatus}
          </span>
          <span className="hidden sm:inline-flex rounded border border-border-subtle bg-bg-dark px-2 py-0.5 text-[11px] text-ink-muted">
            {project.pods}
          </span>
        </div>
      </div>

      {/* Title & Quick Actions */}
      <div className="mt-5 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold tracking-tight text-ink group-hover:text-spring-light transition-colors">
            {project.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-accent">
            {project.oneLiner}
          </p>
        </div>

        {/* Action Links */}
        <div className="flex shrink-0 items-center gap-2">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-bg-dark px-3 py-1.5 font-mono text-xs font-medium text-ink-muted transition-all hover:border-spring hover:text-ink hover:bg-bg-card"
          >
            <span>Source Code</span>
            <span className="text-spring">↗</span>
          </a>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-spring/50 bg-spring/10 px-3 py-1.5 font-mono text-xs font-semibold text-spring-light transition-all hover:bg-spring hover:text-bg-dark hover:shadow-spring-glow"
            >
              <span>Live Ingress</span>
              <span>↗</span>
            </a>
          )}
        </div>
      </div>

      {/* Problem / Core Engineering Statement */}
      <div className="mt-5 rounded-lg border border-border-subtle bg-bg-dark/70 p-4 font-mono text-xs text-ink-muted leading-relaxed">
        <span className="text-spring font-semibold block mb-1">
          // ARCHITECTURE_CHALLENGE &amp; PROBLEM SCOPE:
        </span>
        {project.problem}
      </div>

      {/* Architectural Decisions & Implementations */}
      <div className="mt-5">
        <h4 className="font-mono text-xs uppercase tracking-wider text-ink-muted mb-2.5">
          Key Engineering Decisions &amp; Production Patterns:
        </h4>
        <ul className="grid gap-2 sm:grid-cols-2">
          {project.decisions.map((point) => (
            <li
              key={point}
              className="flex items-start gap-2 text-xs leading-relaxed text-ink-muted rounded border border-border-subtle/50 bg-bg-dark/40 p-2.5"
            >
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-sm bg-spring" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Telemetry Metrics Strip */}
      <div className="mt-5 grid grid-cols-2 gap-2 rounded-lg border border-border-subtle bg-bg-dark/50 p-2.5 font-mono text-[11px] sm:grid-cols-4">
        {project.metrics.map((metric) => (
          <div key={metric.label} className="space-y-0.5">
            <span className="text-[10px] text-ink-faint uppercase block">{metric.label}</span>
            <span className="text-ink font-semibold block">{metric.value}</span>
          </div>
        ))}
      </div>

      {/* Tags / Stack Badges */}
      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => {
          const isTagSpring = tag.includes("Spring") || tag.includes("Java");
          const isTagK8s = tag.includes("Kubernetes") || tag.includes("Docker");
          const isTagAI = tag.includes("PyTorch") || tag.includes("Hugging Face");

          return (
            <span
              key={tag}
              className={`rounded border px-2 py-0.5 font-mono text-[11px] font-medium transition-colors ${
                isTagSpring
                  ? "border-spring/40 bg-spring/10 text-spring-light"
                  : isTagK8s
                  ? "border-k8s/40 bg-k8s/10 text-k8s-light"
                  : isTagAI
                  ? "border-cyan/40 bg-cyan/10 text-cyan"
                  : "border-border bg-bg-dark text-ink-muted"
              }`}
            >
              {tag}
            </span>
          );
        })}
      </div>
    </article>
  );
}
