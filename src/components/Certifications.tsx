"use client";

import { ExternalLink } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { certifications } from "@/data/extras";

export default function Certifications() {
  if (certifications.length === 0) return null;

  return (
    <SectionWrapper id="certifications" title="Certifications">
      <div className="grid gap-4 md:grid-cols-2">
        {certifications.map((cert) => (
          <div
            key={cert.name}
            className="rounded-lg border border-zinc-800 bg-zinc-900/30 px-5 py-4"
          >
            <div className="flex items-center gap-4">
              {cert.badge && (
                <img
                  src={cert.badge}
                  alt={`${cert.name} badge`}
                  className="h-16 w-16 shrink-0 object-contain"
                />
              )}
              <div className="flex-1">
                <h3 className="text-sm font-medium text-zinc-200">
                  {cert.name}
                </h3>
                <p className="mt-1 text-xs text-zinc-500">
                  {cert.issuer} &middot; {cert.date}
                </p>
              </div>
              {cert.url && (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-700 transition-colors hover:text-zinc-400"
                  aria-label={`View ${cert.name} certificate`}
                >
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
