import { useState, useMemo } from "react";
import { YearService } from "@/lib/services/year.service";

export function useYear() {
  const [monthlyData] = useState(() => YearService.getMonthlyData());
  const [statusDistribution] = useState(() => YearService.getStatusDistribution());
  const [quarters] = useState(() => YearService.getQuarters());

  const overallProgress = useMemo(
    () => YearService.calculateOverallProgress(quarters),
    [quarters]
  );

  return {
    monthlyData,
    statusDistribution,
    quarters,
    overallProgress,
  };
}
