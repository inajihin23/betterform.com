import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="pt-40 pb-20 px-6 md:px-12 min-h-screen flex flex-col items-center justify-center text-center">
        <div className="w-20 h-20 bg-brand-grey rounded-full flex items-center justify-center mb-8">
          <ShoppingBag className="w-10 h-10 text-brand-dark-grey" />
        </div>
        <h1 className="text-3xl font-display font-extrabold uppercase mb-4">Your cart is empty</h1>
        <p className="text-brand-dark-grey mb-10 max-w-xs">Looks like you haven't added anything to your form yet.</p>
        <Link 
          to="/shop" 
          className="bg-brand-black text-brand-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-dark-grey transition-all"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 px-6 md:px-12 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-display font-extrabold uppercase tracking-tight mb-12">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-8">
            <AnimatePresence>
              {cart.map((item) => (
                <motion.div 
                  key={`${item.id}-${item.selectedSize}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 pb-8 border-b border-brand-grey"
                >
                  <Link to={`/product/${item.id}`} className="w-24 h-32 bg-brand-grey overflow-hidden flex-shrink-0">
                    <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </Link>
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <Link to={`/product/${item.id}`} className="font-bold uppercase tracking-tight hover:underline">
                        {item.name}
                      </Link>
                      <button 
                        onClick={() => removeFromCart(item.id, item.selectedSize)}
                        className="text-brand-dark-grey hover:text-red-600 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-xs text-brand-dark-grey uppercase tracking-widest mb-4">Size: {item.selectedSize}</p>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center border border-brand-grey rounded-full px-3 py-1">
                        <button 
                          onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity - 1)}
                          className="p-1 hover:text-brand-black transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="mx-4 text-sm font-bold">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity + 1)}
                          className="p-1 hover:text-brand-black transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <p className="font-medium">Rp {(item.price * item.quantity).toLocaleString('id-ID')}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-brand-grey p-8 rounded-2xl sticky top-32">
              <h3 className="text-xl font-bold uppercase mb-8">Order Summary</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm">
                  <span className="text-brand-dark-grey">Subtotal ({totalItems} items)</span>
                  <span>Rp {totalPrice.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-brand-dark-grey">Shipping</span>
                  <span className="text-green-600 font-bold uppercase text-[10px]">Calculated at checkout</span>
                </div>
                <div className="h-[1px] bg-brand-dark-grey/10 my-4"></div>
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>Rp {totalPrice.toLocaleString('id-ID')}</span>
                </div>
              </div>

              <button 
                onClick={() => navigate('/checkout')}
                className="w-full bg-brand-black text-brand-white py-5 rounded-full font-bold uppercase tracking-widest text-xs flex items-center justify-center hover:bg-brand-dark-grey transition-all group"
              >
                Checkout <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="mt-8 space-y-4">
                <p className="text-[10px] text-brand-dark-grey uppercase tracking-widest text-center">Secure Payments Guaranteed</p>
                <div className="flex justify-center space-x-4 opacity-30 grayscale">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
