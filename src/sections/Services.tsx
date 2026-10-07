import { Sparkles, Layers, Palette, Volume2, type LucideIcon } from "lucide-react";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import { services } from "@/lib/data";
const icons: Record<string, LucideIcon> = { Sparkles, Layers, Palette, Volume2 };
export default function Services() {
  return (
    <section className="mx-auto grid w-[min(92vw,1100px)] gap-6 sm:grid-cols-2">
      {services.map((s, i) => {
        const Icon = icons[s.icon];
        return (
          <Reveal key={s.title} delay={i * 0.1}>
            <TiltCard className="h-full p-8">
              <Icon className="mb-4 text-cyan2" size={32} />
              <h3 className="mb-2 text-2xl font-semibold">{s.title}</h3><p className="text-white/60">{s.text}</p>
            </TiltCard>
          </Reveal>
        );
      })}
    </section>
  );
}
