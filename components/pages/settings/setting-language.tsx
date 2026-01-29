"use client";

import React from "react";
import { UserSettings } from "@/types/app.type";
import { Check } from "lucide-react";

interface SettingLanguageProps {
  settings: UserSettings;
  updateSettings: (newSettings: Partial<UserSettings>) => Promise<void>;
}

export function SettingLanguage({
  settings,
  updateSettings,
}: SettingLanguageProps) {
  return (
    <div className="space-y-2 pt-4">
      {[
        { code: "en", label: "English (US)" },
        { code: "vi", label: "Tiếng Việt" },
        { code: "jp", label: "日本語" },
        { code: "fr", label: "Français" },
      ].map((lang) => (
        <button
          key={lang.code}
          className="w-full flex items-center justify-between p-4 rounded-xl border border-zinc-100 hover:border-zinc-200 transition-all"
          onClick={() => updateSettings({ language: lang.code })}
        >
          <span className="text-sm font-bold">{lang.label}</span>
          {settings.language === lang.code && (
            <Check size={14} className="text-black" />
          )}
        </button>
      ))}
    </div>
  );
}
