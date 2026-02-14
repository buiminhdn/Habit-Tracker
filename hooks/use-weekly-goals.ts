import { useState, useCallback, useEffect } from "react";
import { WeeklyGoal } from "@/types/week-goal.type";
import { WeeklyGoalService } from "@/lib/services/weekly-goal.service";
import { triggerConfetti } from "@/lib/confetti";

export function useWeeklyGoals(weekStartDate?: string) {
  const [weeklyGoals, setWeeklyGoals] = useState<WeeklyGoal[]>(() =>
    WeeklyGoalService.getWeeklyGoals(weekStartDate),
  );

  useEffect(() => {
    setWeeklyGoals(WeeklyGoalService.getWeeklyGoals(weekStartDate));
  }, [weekStartDate]);

  const toggleWeeklyGoal = useCallback((id: string) => {
    setWeeklyGoals((prev) => {
      const updated = WeeklyGoalService.toggleGoalStatus(prev, id);
      const isNowDone = updated.find((g) => g.id === id)?.is_completed;
      if (isNowDone) triggerConfetti();
      return updated;
    });
  }, []);

  const addWeeklyGoal = useCallback(
    (title: string) => {
      if (!weekStartDate) return;
      setWeeklyGoals((prev) =>
        WeeklyGoalService.addWeeklyGoal(prev, title, weekStartDate),
      );
    },
    [weekStartDate],
  );

  const weeklyGoalsProgress =
    weeklyGoals.length > 0
      ? Math.round(
          (weeklyGoals.filter((g) => g.is_completed).length /
            weeklyGoals.length) *
            100,
        )
      : 0;

  const remainingGoalsCount = weeklyGoals.filter((g) => !g.is_completed).length;

  return {
    weeklyGoals,
    weeklyGoalsProgress,
    remainingGoalsCount,
    toggleWeeklyGoal,
    addWeeklyGoal,
  };
}
