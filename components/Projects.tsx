"use client";

import { useState } from "react";
import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [filter, setFilter] = useState<string>("ALL");

  const filteredProjects =
    filter === "ALL"
      ? projects
      : filter === "SPRING"
      ? projects.filter((p) => p.roleType === "Spring Boot / Java")
      : filter === "DEVOPS"
      ? projects.filter((p) => p.roleType === "DevOps & Cloud")
      : projects.filter((p) => p.roleType === "AI/ML & Vision");

  return (
    <section id="projects" className="border-b border-border bg-bg-dark/40">
      <div className="mx-auto max-w-content px-6 py-20">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-spring mb-2">
              <span className="h-1.5 w-1.5 rounded-full bg-spring" />
              <span>SUBSYSTEM // ARCHITECTURE_NODES</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              System Nodes &amp; Engineering Projects
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-ink-muted leading-relaxed">
              Modular production-grade services covering Spring Boot enterprise backend patterns, Kubernetes autoscaling clusters, observability stacks, and deep learning defenses.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            {[
              { id: "ALL", label: "ALL NODES [4]" },
              { id: "SPRING", label: "SPRING BOOT & JAVA" },
              { id: "DEVOPS", label: "K8S & DEVOPS" },
              { id: "AI", label: "AI / ML PIPELINES" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id)}
                className={`rounded-md border px-3 py-1.5 transition-all ${
                  filter === tab.id
                    ? "border-spring bg-spring/15 text-spring-light font-semibold shadow-spring-glow"
                    : "border-border bg-bg-card text-ink-muted hover:border-border/80 hover:text-ink"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Nodes Grid */}
        <div className="space-y-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
