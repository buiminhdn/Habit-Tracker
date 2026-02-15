"use client";

import { CheckCircle2, Circle } from "lucide-react";
import { WeeklyGoal } from "@/types/week-goal.type";

interface GoalItemProps {
  goal: WeeklyGoal;
  onToggle: (id: string) => void;
  disabled?: boolean;
}

export function GoalItem({ goal, onToggle, disabled }: GoalItemProps) {
  return (
    <div
      onClick={() => !disabled && onToggle(goal.id)}
      className={`flex items-center gap-4 p-4 rounded-lg border transition-colors duration-300 ${
        disabled ? "cursor-not-allowed" : "cursor-pointer group"
      } ${
        goal.is_completed
          ? "bg-white/5 border-transparent opacity-60"
          : "bg-zinc-900 border-zinc-800 hover:border-zinc-700"
      }`}
    >
      <div
        className={`transition-colors duration-300 ${
          goal.is_completed
            ? "text-emerald-500"
            : disabled
              ? "text-zinc-700"
              : "text-zinc-600 group-hover:text-zinc-400"
        }`}
      >
        {goal.is_completed ? (
          <CheckCircle2 size={22} strokeWidth={2} />
        ) : (
          <Circle size={22} strokeWidth={2} />
        )}
      </div>
      <div>
        <p
          className={`font-semibold text-sm ${
            goal.is_completed ? "line-through text-zinc-500" : "text-white"
          }`}
        >
          {goal.title}
        </p>
      </div>
    </div>
  );
}
