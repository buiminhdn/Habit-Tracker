import { User, Palette, Shield } from "lucide-react";
import { SettingSection } from "@/types/app.type";

export const SETTINGS_SECTIONS: SettingSection[] = [
  {
    title: "Profile",
    icon: User,
    items: [
      {
        id: "personal",
        label: "Personal Information",
        sub: "Update your name, photo, and details",
      },
      {
        id: "sync",
        label: "Sync Preferences",
        sub: "Manage your strategic backup",
      },
    ],
  },
  {
    title: "Experience",
    icon: Palette,
    items: [
      {
        id: "appearance",
        label: "Appearance",
        sub: "Switch between light, dark, and auto modes",
      },
      {
        id: "language",
        label: "Language",
        sub: "Select your preferred interface language",
      },
    ],
  },
  {
    title: "Account",
    icon: Shield,
    items: [
      {
        id: "security",
        label: "Security",
        sub: "Two-factor authentication and passwords",
      },
      // {
      //   id: "billing",
      //   label: "Billing",
      //   sub: "Manage your Grow Premium subscription",
      // },
    ],
  },
];
