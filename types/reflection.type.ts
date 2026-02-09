import { ISODateString, ISOTimestampString, UUID } from "./common.type";

export type ReflectionType = "daily" | "weekly" | "monthly" | "yearly";

export interface Reflection {
  id: UUID;
  user_id: UUID;
  type: ReflectionType;
  target_date: ISODateString;
  content: string;
  created_at: ISOTimestampString;
}
