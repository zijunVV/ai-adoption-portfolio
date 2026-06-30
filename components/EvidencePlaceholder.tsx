import Image from "next/image";

interface EvidencePlaceholderProps {
  label: string;
  src?: string;
}

export default function EvidencePlaceholder({ label, src }: EvidencePlaceholderProps) {
  if (src) {
    return (
      <div
        className="rounded-lg overflow-hidden my-4"
        style={{ border: "1px solid var(--border)" }}
      >
        <Image
          src={src}
          alt={label}
          width={1600}
          height={1000}
          className="w-full h-auto"
          sizes="(max-width: 768px) 100vw, 768px"
        />
      </div>
    );
  }

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
