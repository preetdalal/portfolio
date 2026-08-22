"use client";

import { pipeline } from "@/lib/data";

export default function Pipeline() {
  return (
    <div
      className="font-mono text-sm"
      role="img"
      aria-label={`Engineering workflow: ${pipeline.join(" to ")}`}
    >
      <div className="rounded-lg border border-border bg-bg-elevated/60 p-5">
        <div className="mb-3 flex items-center gap-2 text-ink-faint">
          <span className="h-2.5 w-2.5 rounded-full bg-[#4B5058]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#4B5058]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#4B5058]" />
          <span className="ml-2 text-xs">pipeline.sh</span>
        </div>
        <ol className="space-y-0">
          {pipeline.map((step, i) => (
            <li
              key={step}
              className="group flex items-center gap-3 opacity-0 animate-[fadein_0.5s_ease-out_forwards]"
              style={{ animationDelay: `${i * 220}ms` }}
            >
              <div className="flex w-5 flex-col items-center">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-signal"
                  aria-hidden
                />
                {i < pipeline.length - 1 && (
                  <span
                    className="h-6 w-px bg-border-DEFAULT/80"
                    aria-hidden
                  />
                )}
              </div>
              <span className="py-1 text-ink-muted transition-colors group-hover:text-ink">
                <span className="text-signal">$</span> {step.toLowerCase()}
              </span>
            </li>
          ))}
          <li className="ml-8 mt-1 flex items-center gap-1 text-ink-faint">
            <span
              className="inline-block h-3.5 w-[7px] animate-[blink_1.1s_steps(1)_infinite] bg-signal/70"
              aria-hidden
            />
          </li>
        </ol>
      </div>
      <style>{`
        @keyframes fadein {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
