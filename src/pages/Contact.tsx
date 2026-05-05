import { Mail, Phone, MapPin, Search } from 'lucide-react';
import { motion } from 'motion/react';

export function Contact() {
  return (
    <div className="pt-32 pb-24">
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-12">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.3em] font-bold text-primary">Get In Touch</p>
              <h1 className="text-5xl md:text-6xl font-serif">A Personal <br /><span className="italic font-light">Concierge</span></h1>
              <p className="text-sm text-luxury-ink/60 leading-relaxed max-w-sm">
                Inquiry about a custom piece or need assistance selecting the perfect rug? Our concierge team is at your disposal.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-luxury-beige rounded-full flex items-center justify-center flex-shrink-0 text-primary">
                  <MapPin size={20} strokeWidth={1.5} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold uppercase tracking-widest">Main Atelier</h4>
                  <p className="text-sm text-luxury-ink/60">123 Rug Street, Artisan District, New Delhi, India</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-luxury-beige rounded-full flex items-center justify-center flex-shrink-0 text-primary">
                  <Phone size={20} strokeWidth={1.5} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold uppercase tracking-widest">Client Service</h4>
                  <p className="text-sm text-luxury-ink/60">+91 98765 43210</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-luxury-beige rounded-full flex items-center justify-center flex-shrink-0 text-primary">
                  <Mail size={20} strokeWidth={1.5} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold uppercase tracking-widest">Electronic Mail</h4>
                  <p className="text-sm text-luxury-ink/60">concierge@royalrugs.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-10 md:p-16 shadow-[0_40px_100px_rgba(0,0,0,0.03)] border border-luxury-ink/5">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-luxury-ink/40">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full border-b border-luxury-ink/10 py-3 focus:outline-none focus:border-primary transition-colors text-sm bg-transparent"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-luxury-ink/40">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full border-b border-luxury-ink/10 py-3 focus:outline-none focus:border-primary transition-colors text-sm bg-transparent"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-luxury-ink/40">Subject</label>
                <select className="w-full border-b border-luxury-ink/10 py-3 focus:outline-none focus:border-primary transition-colors text-sm bg-transparent appearance-none">
                  <option>General Inquiry</option>
                  <option>Custom Commission</option>
                  <option>Press & Partnerships</option>
                  <option>Order Assistance</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-luxury-ink/40">Your Message</label>
                <textarea 
                  rows={4}
                  className="w-full border-b border-luxury-ink/10 py-3 focus:outline-none focus:border-primary transition-colors text-sm bg-transparent resize-none"
                  placeholder="How can we assist you?"
                />
              </div>
              
              <button 
                type="button"
                className="w-full py-5 bg-primary text-white text-xs font-bold uppercase tracking-[0.3em] hover:bg-primary-dark transition-all"
              >
                Send Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="mt-32 h-[500px] bg-luxury-beige overflow-hidden relative grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
        <img 
          src="https://images.unsplash.com/photo-1594913785162-e648727d3cf5?auto=format&fit=crop&q=80&w=2000" 
          alt="Map Background"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white p-6 shadow-2xl space-y-4 max-w-xs text-center border-t-4 border-primary">
            <h4 className="text-xs font-bold uppercase tracking-widest">Our Boutique</h4>
            <p className="text-xs text-luxury-ink/60">New Delhi Artisan District, India</p>
            <button className="text-[9px] font-bold uppercase tracking-widest text-primary border-b border-primary/30">Get Directions</button>
          </div>
        </div>
      </section>
    </div>
  );
}
