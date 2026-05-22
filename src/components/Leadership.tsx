"use client";

import { motion } from "framer-motion";
import { roles } from "@/lib/leadership";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export default function Leadership() {
  return (
    <section
      id="leadership"
      style={{
        paddingTop: "clamp(5rem, 10vw, 9rem)",
        paddingBottom: "clamp(5rem, 10vw, 9rem)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="container-ed">
        {/* Header */}
        <motion.div
          className="flex items-end justify-between mb-14 md:mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-label" style={{ color: "var(--fg-muted)" }}>
            Leadership &amp; Impact
          </h2>
        </motion.div>

        {/* Role list */}
        <div>
          {roles.map((role, i) => (
            <motion.div
              key={role.title}
              className="grid grid-cols-12 gap-x-6 py-7 md:py-9"
              style={{ borderTop: "1px solid var(--border)" }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.06, ease: easeOutExpo }}
            >
              {/* Marginalia: period */}
              <div className="col-span-12 md:col-span-2 mb-1 md:mb-0 flex items-start">
                <span className="text-label pt-1" style={{ color: "var(--fg-subtle)" }}>
                  {role.period}
                </span>
              </div>

              {/* Title + org */}
              <div className="col-span-12 md:col-span-4 mb-3 md:mb-0">
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.15rem, 1.8vw, 1.5rem)",
                    fontWeight: 300,
                    letterSpacing: "-0.02em",
                    color: "var(--fg)",
                    lineHeight: 1.15,
                    fontVariationSettings: '"opsz" 24, "wght" 300',
                    marginBottom: "0.3rem",
                  }}
                >
                  {role.title}
                </p>
                <p className="text-label" style={{ color: "var(--fg-muted)" }}>
                  {role.org}
                </p>
              </div>

              {/* Description */}
              <div className="col-span-12 md:col-span-6">
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.875rem",
                    color: "var(--fg-muted)",
                    lineHeight: 1.7,
                    fontWeight: 300,
                    maxWidth: "58ch",
                  }}
                >
                  {role.description}
                </p>
              </div>
            </motion.div>
          ))}
          <div style={{ borderTop: "1px solid var(--border)" }} />
        </div>
      </div>
    </section>
  );
}
