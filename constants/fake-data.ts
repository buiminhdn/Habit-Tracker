import {
  Quote,
  Habit as AppHabit,
  MonthlyData,
  StatusDistribution,
  QuarterInfo,
  ReflectionPrompt,
} from "@/types/app.type";
import { WeeklyGoal } from "@/types/week-goal.type";
import { Task } from "@/types/task.type";
import { Habit, HabitLog } from "@/types/habit.type";

const TODAY = "2026-02-14";

export const SAMPLE_TASKS: Task[] = [
  // Today's tasks (3)
  {
    id: "t1",
    user_id: "u1",
    title: "Complete Q1 strategy presentation",
    task_date: TODAY,
    is_completed: false,
    created_at: `${TODAY}T09:00:00Z`,
  },
  {
    id: "t2",
    user_id: "u1",
    title: "Weekly performance review with team",
    task_date: TODAY,
    is_completed: true,
    created_at: `${TODAY}T10:30:00Z`,
  },
  {
    id: "t3",
    user_id: "u1",
    title: "Gym: Upper body session",
    task_date: TODAY,
    is_completed: false,
    created_at: `${TODAY}T17:00:00Z`,
  },
];

export const SAMPLE_HABITS: Habit[] = [
  {
    id: "h1",
    user_id: "u1",
    title: "Wake up at 5:00 AM",
    start_date: "2026-01-01",
    end_date: null,
    created_at: "2026-01-01T05:00:00Z",
  },
  {
    id: "h2",
    user_id: "u1",
    title: "Meditate 15 mins",
    start_date: "2026-01-01",
    end_date: null,
    created_at: "2026-01-01T05:30:00Z",
  },
  {
    id: "h4",
    user_id: "u1",
    title: "Read for 30 mins",
    start_date: "2026-01-01",
    end_date: null,
    created_at: "2026-01-01T06:00:00Z",
  },
];

export const SAMPLE_HABIT_LOGS: HabitLog[] = [
  {
    id: "l1",
    habit_id: "h1",
    log_date: TODAY,
    created_at: `${TODAY}T05:05:00Z`,
  },
  {
    id: "l2",
    habit_id: "h2",
    log_date: TODAY,
    created_at: `${TODAY}T05:45:00Z`,
  },
];

export const SAMPLE_WEEKLY_GOALS: WeeklyGoal[] = [
  {
    id: "wg1",
    user_id: "u1",
    title: "Finish habits this week",
    is_completed: true,
    week_start_date: "2026-02-09",
    created_at: new Date().toISOString(),
  },
  {
    id: "wg2",
    user_id: "u1",
    title: "Review strategic project proposal",
    is_completed: false,
    week_start_date: "2026-02-09",
    created_at: new Date().toISOString(),
  },
  {
    id: "wg3",
    user_id: "u1",
    title: "Gym workout 3 times",
    is_completed: false,
    week_start_date: "2026-02-09",
    created_at: new Date().toISOString(),
  },
  // Week 4
  {
    id: "wg4",
    user_id: "u1",
    title: "Prepare for monthly review",
    is_completed: false,
    week_start_date: "2026-02-23",
    created_at: new Date().toISOString(),
  },
  {
    id: "wg5",
    user_id: "u1",
    title: "Organize Q1 roadmap",
    is_completed: false,
    week_start_date: "2026-02-23",
    created_at: new Date().toISOString(),
  },
  // March Week 1
  {
    id: "wg6",
    user_id: "u1",
    title: "Kickoff new project architecture",
    is_completed: false,
    week_start_date: "2026-03-02",
    created_at: new Date().toISOString(),
  },
];

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

export const INITIAL_MONTHLY_HABITS: AppHabit[] = [
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
