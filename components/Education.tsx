"use client";

export default function Education() {
  return (
    <section id="education" className="border-b border-border bg-bg-dark/50">
      <div className="mx-auto max-w-content px-6 py-16">
        {/* Header */}
        <div className="flex items-center gap-2 font-mono text-xs text-spring mb-3">
          <span className="h-1.5 w-1.5 rounded-full bg-spring" />
          <span>NODE_TELEMETRY // ACADEMIC_CREDENTIALS</span>
        </div>

        {/* Education Spec Card */}
        <div className="rounded-xl border border-border bg-bg-card p-6 sm:p-8 transition-all hover:border-spring/40 hover:bg-bg-cardHover hover:shadow-spring-glow">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-4 border-b border-border-subtle pb-4">
            <div>
              <span className="font-mono text-xs text-spring-light font-semibold">
                INSTITUTION_ID: DJSCE-MUMBAI
              </span>
              <h3 className="text-xl font-bold text-ink mt-1">
                Dwarkadas J. Sanghvi College of Engineering (DJSCE)
              </h3>
              <p className="text-sm text-ink-muted mt-0.5">
                Bachelor of Technology (B.Tech) in Information Technology · Mumbai, India
              </p>
            </div>

            <div className="shrink-0 font-mono">
              <div className="inline-block rounded-md border border-spring/40 bg-spring/10 px-3 py-1.5 text-center">
                <span className="text-[10px] text-ink-muted uppercase block">Cumulative GPA</span>
                <span className="text-sm font-bold text-spring-light">8.4 / 10.0</span>
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 font-mono text-xs text-ink-muted">
            <div>
              <span className="text-ink-faint">TIMELINE:</span>{" "}
              <span className="text-ink">2024 – 2028 (Expected)</span>
            </div>
            <div>
              <span className="text-ink-faint">CORE FOCUS:</span>{" "}
              <span className="text-ink">Distributed Systems, OS, Computer Networks, Database Architecture</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
