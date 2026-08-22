const progression = [
  { label: "Linux", status: "using" },
  { label: "Containers", status: "using" },
  { label: "Orchestration", status: "using" },
  { label: "CI/CD", status: "building" },
  { label: "Cloud", status: "using" },
  { label: "Observability", status: "using" },
] as const;

export default function DevOpsSection() {
  return (
    <section id="devops" className="border-b border-border-subtle">
      <div className="mx-auto max-w-content px-6 py-20">
        <p className="mb-3 font-mono text-xs uppercase tracking-wider text-ink-faint">
          Building toward DevOps
        </p>
        <p className="mb-10 max-w-xl text-sm leading-relaxed text-ink-muted">
          Each project has pushed further into the infrastructure side of
          shipping software. Here&apos;s where that stands today.
        </p>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-4">
          {progression.map((step, i) => (
            <div key={step.label} className="flex items-center gap-3">
              <div
                className={`rounded-md border px-4 py-2 font-mono text-sm ${
                  step.status === "using"
                    ? "border-signal/40 bg-signal/5 text-ink"
                    : "border-dashed border-border text-ink-faint"
                }`}
              >
                {step.label}
              </div>
              {i < progression.length - 1 && (
                <span className="text-ink-faint" aria-hidden>
                  →
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 flex gap-6 font-mono text-xs text-ink-faint">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-sm bg-signal/40 border border-signal/40" />
            currently using
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-sm border border-dashed border-border" />
            building toward
          </span>
        </div>
      </div>
    </section>
  );
}
