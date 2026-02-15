export const ROUTES = {
  PUBLIC: {
    HOME: "/",
    ABOUT: "/about",
    PRIVACY: "/privacy",
    DOCS: "/docs",
  },

  DASHBOARD: {
    DAILY: "/daily",
    MONTH: "/month",
    YEAR: "/year",
    REFLECTION: "/reflection",
    SETTINGS: "/settings",
  },

  AUTH: {
    LOGIN: "/login",
    SIGNUP: "/signup",
    FORGOT_PASSWORD: "/forgot-password",
    RESET_PASSWORD: "/reset-password",
  },
} as const;
