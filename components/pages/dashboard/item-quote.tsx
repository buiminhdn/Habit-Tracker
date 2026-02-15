"use client";

import React, { useEffect, useState } from "react";
import { QuoteIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "@/types/app.type";
import { QUOTES } from "@/constants/fake-data";

export function QuoteCard() {
  const [quote, setQuote] = useState<Quote>(QUOTES[0]);

  useEffect(() => {
    const pickRandom = () => {
      setQuote(QUOTES[Math.floor(Math.random() * QUOTES.length)]);
    };

    const timer = setTimeout(pickRandom, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Card className="group border-zinc-200 shadow-xs bg-white">
      <CardContent>
        <div className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105 group-hover:rotate-6">
          <QuoteIcon size={16} className="text-white" />
        </div>
        <p className="mt-6 text-xl font-medium leading-relaxed text-zinc-800 tracking-tight italic">
          &quot;{quote.text}&quot;
        </p>
        <p className="mt-4 text-xs font-bold uppercase tracking-widest text-zinc-400">
          — {quote.author}
        </p>
      </CardContent>
    </Card>
  );
}
