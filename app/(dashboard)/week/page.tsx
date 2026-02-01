"use client";

import React, { useState } from "react";
import {
  Clock,
  Zap,
  LayoutGrid,
  MessageSquare,
  ArrowUpRight,
} from "lucide-react";
import { useTasks } from "@/hooks/use-tasks";
import { formatCycleDate } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { CreateObjectiveDialog } from "@/components/pages/dashboard/dialog-objective";
import { GoalItem } from "@/components/pages/dashboard/item-goal";
import { TaskStatusSummary } from "@/components/pages/dashboard/status-summary";
import { Textarea } from "@/components/ui/textarea";

const WEEKS = ["Week 01", "Week 02", "Week 03", "Week 04"];

function WeekPage() {
  const {
    habitTasks,
    weeklyGoals,
    weeklyGoalsProgress,
    remainingGoalsCount,
    toggleWeeklyGoal,
    addWeeklyGoal,
  } = useTasks();

  const [activeWeek, setActiveWeek] = useState("Week 04");

  const today = formatCycleDate(new Date());

  return (
    <div className="pb-10">
      <header className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-6">
        <div>
          <div className="flex items-center gap-2 text-zinc-500 mb-2">
            <Clock size={12} />
            <p className="text-xs  uppercase tracking-widest font-semibold">
              {today}
            </p>
          </div>
          <p className="text-3xl font-bold font-heading">Weekly Strategy</p>
        </div>
        <div className="w-full sm:w-fit bg-white border border-zinc-200 shadow-xs p-4 rounded-lg flex items-center gap-5">
          <div className="text-right">
            <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">
              Completion
            </p>
            <p
              className={`text-xl font-black ${
                weeklyGoalsProgress < 40
                  ? "text-rose-600"
                  : weeklyGoalsProgress > 80
                    ? "text-emerald-600"
                    : "text-zinc-900"
              }`}
            >
              {weeklyGoalsProgress}%
            </p>
          </div>
          <div className="w-full sm:w-32">
            <Progress
              value={weeklyGoalsProgress}
              className="h-1.5 bg-zinc-200"
              indicatorClassName={
                weeklyGoalsProgress < 40
                  ? "bg-rose-500"
                  : weeklyGoalsProgress > 80
                    ? "bg-emerald-500"
                    : "bg-zinc-900"
              }
            />
          </div>
        </div>
      </header>

      <div className="grid col-span-1 md:grid-cols-12 gap-10">
        {/* Left: Interval & Metrics */}
        <div className="md:col-span-3 space-y-4 md:space-y-6">
          <Card className="border-zinc-200 shadow-xs">
            <CardContent>
              <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-4">
                Interval Select
              </p>
              <div className="space-y-1">
                {WEEKS.map((week) => (
                  <button
                    key={week}
                    onClick={() => setActiveWeek(week)}
                    className={`w-full text-left px-4 py-3 rounded-lg font-bold transition-colors flex justify-between items-center ${
                      activeWeek === week
                        ? "bg-black text-white"
                        : "text-zinc-500 hover:bg-zinc-100 hover:text-black"
                    }`}
                  >
                    <span className="text-xs">{week}</span>
                    {activeWeek === week && <ArrowUpRight size={14} />}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-zinc-200 shadow-xs">
            <CardContent>
              <div className="flex items-center gap-2 mb-6">
                <Zap size={14} className="text-zinc-900" />
                <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                  Behavioral Metrics
                </p>
              </div>
              <div className="space-y-4">
                {habitTasks.map((habit) => (
                  <div key={habit.id}>
                    <div className="flex justify-between text-xs font-bold mb-1.5">
                      <span className="text-zinc-600 truncate mr-2">
                        {habit.title}
                      </span>
                      <span
                        className={`text-[10px] ${
                          (habit.progress ?? 0) < 40
                            ? "text-rose-600"
                            : (habit.progress ?? 0) > 80
                              ? "text-emerald-600"
                              : "text-zinc-900"
                        }`}
                      >
                        {habit.progress ?? 0}%
                      </span>
                    </div>
                    <Progress
                      value={habit.progress ?? 0}
                      className="h-1 bg-zinc-200"
                      indicatorClassName={
                        (habit.progress ?? 0) < 40
                          ? "bg-rose-500"
                          : (habit.progress ?? 0) > 80
                            ? "bg-emerald-500"
                            : "bg-zinc-900"
                      }
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-9 gap-4 lg:gap-10 grid grid-cols-9">
          {/* Middle: Weekly Goals */}
          <div className="col-span-9 lg:col-span-6 space-y-10">
            <section className="bg-white border border-zinc-200 rounded-xl p-8 shadow-xs h-fit">
              <div className="flex justify-between mb-8 gap-4">
                <div className="flex items-center gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-900">
                    <LayoutGrid size={20} />
                  </div>
                  <div>
                    <p className="text-lg font-bold font-heading text-zinc-900 uppercase">
                      Weekly Goals
                    </p>
                    <p className="text-[10px] font-bold font-heading uppercase text-zinc-400 tracking-widest">
                      {activeWeek} of Cycle
                    </p>
                  </div>
                </div>
                <CreateObjectiveDialog
                  onAdd={addWeeklyGoal}
                  triggerLabel="New Goal"
                  submitLabel="Set Goal"
                />
              </div>

              <div className="space-y-2">
                {weeklyGoals.map((goal) => (
                  <GoalItem
                    key={goal.id}
                    goal={goal}
                    onToggle={toggleWeeklyGoal}
                  />
                ))}
              </div>

              <TaskStatusSummary
                remainingCount={remainingGoalsCount}
                type="week"
              />
            </section>
          </div>

          {/* Right: Review */}
          <div className="col-span-9 lg:col-span-3 space-y-6">
            <Card className="bg-zinc-900 text-white border-none shadow-xl">
              <CardContent>
                <div className="flex items-center gap-2 mb-6 relative">
                  <div className="w-9 h-9 rounded-lg bg-zinc-800 flex items-center justify-center text-white">
                    <MessageSquare size={16} />
                  </div>
                  <p className="font-bold text-base uppercase tracking-tight">
                    Review
                  </p>
                </div>
                <Textarea
                  className="bg-zinc-800 border-zinc-700 rounded-lg p-4 text-xs text-zinc-200 resize-none h-44 placeholder:text-zinc-600 leading-relaxed"
                  placeholder="Strategic feedback for next interval..."
                />
                <Button className="w-full mt-4 bg-white text-black py-6 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-zinc-100 shadow-md">
                  Submit Review
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeekPage;
