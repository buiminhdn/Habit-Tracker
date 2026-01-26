import { Habit } from "@/types/app.type";
import {
  INITIAL_MONTHLY_HABITS,
  MONTHLY_CONSISTENCY_DATA,
} from "@/constants/fake-data";

export const HabitService = {
  getMonthlyHabits: (): Habit[] => {
    return INITIAL_MONTHLY_HABITS;
  },

  getConsistencyData: () => {
    return MONTHLY_CONSISTENCY_DATA;
  },

  calculateOverallDiscipline: (habits: Habit[]): number => {
    if (habits.length === 0) return 0;
    const totalProgress = habits.reduce((acc, h) => acc + h.progress, 0);
    return Math.round(totalProgress / habits.length);
  },
};
