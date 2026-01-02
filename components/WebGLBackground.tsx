"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function AnimatedSphere() {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    mesh.current.rotation.y = t * 0.15;
    mesh.current.rotation.x = t * 0.1;
  });

  return (
    <Sphere args={[1.6, 128, 128]} ref={mesh}>
      <MeshDistortMaterial
        color="#5b7cfa"
        distort={0.45}
        speed={1.5}
        roughness={0.4}
      />
    </Sphere>
  );
}

export default function WebGLBackground() {
  return (
    <div className="fixed inset-0 -z-20">
      <Canvas
        camera={{ position: [0, 0, 4] }}
        gl={{ antialias: true }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
}
