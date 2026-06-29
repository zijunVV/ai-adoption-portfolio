import SectionHeader from "@/components/SectionHeader";
import WorkflowCard from "@/components/WorkflowCard";
import { workflowCards } from "@/data/portfolio";

export const metadata = {
  title: "AI Workflow Showcase | AI Adoption Portfolio",
};

export default function ShowcasePage() {
  return (
    <div style={{ backgroundColor: "var(--bg-primary)" }}>
      <section className="py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <SectionHeader
            title="AI Workflow Showcase"
            subtitle="Workflows designed for behavioral adoption."
            description="Three workflow designs — each built around a real human need, a specific adoption challenge, and an AI interaction model that supports lasting behavior change."
          />

          <div className="space-y-6">
            {workflowCards.map((card) => (
              <WorkflowCard key={card.title} {...card} />
            ))}
          </div>

          <div
            className="mt-10 rounded-lg p-6"
            style={{ backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border)" }}
          >
            <h3 className="font-semibold mb-3" style={{ color: "var(--text-primary)" }}>
              What these workflows share
            </h3>
            <ul className="space-y-2">
              {[
                "AI is positioned as a facilitator, not a decision-maker",
                "Each workflow step has a clear human action — AI supports, not replaces",
                "The end state is a human behavior change, not just an AI output",
                "Workflows are designed to be observed and improved over time",
              ].map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                  <span style={{ color: "var(--accent-blue)" }} className="mt-0.5 flex-shrink-0">→</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
