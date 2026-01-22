"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HomeHero() {
  return (
    <section className="mx-auto mt-28 flex flex-col items-center px-4 text-center md:mt-40">
      <div className="inline-flex items-center gap-3 rounded-full border border-zinc-100 bg-white px-4 py-2 shadow-sm">
        <Sparkles size={16} className="text-amber-500" />
        <span className="font-heading text-xs font-medium uppercase text-zinc-500">
          Strategic Performance Engine v2.0
        </span>
      </div>

      <p className="mt-8 font-heading text-4xl font-bold tracking-tight sm:text-6xl md:mt-12 md:text-8xl">
        Eliminate the <span className="text-zinc-300">noise</span>.
        <br />
        Master your focus.
      </p>

      <p className="mt-6 max-w-3xl text-lg font-medium leading-relaxed text-zinc-500 sm:text-xl md:mt-10 md:text-2xl">
        The high-fidelity operating system designed for professionals who demand
        clarity, privacy, and strategic execution.
      </p>

      <Link
        href="#"
        className="mt-10 inline-flex items-center gap-4 rounded-xl bg-black px-8 py-4 text-xs font-bold uppercase text-white transition-transform duration-300 hover:scale-105 md:mt-12 md:px-10 md:py-5 md:text-sm"
      >
        <span>Initialize Evolution</span>
        <ArrowRight size={20} />
      </Link>
    </section>
  );
}
