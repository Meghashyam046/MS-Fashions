export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: string;
  description: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
  discount?: number;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
}
