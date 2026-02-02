"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/data/personal";
import ParticleBackground from "./ParticleBackground";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      <ParticleBackground />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col-reverse items-center gap-12 md:flex-row md:items-center md:gap-16">
        {/* Text content */}
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="mb-4 font-mono text-sm text-accent">Hi, I&apos;m</p>
            <h1 className="mb-4 text-4xl font-bold leading-tight text-zinc-100 md:text-6xl">
              {personalInfo.name}
              <span className="text-accent">.</span>
            </h1>
            <p className="mb-2 text-xl text-zinc-300 md:text-2xl">
              {personalInfo.title}
            </p>
            <p className="mb-8 max-w-2xl text-lg text-zinc-500">
              {personalInfo.headline}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mb-10 flex flex-wrap gap-4"
          >
            {personalInfo.highlights.map((h) => (
              <div
                key={h.label}
                className="rounded-md border border-zinc-800 bg-zinc-900/50 px-4 py-2 backdrop-blur-sm"
              >
                <span className="block text-xs text-zinc-500">{h.label}</span>
                <span className="text-sm font-medium text-zinc-200">
                  {h.value}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-5"
          >
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 transition-colors hover:text-zinc-100"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 transition-colors hover:text-zinc-100"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={personalInfo.socials.email}
              className="text-zinc-500 transition-colors hover:text-zinc-100"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <span className="mx-2 h-4 w-px bg-zinc-800" />
            <a
              href="#experience"
              className="flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-accent"
            >
              See my work <ArrowDown size={14} />
            </a>
          </motion.div>
        </div>

        {/* Headshot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="shrink-0"
        >
          <div className="relative h-48 w-48 md:h-56 md:w-56">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-accent/20 to-transparent" />
            {/* Replace /images/headshot.jpg with your photo */}
            <img
              src="/images/headshot.jpg"
              alt={personalInfo.name}
              className="relative h-full w-full rounded-full border-2 border-zinc-800 object-cover"
              onError={(e) => {
                // Fallback: hide image and show initials
                const target = e.currentTarget;
                target.style.display = "none";
                target.nextElementSibling?.classList.remove("hidden");
              }}
            />
            <div className="relative hidden h-full w-full items-center justify-center rounded-full border-2 border-zinc-800 bg-zinc-900 text-3xl font-bold text-zinc-600">
              RR
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
