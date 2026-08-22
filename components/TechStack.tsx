import { techStack, buildingToward } from "@/lib/data";

export default function TechStack() {
  return (
    <section id="stack" className="border-b border-border-subtle">
      <div className="mx-auto max-w-content px-6 py-20">
        <p className="mb-10 font-mono text-xs uppercase tracking-wider text-ink-faint">
          Stack
        </p>
        <div className="grid gap-10 sm:grid-cols-2">
          {techStack.map((category, i) => (
            <div key={category.label} className={i === 0 ? "sm:col-span-2" : ""}>
              <h3 className="mb-3 font-mono text-sm text-ink">
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item.name}
                    className="rounded-md border border-border bg-bg-elevated px-3 py-1.5 font-mono text-xs text-ink-muted transition-colors hover:border-signal/50 hover:text-ink"
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border-subtle pt-8">
          <h3 className="mb-3 font-mono text-sm text-ink-faint">
            Currently learning / building toward
          </h3>
          <div className="flex flex-wrap gap-2">
            {buildingToward.map((item) => (
              <span
                key={item}
                className="rounded-md border border-dashed border-border px-3 py-1.5 font-mono text-xs text-ink-faint"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
