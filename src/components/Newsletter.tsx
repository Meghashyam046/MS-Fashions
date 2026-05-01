import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Send } from "lucide-react";

export const Newsletter: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&w=1920&q=80" 
          alt="Fashion Detail" 
          className="w-full h-full object-cover grayscale opacity-20"
        />
        <div className="absolute inset-0 bg-black" />
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10 text-white">
        <h2 className="text-[10px] font-black tracking-[0.6em] uppercase text-gold mb-6">Join the Movement</h2>
        <h3 className="text-4xl md:text-7xl font-black tracking-[-0.05em] mb-8 uppercase leading-tight italic">
          UNCOMPROMISING <br />
          <span className="text-gold">STYLE</span>
        </h3>
        <p className="text-zinc-500 mb-12 max-w-md mx-auto text-sm md:text-base leading-relaxed tracking-wide">
          Subscribe to our newsletter for exclusive access to AW2026 collections and private viewing invitations.
        </p>

        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
          <Input 
            type="email" 
            placeholder="EMAIL ADDRESS" 
            className="h-14 rounded-full bg-white/5 border-glass-border text-white placeholder:text-zinc-600 focus-visible:ring-1 focus-visible:ring-gold px-8 text-[10px] font-bold tracking-widest"
          />
          <Button className="h-14 px-10 bg-gold text-obsidian hover:bg-gold/90 rounded-full font-black text-[10px] uppercase tracking-widest transition-transform hover:scale-105 active:scale-95 whitespace-nowrap">
            JOIN NOW <Send className="w-4 h-4 ml-2" />
          </Button>
        </form>
      </div>
    </section>
  );
};
