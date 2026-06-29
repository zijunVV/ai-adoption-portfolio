import Link from "next/link";
import CaseStudySection from "@/components/CaseStudySection";
import SkillTag from "@/components/SkillTag";

export const metadata = {
  title: "Bridge the Gap Case Study | AI Adoption Portfolio",
};

const sections = [
  {
    title: "Problem",
    content:
      "International students, immigrants, and global communities often experience cultural confusion in everyday situations. Existing tools translate words but do not convey meaning, context, or connection.",
  },
  {
    title: "Solution",
    content:
      "Built a full-stack AI-powered platform that uses food as a medium for cultural understanding. When users encounter unfamiliar ingredients or dishes, AI explains not only their functional meaning but also the cultural stories, traditions, and lived experiences behind them.",
  },
  {
    title: "My Role",
    content:
      "Designed the platform architecture, AI interaction model, behavioral incentive system, and community graph structure.",
  },
  {
    title: "AI Adoption Challenge",
    content:
      "AI answers alone do not create lasting engagement. Designed a behavioral incentive system that transforms moments of uncertainty into opportunities for conversation, encouraging users to move from AI-generated answers toward authentic human interaction.",
  },
  {
    title: "Technical Implementation",
    content:
      "Full-stack platform with LLM integration for cultural explanation, community Q&A network, and connection graph for discovering shared cultural backgrounds.",
  },
  {
    title: "Community Design",
    content:
      "Integrated AI cultural translation with community features that reward human connection — the system is designed so that AI is a starting point, not a destination.",
  },
  {
    title: "What I Learned",
    content:
      "People adopt AI tools that lead them toward human connection, not away from it. The most durable AI adoption happens when the product amplifies existing human motivations.",
  },
];

const skills = [
  "AI Adoption",
  "Human-AI Collaboration",
  "Cross-Cultural Communication",
  "Community Design",
  "Agent Workflow",
  "LLM Integration",
  "Behavioral Incentive Design",
];

export default function BridgeTheGapPage() {
  return (
    <div style={{ backgroundColor: "var(--bg-primary)" }}>
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="mb-4">
            <Link href="/" className="text-sm" style={{ color: "var(--accent-blue)" }}>
              ← Back to Portfolio
            </Link>
          </div>

          <div
            className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4"
            style={{ backgroundColor: "var(--bg-secondary)", color: "var(--accent-blue)", border: "1px solid var(--border)" }}
          >
            Case Study
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
            Bridge the Gap
          </h1>
          <p className="text-xl font-medium mb-8" style={{ color: "var(--accent-blue)" }}>
            AI for Cross-Cultural Understanding
          </p>

          <div className="flex flex-wrap gap-1.5 mb-10">
            {skills.map((s) => (
              <SkillTag key={s} label={s} />
            ))}
          </div>

          <div
            className="rounded-lg p-5 mb-10"
            style={{ backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border)" }}
          >
            <p className="text-sm font-semibold mb-1" style={{ color: "var(--text-primary)" }}>
              Key insight
            </p>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              AI adoption is most durable when the product amplifies existing human motivations — in this case,
              the desire for genuine human connection across cultural boundaries.
            </p>
          </div>

          {sections.map((section) => (
            <CaseStudySection key={section.title} title={section.title} content={section.content} />
          ))}

          <div className="mt-8">
            <a
              href="https://bridge-the-gap-tan.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded text-sm font-medium"
              style={{ backgroundColor: "var(--accent-clay)", color: "#fff" }}
            >
              Live Demo →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
