import React from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "./ui/sheet";
import { useCart } from "../lib/cart-context";
import { X, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, onCheckout }) => {
  const { cart, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-md p-0 flex flex-col bg-white border-none rounded-none shadow-2xl">
        <SheetHeader className="p-6 border-b">
          <SheetTitle className="text-xl font-black tracking-tighter flex items-center justify-between uppercase">
            YOUR BAG ({totalItems})
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 flex flex-col">
          {cart.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-6">
              <div className="w-24 h-24 bg-zinc-50 rounded-full flex items-center justify-center">
                <ShoppingBag className="w-12 h-12 text-zinc-300" />
              </div>
              <div>
                <h3 className="text-xl font-black mb-2 uppercase">Your bag is empty</h3>
                <p className="text-sm text-zinc-500 mb-8 max-w-[240px]">Seems like you haven't added anything to your bag yet.</p>
                <Button 
                  onClick={onClose} 
                  className="bg-black text-white hover:bg-zinc-900 rounded-none font-bold px-8 uppercase"
                >
                  Start Shopping
                </Button>
              </div>
            </div>
          ) : (
            <>
              <ScrollArea className="flex-1 px-6">
                <div className="py-6 space-y-8">
                  {cart.map((item) => (
                    <div key={`${item.id}-${item.selectedSize}`} className="flex gap-4 group">
                      <div className="w-24 h-32 bg-zinc-100 overflow-hidden relative">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 flex flex-col justify-between py-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-bold text-sm text-zinc-900 line-clamp-1">{item.name}</h4>
                            <p className="text-[10px] font-black text-zinc-400 mt-1 uppercase">Size: {item.selectedSize}</p>
                          </div>
                          <button 
                            onClick={() => removeFromCart(item.id, item.selectedSize)}
                            className="text-zinc-300 hover:text-black transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        
                        <div className="flex justify-between items-end">
                          <div className="flex items-center border rounded-none h-8">
                            <button 
                              disabled={item.quantity <= 1}
                              onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity - 1)}
                              className="px-2 disabled:opacity-20"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-8 text-center text-xs font-black">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity + 1)}
                              className="px-2"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <span className="font-black text-sm text-zinc-900">
                            ₹{(item.price * item.quantity).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>

              <div className="p-6 border-t bg-zinc-50 space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-bold text-zinc-400 uppercase tracking-widest text-[10px]">Subtotal</span>
                  <span className="font-black">₹{totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="font-bold text-zinc-400 uppercase tracking-widest text-[10px]">Shipping</span>
                  <span className="font-black text-green-600 uppercase">Free</span>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="text-lg font-black uppercase tracking-tighter">Total Amount</span>
                  <span className="text-xl font-black">₹{totalPrice.toLocaleString()}</span>
                </div>
                
                <Button 
                  className="w-full h-14 bg-black text-white hover:bg-zinc-900 rounded-none font-bold text-base mt-2 group"
                  onClick={() => {
                    onClose();
                    onCheckout();
                  }}
                >
                  PROCEED TO CHECKOUT <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <p className="text-[10px] text-zinc-400 text-center font-medium">Standard shipping: 3-5 business days. Taxes included.</p>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
