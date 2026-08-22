import { links } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact">
      <div className="mx-auto max-w-content px-6 py-24 text-center">
        <h2 className="text-balance text-3xl font-semibold text-ink sm:text-4xl">
          Let&apos;s build something.
        </h2>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={links.resume}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-signal/40 px-4 py-2 font-mono text-sm text-signal transition-colors hover:border-signal hover:bg-signal/10"
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
      <footer className="border-t border-border-subtle">
        <div className="mx-auto max-w-content px-6 py-6 text-center font-mono text-xs text-ink-faint">
          Preet Dalal - built with Next.js, TypeScript, Tailwind CSS
        </div>
      </footer>
    </section>
  );
}
