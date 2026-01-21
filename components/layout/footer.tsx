"use client";

import { Github, Linkedin, Twitter } from "lucide-react";
import { motion, Variants } from "framer-motion";

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
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <footer className="mt-40 pb-16 px-6 border-t border-zinc-100">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-7xl mx-auto pt-24"
      >
        <div className="grid grid-cols-12 gap-20 mb-24 items-start">
          <motion.div variants={itemVariants} className="col-span-6 space-y-8">
            <div className="flex items-center gap-4">
              <img
                src="/icons/logo.svg"
                alt="Logo"
                className="size-10 object-contain"
              />
              <span className="text-2xl font-black tracking-tighter uppercase font-heading">
                Shape Your Days<span className="text-emerald-400">.</span>
              </span>
            </div>
            <p className="text-zinc-500 font-medium text-lg leading-relaxed max-w-sm font-sans">
              Building the infrastructure for intentional, high-impact growth.
              Reclaim your focus and command your performance.
            </p>
          </motion.div>

          <div className="col-span-6 flex justify-end gap-24">
            {FOOTER_LINKS.slice(0, 2).map((group) => (
              <motion.div
                variants={itemVariants}
                key={group.title}
                className="space-y-8"
              >
                <p className="text-xs font-black uppercase tracking-widest text-zinc-900 font-heading">
                  {group.title}
                </p>
                <ul className="space-y-4 font-sans text-sm">
                  {group.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="font-semibold text-zinc-400 hover:text-black transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          variants={itemVariants}
          className="flex justify-between items-center pt-12 border-t border-zinc-50"
        >
          <div className="flex items-center gap-6">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-300 font-sans">
              © 2026 Shape Your Days. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-zinc-400 hover:text-black transition-colors duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="size-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
            <span className="text-xs font-black uppercase tracking-widest text-zinc-400 font-heading">
              Operational
            </span>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}

export default Footer;
