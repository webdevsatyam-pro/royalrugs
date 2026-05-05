import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Product } from '../types';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
  key?: string | number;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group"
    >
      <Link to={`/product/${product.id}`}>
        <div className="relative aspect-[4/5] overflow-hidden bg-luxury-beige mb-4">
          <img 
            src={product.image} 
            alt={product.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <button 
            onClick={(e) => {
              e.preventDefault();
              addToCart(product, 1, product.sizes[0]);
            }}
            className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 bg-white shadow-xl py-3 flex items-center justify-center space-x-2 text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-white"
          >
            <ShoppingBag size={14} />
            <span>Quick Add</span>
          </button>
        </div>
      </Link>
      
      <div className="space-y-1">
        <p className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">
          {product.category}
        </p>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-lg leading-tight group-hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm font-medium text-luxury-ink/60">
          ${product.price.toLocaleString()}
        </p>
      </div>
    </motion.div>
  );
}
