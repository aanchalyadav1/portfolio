import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-zinc-800">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between">
        <span className="font-semibold">Aanchal Yadav</span>
        <div className="flex gap-4 text-sm text-zinc-400">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/admin/login">Admin</Link>
        </div>
      </div>
    </nav>
  );
}
