import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "@/lib/data";
import Parallax from "@/components/Parallax";
import Reveal from "@/components/Reveal";
export function generateStaticParams() { return projects.map((p) => ({ slug: p.slug })); }
export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const i = projects.findIndex((p) => p.slug === slug);
  if (i < 0) notFound();
  const p = projects[i], prev = projects[(i - 1 + projects.length) % projects.length], next = projects[(i + 1) % projects.length];
  return (
    <div className="mx-auto w-[min(92vw,1000px)]">
      <div className="relative flex h-[70vh] items-end overflow-hidden rounded-[2rem] p-10" style={{ background: `linear-gradient(135deg,${p.from},${p.to})` }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="relative"><span className="text-sm text-white/70">{p.cat} · {p.year}</span><h1 className="text-5xl font-bold sm:text-7xl">{p.title}</h1></div>
      </div>
      <Reveal className="mt-12"><p className="text-xl text-white/70">{p.desc}</p></Reveal>
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {[0, 1].map((n) => (<Parallax key={n} offset={50 + n * 30}><div className="glass h-72 rounded-3xl" style={{ background: `linear-gradient(${135 + n * 90}deg,${p.to},${p.from})`, opacity: 0.85 }} /></Parallax>))}
      </div>
      <div className="mt-16 flex justify-between">
        <Link href={`/projects/${prev.slug}`} className="glass inline-flex items-center gap-2 rounded-full px-6 py-3"><ArrowLeft size={16} />{prev.title}</Link>
        <Link href={`/projects/${next.slug}`} className="glass inline-flex items-center gap-2 rounded-full px-6 py-3">{next.title}<ArrowRight size={16} /></Link>
      </div>
    </div>
  );
}
