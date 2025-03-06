export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  previewUrl?: string;
  category: string;
  promoMessage?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
}