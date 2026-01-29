"use client";

import React from "react";
import { UserSettings } from "@/types/app.type";
import { CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SettingBillingProps {
  settings: UserSettings;
}

export function SettingBilling({ settings }: SettingBillingProps) {
  return (
    <div className="space-y-6 pt-4">
      <div className="p-5 rounded-2xl bg-black text-white">
        <p className="text-xs font-black uppercase tracking-widest text-zinc-500 mb-1">
          Current Plan
        </p>
        <p className="text-xl font-black">{settings.plan}</p>
        <p className="text-xs text-zinc-400 mt-4">{settings.billingAmount}</p>
        <div className="mt-6 flex gap-2">
          <Button
            variant="secondary"
            size="sm"
            className="flex-1 text-xs font-black uppercase"
          >
            Manage
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="flex-1 text-xs font-black uppercase text-white hover:text-black"
          >
            Invoices
          </Button>
        </div>
      </div>
      <div className="space-y-3">
        <p className="text-xs font-black uppercase text-zinc-400">
          Payment Method
        </p>
        <div className="flex items-center justify-between p-4 border border-zinc-100 rounded-xl">
          <div className="flex items-center gap-3">
            <CreditCard size={18} className="text-zinc-400" />
            <span className="text-sm font-bold">{settings.paymentMethod}</span>
          </div>
          <button className="text-xs font-black text-zinc-400 hover:text-black">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}
