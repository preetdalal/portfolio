"use client";

const lifecycleNodes = [
  {
    step: "01",
    label: "Linux Systems",
    detail: "POSIX shell scripting, kernel primitives, process isolation, filesystem hierarchy",
    status: "PROD_ACTIVE",
    active: true,
  },
  {
    step: "02",
    label: "Containers & Runtimes",
    detail: "Docker multi-stage builds, non-root users, image minimization, container registries",
    status: "PROD_ACTIVE",
    active: true,
  },
  {
    step: "03",
    label: "Kubernetes Orchestration",
    detail: "Pod lifecycle, Deployments, Services, ConfigMaps, Secrets, Ingress, HPA autoscaling",
    status: "PROD_ACTIVE",
    active: true,
  },
  {
    step: "04",
    label: "CI/CD Automation",
    detail: "GitHub Actions automated test runners, container publishing, automated releases",
    status: "PROD_ACTIVE",
    active: true,
  },
  {
    step: "05",
    label: "Telemetry & Observability",
    detail: "Prometheus scraping, custom metrics endpoints, Grafana dashboard visualization",
    status: "PROD_ACTIVE",
    active: true,
  },
  {
    step: "06",
    label: "Cloud & Infrastructure as Code",
    detail: "Terraform provisioning, distributed cloud workloads, resilience patterns",
    status: "SCALING_UP",
    active: false,
  },
];

export default function DevOpsSection() {
  return (
    <section id="devops" className="border-b border-border bg-bg-dark/40">
      <div className="mx-auto max-w-content px-6 py-20">
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 font-mono text-xs text-spring mb-2">
            <span className="h-1.5 w-1.5 rounded-full bg-spring" />
            <span>INFRASTRUCTURE_LIFECYCLE // DEVOPS_ENGINEERING</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            DevOps &amp; Infrastructure Progression
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-ink-muted leading-relaxed">
            Every backend application is built to be resilient, containerized, orchestrated, and observed from day one.
          </p>
        </div>

        {/* Progression Chain Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {lifecycleNodes.map((node) => (
            <div
              key={node.step}
              className={`rounded-xl border p-5 transition-all ${
                node.active
                  ? "border-border bg-bg-card hover:border-spring/50 hover:bg-bg-cardHover hover:shadow-spring-glow"
                  : "border-dashed border-border/80 bg-bg-card/40"
              }`}
            >
              <div className="flex items-center justify-between border-b border-border-subtle pb-3 font-mono text-xs">
                <span className="text-spring font-bold">[{node.step}]</span>
                <span
                  className={`rounded px-2 py-0.5 text-[10px] font-semibold ${
                    node.active
                      ? "border border-spring/30 bg-spring/10 text-spring-light"
                      : "border border-border text-ink-faint"
                  }`}
                >
                  {node.status}
                </span>
              </div>

              <h3 className="mt-3 text-base font-bold text-ink">
                {node.label}
              </h3>

              <p className="mt-1.5 text-xs leading-relaxed text-ink-muted">
                {node.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Telemetry legend */}
        <div className="mt-8 flex flex-wrap items-center gap-6 font-mono text-xs text-ink-muted border-t border-border-subtle pt-6">
          <span className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-spring shadow-spring-glow" />
            <span className="text-ink">PROD_ACTIVE: Production Verified &amp; Implemented</span>
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full border border-dashed border-border bg-ink-faint/20" />
            <span className="text-ink-muted">SCALING_UP: Active Expansion &amp; IaC</span>
          </span>
        </div>
      </div>
    </section>
  );
}
