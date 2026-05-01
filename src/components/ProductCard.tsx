import React from "react";
import { Star, ShoppingCart, Eye, Heart } from "lucide-react";
import { Product } from "../types";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";
import { useCart } from "../lib/cart-context";

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="relative aspect-[3/4] overflow-hidden glass-panel">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isNew && (
            <Badge className="bg-gold text-obsidian hover:bg-gold rounded-full px-3 py-1 font-black leading-none text-[10px] tracking-widest border-none">
              NEW
            </Badge>
          )}
          {product.discount && (
            <Badge className="bg-red-600 text-white hover:bg-red-600 rounded-full px-3 py-1 font-black leading-none text-[10px] tracking-widest border-none">
              -{product.discount}%
            </Badge>
          )}
        </div>

        {/* Favorite Button */}
        <Button
          variant="outline"
          size="icon"
          className="absolute top-4 right-4 bg-white/5 backdrop-blur-sm border-glass-border opacity-0 group-hover:opacity-100 transition-all rounded-full hover:bg-gold hover:text-obsidian"
        >
          <Heart className="w-4 h-4" />
        </Button>

        {/* Floating Actions */}
        <div className="absolute inset-x-4 bottom-4 flex flex-col gap-2 transform translate-y-12 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
          <Button
            className="w-full bg-gold text-obsidian hover:bg-gold/90 rounded-full font-black py-6 tracking-widest text-[10px] border-none"
            onClick={() => addToCart(product, "M", 1)}
          >
            <ShoppingCart className="w-4 h-4 mr-2" /> ADD TO CART
          </Button>
          <Button
            variant="outline"
            className="w-full bg-white text-obsidian border-none hover:bg-zinc-200 rounded-full font-black py-6 tracking-widest text-[10px]"
            onClick={() => onQuickView(product)}
          >
            <Eye className="w-4 h-4 mr-2" /> QUICK VIEW
          </Button>
        </div>
      </div>

      <div className="py-6 flex flex-col gap-1">
        <p className="text-[10px] text-gold font-black tracking-[0.4em] uppercase mb-1">
          {product.category}
        </p>
        <h3 className="font-bold text-white text-sm tracking-tight truncate hover:text-gold cursor-pointer transition-colors uppercase" onClick={() => onQuickView(product)}>
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="font-black text-xl text-gold italic tracking-tighter">₹{product.price.toLocaleString()}</span>
          {product.originalPrice && (
            <span className="text-zinc-500 line-through text-sm">₹{product.originalPrice.toLocaleString()}</span>
          )}
        </div>
        <div className="flex items-center gap-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-2.5 h-2.5 ${
                i < Math.floor(product.rating) ? "fill-gold text-gold" : "text-zinc-800"
              }`}
            />
          ))}
          <span className="text-[9px] text-zinc-500 font-bold ml-1 tracking-widest">({product.reviews})</span>
        </div>
      </div>
    </motion.div>
  );
};
