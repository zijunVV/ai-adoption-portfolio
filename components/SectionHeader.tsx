interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
}

export default function SectionHeader({ title, subtitle, description }: SectionHeaderProps) {
  return (
    <div className="mb-10">
      <h2
        className="text-2xl sm:text-3xl font-bold mb-2"
        style={{ color: "var(--text-primary)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="text-lg font-medium mb-3"
          style={{ color: "var(--accent-blue)" }}
        >
          {subtitle}
        </p>
      )}
      {description && (
        <p
          className="text-base leading-relaxed max-w-2xl"
          style={{ color: "var(--text-secondary)" }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
