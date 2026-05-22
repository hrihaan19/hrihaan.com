"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

const statusColors: Record<string, string> = {
  shipped:  "var(--fg-muted)",
  building: "var(--accent)",
  research: "var(--accent)",
  paused:   "var(--fg-subtle)",
};

export default function CaseStudy({ project }: { project: Project }) {
  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
      {/* Back nav */}
      <div
        className="container-ed"
        style={{ paddingTop: "2rem", paddingBottom: "1rem" }}
      >
        <Link
          href="/#work"
          className="text-label transition-opacity duration-200 hover:opacity-60"
          style={{ color: "var(--fg-muted)" }}
        >
          ← Back
        </Link>
      </div>

      {/* Opening spread */}
      <section
        className="container-ed"
        style={{ paddingTop: "clamp(4rem, 8vw, 7rem)", paddingBottom: "clamp(3rem, 6vw, 5rem)" }}
      >
        {/* Status + year */}
        <motion.div
          className="flex items-center gap-4 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: easeOutExpo }}
        >
          <span className="text-label" style={{ color: statusColors[project.status] }}>
            {project.statusLabel}
          </span>
          <span className="text-label" style={{ color: "var(--fg-subtle)" }}>
            {project.year}
          </span>
          <span className="text-label" style={{ color: "var(--fg-subtle)" }}>
            {project.role}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-display"
          style={{
            color: "var(--fg)",
            marginBottom: "clamp(1.5rem, 3vw, 2.5rem)",
            maxWidth: "14ch",
          }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: easeOutExpo }}
        >
          {project.title}
        </motion.h1>

        {/* Lead */}
        <motion.p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(1.05rem, 1.5vw, 1.25rem)",
            color: "var(--fg-muted)",
            lineHeight: 1.6,
            fontWeight: 300,
            maxWidth: "56ch",
            marginBottom: "clamp(2rem, 4vw, 3.5rem)",
          }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.12, ease: easeOutExpo }}
        >
          {project.subtitle}
        </motion.p>

        {/* Stack tags */}
        <motion.div
          className="flex flex-wrap gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-label"
              style={{
                color: "var(--fg-subtle)",
                border: "1px solid var(--border)",
                padding: "0.25rem 0.6rem",
                borderRadius: "2px",
              }}
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* GitHub link if available */}
        {project.github && (
          <motion.div
            className="mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.25 }}
          >
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="link-line link-accent text-label"
              style={{ color: "var(--fg-muted)" }}
            >
              View on GitHub ↗
            </a>
          </motion.div>
        )}
      </section>

      {/* Divider */}
      <div className="container-ed">
        <div style={{ height: "1px", background: "var(--border)" }} />
      </div>

      {/* Case study body */}
      <article
        className="container-ed"
        style={{
          paddingTop: "clamp(3rem, 6vw, 5rem)",
          paddingBottom: "clamp(5rem, 10vw, 8rem)",
          maxWidth: "860px",
        }}
      >
        {/* Description */}
        <motion.section
          style={{ marginBottom: "clamp(3rem, 6vw, 5rem)" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOutExpo }}
        >
          <span
            className="text-label block mb-6"
            style={{ color: "var(--fg-subtle)" }}
          >
            01 — Overview
          </span>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(1rem, 1.2vw, 1.1rem)",
              color: "var(--fg)",
              lineHeight: 1.75,
              fontWeight: 300,
              maxWidth: "65ch",
            }}
          >
            {project.description}
          </p>
        </motion.section>

        {/* Placeholder sections — to be filled with real prose */}
        {["Context", "Approach", "What shipped", "What's next"].map(
          (heading, i) => (
            <motion.section
              key={heading}
              style={{
                marginBottom: "clamp(2.5rem, 5vw, 4rem)",
                paddingTop: "clamp(2rem, 4vw, 3rem)",
                borderTop: "1px solid var(--border)",
              }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.55, delay: i * 0.05, ease: easeOutExpo }}
            >
              <span
                className="text-label block mb-5"
                style={{ color: "var(--fg-subtle)" }}
              >
                {String(i + 2).padStart(2, "0")} — {heading}
              </span>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(0.9rem, 1.1vw, 1rem)",
                  color: "var(--fg-muted)",
                  lineHeight: 1.75,
                  fontWeight: 300,
                  maxWidth: "65ch",
                  fontStyle: "italic",
                }}
              >
                Long-form case study content goes here. Pull quotes,
                captioned figures, real prose — not a tech-spec dump.
              </p>
            </motion.section>
          )
        )}
      </article>
    </main>
  );
}
