"use client";

import { techStack, buildingToward } from "@/lib/data";

export default function TechStack() {
  return (
    <section id="stack" className="border-b border-border bg-bg-dark/60">
      <div className="mx-auto max-w-content px-6 py-20">
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 font-mono text-xs text-spring mb-2">
            <span className="h-1.5 w-1.5 rounded-full bg-spring" />
            <span>OPERATIONAL_INVENTORY // TECH_STACK</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Systems, Tooling &amp; Infrastructure
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-ink-muted leading-relaxed">
            Enterprise backend frameworks, container runtimes, orchestration engines, and distributed databases used across production environments.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {techStack.map((category) => (
            <div
              key={category.label}
              className="rounded-xl border border-border bg-bg-card p-6 transition-all hover:border-border-active hover:bg-bg-cardHover hover:shadow-spring-glow"
            >
              <div className="flex items-center justify-between border-b border-border-subtle pb-3 mb-4 font-mono">
                <h3 className="text-sm font-bold text-ink">
                  {category.label}
                </h3>
                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded border ${category.badgeColor}`}>
                  {category.code}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item.name}
                    className={`rounded-md border px-3 py-1.5 font-mono text-xs transition-all ${
                      item.highlight
                        ? "border-spring/40 bg-spring/10 text-spring-light font-medium hover:border-spring hover:bg-spring/20 hover:shadow-spring-glow"
                        : "border-border bg-bg-dark text-ink-muted hover:border-border/80 hover:text-ink"
                    }`}
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Building Toward / Roadmap Sub-node */}
        <div className="mt-10 rounded-xl border border-border-subtle bg-bg-card/50 p-6">
          <div className="flex items-center gap-2 font-mono text-xs text-ink-muted mb-4">
            <span className="text-spring">&gt;&gt;</span>
            <span className="font-semibold uppercase tracking-wider text-ink">
              ACTIVE_ROADMAP // SCALING_CAPABILITIES:
            </span>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {buildingToward.map((item, index) => (
              <div
                key={item}
                className="flex items-start gap-2.5 rounded-lg border border-dashed border-border bg-bg-dark/60 p-3 font-mono text-xs text-ink-muted hover:border-spring/40 hover:text-ink transition-colors"
              >
                <span className="text-spring font-bold">0{index + 1}.</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
