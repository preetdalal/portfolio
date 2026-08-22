import Pipeline from "./Pipeline";
import { links } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border-subtle"
    >
      <div className="grid-fade absolute inset-0" aria-hidden />
      <div className="relative mx-auto grid max-w-content gap-12 px-6 py-24 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-32">
        <div>
          <p className="mb-4 font-mono text-sm text-signal">preet dalal</p>
          <h1 className="text-balance text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl">
            DevOps / Cloud Engineering
          </h1>
          <p className="mt-3 font-mono text-sm text-ink-muted">
            Backend · Applied AI/ML
          </p>
          <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-ink-muted">
            B.Tech IT student at DJSCE Mumbai. I build backend systems in
            Java and Python, then containerize and deploy them, moving
            deeper into infrastructure, automation, and observability with
            each project.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="rounded-md bg-signal px-4 py-2 font-mono text-sm font-medium text-bg transition-colors hover:bg-signal-glow"
            >
              View projects
            </a>
            <a
              href={links.resume}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-border px-4 py-2 font-mono text-sm text-ink-muted transition-colors hover:border-signal hover:text-ink"
            >
              Resume
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-border px-4 py-2 font-mono text-sm text-ink-muted transition-colors hover:border-signal hover:text-ink"
            >
              GitHub
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-border px-4 py-2 font-mono text-sm text-ink-muted transition-colors hover:border-signal hover:text-ink"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="md:pl-4">
          <Pipeline />
        </div>
      </div>
    </section>
  );
}
