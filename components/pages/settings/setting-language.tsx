"use client";

import React from "react";
import { UserSettings } from "@/types/app.type";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface SettingLanguageProps {
  settings: UserSettings;
  updateSettings: (newSettings: Partial<UserSettings>) => Promise<void>;
}

const LANGUAGES = [
  {
    code: "en",
    label: "English (US)",
    description: "United States",
    flag: "/images/flag-us.png",
  },
  {
    code: "vi",
    label: "Tiếng Việt",
    description: "Việt Nam",
    flag: "/images/flag-vn.png",
  },
];

export function SettingLanguage({
  settings,
  updateSettings,
}: SettingLanguageProps) {
  return (
    <div className="pt-4">
      <RadioGroup
        value={settings.language}
        onValueChange={(value) => updateSettings({ language: value })}
      >
        {LANGUAGES.map((lang) => (
          <FieldLabel
            key={lang.code}
            htmlFor={`lang-${lang.code}`}
            className="cursor-pointer"
          >
            <Field orientation="horizontal">
              <div className="flex items-center gap-4 flex-1">
                <img
                  src={lang.flag}
                  alt={lang.label}
                  className="w-7 h-7 rounded-full object-cover"
                />
                <FieldContent>
                  <FieldTitle className="text-sm font-bold text-zinc-900">
                    {lang.label}
                  </FieldTitle>
                  <FieldDescription className="text-xs text-zinc-500">
                    {lang.description}
                  </FieldDescription>
                </FieldContent>
              </div>
              <RadioGroupItem value={lang.code} id={`lang-${lang.code}`} />
            </Field>
          </FieldLabel>
        ))}
      </RadioGroup>
    </div>
  );
}
