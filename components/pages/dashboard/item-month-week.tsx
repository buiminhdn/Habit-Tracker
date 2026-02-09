import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface MonthWeekItemProps {
  label: string;
  progress: number;
  isCurrent?: boolean;
}

export function MonthWeekItem({
  label,
  progress,
  isCurrent,
}: MonthWeekItemProps) {
  return (
    <Card className="border-zinc-200 shadow-xs h-fit">
      <CardContent>
        <div className="flex justify-between items-center mb-1">
          <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
            {label}
          </p>
          {isCurrent && (
            <Badge className="text-[8px] uppercase font-semibold font-heading tracking-widest">
              Current
            </Badge>
          )}
        </div>
        <div className="flex items-baseline justify-between mb-4">
          <p className="text-2xl font-black text-zinc-900">{progress}%</p>
        </div>
        <Progress
          value={progress}
          className="h-1 bg-zinc-100"
          indicatorClassName={
            progress < 40
              ? "bg-rose-500"
              : progress > 80
                ? "bg-emerald-500"
                : "bg-zinc-900"
          }
        />
      </CardContent>
    </Card>
  );
}
