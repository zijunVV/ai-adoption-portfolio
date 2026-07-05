import SectionHeader from "@/components/SectionHeader";

export const metadata = {
  title: "Approach | AI Adoption Portfolio",
};

const whatIBring = [
  {
    title: "AI Adoption Design",
    body: "I design AI systems around real human workflows, not theoretical capabilities.",
  },
  {
    title: "Production Experience",
    body: "I have built, deployed, and monitored AI in production — not just in demos.",
  },
  {
    title: "Behavioral Focus",
    body: "I measure success by whether people continue to use the system, not just whether it works technically.",
  },
  {
    title: "Iterative Mindset",
    body: "I treat every deployment as the beginning of an observation cycle, not the end of a build cycle.",
  },
];

export default function ApproachPage() {
  return (
    <div style={{ backgroundColor: "var(--bg-primary)" }}>
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <SectionHeader
            title="My Approach"
            subtitle="What I bring to AI adoption, enablement, and digital transformation roles."
          />

          {/* Main content */}
          <div
            className="rounded-lg p-6 mb-10"
            style={{ backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border)" }}
          >
            <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              I work at the intersection of practical AI enablement, digital transformation, and
              human behavior. My goal is to help organizations move beyond simply trying AI tools
              toward building workflows that people genuinely adopt. The organizations I want to work
              with share one belief: that the value of AI is realized not when a model works, but when
              people change how they work because of it. I bridge business challenges, AI
              capabilities, and human behavior — so that AI solutions become practical, trusted, and
              sustainable.
            </p>
          </div>

          {/* Alignment points */}
          <div className="mb-10">
            <h2 className="text-lg font-semibold mb-5" style={{ color: "var(--text-primary)" }}>
              How I think about AI adoption
            </h2>
            <div className="space-y-4">
              {[
                {
                  point: "From experimentation to implementation",
                  detail:
                    "My work on Inner Order OS demonstrates moving from prototype to a deployed, production-monitored system — the same journey organizations must complete to turn AI pilots into real operational value.",
                },
                {
                  point: "Practical AI enablement",
                  detail:
                    "I design AI for behavioral adoption, not for demos. Every feature decision starts with: will users continue using this, or just try it once?",
                },
                {
                  point: "Digital transformation grounded in behavior",
                  detail:
                    "I have learned through deployment that the hardest part of digital transformation is not the technology — it is the workflow design and the behavioral change it requires.",
                },
              ].map(({ point, detail }) => (
                <div
                  key={point}
                  className="flex gap-4 p-5 rounded-lg"
                  style={{ backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border)" }}
                >
                  <div
                    className="w-1 rounded-full flex-shrink-0"
                    style={{ backgroundColor: "var(--accent-clay)" }}
                  />
                  <div>
                    <p className="text-sm font-semibold mb-1" style={{ color: "var(--text-primary)" }}>
                      {point}
                    </p>
                    <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                      {detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* What I Bring */}
          <div>
            <h2 className="text-lg font-semibold mb-5" style={{ color: "var(--text-primary)" }}>
              What I Bring
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {whatIBring.map(({ title, body }) => (
                <div
                  key={title}
                  className="rounded-lg p-5"
                  style={{ backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border)" }}
                >
                  <h3
                    className="text-sm font-semibold mb-2"
                    style={{ color: "var(--accent-clay)" }}
                  >
                    {title}
                  </h3>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div
            className="mt-10 rounded-lg px-6 py-6 text-center"
            style={{ backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border)" }}
          >
            <p className="font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
              Let&apos;s talk
            </p>
            <p className="text-sm mb-4" style={{ color: "var(--text-secondary)" }}>
              I am available to walk through any of the projects here in detail, discuss the adoption
              challenges I encountered, and talk about how I would approach AI adoption in your
              organization.
            </p>
            <a
              href="mailto:zijun.wangzj@hotmail.com"
              className="inline-block px-5 py-2.5 rounded text-sm font-medium"
              style={{ backgroundColor: "var(--accent-clay)", color: "#fff" }}
            >
              Get in Touch →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
