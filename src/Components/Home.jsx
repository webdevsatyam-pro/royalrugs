import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star, ShieldCheck, Zap, Globe, Award } from "lucide-react";

const Home = () => {
  // Animation Variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.2 } },
  };

  const collections = [
    {
      title: "Vintage Persian",
      img: "https://images.unsplash.com/photo-1534889156217-d3c8ed48ca44?auto=format&fit=crop&q=80",
      price: "Starts from $899",
    },
    {
      title: "Modern Abstract",
      img: "https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&q=80",
      price: "Starts from $549",
    },
    {
      title: "Royal Silk Heritage",
      img: "https://images.unsplash.com/photo-1594051664213-9118c46c825a?auto=format&fit=crop&q=80",
      price: "Starts from $1,299",
    },
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&q=80"
            className="w-full h-full object-cover"
            alt="Luxury Rug"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </motion.div>

        <div className="relative z-10 text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-amber-400 tracking-[0.4em] uppercase text-sm mb-4 font-bold">
            Est. 1924 • Hand-Knotted Excellence
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-5xl md:text-8xl font-serif text-white mb-8 leading-tight">
            Masterpieces <br />{" "}
            <span className="italic font-light">Under Your Feet</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-700 hover:bg-amber-800 text-white px-10 py-4 font-bold tracking-widest transition-all flex items-center justify-center gap-2 group">
              SHOP COLLECTION{" "}
              <ArrowRight
                size={20}
                className="group-hover:translate-x-2 transition-transform"
              />
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-4 font-bold tracking-widest hover:bg-white hover:text-black transition-all">
              VIRTUAL SHOWROOM
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. TRUST STRIP */}
      <div className="bg-slate-50 py-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { Icon: Award, text: "Authentic Silk" },
            { Icon: Globe, text: "Global Shipping" },
            { Icon: ShieldCheck, text: "Life-time Warranty" },
            { Icon: Zap, text: "Easy Restoration" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-2">
              <item.Icon className="text-amber-700" size={28} />
              <span className="text-xs font-bold uppercase tracking-widest text-slate-600">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. FEATURED COLLECTIONS */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-serif text-slate-900">
              Curated Collections
            </h2>
            <div className="h-1 w-20 bg-amber-600 mt-4"></div>
          </div>
          <button className="hidden md:block text-amber-800 font-bold border-b-2 border-amber-800 pb-1 hover:text-amber-600 transition">
            View All Ranges
          </button>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {collections.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group cursor-pointer">
              <div className="relative h-[500px] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all"></div>
                <div className="absolute bottom-10 left-8 text-white">
                  <h3 className="text-2xl font-serif mb-2">{item.title}</h3>
                  <p className="text-amber-400 text-sm font-bold">
                    {item.price}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 4. BRAND STORY SECTION */}
      <section className="bg-[#0f172a] py-24 px-6 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}>
            <h4 className="text-amber-500 font-bold tracking-[0.3em] uppercase text-xs mb-4">
              Our Heritage
            </h4>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
              Hand-Woven With <br /> Passion and History
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8 text-lg">
              Every Royalrug is more than just home decor; it's a piece of
              history. Our artisans spend months hand-knotting each thread using
              techniques passed down through ten generations of master weavers
              in Isfahan and Anatolia.
            </p>
            <div className="flex gap-12">
              <div>
                <span className="block text-4xl font-serif text-white">
                  100+
                </span>
                <span className="text-amber-500 text-xs uppercase tracking-widest">
                  Years Experience
                </span>
              </div>
              <div>
                <span className="block text-4xl font-serif text-white">
                  50k+
                </span>
                <span className="text-amber-500 text-xs uppercase tracking-widest">
                  Happy Homes
                </span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative">
            <img
              src="https://images.unsplash.com/photo-1576020488214-239634f1965c?auto=format&fit=crop&q=80"
              className="rounded-sm shadow-2xl"
              alt="Craftsmanship"
            />
            <div className="absolute -bottom-6 -left-6 bg-amber-700 p-8 hidden md:block">
              <p className="text-sm font-bold italic">
                "Luxury is the quality that lasts long after the price is
                forgotten."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. PRODUCT TESTIMONIALS */}
      <section className="py-24 bg-white text-center">
        <h2 className="text-3xl font-serif mb-16">
          Trusted By Interior Designers
        </h2>
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex justify-center text-amber-500 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} fill="currentColor" />
            ))}
          </div>
          <p className="text-2xl font-light italic text-slate-700 leading-relaxed mb-8">
            "The quality of the Persian silk rug I received from Royalrugs is
            beyond words. It has completely transformed my living room into a
            regal space. Highly recommended!"
          </p>
          <h5 className="font-bold tracking-widest uppercase text-sm">
            — Sarah Johnson, NYC Designer
          </h5>
        </div>
      </section>
    </div>
  );
};

export default Home;
