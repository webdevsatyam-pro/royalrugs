import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // 'motion/react' ki jagah standard framer-motion recommend hai
import { 
  LayoutGrid, 
  List, 
  SlidersHorizontal, 
  ChevronDown, 
  Search, 
  X, 
  Filter 
} from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../constants';
import { ProductCard } from '../components/ProductCard';
import { cn } from '../lib/utils';

export function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Filter Logic
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

  // Disable scroll when mobile menu is open
  useEffect(() => {
    if (isMobileFilterOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isMobileFilterOpen]);

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-luxury-beige py-12 md:py-20 px-6 border-b border-luxury-ink/5">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto text-center space-y-4"
        >
          <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold text-primary">Handcrafted Elegance</p>
          <h1 className="text-4xl md:text-6xl font-serif text-luxury-ink">The Collection</h1>
          <p className="text-xs md:text-sm text-luxury-ink/60 uppercase tracking-widest max-w-lg mx-auto leading-relaxed">
            From modern minimalism to traditional majesty, find the perfect piece for your sanctuary.
          </p>
        </motion.div>
      </section>

      {/* Sticky Toolbar */}
      <section className="sticky top-[64px] z-30 bg-white/90 backdrop-blur-md border-b border-luxury-ink/5 px-4 md:px-12 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Desktop Categories */}
          <div className="hidden lg:flex items-center space-x-8">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "text-[10px] font-bold uppercase tracking-widest transition-all relative py-2",
                  selectedCategory === cat ? "text-primary" : "text-luxury-ink/40 hover:text-luxury-ink"
                )}
              >
                {cat}
                {selectedCategory === cat && (
                  <motion.div layoutId="underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Filter Toggle */}
          <button 
            onClick={() => setIsMobileFilterOpen(true)}
            className="lg:hidden flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest border border-luxury-ink/10 px-4 py-2 rounded-full"
          >
            <SlidersHorizontal size={14} />
            <span>Filters</span>
          </button>

          {/* Search & Sort */}
          <div className="flex items-center space-x-4 flex-1 justify-end">
            <div className="relative group flex-1 max-w-[200px] md:max-w-xs">
              <input 
                type="text" 
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-luxury-beige/50 border border-transparent px-4 py-2 pr-10 text-xs rounded-full focus:outline-none focus:border-primary/20 focus:bg-white transition-all"
              />
              <Search size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-luxury-ink/30" />
            </div>

            <div className="relative group hidden sm:block">
              <button className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-luxury-ink">
                <span className="text-luxury-ink/40">Sort:</span>
                <span>{sortBy}</span>
                <ChevronDown size={14} className="text-primary group-hover:rotate-180 transition-transform" />
              </button>
              {/* Dropdown Menu */}
              <div className="absolute right-0 top-full mt-2 w-48 bg-white shadow-xl border border-luxury-ink/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                {['Featured', 'Price: Low to High', 'Price: High to Low', 'Rating'].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setSortBy(opt)}
                    className="w-full text-left px-5 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-luxury-beige transition-colors"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 md:px-12 max-w-7xl mx-auto">
        {/* Results Info */}
        <div className="flex justify-between items-center mb-10 text-luxury-ink/40">
          <p className="text-[10px] font-bold uppercase tracking-widest">
            Showing {filteredProducts.length} pieces
          </p>
        </div>

        {/* Product Grid */}
        <AnimatePresence mode="popLayout">
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12 md:gap-x-8 md:gap-y-16"
          >
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
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
            <p className="text-xl md:text-2xl font-serif text-luxury-ink/40 italic">No pieces match your current selection.</p>
            <button 
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="px-8 py-3 bg-primary text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-primary/90 transition-colors"
            >
              Clear all filters
            </button>
          </motion.div>
        )}
      </section>

      {/* Mobile Filter Drawer (Overlay) */}
      <AnimatePresence>
        {isMobileFilterOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileFilterOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] lg:hidden"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-[80%] max-w-xs bg-white z-[101] p-8 lg:hidden shadow-2xl"
            >
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-xl font-serif">Filters</h2>
                <button onClick={() => setIsMobileFilterOpen(false)}><X size={24} /></button>
              </div>

              <div className="space-y-8">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-4">Categories</p>
                  <div className="flex flex-col space-y-3">
                    {CATEGORIES.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => { setSelectedCategory(cat); setIsMobileFilterOpen(false); }}
                        className={cn(
                          "text-left text-sm uppercase tracking-wider py-1 transition-colors",
                          selectedCategory === cat ? "text-primary font-bold" : "text-luxury-ink/60"
                        )}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-4">Sort By</p>
                  <div className="flex flex-col space-y-3">
                    {['Featured', 'Price: Low to High', 'Price: High to Low', 'Rating'].map((opt) => (
                      <button
                        key={opt}
                        onClick={() => { setSortBy(opt); setIsMobileFilterOpen(false); }}
                        className={cn(
                          "text-left text-sm uppercase tracking-wider py-1 transition-colors",
                          sortBy === opt ? "text-primary font-bold" : "text-luxury-ink/60"
                        )}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}