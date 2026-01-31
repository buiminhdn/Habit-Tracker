"use client";

import React from "react";
import { UserSettings } from "@/types/app.type";
import { Cloud } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

interface SettingSyncProps {
  settings: UserSettings;
  updateSettings: (newSettings: Partial<UserSettings>) => Promise<void>;
}

export function SettingSync({ settings, updateSettings }: SettingSyncProps) {
  return (
    <div className="space-y-4 pt-4">
      <div className="p-5 rounded-lg bg-zinc-50 border border-zinc-200 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Cloud size={22} className="text-emerald-500" />
          <div>
            <p className="text-sm font-semibold text-emerald-500">
              Cloud Synchronization
            </p>
            <p className="text-xs mt-1 text-zinc-500">
              Keep data consistent across all platforms
            </p>
          </div>
        </div>
        <Switch
          checked={settings.syncEnabled}
          onCheckedChange={(checked) =>
            updateSettings({ syncEnabled: checked })
          }
        />
      </div>

      <div className="p-5 border border-zinc-200 rounded-lg space-y-3">
        <p className="text-xs font-bold uppercase text-zinc-500 tracking-widest">
          Sync Interval
        </p>
        <div className="flex gap-2">
          {["Real-time", "Daily", "Weekly"].map((v) => (
            <Button
              key={v}
              variant={settings.syncInterval === v ? "default" : "outline"}
              onClick={() =>
                updateSettings({
                  syncInterval: v as UserSettings["syncInterval"],
                })
              }
              className={`flex-1 text-xs font-bold uppercase ${
                settings.syncInterval !== v ? "text-zinc-400" : ""
              }`}
            >
              {v}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
