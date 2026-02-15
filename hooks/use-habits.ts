import { useMemo } from "react";
import { HabitService } from "@/lib/services/habit.service";
import { getCurrentYear } from "@/lib/utils";

export function useHabits(
  month: number = new Date().getMonth() + 1,
  year: number = getCurrentYear(),
) {
  const habits = useMemo(
    () => HabitService.getMonthlyHabits(month, year),
    [month, year],
  );

  const consistencyData = useMemo(
    () => HabitService.getConsistencyData(month, year),
    [month, year],
  );

  const weeklyProgress = useMemo(
    () => HabitService.getWeeklyProgress(month, year),
    [month, year],
  );

  const overallDiscipline = useMemo(
    () => HabitService.calculateOverallDiscipline(habits),
    [habits],
  );

  const habitsOverall = useMemo(
    () => HabitService.getHabitsWithOverallProgress(),
    [],
  );

  return {
    habits,
    habitsOverall,
    consistencyData,
    weeklyProgress,
    overallDiscipline,
  };
}
