import React from "react";
import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Aaryan Singh",
    review: "The quality of the oversized t-shirts is unmatched. Absolutely worth every rupee. Fast delivery too!",
    stars: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
  },
  {
    name: "Vikram Mehta",
    review: "Best watches in this price range. Looks very premium and expensive. Highly recommended for daily wear.",
    stars: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80"
  },
  {
    name: "Rohan Kapoor",
    review: "I've tried many denim brands but MS Fashions' jeans are the most comfortable and stylish so far.",
    stars: 4,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[10px] font-black tracking-[0.4em] uppercase text-gold mb-2">Testimonials</h2>
          <p className="text-4xl font-extrabold tracking-tighter text-white uppercase leading-none">Inner Circle Voices</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel p-10 relative flex flex-col items-center text-center group hover:border-gold/30 transition-all"
            >
              <Quote className="w-16 h-16 text-white/5 absolute top-6 left-6" />
              <img src={t.image} alt={t.name} className="w-20 h-20 rounded-full object-cover mb-6 border-2 border-glass-border shadow-2xl overflow-hidden group-hover:scale-105 transition-transform" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-2.5 h-2.5 ${i < t.stars ? "fill-gold text-gold" : "text-zinc-800"}`} />
                ))}
              </div>
              <p className="text-zinc-400 italic mb-8 leading-relaxed text-sm tracking-wide">"{t.review}"</p>
              <h4 className="font-black text-white text-[11px] uppercase tracking-[0.2em]">{t.name}</h4>
              <p className="text-[9px] font-bold text-gold/60 uppercase mt-2 tracking-widest">Client</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
