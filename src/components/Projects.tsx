"use client";

import { motion } from "framer-motion";
import { featuredProjects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export default function Projects() {
  const [hiddenCurrents, echo, drift, triValley] = featuredProjects;

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
            Selected projects
          </span>
        </motion.div>

        {/* ── Row 1: Hidden Currents (8col) + Emerald Echo (4col) ── */}
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 md:col-span-8">
            {hiddenCurrents && <ProjectCard project={hiddenCurrents} index={0} large />}
          </div>
          <div className="col-span-12 md:col-span-4">
            {echo && <ProjectCard project={echo} index={1} />}
          </div>
        </div>

        {/* ── Row 2: Drift (6col) + Tri-Valley Prep (6col) ── */}
        <div className="grid grid-cols-12 gap-x-6">
          {drift && (
            <div className="col-span-12 md:col-span-6">
              <ProjectCard project={drift} index={2} />
            </div>
          )}
          {triValley && (
            <div className="col-span-12 md:col-span-6">
              <ProjectCard project={triValley} index={3} />
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
