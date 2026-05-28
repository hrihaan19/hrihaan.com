"use client";

import { motion } from "framer-motion";

const entries = [
  {
    date: "May 2026",
    text: "Finishing the Emerald Echo semester simulator. Got the Claude API working, now I'm debugging some edge cases in how it calculates load in the schedule modeler.",
  },
  {
    date: "May 2026",
    text: "Submitted the PSWI paper for conference consideration. Now I'm writing up the policy proposal as its own short brief so it makes sense in a DUSD board context.",
  },
  {
    date: "Apr 2026",
    text: "Drift: the scraper is running on a GitHub Actions cron and Resend is hooked up. First digest actually went out.",
  },
  {
    date: "Mar 2026",
    text: "Published Thirsty Compute Atlas to GitHub. Open pipeline, numbers you can reproduce, full sensitivity analysis. Anyone can re-run the whole thing.",
  },
  {
    date: "Jan 2026",
    text: "Started the CNN/Alzheimer's research. Reading through the existing models and working through the imaging datasets. Still early.",
  },
];

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export default function Now() {
  return (
    <section
      id="now"
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
            Field Notes
          </h2>
          <span className="text-label" style={{ color: "var(--fg-subtle)" }}>
            Present tense
          </span>
        </motion.div>

        {/* Entries */}
        <div style={{ maxWidth: "680px" }}>
          {entries.map((entry, i) => (
            <motion.div
              key={i}
              className="grid gap-x-6 py-6"
              style={{
                gridTemplateColumns: "8rem 1fr",
                borderTop: "1px solid var(--border)",
              }}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: easeOutExpo }}
            >
              <span className="text-label pt-0.5" style={{ color: "var(--fg-subtle)" }}>
                {entry.date}
              </span>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.9rem",
                  color: "var(--fg-muted)",
                  lineHeight: 1.65,
                  fontWeight: 300,
                }}
              >
                {entry.text}
              </p>
            </motion.div>
          ))}
          <div style={{ borderTop: "1px solid var(--border)" }} />
        </div>
      </div>
    </section>
  );
}
