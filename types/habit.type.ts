import { ISODateString, ISOTimestampString, UUID } from "./common.type";

// habits
export interface Habit {
  id: UUID;
  user_id: UUID;
  title: string;
  start_date: ISODateString;
  end_date: ISODateString | null;
  created_at: ISOTimestampString;
}

// habit_logs
export interface HabitLog {
  id: UUID;
  habit_id: UUID;
  log_date: ISODateString;
  created_at: ISOTimestampString;
}

export interface HabitWithStats extends Habit {
  history: boolean[];
  progress: number;
}
