"use client";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/animations/variants";
export default function AnimatedText({ text, className = "" }: { text: string; className?: string }) {
  return (
    <motion.h1 variants={stagger} initial="hidden" animate="show" className={className} aria-label={text}>
      {text.split(" ").map((w, i) => (
        <span key={i} className="mr-[0.25em] inline-block overflow-hidden pb-2">
          <motion.span variants={fadeUp} className="inline-block">{w}</motion.span>
        </span>
      ))}
    </motion.h1>
  );
}
