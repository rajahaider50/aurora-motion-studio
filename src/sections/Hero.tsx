"use client";
import { motion } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
import MagneticButton from "@/components/MagneticButton";
const shapes: [string, string, number][] = [["-left-4 top-10", "from-cyan2 to-violet2", 0], ["right-0 top-40", "from-rose2 to-violet2", 1.5], ["left-1/4 bottom-0", "from-violet2 to-cyan2", 3]];
export default function Hero() {
  return (
    <section className="relative mx-auto flex min-h-[80vh] w-[min(92vw,1100px)] flex-col items-center justify-center text-center">
      {shapes.map(([p, g, d], i) => (
        <motion.div key={i} animate={{ y: [0, -28, 0], rotate: [0, 12, 0] }} transition={{ duration: 7, repeat: Infinity, delay: d }}
          className={`glass absolute ${p} h-24 w-24 rounded-3xl bg-gradient-to-br ${g} opacity-70 sm:h-32 sm:w-32`} />
      ))}
      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="glass relative mb-6 rounded-full px-4 py-1.5 text-xs tracking-widest text-white/70">PREMIUM MOTION STUDIO</motion.span>
      <AnimatedText text="Design that moves, feels and sounds alive" className="relative text-5xl font-bold leading-tight sm:text-7xl" />
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="relative mt-6 max-w-xl text-lg text-white/65">
        Glassmorphic interfaces, cinematic motion and spatial sound — crafted with Next.js, TypeScript and Framer Motion.
      </motion.p>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} className="relative mt-10 flex gap-4">
        <MagneticButton href="/projects">View Projects</MagneticButton>
        <MagneticButton href="/contact" ghost>Get in Touch</MagneticButton>
      </motion.div>
    </section>
  );
}
