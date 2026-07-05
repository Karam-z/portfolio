"use client";

import { useState } from "react";

const LINKS: [string, string][] = [
  ["About", "#about"],
  ["Projects", "#work"],
  ["Contact", "#contact"],
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle menu"
        aria-expanded={open}
        className="w-9 h-9 rounded-lg border border-[var(--border)] flex items-center justify-center hover:border-[var(--accent)] transition-colors"
      >
        <span className="text-lg leading-none">{open ? "✕" : "☰"}</span>
      </button>

      {open && (
        <div className="absolute right-4 top-[68px] w-52 rounded-xl border border-[var(--border)] bg-[var(--card-solid)] backdrop-blur-xl p-2 shadow-2xl flex flex-col">
          {LINKS.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 rounded-lg hover:bg-[var(--accent-soft)] transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-1 px-4 py-3 rounded-lg bg-[var(--accent)] text-[var(--on-accent)] font-semibold text-center"
          >
            Let’s talk
          </a>
        </div>
      )}
    </div>
  );
}
