import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";
export default function CTA() {
  return (
    <Reveal className="mx-auto mt-32 w-[min(92vw,1100px)]">
      <div className="glass rounded-[2rem] bg-gradient-to-br from-violet2/20 to-cyan2/10 p-12 text-center">
        <h2 className="text-4xl font-bold sm:text-5xl">Ready to build something <span className="grad-text">unforgettable</span>?</h2>
        <p className="mx-auto mt-4 max-w-lg text-white/60">Tell us about your idea and we will bring it to life with motion and sound.</p>
        <div className="mt-8"><MagneticButton href="/contact">Start a Project</MagneticButton></div>
      </div>
    </Reveal>
  );
}
