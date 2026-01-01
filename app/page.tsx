export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-24 space-y-6">
      <h1 className="text-5xl font-bold">Aanchal Yadav</h1>

      <p className="text-zinc-400 max-w-xl">
        B.Tech CSE student focused on Artificial Intelligence and Cybersecurity.
        Passionate about building responsible, secure, and impactful technology.
      </p>

      <div className="flex gap-4 pt-4">
        <a
          href="https://linkedin.com"
          className="px-4 py-2 bg-blue-600 rounded"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com"
          className="px-4 py-2 border border-zinc-700 rounded"
        >
          GitHub
        </a>
        <a
          href="/resume-general.pdf"
          className="px-4 py-2 border border-zinc-700 rounded"
        >
          Resume
        </a>
      </div>
    </main>
  );
}
