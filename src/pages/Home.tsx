import { motion } from 'motion/react';
import { ArrowRight, Star, ShieldCheck, Zap, Hand } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { ProductCard } from '../components/ProductCard';

export function Home() {
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[100vh] flex items-center justify-center pt-20">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1594913785162-e648727d3cf5?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury Persian Carpet"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xs md:text-sm uppercase tracking-[0.4em] font-bold mb-6 text-primary"
          >
            Est. 1924 • Handcrafted Excellence
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-8xl font-serif leading-none mb-8"
          >
            Luxury Carpets for <br />
            <span className="italic font-light">Elegant Living</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link 
              to="/shop" 
              className="px-10 py-4 bg-primary text-white text-xs font-bold uppercase tracking-widest hover:bg-primary-dark transition-all"
            >
              Discover Collection
            </Link>
            <Link 
              to="/about" 
              className="px-10 py-4 border border-white text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-luxury-ink transition-all"
            >
              Our Heritage
            </Link>
          </motion.div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
          <div className="w-px h-20 bg-white/30 relative">
            <motion.div 
              animate={{ bottom: [0, 60, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_10px_#b59a6d]"
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-4">The Selection</p>
              <h2 className="text-4xl md:text-5xl font-serif">Curated Collections</h2>
            </div>
            <Link to="/shop" className="group flex items-center space-x-2 text-sm font-bold uppercase tracking-widest">
              <span>View All Products</span>
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 md:px-12 bg-luxury-beige">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1544022613-e87a039185e6?auto=format&fit=crop&q=80&w=1000" 
                alt="Crafting process"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 hidden xl:block w-64 p-8 bg-white shadow-2xl">
              <p className="text-sm italic font-serif leading-relaxed">
                "Every knot we tie is a tribute to a century of craftsmanship passed down through generations."
              </p>
              <p className="mt-4 text-[10px] font-bold uppercase tracking-widest text-primary">— Master Artisan</p>
            </div>
          </div>
          
          <div className="space-y-12">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-4">Our Craft</p>
              <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">Why Choose <br /> RoyalRugs</h2>
              <p className="text-luxury-ink/60 leading-relaxed max-w-lg">
                We don't just make rugs; we create heirlooms. Our commitment to quality involves sourcing the finest natural materials and employing traditional techniques.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: ShieldCheck, title: "Unrivaled Quality", desc: "100% natural fibers with lifetime durability." },
                { icon: Hand, title: "Master Artisanry", desc: "Hand-knotted by experts with decades of skill." },
                { icon: Star, title: "Premium Material", desc: "Sourced New Zealand Wool and Pure Silk." },
                { icon: Zap, title: "Sustainably Made", desc: "Ethically produced with organic natural dyes." }
              ].map((item, i) => (
                <div key={i} className="space-y-3">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
                    <item.icon size={20} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-sm font-bold uppercase tracking-widest">{item.title}</h4>
                  <p className="text-xs text-luxury-ink/60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-6">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-serif mb-16">Voices of Elegance</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "The rug transformed my living room into a sanctuary of warmth and luxury. The quality is tactile and undeniable.", author: "Sophia V.", role: "Interior Designer" },
              { text: "I've owned many rugs, but none possess the intricate detail and sturdy feel of RoyalRugs. Truly a piece of art.", author: "Marcus L.", role: "Architect" },
              { text: "From selection to delivery, the experience was premium. The Persian Heritage rug exceeded every expectation.", author: "Elena R.", role: "Homeowner" }
            ].map((item, i) => (
              <div key={i} className="p-10 border border-luxury-ink/5 bg-luxury-cream/30 space-y-6">
                <div className="flex justify-center space-x-1 text-primary">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-sm italic font-serif leading-relaxed text-luxury-ink/80 tracking-tight">"{item.text}"</p>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest">{item.author}</p>
                  <p className="text-[9px] uppercase tracking-widest text-primary mt-1">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
