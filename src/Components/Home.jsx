import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="bg-zinc-950 text-white pt-20">
      {" "}
      {/* pt-20 navbar ke gap ko fix karega */}
      {/* 1. HERO SECTION (Minimal) */}
      <section className="relative h-[85vh] w-full px-6 flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1594051664213-9118c46c825a?auto=format&fit=crop&q=80"
            className="w-full h-full object-cover opacity-40"
            alt="Rug Hero"
          />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl">
            <p className="text-amber-500 uppercase tracking-[0.3em] text-[10px] font-bold mb-4">
              New Season 2024
            </p>
            <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-8">
              Artisan Rugs <br /> For Modern Living
            </h1>
            <button className="bg-white text-black px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-amber-500 transition-colors duration-500 flex items-center gap-4">
              Explore Collection <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>
      </section>
      {/* 2. CATEGORIES (Simple Grid) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Traditional",
              img: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2070",
            },
            {
              title: "Minimalist",
              img: "https://images.unsplash.com/photo-1600166898405-da9535204843?q=80&w=1944",
            },
            {
              title: "Vintage",
              img: "https://images.unsplash.com/photo-1534889156217-d3c8ed48ca44?q=80&w=1935",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="group cursor-pointer relative h-[500px] overflow-hidden">
              <img
                src={item.img}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                alt={item.title}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
              <div className="absolute bottom-10 left-10">
                <h3 className="text-2xl font-serif text-white">{item.title}</h3>
                <p className="text-amber-500 text-xs uppercase tracking-widest mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  View Products →
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      {/* 3. ABOUT MINI (Clean) */}
      <section className="py-24 bg-zinc-900/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-amber-500 uppercase tracking-widest text-xs font-bold mb-6 italic">
            The Craft
          </h2>
          <p className="text-2xl md:text-3xl font-serif leading-relaxed text-zinc-300">
            "Each rug in our collection is hand-picked and ethically sourced
            from artisans who have been mastering the craft for generations."
          </p>
          <div className="mt-10 h-px w-20 bg-amber-500 mx-auto"></div>
        </div>
      </section>
      {/* 4. NEWSLETTER (Non-Flashy) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="border border-white/10 p-16 text-center">
          <h2 className="text-3xl font-serif mb-4">Stay in Touch</h2>
          <p className="text-zinc-500 text-sm mb-10 tracking-widest">
            SUBSCRIBE FOR NEW ARRIVALS AND CURATED DESIGN TIPS
          </p>
          <div className="max-w-md mx-auto flex border-b border-zinc-700 pb-2">
            <input
              type="email"
              placeholder="YOUR EMAIL"
              className="bg-transparent flex-1 outline-none text-xs tracking-widest"
            />
            <button className="text-xs font-bold uppercase tracking-widest hover:text-amber-500 transition-colors">
              Join
            </button>
          </div>
        </div>
      </section>
      {/* FOOTER */}
      <footer className="py-10 border-t border-white/5 text-center">
        <p className="text-zinc-600 text-[10px] uppercase tracking-[0.3em]">
          © 2024 Royalrugs Heritage Collections
        </p>
      </footer>
    </div>
  );
};

export default Home;
