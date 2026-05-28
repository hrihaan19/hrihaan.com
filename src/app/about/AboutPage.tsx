"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

function FadeUp({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeader({ label }: { label: string }) {
  return (
    <div
      className="flex items-center gap-4 mb-6"
      style={{ borderTop: "1px solid var(--border)", paddingTop: "1.5rem" }}
    >
      <span className="text-label" style={{ color: "var(--fg-subtle)" }}>
        {label}
      </span>
    </div>
  );
}

const currentProjects = [
  {
    name: "Emerald Echo",
    href: "/work/emerald-echo",
    desc: "A course tool for EHS where I scored all 144 courses on Cognitive Load, Time Pressure, and Executive Function. The AI Semester Simulator lets students test a full schedule before they register.",
  },
  {
    name: "Hidden Currents",
    href: "/work/hidden-currents",
    desc: "My own research introducing the Peak-Stress Water Index, a new metric that shows the real environmental cost of the water AI data centers use, measured across 53 large facilities worldwide.",
  },
  {
    name: "Drift",
    href: "/work/drift",
    desc: "A platform that pulls together Bay Area teen events. A scraper finds events that never show up on Eventbrite or Instagram, Claude sorts them and removes duplicates, and a weekly digest goes out by email.",
  },
];

const leadershipItems = [
  { title: "Student Board Trustee", org: "Dublin Unified School District", period: "Jun 2025 – present" },
  { title: "VP of Chapter Management, President's Council", org: "DECA Inc.", period: "Sep 2025 – present" },
  { title: "Founder & President, CS Club", org: "Emerald High School", period: "Aug 2025 – present" },
  { title: "Youth Advisory Committee Member", org: "City of Dublin, CA", period: "Jun 2025 – present" },
];

const coursework = [
  "AP Computer Science Applications",
  "AP Computer Science Principles",
  "AP Calculus BC",
  "AP Calculus AB",
  "AP Seminar",
  "AP English Language",
  "AP Chemistry",
];

export default function AboutPage() {
  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <div
        className="container-ed"
        style={{
          paddingTop: "clamp(5.5rem, 10vw, 8rem)",
          paddingBottom: "clamp(4rem, 8vw, 6rem)",
        }}
      >

        {/* ── Header ── */}
        <div className="grid grid-cols-12 gap-x-8 mb-16 md:mb-20">

          {/* Left: name + tagline */}
          <div className="col-span-12 md:col-span-7">
            <FadeUp delay={0.05}>
              <h1
                className="text-display"
                style={{ color: "var(--fg)", marginBottom: "clamp(1.25rem, 2.5vw, 2rem)" }}
              >
                Hrihaan Bhutani
              </h1>
            </FadeUp>
            <FadeUp delay={0.12}>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(1rem, 1.4vw, 1.2rem)",
                  color: "var(--fg)",
                  lineHeight: 1.5,
                  fontWeight: 300,
                  marginBottom: "1rem",
                }}
              >
                Builder. Researcher. Student Board Trustee.
              </p>
            </FadeUp>
            <FadeUp delay={0.18}>
              <p className="text-label" style={{ color: "var(--fg-muted)" }}>
                Emerald High School · Dublin, CA · Class of 2027
              </p>
            </FadeUp>
          </div>

          {/* Right: photo -->  */}
          <motion.div
            className="col-span-12 md:col-span-3 md:col-start-10"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, delay: 0.1, ease }}
            style={{ position: "relative", height: "280px", overflow: "hidden", borderRadius: "2px" }}
          >
            <Image
              src="/hrihaan.png"
              alt="Hrihaan Bhutani"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 25vw"
              style={{
                objectFit: "cover",
                objectPosition: "center top",
                filter: "grayscale(8%) contrast(1.05)",
              }}
            />
          </motion.div>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "var(--border-mid)", marginBottom: "clamp(3rem, 6vw, 5rem)" }} />

        {/* ── Two-column body ── */}
        <div className="grid grid-cols-12 gap-x-8">

          {/* LEFT: intro + projects */}
          <div className="col-span-12 md:col-span-7">

            {/* Introduction */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            >
              <SectionHeader label="Introduction" />
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)",
                  color: "var(--fg)",
                  lineHeight: 1.75,
                  fontWeight: 300,
                  maxWidth: "62ch",
                  marginBottom: "1.2rem",
                }}
              >
                I&apos;m a junior at Emerald High School in Dublin, California, and I graduate in
                June 2027. I build software and do my own research around technology, data, and
                public policy. Most of my time outside of school goes into building tools that
                solve real problems, whether that&apos;s for students at my school, for researchers,
                or for communities trying to deal with complicated systems.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)",
                  color: "var(--fg-muted)",
                  lineHeight: 1.75,
                  fontWeight: 300,
                  maxWidth: "62ch",
                }}
              >
                I&apos;m also really interested in how technology can either cause policy problems
                or hide them, and in building the tools that make those problems easier to see. My
                research on AI data center water stress started when I noticed that the industry&apos;s
                standard reporting metrics seemed built to hide where water is actually scarce,
                instead of showing it.
              </p>
            </motion.div>

            {/* What I Build */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.6, ease }}
            >
              <SectionHeader label="What I Build" />
              <div className="flex flex-col gap-6">
                {currentProjects.map((p) => (
                  <div key={p.name}>
                    <div className="flex items-baseline gap-3 mb-1.5">
                      <Link
                        href={p.href}
                        className="link-line link-accent"
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "clamp(1rem, 1.3vw, 1.1rem)",
                          fontWeight: 300,
                          color: "var(--fg)",
                          letterSpacing: "-0.015em",
                          fontVariationSettings: '"opsz" 20, "wght" 300',
                        }}
                      >
                        {p.name}
                      </Link>
                      <span className="text-label" style={{ color: "var(--fg-subtle)" }}>↗</span>
                    </div>
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
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Goals -->  */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.6, ease }}
            >
              <SectionHeader label="Goals & Interests" />
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)",
                  color: "var(--fg-muted)",
                  lineHeight: 1.75,
                  fontWeight: 300,
                  maxWidth: "62ch",
                  marginBottom: "1.2rem",
                }}
              >
                Long term, I&apos;m interested in places where technology and policy run into each
                other: environmental disclosure, AI governance, and the way the things we choose to
                measure end up deciding what actually gets fixed. I want to build software that
                makes these problems concrete enough to act on, and do research that feeds into
                real decisions by regulators and institutions.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)",
                  color: "var(--fg-muted)",
                  lineHeight: 1.75,
                  fontWeight: 300,
                  maxWidth: "62ch",
                }}
              >
                Short term, I&apos;m focused on launching Emerald Echo at EHS before the next
                registration cycle, finishing the Hidden Currents paper for conference submission,
                and getting a deeper understanding of machine learning through the
                CNN/Alzheimer&apos;s research project.
              </p>
            </motion.div>

          </div>

          {/* RIGHT: sidebar — education + leadership + contact -->  */}
          <div className="col-span-12 md:col-span-4 md:col-start-9">

            {/* Education -->  */}
            <motion.div
              className="mb-10"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease }}
            >
              <SectionHeader label="Education" />
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1rem, 1.3vw, 1.1rem)",
                  fontWeight: 300,
                  color: "var(--fg)",
                  letterSpacing: "-0.015em",
                  fontVariationSettings: '"opsz" 20, "wght" 300',
                  marginBottom: "0.3rem",
                }}
              >
                Emerald High School
              </p>
              <p className="text-label mb-3" style={{ color: "var(--fg-muted)" }}>
                Dublin, CA · Expected June 2027
              </p>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.8rem",
                  color: "var(--fg-muted)",
                  lineHeight: 1.65,
                  fontWeight: 300,
                  marginBottom: "0.75rem",
                }}
              >
                SAT: 1520 &nbsp;·&nbsp; 800 Math
              </p>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {coursework.map((c) => (
                  <li
                    key={c}
                    className="flex gap-2.5"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.8rem",
                      color: "var(--fg-muted)",
                      lineHeight: 1.65,
                      fontWeight: 300,
                      marginBottom: "0.15rem",
                    }}
                  >
                    <span style={{ color: "var(--fg-subtle)", flexShrink: 0 }}>—</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.8rem",
                  color: "var(--fg-muted)",
                  lineHeight: 1.65,
                  fontWeight: 300,
                  marginTop: "0.5rem",
                }}
              >
                Varsity Tennis · 4th Place, BVAL Men's Doubles (Spring 2025)
              </p>
            </motion.div>

            {/* Leadership -->  */}
            <motion.div
              className="mb-10"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.55, delay: 0.05, ease }}
            >
              <SectionHeader label="Leadership" />
              <div className="flex flex-col gap-4">
                {leadershipItems.map((item) => (
                  <div key={item.title}>
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.825rem",
                        color: "var(--fg)",
                        lineHeight: 1.5,
                        fontWeight: 400,
                        marginBottom: "0.2rem",
                      }}
                    >
                      {item.title}
                    </p>
                    <p className="text-label" style={{ color: "var(--fg-muted)" }}>
                      {item.org}
                    </p>
                    <p className="text-label" style={{ color: "var(--fg-subtle)" }}>
                      {item.period}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact -->  */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.55, delay: 0.08, ease }}
            >
              <SectionHeader label="Contact" />
              <div className="flex flex-col gap-3">
                <div>
                  <p className="text-label mb-1" style={{ color: "var(--fg-subtle)" }}>Email</p>
                  <a
                    href="mailto:hribhu19@gmail.com"
                    className="link-line link-accent"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.85rem",
                      color: "var(--fg)",
                      fontWeight: 300,
                    }}
                  >
                    hribhu19@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-label mb-1" style={{ color: "var(--fg-subtle)" }}>GitHub</p>
                  <a
                    href="https://github.com/hrihaan19"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-line link-accent"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.85rem",
                      color: "var(--fg)",
                      fontWeight: 300,
                    }}
                  >
                    github.com/hrihaan19
                  </a>
                </div>
                <div>
                  <p className="text-label mb-1" style={{ color: "var(--fg-subtle)" }}>LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/hrihaan-bhutani-30214a2a4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-line link-accent"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.85rem",
                      color: "var(--fg)",
                      fontWeight: 300,
                    }}
                  >
                    hrihaan-bhutani
                  </a>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* ── Footer nav -->  */}
        <motion.div
          className="flex items-center justify-between mt-20 md:mt-28"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ borderTop: "1px solid var(--border)", paddingTop: "1.5rem" }}
        >
          <Link
            href="/"
            className="link-line text-label transition-opacity duration-200 hover:opacity-60"
            style={{ color: "var(--fg-muted)" }}
          >
            ← Home
          </Link>
          <Link
            href="/resume"
            className="link-line link-accent text-label transition-opacity duration-200 hover:opacity-80"
            style={{ color: "var(--fg-muted)" }}
          >
            View Résumé →
          </Link>
        </motion.div>

      </div>
    </main>
  );
}
