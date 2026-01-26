"use client";

import { CheckCircle2, Circle } from "lucide-react";
import { WeeklyGoal } from "@/types/app.type";

interface GoalItemProps {
  goal: WeeklyGoal;
  onToggle: (id: number) => void;
}

export function GoalItem({ goal, onToggle }: GoalItemProps) {
  return (
    <div
      onClick={() => onToggle(goal.id)}
      className={`flex items-center gap-4 p-4 rounded-lg border transition-colors duration-300 cursor-pointer group ${
        goal.done
          ? "bg-zinc-50 border-transparent opacity-80"
          : "bg-white border-zinc-200 hover:border-zinc-300"
      }`}
    >
      <div
        className={`transition-colors duration-300 ${
          goal.done ? "text-emerald-500" : "text-zinc-200 group-hover:text-zinc-400"
        }`}
      >
        {goal.done ? (
          <CheckCircle2 size={22} strokeWidth={2} />
        ) : (
          <Circle size={22} strokeWidth={2} />
        )}
      </div>
      <div>
        <p
          className={`font-semibold text-sm ${
            goal.done ? "line-through text-zinc-400" : "text-zinc-900"
          }`}
        >
          {goal.title}
        </p>
      </div>
    </div>
  );
}
