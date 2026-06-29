interface EvidencePlaceholderProps {
  label: string;
}

export default function EvidencePlaceholder({ label }: EvidencePlaceholderProps) {
  return (
    <div
      className="rounded-lg px-4 py-8 text-center my-4"
      style={{
        border: "2px dashed var(--border)",
        backgroundColor: "var(--bg-secondary)",
        color: "var(--text-secondary)",
      }}
    >
      <p className="text-sm italic">{label}</p>
    </div>
  );
}
