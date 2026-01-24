import { useState, useCallback } from "react";
import { Task } from "@/types/app.type";
import { TaskService } from "@/lib/services/task.service";
import { triggerConfetti } from "@/lib/confetti";

export function useTasks() {
  const [dailyTasks, setDailyTasks] = useState<Task[]>(() =>
    TaskService.getDailyTasks(),
  );
  const [habitTasks, setHabitTasks] = useState<Task[]>(() =>
    TaskService.getHabitTasks(),
  );

  const toggleDailyTask = useCallback((id: number) => {
    setDailyTasks((prev) => {
      const updated = TaskService.toggleTaskStatus(prev, id);
      const isNowDone = updated.find((t) => t.id === id)?.done;
      if (isNowDone) triggerConfetti();
      return updated;
    });
  }, []);

  const toggleHabitTask = useCallback((id: number) => {
    setHabitTasks((prev) => {
      const updated = TaskService.toggleTaskStatus(prev, id);
      const isNowDone = updated.find((t) => t.id === id)?.done;
      if (isNowDone) triggerConfetti();
      return updated;
    });
  }, []);

  const addDailyTask = useCallback((title: string) => {
    setDailyTasks((prev) => TaskService.addTask(prev, title, "daily"));
  }, []);

  const allTasks = [...dailyTasks, ...habitTasks];
  const progress = TaskService.calculateProgress(allTasks);
  const remainingCount = TaskService.getRemainingTasksCount(allTasks);

  return {
    dailyTasks,
    habitTasks,
    progress,
    remainingCount,
    toggleDailyTask,
    toggleHabitTask,
    addDailyTask,
  };
}
