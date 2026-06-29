import SectionHeader from "@/components/SectionHeader";
import LessonTable from "@/components/LessonTable";
import { lessonRows } from "@/data/portfolio";

export const metadata = {
  title: "Lessons Learned | AI Adoption Portfolio",
};

export default function LessonsPage() {
  return (
    <div style={{ backgroundColor: "var(--bg-primary)" }}>
      <section className="py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <SectionHeader
            title="Lessons from Building AI That People Actually Use"
            subtitle="Evidence-based, not theoretical."
            description="Each lesson below came from deploying AI into real workflows and observing how users actually behave."
          />

          <LessonTable rows={lessonRows} />

          <div
            className="mt-8 rounded-lg px-6 py-5"
            style={{ backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border)" }}
          >
            <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              These lessons are not theoretical. Each came from deploying AI into real workflows,
              observing how users actually behave, and iterating based on evidence rather than
              assumptions. The pattern is consistent: what works in a demo does not always survive
              contact with real users — and what feels right in theory often fails in practice for
              reasons that only become visible through direct observation.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                principle: "Observe before concluding",
                detail:
                  "Production behavior and intended behavior diverge in almost every deployment. Always instrument first, then iterate.",
              },
              {
                principle: "Questions > answers",
                detail:
                  "AI that asks precise questions outperforms AI that provides comprehensive answers for driving behavioral change.",
              },
              {
                principle: "Workflow design > model selection",
                detail:
                  "A well-designed workflow with a smaller model consistently outperforms a poorly-designed workflow with a larger one.",
              },
              {
                principle: "Human connection > AI engagement",
                detail:
                  "The most durable AI adoption leads users toward human interaction, not away from it.",
              },
            ].map(({ principle, detail }) => (
              <div
                key={principle}
                className="rounded-lg p-5"
                style={{ backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border)" }}
              >
                <p className="text-sm font-semibold mb-2" style={{ color: "var(--accent-blue)" }}>
                  {principle}
                </p>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
