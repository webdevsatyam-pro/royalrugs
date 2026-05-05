import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ShoppingBag, Truck, RotateCcw, Shield, Heart, Share2, Plus, Minus } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { ProductCard } from '../components/ProductCard';
import { useCart } from '../context/CartContext';
import { cn } from '../lib/utils';

export function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  
  const product = useMemo(() => PRODUCTS.find(p => p.id === id), [id]);
  const relatedProducts = useMemo(() => 
    PRODUCTS.filter(p => p.category === product?.category && p.id !== id).slice(0, 4), 
    [product, id]
  );

  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || '');
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  if (!product) return <div className="pt-40 text-center font-serif text-2xl">Product not found</div>;

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-luxury-ink/40 mb-10">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-primary">Shop</Link>
          <span>/</span>
          <span className="text-luxury-ink">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32">
          {/* Images */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="aspect-[4/5] overflow-hidden bg-luxury-beige relative cursor-zoom-in group"
            >
              <img 
                src={product.image} 
                alt={product.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-6 left-6 py-2 px-4 bg-white/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-[0.2em] shadow-sm">
                Unique Piece
              </div>
            </motion.div>
            
            <div className="grid grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="aspect-square bg-luxury-beige overflow-hidden opacity-60 hover:opacity-100 transition-opacity cursor-pointer border border-transparent hover:border-primary/20">
                  <img 
                    src={product.image} 
                    alt={`View ${i + 1}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.3em] font-bold text-primary">{product.category} Collection</p>
                <h1 className="text-4xl md:text-5xl font-serif">{product.name}</h1>
                <div className="flex items-center space-x-4">
                  <p className="text-2xl font-medium text-luxury-ink/80">${product.price.toLocaleString()}</p>
                  <div className="w-px h-4 bg-luxury-ink/10" />
                  <div className="flex items-center space-x-1">
                    <div className="flex items-center text-primary">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={14} 
                          fill={i < Math.floor(product.rating) ? "currentColor" : "none"} 
                          className={i < Math.floor(product.rating) ? "" : "text-luxury-ink/10"}
                        />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-luxury-ink/40">({product.reviews} Reviews)</span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-luxury-ink/60 leading-relaxed max-w-md italic font-serif">
                "{product.description}"
              </p>

              <div className="space-y-8 pt-6">
                {/* Size Selection */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-[10px] font-bold uppercase tracking-widest">Select Dimensions</label>
                    <button className="text-[10px] font-bold uppercase tracking-widest text-primary hover:underline underline-offset-4">Size Guide</button>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {product.sizes.map(size => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={cn(
                          "px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all",
                          selectedSize === size ? "bg-luxury-ink text-white" : "bg-white border border-luxury-ink/5 text-luxury-ink/40 hover:border-primary/50"
                        )}
                      >
                        {size} ft
                      </button>
                    ))}
                  </div>
                </div>

                {/* Color Selection */}
                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-widest">Select Color</label>
                  <div className="flex items-center space-x-4">
                    {product.colors.map(color => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={cn(
                          "w-10 h-10 rounded-full border-2 transition-all p-1",
                          selectedColor === color ? "border-primary" : "border-transparent"
                        )}
                      >
                        <div 
                          className="w-full h-full rounded-full shadow-inner" 
                          style={{ backgroundColor: color.toLowerCase().includes('gold') ? '#d4af37' : color.toLowerCase().includes('ruby') ? '#9b111e' : color.toLowerCase().includes('gray') ? '#808080' : '#f5f2ed' }} 
                        />
                      </button>
                    ))}
                    <span className="text-xs text-luxury-ink/60 font-medium italic font-serif">{selectedColor}</span>
                  </div>
                </div>

                {/* Add to Cart */}
                <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
                  <div className="flex items-center border border-luxury-ink/10 h-14">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-12 h-full flex items-center justify-center hover:bg-luxury-beige transition-colors"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-12 text-center text-sm font-bold">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-12 h-full flex items-center justify-center hover:bg-luxury-beige transition-colors"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                  <button 
                    onClick={() => addToCart(product, quantity, selectedSize)}
                    className="flex-grow h-14 bg-primary text-white text-xs font-bold uppercase tracking-widest hover:bg-primary-dark transition-all flex items-center justify-center space-x-3 px-12"
                  >
                    <ShoppingBag size={18} />
                    <span>Add to Wardrobe Collection</span>
                  </button>
                  <button className="w-14 h-14 border border-luxury-ink/10 flex items-center justify-center text-luxury-ink/40 hover:text-primary transition-colors">
                    <Heart size={20} />
                  </button>
                </div>
              </div>

              {/* USP */}
              <div className="grid grid-cols-3 gap-4 pt-10 border-t border-luxury-ink/5">
                {[
                  { icon: Truck, label: "Global Concierge Shipping" },
                  { icon: RotateCcw, label: "30-Day Royal Returns" },
                  { icon: Shield, label: "Authenticity Certified" }
                ].map((usp, i) => (
                  <div key={i} className="flex flex-col items-center text-center space-y-2">
                    <usp.icon size={18} className="text-primary mb-1" />
                    <span className="text-[8px] font-bold uppercase tracking-[0.15em] text-luxury-ink/40 leading-tight">
                      {usp.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Content */}
        <section className="mb-32">
          <div className="flex justify-center border-b border-luxury-ink/5 mb-12">
            {[
              { id: 'description', label: 'Artisan Notes' },
              { id: 'specifications', label: 'Technical Details' },
              { id: 'care', label: 'Luxury Care' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "px-8 py-5 text-[10px] font-bold uppercase tracking-[0.3em] transition-all relative",
                  activeTab === tab.id ? "text-primary" : "text-luxury-ink/40 hover:text-luxury-ink"
                )}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                )}
              </button>
            ))}
          </div>
          
          <div className="max-w-3xl mx-auto text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-luxury-ink/60 text-sm leading-relaxed"
              >
                {activeTab === 'description' && (
                  <div className="space-y-6">
                    <p>Designed to be the center-piece of your interior, this {product.name} piece combines ancient motifs with modern color science. Each rug is washed multiple times with organic minerals to achieve its unique soft-to-the-touch finish.</p>
                    <p className="italic font-serif">"A rug is the soul of a room. It sets the frequency for everything else."</p>
                  </div>
                )}
                {activeTab === 'specifications' && (
                  <div className="grid grid-cols-2 text-left gap-x-12 gap-y-4">
                    {[
                      { key: "Composition", val: "80% New Zealand Wool, 20% Mulberry Silk" },
                      { key: "Technique", val: "Traditional Hand-Knotted" },
                      { key: "Knots per Sq Inch", val: "220 DPI" },
                      { key: "Pile Height", val: "12mm" },
                      { key: "Origin", val: "Bhadohi, India" },
                      { key: "Weight", val: "Approx. 4.5kg / sqm" }
                    ].map((spec, i) => (
                      <div key={i} className="flex justify-between border-b border-luxury-ink/5 pb-2">
                        <span className="font-bold uppercase tracking-widest text-[9px] text-primary">{spec.key}</span>
                        <span className="text-[10px]">{spec.val}</span>
                      </div>
                    ))}
                  </div>
                )}
                {activeTab === 'care' && (
                  <div className="space-y-6">
                    <p>Professional cleaning only. For minor spills, blot immediately with a white cotton cloth. Do not rub. Avoid direct sunlight to prevent high-speed oxidation of natural dyes.</p>
                    <p>Rotation every 6 months is recommended to ensure even wear-patterns across the pile surface.</p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Related */}
        {relatedProducts.length > 0 && (
          <section>
            <div className="text-center mb-16">
              <p className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-4">Discovery</p>
              <h2 className="text-4xl font-serif">Complements Your Style</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
