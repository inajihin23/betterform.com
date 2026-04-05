import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ShoppingBag, Heart, Share2, Ruler, Check } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { cn } from '../lib/utils';

export const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState('');
  const [activeImage, setActiveImage] = useState(0);
  const [isAdded, setIsAdded] = useState(false);

  const product = products.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <Link to="/shop" className="underline uppercase tracking-widest text-sm">Back to Shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    addToCart(product, selectedSize);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-brand-dark-grey mb-12">
          <Link to="/" className="hover:text-brand-black transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-brand-black transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-brand-black font-bold">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-brand-grey overflow-hidden relative">
              <motion.img 
                key={activeImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                src={product.images[activeImage]} 
                alt={product.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-y-0 left-0 flex items-center p-4">
                <button 
                  onClick={() => setActiveImage(prev => (prev === 0 ? product.images.length - 1 : prev - 1))}
                  className="bg-brand-white/80 backdrop-blur-md p-2 rounded-full hover:bg-brand-white transition-all shadow-sm"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center p-4">
                <button 
                  onClick={() => setActiveImage(prev => (prev === product.images.length - 1 ? 0 : prev + 1))}
                  className="bg-brand-white/80 backdrop-blur-md p-2 rounded-full hover:bg-brand-white transition-all shadow-sm"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={cn(
                    "aspect-[3/4] bg-brand-grey overflow-hidden border-2 transition-all",
                    activeImage === idx ? "border-brand-black" : "border-transparent"
                  )}
                >
                  <img src={img} alt={`${product.name} ${idx}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-8">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-dark-grey mb-2">{product.category}</p>
              <h1 className="text-4xl md:text-5xl font-display font-extrabold uppercase tracking-tight mb-4">{product.name}</h1>
              <p className="text-2xl font-medium">Rp {product.price.toLocaleString('id-ID')}</p>
            </div>

            <div className="mb-10">
              <p className="text-brand-dark-grey leading-relaxed mb-8">
                {product.description}
              </p>
              
              <div className="space-y-2">
                {product.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center text-sm text-brand-dark-grey">
                    <div className="w-1.5 h-1.5 bg-brand-black rounded-full mr-3"></div>
                    {detail}
                  </div>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-10">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-bold uppercase tracking-widest">Select Size</span>
                <button className="text-[10px] uppercase font-bold tracking-widest flex items-center hover:underline">
                  <Ruler className="w-3 h-3 mr-1" /> Size Chart
                </button>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {product.sizes.map(size => (
                  <button 
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={cn(
                      "py-3 text-sm font-bold border transition-all",
                      selectedSize === size 
                        ? "bg-brand-black text-brand-white border-brand-black" 
                        : "bg-transparent border-brand-grey hover:border-brand-black"
                    )}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col space-y-4 mb-12">
              <button 
                onClick={handleAddToCart}
                disabled={isAdded}
                className={cn(
                  "w-full py-5 rounded-full font-bold uppercase tracking-widest text-xs flex items-center justify-center transition-all",
                  isAdded 
                    ? "bg-green-600 text-brand-white" 
                    : "bg-brand-black text-brand-white hover:bg-brand-dark-grey"
                )}
              >
                {isAdded ? (
                  <>
                    <Check className="mr-2 w-4 h-4" /> Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingBag className="mr-2 w-4 h-4" /> Add to Cart
                  </>
                )}
              </button>
              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center py-4 border border-brand-grey rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-grey transition-all">
                  <Heart className="mr-2 w-4 h-4" /> Wishlist
                </button>
                <button className="flex items-center justify-center py-4 border border-brand-grey rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-grey transition-all">
                  <Share2 className="mr-2 w-4 h-4" /> Share
                </button>
              </div>
            </div>

            {/* Additional Info Accordion */}
            <div className="border-t border-brand-grey pt-8 space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest mb-2">Shipping & Returns</h4>
                <p className="text-xs text-brand-dark-grey leading-relaxed">
                  Free shipping on orders over Rp 1.000.000. Returns accepted within 7 days of delivery.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest mb-2">Care Instructions</h4>
                <p className="text-xs text-brand-dark-grey leading-relaxed">
                  Machine wash cold with like colors. Tumble dry low. Do not iron directly on graphics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
