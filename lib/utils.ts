import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatCycleDate(date: Date) {
  const month = date.toLocaleDateString("en-US", { month: "short" });
  const year = date.getFullYear();
  return `${month} ${year} Cycle`;
}

export function toISODateString(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export const getWeekStartDate = (month: Date, weekNum: number) => {
  const firstDay = new Date(month.getFullYear(), month.getMonth(), 1);
  const dayOfWeek = firstDay.getDay();
  const diff = dayOfWeek === 1 ? 0 : dayOfWeek === 0 ? 1 : 8 - dayOfWeek;
  const firstMonday = new Date(firstDay);
  firstMonday.setDate(firstDay.getDate() + diff);

  const targetMonday = new Date(firstMonday);
  targetMonday.setDate(firstMonday.getDate() + (weekNum - 1) * 7);

  return toISODateString(targetMonday);
};

export function getCurrentWeekStartDate() {
  const now = new Date();
  const day = now.getDay();
  const diff = now.getDate() - day + (day === 0 ? -6 : 1);
  const monday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  monday.setDate(diff);
  return toISODateString(monday);
}

export function getInitialWeekData() {
  const now = new Date();
  const currentMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const currentMonday = getCurrentWeekStartDate();

  for (let i = 0; i < 4; i++) {
    if (getWeekStartDate(currentMonth, i + 1) === currentMonday) {
      return { month: currentMonth, index: i };
    }
  }

  return { month: currentMonth, index: 0 };
}
