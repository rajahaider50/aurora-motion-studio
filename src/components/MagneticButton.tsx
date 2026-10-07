"use client";
import { useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { play } from "@/lib/sound";
type Props = { children: React.ReactNode; href?: string; onClick?: () => void; type?: "button" | "submit"; ghost?: boolean };
export default function MagneticButton({ children, href, onClick, type = "button", ghost }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 15 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 15 });
  const move = (e: React.MouseEvent) => {
    const r = ref.current!.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * 0.3); y.set((e.clientY - r.top - r.height / 2) * 0.3);
  };
  const cls = `inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-medium transition ${ghost ? "glass hover:bg-white/10" : "bg-gradient-to-r from-cyan2 via-violet2 to-rose2 text-white shadow-[0_0_40px_rgba(139,92,246,.45)]"}`;
  const inner = href ? <Link href={href} className={cls} onClick={() => play("click")}>{children}</Link>
    : <button type={type} className={cls} onClick={() => { play("click"); onClick?.(); }}>{children}</button>;
  return (
    <motion.div ref={ref} style={{ x, y }} onMouseMove={move} onMouseEnter={() => play("hover")}
      onMouseLeave={() => { x.set(0); y.set(0); }} whileTap={{ scale: 0.94 }} className="inline-block">{inner}</motion.div>
  );
}
