"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function MagneticButton({
  href,
  children,
  target,
}: {
  href: string;
  children: React.ReactNode;
  target?: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Link
        href={href}
        target={target}
        className="px-7 py-3 rounded-xl bg-[var(--accent)] text-[var(--on-accent)] font-semibold shadow-lg hover:bg-[var(--accent-hover)] transition"
      >
        {children}
      </Link>
    </motion.div>
  );
}
