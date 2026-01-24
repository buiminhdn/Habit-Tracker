export enum RootView {
  LANDING = "LANDING",
  LOGIN = "LOGIN",
  SIGNUP = "SIGNUP",
  DASHBOARD = "DASHBOARD",
}

export enum AppView {
  DAY = "DAY",
  YEAR = "YEAR",
  MONTH = "MONTH",
  WEEK = "WEEK",
  REFLECTION = "REFLECTION",
  SETTING = "SETTING",
}

export interface Goal {
  id: string;
  title: string;
  status: "DONE" | "IN_PROGRESS" | "WAITING";
  progress: number;
}

export interface Habit {
  id: string;
  title: string;
  status: "OPTIMAL" | "STABLE" | "NEED_FOCUS";
  history: boolean[]; // 31 days
  progress: number;
}

export interface ReflectionEntry {
  id: string;
  question: string;
  answer: string;
  type: "YEAR" | "MONTH" | "DAY";
  period: string;
}

export interface QuarterInfo {
  id: number;
  label: string;
  progress: number;
  completed: number;
  total: number;
}

export interface Task {
  id: number;
  title: string;
  done: boolean;
  type?: "daily" | "habit";
}

export interface Quote {
  text: string;
  author: string;
}
