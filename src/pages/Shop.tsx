import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SlidersHorizontal,
  ChevronDown,
  Search,
  X,
  Sparkles,
  TrendingUp,
  Star,
} from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../constants';
import { ProductCard } from '../components/ProductCard';
import { cn } from '../lib/utils';

const SORT_OPTIONS = [
  { label: 'Featured', icon: <Sparkles size={12} /> },
  { label: 'Price: Low to High', icon: <TrendingUp size={12} /> },
  { label: 'Price: High to Low', icon: <TrendingUp size={12} className="rotate-180" /> },
  { label: 'Rating', icon: <Star size={12} /> },
];

export function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return PRODUCTS
      .filter(p => selectedCategory === 'All' || p.category === selectedCategory)
      .filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
      .sort((a, b) => {
        if (sortBy === 'Price: Low to High') return a.price - b.price;
        if (sortBy === 'Price: High to Low') return b.price - a.price;
        if (sortBy === 'Rating') return b.rating - a.rating;
        return 0;
      });
  }, [selectedCategory, sortBy, searchQuery]);

  useEffect(() => {
    if (isMobileFilterOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isMobileFilterOpen]);

  return (
    <div className="pt-20 min-h-screen bg-white">

      {/* Hero Header */}
      <section className="relative bg-luxury-beige overflow-hidden py-20 md:py-28 px-6 border-b border-luxury-ink/5">
        {/* Decorative background text */}
        <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[120px] md:text-[200px] font-serif italic text-luxury-ink/[0.04] whitespace-nowrap select-none pointer-events-none">
          Collection
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-7xl mx-auto text-center space-y-5"
        >
          <p className="text-[10px] md:text-xs uppercase tracking-[0.5em] font-bold text-primary">Handcrafted Elegance</p>
          <h1 className="text-5xl md:text-7xl font-serif text-luxury-ink leading-tight">
            The <span className="italic">Collection</span>
          </h1>
          <p className="text-xs md:text-sm text-luxury-ink/50 uppercase tracking-widest max-w-lg mx-auto leading-relaxed">
            From modern minimalism to traditional majesty — find the perfect piece for your sanctuary.
          </p>

          {/* Inline search in hero */}
          <div className="pt-4 flex justify-center">
            <div className="relative w-full max-w-sm">
              <input
                type="text"
                placeholder="Search rugs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-luxury-ink/10 pl-5 pr-12 py-3.5 text-xs rounded-none focus:outline-none focus:border-primary/40 transition-all placeholder:text-luxury-ink/30 shadow-sm"
              />
              {searchQuery
                ? <button onClick={() => setSearchQuery('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-luxury-ink/40 hover:text-luxury-ink">
                    <X size={14} />
                  </button>
                : <Search size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-luxury-ink/30" />
              }
            </div>
          </div>
        </motion.div>
      </section>

      {/* Sticky Toolbar */}
      <section className="sticky top-[64px] z-30 bg-white/95 backdrop-blur-md border-b border-luxury-ink/5 px-4 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 py-0">

          {/* Desktop Categories */}
          <div className="hidden lg:flex items-center">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "text-[10px] font-bold uppercase tracking-widest transition-all relative py-5 px-5",
                  selectedCategory === cat
                    ? "text-primary"
                    : "text-luxury-ink/40 hover:text-luxury-ink"
                )}
              >
                {cat}
                {selectedCategory === cat && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setIsMobileFilterOpen(true)}
            className="lg:hidden flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest border border-luxury-ink/10 px-4 py-2"
          >
            <SlidersHorizontal size={14} />
            <span>Filters</span>
          </button>

          {/* Right: Sort */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <button
                onClick={() => setSortOpen(!sortOpen)}
                className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-luxury-ink py-5"
              >
                <span className="text-luxury-ink/40">Sort:</span>
                <span>{sortBy}</span>
                <ChevronDown
                  size={14}
                  className={cn("text-primary transition-transform duration-200", sortOpen && "rotate-180")}
                />
              </button>

              <AnimatePresence>
                {sortOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-1 w-52 bg-white shadow-2xl border border-luxury-ink/5 z-50"
                  >
                    {SORT_OPTIONS.map((opt) => (
                      <button
                        key={opt.label}
                        onClick={() => { setSortBy(opt.label); setSortOpen(false); }}
                        className={cn(
                          "w-full text-left px-5 py-3.5 text-[10px] font-bold uppercase tracking-widest flex items-center gap-3 transition-colors",
                          sortBy === opt.label
                            ? "bg-luxury-beige text-primary"
                            : "hover:bg-luxury-beige/50 text-luxury-ink"
                        )}
                      >
                        <span className="text-primary">{opt.icon}</span>
                        {opt.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Active Filters Bar */}
      <AnimatePresence>
        {(selectedCategory !== 'All' || searchQuery) && (
          <motion.section
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-luxury-beige/40 border-b border-luxury-ink/5 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 md:px-12 py-3 flex items-center gap-3 flex-wrap">
              <span className="text-[9px] uppercase tracking-widest text-luxury-ink/40 font-bold">Active:</span>
              {selectedCategory !== 'All' && (
                <span className="flex items-center gap-2 bg-white border border-luxury-ink/10 px-3 py-1 text-[9px] uppercase tracking-widest font-bold">
                  {selectedCategory}
                  <button onClick={() => setSelectedCategory('All')}><X size={10} /></button>
                </span>
              )}
              {searchQuery && (
                <span className="flex items-center gap-2 bg-white border border-luxury-ink/10 px-3 py-1 text-[9px] uppercase tracking-widest font-bold">
                  "{searchQuery}"
                  <button onClick={() => setSearchQuery('')}><X size={10} /></button>
                </span>
              )}
              <button
                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                className="ml-auto text-[9px] uppercase tracking-widest text-primary font-bold hover:underline"
              >
                Clear all
              </button>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <section className="py-12 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <p className="text-[10px] font-bold uppercase tracking-widest text-luxury-ink/30">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'} found
          </p>
          {selectedCategory !== 'All' && (
            <p className="text-[10px] font-bold uppercase tracking-widest text-primary hidden md:block">
              {selectedCategory}
            </p>
          )}
        </div>

        {/* Product Grid */}
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-14 md:gap-x-8 md:gap-y-16"
          >
            {filteredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i < 8 ? i * 0.05 : 0 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-32 text-center space-y-6"
          >
            <p className="text-6xl font-serif italic text-luxury-ink/10">Hmm.</p>
            <p className="text-xl md:text-2xl font-serif text-luxury-ink/40 italic">
              No pieces match your selection.
            </p>
            <p className="text-xs text-luxury-ink/30 uppercase tracking-widest">
              Try a different category or search term.
            </p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="mt-4 px-8 py-4 bg-luxury-ink text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-primary transition-colors duration-300"
            >
              Clear all filters
            </button>
          </motion.div>
        )}
      </section>

      {/* Bottom Banner */}
      <section className="relative overflow-hidden h-64 md:h-80 mt-8">
        <img
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80"
          alt="Custom Order"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-luxury-ink/60 flex items-center justify-center">
          <div className="text-center text-luxury-beige space-y-4 px-6">
            <p className="text-[10px] uppercase tracking-[0.4em] opacity-60">Can't find the right piece?</p>
            <h3 className="text-3xl md:text-4xl font-serif">Order a Custom Rug</h3>
            <p className="text-xs text-luxury-beige/50 max-w-sm mx-auto">
              Work directly with our master artisans to create something made just for you.
            </p>
            <button className="mt-4 inline-flex items-center gap-3 border border-luxury-beige/30 px-8 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-luxury-beige hover:text-luxury-ink transition-all duration-500">
              Start Custom Order
            </button>
          </div>
        </div>
      </section>

      {/* Mobile Filter Drawer */}
      <AnimatePresence>
        {isMobileFilterOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileFilterOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-[80%] max-w-xs bg-white z-[101] lg:hidden shadow-2xl flex flex-col"
            >
              <div className="flex justify-between items-center px-8 py-6 border-b border-luxury-ink/5">
                <h2 className="text-xl font-serif">Filters</h2>
                <button onClick={() => setIsMobileFilterOpen(false)} className="text-luxury-ink/40 hover:text-luxury-ink">
                  <X size={22} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-8 py-8 space-y-10">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-5">Categories</p>
                  <div className="flex flex-col space-y-1">
                    {CATEGORIES.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => { setSelectedCategory(cat); setIsMobileFilterOpen(false); }}
                        className={cn(
                          "text-left text-sm uppercase tracking-wider py-2.5 border-b border-luxury-ink/5 transition-colors",
                          selectedCategory === cat ? "text-primary font-bold" : "text-luxury-ink/50"
                        )}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-5">Sort By</p>
                  <div className="flex flex-col space-y-1">
                    {SORT_OPTIONS.map((opt) => (
                      <button
                        key={opt.label}
                        onClick={() => { setSortBy(opt.label); setIsMobileFilterOpen(false); }}
                        className={cn(
                          "text-left text-sm uppercase tracking-wider py-2.5 border-b border-luxury-ink/5 flex items-center gap-3 transition-colors",
                          sortBy === opt.label ? "text-primary font-bold" : "text-luxury-ink/50"
                        )}
                      >
                        <span className="text-primary">{opt.icon}</span>
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-8 py-6 border-t border-luxury-ink/5">
                <button
                  onClick={() => { setSelectedCategory('All'); setSearchQuery(''); setIsMobileFilterOpen(false); }}
                  className="w-full py-3 border border-luxury-ink/10 text-[10px] font-bold uppercase tracking-widest text-luxury-ink/50 hover:text-luxury-ink transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}