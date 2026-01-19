"use client";

import { useState, useEffect } from "react";
import {
  Zap,
  Layers,
  Target,
  Activity,
  Clock,
  Sparkles,
  Plus,
  ArrowRight,
} from "lucide-react";

const SIDEBAR_ITEMS = [
  { label: "Daily", icon: Zap },
  { label: "Weekly", icon: Layers },
  { label: "Roadmap", icon: Target },
  { label: "Analytics", icon: Activity },
];

const METRIC_CARDS = [
  {
    label: "Momentum",
    icon: Activity,
    color: "text-emerald-500",
    value: "88%",
    activeIdx: 0,
  },
  {
    label: "Alignment",
    icon: Target,
    color: "text-amber-500",
    value: "High",
    activeIdx: 2,
  },
  {
    label: "Efficiency",
    icon: Zap,
    color: "text-blue-500",
    value: "4.2h",
    activeIdx: 1,
  },
];

function SectionPreview() {
  const [mockupActive, setMockupActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMockupActive((prev) => (prev + 1) % 4);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-6 mt-40">
      <div className="max-w-7xl mx-auto relative group transition-all duration-1000 transform">
        <div className="absolute -inset-10 bg-linear-to-b from-zinc-100/40 to-transparent rounded-4xl -z-10 blur-3xl" />
        <div className="bg-white rounded-4xl border border-zinc-100 shadow-2xl overflow-hidden aspect-16/10 flex border-b-0">
          {/* Sidebar Mockup */}
          <div className="w-72 border-r border-zinc-50 p-10 hidden md:flex flex-col gap-8 bg-zinc-50/20">
            <div className="flex items-center gap-4 mb-8">
              <img
                src="/icons/logo.svg"
                alt="Logo"
                className="size-12 object-contain"
              />
              <div className="space-y-2">
                <div className="h-2.5 w-20 bg-zinc-200 rounded-full" />
                <div className="h-1.5 w-12 bg-zinc-100 rounded-full" />
              </div>
            </div>
            {SIDEBAR_ITEMS.map((item, i) => {
              const isActive = mockupActive === i;
              return (
                <div
                  key={item.label}
                  className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-500 ${isActive ? "bg-black text-white shadow-lg" : "text-zinc-400"}`}
                >
                  <item.icon size={18} />
                  <span className="text-xs font-black uppercase tracking-widest font-heading">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Content Area Mockup */}
          <div className="flex-1 p-14 space-y-14 bg-white overflow-hidden relative">
            <div className="flex justify-between items-end">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-zinc-300 font-heading">
                  <Clock size={14} />
                  Strategic Reflection Cycle
                </div>
                <div className="h-14 w-96 bg-zinc-900 rounded-2xl flex items-center px-8 text-white text-xs font-black uppercase tracking-widest gap-4 font-heading">
                  <Sparkles size={18} className="text-emerald-400" />
                  January Growth Phase
                </div>
              </div>
              <div className="flex gap-3">
                <div className="size-14 rounded-2xl bg-zinc-100 flex items-center justify-center text-zinc-400">
                  <Plus size={24} />
                </div>
                <div className="size-14 rounded-2xl bg-zinc-900 flex items-center justify-center text-white shadow-xl transition-transform hover:translate-x-1">
                  <ArrowRight size={24} />
                </div>
              </div>
            </div>

            {/* Dynamic Cards with Data */}
            <div className="grid grid-cols-3 gap-8">
              {METRIC_CARDS.map((card) => {
                const isActive = mockupActive === card.activeIdx;
                return (
                  <div
                    key={card.label}
                    className={`aspect-square rounded-4xl border transition-all duration-1000 p-10 flex flex-col justify-between ${isActive ? "bg-white border-zinc-100 shadow-2xl scale-105" : "bg-zinc-50/50 border-zinc-200 opacity-60"}`}
                  >
                    <div className="size-14 rounded-2xl bg-white border border-zinc-100 shadow-sm flex items-center justify-center">
                      <card.icon
                        size={26}
                        className={`${card.color} ${isActive ? "animate-pulse" : ""}`}
                      />
                    </div>
                    <div className="space-y-4">
                      <div className="text-xs font-black uppercase tracking-widest text-zinc-400 font-heading">
                        {card.label}
                      </div>
                      <div className="text-4xl font-black tracking-tighter text-zinc-900 font-heading">
                        {card.value}
                      </div>
                      <div className="w-full bg-zinc-100 h-2 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-black transition-all duration-1000 ${isActive ? "w-3/4" : "w-0"}`}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Interactive Layer */}
            <div className="h-48 w-full bg-zinc-50/30 border border-zinc-200 rounded-4xl p-10 flex flex-col justify-center gap-8 relative overflow-hidden group/bot">
              <div className="flex items-center gap-8 relative z-10">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((x) => (
                    <div
                      key={x}
                      className="size-12 rounded-full border-4 border-white bg-zinc-200 shadow-sm overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:z-50"
                    >
                      <img
                        src={`https://i.pravatar.cc/100?img=${x + 10}`}
                        className="size-full object-cover grayscale hover:grayscale-0 transition-all"
                        alt={`User ${x}`}
                      />
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  <div className="h-3.5 w-48 rounded-full bg-zinc-100 border border-zinc-100" />
                  <div className="h-2 w-24 rounded-full bg-zinc-100/50 border border-zinc-50" />
                </div>
              </div>

              <div className="flex gap-4 relative z-10">
                {[...Array(7)].map((_, i) => (
                  <div
                    key={i}
                    className={`h-11 w-full rounded-xl bg-white border border-zinc-100 transition-all duration-700 ${mockupActive === 3 ? "translate-y-0 opacity-100 shadow-sm" : "translate-y-4 opacity-0"}`}
                    style={{ transitionDelay: `${i * 80}ms` }}
                  />
                ))}
              </div>

              <div className="absolute right-6 bottom-6 size-16 p-5 bg-black rounded-3xl shadow-xl flex items-center justify-center text-white cursor-pointer transition-transform active:scale-95 z-20">
                <Plus
                  size={28}
                  className="group-hover/bot:rotate-90 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionPreview;
