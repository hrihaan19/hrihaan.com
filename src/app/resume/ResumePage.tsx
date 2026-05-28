"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

/* ─── Data ───────────────────────────────────────────────── */

const education = {
  school: "Emerald High School",
  location: "Dublin, CA",
  degree: "High School Diploma",
  expected: "June 2027",
  gpa: null,
  scores: "SAT 1520 · 800 Math",
  coursework: [
    "AP Computer Science Applications",
    "AP Computer Science Principles",
    "AP Calculus BC",
    "AP Calculus AB",
    "AP Seminar",
    "AP English Language",
    "AP Chemistry",
  ],
};

const projects = [
  {
    title: "Hidden Currents — Peak-Stress Water Index",
    role: "Sole Author",
    year: "2026",
    status: "Working Paper",
    points: [
      "Introduced PSWI, a new metric multiplying peak water use by location water stress (WRI Aqueduct 4.0) to expose true data center water impact",
      "Audited 53 hyperscale and colo facilities across 8 companies; found 4,100× disparity between best (Hamina, Finland) and worst (Phoenix, AZ) operators",
      "Monte Carlo sensitivity analysis (1,000 runs) confirms ranking stability at ρ = 0.982 under ±50% coefficient perturbation",
      "Policy proposal for SEC-style mandatory quarterly PSWI disclosure; open dataset and code at github.com/hrihaan19/pswi-data-center-audit",
    ],
  },
  {
    title: "Thirsty Compute Atlas",
    role: "Sole Author",
    year: "2026",
    status: "Open Dataset",
    points: [
      "Reproducible Python pipeline estimating scope-1 and scope-2 water consumption for 1,474 US data centers by state using IM3 Atlas facility data",
      "Full sensitivity analysis across power density, WUE, and EWIF coefficients; any updated coefficients can be re-run in minutes",
    ],
  },
  {
    title: "Emerald Echo",
    role: "Builder",
    year: "2025–26",
    status: "In Development",
    points: [
      "Course intelligence platform for Emerald High School: 144 courses scored across Cognitive Load, Time Pressure, and Executive Function dimensions",
      "AI Semester Simulator powered by Claude API lets students model full schedules before selecting classes",
      "Stack: React Native, Expo, Supabase, Claude API",
    ],
  },
  {
    title: "Drift",
    role: "Builder",
    year: "2026",
    status: "In Development",
    points: [
      "Bay Area teen event aggregation platform — scraper surfaces events that don't appear on Eventbrite or Instagram",
      "Claude API classifies and deduplicates; weekly digest via Resend; scraper runs on GitHub Actions cron",
      "Stack: Next.js, Supabase, Claude API, Resend",
    ],
  },
  {
    title: "DeadlineOS",
    role: "Builder",
    year: "2026",
    status: "Shipped",
    points: [
      "AI-powered student deadline scheduler with procrastination delta logging — surfaces tasks being avoided, not just tasks that are due",
    ],
  },
  {
    title: "EHS Student Portal",
    role: "Builder",
    year: "2026",
    status: "In Development",
    points: [
      "Next.js / TypeScript companion app for Emerald High School students; centralises information scattered across district sub-portals",
    ],
  },
  {
    title: "CNN × Alzheimer's Early Detection",
    role: "Researcher",
    year: "2025–26",
    status: "Ongoing",
    points: [
      "Research project examining how CNNs can support early Alzheimer's diagnosis via MRI analysis; reviewing model architectures, clinical performance metrics, and ethical implications",
      "Associated with Emerald High School",
    ],
  },
  {
    title: "Tri-Valley Prep",
    role: "Co-Founder",
    year: "2025",
    status: "Live",
    points: [
      "Student-run SAT tutoring service serving Dublin, Pleasanton, San Ramon, and Danville; built website, pricing, branding, and client acquisition from scratch",
      "Tutors scored 1540–1570; perfect 800 on Math section",
    ],
  },
];

const leadership = [
  {
    title: "Student Board Trustee",
    org: "Dublin Unified School District",
    period: "Jun 2025 – present",
    points: [
      "One of two student voices representing 13,000 students in DUSD budget, curriculum, and policy decisions",
    ],
  },
  {
    title: "VP of Chapter Management, President's Council",
    org: "DECA Inc.",
    period: "Sep 2025 – present",
    points: [
      "Nationally appointed to DECA President's Council; oversees chapter management, membership, and competitive strategy for EHS DECA",
    ],
  },
  {
    title: "Founder & President, CS Club",
    org: "Emerald High School",
    period: "Aug 2025 – present",
    points: ["Founded and runs the school's CS club, focused on building real projects"],
  },
  {
    title: "Youth Advisory Committee",
    org: "City of Dublin, CA",
    period: "Jun 2025 – present",
    points: ["Advises city government on issues affecting young Dublin residents"],
  },
  {
    title: "Chapter President",
    org: "DECA at Emerald High",
    period: "Aug 2024 – Jun 2025",
    points: ["Led chapter operations and competitive season; expanded chapter participation"],
  },
  {
    title: "Lead High School Intern, Mayoral Campaign",
    org: "Dublin Mayor Student Internship",
    period: "Aug 2024 – Aug 2025",
    points: ["Lead intern on the winning Dublin mayoral campaign; worked on policy, outreach, and constituent engagement"],
  },
  {
    title: "TUPE Peer Educator",
    org: "Tobacco Use Prevention Education",
    period: "Aug 2023 – Jun 2025",
    points: ["Two-year tobacco prevention peer educator at EHS"],
  },
];

const skills = {
  "Languages": ["Python", "TypeScript", "JavaScript", "Java"],
  "Frameworks": ["Next.js", "React Native", "Expo", "FastAPI", "Node.js"],
  "Tools & Data": ["Pandas", "NumPy", "Matplotlib", "SciPy", "Supabase", "PostgreSQL", "Git"],
  "AI / APIs": ["Claude API", "OpenAI API", "Framer Motion", "Lenis"],
  "Other": ["LaTeX", "Monte Carlo simulation", "Sensitivity analysis", "Technical writing"],
};

const athletics = "Varsity Tennis — Emerald High School · 4th Place, BVAL Men's Doubles (Spring 2025)";

/* ─── Sub-components ─────────────────────────────────────── */

function SectionHeader({ label }: { label: string }) {
  return (
    <div
      className="flex items-center gap-4 mb-5"
      style={{ borderTop: "1px solid var(--border)", paddingTop: "1.25rem" }}
    >
      <span className="text-label" style={{ color: "var(--fg-muted)" }}>
        {label}
      </span>
    </div>
  );
}

function EntryRow({
  title,
  sub,
  right,
  points,
  i = 0,
}: {
  title: string;
  sub?: string;
  right?: string;
  points?: string[];
  i?: number;
}) {
  return (
    <motion.div
      className="mb-6 print:mb-4"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.45, delay: i * 0.04, ease }}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5 mb-1.5">
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1rem, 1.4vw, 1.2rem)",
            fontWeight: 300,
            letterSpacing: "-0.015em",
            color: "var(--fg)",
            fontVariationSettings: '"opsz" 20, "wght" 300',
          }}
        >
          {title}
        </span>
        {right && (
          <span className="text-label" style={{ color: "var(--fg-subtle)" }}>
            {right}
          </span>
        )}
      </div>
      {sub && (
        <p className="text-label mb-2" style={{ color: "var(--fg-muted)" }}>
          {sub}
        </p>
      )}
      {points && points.length > 0 && (
        <ul style={{ paddingLeft: "0", listStyle: "none" }}>
          {points.map((pt, j) => (
            <li
              key={j}
              className="flex gap-3"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.8rem",
                color: "var(--fg-muted)",
                lineHeight: 1.65,
                fontWeight: 300,
                marginBottom: "0.2rem",
              }}
            >
              <span style={{ color: "var(--fg-subtle)", flexShrink: 0 }}>—</span>
              <span>{pt}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}

/* ─── Page ───────────────────────────────────────────────── */

export default function ResumePage() {
  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <div
        className="container-ed"
        style={{
          paddingTop: "clamp(5rem, 9vw, 7rem)",
          paddingBottom: "clamp(4rem, 8vw, 6rem)",
        }}
      >

        {/* ── Header ── */}
        <motion.div
          className="mb-12 print:mb-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease }}
        >
          <div className="flex flex-wrap items-end justify-between gap-6 mb-6">
            <div>
              <h1
                className="text-display"
                style={{ color: "var(--fg)", marginBottom: "0.5rem" }}
              >
                Hrihaan Bhutani
              </h1>
              <p
                className="text-label"
                style={{ color: "var(--fg-muted)", letterSpacing: "0.05em" }}
              >
                Dublin, CA &nbsp;·&nbsp; Class of 2027 &nbsp;·&nbsp;
                <a
                  href="mailto:hribhu19@gmail.com"
                  className="link-line link-accent"
                  style={{ color: "var(--fg-muted)" }}
                >
                  hribhu19@gmail.com
                </a>
                &nbsp;·&nbsp;
                <a
                  href="https://github.com/hrihaan19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-line link-accent"
                  style={{ color: "var(--fg-muted)" }}
                >
                  github.com/hrihaan19
                </a>
                &nbsp;·&nbsp;
                <a
                  href="https://hrihaan.com"
                  className="link-line link-accent"
                  style={{ color: "var(--fg-muted)" }}
                >
                  hrihaan.com
                </a>
              </p>
            </div>

            {/* Print button — hidden on print */}
            <button
              onClick={() => window.print()}
              className="print:hidden text-label transition-opacity duration-200 hover:opacity-60"
              style={{
                color: "var(--fg-muted)",
                border: "1px solid var(--border)",
                padding: "0.4rem 0.9rem",
                borderRadius: "2px",
                background: "transparent",
                cursor: "pointer",
              }}
            >
              Print / Save PDF
            </button>
          </div>

          {/* Divider */}
          <div style={{ height: "1px", background: "var(--border-mid)" }} />
        </motion.div>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-12 gap-x-8 gap-y-0">

          {/* LEFT: Education + Skills + Athletics */}
          <div className="col-span-12 md:col-span-4 mb-10 md:mb-0">

            {/* Education */}
            <div className="mb-10">
              <SectionHeader label="Education" />
              <EntryRow
                title={education.school}
                sub={`${education.location} · Expected ${education.expected}`}
                points={[
                  education.scores,
                  ...education.coursework.map((c) => c),
                ]}
              />
            </div>

            {/* Skills */}
            <div className="mb-10">
              <SectionHeader label="Skills" />
              {Object.entries(skills).map(([cat, items], i) => (
                <motion.div
                  key={cat}
                  className="mb-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05, ease }}
                >
                  <p className="text-label mb-1" style={{ color: "var(--fg-subtle)" }}>
                    {cat}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.8rem",
                      color: "var(--fg-muted)",
                      lineHeight: 1.6,
                      fontWeight: 300,
                    }}
                  >
                    {items.join(", ")}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Athletics */}
            <div>
              <SectionHeader label="Athletics" />
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.8rem",
                  color: "var(--fg-muted)",
                  lineHeight: 1.65,
                  fontWeight: 300,
                }}
              >
                {athletics}
              </p>
            </div>
          </div>

          {/* RIGHT: Projects + Leadership */}
          <div className="col-span-12 md:col-span-8">

            {/* Projects & Research */}
            <div className="mb-10">
              <SectionHeader label="Projects &amp; Research" />
              {projects.map((p, i) => (
                <EntryRow
                  key={p.title}
                  title={p.title}
                  sub={`${p.role} · ${p.status} · ${p.year}`}
                  points={p.points}
                  i={i}
                />
              ))}
            </div>

            {/* Leadership */}
            <div>
              <SectionHeader label="Leadership &amp; Service" />
              {leadership.map((r, i) => (
                <EntryRow
                  key={r.title}
                  title={r.title}
                  sub={`${r.org} · ${r.period}`}
                  points={r.points}
                  i={i}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
