import React from "react";
import Link from "next/link";
import { FastForward, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";

export const DocsCTA = () => {
  return (
    <section className="group relative overflow-hidden rounded-3xl md:rounded-4xl bg-zinc-950 p-12 md:p-24 text-center text-white transition-all duration-700 shadow-2xl">
      {/* Strategic Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-20 mask-[radial-gradient(ellipse_at_center,black,transparent)]" />

      {/* Background Glows */}
      <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-emerald-500/10 blur-[120px] transition-all duration-1000 group-hover:bg-emerald-500/20" />
      <div className="absolute -right-24 -bottom-24 h-96 w-96 rounded-full bg-blue-500/5 blur-[120px]" />

      <div className="relative z-10 space-y-16">
        <div className="space-y-8">
          <div className="flex flex-col items-center gap-4">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400">
              Final Directive
            </span>
            <div className="h-px w-12 bg-emerald-500/50" />
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-6xl md:text-8xl font-black uppercase leading-[0.85] tracking-tighter transition-transform duration-700 group-hover:scale-[1.02]">
              Shape <br />
              <span className="text-zinc-600 transition-colors duration-700 group-hover:text-white">
                Your Days.
              </span>
            </h2>
            <p className="mx-auto max-w-70 md:max-w-sm text-zinc-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] md:tracking-[0.5em] transition-colors duration-500 group-hover:text-zinc-400">
              Execution Strategy Engine v2.0
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
          <Button
            asChild
            size="lg"
            className="group/btn relative h-14 md:h-16 w-full md:w-64 overflow-hidden bg-white px-8 md:px-12 text-xs md:text-sm font-black uppercase tracking-[0.2em] text-black transition-all duration-500 hover:bg-emerald-400 hover:scale-105 md:hover:scale-110 hover:shadow-[0_0_40px_rgba(52,211,153,0.4)] active:scale-95 shadow-2xl"
          >
            <Link
              href={ROUTES.AUTH.SIGNUP}
              className="relative z-10 flex items-center justify-center gap-2"
            >
              Bắt đầu ngay
              <ArrowRight
                size={16}
                className="transition-transform duration-500 group-hover/btn:translate-x-2"
              />
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="group/demo relative h-14 md:h-16 w-full md:w-64 overflow-hidden border-white/10 bg-white/5 px-8 md:px-12 text-xs md:text-sm font-black uppercase tracking-[0.2em] text-white backdrop-blur-md transition-all duration-500 hover:border-emerald-500/50 hover:bg-white/10 hover:scale-105 active:scale-95 hover:text-white"
          >
            <Link
              href={ROUTES.PUBLIC.HOME}
              className="relative z-10 flex items-center justify-center gap-3"
            >
              <div className="flex items-center justify-center transition-transform duration-500 group-hover/demo:rotate-360">
                <FastForward size={18} className="text-emerald-400" />
              </div>
              <span className="relative text-center">
                Xem Demo
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-emerald-400 transition-all duration-500 group-hover/demo:w-full" />
              </span>
            </Link>
          </Button>
        </div>
      </div>

      {/* Aesthetic Markers */}
      <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-[8px] font-mono text-zinc-700 uppercase tracking-widest hidden sm:block">
        Coord: 40.7128° N, 74.0060° W
      </div>
      <div className="absolute top-6 right-6 md:top-10 md:right-10 text-[8px] font-mono text-zinc-700 uppercase tracking-widest hidden sm:block">
        Status: Ready for deployment
      </div>
    </section>
  );
};
