import { Task, Quote, WeeklyGoal, Habit } from "@/types/app.type";

export const QUOTES: Quote[] = [
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

export const INITIAL_DAILY_TASKS: Task[] = [
  { id: 3, title: "Weekly report review", done: false, type: "daily" },
  { id: 5, title: "Gym session (Leg day)", done: false, type: "daily" },
];

export const INITIAL_HABIT_TASKS: Task[] = [
  {
    id: 1,
    title: "Wake up at 5:00 AM",
    done: true,
    type: "habit",
    progress: 15,
  },
  {
    id: 2,
    title: "Meditate 15 mins",
    done: true,
    type: "habit",
    progress: 100,
  },
  {
    id: 4,
    title: "Read for 30 mins",
    done: false,
    type: "habit",
    progress: 60,
  },
];

export const INITIAL_WEEKLY_GOALS: WeeklyGoal[] = [
  { id: 1, title: "Finish habits this week", done: true },
  { id: 2, title: "Review strategic project proposal", done: false },
  { id: 3, title: "Gym workout 3 times", done: false },
];

export const INITIAL_MONTHLY_HABITS: Habit[] = [
  {
    id: "1",
    title: "Cognitive Deep Work",
    status: "OPTIMAL",
    progress: 82,
    history: Array.from({ length: 31 }, () => Math.random() > 0.2),
  },
  {
    id: "2",
    title: "Physical Optimization",
    status: "STABLE",
    progress: 65,
    history: Array.from({ length: 31 }, () => Math.random() > 0.4),
  },
  {
    id: "3",
    title: "Strategic Learning",
    status: "NEED_FOCUS",
    progress: 45,
    history: Array.from({ length: 31 }, () => Math.random() > 0.6),
  },
];

export const MONTHLY_CONSISTENCY_DATA = Array.from({ length: 31 }, (_, i) => ({
  day: i + 1,
  value: Math.floor(Math.random() * 40) + 60,
}));
