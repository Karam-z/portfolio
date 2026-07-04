"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const current: Theme = document.documentElement.classList.contains("light")
      ? "light"
      : "dark";
    setTheme(current);
    setMounted(true);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;
    root.classList.remove("dark", "light");
    root.classList.add(next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
    setTheme(next);
  };

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="w-9 h-9 rounded-full bg-green-500/50 flex items-center justify-center hover:bg-green-500/70 transition-colors text-base"
    >
      {/* Render only after mount to avoid a hydration mismatch on the icon */}
      {mounted ? (theme === "dark" ? "🌙" : "☀️") : "🌙"}
    </button>
  );
}
