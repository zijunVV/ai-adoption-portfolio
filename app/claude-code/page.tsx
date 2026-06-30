import fs from "fs";
import path from "path";
import EvidencePlaceholder from "@/components/EvidencePlaceholder";
import SectionHeader from "@/components/SectionHeader";

export const metadata = {
  title: "Claude Code Insights Report | AI Adoption Portfolio",
};

const sections = [
  {
    title: "How I Use Claude Code",
    body: "Claude Code is not just a coding assistant. I use it as a collaborative engineering partner for translating product ideas into working systems — across the full product lifecycle, from initial architecture to production debugging.",
    placeholder: "[Screenshot: Claude Code session — full product lifecycle overview]",
    image: "/evidence/01-lifecycle-overview.png",
  },
  {
    title: "Workflow Planning",
    body: "Before writing a single line of code, I use Claude Code to map architecture, identify dependencies, and sequence implementation. This produces a concrete build plan that surfaces risks early, rather than discovering them mid-implementation.",
    placeholder: "[Screenshot: Claude Code workflow planning — architecture map and dependency sequence]",
    image: "/evidence/02-workflow-planning.png",
  },
  {
    title: "Rapid Prototyping",
    body: "Claude Code lets me translate product ideas into working prototypes in hours, not days. I describe the intended behavior, the data model, and the user interaction — Claude Code generates a buildable scaffold that I verify, test, and iterate on immediately.",
    placeholder: "[Screenshot: Claude Code rapid prototyping — Inner Order OS entry editor scaffolded in one session]",
    image: "/evidence/03-rapid-prototyping.png",
  },
  {
    title: "Prompt Iteration",
    body: "I use Claude Code to draft, test, and refine prompts for production AI features. The iteration cycle — write prompt → test against real inputs → observe output patterns → refine → redeploy — moves at a pace that would take much longer without AI-native tooling.",
    placeholder: "[Screenshot: Claude Code prompt iteration — calibration prompt refinement across three versions]",
    image: "/evidence/04-prompt-iteration.png",
  },
  {
    title: "Code Generation and Refactoring",
    body: "I use Claude Code to generate TypeScript, SQL, and API routes with consistent patterns across the codebase. It also helps identify refactoring opportunities — not just what to change, but why the change reduces technical debt.",
    placeholder: "[Screenshot: Claude Code code generation — Supabase migration and TypeScript types generated together]",
    image: "/evidence/05-code-generation.png",
  },
  {
    title: "Documentation",
    body: "Claude Code helps generate and maintain living documentation that stays aligned with actual code. CLAUDE.md in my projects is written and updated with Claude Code to reflect real implementation decisions, not just intended design.",
    placeholder: "[Screenshot: Claude Code documentation — CLAUDE.md update reflecting production changes]",
    image: "/evidence/06-documentation.png",
  },
  {
    title: "Testing and Debugging",
    body: "When production issues arise, I use Claude Code to diagnose problems from logs and iterate fixes in real time. The debugging loop — read log → form hypothesis → write fix → redeploy → verify — is tighter with a collaborative AI partner than alone.",
    placeholder: "[Screenshot: Claude Code debugging — Vercel function log analysis and fix iteration]",
    image: "/evidence/07-debugging.png",
  },
  {
    title: "Lessons from AI-Assisted Development",
    body: "Two lessons that changed how I work: First, reliability comes from observation, not assumption — a green build does not prove runtime behavior. Second, Claude Code is most valuable not as a code-writer but as a thinking partner that keeps implementation grounded in product intent.",
    placeholder: "[Screenshot: Claude Code lesson — production fix after build passed but runtime failed]",
    image: "/evidence/08-lessons.png",
  },
];

function imageExists(publicPath: string): boolean {
  return fs.existsSync(path.join(process.cwd(), "public", publicPath));
}

export default function ClaudeCodePage() {
  return (
    <div style={{ backgroundColor: "var(--bg-primary)" }}>
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <SectionHeader
            title="Claude Code Insights Report"
            subtitle="How I use Claude Code as an AI-native development partner."
          />

          {/* Opening callout */}
          <div
            className="rounded-lg px-6 py-5 mb-10"
            style={{
              backgroundColor: "var(--bg-secondary)",
              borderLeft: "4px solid var(--accent-clay)",
            }}
          >
            <p className="text-base font-medium" style={{ color: "var(--text-primary)" }}>
              &ldquo;Claude Code is not just a coding assistant. I use it as a collaborative
              engineering partner for translating product ideas into working systems.&rdquo;
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-10">
            {sections.map((section, i) => (
              <div key={section.title}>
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "var(--accent-blue)", color: "#fff" }}
                  >
                    {i + 1}
                  </span>
                  <h2 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>
                    {section.title}
                  </h2>
                </div>
                <p className="text-sm leading-relaxed mb-3 pl-9" style={{ color: "var(--text-secondary)" }}>
                  {section.body}
                </p>
                <div className="pl-9">
                  <EvidencePlaceholder
                    label={section.placeholder}
                    src={imageExists(section.image) ? section.image : undefined}
                  />
                </div>
                {i < sections.length - 1 && (
                  <div className="mt-8 border-b" style={{ borderColor: "var(--border)" }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
