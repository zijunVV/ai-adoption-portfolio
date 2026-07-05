import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import SectionHeader from "@/components/SectionHeader";
import { heroData, featuredProjects } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <HeroSection
        title={heroData.title}
        subtitle={heroData.subtitle}
        body={heroData.body}
        tags={heroData.tags}
      />

      <section
        className="py-14"
        style={{ backgroundColor: "var(--bg-secondary)" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeader
            title="Featured Projects"
            subtitle="From prototype to production."
            description="Three projects that demonstrate the full AI adoption lifecycle — from identifying real friction to deploying, monitoring, and iterating based on user behavior."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>

          <div className="mt-10 flex gap-4">
            <Link
              href="/framework"
              className="inline-block px-5 py-2.5 rounded text-sm font-medium transition-colors"
              style={{
                backgroundColor: "var(--accent-clay)",
                color: "#fff",
              }}
            >
              View My Framework →
            </Link>
            <Link
              href="/evidence"
              className="inline-block px-5 py-2.5 rounded text-sm font-medium transition-colors"
              style={{
                color: "var(--accent-blue)",
                border: "1px solid var(--accent-blue)",
              }}
            >
              All Technical Evidence →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14" style={{ backgroundColor: "var(--bg-primary)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              className="rounded-lg p-6"
              style={{ backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border)" }}
            >
              <h3 className="font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                AI Adoption Framework
              </h3>
              <p className="text-sm mb-4" style={{ color: "var(--text-secondary)" }}>
                A six-stage framework from discovery to scale — built from real deployment experience.
              </p>
              <Link href="/framework" className="text-sm font-medium" style={{ color: "var(--accent-blue)" }}>
                Explore the framework →
              </Link>
            </div>
            <div
              className="rounded-lg p-6"
              style={{ backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border)" }}
            >
              <h3 className="font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                Claude Code Insights
              </h3>
              <p className="text-sm mb-4" style={{ color: "var(--text-secondary)" }}>
                How I use Claude Code as an AI-native development partner throughout the full product lifecycle.
              </p>
              <Link href="/claude-code" className="text-sm font-medium" style={{ color: "var(--accent-blue)" }}>
                Read the report →
              </Link>
            </div>
            <div
              className="rounded-lg p-6"
              style={{ backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border)" }}
            >
              <h3 className="font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                My Approach
              </h3>
              <p className="text-sm mb-4" style={{ color: "var(--text-secondary)" }}>
                What I bring to AI adoption, enablement, and digital transformation roles — and how I think about the work.
              </p>
              <Link href="/approach" className="text-sm font-medium" style={{ color: "var(--accent-clay)" }}>
                Read more →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
