"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DayPickerProps {
  currentDate: Date;
  onChange: (date: Date) => void;
}

export function DayPicker({ currentDate, onChange }: DayPickerProps) {
  const handlePrev = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() - 1);
    onChange(newDate);
  };

  const handleNext = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + 1);
    onChange(newDate);
  };

  const dayLabel = currentDate.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
  });

  const getWeekOfMonth = (date: Date) => {
    const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const dayOfMonth = date.getDate();
    return Math.ceil((dayOfMonth + startOfMonth.getDay()) / 7);
  };

  const weekNum = getWeekOfMonth(currentDate);
  const monthName = currentDate.toLocaleDateString("en-US", { month: "long" });
  const weekLabel = `Week ${weekNum} ${monthName}`;

  return (
    <div className="p-4 bg-white border border-zinc-200 flex gap-4 items-center justify-between rounded-lg shadow-xs">
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 text-zinc-400 hover:text-zinc-900"
        onClick={handlePrev}
      >
        <ChevronLeft size={16} />
      </Button>

      <div className="text-center min-w-30">
        <p className="text-xs font-bold text-zinc-900 uppercase tracking-widest">
          {weekLabel}
        </p>
        <p className="text-[10px] font-bold text-zinc-400 uppercase mt-1">
          {dayLabel}
        </p>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 text-zinc-400 hover:text-zinc-900"
        onClick={handleNext}
      >
        <ChevronRight size={16} />
      </Button>
    </div>
  );
}
