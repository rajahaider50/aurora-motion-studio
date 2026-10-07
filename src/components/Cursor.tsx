"use client";
import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
export default function Cursor() {
  const x = useMotionValue(-100), y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 35 }), sy = useSpring(y, { stiffness: 500, damping: 35 });
  useEffect(() => {
    const m = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY); };
    window.addEventListener("mousemove", m); return () => window.removeEventListener("mousemove", m);
  }, [x, y]);
  return <motion.div style={{ x: sx, y: sy }} className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-8 w-8 -ml-4 -mt-4 rounded-full border border-white/60 mix-blend-difference [@media(pointer:fine)]:block" />;
}
