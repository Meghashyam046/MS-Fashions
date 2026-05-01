import React, { useState } from "react";
import { useCart } from "../lib/cart-context";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import { ArrowLeft, CreditCard, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

interface CheckoutPageProps {
  onBack: () => void;
  onSuccess: (details: any) => void;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

export const CheckoutPage: React.FC<CheckoutPageProps> = ({ onBack, onSuccess }) => {
  const { cart, totalPrice, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayment = async () => {
    if (!formData.fullName || !formData.email || !formData.phone || !formData.address) {
      alert("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    try {
      // Create Razorpay Order via our API
      const response = await fetch("/api/razorpay/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: totalPrice }),
      });

      const orderData = await response.json();
      if (!orderData.id) throw new Error("Order creation failed");

      // Load Razorpay Script
      const resLoad = await new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
      });

      if (!resLoad) {
        alert("Failed to load Razorpay SDK");
        setLoading(false);
        return;
      }

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID || "rzp_test_placeholder",
        amount: orderData.amount,
        currency: orderData.currency,
        name: "MS Fashions",
        description: "Fashion Store Payment",
        order_id: orderData.id,
        handler: async (response: any) => {
          // Verify signature on backend
          const verifyRes = await fetch("/api/razorpay/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }),
          });

          const verifyData = await verifyRes.json();
          if (verifyData.status === "ok") {
            onSuccess({
              orderId: response.razorpay_order_id,
              paymentId: response.razorpay_payment_id,
              customer: formData,
              amount: totalPrice,
            });
            clearCart();
          } else {
            alert("Payment verification failed");
          }
        },
        prefill: {
          name: formData.fullName,
          email: formData.email,
          contact: formData.phone,
        },
        theme: { color: "#000000" },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 pt-24 pb-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-zinc-400 hover:text-black transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-black tracking-widest uppercase">Back to Shopping</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Shipped Information */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="rounded-none border-none shadow-sm">
              <CardHeader className="border-b">
                <CardTitle className="text-lg font-black tracking-tighter uppercase">Shipping Details</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Full Name</Label>
                    <Input name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="John Doe" className="rounded-none border-zinc-100" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Email Address</Label>
                    <Input name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="john@example.com" className="rounded-none border-zinc-100" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Phone Number</Label>
                    <Input name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+91 9876543210" className="rounded-none border-zinc-100" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Shipping Address</Label>
                    <Input name="address" value={formData.address} onChange={handleInputChange} placeholder="Street name, Apartment, etc" className="rounded-none border-zinc-100" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">City</Label>
                    <Input name="city" value={formData.city} onChange={handleInputChange} placeholder="Mumbai" className="rounded-none border-zinc-100" />
                  </div>
                  <div className="space-y-2 flex gap-4">
                    <div className="flex-1 space-y-2">
                      <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">State</Label>
                      <Input name="state" value={formData.state} onChange={handleInputChange} placeholder="Maharashtra" className="rounded-none border-zinc-100" />
                    </div>
                    <div className="w-32 space-y-2">
                      <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Pincode</Label>
                      <Input name="pincode" value={formData.pincode} onChange={handleInputChange} placeholder="400001" className="rounded-none border-zinc-100" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-none border-none shadow-sm">
              <CardHeader className="border-b">
                <CardTitle className="text-lg font-black tracking-tighter uppercase">Payment Method</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="p-4 border-2 border-black flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-zinc-100 flex items-center justify-center">
                      <CreditCard className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-sm">Secure Online Payment</p>
                      <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Cards, UPI, Netbanking, Wallets</p>
                    </div>
                  </div>
                  <ShieldCheck className="w-6 h-6 text-green-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <Card className="rounded-none border-none shadow-sm sticky top-24">
              <CardHeader className="border-b">
                <CardTitle className="text-lg font-black tracking-tighter uppercase">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-4 max-h-[300px] overflow-auto pr-2 custom-scrollbar">
                  {cart.map((item) => (
                    <div key={`${item.id}-${item.selectedSize}`} className="flex gap-3">
                      <div className="w-16 h-20 bg-zinc-100 flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-xs truncate">{item.name}</p>
                        <p className="text-[10px] font-black text-zinc-400 uppercase">Qty: {item.quantity} | Size: {item.selectedSize}</p>
                        <p className="font-black text-xs mt-1">₹{(item.price * item.quantity).toLocaleString()}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-400 font-bold uppercase tracking-widest text-[10px]">Subtotal</span>
                    <span className="font-black">₹{totalPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-400 font-bold uppercase tracking-widest text-[10px]">Shipping</span>
                    <span className="font-black text-green-600 uppercase">Free</span>
                  </div>
                  <div className="flex justify-between text-base pt-2 border-t mt-2">
                    <span className="font-black uppercase tracking-tighter">Total Amount</span>
                    <span className="text-xl font-black">₹{totalPrice.toLocaleString()}</span>
                  </div>
                </div>

                <Button 
                  onClick={handlePayment}
                  disabled={loading || cart.length === 0}
                  className="w-full h-14 bg-black text-white hover:bg-zinc-900 rounded-none font-bold mt-4"
                >
                  {loading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      PROCESSING...
                    </div>
                  ) : "PLACE ORDER"}
                </Button>
                
                <p className="text-[10px] text-zinc-400 text-center flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> SECURE CHECKOUT BY RAZORPAY
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
