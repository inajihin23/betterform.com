import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Essential Baggy Pants - Onyx',
    price: 599000,
    category: 'Baggy Pants',
    description: 'Designed for maximum comfort and a modern silhouette. These baggy pants feature a premium cotton blend that moves with you, whether you are hitting the gym or the streets.',
    images: [
      'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    details: [
      'Premium Cotton-Poly Blend',
      'Elastic Waistband with Drawstring',
      'Deep Side Pockets',
      'Relaxed Fit'
    ]
  },
  {
    id: '2',
    name: 'Heavyweight Oversize Tee - Bone',
    price: 349000,
    category: 'Oversize T-Shirt',
    description: 'A staple for any minimalist wardrobe. Our heavyweight tee provides a structured drape and a soft feel, perfect for daily layering.',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    details: [
      '100% Organic Cotton',
      '280 GSM Heavyweight Fabric',
      'Dropped Shoulders',
      'Reinforced Collar'
    ]
  },
  {
    id: '3',
    name: 'Signature Baggy Pants - Slate',
    price: 599000,
    category: 'Baggy Pants',
    description: 'The perfect balance of strength and style. These slate grey baggy pants are built to endure your toughest workouts while maintaining a clean aesthetic.',
    images: [
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    details: [
      'Breathable Tech Fabric',
      'Adjustable Cuffs',
      'Hidden Zip Pockets',
      'Oversized Silhouette'
    ]
  },
  {
    id: '4',
    name: 'Boxy Fit Tee - Charcoal',
    price: 349000,
    category: 'Oversize T-Shirt',
    description: 'Minimalist design meets premium construction. The boxy fit tee offers a contemporary look with unmatched comfort.',
    images: [
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1000&auto=format&fit=crop'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    details: [
      'Premium Pima Cotton',
      'Boxy Silhouette',
      'Minimalist Branding',
      'Pre-shrunk'
    ]
  }
];
