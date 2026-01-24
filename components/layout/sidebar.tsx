"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Target,
  Calendar,
  ListTodo,
  MessageSquare,
  Sun,
  LogOut,
  Settings,
} from "lucide-react";
import { ROUTES } from "@/constants/routes";
import { APP_NAME } from "@/constants/app.constant";
import { Button } from "../ui/button";

const navItems = [
  { href: ROUTES.DASHBOARD.DAILY, label: "Daily", icon: Sun },
  { href: ROUTES.DASHBOARD.WEEK, label: "Weekly", icon: ListTodo },
  { href: ROUTES.DASHBOARD.MONTH, label: "Monthly", icon: Calendar },
  { href: ROUTES.DASHBOARD.YEAR, label: "Yearly", icon: Target },
  {
    href: ROUTES.DASHBOARD.REFLECTION,
    label: "Reflection",
    icon: MessageSquare,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r border-zinc-200 flex flex-col justify-between py-8 px-4 h-full bg-white shrink-0">
      <div>
        {/* Logo */}
        <div className="mb-10 px-2 flex items-center gap-3">
          <img src="/icons/logo.svg" alt="Logo" className="w-8" />
          <div>
            <p className="font-heading font-bold uppercase">{APP_NAME}</p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
              Strategic Life OS
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200 group ${
                  isActive
                    ? "bg-black text-white shadow-sm"
                    : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900"
                }`}
              >
                <Icon
                  size={16}
                  className={
                    isActive
                      ? "text-white"
                      : "text-zinc-400 group-hover:text-zinc-900"
                  }
                />
                <span className="font-semibold text-xs">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer */}
      <div className="space-y-1">
        <Link
          href={ROUTES.DASHBOARD.SETTINGS}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200 group ${
            pathname === ROUTES.DASHBOARD.SETTINGS
              ? "bg-black text-white"
              : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900"
          }`}
        >
          <Settings size={16} />
          <span className="font-semibold text-xs">Settings</span>
        </Link>

        <div className="pt-6 border-t border-zinc-200 flex items-center justify-between px-2 mt-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-zinc-100 overflow-hidden border">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop"
                alt="User"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-black">Alex Grow</p>
              <p className="text-[8px] text-zinc-400 uppercase tracking-widest">
                Premium Plan
              </p>
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="text-zinc-400 hover:text-rose-500 hover:bg-rose-50"
          >
            <LogOut size={4} />
          </Button>
        </div>
      </div>
    </aside>
  );
}
