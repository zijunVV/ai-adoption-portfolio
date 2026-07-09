export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  evidence?: string;
}

export interface WorkflowCardData {
  title: string;
  diagram: string[];
  keyIdea: string;
}

export interface LessonRow {
  challenge: string;
  learned: string;
}

export const heroData = {
  title: "AI Adoption Portfolio",
  subtitle: "Designing AI systems that people actually use.",
  body: "Building AI products is easy. Building AI products that people continue to use is much harder. My work focuses on the second challenge: turning AI capabilities into trusted workflows, behavioral adoption, and measurable user value.",
  tags: [
    "AI Adoption",
    "Business Analysis",
    "Agentic Workflow",
    "Digital Transformation",
    "Prompt Engineering",
    "Production AI",
    "Human-AI Collaboration",
  ],
};

export const featuredProjects: Project[] = [
  {
    title: "Stock Analysis Tool",
    description:
      "Multi-market AI-powered stock analysis platform covering US equities, Hong Kong stocks, and Chinese A-shares. Users input ticker symbols to surface analytical insights, manage a personal watchlist, and run screening workflows—translating raw market data into decision-ready intelligence.",
    tags: ["AI Adoption", "Decision Intelligence", "Financial Analysis", "Production AI", "Multi-Market"],
    demoUrl: "https://stock-analyzer-60.vercel.app/",
    evidence: "Live production deployment covering US, HK, and A-share markets with watchlist and screening functionality.",
  },
  {
    title: "Inner Order OS",
    description:
      "Production AI platform for behavioral self-reflection. Instead of offering advice, the LLM asks one carefully calibrated question per interaction — designed to build the user's own thinking capacity.",
    tags: ["AI Adoption", "Prompt Engineering", "Behavioral Design", "Production AI", "Next.js", "Supabase"],
    demoUrl: "https://inner-order-os.vercel.app/",
    evidence: "Deployed on Vercel with real users. Production-monitored via function logs. Source code available upon request for review.",
  },
  {
    title: "Bridge the Gap",
    description:
      "AI-powered cross-cultural understanding platform using food as a medium. Transforms moments of cultural confusion into opportunities for authentic human connection.",
    tags: ["AI Adoption", "Cross-Cultural", "Community Design", "LLM Integration"],
    demoUrl: "https://bridge-the-gap-tan.vercel.app/",
    evidence: "Full-stack platform with community graph and AI cultural explanation. Source code available upon request for review.",
  },
  {
    title: "Knowledge Capital OS",
    description:
      "Personal knowledge and business operating system that uses AI to transform scattered research and notes into structured insights, decisions, and reusable intellectual assets.",
    tags: ["Knowledge Workflow", "AI-Assisted Thinking", "Decision Support", "Information Architecture"],
    githubUrl: "https://github.com/zijunVV/kcas-portfolio",
    evidence: "Workflow: capture → organize → research → insight → decision → asset → capital.",
  },
];

export const workflowCards: WorkflowCardData[] = [
  {
    title: "Stock Analysis Tool",
    diagram: ["Input ticker", "AI surfaces analysis", "Screening workflow", "Watchlist", "Compare signals", "Investment decision"],
    keyIdea:
      "Designed an AI decision-support layer that converts raw multi-market data into structured, actionable investment intelligence.",
  },
  {
    title: "Inner Order OS",
    diagram: ["User writes", "AI asks one precise question", "Reflection", "Memory", "Next action", "Daily habit", "Long-term behavior"],
    keyIdea:
      "Designed an AI interaction model that prioritizes behavioral change over information delivery.",
  },
  {
    title: "Bridge the Gap",
    diagram: ["Cultural confusion", "AI cultural explanation", "Community Q&A", "Connection graph", "Human connection"],
    keyIdea:
      "Transformed moments of cultural confusion into opportunities for cross-cultural interaction.",
  },
  {
    title: "Knowledge Capital OS",
    diagram: ["Capture", "Organize", "Research", "Insight", "Decision", "Asset", "Capital"],
    keyIdea:
      "Designed a knowledge workflow that turns information into reusable intellectual assets.",
  },
];

export const evidenceProjects: Project[] = [
  {
    title: "Stock Analysis Tool",
    description:
      "Multi-market AI-powered stock analysis platform. Covers US equities, Hong Kong stocks, and Chinese A-shares with ticker-based analysis, watchlist management, and stock screening workflows.",
    tags: ["Production AI", "Decision Intelligence", "Financial Analysis", "Multi-Market"],
    demoUrl: "https://stock-analyzer-60.vercel.app/",
    evidence: "Live production deployment. Source code available upon request for review.",
  },
  {
    title: "Inner Order OS",
    description:
      "Production AI platform for behavioral self-reflection. Built with Next.js 14, Supabase, Groq LLM, TypeScript, Vercel.",
    tags: ["Next.js 14", "Supabase", "Groq LLM", "TypeScript", "Vercel"],
    demoUrl: "https://inner-order-os.vercel.app/",
    evidence: "Live production deployment with real users and function-log monitoring. Source code available upon request for review.",
  },
  {
    title: "Bridge the Gap",
    description:
      "AI-powered cross-cultural understanding platform using food as a medium. Built with Next.js, LLM integration, community graph.",
    tags: ["Next.js", "LLM Integration", "Community Graph"],
    demoUrl: "https://bridge-the-gap-tan.vercel.app/",
    evidence: "Source code available upon request for review.",
  },
  {
    title: "Knowledge Capital OS",
    description:
      "Personal knowledge and business operating system. AI-assisted thinking and decision support.",
    tags: ["Knowledge Workflow", "AI-Assisted Thinking", "Decision Support"],
    githubUrl: "https://github.com/zijunVV/kcas-portfolio",
  },
  {
    title: "Digital Transformation Case Study",
    description:
      "Analysis and framework for organizational AI adoption.",
    tags: ["Digital Transformation", "Business Analysis", "AI Adoption Framework"],
  },
  {
    title: "Solo Company Radar",
    description:
      "Market research and company tracking tool.",
    tags: ["Market Research", "Company Tracking", "Business Intelligence"],
    githubUrl: "https://github.com/zijunVV/kcas-research",
  },
  {
    title: "KCAS / Knowledge Capital Asset System",
    description:
      "Knowledge capture and asset classification system.",
    tags: ["Knowledge Management", "Asset Classification", "Information Architecture"],
    githubUrl: "https://github.com/zijunVV/kcas-core",
  },
];

export const lessonRows: LessonRow[] = [
  {
    challenge: "Users ignored AI advice",
    learned: "People adopt questions more readily than instructions.",
  },
  {
    challenge: "Prompts produced inconsistent outputs",
    learned:
      "Prompt engineering requires guardrails and iterative evaluation, not one-time optimization.",
  },
  {
    challenge: "Model quality varied across scenarios",
    learned:
      "Production reliability depends on observation and continuous refinement, not choosing the largest model.",
  },
  {
    challenge: "AI answers alone did not create engagement",
    learned:
      "Lasting adoption comes from integrating AI into human workflows and communities.",
  },
  {
    challenge: "Low-cost models behave unpredictably",
    learned:
      "Reliability comes from careful workflow design, output validation, and production monitoring.",
  },
];

export const frameworkStages = [
  {
    number: "01",
    name: "Discover",
    description: "Identify real business or behavioral friction",
  },
  {
    number: "02",
    name: "Understand Workflow",
    description: "Map how users currently think, decide, and act",
  },
  {
    number: "03",
    name: "Prototype",
    description:
      "Build fast AI-enabled solutions using LLMs, Claude Code, and lightweight infrastructure",
  },
  {
    number: "04",
    name: "Observe Behavior",
    description: "Study how users actually interact with the system",
  },
  {
    number: "05",
    name: "Iterate",
    description:
      "Refine prompts, UX, workflows, and guardrails based on evidence",
  },
  {
    number: "06",
    name: "Scale",
    description: "Turn prototypes into repeatable workflows or products",
  },
];
