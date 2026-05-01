import React from "react";
import { motion } from "motion/react";
import { CATEGORIES } from "../constants";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export const CategoryGrid: React.FC = () => {
  return (
    <section id="categories" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex items-end justify-between mb-12">
        <div>
          <h2 className="text-[10px] font-black tracking-[0.4em] uppercase text-gold mb-2">Departments</h2>
          <p className="text-4xl font-extrabold tracking-tighter text-white uppercase">SHOP BY CATEGORY</p>
        </div>
        <Button variant="link" className="hidden sm:flex items-center gap-2 group text-zinc-400 hover:text-white">
          View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {CATEGORIES.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative h-[300px] overflow-hidden cursor-pointer glass-panel"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500">
              <h3 className="text-2xl font-black text-white mb-2 tracking-tight uppercase">{category.name}</h3>
              <p className="text-[10px] text-gold font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">Explore Collection</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
