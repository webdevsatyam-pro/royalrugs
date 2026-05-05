import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-luxury-beige pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <Link to="/" className="text-2xl font-serif font-bold tracking-tighter">
            Royal<span className="text-primary font-light italic">Rugs</span>
          </Link>
          <p className="text-luxury-ink/60 text-sm leading-relaxed max-w-xs">
            Exquisite handmade carpets that bring timeless elegance and royal comfort to your living spaces. Crafted with heritage.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-9 h-9 rounded-full border border-luxury-ink/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all">
              <Instagram size={18} strokeWidth={1.5} />
            </a>
            <a href="#" className="w-9 h-9 rounded-full border border-luxury-ink/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all">
              <Facebook size={18} strokeWidth={1.5} />
            </a>
            <a href="#" className="w-9 h-9 rounded-full border border-luxury-ink/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all">
              <Twitter size={18} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-xs font-bold uppercase tracking-widest text-primary">Quick Links</h4>
          <ul className="space-y-4">
            <li><Link to="/shop" className="text-sm text-luxury-ink/60 hover:text-primary transition-colors">Shop Collection</Link></li>
            <li><Link to="/about" className="text-sm text-luxury-ink/60 hover:text-primary transition-colors">Our Heritage</Link></li>
            <li><Link to="/contact" className="text-sm text-luxury-ink/60 hover:text-primary transition-colors">Contact Us</Link></li>
            <li><Link to="/faq" className="text-sm text-luxury-ink/60 hover:text-primary transition-colors">Shipping & Returns</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-xs font-bold uppercase tracking-widest text-primary">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3 text-sm text-luxury-ink/60">
              <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
              <span>123 Rug Street, Artisan District,<br />New Delhi, India</span>
            </li>
            <li className="flex items-center space-x-3 text-sm text-luxury-ink/60">
              <Phone size={18} className="text-primary flex-shrink-0" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center space-x-3 text-sm text-luxury-ink/60">
              <Mail size={18} className="text-primary flex-shrink-0" />
              <span>concierge@royalrugs.com</span>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-xs font-bold uppercase tracking-widest text-primary">Newsletter</h4>
          <p className="text-sm text-luxury-ink/60 leading-relaxed">
            Join the inner circle for exclusive previews and offers.
          </p>
          <form className="relative group">
            <input 
              type="email" 
              placeholder="Your email address"
              className="w-full bg-white border border-luxury-ink/5 px-4 py-3 text-sm focus:outline-none focus:border-primary transition-all pr-12"
            />
            <button className="absolute right-0 top-0 h-full px-4 text-primary hover:text-primary-dark transition-colors">
              <Mail size={18} />
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-top border-luxury-ink/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-[10px] uppercase tracking-[0.2em] text-luxury-ink/40">
          &copy; 2026 RoyalRugs. All rights reserved.
        </p>
        <div className="flex space-x-8 text-[10px] uppercase tracking-[0.2em] text-luxury-ink/40">
          <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
