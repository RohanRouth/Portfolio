"use client";

import { ExternalLink } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { writingPosts } from "@/data/extras";

export default function Writing() {
  if (writingPosts.length === 0) return null;

  return (
    <SectionWrapper id="writing" title="Writing">
      <div className="space-y-4">
        {writingPosts.map((post) => (
          <a
            key={post.url}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-lg border border-zinc-800 bg-zinc-900/30 px-5 py-4 transition-colors hover:border-zinc-700"
          >
            <div>
              <h3 className="text-sm font-medium text-zinc-200 group-hover:text-zinc-100">
                {post.title}
              </h3>
              <p className="mt-1 text-xs text-zinc-600">
                {post.platform} &middot; {post.date}
              </p>
            </div>
            <ExternalLink
              size={14}
              className="shrink-0 text-zinc-700 transition-colors group-hover:text-zinc-400"
            />
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
}
