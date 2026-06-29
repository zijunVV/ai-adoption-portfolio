interface SkillTagProps {
  label: string;
}

export default function SkillTag({ label }: SkillTagProps) {
  return (
    <span
      className="inline-block text-xs px-2.5 py-1 rounded-full font-medium"
      style={{
        backgroundColor: "var(--bg-secondary)",
        color: "var(--text-secondary)",
        border: "1px solid var(--border)",
      }}
    >
      {label}
    </span>
  );
}
