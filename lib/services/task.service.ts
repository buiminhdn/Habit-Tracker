import { Task } from "@/types/task.type";
import {
  SAMPLE_TASKS,
  SAMPLE_HABITS,
  SAMPLE_HABIT_LOGS,
} from "@/constants/fake-data";

export const TaskService = {
  getDailyTasks: (): Task[] => {
    // Sau này có thể fetch từ API/Database
    return SAMPLE_TASKS;
  },

  getHabitTasks: (): Task[] => {
    // Giả lập việc chuyển đổi Habit + Log thành Task cho UI daily
    return SAMPLE_HABITS.map((habit) => ({
      id: habit.id,
      user_id: habit.user_id,
      title: habit.title,
      task_date: "2026-02-14",
      is_completed: SAMPLE_HABIT_LOGS.some((log) => log.habit_id === habit.id),
      created_at: habit.created_at,
    }));
  },

  toggleTaskStatus: (tasks: Task[], id: string): Task[] => {
    return tasks.map((t) =>
      t.id === id ? { ...t, is_completed: !t.is_completed } : t,
    );
  },

  addTask: (tasks: Task[], title: string): Task[] => {
    const newTask: Task = {
      id: Date.now().toString(),
      user_id: "u1", // Default user for sample
      title,
      task_date: new Date().toISOString().split("T")[0],
      is_completed: false,
      created_at: new Date().toISOString(),
    };
    return [...tasks, newTask];
  },

  deleteTask: (tasks: Task[], id: string): Task[] => {
    return tasks.filter((t) => t.id !== id);
  },

  calculateProgress: (allTasks: Task[]): number => {
    if (allTasks.length === 0) return 0;
    const doneCount = allTasks.filter((t) => t.is_completed).length;
    return Math.round((doneCount / allTasks.length) * 100);
  },

  getRemainingTasksCount: (allTasks: Task[]): number => {
    return allTasks.filter((t) => !t.is_completed).length;
  },
};
