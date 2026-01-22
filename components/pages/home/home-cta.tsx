"use client";

import { ArrowRight, Clock, Globe, ShieldCheck, Infinity } from "lucide-react";

const FEATURES = [
  { icon: ShieldCheck, label: "E2E Encryption" },
  { icon: Clock, label: "Instant Setup" },
  { icon: Infinity, label: "Lifetime OS" },
  { icon: Globe, label: "Hybrid Edge" },
];

function HomeCTA() {
  return (
    <section
      id="cta"
      className="relative mt-20 overflow-hidden bg-zinc-950 px-6 py-20 text-white md:mt-40 md:py-32"
    >
      {/* Animated glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-150 bg-emerald-400/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-emerald-400/30 to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <div className="mb-8 inline-flex items-center gap-4 rounded-full border border-emerald-400/10 bg-emerald-400/5 px-6 py-2 shadow-2xl md:mb-12">
          <div className="size-2 animate-pulse rounded-full bg-emerald-400" />
          <p className="font-heading text-xs font-black uppercase tracking-widest text-emerald-400/80 md:text-xs">
            Deployment Matrix Active
          </p>
        </div>

        <p className="mb-8 font-heading text-4xl font-black leading-tight tracking-tight sm:text-6xl md:mb-12 md:text-8xl md:leading-none">
          Stop managing time.
          <br />
          Start{" "}
          <span className="bg-linear-to-r from-white via-emerald-100 to-zinc-600 bg-clip-text italic text-transparent">
            managing impact.
          </span>
        </p>

        <p className="mx-auto mb-12 max-w-2xl font-sans text-base font-medium leading-relaxed text-zinc-400 md:mb-16 md:text-xl">
          Deploy the professional Life OS built for peak cognitive capacity.
          Reclaim your biological prime and master your mission.
        </p>

        <div className="flex flex-col items-center gap-12 md:gap-20">
          <button className="group relative cursor-pointer overflow-hidden rounded-xl bg-white px-6 py-4 text-xs font-black uppercase tracking-wider text-black transition-all shadow-2xl hover:bg-emerald-400 hover:text-black md:px-8 md:py-6 md:text-lg">
            <span className="relative z-10 flex items-center gap-3 md:gap-6">
              Initialize Dashboard{" "}
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-2 md:size-6" />
            </span>
            <div className="absolute inset-0 translate-y-full bg-emerald-400 transition-transform duration-500 group-hover:translate-y-0" />
          </button>

          <div className="grid grid-cols-2 gap-8 font-heading text-[10px] font-black uppercase tracking-widest text-zinc-500 sm:grid-cols-4 md:gap-x-12 md:text-xs">
            {FEATURES.map((item) => (
              <div
                key={item.label}
                className="group flex cursor-default items-center gap-3 transition-all duration-300 hover:-translate-y-1"
              >
                <item.icon
                  size={16}
                  className="text-emerald-400/60 transition-colors group-hover:text-emerald-400"
                />
                <span className="transition-colors group-hover:text-white">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle background tech pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />
    </section>
  );
}

export default HomeCTA;
