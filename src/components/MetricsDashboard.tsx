'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Activity, Zap, Server, BarChart3 } from 'lucide-react';

export default function MetricsDashboard() {
  const [isSpikeActive, setIsSpikeActive] = useState<boolean>(false);
  const [throughput, setThroughput] = useState<number>(3412);
  const [latency, setLatency] = useState<number>(14.2);
  const [cpu, setCpu] = useState<number>(24);
  const [replicas, setReplicas] = useState<number>(2);

  const canvasReqRef = useRef<HTMLCanvasElement | null>(null);
  const canvasLatRef = useRef<HTMLCanvasElement | null>(null);

  const reqHistoryRef = useRef<number[]>(Array.from({ length: 30 }, () => 3400));
  const latHistoryRef = useRef<number[]>(Array.from({ length: 30 }, () => 14));

  const drawSparkline = (
    canvas: HTMLCanvasElement | null,
    data: number[],
    color: string,
    minVal: number,
    maxVal: number
  ) => {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    const step = w / (data.length - 1);
    const range = maxVal - minVal || 1;

    ctx.beginPath();
    for (let i = 0; i < data.length; i++) {
      const x = i * step;
      const normalized = (data[i] - minVal) / range;
      const y = h - (normalized * (h - 10) + 5);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.strokeStyle = color;
    ctx.lineWidth = 2.2;
    ctx.stroke();

    // Area fill
    ctx.lineTo(w, h);
    ctx.lineTo(0, h);
    ctx.closePath();
    ctx.fillStyle = color.replace(')', ', 0.15)').replace('rgb', 'rgba');
    ctx.fill();
  };

  useEffect(() => {
    const updateMetrics = () => {
      const baseReq = isSpikeActive ? 8600 : 3400;
      const baseLat = isSpikeActive ? 34 : 14;
      const baseCpu = isSpikeActive ? 78 : 24;
      const curReplicas = isSpikeActive ? 6 : 2;

      const curReq = Math.round(baseReq + (Math.random() - 0.5) * (isSpikeActive ? 1200 : 300));
      const curLat = parseFloat((baseLat + (Math.random() - 0.5) * (isSpikeActive ? 7 : 2.2)).toFixed(1));
      const curCpu = Math.round(baseCpu + (Math.random() - 0.5) * (isSpikeActive ? 8 : 3));

      reqHistoryRef.current.push(curReq);
      reqHistoryRef.current.shift();

      latHistoryRef.current.push(curLat);
      latHistoryRef.current.shift();

      setThroughput(curReq);
      setLatency(curLat);
      setCpu(curCpu);
      setReplicas(curReplicas);

      drawSparkline(canvasReqRef.current, reqHistoryRef.current, 'rgb(56, 189, 248)', 2000, 11000);
      drawSparkline(canvasLatRef.current, latHistoryRef.current, 'rgb(16, 185, 129)', 5, 50);
    };

    const interval = setInterval(updateMetrics, 1200);
    updateMetrics();

    return () => clearInterval(interval);
  }, [isSpikeActive]);

  const toggleSpike = () => {
    setIsSpikeActive((prev) => !prev);
  };

  return (
    <section className="relative z-10 py-20 border-b border-white/[0.08] bg-bg-sectionAlt" id="telemetry">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col mb-10">
          <span className="font-mono text-xs font-semibold text-brand-ice uppercase tracking-wider px-3 py-1 rounded bg-brand-ice/10 border border-brand-ice/20 w-fit mb-3">
            Observability &amp; SRE
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2">
            Live Cluster Telemetry &amp; Metrics HUD
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Real-time metrics stream scraping container memory, request volume, and model inference latency. Test how the autoscaler responds under load.
          </p>
        </div>

        {/* Telemetry Dashboard Box */}
        <div className="bg-[#0b0e15] border border-white/[0.14] rounded-xl p-6 sm:p-8 shadow-2xl">
          {/* Controls Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-white/[0.08]">
            <div className="flex items-center gap-2.5 font-mono text-sm font-semibold text-white">
              <span className="w-2.5 h-2.5 rounded-full bg-telemetry-green shadow-[0_0_8px_#10b981] animate-pulse-ring" />
              <span>PROMETHEUS TELEMETRY STREAM · CLUSTER ID: PROD-EKS-01</span>
            </div>

            <button
              onClick={toggleSpike}
              className={`font-mono text-xs font-semibold px-4 py-2 rounded transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                isSpikeActive
                  ? 'bg-telemetry-orange text-white shadow-[0_0_16px_rgba(249,115,22,0.6)] scale-105'
                  : 'bg-telemetry-orange/10 border border-telemetry-orange/40 text-telemetry-orange hover:bg-telemetry-orange/20'
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>{isSpikeActive ? 'Traffic Spike ACTIVE ⚡' : 'Simulate Traffic Spike ⚡'}</span>
            </button>
          </div>

          {/* 4 Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Metric 1: Request Throughput */}
            <div className="bg-bg-card border border-white/[0.08] rounded-xl p-5 flex flex-col justify-between shadow-card">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs text-slate-400 font-semibold tracking-wider">
                  REQUEST THROUGHPUT (HTTP 2xx)
                </span>
                <span className="font-mono text-2xl font-extrabold text-brand-ice">
                  {throughput.toLocaleString()} req/s
                </span>
              </div>
              <canvas
                ref={canvasReqRef}
                width={450}
                height={65}
                className="w-full h-[65px] rounded bg-black/30"
              />
            </div>

            {/* Metric 2: P99 Latency */}
            <div className="bg-bg-card border border-white/[0.08] rounded-xl p-5 flex flex-col justify-between shadow-card">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs text-slate-400 font-semibold tracking-wider">
                  P99 MODEL INFERENCE LATENCY
                </span>
                <span className="font-mono text-2xl font-extrabold text-telemetry-green">
                  {latency} ms
                </span>
              </div>
              <canvas
                ref={canvasLatRef}
                width={450}
                height={65}
                className="w-full h-[65px] rounded bg-black/30"
              />
            </div>

            {/* Metric 3: Container CPU */}
            <div className="bg-bg-card border border-white/[0.08] rounded-xl p-5 flex flex-col justify-between shadow-card">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs text-slate-400 font-semibold tracking-wider">
                  CONTAINER CPU UTILIZATION
                </span>
                <span className="font-mono text-2xl font-extrabold text-brand-ice">
                  {cpu}%
                </span>
              </div>
              <div className="font-mono text-xs text-slate-400 mt-2">
                Threshold: &gt;70% triggers HPA scale-up · Current state:{' '}
                <span className={cpu > 70 ? 'text-telemetry-orange font-bold' : 'text-telemetry-green font-bold'}>
                  {cpu > 70 ? 'SCALING UP' : 'NOMINAL'}
                </span>
              </div>
            </div>

            {/* Metric 4: Active Replicas */}
            <div className="bg-bg-card border border-white/[0.08] rounded-xl p-5 flex flex-col justify-between shadow-card">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs text-slate-400 font-semibold tracking-wider">
                  HPA ACTIVE POD REPLICAS
                </span>
                <span className="font-mono text-2xl font-extrabold text-telemetry-orange">
                  {replicas} pods
                </span>
              </div>
              <div className="font-mono text-xs text-slate-400 mt-2">
                Autoscaling policy: Min 2 · Max 8 · Scale-down stabilization: 300s
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
