"use client";
import { motion } from "framer-motion";
import { pageVariants } from "@/animations/variants";
export default function PageTransition({ children }: { children: React.ReactNode }) {
  return <motion.main variants={pageVariants} initial="hidden" animate="show" className="min-h-screen pt-32">{children}</motion.main>;
}
