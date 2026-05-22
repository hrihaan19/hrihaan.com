"use client";

import { motion } from "framer-motion";
import { featuredProjects, projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export default function Projects() {
  const [pswi, atlas, echo, drift, deadlineos] = featuredProjects;
  const rest = projects.filter((p) => !p.featured);

  return (
    <section
      id="work"
      style={{
        paddingTop: "clamp(5rem, 10vw, 9rem)",
        paddingBottom: "clamp(5rem, 10vw, 9rem)",
      }}
    >
      <div className="container-ed">

        {/* ── Section header ── */}
        <motion.div
          className="flex items-end justify-between mb-12 md:mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: easeOutExpo }}
        >
          <h2 className="text-label" style={{ color: "var(--fg-muted)" }}>Work</h2>
          <span className="text-label" style={{ color: "var(--fg-subtle)" }}>
            {projects.length} projects
          </span>
        </motion.div>

        {/* ── Row 1: PSWI (8col) + Atlas (4col) ── */}
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 md:col-span-8">
            {pswi && <ProjectCard project={pswi} index={0} large />}
          </div>
          <div className="col-span-12 md:col-span-4">
            {atlas && <ProjectCard project={atlas} index={1} />}
          </div>
        </div>

        {/* ── Row 2: Echo (4col) + Drift (5col) + DeadlineOS (3col) ── */}
        <div className="grid grid-cols-12 gap-x-6">
          {echo && (
            <div className="col-span-12 md:col-span-4">
              <ProjectCard project={echo} index={2} />
            </div>
          )}
          {drift && (
            <div className="col-span-12 md:col-span-5">
              <ProjectCard project={drift} index={3} />
            </div>
          )}
          {deadlineos && (
            <div className="col-span-12 md:col-span-3">
              <ProjectCard project={deadlineos} index={4} />
            </div>
          )}
        </div>

        {/* ── Non-featured: listed below a rule ── */}
        {rest.length > 0 && (
          <div
            style={{
              marginTop: "clamp(3rem, 6vw, 5rem)",
              paddingTop: "clamp(2rem, 4vw, 3rem)",
              borderTop: "1px solid var(--border)",
            }}
          >
            <motion.p
              className="text-label mb-8"
              style={{ color: "var(--fg-subtle)" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              Also
            </motion.p>
            <div className="grid grid-cols-12 gap-x-6">
              {rest.map((p, i) => (
                <div key={p.slug} className="col-span-12 md:col-span-4">
                  <ProjectCard project={p} index={i + 5} />
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
