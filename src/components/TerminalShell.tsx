'use client';

import React, { useState, useRef, useEffect } from 'react';
import { TERMINAL_COMMANDS } from '@/data/terminalCommands';
import { Terminal, CornerDownLeft } from 'lucide-react';

interface HistoryEntry {
  command?: string;
  output: string[];
}

export default function TerminalShell() {
  const [input, setInput] = useState<string>('');
  const [history, setHistory] = useState<HistoryEntry[]>([
    {
      output: [
        "Preet Dalal Kubernetes Node Shell (v1.30.2-prod)",
        "Type 'help' to see all available cluster commands, or click the quick action chips below.",
        ""
      ]
    }
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);

  const windowRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const quickCommands = [
    'kubectl get pods',
    'kubectl get nodes',
    'kubectl get hpa',
    'kubectl describe svc',
    'kubectl logs fraudguard',
    'helm list',
    'neofetch',
    'skills',
    'clear'
  ];

  const handleExecute = (cmdStr: string) => {
    const trimmed = cmdStr.trim();
    if (!trimmed) return;

    if (trimmed.toLowerCase() === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    const commandFn = TERMINAL_COMMANDS[trimmed.toLowerCase()];
    let output: string[] = [];

    if (commandFn) {
      output = commandFn();
    } else {
      output = [
        `command not found: "${trimmed}"`,
        "Type 'help' for a list of available cluster diagnostic commands."
      ];
    }

    setHistory((prev) => [...prev, { command: trimmed, output }]);
    setCommandHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);
    setInput('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleExecute(input);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInput(commandHistory[nextIndex]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= commandHistory.length) {
        setHistoryIndex(-1);
        setInput('');
      } else {
        setHistoryIndex(nextIndex);
        setInput(commandHistory[nextIndex]);
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const match = quickCommands.find((c) => c.startsWith(input.trim().toLowerCase()));
      if (match) setInput(match);
    }
  };

  useEffect(() => {
    if (windowRef.current) {
      windowRef.current.scrollTop = windowRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <section className="relative z-10 py-20 border-b border-white/[0.08]" id="terminal">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col mb-10">
          <span className="font-mono text-xs font-semibold text-brand-ice uppercase tracking-wider px-3 py-1 rounded bg-brand-ice/10 border border-brand-ice/20 w-fit mb-3">
            Interactive Diagnostics
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2">
            Kubernetes &amp; Cluster CLI Shell
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Execute real cluster status commands, test Prometheus scrape diagnostics, inspect Helm releases, or check neofetch telemetry specs.
          </p>
        </div>

        {/* Terminal Card */}
        <div className="bg-[#080b12] border border-white/[0.14] rounded-xl overflow-hidden shadow-2xl font-mono">
          {/* Window Top Controls */}
          <div className="flex items-center justify-between px-5 py-3 bg-[#0d121c] border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-telemetry-red" />
              <span className="w-3 h-3 rounded-full bg-telemetry-amber" />
              <span className="w-3 h-3 rounded-full bg-telemetry-green" />
              <span className="text-xs text-slate-400 ml-2 font-mono">preet@djsce-k8s: ~/cluster-admin</span>
            </div>
            <div className="text-xs text-brand-ice font-semibold">
              BASH 5.2 / KUBECTL v1.30
            </div>
          </div>

          {/* Quick Command Chips */}
          <div className="flex items-center gap-2 px-5 py-2.5 bg-white/[0.02] border-b border-white/[0.06] overflow-x-auto text-xs text-slate-400">
            <span className="text-slate-400 whitespace-nowrap">Quick Run:</span>
            {quickCommands.map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleExecute(cmd)}
                className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:border-brand-ice hover:text-brand-ice hover:bg-brand-ice/10 transition-colors whitespace-nowrap cursor-pointer"
              >
                {cmd}
              </button>
            ))}
          </div>

          {/* Terminal Output Screen */}
          <div
            ref={windowRef}
            onClick={() => inputRef.current?.focus()}
            className="p-5 sm:p-6 h-80 sm:h-96 overflow-y-auto font-mono text-xs sm:text-sm text-slate-300 leading-relaxed cursor-text bg-[#06080d]"
          >
            {history.map((entry, idx) => (
              <div key={idx} className="mb-4">
                {entry.command && (
                  <div className="text-brand-ice font-bold mb-1 flex items-center gap-2">
                    <span className="text-brand-sky select-none">preet@k8s:~$</span>
                    <span>{entry.command}</span>
                  </div>
                )}
                {entry.output.map((line, lIdx) => (
                  <div key={lIdx} className="text-slate-300 whitespace-pre-wrap leading-relaxed">
                    {line}
                  </div>
                ))}
              </div>
            ))}

            {/* Input Row */}
            <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-2">
              <span className="text-brand-ice font-bold select-none">preet@k8s:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type a command (e.g. kubectl get pods, help, neofetch)..."
                className="flex-1 bg-transparent text-white font-mono text-xs sm:text-sm outline-none border-none placeholder:text-slate-600"
                autoFocus
              />
              <button type="submit" className="text-slate-500 hover:text-brand-ice p-1">
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
