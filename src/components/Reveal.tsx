"use client";
import { motion } from "framer-motion";
import { ease } from "@/animations/variants";
export default function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 50, scale: 0.97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8, delay, ease }}>{children}</motion.div>
  );
}
