import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Persian Heritage Silk',
    category: 'Luxury',
    price: 2450,
    description: 'A masterpiece of hand-knotted silk, featuring intricate floral patterns reminiscent of 17th-century royal halls.',
    image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&q=80&w=800',
    sizes: ['5x8', '8x10', '9x12'],
    colors: ['Ruby Red', 'Royal Gold', 'Deep Emerald'],
    rating: 4.9,
    reviews: 24
  },
  {
    id: '2',
    name: 'Nordic Minimalist Wool',
    category: 'Modern',
    price: 850,
    description: 'Clean lines and organic textures define this Scandinavian-inspired piece, crafted from sustainable New Zealand wool.',
    image: 'https://images.unsplash.com/photo-1575414003591-ece8d0416c7a?auto=format&fit=crop&q=80&w=800',
    sizes: ['4x6', '6x9', '8x10'],
    colors: ['Mist Gray', 'Ivory Cream', 'Oatmeal'],
    rating: 4.7,
    reviews: 42
  },
  {
    id: '3',
    name: 'Bohemian Textured Shag',
    category: 'Hand Tufted',
    price: 640,
    description: 'Soft, high-pile comfort with a playful geometric pattern that adds warmth and character to any living space.',
    image: 'https://images.unsplash.com/photo-1534349762230-e0cadf78f5db?auto=format&fit=crop&q=80&w=800',
    sizes: ['5x8', '8x10'],
    colors: ['Terracotta', 'Sand', 'Indigo'],
    rating: 4.5,
    reviews: 56
  },
  {
    id: '4',
    name: 'Abstract Azure Wave',
    category: 'Modern',
    price: 1200,
    description: 'A contemporary expressionist piece that uses varying pile heights to create a stunning 3D wave effect.',
    image: 'https://images.unsplash.com/photo-1594913785162-e648727d3cf5?auto=format&fit=crop&q=80&w=800',
    sizes: ['6x9', '9x12', '10x14'],
    colors: ['Deep Ocean', 'Sky Blue', 'Silver'],
    rating: 4.8,
    reviews: 31
  },
  {
    id: '5',
    name: 'Antique Medallion Wool',
    category: 'Wool',
    price: 1850,
    description: 'Traditional craftsmanship meets enduring quality in this heavy-weight wool rug with a classic central medallion.',
    image: 'https://images.unsplash.com/photo-1560416431-7b796e6764fc?auto=format&fit=crop&q=80&w=800',
    sizes: ['8x10', '9x12'],
    colors: ['Burgundy', 'Navy', 'Olive'],
    rating: 4.9,
    reviews: 18
  },
  {
    id: '6',
    name: 'Geometric Gold Luster',
    category: 'Luxury',
    price: 3200,
    description: 'Woven with metallic silk threads, this rug shimmers under light, offering a sophisticated art-deco aesthetic.',
    image: 'https://images.unsplash.com/photo-1615526675159-e248c3021d3f?auto=format&fit=crop&q=80&w=800',
    sizes: ['9x12', '10x14'],
    colors: ['Champagne', 'Bronze', 'Pearl'],
    rating: 5.0,
    reviews: 12
  }
];

export const CATEGORIES = ['All', 'Modern', 'Hand Tufted', 'Wool', 'Luxury'];
