import React from "react";
import { Progress } from "@/components/ui/progress";
import { HabitWithStats } from "@/types/habit.type";

interface HabitItemProps {
  habit: HabitWithStats;
}

export function HabitItem({ habit }: HabitItemProps) {
  return (
    <div className="flex items-center justify-between bg-zinc-50 px-4 py-4 rounded-md">
      <div className="flex gap-3 items-center">
        <span className="relative flex size-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-200 opacity-75"></span>
          <span className="relative inline-flex size-2 rounded-full bg-emerald-200"></span>
        </span>
        <p className="text-xs font-semibold text-zinc-900">{habit.title}</p>
      </div>
      <div className="flex items-center gap-3 w-28 sm:w-32">
        <Progress
          value={habit.progress}
          className="h-1 flex-1 bg-zinc-200"
          indicatorClassName={
            habit.progress < 40
              ? "bg-rose-500"
              : habit.progress > 80
                ? "bg-emerald-500"
                : "bg-zinc-900"
          }
        />
        <p className="text-[10px] font-bold text-zinc-600 w-8 text-right">
          {habit.progress}%
        </p>
      </div>
    </div>
  );
}
