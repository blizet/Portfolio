import { basePath } from "@/lib/basePath";

// ---------------------------------------------------------------------------
// PROJECT CONTENT
// ---------------------------------------------------------------------------
// Edit project copy, tech stack, links, story chapters and gallery here.
// Each entry drives:
//   - The "Selected Work" section on the home page
//   - The /archive/<slug> case-study route
//   - The Experience section's right-side visual stack (via `visualSlug`)
// ---------------------------------------------------------------------------

const img = (name: string) => `${basePath}/images/${name}`;

export type ProjectLink = { label: string; href: string; primary?: boolean };
export type ProjectHighlight = { value: string; label: string };
export type ProjectChapter = { title: string; body: string };

export type Project = {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  /** Small brand mark / logo - rendered beside the title on the archive page. Convention: `<slug>_0.png`. */
  logo: string;
  /** Hero cover image. Convention: `<slug>_1.png`. */
  image: string;
  liveUrl: string;
  year: string;
  role: string;
  timeline: string;
  client: string;
  context: string;
  story: ProjectChapter[];
  highlights: ProjectHighlight[];
  /** Gallery uses `_1`, `_2`, `_3`. The logo (`_0`) is intentionally excluded. */
  gallery: string[];
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    id: "01",
    slug: "fate-protocol",
    title: "FATE PROTOCOL",
    category: "WEB3 / FRONTEND",
    description:
      "Decentralised perpetual prediction market with multi-oracle settlement and continuously open positions, built during GSoC 2025.",
    tech: ["Next.js 15", "TypeScript", "Solidity", "Ethers.js", "viem", "wagmi", "Tailwind CSS"],
    logo: img("fate_0.png"),
    image: img("fate_1.png"),
    liveUrl: "https://evm.fate.stability.nexus/",
    year: "2025",
    role: "GSoC Contributor - Frontend & Smart Contract Integration",
    timeline: "Jun 2025 - Nov 2025",
    client: "AOSSIE - Google Summer of Code",
    context:
      "A perpetual prediction market that keeps liquidity continuously available, settles transparently, and reads from multiple oracles - without locking users into a single market window.",
    story: [
      {
        title: "The Brief",
        body: "Design a perpetual prediction market that keeps liquidity continuously available, settles transparently, and reads from multiple oracles - without locking users into a single market window.",
      },
      {
        title: "Architecture",
        body: "A modular dual-vault contract pattern separates risk and liquidity layers, while an oracle aggregator handles redundancy. The frontend speaks to the chain through a strongly typed wagmi + viem client and surfaces market state in real time.",
      },
      {
        title: "What I Built",
        body: "End-to-end frontend with TypeScript, gas-aware transaction flows, market visualisations, and a contributor-friendly contract interaction layer that other AOSSIE devs can extend without touching the Solidity primitives.",
      },
    ],
    highlights: [
      { value: "2", label: "vault contracts" },
      { value: "8+", label: "oracle integrations" },
      { value: "100%", label: "type-safe contract IO" },
      { value: "OSS", label: "merged upstream" },
    ],
    gallery: [img("fate_1.png"), img("fate_2.png"), img("fate_3.png")],
    links: [
      { label: "OPEN LIVE PROTOCOL", href: "https://evm.fate.stability.nexus/", primary: true },
      { label: "READ PAPER", href: "https://www.academia.edu/165283873/Fate_Protocol_Perpetual_Prediction_Pools" },
      { label: "VIEW GITHUB", href: "https://github.com/StabilityNexus/Fate-EVM-Frontend" },
    ],
  },
  {
    id: "02",
    slug: "prosper-dev",
    title: "PROSPER DEV",
    category: "FULL-STACK / SAAS",
    description:
      "Real-estate project management platform that streamlines land ownership, approvals, and stakeholder coordination end to end.",
    tech: ["React", "Firebase", "Firestore", "Cloud Functions", "Tailwind CSS", "Stripe"],
    logo: img("prosper_0.png"),
    image: img("prosper_1.png"),
    liveUrl: "https://prosperdevelopers.com/",
    year: "2024",
    role: "Frontend Engineer",
    timeline: "Jan 2024 - May 2024",
    client: "Prosper Developers",
    context:
      "A SaaS platform for real-estate developers that replaces tangled spreadsheets and email threads with a single source of truth across land, approvals and buyers.",
    story: [
      {
        title: "The Brief",
        body: "Bring stakeholders - developers, buyers, legal and ops - onto one workspace where every approval, document and milestone has a home.",
      },
      {
        title: "Architecture",
        body: "React + Firestore for real-time state, Cloud Functions for workflow automation, and signed-URL document handling for secure file exchange.",
      },
      {
        title: "Outcomes",
        body: "Operational lead time on approvals dropped sharply. The platform now handles multi-site portfolios with role-aware dashboards and buyer-facing pipelines.",
      },
    ],
    highlights: [
      { value: "60%", label: "faster approvals" },
      { value: "Multi-site", label: "portfolio support" },
      { value: "Realtime", label: "Firestore-backed" },
      { value: "Signed", label: "doc exchange" },
    ],
    gallery: [img("prosper_1.png"), img("prosper_2.png"), img("prosper_3.png")],
    links: [
      { label: "OPEN LIVE SITE", href: "https://prosperdevelopers.com/", primary: true },
      { label: "PROCESS NOTES", href: "#" },
    ],
  },
  {
    id: "03",
    slug: "clowder",
    title: "CLOWDER",
    category: "WEB3 / CONTRIBUTION ACCOUNTING",
    description:
      "Contribution accounting platform that tracks project work through Contribution Accounting Tokens (CATs), turning collaboration into transparent on-chain ownership.",
    tech: ["Next.js", "TypeScript", "viem", "RainbowKit", "Solidity", "Tailwind CSS"],
    logo: img("clowder_0.png"),
    image: img("clowder_1.png"),
    liveUrl: "https://clowder.stability.nexus/",
    year: "2024",
    role: "Software Developer - Web3 Product",
    timeline: "Oct 2024 - Present",
    client: "Stability Nexus",
    context:
      "At Stability Nexus, I worked on Clowder to make contribution tracking verifiable and fair. CATs act as proof-of-contribution tokens, helping teams account for effort and align ownership with real participation.",
    story: [
      {
        title: "The Brief",
        body: "Build a contribution accounting system where collaborators can track, value, and tokenize their work using CATs in a way that is transparent and auditable.",
      },
      {
        title: "Approach",
        body: "Implemented the product in Next.js with viem + RainbowKit for wallet-connected contribution flows, and integrated Solidity smart contracts to mint and account CATs on-chain.",
      },
      {
        title: "Use Cases",
        body: "Clowder and CATs fit collaborative ecosystems where fair contribution accounting matters: open-source software, creative collaboration, event management teams, and governance-based DAOs.",
      },
    ],
    highlights: [
      { value: "CATs", label: "proof-of-contribution token" },
      { value: "Next.js", label: "frontend architecture" },
      { value: "viem + RainbowKit", label: "wallet-connected UX" },
      { value: "Solidity", label: "on-chain accounting logic" },
    ],
    gallery: [img("clowder_1.png"), img("clowder_2.png"), img("clowder_3.png")],
    links: [
      { label: "OPEN LIVE SITE", href: "https://clowder.stability.nexus/", primary: true },
      { label: "VIEW SOURCE", href: "https://github.com/Stability-Nexus" },
    ],
  },
  {
    id: "04",
    slug: "aossie",
    title: "AOSSIE",
    category: "OPEN SOURCE / MENTORSHIP",
    description:
      "Mentor and contributor across the AOSSIE open-source ecosystem - shipping reviews, contributor onboarding flows and community-facing tooling.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "GitHub Actions"],
    logo: img("aossie_0.png"),
    image: img("aossie_1.png"),
    liveUrl: "https://aossie.org/",
    year: "2025",
    role: "Mentor / Maintainer",
    timeline: "Dec 2025 - Present",
    client: "AOSSIE Open Source",
    context:
      "AOSSIE is a global open-source organisation. As a mentor I help contributors land their first impactful PR and keep the contributor experience clean and welcoming.",
    story: [
      {
        title: "The Brief",
        body: "Reduce friction for new contributors and keep the project surface coherent across multiple sub-projects and contributor cohorts.",
      },
      {
        title: "Approach",
        body: "Ran code reviews, refined contribution docs, paired on PRs with mentees, and helped triage issues so newcomers can find good first contributions quickly.",
      },
      {
        title: "Outcomes",
        body: "Higher merge throughput from new contributors, cleaner repo hygiene, and a stronger feedback loop between mentees, maintainers and project leads.",
      },
    ],
    highlights: [
      { value: "Mentor", label: "GSoC + community" },
      { value: "Reviews", label: "PRs across orgs" },
      { value: "Onboarding", label: "contributor docs" },
      { value: "Community", label: "global contributors" },
    ],
    gallery: [img("aossie_1.png"), img("aossie_2.png"), img("aossie_3.png")],
    links: [
      { label: "VISIT AOSSIE", href: "https://aossie.org/", primary: true },
      { label: "GITHUB ORG", href: "https://github.com/AOSSIE-Org" },
    ],
  },
  {
    id: "05",
    slug: "kridinify",
    title: "KRIDINIFY",
    category: "FULL-STACK / PRODUCT",
    description:
      "Production platform work at Kridinify Tech - REST APIs, internal dashboards, automation pipelines and SEO tooling for multi-site operators.",
    tech: ["FastAPI", "React", "PostgreSQL", "OAuth 2.0", "Redis", "Docker"],
    logo: img("kridin_0.png"),
    image: img("kridin_1.png"),
    liveUrl: "https://kridinifytech.in",
    year: "2025",
    role: "Software Development Engineer",
    timeline: "Jun 2025 - Present",
    client: "Kridinify Tech",
    context:
      "Built core platform pieces used internally and externally - APIs, dashboards, auth and the automation pipelines that keep the product moving.",
    story: [
      {
        title: "The Brief",
        body: "Stand up scalable APIs and operator-facing dashboards that let non-technical users manage many sites, audits and metadata pipelines from one workspace.",
      },
      {
        title: "Architecture",
        body: "Modular connector-based REST services on FastAPI, OAuth 2.0 with rate limiting and centralised error logging, and React dashboards with filtering, analytics and metadata views.",
      },
      {
        title: "Automation",
        body: "Built scraping, SEO audit and metadata generation pipelines that run on schedule and feed the dashboards directly, so operators see fresh data without manual exports.",
      },
    ],
    highlights: [
      { value: "15+", label: "scalable REST APIs" },
      { value: "OAuth", label: "secure access flow" },
      { value: "Dashboards", label: "operator-facing" },
      { value: "Pipelines", label: "scrape + SEO + meta" },
    ],
    gallery: [img("kridin_1.png"), img("kridin_2.png"), img("kridin_3.png")],
    links: [
      { label: "VISIT KRIDINIFY", href: "https://kridinifytech.in", primary: true },
    ],
  },
  {
    id: "06",
    slug: "extraction-esports",
    title: "EXTRACTION ESPORTS",
    category: "WEB PLATFORM / EDITORIAL",
    description:
      "An editorial esports studio website designed and built to present tournaments, divisions, services, and broadcast content in a premium narrative format.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Figma", "GSAP"],
    logo: img("ext_0.png"),
    image: img("ext_1.png"),
    liveUrl: "http://extractionesports.com/",
    year: "2026",
    role: "Product Designer & Frontend Developer",
    timeline: "2026",
    client: "Extraction Esports",
    context:
      "I designed the complete visual system and Figma flows, then implemented the website in Next.js + Tailwind CSS to deliver a cinematic, editorial browsing experience for India's esports ecosystem.",
    story: [
      {
        title: "Design Direction",
        body: "Built the complete design language in Figma: typography rhythm, dark editorial grids, section sequencing, and interactive motion cues that make the site feel like a premium digital publication.",
      },
      {
        title: "Frontend Build",
        body: "Implemented the full interface in Next.js and Tailwind CSS with reusable section primitives, responsive behavior, and smooth transitions between narrative, tournaments, highlights, and ecosystem modules.",
      },
      {
        title: "Outcome",
        body: "The result is a polished, story-led brand website that clearly communicates services, competitive divisions, tournament IP, and broadcast identity while staying fast and scalable.",
      },
    ],
    highlights: [
      { value: "Next.js", label: "production frontend" },
      { value: "Tailwind", label: "design system styling" },
      { value: "Figma", label: "full visual direction" },
      { value: "Editorial", label: "premium UX language" },
    ],
    gallery: [img("ext_1.png"), img("ext_2.png"), img("ext_3.png")],
    links: [
      { label: "OPEN LIVE WEBSITE", href: "http://extractionesports.com/", primary: true },
    ],
  },
  {
    id: "07",
    slug: "rnt",
    title: "RNT",
    category: "PRODUCT / FULL-STACK",
    description:
      "An end-to-end product surface with a focused workflow, considered UI, and a backend that quietly does the heavy lifting.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Prisma"],
    logo: img("rnt_0.png"),
    image: img("rnt_1.png"),
    liveUrl: "#",
    year: "2025",
    role: "Full-stack Builder",
    timeline: "2025",
    client: "Independent",
    context:
      "A product slice built end to end - data model, workflow, UI - around a single decision the user has to make often, made simpler.",
    story: [
      {
        title: "The Brief",
        body: "Take a noisy, multi-step decision and turn it into a single clear screen with the right defaults.",
      },
      {
        title: "Design",
        body: "Editorial typography, generous spacing, and motion only where it earns its keep. The whole product feels like one screen even when it is many.",
      },
      {
        title: "Outcomes",
        body: "A workflow that respects the user's attention - quick to enter, quick to exit, and quietly good at remembering context.",
      },
    ],
    highlights: [
      { value: "End-to-end", label: "data + UI + flow" },
      { value: "Editorial", label: "considered UI" },
      { value: "Defaults", label: "smart, fast" },
      { value: "Quiet", label: "motion that earns it" },
    ],
    gallery: [img("rnt_1.png"), img("rnt_2.png"), img("rnt_3.png")],
    links: [
      { label: "OPEN LIVE", href: "#", primary: true },
    ],
  },
];
