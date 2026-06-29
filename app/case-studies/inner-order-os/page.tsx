import Link from "next/link";
import CaseStudySection from "@/components/CaseStudySection";
import SkillTag from "@/components/SkillTag";

export const metadata = {
  title: "Inner Order OS Case Study | AI Adoption Portfolio",
};

const sections = [
  {
    title: "Problem",
    content:
      "Most AI tools optimize for delivering answers. But giving users better answers does not change behavior. The real challenge is designing an AI interaction model that builds the user's own thinking capacity rather than replacing it.",
  },
  {
    title: "Solution",
    content:
      "Independently designed, built, and deployed Inner Order OS — a production AI platform that guides users toward self-reflection and intentional action. Instead of offering advice, the LLM asks one carefully calibrated question per interaction, encouraging users to develop their own reasoning process.",
  },
  {
    title: "My Role",
    content:
      "Owned the complete AI adoption lifecycle — from product conception and prompt architecture to deployment, production monitoring, and iterative improvement based on real user behavior.",
  },
  {
    title: "AI Adoption Challenge",
    content:
      "Enforcing disciplined AI behavior at scale. The system uses multi-layer prompt engineering, structured output validation, and production guardrails to ensure the model stays in its calibrator role rather than drifting toward advice or comfort.",
  },
  {
    title: "Technical Implementation",
    content:
      "Selected and integrated Groq-hosted LLM infrastructure (llama-3.1-8b-instant) balancing latency, capability, and operating cost. Built with Next.js 14, Supabase, and TypeScript. Deployed on Vercel with production monitoring via function logs.",
  },
  {
    title: "What I Learned",
    content:
      "Small models degenerate on open-ended input. Structured, field-delimited prompts constrain model behavior far more effectively than instructions alone. Production reliability comes from observation and iteration, not model selection.",
  },
];

const skills = [
  "AI Adoption",
  "Prompt Engineering",
  "Behavioral Design",
  "Production AI",
  "LLM Evaluation",
  "AI Reliability",
  "Cost-Capability Tradeoff",
  "User Behavior Observation",
];

export default function InnerOrderOSPage() {
  return (
    <div style={{ backgroundColor: "var(--bg-primary)" }}>
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="mb-4">
            <Link
              href="/"
              className="text-sm"
              style={{ color: "var(--accent-blue)" }}
            >
              ← Back to Portfolio
            </Link>
          </div>

          <div
            className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4"
            style={{ backgroundColor: "var(--bg-secondary)", color: "var(--accent-blue)", border: "1px solid var(--border)" }}
          >
            Case Study
          </div>

          <h1
            className="text-3xl sm:text-4xl font-bold mb-3"
            style={{ color: "var(--text-primary)" }}
          >
            Inner Order OS
          </h1>
          <p
            className="text-xl font-medium mb-8"
            style={{ color: "var(--accent-blue)" }}
          >
            Designing AI for Behavioral Adoption
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
              The AI&apos;s job is not to answer — it is to ask. One precise question per interaction outperforms
              comprehensive advice for driving lasting behavioral change.
            </p>
          </div>

          {sections.map((section) => (
            <CaseStudySection
              key={section.title}
              title={section.title}
              content={section.content}
            />
          ))}

          <div className="mt-8 flex gap-4">
            <a
              href="#"
              className="px-4 py-2 rounded text-sm font-medium"
              style={{ border: "1px solid var(--accent-blue)", color: "var(--accent-blue)" }}
            >
              GitHub →
            </a>
            <a
              href="#"
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
