import { UserSettings } from "@/types/app.type";

const DEFAULT_SETTINGS: UserSettings = {
  name: "Alex Grow",
  email: "alex@growth.io",
  avatar:
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=160&h=160&fit=crop",
  syncEnabled: true,
  syncInterval: "Real-time",
  theme: "Light",
  language: "en",
  twoFactorEnabled: false,
  plan: "Grow Premium",
  billingAmount: "$120 / billed yearly",
  paymentMethod: "Visa •••• 4242",
};

export const SettingService = {
  getSettings: async (): Promise<UserSettings> => {
    // Simulate network delay
    return new Promise((resolve) => {
      setTimeout(() => resolve(DEFAULT_SETTINGS), 500);
    });
  },

  updateSettings: async (
    settings: Partial<UserSettings>,
  ): Promise<UserSettings> => {
    // In a real app, this would be an API call
    return new Promise((resolve) => {
      setTimeout(() => resolve({ ...DEFAULT_SETTINGS, ...settings }), 300);
    });
  },
};
