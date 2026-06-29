import SkillTag from "./SkillTag";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  body: string;
  tags: string[];
}

export default function HeroSection({ title, subtitle, body, tags }: HeroSectionProps) {
  return (
    <section
      className="py-16 sm:py-24"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h1
          className="text-3xl sm:text-4xl font-bold mb-3 text-balance"
          style={{ color: "var(--text-primary)" }}
        >
          {title}
        </h1>
        <p
          className="text-xl sm:text-2xl font-medium mb-6"
          style={{ color: "var(--accent-blue)" }}
        >
          {subtitle}
        </p>
        <p
          className="text-base sm:text-lg leading-relaxed mb-8"
          style={{ color: "var(--text-secondary)" }}
        >
          {body}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <SkillTag key={tag} label={tag} />
          ))}
        </div>
      </div>
    </section>
  );
}
