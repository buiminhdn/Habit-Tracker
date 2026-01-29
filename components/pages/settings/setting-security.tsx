"use client";

import React from "react";
import { UserSettings } from "@/types/app.type";
import { Lock } from "lucide-react";

interface SettingSecurityProps {
  settings: UserSettings;
  updateSettings: (newSettings: Partial<UserSettings>) => Promise<void>;
}

export function SettingSecurity({
  settings,
  updateSettings,
}: SettingSecurityProps) {
  return (
    <div className="space-y-4 pt-4">
      <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Lock size={18} className="text-zinc-400" />
          <span className="text-sm font-bold">Two-Factor Auth</span>
        </div>
        <div
          className={`w-10 h-6 rounded-full relative p-1 cursor-pointer transition-colors ${settings.twoFactorEnabled ? "bg-black" : "bg-zinc-200"}`}
          onClick={() =>
            updateSettings({
              twoFactorEnabled: !settings.twoFactorEnabled,
            })
          }
        >
          <div
            className={`w-4 h-4 bg-white rounded-full shadow-sm transition-all ${settings.twoFactorEnabled ? "ml-auto" : "ml-0"}`}
          />
        </div>
      </div>
      <button className="w-full text-left p-4 rounded-xl border border-zinc-100 hover:bg-zinc-50 transition-all text-sm font-bold">
        Change Password
      </button>
      <button className="w-full text-left p-4 rounded-xl border border-zinc-100 hover:bg-zinc-50 transition-all text-sm font-bold">
        Active Sessions
      </button>
    </div>
  );
}
