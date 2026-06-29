export default function Footer() {
  return (
    <footer
      className="mt-auto py-10 border-t"
      style={{ backgroundColor: "var(--bg-secondary)", borderColor: "var(--border)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
          © {new Date().getFullYear()} AI Adoption Portfolio
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm transition-colors hover:underline"
            style={{ color: "var(--accent-blue)" }}
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm transition-colors hover:underline"
            style={{ color: "var(--accent-blue)" }}
          >
            LinkedIn
          </a>
          <a
            href="mailto:your@email.com"
            className="text-sm transition-colors hover:underline"
            style={{ color: "var(--accent-blue)" }}
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
