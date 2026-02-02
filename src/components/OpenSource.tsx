"use client";

import { ExternalLink } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { openSourceContributions } from "@/data/extras";

export default function OpenSource() {
  if (openSourceContributions.length === 0) return null;

  return (
    <SectionWrapper id="open-source" title="Open Source">
      <div className="space-y-4">
        {openSourceContributions.map((contrib) => (
          <a
            key={contrib.url}
            href={contrib.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start justify-between rounded-lg border border-zinc-800 bg-zinc-900/30 px-5 py-4 transition-colors hover:border-zinc-700"
          >
            <div>
              <h3 className="text-sm font-medium text-zinc-200 group-hover:text-zinc-100">
                {contrib.project}
              </h3>
              <p className="mt-1 text-sm text-zinc-500">
                {contrib.description}
              </p>
            </div>
            <ExternalLink
              size={14}
              className="mt-1 shrink-0 text-zinc-700 transition-colors group-hover:text-zinc-400"
            />
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
}
