export type Category = 'Baggy Pants' | 'Oversize T-Shirt';

export interface Product {
  id: string;
  name: string;
  price: number;
  category: Category;
  description: string;
  images: string[];
  sizes: string[];
  details: string[];
}

export interface CartItem extends Product {
  selectedSize: string;
  quantity: number;
}
