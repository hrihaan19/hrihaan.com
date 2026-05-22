"use client";

import { motion } from "framer-motion";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

const links = [
  { label: "Email",    href: "mailto:hribhu19@gmail.com",                                      text: "hribhu19@gmail.com" },
  { label: "GitHub",   href: "https://github.com/hrihaan19",                                    text: "hrihaan19" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/hrihaan-bhutani-30214a2a4",           text: "hrihaan-bhutani" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        paddingTop: "clamp(5rem, 10vw, 9rem)",
        paddingBottom: "clamp(6rem, 12vw, 10rem)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="container-ed">
        <div className="grid grid-cols-12 gap-x-6">
          {/* Large display text — 8 columns */}
          <motion.div
            className="col-span-12 md:col-span-8 mb-14 md:mb-0"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: easeOutExpo }}
          >
            <h2 className="text-display" style={{ color: "var(--fg)" }}>
              Let&apos;s talk.
            </h2>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(0.9rem, 1.1vw, 1rem)",
                color: "var(--fg-muted)",
                lineHeight: 1.7,
                fontWeight: 300,
                maxWidth: "44ch",
                marginTop: "clamp(1.5rem, 3vw, 2rem)",
              }}
            >
              Open to research collaborations, policy conversations, and
              projects at the intersection of technology and public life.
              If something here is interesting to you, reach out directly.
            </p>
          </motion.div>

          {/* Links — 4 columns */}
          <motion.div
            className="col-span-12 md:col-span-4 flex flex-col justify-end gap-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: easeOutExpo }}
          >
            {links.map((link) => (
              <div key={link.label} className="flex flex-col gap-1">
                <span className="text-label" style={{ color: "var(--fg-subtle)" }}>
                  {link.label}
                </span>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="link-line link-accent"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.9rem",
                    color: "var(--fg)",
                    fontWeight: 300,
                  }}
                >
                  {link.text}
                </a>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="flex items-center justify-between mt-24 md:mt-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="text-label" style={{ color: "var(--fg-subtle)" }}>
            Hrihaan Bhutani · Dublin, CA · 2026
          </span>
          <span className="text-label" style={{ color: "var(--fg-subtle)" }}>
            Built with Next.js
          </span>
        </motion.div>
      </div>
    </section>
  );
}
