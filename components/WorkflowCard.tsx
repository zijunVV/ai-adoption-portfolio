interface WorkflowCardProps {
  title: string;
  diagram: string[];
  keyIdea: string;
}

export default function WorkflowCard({ title, diagram, keyIdea }: WorkflowCardProps) {
  return (
    <div
      className="rounded-lg p-6 shadow-sm"
      style={{
        backgroundColor: "var(--bg-primary)",
        border: "1px solid var(--border)",
      }}
    >
      <h3
        className="text-lg font-semibold mb-4"
        style={{ color: "var(--text-primary)" }}
      >
        {title}
      </h3>

      {/* Diagram */}
      <div className="flex flex-wrap items-center gap-2 mb-5">
        {diagram.map((step, i) => (
          <span key={i} className="flex items-center gap-2">
            <span
              className="text-sm px-3 py-1.5 rounded"
              style={{
                backgroundColor: "var(--bg-secondary)",
                color: "var(--text-primary)",
                border: "1px solid var(--border)",
              }}
            >
              {step}
            </span>
            {i < diagram.length - 1 && (
              <span className="text-sm font-medium" style={{ color: "var(--accent-blue)" }}>
                →
              </span>
            )}
          </span>
        ))}
      </div>

      <div
        className="text-sm px-4 py-3 rounded"
        style={{
          backgroundColor: "var(--bg-secondary)",
          borderLeft: "3px solid var(--accent-blue)",
          color: "var(--text-secondary)",
        }}
      >
        <span className="font-semibold" style={{ color: "var(--text-primary)" }}>Key idea: </span>
        {keyIdea}
      </div>
    </div>
  );
}
