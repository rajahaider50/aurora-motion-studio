import Hero from "@/sections/Hero";
import Features from "@/sections/Features";
import Projects from "@/sections/Projects";
import CTA from "@/sections/CTA";
import Reveal from "@/components/Reveal";
export default function Home() {
  return (
    <>
      <Hero /><Features />
      <Reveal className="mt-32 text-center"><h2 className="mb-10 text-4xl font-bold">Selected <span className="grad-text">Work</span></h2></Reveal>
      <Projects limit={3} filter={false} /><CTA />
    </>
  );
}
