"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Framework", href: "/framework" },
  { label: "Showcase", href: "/showcase" },
  { label: "Claude Code", href: "/claude-code" },
  { label: "Evidence", href: "/evidence" },
  { label: "Lessons", href: "/lessons" },
  { label: "Why GreenTomato", href: "/why-greentomato" },
];

const caseStudyLinks = [
  { label: "Inner Order OS", href: "/case-studies/inner-order-os" },
  { label: "Bridge the Gap", href: "/case-studies/bridge-the-gap" },
  { label: "Knowledge Capital", href: "/case-studies/knowledge-capital" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [caseOpen, setCaseOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      style={{ backgroundColor: "var(--bg-primary)", borderBottom: "1px solid var(--border)" }}
      className="sticky top-0 z-50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link
            href="/"
            className="font-bold text-sm tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            AI Adoption Portfolio
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-sm rounded transition-colors"
                style={{
                  color: pathname === link.href ? "var(--accent-blue)" : "var(--text-secondary)",
                  fontWeight: pathname === link.href ? "600" : "400",
                }}
              >
                {link.label}
              </Link>
            ))}

            {/* Case Studies dropdown */}
            <div className="relative">
              <button
                onClick={() => setCaseOpen(!caseOpen)}
                className="px-3 py-1.5 text-sm rounded transition-colors flex items-center gap-1"
                style={{
                  color: pathname?.startsWith("/case-studies") ? "var(--accent-blue)" : "var(--text-secondary)",
                  fontWeight: pathname?.startsWith("/case-studies") ? "600" : "400",
                }}
              >
                Case Studies
                <span className="text-xs">{caseOpen ? "▲" : "▼"}</span>
              </button>
              {caseOpen && (
                <div
                  className="absolute right-0 mt-1 w-48 rounded shadow-md py-1"
                  style={{ backgroundColor: "var(--bg-primary)", border: "1px solid var(--border)" }}
                >
                  {caseStudyLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setCaseOpen(false)}
                      className="block px-4 py-2 text-sm hover:bg-gray-50 transition-colors"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded"
            style={{ color: "var(--text-secondary)" }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="md:hidden pb-3 pt-1 border-t" style={{ borderColor: "var(--border)" }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-2 py-2 text-sm"
                style={{ color: pathname === link.href ? "var(--accent-blue)" : "var(--text-secondary)" }}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-2 py-1 text-xs font-semibold uppercase tracking-wide mt-2" style={{ color: "var(--text-secondary)" }}>
              Case Studies
            </div>
            {caseStudyLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-2 text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
