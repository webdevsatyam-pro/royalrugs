import { motion } from 'motion/react';

export function About() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1579309489505-18115682828b?auto=format&fit=crop&q=80&w=2000" 
            alt="Artisan at work"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs uppercase tracking-[0.4em] font-bold text-primary mb-6"
          >Our Heritage</motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif"
          >The Soul of Royalty</motion.h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-8">
            <p className="text-xs uppercase tracking-[0.3em] font-bold text-primary">Est. 1924</p>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">A Century of Handcrafted <br /><span className="italic">Excellence</span></h2>
            <div className="space-y-6 text-luxury-ink/60 text-sm leading-relaxed max-w-lg">
              <p>RoyalRugs began as a small atelier in the heart of the artisan district, where the focus was solely on perfecting the art of the hand-knotted Persian rug.</p>
              <p>For three generations, we have maintained a philosophy of patient craftsmanship. While the world rushed towards automation, we stayed committed to the slow, intentional rhythm of the loom.</p>
              <p>Today, our carpets are found in ambassadors' residences, luxury hotels, and modern homes that value heritage. We merge century-old techniques with contemporary color palettes to create pieces that are both timeless and current.</p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden rounded-full">
              <img 
                src="https://images.unsplash.com/photo-1560416431-7b796e6764fc?auto=format&fit=crop&q=80&w=1000" 
                alt="Finished Rug"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute top-1/2 -left-12 -translate-y-1/2 hidden xl:flex flex-col items-center space-y-4">
              <div className="w-px h-32 bg-primary/30" />
              <span className="writing-mode-vertical-rl rotate-180 text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Master Of Art</span>
              <div className="w-px h-32 bg-primary/30" />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-32 bg-luxury-beige px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center mb-24">
          <h2 className="text-4xl font-serif mb-6 italic">The Three Pillars of Perfection</h2>
          <div className="w-24 h-px bg-primary mx-auto" />
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          {[
            { title: "Honest Material", desc: "No synthetic blends. We only work with the purest Merino wool and mulberry silk found in the northern highlands." },
            { title: "Patient Process", desc: "A single rug can take up to 9 months to complete. We never rush the loom, nor do we compromise on density." },
            { title: "Fair Heritage", desc: "Our artisans are partners. We ensure fair wages and safe working environments while preserving dying crafts." }
          ].map((pillar, i) => (
            <div key={i} className="text-center space-y-6">
              <span className="text-5xl font-serif text-primary/20">0{i+1}</span>
              <h3 className="text-lg font-bold uppercase tracking-[0.2em]">{pillar.title}</h3>
              <p className="text-sm text-luxury-ink/60 leading-relaxed max-w-xs mx-auto">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
