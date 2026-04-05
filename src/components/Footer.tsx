import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, ArrowRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-brand-black text-brand-white pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="text-3xl font-display font-extrabold tracking-tighter uppercase mb-6 block">
            Better<span className="text-brand-grey">Form</span>
          </Link>
          <p className="text-brand-grey/60 max-w-sm mb-8 leading-relaxed">
            Premium minimalist streetwear designed for those who seek strength in every form. From dawn daily use to intense training sessions.
          </p>
          <div className="flex space-x-6">
            <Instagram className="w-5 h-5 cursor-pointer hover:text-brand-beige transition-colors" />
            <Twitter className="w-5 h-5 cursor-pointer hover:text-brand-beige transition-colors" />
            <Facebook className="w-5 h-5 cursor-pointer hover:text-brand-beige transition-colors" />
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Shop</h4>
          <ul className="space-y-4 text-brand-grey/60 text-sm">
            <li><Link to="/shop" className="hover:text-brand-white transition-colors">All Products</Link></li>
            <li><Link to="/shop?category=Baggy%20Pants" className="hover:text-brand-white transition-colors">Baggy Pants</Link></li>
            <li><Link to="/shop?category=Oversize%20T-Shirt" className="hover:text-brand-white transition-colors">Oversize T-Shirts</Link></li>
            <li><Link to="/collections" className="hover:text-brand-white transition-colors">New Arrivals</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Newsletter</h4>
          <p className="text-brand-grey/60 text-sm mb-4">Join the Better Form community for early access and updates.</p>
          <div className="relative">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full bg-transparent border-b border-brand-grey/30 py-2 pr-10 focus:outline-none focus:border-brand-white transition-colors text-sm"
            />
            <button className="absolute right-0 bottom-2">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-brand-grey/10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-brand-grey/40">
        <p>© 2026 Better Form Apparel. All Rights Reserved.</p>
        <div className="flex space-x-8 mt-4 md:mt-0">
          <span className="cursor-pointer hover:text-brand-white transition-colors">Privacy Policy</span>
          <span className="cursor-pointer hover:text-brand-white transition-colors">Terms of Service</span>
          <span className="cursor-pointer hover:text-brand-white transition-colors">Shipping Info</span>
        </div>
      </div>
    </footer>
  );
};
