"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

function HomeHero() {
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
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="mt-40 flex flex-col items-center h-fit">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center"
      >
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-3 px-4 py-2 bg-white border border-zinc-100 rounded-full shadow-sm w-fit"
        >
          <Sparkles size={16} className="text-amber-500" />
          <span className="text-xs uppercase text-zinc-500 font-heading font-medium">
            Strategic Performance Engine v2.0
          </span>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-8xl font-bold tracking-tight mt-12 font-heading text-center"
        >
          Eliminate the <span className="text-zinc-300">noise</span>.
          <br />
          Master your focus.
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-2xl text-zinc-500 font-medium max-w-3xl mt-10 leading-relaxed text-center"
        >
          The high-fidelity operating system designed for professionals who
          demand clarity, privacy, and strategic execution.
        </motion.p>

        <motion.div variants={itemVariants}>
          <Link
            href="#"
            className="hover:scale-105 transition-transform duration-300 bg-black text-white flex items-center gap-4 px-10 py-5 text-sm uppercase font-bold rounded-xl mt-12"
          >
            <p>Initialize Evolution</p> <ArrowRight size={20} />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HomeHero;
