"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface MonthSelectItemProps {
  currentDate: Date;
  onChange: (date: Date) => void;
}

export function MonthSelectItem({
  currentDate,
  onChange,
}: MonthSelectItemProps) {
  const handlePrev = () => {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1,
      1,
    );
    onChange(newDate);
  };

  const handleNext = () => {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      1,
    );
    onChange(newDate);
  };

  const monthLabel = currentDate.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <Card className="border-zinc-200 shadow-xs py-4">
      <CardContent className="p-0 px-6">
        <div className="flex gap-2 items-center justify-between">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-zinc-600 hover:text-zinc-900"
            onClick={handlePrev}
          >
            <ChevronLeft size={16} />
          </Button>
          <span className="text-xs text-center font-bold text-zinc-900 uppercase tracking-widest truncate">
            {monthLabel}
          </span>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-zinc-600 hover:text-zinc-900"
            onClick={handleNext}
          >
            <ChevronRight size={16} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
