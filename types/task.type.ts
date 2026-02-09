import { ISODateString, ISOTimestampString, UUID } from "./common.type";

export interface Task {
  id: UUID;
  user_id: UUID;
  title: string;
  task_date: ISODateString;
  is_completed: boolean;
  created_at: ISOTimestampString;
}
