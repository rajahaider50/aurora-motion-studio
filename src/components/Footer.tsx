import Link from "next/link";
export default function Footer() {
  return (
    <footer className="mx-auto mt-32 w-[min(92vw,1100px)] pb-10">
      <div className="glass flex flex-col items-center justify-between gap-4 rounded-3xl px-8 py-6 text-sm text-white/60 sm:flex-row">
        <span className="grad-text font-bold">AURORA</span>
        <div className="flex gap-5"><Link href="/about">About</Link><Link href="/projects">Projects</Link><Link href="/contact">Contact</Link></div>
        <span>© {new Date().getFullYear()} Aurora Studio</span>
      </div>
    </footer>
  );
}
