"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { personalInfo } from "@/data/personal";

const contactLinks = [
  {
    label: "Email",
    href: personalInfo.socials.email,
    icon: Mail,
    display: personalInfo.email,
  },
  {
    label: "LinkedIn",
    href: personalInfo.socials.linkedin,
    icon: Linkedin,
    display: "linkedin.com/in/rohanrouth",
  },
  {
    label: "GitHub",
    href: personalInfo.socials.github,
    icon: Github,
    display: "github.com/RohanRouth",
  },
];

export default function Contact() {
  return (
    <SectionWrapper id="contact" title="Contact">
      <p className="mb-8 max-w-xl text-zinc-400">
        I&apos;m open to conversations about ML engineering roles, interesting
        technical problems, or collaboration on AI systems. Feel free to reach
        out.
      </p>
      <div className="flex flex-col gap-4">
        {contactLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={
              link.href.startsWith("mailto:")
                ? undefined
                : "noopener noreferrer"
            }
            className="group flex items-center gap-3 text-zinc-400 transition-colors hover:text-zinc-100"
          >
            <link.icon
              size={18}
              className="text-zinc-600 transition-colors group-hover:text-accent"
            />
            <span className="text-sm">{link.display}</span>
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
}
