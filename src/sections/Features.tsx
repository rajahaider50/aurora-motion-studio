import { Zap, Gem, AudioWaveform } from "lucide-react";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
const f = [[Zap, "Blazing Fast", "Server components and optimized assets keep every page instant."], [Gem, "Premium Glass UI", "Layered blur, glow and depth for a cinematic, high-end look."], [AudioWaveform, "Spatial Sound", "3D positioned interface audio generated live in your browser."]] as const;
export default function Features() {
  return (
    <section className="mx-auto mt-32 grid w-[min(92vw,1100px)] gap-6 md:grid-cols-3">
      {f.map(([Icon, t, d], i) => (
        <Reveal key={t} delay={i * 0.12}>
          <TiltCard className="h-full p-8">
            <div className="mb-5 inline-flex rounded-2xl bg-gradient-to-br from-cyan2 to-violet2 p-3"><Icon size={24} /></div>
            <h3 className="mb-2 text-xl font-semibold">{t}</h3><p className="text-white/60">{d}</p>
          </TiltCard>
        </Reveal>
      ))}
    </section>
  );
}
