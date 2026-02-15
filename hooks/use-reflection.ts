import { useState, useCallback } from "react";
import { ReflectionPrompt, ReflectionType } from "@/types/reflection.type";
import { ReflectionService } from "@/lib/services/reflection.service";

export function useReflection() {
  const [monthlyPrompts, setMonthlyPrompts] = useState<ReflectionPrompt[]>(() =>
    ReflectionService.getMonthlyPrompts(),
  );
  const [yearlyPrompts, setYearlyPrompts] = useState<ReflectionPrompt[]>(() =>
    ReflectionService.getYearlyPrompts(),
  );

  const addPrompt = useCallback((type: ReflectionType, text: string) => {
    const newPrompt: ReflectionPrompt = {
      id: Date.now().toString(),
      text,
      answered: false,
    };

    if (type === "monthly") {
      setMonthlyPrompts((prev) => [...prev, newPrompt]);
    } else {
      setYearlyPrompts((prev) => [...prev, newPrompt]);
    }
  }, []);

  const removePrompt = useCallback((type: ReflectionType, id: string) => {
    if (type === "monthly") {
      setMonthlyPrompts((prev) => prev.filter((p) => p.id !== id));
    } else {
      setYearlyPrompts((prev) => prev.filter((p) => p.id !== id));
    }
  }, []);

  return {
    monthlyPrompts,
    yearlyPrompts,
    addPrompt,
    removePrompt,
  };
}
