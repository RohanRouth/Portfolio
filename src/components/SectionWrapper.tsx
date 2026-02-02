"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

interface SectionWrapperProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({
  id,
  title,
  children,
  className = "",
}: SectionWrapperProps) {
  const { ref, isInView } = useInView(0.05);

  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div ref={ref} className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="mb-12 text-2xl font-bold text-zinc-100 md:text-3xl">
            {title}
            <span className="text-accent">.</span>
          </h2>
          {children}
        </motion.div>
      </div>
    </section>
  );
}
