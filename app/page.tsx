"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20 space-y-24">

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-5xl font-bold">Aanchal Yadav</h1>
        <p className="text-zinc-400 mt-3">
          B.Tech CSE | AI & Cybersecurity Enthusiast
        </p>

        <div className="flex gap-4 mt-6">
          <a className="px-4 py-2 bg-blue-600 rounded" href="#">
            LinkedIn
          </a>
          <a className="px-4 py-2 border border-zinc-700 rounded" href="#">
            GitHub
          </a>
          <a className="px-4 py-2 border border-zinc-700 rounded" href="/resume-general.pdf">
            Resume
          </a>
        </div>
      </motion.section>

      {/* ABOUT */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">About Me</h2>
        <p className="text-zinc-400">
          I am a Computer Science undergraduate focused on Artificial Intelligence
          and Cybersecurity. I enjoy building secure, responsible, and meaningful
          technology and I’m actively seeking internships and learning opportunities.
        </p>
      </section>

      {/* EDUCATION */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Education</h2>
        <div className="border border-zinc-800 rounded-lg p-4">
          <p className="font-medium">B.Tech – Computer Science Engineering</p>
          <p className="text-zinc-400 text-sm">
            Sushila Devi Bansal College of Engineering
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Skills</h2>
        <div className="flex flex-wrap gap-2 text-sm">
          {["Python", "Java", "C++", "SQL", "AI/ML", "Cybersecurity", "Git"].map(
            skill => (
              <span
                key={skill}
                className="px-3 py-1 border border-zinc-700 rounded-full"
              >
                {skill}
              </span>
            )
          )}
        </div>
      </section>

    </main>
  );
}
