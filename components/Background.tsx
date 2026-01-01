"use client";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-[120px]" />
      <div className="absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-cyan-400/10 blur-[120px]" />
    </div>
  );
}
