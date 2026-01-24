import { Task } from "@/types/app.type";
import {
  INITIAL_DAILY_TASKS,
  INITIAL_HABIT_TASKS,
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

  toggleTaskStatus: (tasks: Task[], id: number): Task[] => {
    return tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t));
  },

  addTask: (tasks: Task[], title: string, type: "daily" | "habit"): Task[] => {
    const newTask: Task = {
      id: Date.now(),
      title,
      done: false,
      type,
    };
    return [...tasks, newTask];
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
