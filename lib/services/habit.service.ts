import { HabitWithStats } from "@/types/habit.type";
import {
  INITIAL_MONTHLY_HABITS,
  INITIAL_HABIT_LOGS,
} from "@/constants/fake-data";
import { getDaysInMonth } from "../utils";

export const HabitService = {
  getMonthlyHabits: (month: number, year: number): HabitWithStats[] => {
    const daysInMonth = getDaysInMonth(month, year);
    const firstDay = new Date(year, month - 1, 1);
    const lastDay = new Date(year, month - 1, daysInMonth);

    // Pre-calculate completion set for O(1) lookup
    const completionSet = new Set(
      INITIAL_HABIT_LOGS.map((log) => `${log.habit_id}:${log.log_date}`),
    );

    return INITIAL_MONTHLY_HABITS.filter((habit) => {
      const start = new Date(habit.start_date);
      const end = habit.end_date ? new Date(habit.end_date) : null;
      return start <= lastDay && (!end || end >= firstDay);
    }).map((habit) => {
      const history: boolean[] = [];
      let completedCount = 0;

      for (let day = 1; day <= daysInMonth; day++) {
        const dateStr = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
        const isCompleted = completionSet.has(`${habit.id}:${dateStr}`);
        history.push(isCompleted);
        if (isCompleted) completedCount++;
      }

      return {
        ...habit,
        history,
        progress: Math.round((completedCount / daysInMonth) * 100),
      } as HabitWithStats;
    });
  },

  getConsistencyData: (month: number, year: number) => {
    const activeHabits = HabitService.getMonthlyHabits(month, year);
    const daysInMonth = getDaysInMonth(month, year);
    const completionSet = new Set(
      INITIAL_HABIT_LOGS.map((log) => `${log.habit_id}:${log.log_date}`),
    );

    return Array.from({ length: daysInMonth }, (_, i) => {
      const day = i + 1;
      const dateStr = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
      const completedOnDay = activeHabits.filter((h) =>
        completionSet.has(`${h.id}:${dateStr}`),
      ).length;

      return {
        day,
        value:
          activeHabits.length > 0
            ? Math.round((completedOnDay / activeHabits.length) * 100)
            : 0,
      };
    });
  },

  getWeeklyProgress: (month: number, year: number) => {
    const habits = HabitService.getMonthlyHabits(month, year);
    if (habits.length === 0) return [];

    const daysInMonth = getDaysInMonth(month, year);

    const completionSet = new Set(
      INITIAL_HABIT_LOGS.map((log) => `${log.habit_id}:${log.log_date}`),
    );

    // Split month into exactly 4 weeks evenly
    const weeks = Array.from({ length: 4 }, (_, i) => ({
      start: Math.floor((i * daysInMonth) / 4) + 1,
      end: Math.floor(((i + 1) * daysInMonth) / 4),
    }));

    return weeks.map((week, index) => {
      let completedCount = 0;
      const totalPoints = (week.end - week.start + 1) * habits.length;

      for (let d = week.start; d <= week.end; d++) {
        const dateStr = `${year}-${String(month).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
        habits.forEach((h) => {
          if (completionSet.has(`${h.id}:${dateStr}`)) {
            completedCount++;
          }
        });
      }

      const progress =
        totalPoints > 0 ? Math.round((completedCount / totalPoints) * 100) : 0;

      return {
        id: index + 1,
        label: `Week 0${index + 1}`,
        progress,
      };
    });
  },

  getHabitsWithOverallProgress: (): HabitWithStats[] => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const completionSet = new Set(
      INITIAL_HABIT_LOGS.map((log) => `${log.habit_id}:${log.log_date}`),
    );

    return INITIAL_MONTHLY_HABITS.map((habit) => {
      const start = new Date(habit.start_date);
      start.setHours(0, 0, 0, 0);

      const end = habit.end_date ? new Date(habit.end_date) : today;
      if (end > today) {
        end.setTime(today.getTime());
      }
      end.setHours(0, 0, 0, 0);

      // Calculate total days from start up to end (inclusive)
      const diffTime = Math.max(0, end.getTime() - start.getTime());
      const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;

      let completedCount = 0;
      for (let i = 0; i < totalDays; i++) {
        const d = new Date(start);
        d.setDate(start.getDate() + i);
        const dateStr = d.toISOString().split("T")[0];
        if (completionSet.has(`${habit.id}:${dateStr}`)) {
          completedCount++;
        }
      }

      return {
        ...habit,
        history: [], // Not needed for yearly view usually
        progress: Math.round((completedCount / totalDays) * 100),
      } as HabitWithStats;
    });
  },

  calculateOverallDiscipline: (habits: HabitWithStats[]): number => {
    if (habits.length === 0) return 0;
    const totalProgress = habits.reduce((acc, h) => acc + h.progress, 0);
    return Math.round(totalProgress / habits.length);
  },
};
