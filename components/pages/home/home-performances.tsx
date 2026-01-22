"use client";

import { useEffect, useState, useRef } from "react";

const STATS = [
  { value: 98.4, suffix: "%", decimals: 1, label: "User Retention" },
  {
    value: 12,
    suffix: "h",
    decimals: 0,
    prefix: "+",
    label: "Weekly Deep Work",
    highlight: true,
  },
  { value: 4200, suffix: "+", decimals: 0, label: "Active Growth Cycles" },
  { value: 89, suffix: "%", decimals: 0, label: "Goal Alignment" },
];

function CountUp({
  end,
  suffix = "",
  decimals = 0,
}: {
  end: number;
  suffix?: string;
  decimals?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let startTime: number;
          const duration = 2000;

          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);

            setCount(easeOut * end);

            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [end]);

  return (
    <span ref={ref}>
      {count.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}

export default function HomePerformances() {
  return (
    <section
      id="performance"
      className="relative mt-20 overflow-hidden border-y border-zinc-200 bg-zinc-50/50 py-12 px-6 md:mt-40 md:py-20"
    >
      <div className="mx-auto max-w-7xl text-center">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 md:divide-x md:divide-zinc-100 lg:gap-0">
          {STATS.map((stat, i) => (
            <div key={i} className="relative px-4 md:px-8">
              {stat.highlight && (
                <div className="absolute inset-0 -z-10 rounded-full bg-emerald-400/5 blur-3xl" />
              )}
              <div className="space-y-4 md:space-y-6">
                <p
                  className={`font-heading text-5xl font-black tracking-tighter md:text-7xl ${
                    stat.highlight ? "text-emerald-500" : "text-zinc-900"
                  }`}
                >
                  {stat.prefix}
                  <CountUp
                    end={stat.value}
                    decimals={stat.decimals}
                    suffix={stat.suffix}
                  />
                </p>
                <p className="font-sans text-xs font-black uppercase tracking-widest text-zinc-400 md:text-xs">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
