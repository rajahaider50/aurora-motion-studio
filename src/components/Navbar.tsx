"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { isSound, play, setSound } from "@/lib/sound";
const links = [["Home", "/"], ["About", "/about"], ["Services", "/services"], ["Projects", "/projects"], ["Contact", "/contact"]];
export default function Navbar() {
  const path = usePathname();
  const [small, setSmall] = useState(false);
  const [snd, setSnd] = useState(true);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setSmall(v > 60));
  return (
    <motion.header initial={{ y: -100 }} animate={{ y: 0, scale: small ? 0.96 : 1 }} transition={{ duration: 0.6 }}
      className="glass fixed inset-x-0 top-4 z-50 mx-auto flex w-[min(94vw,860px)] items-center justify-between rounded-full px-5 py-3">
      <Link href="/" className="grad-text text-lg font-bold" onClick={() => play("whoosh")}>AURORA</Link>
      <nav className="flex gap-1 text-sm">
        {links.map(([l, h]) => (
          <Link key={h} href={h} onMouseEnter={() => play("hover")} onClick={() => play("click")} className="relative hidden rounded-full px-3 py-1.5 text-white/80 hover:text-white sm:block">
            {path === h && <motion.span layoutId="pill" className="absolute inset-0 -z-10 rounded-full bg-white/15" />}{l}
          </Link>
        ))}
      </nav>
      <button aria-label="Toggle sound" onClick={() => { const v = !isSound(); setSound(v); setSnd(v); play("click"); }} className="rounded-full p-2 hover:bg-white/10">
        {snd ? <Volume2 size={18} /> : <VolumeX size={18} />}
      </button>
    </motion.header>
  );
}
