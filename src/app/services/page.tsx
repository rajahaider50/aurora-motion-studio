import Services from "@/sections/Services";
import AnimatedText from "@/components/AnimatedText";
import CTA from "@/sections/CTA";
export default function ServicesPage() {
  return (<><AnimatedText text="What we do best" className="mb-14 text-center text-5xl font-bold sm:text-6xl" /><Services /><CTA /></>);
}
