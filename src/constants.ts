import { Product, Category } from "./types";

export const CATEGORIES: Category[] = [
  
  {
    id: "t-shirts",
    name: "T-Shirts",
    image: "https://images.unsplash.com/photo-1621951753015-740c699ab970?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    id: "hoodies",
    name: "Hoodies",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "jackets",
    name: "Jackets",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "jeans",
    name: "Jeans",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "sneakers",
    name: "Sneakers",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "watches",
    name: "Watches",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Oversized Black T-Shirt",
    price: 299,
    originalPrice: 599,
    discount: 35,
    category: "t-shirts",
    image: "https://images.unsplash.com/photo-1621951753015-740c699ab970?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1527719327859-c6ce80353573?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    description: "Premium heavy-weight cotton oversized tee for that perfect streetwear silhouette.",
    rating: 4.8,
    reviews: 124,
    isNew: true,
  },
  
  {
    id: "p2",
    name: "Premium Denim Jacket",
    price: 3499,
    originalPrice: 4999,
    discount: 30,
    category: "jackets",
    image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=800&q=80",
    ],
    description: "Distressed light wash denim jacket with premium brass hardware.",
    rating: 4.9,
    reviews: 89,
  },
  
  


  {
    id: "p3",
    name: "Slim Fit Distressed Jeans",
    price: 2499,
    originalPrice: 3499,
    discount: 28,
    category: "jeans",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=80",
    ],
    description: "Tapered fit with added stretch for all-day comfort and effortless style.",
    rating: 4.7,
    reviews: 215,
  },
  {
    id: "p4",
    name: "White Urban Sneakers",
    price: 4999,
    originalPrice: 6999,
    discount: 28,
    category: "sneakers",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80",
    ],
    description: "Clean classic minimalist sneakers in high-grade leather.",
    rating: 4.5,
    reviews: 156,
    isNew: true,
  },
  {
    id: "p5",
    name: "Luxury Midnight Watch",
    price: 8999,
    originalPrice: 12999,
    discount: 30,
    category: "watches",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=800&q=80",
    ],
    description: "Sophisticated analog movement with scratch-resistant sapphire glass.",
    rating: 4.9,
    reviews: 42,
  },
  {
    id: "p6",
    name: "Streetwear Graphic Hoodie",
    price: 2199,
    originalPrice: 2999,
    discount: 26,
    category: "hoodies",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80",
    ],
    description: "Bold graphic prints on high-quality fleece-lined cotton.",
    rating: 4.6,
    reviews: 178,
  },
];
