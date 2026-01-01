"use client";

import { motion } from "framer-motion";

export default function GlowCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-xl"
    >
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-transparent opacity-0 hover:opacity-100 transition" />
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <div className="text-zinc-300 leading-relaxed">{children}</div>
    </motion.div>
  );
}
