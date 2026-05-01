import React, { useState, useEffect } from "react";
import { Search, ShoppingBag, Heart, Menu, X } from "lucide-react";
import { useCart } from "../lib/cart-context";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface NavbarProps {
  onCartOpen: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onCartOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Shop", href: "#shop" },
    { name: "New Arrivals", href: "#brand" },
    { name: "Categories", href: "#categories" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled ? "bg-obsidian/80 backdrop-blur-md py-3 border-glass-border" : "bg-transparent py-5 border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gold flex items-center justify-center rounded-sm">
            <span className="text-obsidian font-black text-xl italic leading-none">MS</span>
          </div>
          <span className="text-2xl font-black tracking-tighter text-white">FASHIONS</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] font-bold tracking-[0.2em] text-zinc-400 hover:text-gold transition-colors uppercase"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hidden sm:inline-flex text-white hover:text-gold hover:bg-white/5">
            <Search className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden sm:inline-flex text-white hover:text-gold hover:bg-white/5">
            <Heart className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="relative text-white hover:text-gold hover:bg-white/5"
            onClick={onCartOpen}
          >
            <ShoppingBag className="w-5 h-5" />
            <AnimatePresence>
              {totalItems > 0 && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -top-1 -right-1"
                >
                  <Badge className="h-5 w-5 bg-gold text-obsidian p-0 flex items-center justify-center rounded-full text-[10px] font-black border-none">
                    {totalItems}
                  </Badge>
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-bold text-zinc-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
