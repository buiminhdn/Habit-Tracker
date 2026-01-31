"use client";

import React from "react";
import { UserSettings } from "@/types/app.type";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel, FieldContent } from "@/components/ui/field";

interface SettingPersonalProps {
  settings: UserSettings;
  updateSettings: (newSettings: Partial<UserSettings>) => Promise<void>;
  onClose: () => void;
}

export function SettingPersonal({
  settings,
  updateSettings,
  onClose,
}: SettingPersonalProps) {
  return (
    <div className="space-y-6 pt-4">
      <div className="flex flex-col items-center gap-4 mb-6">
        <div className="w-20 h-20 rounded-2xl bg-zinc-100 overflow-hidden border-2 border-zinc-50 shadow-sm">
          <img
            src={settings.avatar}
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <button className="text-xs font-black uppercase tracking-widest text-zinc-400 hover:text-black transition-colors">
          Change Photo
        </button>
      </div>
      <div className="space-y-4">
        <Field>
          <FieldLabel
            htmlFor="name"
            className="text-xs font-bold uppercase tracking-widest text-zinc-500"
          >
            Display Name
          </FieldLabel>
          <FieldContent>
            <Input
              id="name"
              value={settings.name}
              onChange={(e) => updateSettings({ name: e.target.value })}
              className="py-5 rounded-lg"
            />
          </FieldContent>
        </Field>
        <Field>
          <FieldLabel
            htmlFor="email"
            className="text-xs font-bold uppercase tracking-widest text-zinc-500"
          >
            Email
          </FieldLabel>
          <FieldContent>
            <Input
              id="email"
              type="email"
              value={settings.email}
              onChange={(e) => updateSettings({ email: e.target.value })}
              className="py-5 rounded-lg"
            />
          </FieldContent>
        </Field>
      </div>
      <Button className="w-full py-5.5 rounded-lg" onClick={onClose}>
        Save Changes
      </Button>
    </div>
  );
}
