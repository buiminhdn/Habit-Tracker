"use client";

import { Button } from "@/components/ui/button";
import { Layers, Target, Zap } from "lucide-react";
import { motion, Variants } from "framer-motion";

function HomeFramework() {
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
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="framework" className="mt-40 px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto"
      >
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-between mb-24 gap-12"
        >
          <div>
            <p className="text-5xl font-black tracking-tight font-heading">
              The Architecture of Impact.
            </p>
            <p className="text-zinc-500 font-medium text-lg max-w-2xl mt-4">
              A tiered approach to productivity that prioritizes strategic
              alignment over industrial-age busywork.
            </p>
          </div>
          <Button className="font-heading py-6 px-8 cursor-pointer">
            Read The Manifesto
          </Button>
        </motion.div>

        <div className="grid grid-cols-3 gap-12">
          {[
            {
              icon: Layers,
              title: "Roadmaps",
              desc: "Long-term strategic visioning made tactical. Define your trajectory with mathematical precision.",
            },
            {
              icon: Target,
              title: "Tactics",
              desc: "Behavioral tracking with precision daily monitor. Align every hour to your multi-year goals.",
            },
            {
              icon: Zap,
              title: "Momentum",
              desc: "A frictionless daily interface for deep execution. Eliminate switching costs and cognitive load.",
            },
          ].map((f, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group p-14 rounded-4xl bg-zinc-100 hover:bg-black transition-all duration-500"
            >
              <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mb-12 shadow-md transition-transform duration-500 group-hover:scale-110">
                <f.icon size={32} className="text-black" />
              </div>
              <p className="text-2xl font-black tracking-tight mb-6 uppercase font-heading text-zinc-900 group-hover:text-white transition-colors duration-500">
                {f.title}
              </p>
              <p className="text-zinc-500 group-hover:text-zinc-400 text-base leading-relaxed font-medium transition-colors duration-500">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default HomeFramework;
