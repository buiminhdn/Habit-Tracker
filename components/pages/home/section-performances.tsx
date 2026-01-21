"use client";

import { useEffect, useState, useRef, useMemo } from "react";
import { useInView } from "framer-motion";

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let frameId: number;
      const duration = 2000;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);

        setCount(easeOut * end);

        if (progress < 1) {
          frameId = requestAnimationFrame(animate);
        }
      };

      frameId = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(frameId);
    }
  }, [isInView, end]);

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

function SectionPerformances() {
  const stats = useMemo(
    () => [
      { value: 98.4, suffix: "%", decimals: 1, label: "User Retention" },
      {
        value: 12,
        suffix: "h",
        decimals: 0,
        prefix: "+",
        label: "Weekly Deep Work",
      },
      { value: 4200, suffix: "+", decimals: 0, label: "Active Growth Cycles" },
      { value: 89, suffix: "%", decimals: 0, label: "Goal Alignment" },
    ],
    [],
  );

  return (
    <section
      id="performance"
      className="mt-52 py-20 px-6 bg-white border-y border-zinc-200 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-zinc-50/50 -z-10"></div>
      <div className="max-w-7xl mx-auto text-center">
        <div className="grid grid-cols-4 items-center divide-x divide-zinc-100">
          {stats.map((stat, i) => (
            <div key={i} className="relative px-8 group">
              {i === 1 && (
                <div className="absolute inset-0 bg-emerald-400/5 blur-3xl rounded-full -z-10" />
              )}
              <div className="space-y-6">
                <p
                  className={`text-7xl font-black tracking-tighter font-heading ${i === 1 ? "text-emerald-500" : "text-zinc-900"}`}
                >
                  {stat.prefix}
                  <CountUp
                    end={stat.value}
                    decimals={stat.decimals}
                    suffix={stat.suffix}
                  />
                </p>
                <p className="text-xs font-black uppercase tracking-widest text-zinc-400 font-sans">
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

export default SectionPerformances;
