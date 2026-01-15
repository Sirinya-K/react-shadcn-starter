"use client";

// import { Canvas } from "@react-three/fiber";
// import { Canvas, useFrame, useThree } from "@react-three/fiber";
// import { useEffect, useMemo, useRef } from "react";
// import * as THREE from "three";

import { cn } from "@/lib/utils";

/*
interface ShaderPlaneProps {
  vertexShader: string;
  fragmentShader: string;
  uniforms: { [key: string]: { value: unknown } };
}
*/

/*
const ShaderPlane = (props: ShaderPlaneProps) => {
  // Suppress unused props warning
  void props;
  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <meshBasicMaterial color="red" />
    </mesh>
  );
};
*/

interface ShaderBackgroundProps {
  vertexShader?: string;
  fragmentShader?: string;
  uniforms?: { [key: string]: { value: unknown } };
  className?: string;
  color?: string;
}

const Shader3 = ({
  vertexShader = `...`, // Keep defaults for when we restore
  fragmentShader = `...`,
  uniforms = {},
  className,
  color = "#bbffcc",
}: ShaderBackgroundProps) => {
  // Suppress unused warnings for now
  void vertexShader;
  void fragmentShader;
  void uniforms;
  void color;
  /*
    const shaderUniforms = useMemo(
      () => ({
        u_time: { value: 0 },
        u_resolution: { value: new THREE.Vector3(1, 1, 1) },
        u_mouse: { value: new THREE.Vector4(0, 0, 0, 0) },
        u_color: { value: new THREE.Color(color) },
        ...uniforms,
      }),
      [uniforms, color],
    );
  */

  return (
    <section className={cn(className, "absolute inset-0 w-full h-screen bg-black")}>
      {/* Canvas disabled due to runtime crash */}
      <div className="w-full h-full bg-gradient-to-br from-black to-slate-900" />
    </section>
  );
};

export { Shader3 };
