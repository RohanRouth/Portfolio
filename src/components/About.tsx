"use client";

import SectionWrapper from "./SectionWrapper";
import { personalInfo } from "@/data/personal";

export default function About() {
  return (
    <SectionWrapper id="about" title="About">
      <p className="max-w-3xl text-lg leading-relaxed text-zinc-400">
        {personalInfo.about}
      </p>
    </SectionWrapper>
  );
}
