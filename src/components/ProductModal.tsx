import React, { useState } from "react";
import { Dialog, DialogContent } from "./ui/dialog";
import { Product } from "../types";
import { Button } from "./ui/button";
import { useCart } from "../lib/cart-context";
import { Star, Minus, Plus, ShoppingBag, Heart } from "lucide-react";
import { Badge } from "./ui/badge";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const sizes = ["S", "M", "L", "XL", "XXL"];

  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl p-0 overflow-hidden bg-obsidian border border-glass-border rounded-lg outline-none text-white shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Gallery Side */}
          <div className="bg-white/5 flex items-center justify-center relative p-8">
            <img
              src={product.image}
              alt={product.name}
              className="w-full max-h-[600px] object-contain"
            />
            <div className="absolute top-4 left-4">
              {product.isNew && (
                <Badge className="bg-gold text-obsidian rounded-none font-black text-[10px] tracking-widest border-none px-3 py-1">NEW</Badge>
              )}
            </div>
          </div>

          {/* Details Side */}
          <div className="p-8 lg:p-12 flex flex-col justify-center bg-obsidian">
            <div className="space-y-8">
              <div>
                <p className="text-[10px] font-black text-gold tracking-[0.4em] uppercase mb-4">
                  {product.category}
                </p>
                <h2 className="text-5xl font-extrabold tracking-tighter text-white mb-4 uppercase leading-none">
                  {product.name}
                </h2>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl font-black italic">₹{product.price.toLocaleString()}</span>
                    {product.originalPrice && (
                      <span className="text-xl text-zinc-600 line-through">₹{product.originalPrice.toLocaleString()}</span>
                    )}
                  </div>
                </div>
              </div>

              <p className="text-zinc-400 leading-relaxed max-w-md text-sm">
                {product.description}
              </p>

              {/* Size Selection */}
              <div>
                <p className="text-[10px] font-black mb-4 uppercase tracking-widest text-zinc-500">Pick Your Fit</p>
                <div className="flex gap-3">
                  {sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 flex items-center justify-center font-black text-xs transition-all rounded-full border-2 ${
                        selectedSize === size ? "bg-white text-obsidian border-white shadow-lg" : "bg-transparent text-white border-glass-border hover:border-zinc-500"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <div className="flex items-center border border-glass-border rounded-full bg-white/5 overflow-hidden">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-12 h-12 flex items-center justify-center hover:bg-white/10 transition-colors">
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-black text-sm">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="w-12 h-12 flex items-center justify-center hover:bg-white/10 transition-colors">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <Button
                  className="flex-1 h-14 bg-gold text-obsidian hover:bg-gold/90 rounded-full font-black text-xs tracking-widest transition-transform active:scale-95"
                  onClick={() => {
                    addToCart(product, selectedSize, quantity);
                    onClose();
                  }}
                >
                  ADD TO BAG
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
