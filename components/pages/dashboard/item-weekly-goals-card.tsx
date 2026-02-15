"use client";

import React, { useMemo } from "react";
import { LayoutGrid } from "lucide-react";
import { GoalItem } from "./item-goal";
import { CreateObjectiveDialog } from "./dialog-objective";
import { useWeeklyGoals } from "@/hooks/use-weekly-goals";
import { getCurrentWeekStartDate, toISODateString } from "@/lib/utils";

interface WeeklyGoalsCardProps {
  currentDate: Date;
}

export function WeeklyGoalsCard({ currentDate }: WeeklyGoalsCardProps) {
  const currentMondayStr = useMemo(() => getCurrentWeekStartDate(), []);

  // Calculate the Monday of the week containing the selected date
  const selectedWeekMonday = useMemo(() => {
    const d = new Date(currentDate);
    const day = d.getDay();
    const diff = d.getDate() - day + (day === 0 ? -6 : 1);
    const monday = new Date(d.getFullYear(), d.getMonth(), d.getDate());
    monday.setDate(diff);
    return toISODateString(monday);
  }, [currentDate]);

  const isPastWeek = selectedWeekMonday < currentMondayStr;

  const { weeklyGoals, toggleWeeklyGoal, addWeeklyGoal } =
    useWeeklyGoals(selectedWeekMonday);

  return (
    <section className="bg-zinc-950 border border-zinc-900 rounded-xl p-8 shadow-xs h-fit">
      <div className="flex justify-between mb-8 gap-4">
        <div className="flex items-center gap-4">
          <div className="shrink-0 w-10 h-10 rounded-xl bg-white/20 border border-zinc-800 flex items-center justify-center text-white">
            <LayoutGrid size={20} />
          </div>
          <div>
            <p className="text-lg font-bold font-heading text-white uppercase">
              Weekly Goals
            </p>
          </div>
        </div>
        {!isPastWeek && (
          <CreateObjectiveDialog
            onAdd={addWeeklyGoal}
            triggerLabel="New Goal"
            submitLabel="Set Goal"
          />
        )}
      </div>

      <div className="space-y-2">
        {weeklyGoals.length > 0 ? (
          weeklyGoals.map((goal) => (
            <GoalItem
              key={goal.id}
              goal={goal}
              onToggle={toggleWeeklyGoal}
              disabled={isPastWeek}
            />
          ))
        ) : (
          <div className="py-8 text-center border-2 border-dashed border-zinc-800 rounded-md bg-zinc-900/50">
            <p className="text-zinc-500 font-medium text-sm">
              {isPastWeek
                ? "No goals were set for this week"
                : "Add your first goal this week"}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
