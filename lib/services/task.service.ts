import { Task, WeeklyGoal } from "@/types/app.type";
import {
  INITIAL_DAILY_TASKS,
  INITIAL_HABIT_TASKS,
  INITIAL_WEEKLY_GOALS,
} from "@/constants/fake-data";

export const TaskService = {
  getDailyTasks: (): Task[] => {
    // Sau này có thể fetch từ API/Database
    return INITIAL_DAILY_TASKS;
  },

  getHabitTasks: (): Task[] => {
    // Sau này có thể fetch từ API/Database
    return INITIAL_HABIT_TASKS;
  },

  getWeeklyGoals: (): WeeklyGoal[] => {
    return INITIAL_WEEKLY_GOALS;
  },

  toggleTaskStatus: (tasks: Task[], id: number): Task[] => {
    return tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t));
  },

  toggleGoalStatus: (goals: WeeklyGoal[], id: number): WeeklyGoal[] => {
    return goals.map((g) => (g.id === id ? { ...g, done: !g.done } : g));
  },

  addTask: (tasks: Task[], title: string, type: "daily" | "habit"): Task[] => {
    const newTask: Task = {
      id: Date.now(),
      title,
      done: false,
      type,
      progress: type === "habit" ? 0 : undefined,
    };
    return [...tasks, newTask];
  },

  addWeeklyGoal: (goals: WeeklyGoal[], title: string): WeeklyGoal[] => {
    const newGoal: WeeklyGoal = {
      id: Date.now(),
      title,
      done: false,
    };
    return [...goals, newGoal];
  },

  calculateProgress: (allTasks: Task[]): number => {
    if (allTasks.length === 0) return 0;
    const doneCount = allTasks.filter((t) => t.done).length;
    return Math.round((doneCount / allTasks.length) * 100);
  },

  getRemainingTasksCount: (allTasks: Task[]): number => {
    return allTasks.filter((t) => !t.done).length;
  },
};
