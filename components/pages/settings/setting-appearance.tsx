"use client";

import React from "react";
import { UserSettings } from "@/types/app.type";
import { Sun, Moon, Monitor, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SettingAppearanceProps {
  settings: UserSettings;
  updateSettings: (newSettings: Partial<UserSettings>) => Promise<void>;
}

const THEMES = [
  { id: "Light", label: "Light Mode", icon: Sun },
  { id: "Dark", label: "Dark Mode", icon: Moon },
  { id: "System", label: "System", icon: Monitor },
] as const;

export function SettingAppearance({
  settings,
  updateSettings,
}: SettingAppearanceProps) {
  return (
    <div className="space-y-3 pt-4">
      {THEMES.map((theme) => {
        const Icon = theme.icon;
        const isActive = settings.theme === theme.id;

        return (
          <Button
            key={theme.id}
            variant={isActive ? "default" : "outline"}
            className={`w-full justify-between h-14 px-4 rounded-lg transition-colors ${
              isActive
                ? "bg-black text-white border-black hover:bg-black/90"
                : "border-zinc-200 hover:bg-zinc-50"
            }`}
            onClick={() =>
              updateSettings({ theme: theme.id as UserSettings["theme"] })
            }
          >
            <div className="flex items-center gap-3">
              <div
                className={`p-2 rounded-lg ${
                  isActive
                    ? "bg-zinc-800 text-white"
                    : "bg-zinc-100 text-zinc-500"
                }`}
              >
                <Icon />
              </div>
              <span
                className={`text-sm font-medium ${
                  isActive ? "text-white" : "text-zinc-900"
                }`}
              >
                {theme.label}
              </span>
            </div>
            {isActive && <Check size={16} className="text-white" />}
          </Button>
        );
      })}
    </div>
  );
}
