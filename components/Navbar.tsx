import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-800 bg-black/70 backdrop-blur">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-semibold tracking-tight">
          Aanchal <span className="text-blue-500">Yadav</span>
        </span>

        <div className="flex gap-6 text-sm text-zinc-400">
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>
          <Link href="/projects" className="hover:text-white transition">
            Projects
          </Link>
          <Link href="/admin/login" className="hover:text-white transition">
            Admin
          </Link>
        </div>
      </div>
    </nav>
  );
}
