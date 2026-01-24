import { Task, Quote } from "@/types/app.type";

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
  { id: 1, title: "Wake up at 5:00 AM", done: true, type: "habit" },
  { id: 2, title: "Meditate 15 mins", done: true, type: "habit" },
  { id: 4, title: "Read for 30 mins", done: false, type: "habit" },
];
