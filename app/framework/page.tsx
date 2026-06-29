import SectionHeader from "@/components/SectionHeader";
import { frameworkStages } from "@/data/portfolio";

export const metadata = {
  title: "AI Adoption Framework | AI Adoption Portfolio",
};

export default function FrameworkPage() {
  return (
    <div style={{ backgroundColor: "var(--bg-primary)" }}>
      <section className="py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <SectionHeader
            title="AI Adoption Framework"
            subtitle="Adoption is a design problem, not only a model problem."
            description="A six-stage framework built from direct experience deploying AI into real workflows. Each stage is grounded in what actually changes user behavior — not what sounds good in a presentation."
          />

          {/* Principle callout */}
          <div
            className="rounded-lg px-6 py-5 mb-12"
            style={{
              backgroundColor: "var(--bg-secondary)",
              borderLeft: "4px solid var(--accent-clay)",
            }}
          >
            <p className="text-base font-medium" style={{ color: "var(--text-primary)" }}>
              &ldquo;Adoption is a design problem, not only a model problem.&rdquo;
            </p>
            <p className="text-sm mt-1" style={{ color: "var(--text-secondary)" }}>
              The best model in the wrong workflow will fail to drive lasting behavior change.
              The right workflow with a smaller model can succeed where larger models have not.
            </p>
          </div>

          {/* Framework stages — desktop horizontal flow */}
          <div className="hidden lg:flex items-stretch gap-0 mb-12 overflow-x-auto">
            {frameworkStages.map((stage, i) => (
              <div key={stage.number} className="flex items-stretch">
                <div
                  className="flex flex-col items-center text-center px-4 py-5 rounded-lg min-w-[140px]"
                  style={{
                    backgroundColor: "var(--bg-secondary)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <span
                    className="text-xs font-bold mb-2"
                    style={{ color: "var(--accent-blue)" }}
                  >
                    {stage.number}
                  </span>
                  <span
                    className="text-sm font-semibold mb-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {stage.name}
                  </span>
                  <span className="text-xs leading-snug" style={{ color: "var(--text-secondary)" }}>
                    {stage.description}
                  </span>
                </div>
                {i < frameworkStages.length - 1 && (
                  <div className="flex items-center px-2">
                    <span className="text-lg" style={{ color: "var(--accent-blue)" }}>→</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile vertical flow */}
          <div className="lg:hidden space-y-4 mb-12">
            {frameworkStages.map((stage, i) => (
              <div key={stage.number}>
                <div
                  className="rounded-lg p-5"
                  style={{
                    backgroundColor: "var(--bg-secondary)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="text-sm font-bold"
                      style={{ color: "var(--accent-blue)" }}
                    >
                      {stage.number}
                    </span>
                    <span
                      className="font-semibold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {stage.name}
                    </span>
                  </div>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    {stage.description}
                  </p>
                </div>
                {i < frameworkStages.length - 1 && (
                  <div className="flex justify-center py-1">
                    <span className="text-lg" style={{ color: "var(--accent-blue)" }}>↓</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Detailed stage breakdown */}
          <div
            className="rounded-lg p-6"
            style={{ backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border)" }}
          >
            <h2 className="text-lg font-semibold mb-6" style={{ color: "var(--text-primary)" }}>
              What each stage actually involves
            </h2>
            <div className="space-y-6">
              {[
                {
                  stage: "01 — Discover",
                  detail:
                    "Not every workflow benefits from AI. This stage is about identifying where the real friction is — not where AI sounds interesting, but where users are genuinely stuck and where AI could reduce that friction without creating new friction. Includes stakeholder interviews, workflow observation, and hypothesis formation.",
                },
                {
                  stage: "02 — Understand Workflow",
                  detail:
                    "Before adding AI, map how users currently think and act. What decisions do they make? What information do they reach for? Where do they slow down? This is not a process-mapping exercise — it is a cognitive workflow analysis, because AI adoption fails when it disrupts thinking patterns that are already working.",
                },
                {
                  stage: "03 — Prototype",
                  detail:
                    "Build fast. Use LLMs, Claude Code, and lightweight infrastructure to create working prototypes in days, not months. The goal is not a polished product — it is a real artifact that users can interact with so you can observe what actually happens.",
                },
                {
                  stage: "04 — Observe Behavior",
                  detail:
                    "This is the most important and most skipped stage. Study how users actually interact with the system — not how they say they would in a survey, and not what you intended them to do. Log behavior, watch sessions, read the data.",
                },
                {
                  stage: "05 — Iterate",
                  detail:
                    "Refine prompts, UX, workflows, and guardrails based on evidence from observation. Not based on intuition. Not based on what the model is capable of in theory. Based on what is actually happening in practice.",
                },
                {
                  stage: "06 — Scale",
                  detail:
                    "Turn validated prototypes into repeatable workflows or products. This includes documentation, training, monitoring infrastructure, and ongoing evaluation — because scale without observation leads to silent model drift and adoption decay.",
                },
              ].map(({ stage, detail }) => (
                <div
                  key={stage}
                  className="pb-6 border-b last:border-b-0 last:pb-0"
                  style={{ borderColor: "var(--border)" }}
                >
                  <p className="font-semibold text-sm mb-2" style={{ color: "var(--accent-blue)" }}>
                    {stage}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
