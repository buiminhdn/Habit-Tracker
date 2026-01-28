import {
  Task,
  Quote,
  WeeklyGoal,
  Habit,
  MonthlyData,
  StatusDistribution,
  QuarterInfo,
  ReflectionPrompt,
} from "@/types/app.type";

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

export const MONTHLY_REFLECTION_PROMPTS: ReflectionPrompt[] = [
  {
    id: "1",
    text: "What was your biggest accomplishment this month?",
    answered: true,
  },
  {
    id: "2",
    text: "What was your most challenging moment and how did you navigate it?",
    answered: false,
  },
  {
    id: "3",
    text: "Which habit was hardest to maintain and why?",
    answered: false,
  },
];

export const YEARLY_REFLECTION_PROMPTS: ReflectionPrompt[] = [
  {
    id: "4",
    text: "What are you most proud of from this past year?",
    answered: true,
  },
  {
    id: "5",
    text: "What was the single most valuable lesson you learned?",
    answered: false,
  },
  {
    id: "6",
    text: "How have you changed as a person since January?",
    answered: false,
  },
];

export const YEARLY_MONTHLY_DATA: MonthlyData[] = [
  { name: "Jan", value: 85 },
  { name: "Feb", value: 78 },
  { name: "Mar", value: 92 },
  { name: "Apr", value: 64 },
  { name: "May", value: 80 },
  { name: "Jun", value: 72 },
  { name: "Jul", value: 0 },
  { name: "Aug", value: 0 },
  { name: "Sep", value: 0 },
  { name: "Oct", value: 0 },
  { name: "Nov", value: 0 },
  { name: "Dec", value: 0 },
];

export const YEARLY_STATUS_DISTRIBUTION: StatusDistribution[] = [
  { name: "Done", value: 2, fill: "#10b981" },
  { name: "In Progress", value: 3, fill: "#000000" },
  { name: "Waiting", value: 1, fill: "#a1a1aa" },
];

export const YEARLY_QUARTERS: QuarterInfo[] = [
  { id: 1, label: "Q1 2026", progress: 50, completed: 1, total: 2 },
  { id: 2, label: "Q2 2026", progress: 50, completed: 1, total: 2 },
  { id: 3, label: "Q3 2026", progress: 0, completed: 0, total: 1 },
  { id: 4, label: "Q4 2026", progress: 0, completed: 0, total: 1 },
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
