import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string | number;
  label: string;
  progress: number;
}

export function StatCard({
  icon,
  title,
  value,
  label,
  progress,
}: StatCardProps) {
  return (
    <Card className="shadow-xs border-zinc-100 group">
      <CardContent>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-9 h-9 bg-black rounded-lg flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-105 group-hover:rotate-6">
            {icon}
          </div>
          <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest">
            {title}
          </p>
        </div>
        <div className="flex items-baseline gap-2">
          <p className="text-3xl font-black text-zinc-900">{value}</p>
          <p className="text-zinc-400 text-xs font-bold uppercase">{label}</p>
        </div>
        <Progress
          value={progress}
          className="bg-zinc-200 h-1.5 mt-4"
          indicatorClassName={cn(
            progress < 40
              ? "bg-rose-500"
              : progress > 80
                ? "bg-emerald-500"
                : "bg-zinc-900",
          )}
        />
      </CardContent>
    </Card>
  );
}
