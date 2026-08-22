import { links } from "@/lib/data";

const navItems = [
  { href: "#projects", label: "Projects" },
  { href: "#stack", label: "Stack" },
  { href: "#devops", label: "DevOps" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-mono text-sm text-ink hover:text-signal transition-colors"
        >
          preet<span className="text-signal">@</span>portfolio
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="font-mono text-sm text-ink-muted hover:text-ink transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={links.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-md border border-border px-3 py-1.5 font-mono text-xs text-ink-muted hover:border-signal hover:text-ink transition-colors"
        >
          GitHub ↗
        </a>
      </nav>
    </header>
  );
}
