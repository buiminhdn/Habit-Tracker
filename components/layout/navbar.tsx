"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-700 ease-in-out ${scrolled ? "bg-white/80 backdrop-blur-xl border-b border-zinc-200 py-4" : "bg-transparent py-6"}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/icons/logo.svg" alt="Logo" className="w-14" />
          <p className="font-semibold text-lg font-heading uppercase">
            Shape Your Days
          </p>
        </div>

        <div className="flex items-center gap-14">
          {["Capabilities", "Framework", "Performance"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs uppercase tracking-widest font-semibold text-zinc-400 hover:text-black transition-all duration-300 relative group"
            >
              {item}
              <span className="absolute -bottom-2 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <div className="flex gap-2">
          <Button variant="ghost" className="py-5 px-6 font-bold text-xs">
            SIGN IN
          </Button>
          <Button variant="default" className="py-5 px-6 font-bold text-xs">
            GET STARTED
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
