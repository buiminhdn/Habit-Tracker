"use client";

import React from "react";
import { UserSettings } from "@/types/app.type";

interface SettingAppearanceProps {
  settings: UserSettings;
  updateSettings: (newSettings: Partial<UserSettings>) => Promise<void>;
}

export function SettingAppearance({
  settings,
  updateSettings,
}: SettingAppearanceProps) {
  return (
    <div className="space-y-4 pt-4">
      {["Light", "Dark", "System"].map((theme) => (
        <button
          key={theme}
          className="w-full flex items-center justify-between p-4 rounded-xl border border-zinc-100 hover:border-black transition-all"
          onClick={() =>
            updateSettings({ theme: theme as UserSettings["theme"] })
          }
        >
          <span className="text-sm font-bold">{theme} Mode</span>
          <div
            className={`w-4 h-4 rounded-full border-2 ${settings.theme === theme ? "border-black bg-black" : "border-zinc-200"}`}
          />
        </button>
      ))}
    </div>
  );
}
