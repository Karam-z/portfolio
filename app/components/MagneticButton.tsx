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
        className="px-7 py-3 rounded-xl bg-green-500 text-black font-semibold shadow-lg shadow-green-500/30 hover:bg-green-400 transition"
      >
        {children}
      </Link>
    </motion.div>
  );
}
