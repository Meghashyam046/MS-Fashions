import { useState, useCallback } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { CategoryGrid } from "./components/CategoryGrid";
import { ProductGrid } from "./components/ProductGrid";
import { ProductModal } from "./components/ProductModal";
import { CartDrawer } from "./components/CartDrawer";
import { CheckoutPage } from "./components/CheckoutPage";
import { OrderSuccess } from "./components/OrderSuccess";
import { Testimonials } from "./components/Testimonials";
import { Newsletter } from "./components/Newsletter";
import { ContactSection, Footer } from "./components/FooterSection";
import { WhatsAppAssistant } from "./components/WhatsAppAssistant";
import { CartProvider } from "./lib/cart-context";
import { Product } from "./types";
import { motion, AnimatePresence } from "motion/react";

type View = "store" | "checkout" | "success";

function AppContent() {
  const [view, setView] = useState<View>("store");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [orderInfo, setOrderInfo] = useState<any>(null);

  const openQuickView = useCallback((product: Product) => {
    setSelectedProduct(product);
  }, []);

  const closeQuickView = useCallback(() => {
    setSelectedProduct(null);
  }, []);

  const handleCheckout = () => {
    setView("checkout");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOrderSuccess = (details: any) => {
    setOrderInfo(details);
    setView("success");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const backToStore = () => {
    setView("store");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen font-sans selection:bg-gold selection:text-obsidian">
      <AnimatePresence mode="wait">
        {view === "store" && (
          <motion.div
            key="store"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col"
          >
            <Navbar onCartOpen={() => setIsCartOpen(true)} />
            <main>
              <Hero />
              <CategoryGrid />
              <ProductGrid onQuickView={openQuickView} />
              <Testimonials />
              <Newsletter />
              <ContactSection />
            </main>
            <Footer />
            
            <ProductModal
              product={selectedProduct}
              isOpen={!!selectedProduct}
              onClose={closeQuickView}
            />
            <CartDrawer
              isOpen={isCartOpen}
              onClose={() => setIsCartOpen(false)}
              onCheckout={handleCheckout}
            />
            <WhatsAppAssistant />
          </motion.div>
        )}

        {view === "checkout" && (
          <motion.div
            key="checkout"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
          >
            <CheckoutPage onBack={backToStore} onSuccess={handleOrderSuccess} />
          </motion.div>
        )}

        {view === "success" && (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
          >
            <OrderSuccess details={orderInfo} onHome={backToStore} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
