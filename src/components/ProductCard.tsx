import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShoppingBag, Heart } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  key?: string | number;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative"
    >
      <Link to={`/product/${product.id}`} className="block overflow-hidden bg-brand-grey aspect-[3/4] relative">
        <img 
          src={product.images[0]} 
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-brand-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex space-x-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <button className="bg-brand-white p-3 rounded-full shadow-lg hover:bg-brand-black hover:text-brand-white transition-all">
              <ShoppingBag className="w-5 h-5" />
            </button>
            <button className="bg-brand-white p-3 rounded-full shadow-lg hover:bg-brand-black hover:text-brand-white transition-all">
              <Heart className="w-5 h-5" />
            </button>
          </div>
        </div>
      </Link>
      
      <div className="mt-4 flex justify-between items-start">
        <div>
          <p className="text-[10px] uppercase tracking-widest text-brand-dark-grey mb-1">{product.category}</p>
          <Link to={`/product/${product.id}`} className="text-sm font-bold uppercase tracking-tight hover:underline">
            {product.name}
          </Link>
        </div>
        <p className="text-sm font-medium">Rp {product.price.toLocaleString('id-ID')}</p>
      </div>
    </motion.div>
  );
};
