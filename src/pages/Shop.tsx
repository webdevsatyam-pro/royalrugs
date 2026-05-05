import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LayoutGrid, List, SlidersHorizontal, ChevronDown, Search } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../constants';
import { ProductCard } from '../components/ProductCard';
import { cn } from '../lib/utils';

export function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return PRODUCTS
      .filter(p => selectedCategory === 'All' || p.category === selectedCategory)
      .filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
      .sort((a, b) => {
        if (sortBy === 'Price: Low to High') return a.price - b.price;
        if (sortBy === 'Price: High to Low') return b.price - a.price;
        if (sortBy === 'Rating') return b.rating - a.rating;
        return 0; // Default featured
      });
  }, [selectedCategory, sortBy, searchQuery]);

  return (
    <div className="pt-24 min-h-screen">
      {/* Header */}
      <section className="bg-luxury-beige py-16 px-6 md:px-12 text-center border-b border-luxury-ink/5">
        <div className="max-w-4xl mx-auto space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-primary">Discover</p>
          <h1 className="text-5xl font-serif">The Collection</h1>
          <p className="text-sm text-luxury-ink/60 uppercase tracking-widest max-w-lg mx-auto">
            From modern minimalism to traditional majesty
          </p>
        </div>
      </section>

      {/* Toolbar */}
      <section className="sticky top-16 z-40 bg-white/80 backdrop-blur-md border-b border-luxury-ink/5 px-6 md:px-12 py-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center space-x-8 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-all pb-1 border-b-2",
                  selectedCategory === cat ? "text-primary border-primary" : "text-luxury-ink/40 border-transparent hover:text-luxury-ink"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-6 flex-grow justify-end">
            <div className="relative hidden sm:block">
              <input 
                type="text" 
                placeholder="Search rugs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-luxury-beige border border-transparent px-4 py-2 pr-10 text-xs focus:outline-none focus:border-primary/30 focus:bg-white transition-all w-48 focus:w-64"
              />
              <Search size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-luxury-ink/30" />
            </div>

            <div className="relative group">
              <button className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-luxury-ink group">
                <span className="text-luxury-ink/40">Sort:</span>
                <span>{sortBy}</span>
                <ChevronDown size={14} className="text-primary group-hover:translate-y-0.5 transition-transform" />
              </button>
              <div className="absolute right-0 top-full mt-2 w-48 bg-white shadow-2xl border border-luxury-ink/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                {['Featured', 'Price: Low to High', 'Price: High to Low', 'Rating'].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setSortBy(opt)}
                    className="w-full text-left px-5 py-3 text-xs font-bold uppercase tracking-widest hover:bg-luxury-beige transition-colors"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
            
            <button className="sm:hidden text-luxury-ink/40">
              <SlidersHorizontal size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="popLayout">
            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16"
            >
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </motion.div>
          </AnimatePresence>
          
          {filteredProducts.length === 0 && (
            <div className="py-40 text-center space-y-6">
              <p className="text-2xl font-serif text-luxury-ink/40 italic">No pieces match your search.</p>
              <button 
                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                className="text-xs font-bold uppercase tracking-widest text-primary hover:text-primary-dark"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
