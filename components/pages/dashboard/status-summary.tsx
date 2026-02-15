import React from "react";
import { Sparkles } from "lucide-react";

interface TaskStatusSummaryProps {
  remainingCount: number;
}

export function TaskStatusSummary({ remainingCount }: TaskStatusSummaryProps) {
  if (remainingCount > 0) {
    return (
      <div className="mt-8 flex items-center justify-center p-4 rounded-lg border border-dashed border-amber-300 bg-amber-200/20">
        <p className="text-xs font-bold text-amber-700 italic flex items-center gap-2">
          <Sparkles size={16} className="text-amber-500" />
          {remainingCount} objectives remaining for a peak performance day.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-8 flex items-center justify-center p-4 rounded-lg bg-black text-white shadow-lg">
      <p className="text-xs font-bold italic flex items-center gap-2">
        <Sparkles size={16} className="text-white" />
        Day Mastered. All objectives synchronized.
      </p>
    </div>
  );
}
