"use client";

import React from "react";
import { UserSettings } from "@/types/app.type";
import { Lock } from "lucide-react";
import { Switch } from "@/components/ui/switch";

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
      <div className="p-4 rounded-lg bg-zinc-50 border border-zinc-200 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Lock size={18} className="text-zinc-400" />
          <span className="text-sm font-semibold">Two-Factor Auth</span>
        </div>
        <Switch
          checked={settings.twoFactorEnabled}
          onCheckedChange={(checked) =>
            updateSettings({ twoFactorEnabled: checked })
          }
        />
      </div>
      <button className="w-full text-left p-4 rounded-lg border border-zinc-200 hover:bg-zinc-50 text-sm font-semibold">
        Change Password
      </button>
      <button className="w-full text-left p-4 rounded-lg border border-zinc-200 hover:bg-zinc-50 text-sm font-semibold">
        Active Sessions
      </button>
    </div>
  );
}
