"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { play } from "@/lib/sound";
export default function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const mx = useMotionValue(0), my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 200, damping: 20 });
  return (
    <motion.div className={`glass rounded-3xl ${className}`} style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      onMouseEnter={() => play("hover")}
      onMouseMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); mx.set((e.clientX - r.left) / r.width - 0.5); my.set((e.clientY - r.top) / r.height - 0.5); }}
      onMouseLeave={() => { mx.set(0); my.set(0); }} whileHover={{ scale: 1.03 }}>{children}</motion.div>
  );
}
