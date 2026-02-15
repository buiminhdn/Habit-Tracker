"use client";

import React, { useState } from "react";
import { Clock, Zap, Target } from "lucide-react";
import { CreateObjectiveDialog } from "@/components/pages/dashboard/dialog-objective";
import { TaskItem } from "@/components/pages/dashboard/item-task";
import { TaskStatusSummary } from "@/components/pages/dashboard/status-summary";
import { useTasks } from "@/hooks/use-tasks";
import { WeeklyGoalsCard } from "@/components/pages/dashboard/item-weekly-goals-card";
import { formatDate } from "@/lib/utils";
import { DayPicker } from "@/components/pages/dashboard/item-day-picker";
import { EfficiencyCard } from "@/components/pages/dashboard/item-efficiency";
import { QuoteCard } from "@/components/pages/dashboard/item-quote";

function DailyPage() {
  const {
    progress,
    dailyTasks,
    habitTasks,
    remainingCount,
    toggleDailyTask,
    toggleHabitTask,
    addDailyTask,
    deleteDailyTask,
  } = useTasks();

  const [date, setDate] = useState(new Date());

  const today = formatDate(date);

  return (
    <div className="pb-10">
      <header className="flex flex-col lg:flex-row justify-between items-stretch mb-10 gap-6">
        <div>
          <div className="flex items-center justify-center lg:justify-start gap-2 text-zinc-500 mb-2">
            <Clock size={12} />
            <p className="text-xs uppercase tracking-widest font-semibold">
              {today}
            </p>
          </div>
          <p className="text-center lg:text-start text-3xl font-bold font-heading">
            Daily Execution
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <DayPicker currentDate={date} onChange={setDate} />
          <EfficiencyCard progress={progress} />
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
        <div className="lg:col-span-7 space-y-10">
          <section>
            <div className="flex justify-between items-center mb-5">
              <div className="font-bold uppercase flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-zinc-100 border flex items-center justify-center text-zinc-900">
                  <Target size={14} />
                </div>
                <p className="font-heading">Primary Tasks</p>
              </div>
              <CreateObjectiveDialog
                onAdd={addDailyTask}
                triggerLabel="New Task"
                submitLabel="Add Task"
              />
            </div>

            <div className="space-y-2">
              {dailyTasks.map((task) => (
                <TaskItem
                  key={task.id}
                  task={task}
                  onToggle={(id: string) => toggleDailyTask(id)}
                  onDelete={(id: string) => deleteDailyTask(id)}
                />
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-5">
              <div className="font-bold uppercase flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-zinc-100 border flex items-center justify-center text-zinc-900">
                  <Zap size={14} />
                </div>
                <p className="font-heading">Foundational Habits</p>
              </div>
            </div>
            <div className="space-y-2">
              {habitTasks.map((habit) => (
                <TaskItem
                  key={habit.id}
                  task={habit}
                  onToggle={(id: string) => toggleHabitTask(id)}
                  showStatus
                />
              ))}
            </div>

            <TaskStatusSummary remainingCount={remainingCount} />
          </section>
        </div>

        <div className="lg:col-span-5 space-y-4 md:space-y-8">
          <WeeklyGoalsCard currentDate={date} />
          <QuoteCard />
        </div>
      </div>
    </div>
  );
}

export default DailyPage;
