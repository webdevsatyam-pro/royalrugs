import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag, ShieldCheck, Truck } from 'lucide-react';
import { useCart } from '../context/CartContext';

export function CartPage() {
  const { cart, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

  if (cart.length === 0) {
    return (
      <div className="pt-40 pb-32 text-center space-y-8 px-6">
        <div className="w-24 h-24 bg-luxury-beige rounded-full flex items-center justify-center mx-auto text-luxury-ink/20">
          <ShoppingBag size={40} strokeWidth={1} />
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl font-serif">Your cart is empty</h1>
          <p className="text-sm text-luxury-ink/60 max-w-xs mx-auto">
            It seems you haven't discovered your perfect piece yet. Explore our curated collections.
          </p>
        </div>
        <Link 
          to="/shop" 
          className="inline-block px-12 py-4 bg-primary text-white text-xs font-bold uppercase tracking-widest hover:bg-primary-dark transition-all"
        >
          Explore Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-4 md:space-y-0">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.3em] font-bold text-primary">Wardrobe Selection</p>
            <h1 className="text-5xl font-serif">Your Cart</h1>
          </div>
          <Link to="/shop" className="group flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-luxury-ink/60 hover:text-primary transition-colors">
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            <span>Continue Shopping</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Items */}
          <div className="lg:col-span-8">
            <div className="space-y-8">
              <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-luxury-ink/5 text-[10px] font-bold uppercase tracking-[0.2em] text-luxury-ink/40">
                <div className="col-span-6">Product Details</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-right">Total</div>
              </div>

              <AnimatePresence mode="popLayout">
                {cart.map((item) => (
                  <motion.div 
                    layout
                    key={`${item.id}-${item.selectedSize}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-8 border-b border-luxury-ink/5 items-center"
                  >
                    <div className="col-span-6 flex items-center space-x-6">
                      <div className="aspect-[3/4] w-24 bg-luxury-beige overflow-hidden flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-serif text-lg">{item.name}</h3>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-primary">{item.category}</p>
                        <p className="text-xs text-luxury-ink/40">Size: {item.selectedSize} ft</p>
                        <button 
                          onClick={() => removeFromCart(item.id, item.selectedSize)}
                          className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-400 hover:text-red-600 flex items-center space-x-1 pt-2 transition-colors"
                        >
                          <Trash2 size={12} />
                          <span>Remove Piece</span>
                        </button>
                      </div>
                    </div>
                    
                    <div className="md:col-span-2 text-center">
                      <span className="text-sm font-medium text-luxury-ink/60 md:hidden">Price: </span>
                      <span className="text-sm font-medium">${item.price.toLocaleString()}</span>
                    </div>

                    <div className="md:col-span-2 flex justify-center">
                      <div className="flex items-center border border-luxury-ink/10 h-10">
                        <button 
                          onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity - 1)}
                          className="w-8 h-full flex items-center justify-center hover:bg-luxury-beige transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-10 text-center text-xs font-bold">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity + 1)}
                          className="w-8 h-full flex items-center justify-center hover:bg-luxury-beige transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>

                    <div className="md:col-span-2 text-right">
                      <span className="text-sm font-bold text-luxury-ink md:hidden">Total: </span>
                      <span className="text-sm font-bold text-luxury-ink">${(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <div className="mt-12 p-8 bg-luxury-beige/50 border border-luxury-ink/5 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <Truck size={20} className="text-primary mt-1" />
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest mb-1">Global Shipping</h4>
                  <p className="text-[11px] text-luxury-ink/60">Complementary white-glove delivery on all orders over $2,000.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <ShieldCheck size={20} className="text-primary mt-1" />
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest mb-1">Certificate of Origin</h4>
                  <p className="text-[11px] text-luxury-ink/60">Every piece arrives with a signed authenticity and heritage document.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="lg:col-span-4 self-start">
            <div className="p-10 border border-luxury-ink/5 bg-white space-y-8 sticky top-32">
              <h2 className="text-xl font-serif">Order Summary</h2>
              
              <div className="space-y-4 pt-4 border-t border-luxury-ink/5">
                <div className="flex justify-between text-xs font-bold uppercase tracking-widest opacity-60">
                  <span>Subtotal ({totalItems} items)</span>
                  <span>${totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-xs font-bold uppercase tracking-widest opacity-60">
                  <span>Concierge Shipping</span>
                  <span className="text-primary">FREE</span>
                </div>
                <div className="flex justify-between text-xs font-bold uppercase tracking-widest opacity-60">
                  <span>Estimated Taxes</span>
                  <span>Calculated at checkout</span>
                </div>
              </div>

              <div className="pt-8 border-t border-luxury-ink/10 flex justify-between items-end">
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 mb-1">Order Total</h4>
                  <p className="text-3xl font-serif text-primary">${totalPrice.toLocaleString()}</p>
                </div>
                <span className="text-[10px] font-bold text-luxury-ink/40 mb-1 tracking-widest">INC. DUTIES</span>
              </div>

              <button className="w-full py-5 bg-luxury-ink text-white text-xs font-bold uppercase tracking-[0.3em] hover:bg-primary transition-all">
                Proceed to Checkout
              </button>
              
              <div className="flex flex-col items-center space-y-4 pt-4">
                <div className="flex items-center space-x-2 text-[10px] text-luxury-ink/40 uppercase tracking-widest font-bold">
                  <ShieldCheck size={14} className="text-primary" />
                  <span>Secure Luxury Transaction</span>
                </div>
                <div className="flex space-x-4 grayscale opacity-40">
                  {/* Small card icons or names could go here */}
                  <span className="text-[9px] font-bold">VISA</span>
                  <span className="text-[9px] font-bold">MASTERCARD</span>
                  <span className="text-[9px] font-bold">AMEX</span>
                  <span className="text-[9px] font-bold">APPLE PAY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
