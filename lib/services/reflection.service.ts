import { ReflectionPrompt } from "@/types/reflection.type";
import {
  MONTHLY_REFLECTION_PROMPTS,
  YEARLY_REFLECTION_PROMPTS,
} from "@/constants/fake-data";

export const ReflectionService = {
  getMonthlyPrompts: (): ReflectionPrompt[] => {
    return MONTHLY_REFLECTION_PROMPTS;
  },

  getYearlyPrompts: (): ReflectionPrompt[] => {
    return YEARLY_REFLECTION_PROMPTS;
  },

  calculateCompletion: (prompts: ReflectionPrompt[]): number => {
    if (prompts.length === 0) return 0;
    const answered = prompts.filter((p) => p.answered).length;
    return Math.round((answered / prompts.length) * 100);
  },
};
