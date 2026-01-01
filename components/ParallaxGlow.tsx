"use client";

import { useEffect, useState } from "react";

export default function ParallaxGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute left-1/2 top-1/2 h-[700px] w-[700px] rounded-full blur-[140px]"
        style={{
          transform: `translate(-50%, -50%) translate(${pos.x * 60}px, ${
            pos.y * 60
          }px)`,
          background:
            "radial-gradient(circle, rgba(99,102,241,0.35), transparent 60%)",
        }}
      />
    </div>
  );
}
