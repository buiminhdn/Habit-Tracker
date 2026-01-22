"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = ["Capabilities", "Framework", "Performance"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full border-b border-transparent transition-all duration-700 ease-in-out",
        scrolled || isMenuOpen
          ? "border-zinc-200 bg-white/80 py-4 backdrop-blur-xl"
          : "py-6",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <img src="/icons/logo.svg" alt="Logo" className="w-10 md:w-12" />
          <span className="md:hidden lg:block font-heading text-lg font-semibold uppercase md:text-xl">
            Shape Your Days
          </span>
        </div>

        <nav className="hidden items-center gap-8 lg:gap-14 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="group relative text-xs font-semibold uppercase tracking-widest text-zinc-500 transition-colors duration-300 hover:text-black"
            >
              {item}
              <span className="absolute -bottom-2 left-0 h-px w-0 bg-black transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden gap-2 tracking-wide md:flex">
          <Button variant="ghost" className="px-6 py-5 text-xs font-bold">
            SIGN IN
          </Button>
          <Button className="px-6 py-5 text-xs font-bold">GET STARTED</Button>
        </div>

        <button
          className="text-zinc-600 hover:text-black md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "absolute top-full left-0 w-full overflow-hidden border-b border-zinc-200 bg-white transition-all duration-300 ease-in-out md:hidden",
          isMenuOpen
            ? "max-h-screen opacity-100 py-8"
            : "max-h-0 opacity-0 py-0",
        )}
      >
        <div className="flex flex-col items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-semibold uppercase tracking-widest text-zinc-500 transition-colors hover:text-black"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="flex w-full flex-col gap-3 px-8 pt-4">
            <Button
              variant="outline"
              className="w-full py-6 text-xs font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              SIGN IN
            </Button>
            <Button
              className="w-full py-6 text-xs font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              GET STARTED
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
