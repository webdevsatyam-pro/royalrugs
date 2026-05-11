import { motion } from 'framer-motion';
import { ArrowRight, Star, ShieldCheck, Truck, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { ProductCard } from '../components/ProductCard';

export function Home() {
  // Sirf top 4 products dikhane ke liye
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="bg-luxury-beige/30">
      {/* 1. Hero Section - Minimalist & Impactful */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-luxury-beige">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&q=80" 
            alt="Luxury Interior" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-luxury-beige via-luxury-beige/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <p className="text-xs uppercase tracking-[0.5em] font-bold text-primary mb-6">Artistry in Every Thread</p>
            <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-8 text-luxury-ink">
              Elevate Your <br />
              <span className="italic">Living Space</span>
            </h1>
            <p className="text-sm md:text-base text-luxury-ink/70 max-w-md mb-10 leading-relaxed tracking-wide">
              Experience the fusion of ancient craftsmanship and contemporary design with our curated collection of heritage rugs.
            </p>
            <Link 
              to="/shop"
              className="inline-flex items-center space-x-4 bg-luxury-ink text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-primary transition-colors duration-500"
            >
              <span>Explore Collection</span>
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. Brand Values - Subtle & Clean */}
      <section className="py-20 bg-white border-b border-luxury-ink/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { icon: <Globe size={24} />, title: "Ethically Sourced", desc: "Fair trade certified" },
              { icon: <ShieldCheck size={24} />, title: "Lifetime Quality", desc: "Hand-knotted durability" },
              { icon: <Truck size={24} />, title: "Global Shipping", desc: "Doorstep delivery" },
              { icon: <Star size={24} />, title: "Unique Designs", desc: "One-of-a-kind pieces" },
            ].map((item, i) => (
              <div key={i} className="text-center space-y-3">
                <div className="text-primary flex justify-center">{item.icon}</div>
                <h3 className="text-[10px] font-bold uppercase tracking-widest">{item.title}</h3>
                <p className="text-xs text-luxury-ink/50">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Products - The "Best Sellers" */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] font-bold text-primary">Curated for you</p>
            <h2 className="text-4xl font-serif">Seasonal Favorites</h2>
          </div>
          <Link to="/shop" className="group flex items-center space-x-2 text-xs font-bold uppercase tracking-widest border-b border-luxury-ink pb-1">
            <span>View All Pieces</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 4. Story Section - Visual Appeal */}
      <section className="py-24 bg-luxury-ink text-luxury-beige overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-[4/5] overflow-hidden"
              >
                <img 
                  src="https://images.unsplash.com/photo-1576020482031-f283d0382482?auto=format&fit=crop&q=80" 
                  alt="Craftsmanship" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="absolute -bottom-6 -right-6 bg-primary p-8 hidden lg:block">
                <p className="text-4xl font-serif italic">100%</p>
                <p className="text-[10px] uppercase tracking-widest font-bold">Natural Wool</p>
              </div>
            </div>

            <div className="space-y-8">
              <p className="text-xs uppercase tracking-[0.4em] font-bold text-primary/80">Our Heritage</p>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight">Beyond a rug, it's a piece of history.</h2>
              <p className="text-luxury-beige/60 leading-relaxed font-light">
                Each knot is a testament to generations of skill. Our artisans spend months creating a single piece, 
                ensuring that what reaches your home isn't just decor, but a legacy that will be passed down for decades.
              </p>
              <button className="text-[10px] font-bold uppercase tracking-[0.2em] px-8 py-4 border border-luxury-beige/20 hover:bg-luxury-beige hover:text-luxury-ink transition-all duration-500">
                Learn Our Process
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Newsletter - Minimalist CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl font-serif">Join the Inner Circle</h2>
          <p className="text-xs text-luxury-ink/50 uppercase tracking-widest">Receive private collection launches and styling tips.</p>
          <form className="flex flex-col sm:flex-row gap-4 mt-8">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="flex-grow bg-white border border-luxury-ink/10 px-6 py-4 text-xs focus:outline-none focus:border-primary transition-colors"
            />
            <button className="bg-luxury-ink text-white px-10 py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-primary transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}