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
      "A water index I built that measures how much AI data centers strain local water supplies, scored across 53 facilities around the world.",
    description:
      "The metric the industry uses (WUE) counts a liter of water in dried-out Phoenix the same as a liter in Finland, which never made sense to me. My index, PSWI, fixes that by multiplying peak water use by how stressed the local water supply actually is, using data from WRI Aqueduct. I ran it on 53 large facilities from 8 companies and found a 4,100x gap between the best and worst operators. I also found that moving just 10% of the workload to less stressed regions would cut the whole fleet's water stress by 33%. The paper ends with a proposal for SEC-style rules that would make companies report this every quarter.",
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
      "Build and test a new metric, the Peak-Stress Water Index (PSWI), that measures the water impact of AI data centers while actually accounting for how scarce water is where each one sits, then run it across the biggest operators to see who carries the real environmental risk.",
    responsibilities: [
      "Read through the existing water metrics (WUE, WPUe, EWIF) and figured out why they all miss the same thing: where the water actually comes from",
      "Collected and double-checked the public water use data for 53 large data center and colocation facilities across 8 big tech companies",
      "Wrote the PSWI calculation pipeline in Python with Pandas and NumPy",
      "Found the exact location of all 53 facilities and pulled the WRI Aqueduct 4.0 water stress score for each one",
      "Ran a 1,000-iteration Monte Carlo sensitivity analysis (shifting the coefficients by up to 50% in either direction) to check that the rankings held up",
      "Wrote the full paper, including a policy proposal for SEC-style rules that would require companies to report PSWI",
      "Put the whole dataset and all of my code on GitHub so anyone can check it",
    ],
    whatILearned: [
      "How to combine location-based scarcity data with each facility's own numbers to build a metric that shows what a single number like WUE hides",
      "How to use Monte Carlo simulation to measure uncertainty in a ranking. Getting a Spearman correlation of 0.982 told me the ranking wasn't going to flip around just because my inputs were a little off",
      "How big the gap is between what companies put in their sustainability reports and what they quietly leave out",
      "How to build a policy argument inside a research paper so it works for both science reviewers and the people who actually write regulations",
      "How to stress-test my own conclusions against my own assumptions, and how to be honest about it when I present the results",
    ],
    documentation: [
      { label: "GitHub Repository & Dataset", href: "https://github.com/hrihaan19/pswi-data-center-audit" },
    ],
    sections: [
      {
        heading: "Context",
        body: "AI data centers use tens of billions of gallons of water a year just for cooling, and that number keeps going up as AI gets bigger. The problem is that the industry reports it with WUE, a metric that counts a liter of water in Phoenix the same as a liter in Finland. Because WUE ignores location, a company can show an 'improving' efficiency number while it keeps building in places that are already running out of water. I kept seeing this contradiction in the sustainability reports of a few major operators, so I started this project to actually measure it.",
      },
      {
        heading: "Approach",
        body: "I collected the public water data for 53 large facilities and found the exact location of each one so I could pull its WRI Aqueduct 4.0 water stress score. PSWI just multiplies a facility's peak yearly water use by that local stress score. To make sure the ranking wasn't fragile, I ran 1,000 Monte Carlo iterations that shifted both the water numbers and the stress scores by up to 50% in either direction. The Spearman correlation came out to 0.982, which means the ranking barely moves even when the inputs are off. A facility that ranks badly doesn't get to climb out of it just because its reported numbers aren't exact.",
      },
      {
        heading: "Key Findings",
        body: "Across all 53 facilities, there is a 4,100x gap between the best operator (Google's site in Hamina, Finland) and the worst. When I looked at the whole fleet together, moving just 10% of the workload from high-stress regions to low-stress ones cut the fleet's total water stress by 33%, and it didn't cost any computing power to do it. The paper proposes SEC-style rules that would make every company running large data centers report its PSWI every quarter, so this data would just be available instead of something a student has to piece together from scattered reports.",
      },
    ],
  },
  {
    slug: "thirsty-compute-atlas",
    title: "Thirsty Compute Atlas",
    subtitle:
      "An open pipeline that estimates the water footprint of every US data center, broken down by state and by scope.",
    description:
      "It takes 1,474 facility locations from the IM3 Atlas and combines them with published water-intensity numbers to estimate how much water US data centers use, state by state. It keeps scope-1 cooling water separate from scope-2 water that comes from the power grid. There's a full sensitivity analysis built in, so if better coefficients come out you just swap them in, re-run it, and get new numbers. The pipeline itself is the point.",
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
      "A course tool for EHS that rates every class on Cognitive Load, Time Pressure, and Executive Function before you sign up for it.",
    description:
      "I scored all 144 courses in the Emerald High catalog. Students rate each class on three things, which turns into a Stress Factor score that actually tells you something. There's also an AI Semester Simulator built on the Claude API that lets you test a full schedule before you commit, so you can see your projected weekly load, spot the weeks that are going to pile up, and compare different paths.",
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
      "Build a tool that gives EHS students real data on how hard a course is before they register, and add an AI Semester Simulator that lets them see the projected weekly workload for any combination of classes before they lock it in.",
    responsibilities: [
      "Designed the three-part scoring rubric (Cognitive Load, Time Pressure, Executive Function) based on research on student workload",
      "Surveyed 85 EHS students across all grade levels to calibrate the scoring and make sure it stayed consistent",
      "Scored all 144 courses in the EHS catalog using that rubric",
      "Built the whole mobile app in React Native and Expo for both iOS and Android",
      "Designed the Supabase database for the courses, ratings, saved schedules, and simulations",
      "Connected the Claude API to run the Semester Simulator, which projects the weekly workload and flags the weeks that are going to overload you",
      "Running internal testing with CS Club members at EHS right now and changing the UI based on what they say",
    ],
    whatILearned: [
      "How to build mobile apps with React Native and Expo, which is a pretty different way of thinking than web development, especially the navigation and the native UI components",
      "How to put an AI API into a feature people actually use: writing the prompts, handling responses that come back different lengths, and dealing with the wait time inside a mobile app",
      "How to design a database for a multi-user app where people create their own ratings and save their own schedules",
      "How to calibrate a rating system so two different people score the same class the same way. The calibration survey was honestly harder to get right than the app itself",
      "How to improve a product from real feedback. What early testers got confused by was usually not what I assumed they would get confused by",
    ],
    documentation: [
      { label: "In active development, launching at EHS registration", href: "#" },
    ],
    sections: [
      {
        heading: "Context",
        body: "EHS students have no real way to know how a class is going to feel before they take it. Grade distributions are out there, but they don't tell you how mentally demanding a class is, how many hours a week it takes, or how much constant focus it needs. I built Emerald Echo because I messed up my own schedule sophomore year. I stacked a bunch of heavy classes together without realizing how much they would add up week to week, and I wanted to build the thing that would have warned me.",
      },
      {
        heading: "Approach",
        body: "I set up three things to measure, based on research on student workload: Cognitive Load (how mentally hard each session is), Time Pressure (weekly hours plus how tightly the deadlines stack), and Executive Function (how much task-switching, long-term planning, and keeping track of yourself a class needs). I surveyed 85 students to calibrate the rubric so two different people would score the same class about the same. Once that was set, I scored all 144 EHS courses and built the app in React Native and Expo, with Supabase as the backend and Claude running the Semester Simulator.",
      },
      {
        heading: "What Shipped",
        body: "The 144-course database is done. The app can browse, filter, and compare courses. The Claude Semester Simulator is connected, so students pick a set of classes and get a projected weekly load with the rough weeks flagged. Right now it's in testing with CS Club members at EHS, and I'm planning to launch it for the whole school at the next registration cycle.",
      },
    ],
  },
  {
    slug: "drift",
    title: "Drift",
    subtitle:
      "A weekly digest that finds the Bay Area teen events that are actually worth going to.",
    description:
      "The events teens actually care about don't show up on Eventbrite or Instagram. A scraper pulls local Bay Area events, the Claude API sorts them and removes the duplicates, and a weekly email digest goes out to subscribers through Resend. GitHub Actions runs the whole thing on a schedule. I built it because the gap was pretty obvious once I noticed it.",
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
      "Build something that automatically finds the local Bay Area events worth going to, the ones that never make it onto Eventbrite or Instagram, and send them to subscribers in a weekly digest.",
    responsibilities: [
      "Figured out the main problem: the events teens want (workshops, meetups, pop-ups, volunteer days) are spread across dozens of places and never collect anywhere useful",
      "Built a scraper that pulls events from a bunch of Bay Area sources into one Supabase database",
      "Connected the Claude API to sort each event by how relevant it is and to catch the same event when it shows up from different sources",
      "Designed and built the weekly email digest that goes out to subscribers through Resend",
      "Set up GitHub Actions cron jobs so the whole scrape, sort, dedupe, and send pipeline runs every week on its own",
      "Built the landing and signup site in Next.js",
    ],
    whatILearned: [
      "How to build a pipeline that runs on a schedule without me. The hard part isn't any one step, it's making the whole chain reliable enough that I don't have to babysit it",
      "How to use an LLM as a sorting and dedupe engine instead of a chatbot, which means writing prompts that give back the same clean, parseable format every single run",
      "How email deliverability actually works: why services like Resend exist, and how your sender reputation decides whether the digest lands in the inbox or in spam",
      "Why it's better to build for one specific group of people, Bay Area teens, than to try to make a general event app for everyone",
    ],
    sections: [
      {
        heading: "Context",
        body: "The events that matter most to teens, like free workshops, hackathons, library programs, volunteer days, and local pop-ups, are exactly the ones that never show up on the big platforms. They're buried in random Instagram posts, city calendars, and word of mouth. I kept finding out about stuff I would have gone to only after it already happened, just because there was no single place that pulled it all together. Drift is my fix for that.",
      },
      {
        heading: "Approach",
        body: "A scraper pulls events from a bunch of Bay Area sources into a Supabase database. Then the Claude API does the part that makes it actually usable: it rates each event for how relevant it is to teens and merges the same event when it came in from different places. A weekly digest of the best ones goes out through Resend, and the whole pipeline runs on a GitHub Actions schedule so I don't have to touch it.",
      },
      {
        heading: "Status",
        body: "The scrape, sort, and digest pipeline is built and running every week. Right now I'm adding more sources and tuning the classifier so the digest stays short and worth reading as the number of events grows.",
      },
    ],
  },
  {
    slug: "deadlineos",
    title: "DeadlineOS",
    subtitle:
      "An AI deadline scheduler that tracks how long you put things off and shows you what actually needs to move.",
    description:
      "Students don't need another calendar. They need something that can tell the difference between a task they're avoiding and one they've basically already figured out in their head. DeadlineOS tracks the gap between when a task gets assigned and when you actually touch it, finds your procrastination patterns, and reorders your priorities based on that.",
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
      "A student app for Emerald High, built by a student who actually goes there.",
    description:
      "A student portal for Emerald High School in Dublin, CA, built with TypeScript and Next.js. It puts the information students actually need in one place, instead of making them dig through three different district sub-portals.",
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
      "A student-run SAT tutoring service aiming for 1500+, serving Dublin, Pleasanton, San Ramon, and Danville.",
    description:
      "I co-founded it from scratch: the website, the pricing, the branding, and finding clients. Sessions are 1-on-1 over Google Meet. The tutors scored between 1540 and 1570, including a perfect 800 on Math. The pitch is simple: get help from someone who just did this.",
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
      "Co-found a student-run SAT tutoring service that connects Tri-Valley students with tutors who recently scored 1500+, so good, relatable test prep is actually available across Dublin, Pleasanton, San Ramon, and Danville.",
    responsibilities: [
      "Co-founded the whole thing from scratch: figured out how it would work, set the pricing, and built it around tutors who had just taken the test themselves",
      "Built the website and the branding in Next.js and Tailwind",
      "Found and onboarded clients across four Tri-Valley cities",
      "Ran 1-on-1 SAT sessions over Google Meet, working with students on both Math and Reading/Writing",
      "Kept track of scheduling and progress for repeat students while carrying a full school schedule myself",
    ],
    whatILearned: [
      "How to start a service business from end to end: the branding, the pricing, the website, and the hardest part by far, finding and keeping the first real clients",
      "How to turn my own recent SAT experience into a way of teaching that actually works for students a year or two behind me, instead of just explaining how I did it",
      "How much client communication and just being reliable matters. Families are trusting you with something they care about, and showing up consistently is basically the whole product",
      "Why a specific, believable pitch like 'learn from someone who just scored 1540+' works way better than a generic one",
    ],
    sections: [
      {
        heading: "Context",
        body: "SAT prep in the Tri-Valley is mostly expensive corporate test-prep centers taught by adults who took the test decades ago. My co-founder and I had just scored between 1540 and 1570, including a perfect 800 on Math, and we realized the most relatable and up-to-date help could come from students who had just done it themselves. Tri-Valley Prep is that idea turned into a real service.",
      },
      {
        heading: "Approach",
        body: "We built the brand, the pricing, and the website ourselves, then went out and found clients across Dublin, Pleasanton, San Ramon, and Danville. Tutoring happens 1-on-1 over Google Meet so we can cover all four cities without renting a space. The pitch is simple and specific on purpose: get help from someone who just sat in your seat and scored 1500+.",
      },
      {
        heading: "Outcome",
        body: "Tri-Valley Prep is live and working with students across all four cities. Past the tutoring itself, it's been the most complete lesson I've had in running something real. Every part of it, from the landing page to the relationships with repeat clients, is something we built and keep running ourselves.",
      },
    ],
  },
  {
    slug: "cnn-alzheimers",
    title: "CNN × Alzheimer's",
    subtitle:
      "Looking at how convolutional neural networks could help catch Alzheimer's disease earlier using MRI scans.",
    description:
      "An ongoing research project on how CNNs, a type of deep learning model, can read MRI scans to help diagnose Alzheimer's earlier. I'm working through the existing model designs, the performance metrics people use for clinical AI, and the ethical questions that come with using AI in medical diagnosis. Done through Emerald High School.",
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
      "An AI career counselor that gives teens a no-pressure space to think about who they might become.",
    description:
      "I built this for CogniHacks 2025. A FastAPI backend uses GPT to run a chatbot that helps you talk through career ideas. The frontend is HTML, CSS, and JS, and it saves your chat history right in the browser.",
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
