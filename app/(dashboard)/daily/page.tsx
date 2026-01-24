"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, Clock, Quote as QuoteIcon, Zap, Target } from "lucide-react";
import { Quote } from "@/types/app.type";
import { QUOTES } from "@/constants/fake-data";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { AddTaskDialog } from "@/components/pages/dashboard/dialog-task-add";
import { TaskItem } from "@/components/pages/dashboard/item-task";
import { Textarea } from "@/components/ui/textarea";
import { useTasks } from "@/hooks/use-tasks";
import { formatDate } from "@/lib/utils";

function DailyPage() {
  const {
    dailyTasks,
    habitTasks,
    progress,
    remainingCount,
    toggleDailyTask,
    toggleHabitTask,
    addDailyTask,
  } = useTasks();

  const [quote, setQuote] = useState<Quote>(QUOTES[0]);

  useEffect(() => {
    const pickRandom = () => {
      setQuote(QUOTES[Math.floor(Math.random() * QUOTES.length)]);
    };

    const timer = setTimeout(pickRandom, 0);
    return () => clearTimeout(timer);
  }, []);

  const today = formatDate(new Date());

  return (
    <div className="pb-10">
      <header className="flex justify-between items-center mb-10 gap-6">
        <div>
          <div className="flex items-center gap-2 text-zinc-500 mb-2">
            <Clock size={12} />
            <p className="text-xs  uppercase tracking-widest font-semibold">
              {today}
            </p>
          </div>
          <p className="text-3xl font-bold font-heading">Daily Execution</p>
        </div>
        <div className="bg-white border border-zinc-200 shadow-xs p-4 rounded-lg flex items-center gap-5">
          <div className="text-right">
            <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">
              Efficiency
            </p>
            <p
              className={`text-xl font-black ${progress === 100 ? "text-emerald-600" : "text-zinc-900"}`}
            >
              {progress}%
            </p>
          </div>
          <div className="w-32">
            <Progress value={progress} className="h-1.5" />
          </div>
        </div>
      </header>

      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-7 space-y-10">
          <section>
            <div className="flex justify-between items-center mb-5">
              <div className="font-bold uppercase flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-zinc-100 border flex items-center justify-center text-zinc-900">
                  <Target size={14} />
                </div>
                <p className="font-heading">Primary Tasks</p>
              </div>
              <AddTaskDialog onAdd={addDailyTask} />
            </div>

            <div className="space-y-2">
              {dailyTasks.map((task) => (
                <TaskItem
                  key={task.id}
                  task={task}
                  onToggle={toggleDailyTask}
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
                  onToggle={toggleHabitTask}
                  showStatus
                />
              ))}
            </div>

            {remainingCount > 0 ? (
              <div className="mt-8 flex items-center justify-center p-4 rounded-lg border border-dashed border-amber-300 bg-amber-200/20">
                <p className="text-xs font-bold text-amber-700 italic flex items-center gap-2">
                  <Sparkles size={16} className="text-amber-500" />
                  {remainingCount} objectives remaining for a peak performance
                  day.
                </p>
              </div>
            ) : (
              <div className="mt-8 flex items-center justify-center p-4 rounded-lg bg-black text-white shadow-lg">
                <p className="text-xs font-bold italic flex items-center gap-2">
                  <Sparkles size={16} className="text-white" />
                  Day Mastered. All objectives synchronized.
                </p>
              </div>
            )}
          </section>
        </div>

        <div className="col-span-5 space-y-8">
          <Card className="group border-zinc-200 shadow-xs bg-white rounded-xl">
            <CardContent>
              <div className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105 group-hover:rotate-6">
                <QuoteIcon size={16} className="text-white" />
              </div>
              <p className="mt-6 text-xl font-medium leading-relaxed text-zinc-800 tracking-tight italic">
                &quot;{quote.text}&quot;
              </p>
              <p className="mt-4 text-xs font-bold uppercase tracking-widest text-zinc-400">
                — {quote.author}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 text-white border-none shadow-xl">
            <CardContent>
              <div className="flex items-center gap-3 mb-6 relative">
                <div className="w-9 h-9 rounded-lg bg-zinc-800 flex items-center justify-center text-white">
                  <Sparkles size={16} />
                </div>
                <p className="font-bold text-lg uppercase">Daily Insight</p>
              </div>
              <Textarea
                className="bg-zinc-800 border-zinc-700 rounded-lg p-4 text-xs text-zinc-200 resize-none h-40 relative placeholder:text-zinc-600 leading-relaxed"
                placeholder="Record a strategic breakthrough from today..."
              />
              <Button className="w-full mt-4 bg-white text-black py-6 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-zinc-100 relative">
                Save to Journal
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default DailyPage;
