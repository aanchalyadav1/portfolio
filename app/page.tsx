"use client";

import { motion } from "framer-motion";
import Background from "@/components/Background";
import GlowCard from "@/components/GlowCard";

export default function Home() {
  return (
    <main className="relative max-w-6xl mx-auto px-6 py-32 space-y-32">
      <Background />

      {/* HERO */}
      <section className="space-y-8">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold tracking-tight"
        >
          Aanchal <span className="text-blue-400">Yadav</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-zinc-300 max-w-2xl"
        >
          Human × AI  
          <br />
          Building secure, intelligent systems at the intersection of
          <span className="text-white"> AI</span> and
          <span className="text-white"> Cybersecurity</span>.
        </motion.p>

        <div className="flex gap-4 pt-4">
          <a className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition">
            LinkedIn
          </a>
          <a className="px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 transition">
            GitHub
          </a>
          <a className="px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 transition">
            Resume
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <GlowCard title="About Me">
        I’m a Computer Science undergraduate focused on AI and Cybersecurity.
        I enjoy building systems that are not just functional, but responsible,
        secure, and scalable.
      </GlowCard>

      {/* EDUCATION */}
      <GlowCard title="Education">
        <strong>B.Tech – Computer Science Engineering</strong>
        <br />
        Sushila Devi Bansal College of Engineering
      </GlowCard>

      {/* EXPERIENCE */}
      <GlowCard title="Internships & Experience">
        <strong>Edunet Foundation (IBM SkillsBuild)</strong>
        <br />
        AI & Cybersecurity Internship · Jan–Feb 2025
      </GlowCard>

      {/* SKILLS */}
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

      {/* CURRENTLY */}
      <GlowCard title="Currently Looking For">
        AI / ML Internships · Cybersecurity Internships · Software Engineering
        Intern Roles
      </GlowCard>
    </main>
  );
}
