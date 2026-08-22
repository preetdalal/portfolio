import { Project } from "@/lib/data";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-lg border border-border bg-bg-elevated p-6 transition-colors hover:border-border-DEFAULT hover:bg-bg-hover sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-ink">{project.name}</h3>
          <p className="mt-1 max-w-2xl text-sm text-ink-muted">
            {project.oneLiner}
          </p>
        </div>
        <div className="flex shrink-0 gap-2">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-border px-3 py-1.5 font-mono text-xs text-ink-muted transition-colors hover:border-signal hover:text-ink"
          >
            Code ↗
          </a>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-signal/40 px-3 py-1.5 font-mono text-xs text-signal transition-colors hover:border-signal hover:bg-signal/10"
            >
              Live ↗
            </a>
          )}
        </div>
      </div>

      <p className="mt-5 max-w-3xl text-sm leading-relaxed text-ink-muted">
        {project.problem}
      </p>

      <ul className="mt-4 space-y-1.5">
        {project.decisions.map((point) => (
          <li key={point} className="flex gap-2 text-sm text-ink-muted">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal/70" />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded border border-border-subtle px-2 py-1 font-mono text-[11px] text-ink-faint"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
