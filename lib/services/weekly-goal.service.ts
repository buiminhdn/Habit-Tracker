import { WeeklyGoal } from "@/types/week-goal.type";
import { SAMPLE_WEEKLY_GOALS } from "@/constants/fake-data";

export const WeeklyGoalService = {
  getWeeklyGoals: (weekStartDate?: string): WeeklyGoal[] => {
    if (!weekStartDate) return SAMPLE_WEEKLY_GOALS;
    return SAMPLE_WEEKLY_GOALS.filter(
      (g) => g.week_start_date === weekStartDate,
    );
  },

  toggleGoalStatus: (goals: WeeklyGoal[], id: string): WeeklyGoal[] => {
    return goals.map((g) =>
      g.id === id ? { ...g, is_completed: !g.is_completed } : g,
    );
  },

  addWeeklyGoal: (
    goals: WeeklyGoal[],
    title: string,
    weekStartDate: string,
  ): WeeklyGoal[] => {
    const newGoal: WeeklyGoal = {
      id: Date.now().toString(),
      user_id: "u1",
      title,
      is_completed: false,
      week_start_date: weekStartDate,
      created_at: new Date().toISOString(),
    };
    return [...goals, newGoal];
  },
};
