"use client";

import { Brain, Server, Cloud, Database, Code } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import TechIcon from "./TechIcon";
import { skillCategories } from "@/data/skills";
import type { LucideIcon } from "lucide-react";

const categoryIcons: Record<string, LucideIcon> = {
  "LLMs & NLP": Brain,
  "Backend & MLOps": Server,
  "Cloud & Infrastructure": Cloud,
  "Retrieval & Storage": Database,
  "Languages & Tools": Code,
};

export default function Skills() {
  return (
    <SectionWrapper id="skills" title="Skills">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => {
          const Icon = categoryIcons[category.name];
          return (
            <div key={category.name}>
              <div className="mb-3 flex items-center gap-2">
                {Icon && (
                  <Icon size={16} className="text-accent/60" />
                )}
                <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                  {category.name}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 rounded-md border border-zinc-800 bg-zinc-900/50 px-3 py-1.5 text-sm text-zinc-300"
                  >
                    <TechIcon name={skill} size={14} />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
