import { Github, Linkedin, Twitter } from "lucide-react";
import { getCurrentYear } from "@/lib/utils";

const FOOTER_LINKS = [
  {
    title: "Product",
    links: ["Roadmaps", "Tactics", "Momentum", "Analytics"],
  },
  {
    title: "Company",
    links: ["The Manifesto", "Changelog", "Privacy Policy", "Terms of Service"],
  },
  {
    title: "Resources",
    links: ["Docs", "API Reference", "Community", "Support"],
  },
];

function Footer() {
  return (
    <footer className="mt-20 border-t border-zinc-100 px-6 pb-16 font-heading lg:mt-40">
      <div className="mx-auto max-w-7xl pt-12 lg:pt-24">
        <div className="mb-12 grid grid-cols-1 gap-12 lg:mb-24 lg:grid-cols-12 lg:gap-20">
          <div className="col-span-1 space-y-8 lg:col-span-6">
            <div className="flex items-center gap-4">
              <img
                src="/icons/logo.svg"
                alt="Logo"
                className="size-10 object-contain"
              />
              <span className="text-xl font-black uppercase tracking-tighter lg:text-2xl">
                Shape Your Days<span className="text-emerald-400">.</span>
              </span>
            </div>
            <p className="max-w-sm font-sans text-base font-medium leading-relaxed text-zinc-500 lg:text-lg">
              Building the infrastructure for intentional, high-impact growth.
              Reclaim your focus and command your performance.
            </p>
          </div>

          <div className="col-span-1 grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-6 lg:flex lg:justify-end lg:gap-24">
            {FOOTER_LINKS.map((group) => (
              <div key={group.title} className="space-y-6 lg:space-y-8">
                <p className="text-xs font-black uppercase tracking-widest text-zinc-900 lg:text-xs">
                  {group.title}
                </p>
                <ul className="space-y-3 font-sans text-xs lg:space-y-4 lg:text-sm">
                  {group.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="font-semibold text-zinc-400 transition-colors hover:text-black"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-8 border-t border-zinc-50 pt-12 lg:flex-row lg:gap-0">
          <div className="flex flex-col items-center gap-6 lg:flex-row">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 font-sans text-center lg:text-xs">
              © {getCurrentYear()} Shape Your Days. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-zinc-400 transition-colors duration-300 hover:text-black"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="size-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 lg:text-xs">
              Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
