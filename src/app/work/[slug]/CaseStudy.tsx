"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";

const ease = [0.16, 1, 0.3, 1] as const;

const statusColors: Record<string, string> = {
  shipped:  "var(--fg-muted)",
  building: "var(--accent)",
  research: "var(--accent)",
  paused:   "var(--fg-subtle)",
};

function SectionLabel({ num, heading }: { num: string; heading: string }) {
  return (
    <div
      className="flex items-center gap-4 mb-6"
      style={{ borderTop: "1px solid var(--border)", paddingTop: "1.5rem" }}
    >
      <span className="text-label" style={{ color: "var(--fg-subtle)" }}>
        {num}
      </span>
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1rem, 1.3vw, 1.1rem)",
          fontWeight: 300,
          color: "var(--fg)",
          letterSpacing: "-0.015em",
          fontVariationSettings: '"opsz" 20, "wght" 300',
        }}
      >
        {heading}
      </span>
    </div>
  );
}

function BodyText({ children, muted }: { children: React.ReactNode; muted?: boolean }) {
  return (
    <p
      style={{
        fontFamily: "var(--font-sans)",
        fontSize: "clamp(0.9rem, 1.1vw, 1rem)",
        color: muted ? "var(--fg-muted)" : "var(--fg)",
        lineHeight: 1.78,
        fontWeight: 300,
        maxWidth: "65ch",
      }}
    >
      {children}
    </p>
  );
}

export default function CaseStudy({ project }: { project: Project }) {
  let sectionCounter = 1;
  const nextLabel = () => String(sectionCounter++).padStart(2, "0");

  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh" }}>

      {/* ── Back nav ── */}
      <div className="container-ed" style={{ paddingTop: "2rem", paddingBottom: "1rem" }}>
        <Link
          href="/#work"
          className="text-label transition-opacity duration-200 hover:opacity-60"
          style={{ color: "var(--fg-muted)" }}
        >
          ← Back to Work
        </Link>
      </div>

      {/* ── Hero header ── */}
      <section
        className="container-ed"
        style={{ paddingTop: "clamp(3rem, 6vw, 5rem)", paddingBottom: "clamp(2rem, 4vw, 3rem)" }}
      >
        {/* Meta row */}
        <motion.div
          className="flex flex-wrap items-center gap-3 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease }}
        >
          <span className="text-label" style={{ color: statusColors[project.status] }}>
            {project.statusLabel}
          </span>
          <span className="text-label" style={{ color: "var(--fg-subtle)" }}>·</span>
          <span className="text-label" style={{ color: "var(--fg-subtle)" }}>
            {project.year}
          </span>
          <span className="text-label" style={{ color: "var(--fg-subtle)" }}>·</span>
          <span className="text-label" style={{ color: "var(--fg-subtle)" }}>
            {project.role}
          </span>
          {project.course && (
            <>
              <span className="text-label" style={{ color: "var(--fg-subtle)" }}>·</span>
              <span className="text-label" style={{ color: "var(--fg-subtle)" }}>
                {project.course}
              </span>
            </>
          )}
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-display"
          style={{
            color: "var(--fg)",
            marginBottom: "clamp(1.25rem, 2.5vw, 2rem)",
            maxWidth: "16ch",
          }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease }}
        >
          {project.title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(1rem, 1.4vw, 1.2rem)",
            color: "var(--fg-muted)",
            lineHeight: 1.6,
            fontWeight: 300,
            maxWidth: "54ch",
            marginBottom: "clamp(1.5rem, 3vw, 2.5rem)",
          }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.12, ease }}
        >
          {project.subtitle}
        </motion.p>

        {/* Stack tags + GitHub */}
        <motion.div
          className="flex flex-wrap gap-2 items-center"
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
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="link-line link-accent text-label ml-2"
              style={{ color: "var(--fg-muted)" }}
            >
              GitHub ↗
            </a>
          )}
        </motion.div>
      </section>

      {/* ── Project image ── */}
      {project.image && (
        <motion.div
          className="container-ed"
          style={{ marginBottom: "clamp(3rem, 6vw, 5rem)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease }}
        >
          <div
            style={{
              width: "100%",
              borderRadius: "4px",
              overflow: "hidden",
              border: "1px solid var(--border)",
              background: "#0A0A0A",
            }}
          >
            <Image
              src={project.image}
              alt={`${project.title} — project visualization`}
              width={1200}
              height={560}
              style={{ width: "100%", height: "auto", display: "block" }}
              priority
            />
          </div>
        </motion.div>
      )}

      {/* Divider */}
      <div className="container-ed">
        <div style={{ height: "1px", background: "var(--border)" }} />
      </div>

      {/* ── Case study body: two-column ── */}
      <div
        className="container-ed grid grid-cols-12 gap-x-8"
        style={{
          paddingTop: "clamp(3rem, 6vw, 5rem)",
          paddingBottom: "clamp(5rem, 10vw, 8rem)",
        }}
      >

        {/* LEFT sidebar: meta */}
        <aside className="col-span-12 md:col-span-3 mb-12 md:mb-0">
          <div
            className="md:sticky"
            style={{ top: "6rem" }}
          >
            {/* Quick facts -->  */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
            >
              <div className="mb-6" style={{ borderTop: "1px solid var(--border)", paddingTop: "1.25rem" }}>
                <span className="text-label block mb-3" style={{ color: "var(--fg-subtle)" }}>Project</span>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.85rem",
                    color: "var(--fg)",
                    lineHeight: 1.5,
                    fontWeight: 300,
                  }}
                >
                  {project.title}
                </p>
              </div>

              {project.course && (
                <div className="mb-6">
                  <span className="text-label block mb-2" style={{ color: "var(--fg-subtle)" }}>Course</span>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", color: "var(--fg-muted)", lineHeight: 1.5, fontWeight: 300 }}>
                    {project.course}
                  </p>
                </div>
              )}

              <div className="mb-6">
                <span className="text-label block mb-2" style={{ color: "var(--fg-subtle)" }}>Year</span>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", color: "var(--fg-muted)", lineHeight: 1.5, fontWeight: 300 }}>
                  {project.year}
                </p>
              </div>

              <div className="mb-6">
                <span className="text-label block mb-2" style={{ color: "var(--fg-subtle)" }}>Role</span>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", color: "var(--fg-muted)", lineHeight: 1.5, fontWeight: 300 }}>
                  {project.role}
                </p>
              </div>

              <div className="mb-8">
                <span className="text-label block mb-2" style={{ color: "var(--fg-subtle)" }}>Skills</span>
                <div className="flex flex-col gap-1">
                  {project.stack.map((tech) => (
                    <p key={tech} style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", color: "var(--fg-muted)", lineHeight: 1.5, fontWeight: 300 }}>
                      {tech}
                    </p>
                  ))}
                </div>
              </div>

              {/* Documentation links -->  */}
              {project.documentation && project.documentation.length > 0 && (
                <div>
                  <span className="text-label block mb-3" style={{ color: "var(--fg-subtle)" }}>Documentation</span>
                  <div className="flex flex-col gap-2">
                    {project.documentation.map((doc) => (
                      <a
                        key={doc.label}
                        href={doc.href}
                        target={doc.href.startsWith("http") ? "_blank" : undefined}
                        rel={doc.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="link-line link-accent"
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.8rem",
                          color: "var(--fg-muted)",
                          fontWeight: 300,
                          display: "block",
                        }}
                      >
                        {doc.label}
                        {doc.href.startsWith("http") ? " ↗" : ""}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </aside>

        {/* RIGHT: main content */}
        <article className="col-span-12 md:col-span-9">

          {/* 01 — Overview -->  */}
          <motion.section
            style={{ marginBottom: "clamp(2.5rem, 5vw, 4rem)" }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <SectionLabel num={nextLabel()} heading="Overview" />
            <BodyText>{project.description}</BodyText>
          </motion.section>

          {/* 02 — Objective -->  */}
          {project.objective && (
            <motion.section
              style={{ marginBottom: "clamp(2.5rem, 5vw, 4rem)" }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.55, ease }}
            >
              <SectionLabel num={nextLabel()} heading="Objective" />
              <BodyText>{project.objective}</BodyText>
            </motion.section>
          )}

          {/* 03 — Responsibilities -->  */}
          {project.responsibilities && project.responsibilities.length > 0 && (
            <motion.section
              style={{ marginBottom: "clamp(2.5rem, 5vw, 4rem)" }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.55, ease }}
            >
              <SectionLabel num={nextLabel()} heading="My Responsibilities" />
              <ul style={{ listStyle: "none", padding: 0 }}>
                {project.responsibilities.map((r, i) => (
                  <li
                    key={i}
                    className="flex gap-4"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "clamp(0.875rem, 1.05vw, 0.95rem)",
                      color: "var(--fg-muted)",
                      lineHeight: 1.72,
                      fontWeight: 300,
                      marginBottom: "0.65rem",
                    }}
                  >
                    <span style={{ color: "var(--fg-subtle)", flexShrink: 0, marginTop: "0.05rem" }}>—</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </motion.section>
          )}

          {/* 04 — What I Learned -->  */}
          {project.whatILearned && project.whatILearned.length > 0 && (
            <motion.section
              style={{ marginBottom: "clamp(2.5rem, 5vw, 4rem)" }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.55, ease }}
            >
              <SectionLabel num={nextLabel()} heading="What I Learned" />
              <ul style={{ listStyle: "none", padding: 0 }}>
                {project.whatILearned.map((l, i) => (
                  <li
                    key={i}
                    className="flex gap-4"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "clamp(0.875rem, 1.05vw, 0.95rem)",
                      color: "var(--fg-muted)",
                      lineHeight: 1.72,
                      fontWeight: 300,
                      marginBottom: "0.65rem",
                    }}
                  >
                    <span style={{ color: "var(--fg-subtle)", flexShrink: 0, marginTop: "0.05rem" }}>—</span>
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </motion.section>
          )}

          {/* Dynamic sections (Context, Approach, etc.) -->  */}
          {project.sections?.map((sec) => (
            <motion.section
              key={sec.heading}
              style={{ marginBottom: "clamp(2.5rem, 5vw, 4rem)" }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.55, ease }}
            >
              <SectionLabel num={nextLabel()} heading={sec.heading} />
              <BodyText muted>{sec.body}</BodyText>
            </motion.section>
          ))}

          {/* Fallback for projects without detailed sections -->  */}
          {!project.objective && !project.sections && (
            <motion.section
              style={{ marginBottom: "clamp(2.5rem, 5vw, 4rem)" }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.55, ease }}
            >
              <SectionLabel num={nextLabel()} heading="Status" />
              <BodyText muted>
                Detailed case study documentation is in progress. Check back soon, or view the
                project on GitHub if available.
              </BodyText>
            </motion.section>
          )}

        </article>
      </div>

      {/* ── Footer nav ── */}
      <div
        className="container-ed"
        style={{
          paddingBottom: "clamp(4rem, 8vw, 6rem)",
          borderTop: "1px solid var(--border)",
          paddingTop: "1.5rem",
        }}
      >
        <Link
          href="/#work"
          className="text-label transition-opacity duration-200 hover:opacity-60"
          style={{ color: "var(--fg-muted)" }}
        >
          ← All Projects
        </Link>
      </div>

    </main>
  );
}
