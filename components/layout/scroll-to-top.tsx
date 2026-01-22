"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let rafId: number | null = null;

    const onScroll = () => {
      if (rafId) return;

      rafId = requestAnimationFrame(() => {
        setVisible(window.scrollY > 500);
        rafId = null;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <Button
      size="icon"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`
        fixed bottom-8 right-8 z-50 h-12 w-12 rounded-full
        bg-zinc-900 text-white shadow-lg transition-all duration-300
        hover:bg-zinc-800
        ${visible ? "opacity-100 scale-100" : "pointer-events-none opacity-0 scale-90 translate-y-4"}
      `}
    >
      <ChevronUp className="h-6 w-6" />
    </Button>
  );
}
