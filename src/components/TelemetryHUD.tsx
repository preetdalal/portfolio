'use client';

import React, { useState, useEffect } from 'react';

export default function TelemetryHUD() {
  const [time, setTime] = useState<string>('IST');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }) + ' IST'
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#080a0f]/90 backdrop-blur-md font-mono text-xs text-slate-400">
      <div className="max-w-6xl mx-auto px-6 py-2.5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="w-2 h-2 rounded-full bg-telemetry-green shadow-[0_0_8px_#10b981] animate-pulse-ring" />
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-brand-ice/10 text-brand-ice border border-brand-ice/20 font-semibold">
            ● k8s-prod-ap-south
          </span>
          <span>Pods: <strong className="text-slate-200">10/10 Healthy</strong></span>
          <span className="text-slate-600">·</span>
          <span>Prometheus: <strong className="text-slate-200">Scraping 15s</strong></span>
          <span className="text-slate-600">·</span>
          <span>ML Inference P99: <strong className="text-slate-200">38.4ms</strong></span>
        </div>

        <div className="flex items-center gap-4 text-slate-400">
          <span>Mumbai, IN · <span className="text-slate-200 font-medium">{time}</span></span>
          <a
            href="mailto:mdalal.preet@gmail.com"
            className="hover:text-brand-ice transition-colors duration-150"
          >
            mdalal.preet@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
