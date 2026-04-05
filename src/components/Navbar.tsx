import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, User, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../context/CartContext';
import { cn } from '../lib/utils';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/collections' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4 md:px-12",
        isScrolled ? "bg-brand-white/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Logo */}
        <Link to="/" className="text-2xl font-display font-extrabold tracking-tighter uppercase">
          Better<span className="text-brand-dark-grey">Form</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={cn(
                "text-sm font-medium uppercase tracking-widest hover:text-brand-dark-grey transition-colors",
                location.pathname === link.path ? "border-b-2 border-brand-black" : ""
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <button className="hidden md:block p-2 hover:bg-brand-grey rounded-full transition-colors">
            <User className="w-5 h-5" />
          </button>
          <button className="hidden md:block p-2 hover:bg-brand-grey rounded-full transition-colors">
            <Heart className="w-5 h-5" />
          </button>
          <Link to="/cart" className="relative p-2 hover:bg-brand-grey rounded-full transition-colors">
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 bg-brand-black text-brand-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-brand-white z-[60] p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-xl font-display font-extrabold uppercase">Menu</span>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="flex flex-col space-y-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-display font-bold uppercase tracking-tight"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/wishlist" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-display font-bold uppercase tracking-tight flex items-center"
              >
                Wishlist <Heart className="ml-4 w-6 h-6" />
              </Link>
              <Link 
                to="/account" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-display font-bold uppercase tracking-tight flex items-center"
              >
                Account <User className="ml-4 w-6 h-6" />
              </Link>
            </div>
            <div className="mt-auto">
              <p className="text-sm text-brand-dark-grey uppercase tracking-widest mb-4">Shape Your Better Form</p>
              <div className="flex space-x-4">
                <span className="text-xs font-bold">IG</span>
                <span className="text-xs font-bold">TW</span>
                <span className="text-xs font-bold">FB</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
