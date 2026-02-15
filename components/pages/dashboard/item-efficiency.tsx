"use client";

import { Progress } from "@/components/ui/progress";

interface EfficiencyCardProps {
  progress: number;
}

export function EfficiencyCard({ progress }: EfficiencyCardProps) {
  return (
    <div className="bg-white border border-zinc-200 shadow-xs p-4 rounded-lg flex items-center gap-4 sm:gap-5">
      <div className="shrink-0 text-right">
        <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">
          Efficiency
        </p>
        <p
          className={`text-xl font-black ${
            progress < 40
              ? "text-rose-600"
              : progress > 80
                ? "text-emerald-600"
                : "text-zinc-900"
          }`}
        >
          {progress}%
        </p>
      </div>
      <div className="flex-1 sm:w-32">
        <Progress
          value={progress}
          className="h-1.5 bg-zinc-200"
          indicatorClassName={
            progress < 40
              ? "bg-rose-500"
              : progress > 80
                ? "bg-emerald-500"
                : "bg-zinc-900"
          }
        />
      </div>
    </div>
  );
}
