import SkillTag from "./SkillTag";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  evidence?: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  githubUrl,
  demoUrl,
  evidence,
}: ProjectCardProps) {
  return (
    <div
      className="rounded-lg p-6 shadow-sm flex flex-col"
      style={{
        backgroundColor: "var(--bg-primary)",
        border: "1px solid var(--border)",
      }}
    >
      <h3
        className="text-lg font-semibold mb-2"
        style={{ color: "var(--text-primary)" }}
      >
        {title}
      </h3>
      <p
        className="text-sm leading-relaxed mb-4 flex-1"
        style={{ color: "var(--text-secondary)" }}
      >
        {description}
      </p>

      {evidence && (
        <p
          className="text-xs italic mb-4"
          style={{ color: "var(--text-secondary)" }}
        >
          {evidence}
        </p>
      )}

      <div className="flex flex-wrap gap-1.5 mb-4">
        {tags.map((tag) => (
          <SkillTag key={tag} label={tag} />
        ))}
      </div>

      <div className="flex gap-3">
        {githubUrl && (
          <a
            href={githubUrl}
            className="text-sm font-medium px-3 py-1.5 rounded transition-colors"
            style={{
              color: "var(--accent-blue)",
              border: "1px solid var(--accent-blue)",
            }}
          >
            GitHub →
          </a>
        )}
        {demoUrl && (
          <a
            href={demoUrl}
            className="text-sm font-medium px-3 py-1.5 rounded transition-colors"
            style={{
              backgroundColor: "var(--accent-clay)",
              color: "#fff",
            }}
          >
            Live Demo →
          </a>
        )}
      </div>
    </div>
  );
}
