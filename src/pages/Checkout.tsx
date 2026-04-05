import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, CreditCard, Truck, ShieldCheck, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Checkout = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const handlePlaceOrder = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsCompleted(true);
      clearCart();
    }, 2000);
  };

  if (isCompleted) {
    return (
      <div className="pt-40 pb-20 px-6 md:px-12 min-h-screen flex flex-col items-center justify-center text-center">
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-8"
        >
          <CheckCircle2 className="w-12 h-12" />
        </motion.div>
        <h1 className="text-4xl font-display font-extrabold uppercase mb-4">Order Confirmed</h1>
        <p className="text-brand-dark-grey mb-10 max-w-md">
          Thank you for choosing Better Form. Your order #BF-92837 is being processed and will be shipped shortly.
        </p>
        <button 
          onClick={() => navigate('/')}
          className="bg-brand-black text-brand-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-dark-grey transition-all"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 px-6 md:px-12 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <button 
          onClick={() => navigate('/cart')}
          className="flex items-center text-[10px] uppercase font-bold tracking-widest mb-12 hover:underline"
        >
          <ArrowLeft className="w-3 h-3 mr-2" /> Back to Cart
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Checkout Form */}
          <div className="space-y-12">
            <div>
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-8 h-8 bg-brand-black text-brand-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                <h2 className="text-xl font-bold uppercase tracking-tight">Shipping Details</h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1">
                  <label className="block text-[10px] uppercase font-bold tracking-widest mb-2">First Name</label>
                  <input type="text" className="w-full bg-brand-grey border-none rounded-xl p-4 text-sm focus:ring-1 focus:ring-brand-black outline-none" />
                </div>
                <div className="col-span-1">
                  <label className="block text-[10px] uppercase font-bold tracking-widest mb-2">Last Name</label>
                  <input type="text" className="w-full bg-brand-grey border-none rounded-xl p-4 text-sm focus:ring-1 focus:ring-brand-black outline-none" />
                </div>
                <div className="col-span-2">
                  <label className="block text-[10px] uppercase font-bold tracking-widest mb-2">Email Address</label>
                  <input type="email" className="w-full bg-brand-grey border-none rounded-xl p-4 text-sm focus:ring-1 focus:ring-brand-black outline-none" />
                </div>
                <div className="col-span-2">
                  <label className="block text-[10px] uppercase font-bold tracking-widest mb-2">Shipping Address</label>
                  <input type="text" className="w-full bg-brand-grey border-none rounded-xl p-4 text-sm focus:ring-1 focus:ring-brand-black outline-none" />
                </div>
                <div className="col-span-1">
                  <label className="block text-[10px] uppercase font-bold tracking-widest mb-2">City</label>
                  <input type="text" className="w-full bg-brand-grey border-none rounded-xl p-4 text-sm focus:ring-1 focus:ring-brand-black outline-none" />
                </div>
                <div className="col-span-1">
                  <label className="block text-[10px] uppercase font-bold tracking-widest mb-2">Postal Code</label>
                  <input type="text" className="w-full bg-brand-grey border-none rounded-xl p-4 text-sm focus:ring-1 focus:ring-brand-black outline-none" />
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-8 h-8 bg-brand-black text-brand-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                <h2 className="text-xl font-bold uppercase tracking-tight">Payment Method</h2>
              </div>
              <div className="space-y-4">
                <div className="border-2 border-brand-black p-4 rounded-xl flex items-center justify-between">
                  <div className="flex items-center">
                    <CreditCard className="w-5 h-5 mr-4" />
                    <span className="text-sm font-bold uppercase tracking-tight">Credit / Debit Card</span>
                  </div>
                  <div className="w-4 h-4 border-4 border-brand-black rounded-full"></div>
                </div>
                <div className="border border-brand-grey p-4 rounded-xl flex items-center justify-between opacity-50">
                  <div className="flex items-center">
                    <Truck className="w-5 h-5 mr-4" />
                    <span className="text-sm font-bold uppercase tracking-tight">Bank Transfer</span>
                  </div>
                  <div className="w-4 h-4 border border-brand-grey rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-brand-grey p-8 rounded-2xl">
              <h3 className="text-xl font-bold uppercase mb-8">Your Order</h3>
              <div className="space-y-6 mb-8 max-h-64 overflow-y-auto pr-2 no-scrollbar">
                {cart.map((item) => (
                  <div key={`${item.id}-${item.selectedSize}`} className="flex space-x-4">
                    <div className="w-16 h-20 bg-brand-white overflow-hidden flex-shrink-0">
                      <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-bold uppercase tracking-tight">{item.name}</p>
                      <p className="text-[10px] text-brand-dark-grey uppercase tracking-widest">Size: {item.selectedSize} • Qty: {item.quantity}</p>
                      <p className="text-xs font-medium mt-1">Rp {(item.price * item.quantity).toLocaleString('id-ID')}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4 mb-8 pt-8 border-t border-brand-dark-grey/10">
                <div className="flex justify-between text-sm">
                  <span className="text-brand-dark-grey">Subtotal</span>
                  <span>Rp {totalPrice.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-brand-dark-grey">Shipping</span>
                  <span>Rp 50.000</span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-4 border-t border-brand-dark-grey/10">
                  <span>Total</span>
                  <span>Rp {(totalPrice + 50000).toLocaleString('id-ID')}</span>
                </div>
              </div>

              <button 
                onClick={handlePlaceOrder}
                disabled={isProcessing}
                className="w-full bg-brand-black text-brand-white py-5 rounded-full font-bold uppercase tracking-widest text-xs flex items-center justify-center hover:bg-brand-dark-grey transition-all disabled:opacity-50"
              >
                {isProcessing ? "Processing..." : "Place Order"}
              </button>

              <div className="mt-8 flex items-center justify-center space-x-2 text-[10px] text-brand-dark-grey uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4" />
                <span>Secure SSL Encryption</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
