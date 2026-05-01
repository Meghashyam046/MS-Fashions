import React, { useState } from "react";
import { MessageSquare, X, Send, User, Phone, Package, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export const WhatsAppAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    product: "",
    quantity: "1",
    address: ""
  });

  const handleSend = () => {
    const text = `*New Order from Website*\n\n` +
      `*Customer:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Product:* ${formData.product}\n` +
      `*Quantity:* ${formData.quantity}\n` +
      `*Address:* ${formData.address}`;
    
    const whatsappUrl = `https://wa.me/7993148967?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
    setIsOpen(false);
    setStep(1);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 right-0 w-[350px] glass-panel overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gold p-6 text-obsidian">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <h3 className="text-xl font-black uppercase tracking-tighter">Fashion Assistant</h3>
              <p className="text-xs text-white/80 font-medium lowercase">Always online for you</p>
            </div>

            {/* Chat Body */}
            <div className="p-6 max-h-[400px] overflow-y-auto bg-zinc-50">
              {step === 1 ? (
                <div className="space-y-6">
                  <div className="bg-white p-4 rounded-none shadow-sm text-sm font-medium border-l-4 border-green-600">
                    Welcome to MS Fashions! How can we help you today?
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button 
                      variant="outline" 
                      className="justify-start border-zinc-200 h-12 rounded-none font-bold text-xs"
                      onClick={() => setStep(2)}
                    >
                      <Package className="w-4 h-4 mr-2" /> PLACE NEW ORDER
                    </Button>
                    <Button variant="outline" className="justify-start border-zinc-200 h-12 rounded-none font-bold text-xs">
                      <Send className="w-4 h-4 mr-2" /> PRODUCT INQUIRY
                    </Button>
                    <Button variant="outline" className="justify-start border-zinc-200 h-12 rounded-none font-bold text-xs">
                      <MapPin className="w-4 h-4 mr-2" /> TRACK ORDER
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 flex items-center gap-1">
                      <User className="w-3 h-3" /> Customer Name
                    </Label>
                    <Input 
                      placeholder="Your Name" 
                      className="rounded-none border-zinc-200 text-xs h-10"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 flex items-center gap-1">
                      <Phone className="w-3 h-3" /> Phone Number
                    </Label>
                    <Input 
                      placeholder="+91..." 
                      className="rounded-none border-zinc-200 text-xs h-10"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 flex items-center gap-1">
                      <Package className="w-3 h-3" /> Product Name
                    </Label>
                    <Input 
                      placeholder="E.g. Black Oversized Tee" 
                      className="rounded-none border-zinc-200 text-xs h-10"
                      value={formData.product}
                      onChange={(e) => setFormData({...formData, product: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> Shipping Address
                    </Label>
                    <Input 
                      placeholder="Full Address" 
                      className="rounded-none border-zinc-200 text-xs h-10"
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                    />
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <Button variant="ghost" className="flex-1 rounded-none font-bold text-xs" onClick={() => setStep(1)}>
                      BACK
                    </Button>
                    <Button 
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white rounded-none font-bold text-xs"
                      onClick={handleSend}
                    >
                      SEND ON WHATSAPP
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-gold hover:bg-gold text-obsidian shadow-[0_0_30px_rgba(212,175,55,0.4)] p-0 flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
      >
        {isOpen ? <X className="w-8 h-8" /> : <MessageSquare className="w-8 h-8" />}
      </Button>
    </div>
  );
};
