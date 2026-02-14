import React from "react";
import { ArrowUpRight } from "lucide-react";

interface WeekSelectItemProps {
  week: string;
  isActive: boolean;
  isCurrent?: boolean;
  onClick: () => void;
}

export function WeekSelectItem({
  week,
  isActive,
  isCurrent,
  onClick,
}: WeekSelectItemProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-4 py-3 rounded-lg font-bold transition-colors flex justify-between items-center ${
        isActive
          ? "bg-black text-white"
          : "text-zinc-500 hover:bg-zinc-100 hover:text-black"
      }`}
    >
      <div className="flex items-center gap-3">
        <span className="text-xs">{week}</span>
        {isCurrent && (
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
          </span>
        )}
      </div>
      {isActive && <ArrowUpRight size={14} />}
    </button>
  );
}
