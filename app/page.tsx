"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-24 space-y-28">

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <h1 className="text-5xl font-bold tracking-tight">
          Aanchal <span className="text-blue-500">Yadav</span>
        </h1>

        <p className="text-zinc-400 max-w-xl leading-relaxed">
          B.Tech CSE student focused on <strong>AI</strong> and{" "}
          <strong>Cybersecurity</strong>. Building secure, responsible, and
          impactful technology.
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href="https://linkedin.com"
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 transition rounded-md text-sm"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com"
            className="px-5 py-2 border border-zinc-700 hover:border-zinc-500 transition rounded-md text-sm"
          >
            GitHub
          </a>
          <a
            href="/resume-general.pdf"
            className="px-5 py-2 border border-zinc-700 hover:border-zinc-500 transition rounded-md text-sm"
          >
            Resume
          </a>
        </div>
      </motion.section>

      {/* ABOUT */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
          <p className="text-zinc-400 leading-relaxed">
            I am a Computer Science undergraduate with strong interests in
            Artificial Intelligence, Machine Learning, and Cybersecurity. I enjoy
            learning by building real-world projects and am actively seeking
            internships where I can grow as an engineer.
          </p>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Education</h2>
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
          <p className="font-medium">
            B.Tech – Computer Science Engineering
          </p>
          <p className="text-zinc-400 text-sm mt-1">
            Sushila Devi Bansal College of Engineering
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Skills</h2>
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
              className="px-4 py-1.5 text-sm rounded-full border border-zinc-700 bg-zinc-900/60 hover:border-blue-500 hover:text-blue-400 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* CURRENTLY LOOKING FOR */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Currently Looking For</h2>
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
          <ul className="list-disc list-inside text-zinc-400 space-y-1">
            <li>AI / ML Internships</li>
            <li>Cybersecurity Internships</li>
            <li>Software Engineering Intern Roles</li>
          </ul>
        </div>
      </section>

    </main>
  );
}
