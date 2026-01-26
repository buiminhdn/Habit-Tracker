import { useState, useMemo } from "react";
import { HabitService } from "@/lib/services/habit.service";

export function useHabits() {
  const [habits, setHabits] = useState(() => HabitService.getMonthlyHabits());
  const [consistencyData] = useState(() => HabitService.getConsistencyData());

  const overallDiscipline = useMemo(
    () => HabitService.calculateOverallDiscipline(habits),
    [habits],
  );

  return {
    habits,
    consistencyData,
    overallDiscipline,
  };
}
