import { LucideIcon } from "lucide-react";

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

export interface QuarterInfo {
  id: number;
  label: string;
  progress: number;
  completed: number;
  total: number;
}

export interface MonthlyData {
  name: string;
  value: number;
}

export interface Quote {
  text: string;
  author: string;
}

export interface UserSettings {
  name: string;
  email: string;
  avatar: string;
  syncEnabled: boolean;
  syncInterval: "Real-time" | "Daily" | "Weekly";
  theme: "Light" | "Dark" | "System";
  language: string;
  twoFactorEnabled: boolean;
  plan: string;
  billingAmount: string;
  paymentMethod: string;
}

export interface SettingItem {
  label: string;
  sub: string;
  id: string;
}

export interface SettingSection {
  title: string;
  icon: LucideIcon;
  items: SettingItem[];
}
