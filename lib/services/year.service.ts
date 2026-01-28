import {
  YEARLY_MONTHLY_DATA,
  YEARLY_STATUS_DISTRIBUTION,
  YEARLY_QUARTERS,
} from "@/constants/fake-data";
import { MonthlyData, StatusDistribution, QuarterInfo } from "@/types/app.type";

export const YearService = {
  getMonthlyData: (): MonthlyData[] => {
    return YEARLY_MONTHLY_DATA;
  },

  getStatusDistribution: (): StatusDistribution[] => {
    return YEARLY_STATUS_DISTRIBUTION;
  },

  getQuarters: (): QuarterInfo[] => {
    return YEARLY_QUARTERS;
  },

  calculateOverallProgress: (quarters: QuarterInfo[]): number => {
    if (quarters.length === 0) return 0;
    const completed = quarters.reduce((acc, q) => acc + q.completed, 0);
    const total = quarters.reduce((acc, q) => acc + q.total, 0);
    return Math.round((completed / total) * 100);
  },
};
