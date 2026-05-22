export type ProjectStatus =
  | "shipped"
  | "building"
  | "research"
  | "paused";

export interface Project {
  slug: string;
  title: string;
  subtitle: string;          // one-sentence pitch
  description: string;       // 2-3 sentence editorial description
  stack: string[];
  role: string;
  status: ProjectStatus;
  statusLabel: string;
  year: string;
  featured: boolean;
  featuredSize: "large" | "medium" | "small";
  url?: string;
  github?: string;
  colSpan?: number;          // grid columns (of 12)
}

export const projects: Project[] = [
  {
    slug: "hidden-currents",
    title: "Hidden Currents",
    subtitle:
      "A Peak-Stress Water Index that exposes how AI data centers stress local water supplies — and makes the invisible visible across 53 facilities worldwide.",
    description:
      "The industry's standard metric (WUE) treats a liter of water in drought-stricken Phoenix the same as one in Finland. PSWI fixes this by multiplying peak water use with location-specific stress data from WRI Aqueduct. Applied to 53 hyperscale facilities from 8 companies, it reveals a 4,100× disparity between best and worst operators — and quantifies how 10% workload reallocation cuts fleet-wide water stress by 33%. The paper proposes SEC-style mandatory disclosure with quarterly per-facility PSWI reporting.",
    stack: ["Python", "Pandas", "NumPy", "Matplotlib", "SciPy", "LaTeX"],
    role: "Sole Author",
    status: "research",
    statusLabel: "Working Paper",
    year: "2026",
    featured: true,
    featuredSize: "large",
    github: "https://github.com/hrihaan19/pswi-data-center-audit",
    colSpan: 8,
  },
  {
    slug: "thirsty-compute-atlas",
    title: "Thirsty Compute Atlas",
    subtitle:
      "A reproducible pipeline estimating the water footprint of every US data center — state by state, scope by scope.",
    description:
      "An open pipeline that combines 1,474 IM3-Atlas facility locations with published water-intensity coefficients to produce state-level estimates of US data center water consumption. Separates scope-1 cooling and scope-2 grid-embedded water. Full sensitivity analysis included — swap in new coefficients, re-run, get updated numbers. The pipeline is the product.",
    stack: ["Python", "Pandas", "NumPy", "Matplotlib"],
    role: "Sole Author",
    status: "research",
    statusLabel: "Open Dataset",
    year: "2026",
    featured: true,
    featuredSize: "medium",
    github: "https://github.com/hrihaan19/thirsty-compute-atlas",
    colSpan: 4,
  },
  {
    slug: "emerald-echo",
    title: "Emerald Echo",
    subtitle:
      "Course intelligence for EHS — every class rated on Cognitive Load, Time Pressure, and Executive Function before you sign up for it.",
    description:
      "144 courses scored across the Emerald High catalog. Students rate each class across three dimensions — producing a Stress Factor score that actually means something. An AI Semester Simulator powered by the Claude API lets you model a full schedule before you commit: see projected weekly load, identify conflict zones, compare paths.",
    stack: ["React Native", "Expo", "Supabase", "Claude API", "JavaScript"],
    role: "Builder",
    status: "building",
    statusLabel: "In Development",
    year: "2025–26",
    featured: true,
    featuredSize: "medium",
    colSpan: 4,
  },
  {
    slug: "drift",
    title: "Drift",
    subtitle:
      "A Bay Area teen event layer — surfacing what's actually worth going to, delivered weekly.",
    description:
      "Events that matter to teens don't surface on Eventbrite or Instagram. A scraper pulls local events across the Bay Area, the Claude API classifies and deduplicates, and a weekly email digest goes out to subscribers via Resend. GitHub Actions runs the cron. Built because the gap was obvious.",
    stack: ["Next.js", "Supabase", "Claude API", "Resend", "GitHub Actions"],
    role: "Builder",
    status: "building",
    statusLabel: "In Development",
    year: "2026",
    featured: true,
    featuredSize: "medium",
    colSpan: 4,
  },
  {
    slug: "deadlineos",
    title: "DeadlineOS",
    subtitle:
      "An AI-powered deadline scheduler that tracks procrastination delta and surfaces what actually needs to move.",
    description:
      "Students don't need another calendar — they need a system that knows the difference between a task they're avoiding and one they've already solved in their head. DeadlineOS logs the gap between when a task was set and when it was touched, surfaces procrastination patterns, and prioritizes accordingly.",
    stack: ["JavaScript", "Node.js", "AI"],
    role: "Builder",
    status: "shipped",
    statusLabel: "Shipped",
    year: "2026",
    featured: true,
    featuredSize: "small",
    github: "https://github.com/hrihaan19/deadlineos",
    colSpan: 4,
  },
  {
    slug: "ehs-portal",
    title: "EHS Portal",
    subtitle:
      "A student companion app for Emerald High — built for the school, by a student who attends it.",
    description:
      "A TypeScript/Next.js student portal for Emerald High School, Dublin CA. Centralizes the information students actually need in a format that doesn't require navigating three district sub-portals.",
    stack: ["TypeScript", "Next.js", "Tailwind"],
    role: "Builder",
    status: "building",
    statusLabel: "In Development",
    year: "2026",
    featured: false,
    featuredSize: "small",
    github: "https://github.com/hrihaan19/ehs-student-portal1",
    colSpan: 4,
  },
  {
    slug: "triValley-prep",
    title: "Tri-Valley Prep",
    subtitle:
      "A student-run SAT tutoring service targeting 1500+, serving Dublin, Pleasanton, San Ramon, and Danville.",
    description:
      "Co-founded from scratch: website, pricing, branding, client acquisition. 1-on-1 Google Meet sessions. Tutors scored 1540–1570, with a perfect 800 on Math. The pitch is simple: get help from someone who just did this.",
    stack: ["Next.js", "Tailwind"],
    role: "Co-Founder",
    status: "shipped",
    statusLabel: "Live",
    year: "2025",
    featured: false,
    featuredSize: "small",
    colSpan: 4,
  },
  {
    slug: "cnn-alzheimers",
    title: "CNN × Alzheimer's",
    subtitle:
      "Exploring how convolutional neural networks can support early detection of Alzheimer's disease using MRI imaging data.",
    description:
      "An ongoing research project examining how CNNs — a class of deep learning models — can analyze MRI scans to support earlier diagnosis of Alzheimer's. The work covers existing model architectures, performance metrics used in clinical AI contexts, and the ethical implications of deploying AI in medical diagnosis. Associated with Emerald High School.",
    stack: ["Python", "TensorFlow", "CNN", "Medical Imaging"],
    role: "Researcher",
    status: "building",
    statusLabel: "Ongoing Research",
    year: "2025–26",
    featured: false,
    featuredSize: "small",
    colSpan: 4,
  },
  {
    slug: "lifeLens",
    title: "LifeLens",
    subtitle:
      "An AI career counselor that gives teens a judgment-free space to explore who they might become.",
    description:
      "Built for CogniHacks 2025. A FastAPI backend integrates GPT to power a conversational career exploration chatbot. HTML/CSS/JS frontend, browser-side chat history persistence.",
    stack: ["FastAPI", "Python", "OpenAI GPT", "HTML", "CSS", "JavaScript"],
    role: "Builder",
    status: "shipped",
    statusLabel: "Hackathon Submission",
    year: "2025",
    featured: false,
    featuredSize: "small",
    github: "https://github.com/hrihaan19/LifeLens-CogniHacks-2025-",
    colSpan: 4,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
