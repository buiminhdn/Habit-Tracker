"use client";

import React, { useState } from "react";
import { ChevronRight, AlertTriangle } from "lucide-react";
import { useSettings } from "@/hooks/use-settings";
import { SETTINGS_SECTIONS } from "@/constants/settings.constant";
import { SettingItem } from "@/types/app.type";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// Modal Components
import { SettingPersonal } from "@/components/pages/settings/setting-personal";
import { SettingSync } from "@/components/pages/settings/setting-sync";
import { SettingAppearance } from "@/components/pages/settings/setting-appearance";
import { SettingLanguage } from "@/components/pages/settings/setting-language";
import { SettingSecurity } from "@/components/pages/settings/setting-security";

export default function SettingsPage() {
  const { settings, updateSettings } = useSettings();
  const [activeModal, setActiveModal] = useState<SettingItem | null>(null);

  const renderModalContent = () => {
    if (!activeModal) return null;

    if (!settings) {
      return (
        <div className="flex items-center justify-center py-10">
          <div className="w-6 h-6 border-2 border-zinc-200 border-t-black rounded-full animate-spin" />
        </div>
      );
    }

    switch (activeModal.id) {
      case "personal":
        return (
          <SettingPersonal
            settings={settings}
            updateSettings={updateSettings}
            onClose={() => setActiveModal(null)}
          />
        );
      case "sync":
        return (
          <SettingSync settings={settings} updateSettings={updateSettings} />
        );
      case "appearance":
        return (
          <SettingAppearance
            settings={settings}
            updateSettings={updateSettings}
          />
        );
      case "language":
        return (
          <SettingLanguage
            settings={settings}
            updateSettings={updateSettings}
          />
        );
      case "security":
        return (
          <SettingSecurity
            settings={settings}
            updateSettings={updateSettings}
          />
        );
      default:
        return (
          <div className="py-10 text-center text-zinc-400 italic text-sm">
            This module is being optimized for your experience.
          </div>
        );
    }
  };

  return (
    <div className="pb-10">
      <header className="mb-10">
        <p className="text-3xl font-bold tracking-tight text-zinc-900 mb-1">
          Settings
        </p>
        <p className="text-zinc-500 mt-2 font-bold uppercase tracking-widest text-[10px]">
          Configure your personal and workspace preferences.
        </p>
      </header>

      <div className="space-y-8 w-full">
        {SETTINGS_SECTIONS.map((section) => {
          const Icon = section.icon;
          return (
            <div
              key={section.title}
              className="rounded-xl shadow-xs overflow-hidden border border-zinc-200"
            >
              <div className="px-6 py-4 bg-zinc-50 border-b border-zinc-200 flex items-center gap-3">
                <Icon size={20} className="text-zinc-500" />
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-600">
                  {section.title}
                </p>
              </div>
              <div className="divide-y divide-zinc-100 bg-white">
                {section.items.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => setActiveModal(item)}
                    className="w-full text-left px-6 py-6 hover:bg-zinc-50 flex items-center justify-between group"
                  >
                    <div>
                      <p className="text-sm font-bold text-zinc-900">
                        {item.label}
                      </p>
                      <p className="text-xs text-zinc-400 mt-1">{item.sub}</p>
                    </div>
                    <ChevronRight
                      size={16}
                      className="text-zinc-200 group-hover:text-zinc-600 translate-x-0 group-hover:translate-x-1 transition-all"
                    />
                  </button>
                ))}
              </div>
            </div>
          );
        })}

        <div className="rounded-xl shadow-xs overflow-hidden border border-rose-200">
          <div className="px-6 py-4 bg-rose-50 border-b border-rose-200 flex items-center gap-3">
            <AlertTriangle size={20} className="text-rose-500" />
            <p className="text-xs font-bold uppercase tracking-widest text-rose-600">
              Danger Zone
            </p>
          </div>
          <div className="p-6 bg-white flex gap-4 items-center justify-between">
            <div>
              <p className="text-sm font-bold text-zinc-900">
                Delete workspace
              </p>
              <p className="text-xs text-zinc-400 mt-1">
                Irreversible actions regarding your account and data.
              </p>
            </div>
            <Button
              variant="outline"
              className="text-rose-600 hover:text-white hover:bg-red-600 border-rose-100 rounded-sm text-xs font-bold uppercase tracking-widest"
            >
              Delete Workspace Data
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={!!activeModal} onOpenChange={() => setActiveModal(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-bold uppercase">
              {activeModal?.label}
            </DialogTitle>
          </DialogHeader>
          {renderModalContent()}
        </DialogContent>
      </Dialog>
    </div>
  );
}
