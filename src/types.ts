export interface Product {
    id: string;
    name: string;
    category: 'Modern' | 'Hand Tufted' | 'Wool' | 'Luxury';
    price: number;
    description: string;
    image: string;
    sizes: string[];
    colors: string[];
    rating: number;
    reviews: number;
}

export interface CartItem extends Product {
    quantity: number;
    selectedSize: string;
}
