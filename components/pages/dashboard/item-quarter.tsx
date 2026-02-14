import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { QuarterInfo } from "@/types/app.type";

interface QuarterCardProps {
  quarter: QuarterInfo;
}

export function QuarterCard({ quarter }: QuarterCardProps) {
  return (
    <Card className="border-zinc-200 shadow-xs h-fit">
      <CardContent>
        <div className="flex justify-between mb-4">
          <p className="text-[10px] font-bold text-zinc-900 uppercase tracking-widest">
            {quarter.label}
          </p>
          <p className="text-2xl font-black text-zinc-900">
            {quarter.progress}%
          </p>
        </div>
        <Progress
          value={quarter.progress}
          className="h-1 bg-zinc-100"
          indicatorClassName={
            quarter.progress < 40
              ? "bg-rose-500"
              : quarter.progress > 80
                ? "bg-emerald-500"
                : "bg-zinc-900"
          }
        />
      </CardContent>
    </Card>
  );
}
