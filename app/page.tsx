import Navbar from "@/components/layout/navbar";
import SectionCapabilities from "@/components/pages/home/section-capabilities";
import SectionPreview from "@/components/pages/home/section-preview";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="pb-96 min-h-screen">
      <Navbar />

      <section className="mt-40 flex flex-col items-center h-fit">
        <div className="flex items-center gap-3 px-4 py-2 bg-white border border-zinc-100 rounded-full shadow-sm w-fit">
          <Sparkles size={16} className="text-amber-500" />
          <span className="text-xs uppercase text-zinc-500 font-heading font-medium">
            Strategic Performance Engine v2.0
          </span>
        </div>
        <p className="text-8xl font-bold tracking-tight mt-12 font-heading text-center">
          Eliminate the <span className="text-zinc-300">noise</span>.<br />
          Master your focus.
        </p>
        <p className="text-2xl text-zinc-500 font-medium max-w-3xl mt-10 leading-relaxed text-center">
          The high-fidelity operating system designed for professionals who
          demand clarity, privacy, and strategic execution.
        </p>
        <Link
          href="#"
          className="hover:scale-105 transition-transform duration-300 bg-black text-white flex items-center gap-4 px-10 py-5 text-sm uppercase font-bold rounded-xl mt-12"
        >
          <p>Initialize Evolution</p> <ArrowRight size={20} />
        </Link>
      </section>

      <SectionPreview />

      <SectionCapabilities />
    </div>
  );
}
