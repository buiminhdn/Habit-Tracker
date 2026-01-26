import { useState, useCallback } from "react";
import { Task, WeeklyGoal } from "@/types/app.type";
import { TaskService } from "@/lib/services/task.service";
import { triggerConfetti } from "@/lib/confetti";

export function useTasks() {
  const [dailyTasks, setDailyTasks] = useState<Task[]>(() =>
    TaskService.getDailyTasks(),
  );
  const [habitTasks, setHabitTasks] = useState<Task[]>(() =>
    TaskService.getHabitTasks(),
  );
  const [weeklyGoals, setWeeklyGoals] = useState<WeeklyGoal[]>(() =>
    TaskService.getWeeklyGoals(),
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

  const toggleWeeklyGoal = useCallback((id: number) => {
    setWeeklyGoals((prev) => {
      const updated = TaskService.toggleGoalStatus(prev, id);
      const isNowDone = updated.find((g) => g.id === id)?.done;
      if (isNowDone) triggerConfetti();
      return updated;
    });
  }, []);

  const addDailyTask = useCallback((title: string) => {
    setDailyTasks((prev) => TaskService.addTask(prev, title, "daily"));
  }, []);

  const addWeeklyGoal = useCallback((title: string) => {
    setWeeklyGoals((prev) => TaskService.addWeeklyGoal(prev, title));
  }, []);

  const allTasks = [...dailyTasks, ...habitTasks];
  const progress = TaskService.calculateProgress(allTasks);
  const remainingCount = TaskService.getRemainingTasksCount(allTasks);

  const weeklyGoalsProgress =
    weeklyGoals.length > 0
      ? Math.round(
          (weeklyGoals.filter((g) => g.done).length / weeklyGoals.length) * 100,
        )
      : 0;
  const remainingGoalsCount = weeklyGoals.filter((g) => !g.done).length;

  return {
    dailyTasks,
    habitTasks,
    weeklyGoals,
    progress,
    weeklyGoalsProgress,
    remainingCount,
    remainingGoalsCount,
    toggleDailyTask,
    toggleHabitTask,
    toggleWeeklyGoal,
    addDailyTask,
    addWeeklyGoal,
  };
}
