"use client";
import { motion } from "framer-motion";
import MagneticButton from "@/components/MagneticButton";
export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <motion.h1 animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity }} className="grad-text text-[10rem] font-black leading-none sm:text-[14rem]">404</motion.h1>
      <p className="mb-8 text-xl text-white/60">This page drifted out of orbit.</p>
      <MagneticButton href="/">Return Home</MagneticButton>
    </div>
  );
}
