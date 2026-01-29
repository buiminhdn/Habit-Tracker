"use client";

import React from "react";
import { UserSettings } from "@/types/app.type";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
        <div className="w-20 h-20 rounded-2xl bg-zinc-100 overflow-hidden border-2 border-zinc-50 grayscale shadow-sm">
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
        <div className="space-y-2">
          <Label className="text-xs font-black uppercase tracking-widest text-zinc-400">
            Display Name
          </Label>
          <Input
            value={settings.name}
            onChange={(e) => updateSettings({ name: e.target.value })}
            className="bg-zinc-50 border-zinc-100"
          />
        </div>
        <div className="space-y-2">
          <Label className="text-xs font-black uppercase tracking-widest text-zinc-400">
            Email
          </Label>
          <Input
            type="email"
            value={settings.email}
            onChange={(e) => updateSettings({ email: e.target.value })}
            className="bg-zinc-50 border-zinc-100"
          />
        </div>
      </div>
      <Button className="w-full mt-4" onClick={onClose}>
        Save Changes
      </Button>
    </div>
  );
}
