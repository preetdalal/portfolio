"use client";

import { links, systemSpecs } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="bg-bg-dark">
      <div className="mx-auto max-w-content px-6 py-20">
        {/* Terminal Connection Box */}
        <div className="rounded-xl border border-border bg-bg-card p-6 sm:p-10 shadow-2xl overflow-hidden">
          <div className="flex items-center justify-between border-b border-border-subtle pb-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
              <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
              <span className="ml-2 font-mono text-xs text-ink-muted">
                connect-channel.sh // INGRESS_PORT: 443
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 font-mono text-xs text-spring-light">
              <span className="h-1.5 w-1.5 rounded-full bg-spring animate-pulse" />
              LISTENING_FOR_OPPORTUNITIES
            </span>
          </div>

          <div className="max-w-2xl">
            <div className="font-mono text-xs text-spring mb-2">
              <span>$ curl -X POST https://api.preetdalal.dev/v1/handshake</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Initiate Contact &amp; Build Together
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink-muted">
              Seeking high-impact roles and engineering collaborations across <span className="text-spring-light font-medium">DevOps, Cloud Engineering, and Spring Boot Backend Systems</span>. Let&apos;s deploy production-grade software together.
            </p>
          </div>

          {/* Action Hub Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={links.email}
              className="inline-flex items-center gap-2 rounded-md bg-spring px-5 py-2.5 font-mono text-sm font-semibold text-bg-dark shadow-spring-glow transition-all hover:bg-spring-light hover:shadow-spring-glow-lg hover:translate-y-[-1px]"
            >
              <span>Email: preetdalal.dev@gmail.com</span>
              <span>→</span>
            </a>

            <a
              href={links.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-spring/40 bg-spring/10 px-4 py-2.5 font-mono text-sm font-medium text-spring-light transition-all hover:bg-spring hover:text-bg-dark hover:shadow-spring-glow"
            >
              <span>Download Resume.pdf</span>
              <span>↓</span>
            </a>

            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-border bg-bg-dark px-4 py-2.5 font-mono text-sm font-medium text-ink transition-all hover:border-spring hover:text-spring-light hover:bg-bg-cardHover"
            >
              <span>GitHub</span>
              <span className="text-spring">↗</span>
            </a>

            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-border bg-bg-dark px-4 py-2.5 font-mono text-sm font-medium text-ink transition-all hover:border-k8s hover:text-k8s-light hover:bg-bg-cardHover"
            >
              <span>LinkedIn</span>
              <span className="text-k8s">↗</span>
            </a>
          </div>
        </div>
      </div>

      {/* Control Center Telemetry Footer */}
      <footer className="border-t border-border bg-bg-card/30">
        <div className="mx-auto max-w-content px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-ink-muted">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-spring" />
            <span>Preet Dalal // System Control Center v2.4</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-ink-faint">
            <span>REGION: ap-south-1</span>
            <span>|</span>
            <span>NEXT.JS + TAILWIND + SPRING GREEN</span>
            <span>|</span>
            <span>STATUS: 200 OK</span>
          </div>
        </div>
      </footer>
    </section>
  );
}
