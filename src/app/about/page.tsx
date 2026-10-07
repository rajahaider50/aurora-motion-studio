import Counter from "@/components/Counter";
import Reveal from "@/components/Reveal";
import AnimatedText from "@/components/AnimatedText";
const timeline = [["2019", "Founded", "Started as a two-person motion design studio."], ["2021", "Going Digital", "Expanded into web experiences and design systems."], ["2023", "Sound Lab", "Introduced spatial audio into interface design."], ["2025", "Global Reach", "Shipping premium products for clients worldwide."]];
const stats: [number, string, string][] = [[120, "+", "Projects"], [48, "", "Happy Clients"], [12, "", "Awards"], [99, "%", "Satisfaction"]];
export default function About() {
  return (
    <div className="mx-auto w-[min(92vw,900px)]">
      <AnimatedText text="We craft digital experiences" className="text-center text-5xl font-bold sm:text-6xl" />
      <p className="mx-auto mt-6 max-w-xl text-center text-white/60">A small team obsessed with detail, motion and the feeling of a perfectly tuned interface.</p>
      <div className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map(([n, s, l], i) => (
          <Reveal key={l} delay={i * 0.1}><div className="glass rounded-3xl p-6 text-center"><div className="grad-text text-4xl font-bold"><Counter to={n} suffix={s} /></div><div className="mt-1 text-sm text-white/60">{l}</div></div></Reveal>
        ))}
      </div>
      <div className="relative mt-24 border-l border-white/15 pl-8">
        {timeline.map(([y, t, d]) => (
          <Reveal key={y} className="relative mb-12"><span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full bg-gradient-to-br from-cyan2 to-rose2 shadow-[0_0_20px_#8b5cf6]" />
            <div className="text-sm text-cyan2">{y}</div><h3 className="text-2xl font-semibold">{t}</h3><p className="text-white/60">{d}</p></Reveal>
        ))}
      </div>
    </div>
  );
}
