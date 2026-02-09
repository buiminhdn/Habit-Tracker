import { ISOTimestampString, UUID } from "./common.type";

// users
export interface User {
  id: UUID;
  email: string | null;
  name: string | null;
  avatar: string | null;
  created_at: ISOTimestampString;
}
