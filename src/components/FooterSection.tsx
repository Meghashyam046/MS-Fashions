import React from "react";
import { Mail, Phone, MapPin, Instagram, Twitter, Facebook } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { Separator } from "./ui/separator";

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-[10px] font-black tracking-[0.4em] uppercase text-gold mb-2">Visit Us</h2>
          <p className="text-4xl font-extrabold tracking-tighter text-white uppercase mb-12">AUTHENTIC PRESENCE</p>
          
          <div className="space-y-6">
            <div className="flex gap-6 items-start glass-panel p-6 hover:border-gold/30 transition-all">
              <div className="w-12 h-12 bg-white/5 flex items-center justify-center shrink-0 rounded-full border border-glass-border">
                <MapPin className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h4 className="font-black text-white text-[11px] uppercase tracking-widest mb-1">Our Flagship Store</h4>
                <p className="text-zinc-500 text-sm tracking-wide">45th Avenue, Streetwear District, Mumbai, MH - 400013</p>
              </div>
            </div>

            <div className="flex gap-6 items-start glass-panel p-6 hover:border-gold/30 transition-all">
              <div className="w-12 h-12 bg-white/5 flex items-center justify-center shrink-0 rounded-full border border-glass-border">
                <Phone className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h4 className="font-black text-white text-[11px] uppercase tracking-widest mb-1">Call Us</h4>
                <p className="text-zinc-500 text-sm hover:text-white cursor-pointer transition-colors tracking-wide">+91 90XXXXXXXX</p>
              </div>
            </div>

            <div className="flex gap-6 items-start glass-panel p-6 hover:border-gold/30 transition-all">
              <div className="w-12 h-12 bg-white/5 flex items-center justify-center shrink-0 rounded-full border border-glass-border">
                <Mail className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h4 className="font-black text-white text-[11px] uppercase tracking-widest mb-1">Email Support</h4>
                <p className="text-zinc-500 text-sm hover:text-white cursor-pointer transition-colors tracking-wide">support@msfashions.com</p>
              </div>
            </div>

            <div className="pt-8 flex gap-4">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <button key={i} className="w-12 h-12 bg-white/5 border border-glass-border rounded-full flex items-center justify-center hover:bg-gold hover:text-obsidian transition-all text-white">
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 glass-panel p-12 items-center justify-center text-center">
          <div className="bg-white p-6 shadow-[0_0_50px_rgba(255,255,255,0.1)] mb-4">
            
          </div>
          <div>
            <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-2 italic">DIGITAL ATELIER</h3>
            <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.3em]">explore the full collection</p>
          </div>
          
          <div className="w-full h-56 bg-zinc-900 mt-6 overflow-hidden relative border border-glass-border opacity-50 grayscale hover:opacity-100 transition-all duration-700">
            <img 
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=400&q=40" 
              alt="Map"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-obsidian/40">
              <div className="glass-panel px-6 py-3 text-[10px] font-black uppercase tracking-widest flex items-center gap-2 text-white hover:bg-white hover:text-obsidian transition-colors">
                <MapPin className="w-3 h-3 text-gold" /> Open in Maps
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-obsidian border-t border-glass-border pt-24 pb-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gold flex items-center justify-center rounded-sm">
                <span className="text-obsidian font-black text-xl italic leading-none">MS</span>
              </div>
              <span className="text-2xl font-black tracking-tighter text-white">FASHIONS</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed tracking-wide font-medium">
              Redefining premium men's fashion for the bold and contemporary generation. Quality, style, and luxury delivered to your doorstep.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-10 text-white">Quick Links</h4>
            <ul className="space-y-4 text-[11px] text-zinc-500 font-bold uppercase tracking-widest">
              <li><a href="#" className="hover:text-gold transition-colors">Our History</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Shipping Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-10 text-white">Collections</h4>
            <ul className="space-y-4 text-[11px] text-zinc-500 font-bold uppercase tracking-widest">
              <li><a href="#" className="hover:text-gold transition-colors">Streetwear Basics</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Premium Outerwear</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Luxury Accessories</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Limited Editions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-10 text-white">Experience</h4>
            <ul className="space-y-4 text-[11px] text-zinc-500 font-bold uppercase tracking-widest">
              <li><a href="#" className="hover:text-gold transition-colors">VIP Members</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">MS Studio</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Collaborations</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Sustainability</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-glass-border pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] font-black uppercase tracking-[0.3em] text-zinc-600">
          <p>© 2026 MS FASHIONS. CRAFTED FOR EXCELLENCE.</p>
          <div className="flex gap-8">
            <button className="hover:text-gold transition-colors">Privacy Policy</button>
            <button className="hover:text-gold transition-colors">Terms of Use</button>
            <button className="hover:text-gold transition-colors">Cookies</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
