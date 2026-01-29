import { useState, useEffect } from "react";
import { UserSettings } from "@/types/app.type";
import { SettingService } from "@/lib/services/setting.service";

export const useSettings = () => {
  const [settings, setSettings] = useState<UserSettings | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const data = await SettingService.getSettings();
        setSettings(data);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSettings();
  }, []);

  const updateSettings = async (newSettings: Partial<UserSettings>) => {
    if (!settings) return;
    const updated = await SettingService.updateSettings(newSettings);
    setSettings(updated);
  };

  return {
    settings,
    isLoading,
    updateSettings,
  };
};
