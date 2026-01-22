"use client";

import { Activity, ChevronRight, Layers, Shield } from "lucide-react";

export default function HomeFeatures() {
  return (
    <section
      id="advantage"
      className="mx-auto mt-20 max-w-7xl px-4 grid grid-cols-1 md:mt-40 md:grid-cols-6 md:px-8 gap-4 md:gap-6"
    >
      {/* Card 1: Systemic Intelligence */}
      <div className="group relative col-span-1 md:col-span-4 flex h-auto min-h-60 md:h-80 flex-col justify-between overflow-hidden rounded-4xl border border-zinc-200 bg-zinc-100 p-8 md:p-12">
        <div className="absolute top-0 right-0 h-64 w-64 -translate-y-1/2 translate-x-1/2 rounded-full bg-black/5 blur-3xl transition-colors duration-700 group-hover:bg-emerald-400/20" />
        <div className="relative z-10 space-y-4">
          <p className="font-heading text-xl md:text-2xl font-black uppercase tracking-tight">
            Systemic Intelligence
          </p>
          <p className="text-sm md:text-base font-medium text-zinc-500">
            Automated analysis of your behavioral patterns.
            <br className="hidden md:block" />
            Identifying bottlenecks before they become obstacles.
          </p>
        </div>
        <button className="mt-8 flex w-fit items-center gap-3 text-xs font-bold uppercase tracking-widest text-zinc-900 transition-all group-hover:gap-5">
          Explore Insights <ChevronRight size={14} />
        </button>
      </div>

      {/* Card 2: Zero-Leak Privacy */}
      <div className="group col-span-1 md:col-span-2 flex min-h-60 md:min-h-0 flex-col items-center justify-center rounded-4xl bg-black p-10 text-center text-white">
        <div className="mb-8 flex h-18 w-18 items-center justify-center rounded-2xl bg-white/10 transition-transform duration-500 group-hover:scale-110">
          <Shield size={32} className="text-emerald-400" />
        </div>
        <p className="mb-4 font-heading text-lg font-black uppercase tracking-widest">
          Zero-Leak Privacy
        </p>
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">
          Local-First Architecture
        </p>
      </div>

      {/* Card 3: Momentum Tracking */}
      <div className="col-span-1 md:col-span-3 flex h-auto min-h-60 md:h-96 flex-col justify-between rounded-4xl bg-zinc-900 p-8 md:p-12 text-white">
        <div className="flex items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
            <Activity size={24} />
          </div>
          <span className="rounded-full bg-emerald-400 px-4 py-1.5 font-heading text-xs font-black uppercase tracking-widest text-black">
            Live Analytics
          </span>
        </div>
        <div className="mt-12 space-y-6">
          <p className="font-heading text-2xl md:text-3xl font-black uppercase leading-none tracking-tight">
            Momentum
            <br />
            Tracking
          </p>
          <div className="flex items-center gap-1">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className={`h-8 w-full rounded-md transition-all duration-500 ${
                  i < 6
                    ? "animate-pulse bg-emerald-400 shadow-neon"
                    : "bg-white/5"
                }`}
                style={{ animationDelay: `${(i + 1) * 120}ms` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Card 4: Hierarchical Depth */}
      <div className="group relative col-span-1 md:col-span-3 flex h-auto min-h-90 md:h-96 flex-col justify-between overflow-hidden rounded-4xl border border-zinc-200 bg-zinc-100 p-8 md:p-12">
        <div className="relative z-10 space-y-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm">
            <Layers size={24} />
          </div>
          <p className="font-heading text-xl md:text-2xl font-black uppercase tracking-tight">
            Hierarchical Depth
          </p>
          <p className="text-sm md:text-base font-medium text-zinc-500">
            From decade roadmaps to today&apos;s deep work blocks. Every layer
            is connected through strategic integrity.
          </p>
        </div>

        <div className="absolute -bottom-24 -right-4 w-52 md:w-60 rotate-12 space-y-4 rounded-3xl border border-zinc-200 bg-white p-6 shadow-2xl transition-all duration-700 group-hover:-translate-y-10 group-hover:rotate-6">
          <div className="space-y-2">
            <div className="h-2 w-20 rounded-full bg-zinc-100" />
            <div className="h-2 w-32 rounded-full bg-zinc-50" />
          </div>
          <div className="grid grid-cols-2 gap-2 pt-2">
            <div className="h-16 rounded-xl bg-zinc-50" />
            <div className="h-16 rounded-xl bg-zinc-50" />
          </div>
          <div className="h-2 w-full rounded-full bg-zinc-50" />
        </div>

        <div className="relative z-10 mt-8 flex md:hidden lg:flex -space-x-3">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="h-10 w-10 md:h-12 md:w-12 rounded-full border-4 border-zinc-100 bg-zinc-200 transition-transform group-hover:translate-x-2"
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
