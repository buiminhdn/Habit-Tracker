import { useState, useCallback } from "react";
import { Task } from "@/types/task.type";
import { TaskService } from "@/lib/services/task.service";
import { triggerConfetti } from "@/lib/confetti";

export function useTasks() {
  const [dailyTasks, setDailyTasks] = useState<Task[]>(() =>
    TaskService.getDailyTasks(),
  );
  const [habitTasks, setHabitTasks] = useState<Task[]>(() =>
    TaskService.getHabitTasks(),
  );

  const toggleDailyTask = useCallback((id: string) => {
    setDailyTasks((prev) => {
      const updated = TaskService.toggleTaskStatus(prev, id);
      const isNowDone = updated.find((t) => t.id === id)?.is_completed;
      if (isNowDone) triggerConfetti();
      return updated;
    });
  }, []);

  const toggleHabitTask = useCallback((id: string) => {
    setHabitTasks((prev) => {
      const updated = TaskService.toggleTaskStatus(prev, id);
      const isNowDone = updated.find((t) => t.id === id)?.is_completed;
      if (isNowDone) triggerConfetti();
      return updated;
    });
  }, []);

  const addDailyTask = useCallback((title: string) => {
    setDailyTasks((prev) => TaskService.addTask(prev, title));
  }, []);

  const deleteDailyTask = useCallback((id: string) => {
    setDailyTasks((prev) => TaskService.deleteTask(prev, id));
  }, []);

  const allTasks = [...dailyTasks, ...habitTasks];
  const progress = TaskService.calculateProgress(allTasks);
  const remainingCount = TaskService.getRemainingTasksCount(allTasks);

  return {
    progress,
    dailyTasks,
    habitTasks,
    remainingCount,
    toggleDailyTask,
    toggleHabitTask,
    addDailyTask,
    deleteDailyTask,
  };
}
