import React, { useState } from "react";
import { PRODUCTS } from "../constants";
import { ProductCard } from "./ProductCard";
import { Product } from "../types";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

interface ProductGridProps {
  onQuickView: (product: Product) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ onQuickView }) => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProducts = activeTab === "all" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeTab);

  const categories = ["all", "t-shirts", "hoodies", "jackets", "jeans", "sneakers", "watches"];

  return (
    <section id="shop" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-[10px] font-black tracking-[0.4em] uppercase text-gold mb-2">Our Store</h2>
        <p className="text-5xl font-extrabold tracking-tighter text-white mb-8 uppercase">NEWEST ARRIVALS</p>
        
        <Tabs defaultValue="all" onValueChange={setActiveTab} className="max-w-2xl mx-auto">
          <TabsList className="bg-transparent gap-4 h-auto p-0 flex-wrap justify-center">
            {categories.map(cat => (
              <TabsTrigger
                key={cat}
                value={cat}
                className="rounded-full bg-white/5 border border-glass-border data-[state=active]:bg-gold data-[state=active]:text-obsidian data-[state=active]:border-gold font-black tracking-widest text-[10px] uppercase py-2 px-6 shadow-none text-zinc-400 transition-all hover:text-white"
              >
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onQuickView={onQuickView}
          />
        ))}
      </div>
    </section>
  );
};
