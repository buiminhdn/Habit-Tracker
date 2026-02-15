"use client";

import { MONTHS } from "@/constants/app.constant";

interface MonthGridProps {
  currentMonth: number;
  onMonthChange: (month: number) => void;
  maxMonth: number;
}

export function MonthGrid({
  currentMonth,
  onMonthChange,
  maxMonth,
}: MonthGridProps) {
  return (
    <div className="flex flex-wrap gap-1 bg-zinc-100 p-1 rounded-xl border border-zinc-200">
      {MONTHS.map((month, i) => {
        const isFuture = i + 1 > maxMonth;
        return (
          <button
            key={month}
            disabled={isFuture}
            onClick={() => onMonthChange(i + 1)}
            className={`w-8 h-8 rounded-lg text-xs font-semibold transition-colors ${
              currentMonth === i + 1
                ? "bg-black text-white"
                : isFuture
                  ? "text-zinc-200 cursor-not-allowed"
                  : "text-zinc-400 hover:text-black hover:bg-white"
            }`}
          >
            {i + 1}
          </button>
        );
      })}
    </div>
  );
}
