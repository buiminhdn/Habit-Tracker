"use client";

import { Layers, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const FRAMEWORKS = [
  {
    icon: Layers,
    title: "Roadmaps",
    desc: "Long-term strategic visioning made tactical. Define your trajectory with mathematical precision.",
  },
  {
    icon: Target,
    title: "Tactics",
    desc: "Behavioral tracking with precision daily monitor. Align every hour to your multi-year goals.",
  },
  {
    icon: Zap,
    title: "Momentum",
    desc: "A frictionless daily interface for deep execution. Eliminate switching costs and cognitive load.",
  },
];

export default function HomeImpacts() {
  return (
    <section
      id="framework"
      className="mx-auto mt-20 max-w-7xl px-4 font-heading md:mt-40 md:px-6"
    >
      <div className="mb-12 flex flex-col items-start justify-between gap-8 md:mb-24 md:flex-row md:items-center md:gap-12">
        <div>
          <p className="text-3xl font-black tracking-tight text-center md:text-left sm:text-4xl md:text-5xl">
            The Architecture of Impact.
          </p>
          <p className="mt-4 max-w-2xl font-sans text-center md:text-left text-base font-medium text-zinc-500 md:text-lg">
            A tiered approach to productivity that prioritizes strategic
            alignment over industrial-age busywork.
          </p>
        </div>
        <Button className="w-full px-8 py-6 md:w-auto">
          Read The Manifesto
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-3 xl:gap-12">
        {FRAMEWORKS.map((f, i) => (
          <div
            key={i}
            className="group rounded-4xl bg-zinc-100 p-8 transition-all duration-500 hover:bg-black xl:p-14"
          >
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-3xl bg-white shadow-md transition-transform duration-500 group-hover:scale-105 md:mb-12 md:h-18 md:w-18">
              <f.icon size={28} className="text-black size-6 md:size-8" />
            </div>
            <p className="mb-4 text-xl font-black uppercase tracking-tight text-zinc-900 transition-colors duration-500 group-hover:text-white md:mb-6 md:text-2xl">
              {f.title}
            </p>
            <p className="font-sans text-sm font-medium leading-relaxed text-zinc-500 transition-colors duration-500 group-hover:text-zinc-400 md:text-base">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
