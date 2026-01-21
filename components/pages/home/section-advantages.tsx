"use client";

import { Activity, ChevronRight, Layers, Shield } from "lucide-react";
import { motion, Variants } from "framer-motion";

function SectionAdvantages() {
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

  return (
    <section id="advantage" className="px-6 mt-40">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-6 gap-6">
          <motion.div
            variants={itemVariants}
            className="col-span-4 h-80 bg-zinc-100 border border-zinc-200 rounded-4xl p-12 flex flex-col justify-between group overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-black/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-emerald-400/20 transition-colors duration-700"></div>
            <div className="space-y-4 relative z-10">
              <p className="text-2xl font-black uppercase tracking-tight">
                Systemic Intelligence
              </p>
              <p className="text-zinc-500 font-medium">
                Automated analysis of your behavioral patterns.
                <br />
                Identifying bottlenecks before they become obstacles.
              </p>
            </div>
            <button className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-zinc-900 group-hover:gap-5 transition-all w-fit cursor-pointer">
              Explore Insights <ChevronRight size={14} />
            </button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="col-span-2 bg-black text-white rounded-4xl p-10 flex flex-col justify-center items-center text-center group"
          >
            <div className="w-18 h-18 bg-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
              <Shield size={32} className="text-emerald-400" />
            </div>
            <p className="text-lg font-black uppercase tracking-widest mb-4">
              Zero-Leak Privacy
            </p>
            <p className="text-xs uppercase font-bold text-zinc-500 tracking-widest">
              Local-First Architecture
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="col-span-3 bg-zinc-900 text-white rounded-4xl p-12 flex flex-col justify-between h-96"
          >
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                <Activity size={24} />
              </div>
              <span className="text-xs font-black uppercase tracking-widest px-4 py-1.5 bg-emerald-400 text-black rounded-full">
                Live Analytics
              </span>
            </div>
            <div className="space-y-6">
              <p className="text-3xl font-black uppercase tracking-tight leading-none">
                Momentum
                <br />
                Tracking
              </p>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <div
                    key={i}
                    className={`h-8 w-full rounded-md transition-all duration-500 ${
                      i < 6
                        ? "bg-emerald-400 shadow-neon animate-pulse"
                        : "bg-white/5"
                    }`}
                    style={{ animationDelay: `${i * 120}ms` }}
                  ></div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="col-span-3 bg-zinc-100 border border-zinc-200 rounded-4xl p-12 flex flex-col justify-between h-96 group relative overflow-hidden"
          >
            <div className="space-y-4 relative z-10">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center">
                <Layers size={24} />
              </div>
              <p className="text-2xl font-black uppercase tracking-tight">
                Hierarchical Depth
              </p>
              <p className="text-zinc-500 font-medium">
                From decade roadmaps to today&apos;s deep work blocks. Every
                layer is connected through strategic integrity.
              </p>
            </div>

            {/* Diagonal Mock Card */}
            <div className="absolute -bottom-20 -right-4 w-60 h-48 bg-white rounded-3xl border border-zinc-200 shadow-2xl rotate-12 transition-all duration-700 group-hover:-translate-y-10 group-hover:rotate-6 p-6 space-y-4">
              <div className="space-y-2">
                <div className="h-2 w-20 bg-zinc-100 rounded-full" />
                <div className="h-2 w-32 bg-zinc-50 rounded-full" />
              </div>
              <div className="grid grid-cols-2 gap-2 pt-2">
                <div className="h-16 bg-zinc-50 rounded-xl" />
                <div className="h-16 bg-zinc-50 rounded-xl" />
              </div>
              <div className="h-2 w-full bg-zinc-50 rounded-full" />
            </div>

            <div className="flex -space-x-3 relative z-10">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full border-4 border-zinc-100 bg-zinc-200 group-hover:translate-x-2 transition-transform"
                  style={{ transitionDelay: `${i * 100}ms` }}
                ></div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default SectionAdvantages;
