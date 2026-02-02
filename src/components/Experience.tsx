"use client";

import { Building2 } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import TechIcon from "./TechIcon";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <SectionWrapper id="experience" title="Experience">
      <div className="space-y-12">
        {experiences.map((exp) => (
          <div key={`${exp.company}-${exp.role}`} className="group">
            <div className="mb-4 flex flex-col justify-between gap-3 md:flex-row md:items-start">
              <div className="flex gap-4">
                {/* Company logo */}
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900">
                  {exp.logo ? (
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="h-full w-full object-contain p-1.5"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        e.currentTarget.nextElementSibling?.classList.remove("hidden");
                      }}
                    />
                  ) : null}
                  <Building2
                    size={18}
                    className={`text-zinc-600 ${exp.logo ? "hidden" : ""}`}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-100">
                    {exp.role}
                  </h3>
                  <p className="text-zinc-400">
                    {exp.company}
                    {exp.client && (
                      <span className="text-zinc-500"> — {exp.client}</span>
                    )}
                  </p>
                </div>
              </div>
              <span className="shrink-0 font-mono text-sm text-zinc-600">
                {exp.period}
              </span>
            </div>
            <ul className="mb-4 space-y-2 md:pl-14">
              {exp.bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-sm leading-relaxed text-zinc-400"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" />
                  {bullet}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 md:pl-14">
              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-xs text-zinc-500"
                >
                  <TechIcon name={tech} size={12} />
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
