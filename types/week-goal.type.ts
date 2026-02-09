import { ISODateString, ISOTimestampString, UUID } from "./common.type";

export interface WeeklyGoal {
  id: UUID;
  user_id: UUID;
  title: string;
  week_start_date: ISODateString;
  is_completed: boolean;
  created_at: ISOTimestampString;
}
