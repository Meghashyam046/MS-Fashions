import React from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?auto=format&fit=crop&w=1920&q=80"
          alt="Luxury Men's Fashion"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-block text-gold text-xs font-black tracking-[0.4em] uppercase mb-6"
          >
            AW COLLECTION 2026
          </motion.span>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="hero-large text-white leading-[0.85] mb-8"
          >
            ELEVATE <br />
            <span className="text-gold">YOUR STYLE</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-sm md:text-base text-zinc-400 mb-12 max-w-md leading-relaxed tracking-wide"
          >
            Premium Men's Fashion for the Modern Generation. Discover curated looks that define precision and elegance.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              size="lg"
              className="bg-gold text-obsidian hover:bg-gold/90 font-black px-10 py-7 text-xs tracking-widest rounded-full transition-all hover:scale-105 active:scale-95"
            >
              SHOP NOW
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-glass-border hover:bg-white/5 font-black px-10 py-7 text-xs tracking-widest rounded-full backdrop-blur-sm transition-all hover:scale-105 active:scale-95"
            >
              EXPLORE
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative vertical lines */}
      <div className="absolute right-12 bottom-12 hidden lg:flex flex-col items-center gap-10 z-10">
        <div className="w-[1px] h-32 bg-white/20" />
        <span className="text-white/40 text-[10px] tracking-[0.5em] font-bold uppercase rotate-90 whitespace-nowrap">
          SCROLL TO EXPLORE
        </span>
      </div>
    </section>
  );
};
