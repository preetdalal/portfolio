import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="border-b border-border-subtle">
      <div className="mx-auto max-w-content px-6 py-20">
        <p className="mb-10 font-mono text-xs uppercase tracking-wider text-ink-faint">
          Projects
        </p>
        <div className="space-y-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
