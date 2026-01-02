"use client";
export const dynamic = "force-dynamic";

import { motion } from "framer-motion";
import WebGLBackground from "@/components/WebGLBackground";
import Background from "@/components/Background";
import ParallaxGlow from "@/components/ParallaxGlow";
import GlowCard from "@/components/GlowCard";
import FloatingPanel from "@/components/FloatingPanel";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* DEEPEST LAYER — GPU */}
      <WebGLBackground />

      {/* MID BACKGROUND SYSTEM */}
      <Background />
      <ParallaxGlow />

      {/* HERO */}
      <section className="relative z-20 min-h-screen flex items-center px-6 max-w-7xl mx-auto">
        <div className="space-y-10">

          <motion.h1
            initial={{ opacity: 0, y: 120 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="
              text-[clamp(3.5rem,14vw,8.5rem)]
              font-extrabold
              leading-[0.85]
              tracking-tight
            "
          >
            Aanchal{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Yadav
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="max-w-xl text-xl text-zinc-300"
          >
            <span className="text-white font-medium">Human × AI</span>
            <br />
            Designing secure, intelligent systems where reasoning meets
            responsibility.
          </motion.p>

          <div className="flex gap-4 pt-2">
            <a className="px-6 py-3 rounded-xl bg-white text-black font-medium hover:scale-[1.03] transition">
              LinkedIn
            </a>
            <a className="px-6 py-3 rounded-xl border border-white/30 hover:border-white/60 transition">
              GitHub
            </a>
            <a className="px-6 py-3 rounded-xl border border-white/30 hover:border-white/60 transition">
              Resume
            </a>
          </div>
        </div>
      </section>

      {/* FLOATING SYSTEM PANEL */}
      <FloatingPanel>
        <p className="text-sm text-zinc-300">
          Actively seeking AI / ML & Cybersecurity internships · Vibecoder mindset
        </p>
      </FloatingPanel>

      {/* CONTENT */}
      <section className="relative z-20 max-w-5xl mx-auto px-6 py-40 space-y-28">
        <GlowCard title="About Me" highlight>
          I’m a Computer Science undergraduate focused on Artificial Intelligence
          and Cybersecurity. I enjoy building systems that are not just
          functional, but responsible, secure, and scalable.
        </GlowCard>

        <div className="lg:translate-x-16">
          <GlowCard title="Education">
            <strong>B.Tech – Computer Science Engineering</strong>
            <br />
            Sushila Devi Bansal College of Engineering
          </GlowCard>
        </div>

        <div className="lg:-translate-x-16">
          <GlowCard title="Internships & Experience">
            <strong>Edunet Foundation (IBM SkillsBuild)</strong>
            <br />
            AI & Cybersecurity Internship · Jan – Feb 2025
          </GlowCard>
        </div>

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
                className="
                  rounded-full px-4 py-2 text-sm
                  bg-white/10
                  hover:bg-white/20
                  hover:-translate-y-1
                  transition-all duration-300
                "
              >
                {skill}
              </span>
            ))}
          </div>
        </GlowCard>
      </section>
    </main>
  );
}
