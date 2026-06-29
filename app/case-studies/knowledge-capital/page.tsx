import Link from "next/link";
import CaseStudySection from "@/components/CaseStudySection";
import SkillTag from "@/components/SkillTag";

export const metadata = {
  title: "Knowledge Capital OS Case Study | AI Adoption Portfolio",
};

const sections = [
  {
    title: "Problem",
    content:
      "Knowledge workers accumulate enormous amounts of research, notes, and ideas that never become decisions or reusable assets. Information is captured but not transformed.",
  },
  {
    title: "Solution",
    content:
      "Designed a personal knowledge and business operating system that uses AI to turn scattered research, notes, and ideas into structured insights, decisions, and reusable intellectual assets.",
  },
  {
    title: "My Role",
    content:
      "Designed the knowledge workflow architecture, AI-assisted thinking model, and asset classification system.",
  },
  {
    title: "AI Adoption Challenge",
    content:
      "Designing AI that enhances structured thinking rather than replacing it. The system guides users through a deliberate workflow: capture → organize → research → insight → decision → asset → capital.",
  },
  {
    title: "Technical Implementation",
    content:
      "AI-assisted workflow design with structured templates for knowledge capture, insight synthesis, and decision documentation. Designed for reuse — every captured insight becomes a retrievable, reusable asset.",
  },
  {
    title: "What I Learned",
    content:
      "The highest-value AI adoption use case is not generating content — it is helping humans convert thinking into reusable intellectual capital. Workflow design matters more than model quality.",
  },
];

const skills = [
  "Knowledge Workflow Design",
  "AI-Assisted Thinking",
  "Decision Support",
  "Information Architecture",
  "Prompt Engineering",
  "Reusable Asset Design",
];

export default function KnowledgeCapitalPage() {
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
            Knowledge Capital OS
          </h1>
          <p className="text-xl font-medium mb-8" style={{ color: "var(--accent-blue)" }}>
            Turning Information into Intellectual Assets
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
              Workflow design matters more than model quality. The highest-value AI adoption use case is
              helping humans convert thinking into reusable intellectual capital — not generating content.
            </p>
          </div>

          {sections.map((section) => (
            <CaseStudySection key={section.title} title={section.title} content={section.content} />
          ))}

          <div className="mt-8">
            <a
              href="https://github.com/zijunVV/kcas-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded text-sm font-medium"
              style={{ border: "1px solid var(--accent-blue)", color: "var(--accent-blue)" }}
            >
              GitHub →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
