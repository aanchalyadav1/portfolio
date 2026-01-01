"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type GlowCardProps = {
  title: string;
  children: ReactNode;
  highlight?: boolean;
};

export default function GlowCard({
  title,
  children,
  highlight = false,
}: GlowCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`
        relative rounded-3xl p-8
        backdrop-blur-xl
        border border-white/10
        ${
          highlight
            ? "bg-white/10 scale-[1.02]"
            : "bg-white/5"
        }
      `}
    >
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <div className="text-zinc-300 leading-relaxed">{children}</div>
    </motion.div>
  );
}
