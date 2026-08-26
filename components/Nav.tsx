"use client";

import { useState } from "react";
import { links } from "@/lib/data";

const navItems = [
  { href: "#projects", label: "// PROJECTS", code: "PROJ" },
  { href: "#ai-ml", label: "// AI & ML", code: "AI_ML" },
  { href: "#stack", label: "// TECH STACK", code: "STACK" },
  { href: "#devops", label: "// DEVOPS PIPELINE", code: "DEVOPS" },
  { href: "#contact", label: "// CONNECT", code: "CONN" },
];

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-bg-dark/90 backdrop-blur-md">
      {/* Top micro telemetry bar */}
      <div className="hidden border-b border-border-subtle/60 bg-bg-card/40 px-6 py-1 font-mono text-[11px] text-ink-muted sm:block">
        <div className="mx-auto flex max-w-content items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-spring">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-spring opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-spring"></span>
              </span>
              <span className="font-semibold">NODE_STATUS: ONLINE</span>
            </span>
            <span className="text-ink-faint">|</span>
            <span className="text-ink-muted">REGION: ap-south-1 (Mumbai, IST)</span>
            <span className="text-ink-faint">|</span>
            <span className="text-ink-muted">UPTIME: 99.98%</span>
          </div>
          <div className="flex items-center gap-3 text-ink-muted">
            <span>PING: <span className="text-spring-light">24ms</span></span>
            <span className="text-ink-faint">|</span>
            <span>SEC_LEVEL: <span className="text-cyan">PROD_ENFORCED</span></span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-3.5">
        <a
          href="#top"
          className="group flex items-center gap-2 font-mono text-sm font-semibold tracking-tight text-ink transition-colors hover:text-spring"
        >
          <span className="rounded bg-spring/10 border border-spring/30 px-1.5 py-0.5 text-xs text-spring font-mono">
            SYS:OPS
          </span>
          <span className="text-ink group-hover:text-spring transition-colors">
            preet<span className="text-spring">@</span>control-center
          </span>
          <span className="text-ink-faint text-xs hidden md:inline">v2.4</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="group flex items-center gap-1.5 font-mono text-xs font-medium text-ink-muted transition-all hover:text-spring hover:translate-y-[-1px]"
              >
                <span className="text-spring/60 text-[10px] group-hover:text-spring">#</span>
                <span>{item.label.replace("// ", "")}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5">
          <a
            href={links.resume}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-md border border-spring/40 bg-spring/10 px-3 py-1.5 font-mono text-xs font-medium text-spring-light transition-all hover:bg-spring hover:text-bg-dark hover:shadow-spring-glow"
          >
            <span>Resume.pdf</span>
            <span>↓</span>
          </a>

          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-border bg-bg-card px-3 py-1.5 font-mono text-xs font-medium text-ink-muted transition-all hover:border-spring/50 hover:text-ink hover:bg-bg-cardHover"
          >
            <span>GitHub</span>
            <span className="ml-1 text-spring">↗</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-md border border-border p-1.5 text-ink-muted hover:border-spring hover:text-spring lg:hidden"
            aria-label="Toggle Navigation Menu"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-border bg-bg-dark/95 px-6 py-4 lg:hidden">
          <ul className="space-y-3 font-mono text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-ink-muted hover:text-spring"
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-ink-faint">[{item.code}]</span>
                </a>
              </li>
            ))}
            <li className="pt-2 border-t border-border-subtle">
              <a
                href={links.resume}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between text-spring"
              >
                <span>Download Resume</span>
                <span>↓</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
