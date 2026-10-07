"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";
import { play } from "@/lib/sound";
const field = "w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3.5 outline-none transition focus:border-violet2 focus:bg-white/10 focus:shadow-[0_0_25px_rgba(139,92,246,.35)]";
export default function Contact() {
  const [sent, setSent] = useState(false);
  const [f, setF] = useState({ name: "", email: "", message: "" });
  const submit = (e: React.FormEvent) => { e.preventDefault(); setSent(true); play("success"); };
  return (
    <div className="mx-auto grid w-[min(92vw,1000px)] gap-10 md:grid-cols-5">
      <div className="md:col-span-2">
        <h1 className="text-5xl font-bold">Let&apos;s <span className="grad-text">talk</span></h1>
        <div className="mt-8 space-y-4 text-white/70">
          <p className="flex items-center gap-3"><Mail size={18} className="text-cyan2" />hello@aurora.studio</p>
          <p className="flex items-center gap-3"><Phone size={18} className="text-cyan2" />+1 (555) 010-2030</p>
          <p className="flex items-center gap-3"><MapPin size={18} className="text-cyan2" />Remote — Worldwide</p>
        </div>
      </div>
      <div className="glass min-h-[420px] rounded-3xl p-8 md:col-span-3">
        <AnimatePresence mode="wait">
          {sent ? (
            <motion.div key="ok" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="flex min-h-[360px] flex-col items-center justify-center text-center">
              <svg width="96" height="96" viewBox="0 0 52 52" fill="none" stroke="#22d3ee" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <motion.circle cx="26" cy="26" r="23" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.7 }} />
                <motion.path d="M15 27l8 8 14-16" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.6, duration: 0.5 }} />
              </svg>
              <h2 className="mt-6 text-3xl font-bold">Message sent!</h2><p className="mt-2 text-white/60">Thanks {f.name || "friend"}, we will reply within 24 hours.</p>
              <button className="mt-6 text-sm text-cyan2 underline" onClick={() => { setSent(false); setF({ name: "", email: "", message: "" }); }}>Send another</button>
            </motion.div>
          ) : (
            <motion.form key="form" onSubmit={submit} exit={{ opacity: 0, y: -20 }} className="space-y-4">
              <input required className={field} placeholder="Your name" value={f.name} onFocus={() => play("hover")} onChange={(e) => setF({ ...f, name: e.target.value })} />
              <input required type="email" className={field} placeholder="Email address" value={f.email} onFocus={() => play("hover")} onChange={(e) => setF({ ...f, email: e.target.value })} />
              <textarea required rows={5} className={field} placeholder="Tell us about your project" value={f.message} onFocus={() => play("hover")} onChange={(e) => setF({ ...f, message: e.target.value })} />
              <MagneticButton type="submit">Send Message</MagneticButton>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
