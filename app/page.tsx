
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Background from "@/components/Background";
import GlowCard from "@/components/GlowCard";

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.6]);

  return (
    <main
      ref={ref}
      className="relative max-w-7xl mx-auto px-6 py-40 space-y-48"
    >
      <Background />

      {/* ================= HERO ================= */}
      <motion.section
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative grid lg:grid-cols-2 gap-16 items-center"
      >
        {/* TEXT */}
        <div className="space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-[clamp(3.5rem,7vw,6.5rem)] font-bold leading-[0.95] tracking-tight"
          >
            Aanchal
            <br />
            <span className="text-blue-400">Yadav</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-zinc-300 max-w-xl leading-relaxed"
          >
            <span className="text-white font-medium">Human × AI</span>
            <br />
            Designing secure, intelligent systems where reasoning meets
            responsibility.
          </motion.p>

          <div className="flex gap-4 pt-4">
            <a className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition shadow-lg">
              LinkedIn
            </a>
            <a className="px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 transition">
              GitHub
            </a>
            <a className="px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 transition">
              Resume
            </a>
          </div>
        </div>

        {/* FLOATING ACCENT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="hidden lg:block relative"
        >
          <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-blue-500/20 blur-[120px]" />
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-10">
            <p className="text-zinc-300 text-lg leading-relaxed">
              Focus areas:
              <br />
              <span className="text-white">AI · ML · Cybersecurity</span>
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* ================= CONTENT ================= */}
      <section className="grid gap-32">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <GlowCard title="About Me">
            I’m a Computer Science undergraduate focused on AI and Cybersecurity.
            I enjoy building systems that are not just functional, but
            responsible, secure, and scalable.
          </GlowCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <GlowCard title="Education">
            <strong>B.Tech – Computer Science Engineering</strong>
            <br />
            Sushila Devi Bansal College of Engineering
          </GlowCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <GlowCard title="Internships & Experience">
            <strong>Edunet Foundation (IBM SkillsBuild)</strong>
            <br />
            AI & Cybersecurity Internship · Jan–Feb 2025
          </GlowCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <GlowCard title="Skills">
            <div className="flex flex-wrap gap-3">
              {[
                "Python",
                "Java",
                "C++",
                "SQL",
                "AI / ML",
                "Cybersecurity",
                "Git",
              ].map(skill => (
                <span
                  key={skill}
                  className="rounded-full px-4 py-2 text-sm bg-white/10 hover:bg-white/20 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </GlowCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <GlowCard title="Currently Looking For">
            AI / ML Internships · Cybersecurity Internships · Software Engineering
            Intern Roles
          </GlowCard>
        </motion.div>
      </section>
    </main>
  );
}
