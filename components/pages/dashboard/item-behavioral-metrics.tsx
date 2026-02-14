"use client";

import React from "react";
import { Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Habit } from "@/types/app.type";

interface BehavioralMetricsItemProps {
  habits: Habit[];
}

export function BehavioralMetricsItem({ habits }: BehavioralMetricsItemProps) {
  return (
    <Card className="border-zinc-200 shadow-xs">
      <CardContent>
        <div className="flex items-center gap-2 mb-6">
          <Zap size={14} className="text-zinc-900" />
          <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
            Behavioral Metrics
          </p>
        </div>
        <div className="space-y-4">
          {habits.map((habit) => (
            <div key={habit.id}>
              <div className="flex justify-between text-xs font-bold mb-1.5">
                <span className="text-zinc-600 truncate mr-2">
                  {habit.title}
                </span>
                <span
                  className={`text-[10px] ${
                    habit.progress < 40
                      ? "text-rose-600"
                      : habit.progress > 80
                        ? "text-emerald-600"
                        : "text-zinc-900"
                  }`}
                >
                  {habit.progress}%
                </span>
              </div>
              <Progress
                value={habit.progress}
                className="h-1 bg-zinc-200"
                indicatorClassName={
                  habit.progress < 40
                    ? "bg-rose-500"
                    : habit.progress > 80
                      ? "bg-emerald-500"
                      : "bg-zinc-900"
                }
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
