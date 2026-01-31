import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { QuarterInfo } from "@/types/app.type";

interface QuarterCardProps {
  quarter: QuarterInfo;
}

export function QuarterCard({ quarter }: QuarterCardProps) {
  return (
    <Card className="shadow-xs border-zinc-200 hover:bg-black hover:text-white hover:scale-105 transition-all duration-500 group">
      <CardContent>
        <div className="flex justify-between items-start mb-6">
          <p className="font-bold text-xs  tracking-widest uppercase">
            {quarter.label}
          </p>
          <p className="text-xs font-bold">{quarter.progress}%</p>
        </div>
        <p className="text-2xl font-bold mb-4 ">
          {quarter.completed} / {quarter.total}
        </p>
        <Progress
          value={quarter.progress}
          className="h-1 bg-zinc-100 group-hover:bg-white/20"
          indicatorClassName="bg-zinc-900 group-hover:bg-white"
        />
      </CardContent>
    </Card>
  );
}
