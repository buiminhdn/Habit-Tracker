"use client";

import React, { useState, useEffect } from "react";
import {
  CheckCircle2,
  Circle,
  Sparkles,
  Plus,
  Clock,
  Quote as QuoteIcon,
  Zap,
  Target,
} from "lucide-react";
import confetti from "canvas-confetti";

const quotes = [
  {
    text: "Discipline is the bridge between goals and accomplishment.",
    author: "Jim Rohn",
  },
  {
    text: "Don't look at the whole mountain, just look at the next step.",
    author: "Anonymous",
  },
  {
    text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    author: "Aristotle",
  },
  {
    text: "The beginning is the most important part of the work.",
    author: "Plato",
  },
  {
    text: "A journey of a thousand miles begins with a single step.",
    author: "Lao Tzu",
  },
];

function DailyPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [dailyTasks, setDailyTasks] = useState([
    { id: 3, title: "Weekly report review", done: false },
    { id: 5, title: "Gym session (Leg day)", done: false },
  ]);

  const [habitTasks, setHabitTasks] = useState([
    { id: 1, title: "Wake up at 5:00 AM", done: true },
    { id: 2, title: "Meditate 15 mins", done: true },
    { id: 4, title: "Read for 30 mins", done: false },
  ]);

  const [quote, setQuote] = useState(quotes[0]);

  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  }, []);

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#000000", "#71717a", "#a1a1aa"],
    });
  };

  const toggleDailyTask = (id: number) => {
    setDailyTasks((prev) =>
      prev.map((t) => {
        if (t.id === id) {
          const nextDone = !t.done;
          if (nextDone) triggerConfetti();
          return { ...t, done: nextDone };
        }
        return t;
      }),
    );
  };

  const toggleHabitTask = (id: number) => {
    setHabitTasks((prev) =>
      prev.map((t) => {
        if (t.id === id) {
          const nextDone = !t.done;
          if (nextDone) triggerConfetti();
          return { ...t, done: nextDone };
        }
        return t;
      }),
    );
  };

  const allTasks = [...dailyTasks, ...habitTasks];
  const progress = Math.round(
    (allTasks.filter((t) => t.done).length / allTasks.length) * 100,
  );
  const remainingTasks = allTasks.filter((t) => !t.done).length;
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 pb-10">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
        <div>
          <div className="flex items-center gap-2 text-zinc-400 font-bold text-[10px] uppercase tracking-widest mb-1">
            <Clock size={12} />
            <span>{today}</span>
          </div>
          <h2 className="text-3xl font-black tracking-tight text-zinc-900">
            Daily Execution
          </h2>
        </div>
        <div className="bg-white border border-zinc-100 p-5 rounded-2xl shadow-sm flex items-center gap-6">
          <div className="text-right">
            <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">
              Efficiency
            </p>
            <p
              className={`text-xl font-black ${progress === 100 ? "text-emerald-600" : "text-zinc-900"}`}
            >
              {progress}%
            </p>
          </div>
          <div className="w-24 h-1.5 bg-zinc-100 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-700 ease-out ${progress === 100 ? "bg-emerald-600" : "bg-black"}`}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7 space-y-10">
          <section>
            <div className="flex justify-between items-center mb-5">
              <h3 className="font-bold text-base uppercase tracking-tight flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-900">
                  <Target size={14} />
                </div>
                Primary Tasks
              </h3>
              <button
                onClick={() => setIsModalOpen(true)}
                className="text-[9px] font-black uppercase text-zinc-400 hover:text-black transition-colors flex items-center gap-1.5 py-1.5 px-3 hover:bg-zinc-50 rounded-lg border border-transparent hover:border-zinc-100"
              >
                <Plus size={12} /> New Task
              </button>
            </div>

            <div className="space-y-2">
              {dailyTasks.map((task) => (
                <div
                  key={task.id}
                  onClick={() => toggleDailyTask(task.id)}
                  className={`flex items-center gap-4 p-4 rounded-xl border transition-all cursor-pointer group ${
                    task.done
                      ? "bg-zinc-50 border-transparent opacity-60"
                      : "bg-white border-zinc-100 hover:border-zinc-300"
                  }`}
                >
                  <div
                    className={`transition-all duration-300 ${task.done ? "text-emerald-500" : "text-zinc-200 group-hover:text-zinc-400"}`}
                  >
                    {task.done ? (
                      <CheckCircle2 size={22} strokeWidth={2.5} />
                    ) : (
                      <Circle size={22} strokeWidth={2} />
                    )}
                  </div>
                  <div className="flex-1">
                    <p
                      className={`font-bold text-sm tracking-tight transition-colors ${task.done ? "line-through text-zinc-400" : "text-zinc-900"}`}
                    >
                      {task.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-5">
              <h3 className="font-bold text-base uppercase tracking-tight flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-500">
                  <Zap size={14} fill="currentColor" />
                </div>
                Foundational Habits
              </h3>
            </div>
            <div className="space-y-2">
              {habitTasks.map((habit) => (
                <div
                  key={habit.id}
                  onClick={() => toggleHabitTask(habit.id)}
                  className={`flex items-center gap-4 p-4 rounded-xl border transition-all cursor-pointer group ${
                    habit.done
                      ? "bg-zinc-50 border-transparent opacity-60"
                      : "bg-white border-zinc-100 hover:border-zinc-300 shadow-sm"
                  }`}
                >
                  <div
                    className={`transition-all duration-300 ${habit.done ? "text-emerald-500" : "text-zinc-200 group-hover:text-amber-500"}`}
                  >
                    {habit.done ? (
                      <CheckCircle2 size={22} strokeWidth={2.5} />
                    ) : (
                      <Circle size={22} strokeWidth={2} />
                    )}
                  </div>
                  <div className="flex-1">
                    <p
                      className={`font-bold text-sm tracking-tight transition-colors ${habit.done ? "line-through text-zinc-400" : "text-zinc-900"}`}
                    >
                      {habit.title}
                    </p>
                    <span
                      className={`text-[8px] font-black uppercase tracking-widest ${habit.done ? "text-emerald-500" : "text-zinc-400"}`}
                    >
                      {habit.done ? "Completed" : "Essential"}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {remainingTasks > 0 ? (
              <div className="mt-8 flex items-center justify-center p-4 rounded-xl border border-dashed border-amber-300 bg-amber-200/20">
                <p className="text-[11px] font-bold text-amber-700 italic flex items-center gap-2">
                  <Sparkles size={12} className="text-amber-500" />
                  {remainingTasks} objectives remaining for a peak performance
                  day.
                </p>
              </div>
            ) : (
              <div className="mt-8 flex items-center justify-center p-4 rounded-xl bg-black text-white shadow-lg">
                <p className="text-[11px] font-bold italic flex items-center gap-2">
                  <Sparkles size={12} className="text-white" />
                  Day Mastered. All objectives synchronized.
                </p>
              </div>
            )}
          </section>
        </div>

        <div className="lg:col-span-5 space-y-10">
          <section className="relative overflow-hidden group border border-zinc-100 bg-white rounded-2xl shadow-sm hover:border-zinc-200 transition-colors">
            <div className="p-8 flex flex-col gap-6">
              <div className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center shrink-0 shadow-md">
                <QuoteIcon size={16} className="text-white" />
              </div>
              <div className="relative">
                <p className="text-lg md:text-xl font-medium leading-relaxed text-zinc-800 tracking-tight italic font-serif-quote">
                  &quot;{quote.text}&quot;
                </p>
                <p className="mt-4 text-[9px] font-black uppercase tracking-widest text-zinc-400">
                  — {quote.author}
                </p>
              </div>
            </div>
          </section>

          <section className="bg-zinc-900 text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6 relative">
              <div className="w-9 h-9 rounded-xl bg-zinc-800 flex items-center justify-center text-white">
                <Sparkles size={16} />
              </div>
              <h3 className="font-bold text-lg uppercase tracking-tight">
                Daily Insight
              </h3>
            </div>
            <textarea
              className="w-full bg-zinc-800 border border-zinc-700 rounded-xl p-5 text-xs text-zinc-200 focus:outline-none focus:border-zinc-500 transition-all resize-none h-40 relative placeholder:text-zinc-600 leading-relaxed"
              placeholder="Record a strategic breakthrough from today..."
            ></textarea>
            <button className="w-full mt-4 bg-white text-black py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-zinc-100 transition-all relative shadow-lg">
              Save to Journal
            </button>
          </section>
        </div>
      </div>

      {/* <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="New Task"
      >
        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            setIsModalOpen(false);
          }}
        >
          <div>
            <label className="block text-[9px] font-black uppercase tracking-widest text-zinc-400 mb-2">
              Objective Description
            </label>
            <input
              type="text"
              placeholder="e.g. Complete review"
              className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-3 focus:outline-none focus:border-black transition-all text-sm text-zinc-900"
            />
          </div>
          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-black text-white py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-zinc-800 transition-colors"
            >
              Set Goal
            </button>
          </div>
        </form>
      </Modal> */}
    </div>
  );
}

export default DailyPage;
