"use client";
export const dynamic = "force-dynamic";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* 🔴 CANARY — REMOVE LATER */}
      <div className="fixed bottom-4 right-4 z-[9999] bg-red-600 text-white px-4 py-2 rounded-lg text-sm">
        🔴 UPDATED BUILD LIVE
      </div>

      {/* BACKGROUND GRADIENT */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-[-25%] left-[-25%] h-[700px] w-[700px] rounded-full bg-purple-600/40 blur-[160px]" />
        <div className="absolute bottom-[-25%] right-[-25%] h-[700px] w-[700px] rounded-full bg-blue-600/40 blur-[160px]" />
      </div>

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 120 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
            text-[clamp(4rem,15vw,9rem)]
            font-extrabold
            leading-[0.85]
            tracking-tight
            bg-gradient-to-r
            from-blue-400 via-purple-400 to-cyan-400
            bg-clip-text text-transparent
          "
        >
          Aanchal
          <br />
          Yadav
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-6 max-w-xl text-xl text-zinc-300"
        >
          Human × AI  
          <br />
          Building intelligent systems where reasoning meets responsibility.
        </motion.p>

        <div className="mt-10 flex gap-4">
          <a className="px-6 py-3 rounded-xl bg-white text-black font-medium">
            LinkedIn
          </a>
          <a className="px-6 py-3 rounded-xl border border-white/30">
            GitHub
          </a>
          <a className="px-6 py-3 rounded-xl border border-white/30">
            Resume
          </a>
        </div>
      </section>

      {/* MARQUEE */}
      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: "-100%" }}
        transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
        className="whitespace-nowrap text-[12vw] font-bold opacity-10 select-none"
      >
        AI · CYBERSECURITY · HUMAN × AI · AI · CYBERSECURITY · HUMAN × AI ·
      </motion.div>

      {/* CONTENT */}
      <section className="max-w-4xl mx-auto px-6 py-40 space-y-24">
        {[
          ["About Me", "Computer Science undergraduate focused on AI and Cybersecurity. I build secure, intelligent, real-world systems."],
          ["Education", "B.Tech – Computer Science Engineering · Sushila Devi Bansal College of Engineering"],
          ["Experience", "Edunet Foundation (IBM SkillsBuild) · AI & Cybersecurity Internship"],
          ["Skills", "Python · AI/ML · Cybersecurity · Java · C++ · Git"],
        ].map(([title, text]) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10"
          >
            <h2 className="text-3xl font-semibold mb-4">{title}</h2>
            <p className="text-zinc-300 leading-relaxed">{text}</p>
          </motion.div>
        ))}
      </section>

    </main>
  );
}
