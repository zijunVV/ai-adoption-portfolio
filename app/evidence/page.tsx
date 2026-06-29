import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import { evidenceProjects } from "@/data/portfolio";

export const metadata = {
  title: "Technical Evidence | AI Adoption Portfolio",
};

export default function EvidencePage() {
  return (
    <div style={{ backgroundColor: "var(--bg-primary)" }}>
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeader
            title="Technical Evidence"
            subtitle="Built, deployed, and monitored in production."
            description="A portfolio of technical work demonstrating the full AI adoption lifecycle — from concept to deployed, production-monitored systems."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {evidenceProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>

          <div
            className="mt-10 rounded-lg p-6"
            style={{ backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border)" }}
          >
            <p className="text-sm font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
              A note on &ldquo;#&rdquo; links
            </p>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              GitHub and demo links above are placeholder — replace these with real URLs before sharing
              this portfolio publicly. See the README for the placeholder checklist.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
