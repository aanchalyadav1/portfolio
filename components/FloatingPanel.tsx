"use client";

import { motion } from "framer-motion";

export default function FloatingPanel({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80, rotateX: 15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, delay, ease: "easeOut" }}
      className="relative rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-10 shadow-[0_40px_120px_rgba(0,0,0,0.6)]"
    >
      {children}
    </motion.div>
  );
}
