"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";

const statusColors: Record<string, string> = {
  shipped:  "var(--fg-muted)",
  building: "var(--accent)",
  research: "var(--accent)",
  paused:   "var(--fg-subtle)",
};

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

interface Props {
  project: Project;
  index: number;
  large?: boolean;
}

export default function ProjectCard({ project, index, large }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.07, ease: easeOutExpo }}
      style={{ height: "100%" }}
    >
      <Link
        href={`/work/${project.slug}`}
        className="pc-link block h-full"
        style={{
          borderTop: "1px solid var(--border)",
          paddingTop: large ? "clamp(1.5rem, 3vw, 2.5rem)" : "1.5rem",
          paddingBottom: large ? "clamp(1.5rem, 3vw, 2.5rem)" : "1.5rem",
        }}
      >
        {/* Status + year */}
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <span className="text-label" style={{ color: statusColors[project.status] }}>
            {project.statusLabel}
          </span>
          <span className="text-label" style={{ color: "var(--fg-subtle)" }}>
            {project.year}
          </span>
        </div>

        {/* Title */}
        <h3
          className={`pc-title ${large ? "text-display" : "text-display-sm"}`}
          style={{
            color: "var(--fg)",
            marginBottom: "clamp(0.75rem, 1.5vw, 1.25rem)",
          }}
        >
          {project.title}
        </h3>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: large ? "clamp(0.9rem, 1.2vw, 1.05rem)" : "0.875rem",
            color: "var(--fg-muted)",
            lineHeight: 1.55,
            fontWeight: 300,
            maxWidth: "52ch",
            marginBottom: "clamp(1.25rem, 2.5vw, 2rem)",
          }}
        >
          {project.subtitle}
        </p>

        {/* Stack tags + role */}
        <div className="flex flex-wrap items-center gap-2">
          {project.stack.slice(0, large ? 5 : 3).map((tech) => (
            <span
              key={tech}
              className="text-label"
              style={{
                color: "var(--fg-subtle)",
                border: "1px solid var(--border)",
                padding: "0.2rem 0.5rem",
                borderRadius: "2px",
              }}
            >
              {tech}
            </span>
          ))}
          {project.stack.length > (large ? 5 : 3) && (
            <span className="text-label" style={{ color: "var(--fg-subtle)" }}>
              +{project.stack.length - (large ? 5 : 3)}
            </span>
          )}
          <span className="text-label pc-role ml-auto" style={{ color: "var(--fg-muted)" }}>
            View case study ↗
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
