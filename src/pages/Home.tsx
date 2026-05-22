import { motion } from 'framer-motion';
import { ArrowRight, Star, ShieldCheck, Truck, Globe, Award, Heart, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { ProductCard } from '../components/ProductCard';

export function Home() {
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="bg-luxury-beige/30">

      {/* 1. Hero Section */}
      <section className="relative h-[95vh] flex items-center overflow-hidden bg-luxury-beige">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&q=80"
            alt="Luxury Interior"
            className="w-full h-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-luxury-beige via-luxury-beige/50 to-transparent" />
        </div>

        {/* Decorative vertical text */}
        <div className="absolute right-12 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col items-center gap-4">
          <div className="h-24 w-px bg-luxury-ink/20" />
          <p className="text-[9px] uppercase tracking-[0.5em] rotate-90 text-luxury-ink/40 whitespace-nowrap">Scroll to Explore</p>
          <div className="h-24 w-px bg-luxury-ink/20" />
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
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center space-x-4 bg-luxury-ink text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-primary transition-colors duration-500"
              >
                <span>Explore Collection</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center space-x-4 border border-luxury-ink text-luxury-ink px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-luxury-ink hover:text-white transition-all duration-500"
              >
                <span>Our Story</span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom badge */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3">
          <div className="h-px w-12 bg-luxury-ink/30" />
          <p className="text-[9px] uppercase tracking-[0.4em] text-luxury-ink/50">Est. 1982 · Varanasi, India</p>
          <div className="h-px w-12 bg-luxury-ink/30" />
        </div>
      </section>

      {/* 2. Stats Bar */}
      <section className="py-10 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "40+", label: "Years of Craft" },
              { number: "12K+", label: "Rugs Sold" },
              { number: "80+", label: "Countries Shipped" },
              { number: "100%", label: "Handmade" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-3xl font-serif italic mb-1">{stat.number}</p>
                <p className="text-[9px] uppercase tracking-widest font-bold opacity-70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Brand Values */}
      <section className="py-20 bg-white border-b border-luxury-ink/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { icon: <Globe size={24} />, title: "Ethically Sourced", desc: "Fair trade certified from origin villages" },
              { icon: <ShieldCheck size={24} />, title: "Lifetime Quality", desc: "Hand-knotted for lasting durability" },
              { icon: <Truck size={24} />, title: "Global Shipping", desc: "Safe & insured doorstep delivery" },
              { icon: <Star size={24} />, title: "Unique Designs", desc: "One-of-a-kind, never replicated" },
            ].map((item, i) => (
              <div key={i} className="text-center space-y-3 group">
                <div className="text-primary flex justify-center group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="text-[10px] font-bold uppercase tracking-widest">{item.title}</h3>
                <p className="text-xs text-luxury-ink/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Featured Products */}
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

      {/* 5. Full-Width Editorial Banner */}
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80"
          alt="Luxury Room"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-luxury-ink/50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center text-luxury-beige max-w-2xl px-6"
          >
            <p className="text-xs uppercase tracking-[0.5em] mb-5 opacity-70">The Art of Living</p>
            <h2 className="text-4xl md:text-6xl font-serif italic leading-tight mb-8">
              "A room speaks when it breathes with craft."
            </h2>
            <Link
              to="/shop"
              className="inline-flex items-center space-x-3 text-[10px] font-bold uppercase tracking-widest border border-luxury-beige/50 px-8 py-4 hover:bg-luxury-beige hover:text-luxury-ink transition-all duration-500"
            >
              <span>Discover the Collection</span>
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 6. Story Section */}
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
              <div className="grid grid-cols-2 gap-6 pt-4">
                {[
                  { icon: <Award size={18} />, label: "Award Winning" },
                  { icon: <Heart size={18} />, label: "Made with Love" },
                  { icon: <Users size={18} />, label: "500+ Artisans" },
                  { icon: <Globe size={18} />, label: "World Recognized" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-luxury-beige/70">
                    <span className="text-primary">{item.icon}</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest">{item.label}</span>
                  </div>
                ))}
              </div>
              <button className="text-[10px] font-bold uppercase tracking-[0.2em] px-8 py-4 border border-luxury-beige/20 hover:bg-luxury-beige hover:text-luxury-ink transition-all duration-500">
                Learn Our Process
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. How It's Made - Process Section */}
      <section className="py-24 bg-white px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] font-bold text-primary">Behind the Piece</p>
            <h2 className="text-4xl font-serif">The Making of a Masterpiece</h2>
            <p className="text-sm text-luxury-ink/50 max-w-md mx-auto leading-relaxed">
              From fleece to floor — every rug is a 6-month journey of devotion.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Wool Sourcing",
                desc: "Hand-selected wool from high-altitude sheep in the Himalayas — soft, durable, and natural.",
                img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=400",
              },
              {
                step: "02",
                title: "Natural Dyeing",
                desc: "Colors derived from roots, barks, and minerals. No chemicals. No shortcuts.",
                img: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80&w=400",
              },
              {
                step: "03",
                title: "Hand Knotting",
                desc: "Each knot is placed by hand — up to 300 per square inch — taking months of patient skill.",
                img: "https://images.unsplash.com/photo-1604881991720-f91add269bed?auto=format&fit=crop&q=80&w=400",
              },
              {
                step: "04",
                title: "Final Finishing",
                desc: "Washed in mountain streams, sun-dried, and hand-trimmed to perfection before it reaches you.",
                img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=400",
              },
            ].map((item, i) => (
              <div key={i} className="group space-y-5">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <p className="text-xs font-bold text-primary tracking-widest">{item.step}</p>
                <h3 className="text-base font-serif">{item.title}</h3>
                <p className="text-xs text-luxury-ink/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="py-24 bg-luxury-beige/50 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] font-bold text-primary">What People Say</p>
            <h2 className="text-4xl font-serif">Loved Around the World</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Mitchell",
                location: "London, UK",
                review: "The rug transformed our living room completely. The craftsmanship is beyond anything I've seen in modern stores. Worth every penny.",
                stars: 5,
              },
              {
                name: "Arjun Mehta",
                location: "Mumbai, India",
                review: "I've been collecting rugs for 20 years. This piece is something else — you can feel the history and devotion in every fiber.",
                stars: 5,
              },
              {
                name: "Claire Dupont",
                location: "Paris, France",
                review: "From the ordering experience to the packaging and the rug itself — pure luxury. Our Parisian apartment feels like a palace now.",
                stars: 5,
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white p-8 space-y-6"
              >
                <div className="flex gap-1">
                  {[...Array(t.stars)].map((_, s) => (
                    <Star key={s} size={12} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-luxury-ink/70 leading-relaxed italic">"{t.review}"</p>
                <div className="pt-4 border-t border-luxury-ink/5">
                  <p className="text-xs font-bold">{t.name}</p>
                  <p className="text-[10px] text-luxury-ink/40 uppercase tracking-wider mt-1">{t.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Instagram / Lookbook Grid */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] font-bold text-primary">Real Homes, Real Beauty</p>
          <h2 className="text-4xl font-serif">The Lookbook</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=500",
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=500",
            "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=500",
            "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&q=80&w=500",
          ].map((src, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="aspect-square overflow-hidden cursor-pointer"
            >
              <img src={src} alt={`Lookbook ${i + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* 10. Newsletter */}
      <section className="py-24 px-6 bg-luxury-ink text-luxury-beige text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          <p className="text-xs uppercase tracking-[0.4em] opacity-50">Exclusive Access</p>
          <h2 className="text-3xl md:text-4xl font-serif">Join the Inner Circle</h2>
          <p className="text-xs text-luxury-beige/50 uppercase tracking-widest">
            Receive private collection launches, styling tips, and early access to new arrivals.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 mt-8">
            <input
              type="email"
              placeholder="Your Email Address"
              className="flex-grow bg-white/5 border border-luxury-beige/10 px-6 py-4 text-xs text-luxury-beige placeholder:text-luxury-beige/30 focus:outline-none focus:border-primary transition-colors"
            />
            <button className="bg-primary text-white px-10 py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-luxury-beige hover:text-luxury-ink transition-colors duration-500">
              Subscribe
            </button>
          </form>
          <p className="text-[9px] text-luxury-beige/30 uppercase tracking-wider">No spam. Unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  );
}