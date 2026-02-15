import {
  INITIAL_MONTHLY_HABITS,
  INITIAL_HABIT_LOGS,
  SAMPLE_WEEKLY_GOALS,
} from "@/constants/fake-data";
import { MonthlyData, QuarterInfo } from "@/types/app.type";
import { getCurrentWeekStartDate } from "../utils";

export const YearService = {
  getMonthlyData: (): MonthlyData[] => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const currentYear = today.getFullYear();

    const completionSet = new Set(
      INITIAL_HABIT_LOGS.map((log) => `${log.habit_id}:${log.log_date}`),
    );

    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    return monthNames.map((name, monthIndex) => {
      let totalExpected = 0;
      let actualCompleted = 0;

      const daysInMonth = new Date(currentYear, monthIndex + 1, 0).getDate();

      for (let day = 1; day <= daysInMonth; day++) {
        const currentDate = new Date(currentYear, monthIndex, day);
        currentDate.setHours(0, 0, 0, 0);

        if (currentDate > today) continue;

        const dateStr = currentDate.toISOString().split("T")[0];

        INITIAL_MONTHLY_HABITS.forEach((habit) => {
          const start = new Date(habit.start_date);
          start.setHours(0, 0, 0, 0);
          const end = habit.end_date ? new Date(habit.end_date) : null;
          if (end) end.setHours(0, 0, 0, 0);

          if (currentDate >= start && (!end || currentDate <= end)) {
            totalExpected++;
            if (completionSet.has(`${habit.id}:${dateStr}`)) {
              actualCompleted++;
            }
          }
        });
      }

      const percentage =
        totalExpected > 0
          ? Math.round((actualCompleted / totalExpected) * 100)
          : 0;

      return {
        name,
        value: percentage,
      };
    });
  },

  getQuarters: (): QuarterInfo[] => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const currentYear = today.getFullYear();

    const completionSet = new Set(
      INITIAL_HABIT_LOGS.map((log) => `${log.habit_id}:${log.log_date}`),
    );

    const quartersConfig = [
      { id: 1, label: `Q1 ${currentYear}`, months: [0, 1, 2] },
      { id: 2, label: `Q2 ${currentYear}`, months: [3, 4, 5] },
      { id: 3, label: `Q3 ${currentYear}`, months: [6, 7, 8] },
      { id: 4, label: `Q4 ${currentYear}`, months: [9, 10, 11] },
    ];

    return quartersConfig.map((q) => {
      let totalExpected = 0;
      let actualCompleted = 0;

      q.months.forEach((monthIndex) => {
        const daysInMonth = new Date(currentYear, monthIndex + 1, 0).getDate();

        for (let day = 1; day <= daysInMonth; day++) {
          const currentDate = new Date(currentYear, monthIndex, day);
          currentDate.setHours(0, 0, 0, 0);

          if (currentDate > today) continue;

          const dateStr = currentDate.toISOString().split("T")[0];

          INITIAL_MONTHLY_HABITS.forEach((habit) => {
            const start = new Date(habit.start_date);
            start.setHours(0, 0, 0, 0);
            const end = habit.end_date ? new Date(habit.end_date) : null;
            if (end) end.setHours(0, 0, 0, 0);

            if (currentDate >= start && (!end || currentDate <= end)) {
              totalExpected++;
              if (completionSet.has(`${habit.id}:${dateStr}`)) {
                actualCompleted++;
              }
            }
          });
        }
      });

      const progress =
        totalExpected > 0
          ? Math.round((actualCompleted / totalExpected) * 100)
          : 0;

      return {
        id: q.id,
        label: q.label,
        progress: progress,
        completed: actualCompleted,
        total: totalExpected,
      };
    });
  },

  calculateOverallProgress: (quarters: QuarterInfo[]): number => {
    if (quarters.length === 0) return 0;
    const completed = quarters.reduce((acc, q) => acc + q.completed, 0);
    const total = quarters.reduce((acc, q) => acc + q.total, 0);
    return Math.round((completed / total) * 100);
  },
};
