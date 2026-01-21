"use client";

import { ArrowRight, Clock, Globe, ShieldCheck, Infinity } from "lucide-react";
import { motion, Variants } from "framer-motion";

const FEATURES = [
  { icon: ShieldCheck, label: "E2E Encryption" },
  { icon: Clock, label: "Instant Setup" },
  { icon: Infinity, label: "Lifetime OS" },
  { icon: Globe, label: "Hybrid Edge" },
];

function SectionCTA() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const fadeVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="cta"
      className="py-32 mt-60 px-6 bg-zinc-950 text-white relative overflow-hidden"
    >
      {/* Animated glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-150 bg-emerald-400/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-emerald-400/30 to-transparent" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto text-center relative z-10"
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-4 px-6 py-2 bg-emerald-400/5 border border-emerald-400/10 rounded-full mb-12 shadow-2xl"
        >
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <p className="text-xs font-black uppercase tracking-widest text-emerald-400/80 font-heading">
            Deployment Matrix Active
          </p>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-8xl font-black tracking-tight leading-none mb-12 font-heading"
        >
          Stop managing time.
          <br />
          Start{" "}
          <span className="bg-clip-text text-transparent bg-linear-to-r from-white via-emerald-100 to-zinc-600 italic">
            managing impact.
          </span>
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-zinc-400 max-w-2xl mx-auto font-medium text-xl leading-relaxed mb-16 font-sans"
        >
          Deploy the professional Life OS built for peak cognitive capacity.
          Reclaim your biological prime and master your mission.
        </motion.p>

        <div className="flex flex-col items-center gap-20">
          <motion.button
            variants={fadeVariants}
            className="group relative px-10 py-6 bg-white text-black rounded-2xl font-black text-lg uppercase tracking-wider hover:bg-emerald-400 hover:text-black transition-all shadow-2xl overflow-hidden cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-6">
              Initialize Dashboard{" "}
              <ArrowRight
                size={24}
                className="group-hover:translate-x-2 transition-transform"
              />
            </span>
            <div className="absolute inset-0 bg-emerald-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </motion.button>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-4 gap-x-12 text-xs font-black uppercase tracking-widest text-zinc-500 font-heading"
          >
            {FEATURES.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 group cursor-default transition-all duration-300 hover:-translate-y-1"
              >
                <item.icon
                  size={18}
                  className="text-emerald-400/60 group-hover:text-emerald-400 transition-colors"
                />
                <span className="group-hover:text-white transition-colors">
                  {item.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Subtle background tech pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />
    </section>
  );
}

export default SectionCTA;
