"use client";
import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "@/lib/data";
import { play } from "@/lib/sound";
export default function Projects({ limit, filter = true }: { limit?: number; filter?: boolean }) {
  const [cat, setCat] = useState("All");
  const cats = ["All", ...Array.from(new Set(projects.map((p) => p.cat)))];
  const list = projects.filter((p) => cat === "All" || p.cat === cat).slice(0, limit);
  return (
    <section className="mx-auto w-[min(92vw,1100px)]">
      {filter && (
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {cats.map((c) => (
            <button key={c} onClick={() => { setCat(c); play("click"); }} className={`rounded-full px-5 py-2 text-sm transition ${cat === c ? "bg-white text-black" : "glass hover:bg-white/10"}`}>{c}</button>
          ))}
        </div>
      )}
      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((p) => (
            <motion.div key={p.slug} layout initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.85 }} transition={{ duration: 0.45 }}>
              <Link href={`/projects/${p.slug}`} onMouseEnter={() => play("hover")} className="group glass block overflow-hidden rounded-3xl">
                <div className="h-52 overflow-hidden"><div className="h-full w-full transition duration-700 group-hover:rotate-3 group-hover:scale-125" style={{ background: `linear-gradient(135deg,${p.from},${p.to})` }} /></div>
                <div className="p-5"><span className="text-xs text-white/50">{p.cat} · {p.year}</span><h3 className="mt-1 text-xl font-semibold">{p.title}</h3></div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
