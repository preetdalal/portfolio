"use client";

import Image from "next/image";
import Pipeline from "./Pipeline";
import { links, systemSpecs } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border bg-bg-dark"
    >
      {/* Background grid pattern & ambient gradient */}
      <div className="grid-fade absolute inset-0 pointer-events-none" aria-hidden />
      <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-spring/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 h-72 w-72 rounded-full bg-k8s/5 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-content px-6 py-16 sm:py-20 lg:py-24">
        {/* Live Status Indicator Badge */}
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-spring/40 bg-spring/10 px-3.5 py-1.5 font-mono text-xs font-medium text-spring-light shadow-spring-glow">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-spring opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-spring"></span>
            </span>
            <span className="tracking-tight">{systemSpecs.statusText}</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 rounded-md border border-border-subtle bg-bg-card/70 px-3 py-1 font-mono text-[11px] text-ink-muted">
            <span className="text-k8s-light font-semibold">CLUSTER:</span>
            <span>{systemSpecs.activeNodes}</span>
          </div>

          <div className="hidden md:inline-flex items-center gap-2 rounded-md border border-border-subtle bg-bg-card/70 px-3 py-1 font-mono text-[11px] text-ink-muted">
            <span className="text-cyan font-semibold">REGION:</span>
            <span>{systemSpecs.location}</span>
          </div>
        </div>

        {/* Main Grid: Left Specs & Bio, Right Profile & Telemetry Pipeline */}
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            {/* Telemetry Header Tags */}
            <div className="flex items-center gap-2 font-mono text-xs text-spring mb-3">
              <span className="text-ink-faint">&gt;</span>
              <span className="font-semibold tracking-wider uppercase">ENGINEER_TELEMETRY // ROOT_SPEC</span>
            </div>

            {/* Engineer Name & Title */}
            <h1 className="text-balance text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Preet Dalal
            </h1>

            {/* Core Roles with Spring Boot Green & K8s Blue Accents */}
            <div className="mt-3 flex flex-wrap items-center gap-2 font-mono text-sm sm:text-base">
              <span className="font-semibold text-spring-light">
                DevOps &amp; Cloud
              </span>
              <span className="text-ink-faint">|</span>
              <span className="font-semibold text-ink">
                Java &amp; Spring Boot
              </span>
              <span className="text-ink-faint">|</span>
              <span className="text-k8s-light font-medium">
                Kubernetes • Docker • AI/ML
              </span>
            </div>

            {/* Bio summary paragraph */}
            <p className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-ink-muted sm:text-lg">
              B.Tech IT student at <span className="text-ink font-medium">DJSCE Mumbai</span>. I build production-grade, distributed backend microservices in <span className="text-spring-light font-medium">Java &amp; Spring Boot</span>, orchestrate resilient workloads with <span className="text-k8s-light font-medium">Docker &amp; Kubernetes</span>, and engineer scalable <span className="text-cyan font-medium">AI/ML model serving pipelines</span>.
            </p>

            {/* Quick System Specs Box */}
            <div className="mt-7 grid grid-cols-2 gap-3 rounded-lg border border-border bg-bg-card/70 p-3.5 font-mono text-xs sm:grid-cols-3">
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-ink-faint block">CORE ENGINE</span>
                <span className="text-ink font-medium block">Spring Boot 3 / Java 17</span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-ink-faint block">ORCHESTRATION</span>
                <span className="text-ink font-medium block">Kubernetes + Docker</span>
              </div>
              <div className="col-span-2 sm:col-span-1 space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-ink-faint block">AI RUNTIME</span>
                <span className="text-ink font-medium block">PyTorch + Hugging Face</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md bg-spring px-5 py-2.5 font-mono text-sm font-semibold text-bg-dark shadow-spring-glow transition-all hover:bg-spring-light hover:shadow-spring-glow-lg hover:translate-y-[-1px]"
              >
                <span>Deploy Projects</span>
                <span>→</span>
              </a>

              <a
                href={links.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-bg-card px-4 py-2.5 font-mono text-sm font-medium text-ink transition-all hover:border-spring hover:text-spring-light hover:bg-bg-cardHover"
              >
                <span>System Specs (Resume)</span>
                <span>↗</span>
              </a>

              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-border bg-bg-card px-4 py-2.5 font-mono text-sm font-medium text-ink-muted transition-all hover:border-spring hover:text-ink hover:bg-bg-cardHover"
              >
                <span>GitHub</span>
                <span className="text-spring">↗</span>
              </a>

              <a
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-border bg-bg-card px-4 py-2.5 font-mono text-sm font-medium text-ink-muted transition-all hover:border-k8s hover:text-k8s-light hover:bg-bg-cardHover"
              >
                <span>LinkedIn</span>
                <span className="text-k8s">↗</span>
              </a>
            </div>
          </div>

          {/* Right Column: Profile Photo Container & Pipeline Live Telemetry */}
          <div className="space-y-6">
            {/* Profile Photo Spec Container */}
            <div className="relative mx-auto max-w-sm rounded-xl border border-spring/40 bg-bg-card p-4 shadow-spring-glow">
              {/* HUD corner brackets */}
              <div className="absolute top-2 left-2 h-3 w-3 border-t-2 border-l-2 border-spring" />
              <div className="absolute top-2 right-2 h-3 w-3 border-t-2 border-r-2 border-spring" />
              <div className="absolute bottom-2 left-2 h-3 w-3 border-b-2 border-l-2 border-spring" />
              <div className="absolute bottom-2 right-2 h-3 w-3 border-b-2 border-r-2 border-spring" />

              <div className="flex items-center gap-4">
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg border border-spring/60 bg-bg-dark">
                  <Image
                    src="/selfpic.jpeg"
                    alt="Preet Dalal - DevOps & Backend Engineer"
                    fill
                    sizes="96px"
                    className="object-cover object-center filter grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
                    priority
                  />
                  <div className="absolute inset-0 bg-spring/10 mix-blend-overlay pointer-events-none" />
                </div>

                <div className="flex-1 font-mono">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-spring">SYS:PROFILE</span>
                    <span className="rounded bg-spring/15 px-1.5 py-0.5 text-[9px] font-bold text-spring-light">ACTIVE</span>
                  </div>
                  <h3 className="mt-1 text-sm font-bold text-ink">Preet Dalal</h3>
                  <p className="text-[11px] text-ink-muted">DevOps &amp; Backend Engineer</p>
                  <div className="mt-2 flex items-center gap-2 text-[10px] text-ink-faint">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-spring" />
                    <span>DJSCE Mumbai (CGPA 8.4)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Pipeline Visualizer Card */}
            <Pipeline />
          </div>
        </div>
      </div>
    </section>
  );
}
