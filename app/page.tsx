"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* BACKGROUND GRADIENT */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-[-20%] left-[-20%] h-[600px] w-[600px] rounded-full bg-purple-600/30 blur-[140px]" />
        <div className="absolute bottom-[-20%] right-[-20%] h-[600px] w-[600px] rounded-full bg-blue-600/30 blur-[140px]" />
      </div>

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
            text-[clamp(4rem,14vw,8rem)]
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
          transition={{ delay: 0.8 }}
          className="mt-6 max-w-xl text-lg text-zinc-300"
        >
          Human × AI  
          <br />
          Building intelligent systems where reasoning meets responsibility.
        </motion.p>

        <div className="mt-8 flex gap-4">
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
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="whitespace-nowrap text-[10vw] font-bold opacity-10"
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
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
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
