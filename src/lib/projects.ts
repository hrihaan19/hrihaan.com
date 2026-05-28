export type ProjectStatus =
  | "shipped"
  | "building"
  | "research"
  | "paused";

export interface ProjectSection {
  heading: string;
  body: string;
}

export interface ProjectDoc {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  role: string;
  status: ProjectStatus;
  statusLabel: string;
  year: string;
  featured: boolean;
  featuredSize: "large" | "medium" | "small";
  url?: string;
  github?: string;
  colSpan?: number;
  // Case study fields
  course?: string;
  image?: string;
  objective?: string;
  responsibilities?: string[];
  whatILearned?: string[];
  sections?: ProjectSection[];
  documentation?: ProjectDoc[];
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
    course: "Independent Research",
    image: "/project-hidden-currents.svg",
    objective:
      "Develop and validate a new metric — the Peak-Stress Water Index (PSWI) — to accurately measure AI data center water impact by accounting for geographic water scarcity, then apply it across the industry's largest operators to reveal the true distribution of environmental risk.",
    responsibilities: [
      "Reviewed and critiqued existing water efficiency metrics (WUE, WPUe, EWIF) and identified their fundamental failure to incorporate geographic water scarcity",
      "Collected and verified publicly disclosed water consumption data for 53 hyperscale and colocation facilities across 8 major technology companies",
      "Built the PSWI calculation pipeline in Python using Pandas and NumPy",
      "Geocoded all 53 facilities and extracted WRI Aqueduct 4.0 Baseline Water Stress scores for each geographic location",
      "Designed and ran 1,000-iteration Monte Carlo sensitivity analysis (±50% coefficient perturbation) to validate ranking stability across uncertainty ranges",
      "Wrote the complete research paper, including a policy proposal for SEC-style mandatory PSWI disclosure requirements",
      "Published the full dataset and all analysis code as open source on GitHub",
    ],
    whatILearned: [
      "How to combine geospatial scarcity data with facility-level operational data to construct novel composite metrics that reveal what single-variable metrics conceal",
      "Monte Carlo simulation for quantifying uncertainty in ranked data — achieving ρ = 0.982 Spearman rank correlation confirmed the metric's robustness under realistic error ranges",
      "The gap between what voluntary corporate sustainability disclosures reveal and what they strategically leave out about environmental impact",
      "How to structure a technical policy argument within a research paper, targeting both scientific reviewers and regulatory audiences simultaneously",
      "Sensitivity analysis methodology — how to stress-test a model's conclusions against its own assumptions, and how to present that honestly",
    ],
    documentation: [
      { label: "GitHub Repository & Dataset", href: "https://github.com/hrihaan19/pswi-data-center-audit" },
    ],
    sections: [
      {
        heading: "Context",
        body: "AI data centers consume tens of billions of gallons of water annually for cooling. As AI compute demand grows, this consumption is increasing — but the industry reports it through WUE, a metric that makes a liter of water consumed in Phoenix identical to one in Finland. This geographic blindness lets companies report 'improving' efficiency metrics while simultaneously expanding in water-stressed regions. I noticed this contradiction in public sustainability reports from several major operators and started this project to quantify it rigorously.",
      },
      {
        heading: "Approach",
        body: "I collected publicly disclosed water data for 53 hyperscale and colocation facilities, then geocoded each to extract WRI Aqueduct 4.0 baseline water stress scores. PSWI multiplies peak annual water consumption by the local Baseline Water Stress coefficient. To validate the ranking's stability, I ran 1,000 Monte Carlo iterations perturbing both consumption and stress coefficients by ±50%. The Spearman rank correlation of ρ = 0.982 confirms the ranking is robust to measurement uncertainty — a facility ranking poorly does not escape that ranking just because its reported consumption figures are imprecise.",
      },
      {
        heading: "Key Findings",
        body: "The 53-facility audit reveals a 4,100× disparity between the best operator (Google's Hamina, Finland facility) and the worst. Applied at the fleet level, a 10% workload reallocation from high-stress to low-stress regions reduces fleet-wide water stress by 33% without reducing compute capacity. The paper proposes SEC-style mandatory quarterly PSWI disclosure for any company operating hyperscale data centers — a policy that would make this data routinely available rather than requiring individual researchers to reconstruct it from scattered voluntary disclosures.",
      },
    ],
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
    featured: false,
    featuredSize: "medium",
    github: "https://github.com/hrihaan19/thirsty-compute-atlas",
    colSpan: 4,
    course: "Independent Research",
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
    course: "AP Computer Science Applications / Independent Study",
    image: "/project-emerald-echo.svg",
    objective:
      "Build a course intelligence platform that gives EHS students data-driven insight into course difficulty before registration — and add an AI Semester Simulator that lets students model projected weekly workload for any schedule combination before committing.",
    responsibilities: [
      "Designed the three-dimension scoring rubric (Cognitive Load, Time Pressure, Executive Function) based on student workload research",
      "Surveyed 85 EHS students across grade levels to calibrate the scoring system and validate rubric consistency",
      "Rated all 144 courses in the EHS catalog using the calibrated rubric",
      "Built the full mobile application in React Native and Expo, targeting both iOS and Android",
      "Designed the Supabase database schema for courses, ratings, user schedules, and simulations",
      "Integrated the Claude API to power the Semester Simulator — models projected weekly workload and surfaces schedule conflict zones",
      "Conducting ongoing internal testing with CS Club members at EHS and iterating on UI based on feedback",
    ],
    whatILearned: [
      "Mobile app development with React Native and Expo — a fundamentally different mental model from web development, especially around navigation patterns and native UI components",
      "AI API integration for user-facing features: prompt engineering, handling variable-length model responses, and managing latency expectations in a mobile app context",
      "Database schema design for a multi-user application with user-generated ratings and saved schedule data",
      "How to calibrate a rating system for cross-rater consistency — the calibration survey was more difficult to design correctly than the app itself",
      "Product iteration from real user feedback: what early testers actually found confusing versus what I had assumed would be confusing",
    ],
    documentation: [
      { label: "In Active Development — Launching at EHS Registration", href: "#" },
    ],
    sections: [
      {
        heading: "Context",
        body: "EHS students have no data-driven way to know how a course will feel before they take it. Grade distributions exist, but they don't measure cognitive demand, weekly time commitment, or the kind of sustained focus a class requires. I built Emerald Echo because I made poor scheduling decisions in my sophomore year — combining high-load courses without understanding their cumulative weekly impact — and wanted to build the tool that would have helped me plan better.",
      },
      {
        heading: "Approach",
        body: "I defined three dimensions based on student workload research: Cognitive Load (raw intellectual demand per session), Time Pressure (weekly hours plus deadline density), and Executive Function (task switching, long-horizon planning, and self-monitoring required). I surveyed 85 students to calibrate the rubric — ensuring two different raters would score the same course consistently. After calibration, I scored all 144 EHS courses and built the app in React Native and Expo, with Supabase as the backend and Claude powering the Semester Simulator.",
      },
      {
        heading: "What Shipped",
        body: "The 144-course scored database is complete. The React Native app has the core browse, filter, and course-compare features running. The Claude API Semester Simulator is integrated — students select a set of courses and see a projected weekly load profile with conflict zones flagged. The app is in internal testing with CS Club members at EHS. Public launch is planned for the next EHS course registration cycle.",
      },
    ],
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
    course: "Independent Project",
    image: "/project-drift.svg",
    objective:
      "Build an automated event-discovery layer for Bay Area teens that surfaces the local events actually worth attending — the ones that never appear on Eventbrite or Instagram — and deliver them to subscribers through a curated weekly digest.",
    responsibilities: [
      "Identified the core gap: events relevant to teens — workshops, meetups, pop-ups, volunteer days — are scattered across dozens of sources and never aggregate anywhere usable",
      "Built a scraper that pulls events from across Bay Area sources into a single Supabase database",
      "Integrated the Claude API to classify each event by relevance and deduplicate overlapping listings pulled from different sources",
      "Designed and built the weekly email digest, delivered to subscribers via Resend",
      "Configured GitHub Actions cron jobs to run the full scrape → classify → deduplicate → send pipeline automatically every week with no manual intervention",
      "Built the subscriber-facing landing and signup site in Next.js",
    ],
    whatILearned: [
      "How to design an unattended content pipeline that runs on a schedule — the hard part is not any single step but making the whole chain reliable enough to run without me watching it",
      "Using an LLM as a structured classification and deduplication engine rather than a chat interface — designing prompts that return consistent, parseable output every run",
      "Email deliverability fundamentals: why dedicated transactional email services exist and how sender reputation affects whether a digest lands in the inbox or spam",
      "The value of scoping a product to a specific, real audience — Bay Area teens — instead of trying to build a general-purpose event platform for everyone",
    ],
    sections: [
      {
        heading: "Context",
        body: "The events that matter most to teens — free workshops, hackathons, library programs, volunteer days, local pop-ups — are exactly the ones that never surface on the big platforms. They live in scattered Instagram posts, city calendars, and word of mouth. I kept missing things I would have wanted to attend simply because there was no single place that collected them. Drift exists to close that gap.",
      },
      {
        heading: "Approach",
        body: "A scraper pulls events from across Bay Area sources into a Supabase database. The Claude API then does the work that makes the product usable: it classifies each event for teen relevance and deduplicates the same event pulled from multiple sources. A weekly digest of the best results goes out to subscribers through Resend, and the entire pipeline runs on a GitHub Actions cron schedule so it operates without manual effort.",
      },
      {
        heading: "Status",
        body: "The scrape, classify, and digest pipeline is built and running on its weekly schedule. Current work is on expanding source coverage and tuning the relevance classifier so the digest stays tight and high-signal as the event pool grows.",
      },
    ],
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
    featured: false,
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
    featured: true,
    featuredSize: "medium",
    colSpan: 4,
    course: "Independent Venture",
    image: "/project-tri-valley-prep.svg",
    objective:
      "Co-found a student-run SAT tutoring service that connects Tri-Valley students with tutors who recently scored 1500+, making high-quality, relatable test prep accessible across Dublin, Pleasanton, San Ramon, and Danville.",
    responsibilities: [
      "Co-founded the venture from scratch — defined the service model, set pricing, and built the positioning around tutors who had just taken the test themselves",
      "Built the website and visual branding in Next.js and Tailwind",
      "Ran client acquisition and onboarding across four Tri-Valley cities",
      "Delivered 1-on-1 SAT tutoring sessions over Google Meet, working with students on both Math and Reading/Writing",
      "Coordinated scheduling and progress tracking for recurring students alongside a full school schedule",
    ],
    whatILearned: [
      "How to launch a service business end to end: branding, pricing, a website, and — hardest of all — finding and keeping the first real clients",
      "Translating my own recent SAT experience into a teaching method that works for students a year or two behind me, rather than just explaining how I personally did it",
      "Client communication and reliability — families are trusting you with something that matters to them, and consistency is the whole product",
      "Why a credible, specific pitch ('learn from someone who just scored 1540+') converts far better than a generic one",
    ],
    sections: [
      {
        heading: "Context",
        body: "SAT prep in the Tri-Valley is dominated by expensive corporate test-prep centers taught by adults who took the test decades ago. My co-founder and I had just scored in the 1540–1570 range — including a perfect 800 on Math — and realized the most relatable, current help could come from students who had just done it. Tri-Valley Prep turned that insight into a service.",
      },
      {
        heading: "Approach",
        body: "We built the brand, pricing, and website ourselves, then ran client acquisition across Dublin, Pleasanton, San Ramon, and Danville. Tutoring happens 1-on-1 over Google Meet so we can serve all four cities without a physical location. The pitch is deliberately simple and specific: get help from someone who just sat in your seat and scored 1500+.",
      },
      {
        heading: "Outcome",
        body: "Tri-Valley Prep is live and serving students across the four Tri-Valley cities. Beyond the tutoring itself, it has been my most complete lesson in running something real — every part of it, from the landing page to the recurring client relationships, is something we built and maintain ourselves.",
      },
    ],
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
