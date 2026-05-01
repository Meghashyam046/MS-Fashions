import React, { useEffect } from "react";
import { CheckCircle2, ChevronRight, Copy, Share2 } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import confetti from "canvas-confetti";

interface OrderSuccessProps {
  details: {
    orderId: string;
    paymentId: string;
    amount: number;
    customer: {
      fullName: string;
      email: string;
      address: string;
    };
  };
  onHome: () => void;
}

export const OrderSuccess: React.FC<OrderSuccessProps> = ({ details, onHome }) => {
  useEffect(() => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#000000", "#FFD700", "#FFFFFF"],
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-xl w-full text-center space-y-8"
      >
        <div className="flex flex-col items-center gap-4">
          <div className="w-24 h-24 bg-zinc-900 rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-12 h-12 text-zinc-100" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">Order Confirmed!</h1>
          <p className="text-zinc-500 max-w-sm mx-auto">
            Thank you, {details.customer.fullName}. Your order with MS Fashions has been placed successfully.
          </p>
        </div>

        <div className="bg-zinc-50 p-8 space-y-6 text-left border rounded-none">
          <div className="flex justify-between items-center pb-4 border-b">
            <div>
              <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Order ID</p>
              <p className="font-bold text-sm">#{details.orderId}</p>
            </div>
            <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-black">
              <Copy className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Payment ID</p>
              <p className="font-bold text-sm truncate">{details.paymentId}</p>
            </div>
            <div>
              <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Total Amount</p>
              <p className="font-black text-sm">₹{details.amount.toLocaleString()}</p>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Shipping to</p>
            <p className="text-sm font-medium">{details.customer.address}</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            className="flex-1 bg-black text-white hover:bg-zinc-900 h-14 rounded-none font-bold text-lg px-8 group"
            onClick={onHome}
          >
            CONTINUE SHOPPING <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            className="h-14 border-zinc-200 rounded-none font-bold px-8"
          >
            <Share2 className="w-5 h-5 mr-2" /> SHARE STORE
          </Button>
        </div>

        <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">
          A confirmation email has been sent to {details.customer.email}
        </p>
      </motion.div>
    </div>
  );
};
