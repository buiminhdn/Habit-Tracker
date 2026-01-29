"use client";

import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { useSettings } from "@/hooks/use-settings";
import { SETTINGS_SECTIONS } from "@/constants/settings.constant";
import { SettingItem, UserSettings } from "@/types/app.type";
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
import { SettingBilling } from "@/components/pages/settings/setting-billing";

export default function SettingsPage() {
  const { settings, isLoading, updateSettings } = useSettings();
  const [activeModal, setActiveModal] = useState<SettingItem | null>(null);

  const renderModalContent = () => {
    if (!activeModal) return null;

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
      case "billing":
        return <SettingBilling settings={settings} />;
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
      <header className="mb-12">
        <p className="text-3xl font-extrabold tracking-tight text-zinc-900">
          Settings
        </p>
        <p className="text-zinc-500 mt-1 text-sm">
          Configure your personal and workspace preferences.
        </p>
      </header>

      <div className="space-y-8 w-full">
        {SETTINGS_SECTIONS.map((section) => {
          const Icon = section.icon;
          return (
            <Card
              key={section.title}
              className="rounded-2xl shadow-sm overflow-hidden border-zinc-100"
            >
              <div className="px-6 py-4 bg-zinc-50/50 border-b border-zinc-100 flex items-center gap-3">
                <Icon size={16} className="text-zinc-400" />
                <p className="text-xs font-black uppercase tracking-widest text-zinc-500">
                  {section.title}
                </p>
              </div>
              <div className="divide-y divide-zinc-50">
                {section.items.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => setActiveModal(item)}
                    className="w-full text-left px-6 py-6 hover:bg-zinc-50/30 transition-all flex items-center justify-between group"
                  >
                    <div>
                      <p className="text-sm font-bold text-zinc-900 tracking-tight">
                        {item.label}
                      </p>
                      <p className="text-xs text-zinc-400 mt-1">{item.sub}</p>
                    </div>
                    <ChevronRight
                      size={16}
                      className="text-zinc-200 group-hover:text-zinc-400 translate-x-0 group-hover:translate-x-1 transition-all"
                    />
                  </button>
                ))}
              </div>
            </Card>
          );
        })}

        <div className="pt-10 border-t border-zinc-100 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="space-y-1">
            <p className="text-sm font-bold text-zinc-900 uppercase tracking-tight">
              Danger Zone
            </p>
            <p className="text-xs text-zinc-400">
              Irreversible actions regarding your account and data.
            </p>
          </div>
          <Button
            variant="outline"
            className="text-rose-500 hover:text-white hover:bg-rose-500 border-rose-100 px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest"
          >
            Delete Workspace Data
          </Button>
        </div>
      </div>

      <Dialog open={!!activeModal} onOpenChange={() => setActiveModal(null)}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-sm font-black uppercase tracking-widest">
              {activeModal?.label}
            </DialogTitle>
          </DialogHeader>
          {renderModalContent()}
        </DialogContent>
      </Dialog>
    </div>
  );
}
