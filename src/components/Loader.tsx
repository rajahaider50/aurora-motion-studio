"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
export default function Loader() {
  const [n, setN] = useState(0);
  const [done, setDone] = useState(false);
  useEffect(() => {
    const i = setInterval(() => setN((v) => Math.min(100, v + 4)), 50);
    return () => clearInterval(i);
  }, []);
  useEffect(() => { if (n >= 100) { const t = setTimeout(() => setDone(true), 300); return () => clearTimeout(t); } }, [n]);
  return (
    <AnimatePresence>
      {!done && (
        <motion.div exit={{ y: "-100%" }} transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-ink">
          <div className="grad-text text-7xl font-bold tabular-nums">{n}%</div>
          <div className="mt-6 h-0.5 w-56 overflow-hidden rounded bg-white/10"><div className="h-full bg-gradient-to-r from-cyan2 to-rose2" style={{ width: `${n}%` }} /></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
