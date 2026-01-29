"use client";

import React from "react";
import { UserSettings } from "@/types/app.type";
import { Cloud } from "lucide-react";

interface SettingSyncProps {
  settings: UserSettings;
  updateSettings: (newSettings: Partial<UserSettings>) => Promise<void>;
}

export function SettingSync({ settings, updateSettings }: SettingSyncProps) {
  return (
    <div className="space-y-4 pt-4">
      <div className="p-5 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Cloud size={18} className="text-zinc-400" />
          <div>
            <p className="text-sm font-bold">Cloud Synchronization</p>
            <p className="text-xs text-zinc-400">
              Keep data consistent across all platforms
            </p>
          </div>
        </div>
        <div
          className={`w-10 h-6 rounded-full relative p-1 cursor-pointer transition-colors ${settings.syncEnabled ? "bg-black" : "bg-zinc-200"}`}
          onClick={() => updateSettings({ syncEnabled: !settings.syncEnabled })}
        >
          <div
            className={`w-4 h-4 bg-white rounded-full shadow-sm transition-all ${settings.syncEnabled ? "ml-auto" : "ml-0"}`}
          />
        </div>
      </div>
      <div className="p-4 border border-zinc-100 rounded-xl space-y-3">
        <p className="text-xs font-black uppercase text-zinc-400">
          Sync Interval
        </p>
        <div className="flex gap-2">
          {["Real-time", "Daily", "Weekly"].map((v) => (
            <button
              key={v}
              onClick={() =>
                updateSettings({
                  syncInterval: v as UserSettings["syncInterval"],
                })
              }
              className={`flex-1 py-2 text-xs font-black uppercase rounded-lg border transition-all ${settings.syncInterval === v ? "bg-black text-white border-black" : "bg-white text-zinc-400 border-zinc-100"}`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
