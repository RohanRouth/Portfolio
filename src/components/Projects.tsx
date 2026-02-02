"use client";

import { ExternalLink, Github } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import TechIcon from "./TechIcon";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <SectionWrapper id="projects" title="Projects">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group rounded-lg border border-zinc-800 bg-zinc-900/30 p-6 transition-colors hover:border-zinc-700"
          >
            <div className="mb-3 flex items-start justify-between">
              <h3 className="text-lg font-semibold text-zinc-100">
                {project.title}
              </h3>
              <div className="flex gap-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-600 transition-colors hover:text-zinc-300"
                    aria-label={`${project.title} source code`}
                  >
                    <Github size={16} />
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-600 transition-colors hover:text-zinc-300"
                    aria-label={`${project.title} live link`}
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
            <p className="mb-3 text-sm text-zinc-500">{project.problem}</p>
            <p className="mb-4 text-sm leading-relaxed text-zinc-400">
              {project.architecture}
            </p>
            <p className="mb-4 text-sm font-medium text-accent/80">
              {project.impact}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 px-2.5 py-0.5 text-xs text-zinc-500"
                >
                  <TechIcon name={tech} size={11} />
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
