interface CaseStudySectionProps {
  title: string;
  content: string;
}

export default function CaseStudySection({ title, content }: CaseStudySectionProps) {
  return (
    <div
      className="mb-8 pb-8 border-b last:border-b-0"
      style={{ borderColor: "var(--border)" }}
    >
      <h2
        className="text-lg font-semibold mb-3"
        style={{ color: "var(--text-primary)" }}
      >
        {title}
      </h2>
      <p
        className="text-base leading-relaxed"
        style={{ color: "var(--text-secondary)" }}
      >
        {content}
      </p>
    </div>
  );
}
