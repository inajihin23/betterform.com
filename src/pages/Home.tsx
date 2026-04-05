import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Play, TrendingUp, ShieldCheck, Zap } from 'lucide-react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';

export const Home = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop" 
            alt="Hero Background" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-brand-white/80 uppercase tracking-[0.3em] text-xs md:text-sm font-bold mb-6"
          >
            Dawn Daily Use • Strength Training
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-8xl font-display font-extrabold text-brand-white uppercase tracking-tighter leading-[0.9] mb-10"
          >
            Shape Your <br /> Better Form
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6"
          >
            <Link 
              to="/shop" 
              className="bg-brand-white text-brand-black px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-beige transition-all flex items-center group"
            >
              Shop Collection <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="text-brand-white flex items-center space-x-3 group">
              <div className="w-12 h-12 rounded-full border border-brand-white/30 flex items-center justify-center group-hover:bg-brand-white/10 transition-all">
                <Play className="w-4 h-4 fill-brand-white" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest">Watch Film</span>
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <div className="w-[1px] h-12 bg-brand-white/30"></div>
        </motion.div>
      </section>

      {/* Brand Values */}
      <section className="py-20 px-6 md:px-12 bg-brand-grey">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-brand-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
              <TrendingUp className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold uppercase mb-3">Performance Built</h3>
            <p className="text-brand-dark-grey text-sm leading-relaxed max-w-xs">
              Engineered for the athlete in you. Fabrics that endure the most intense strength training sessions.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-brand-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold uppercase mb-3">Minimalist Aesthetic</h3>
            <p className="text-brand-dark-grey text-sm leading-relaxed max-w-xs">
              Clean lines and neutral tones. Designed to be your daily uniform from dawn till dusk.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-brand-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
              <Zap className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold uppercase mb-3">Premium Quality</h3>
            <p className="text-brand-dark-grey text-sm leading-relaxed max-w-xs">
              High-end streetwear construction. Heavyweight fabrics that maintain their form over time.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-brand-dark-grey mb-2">Curated Selection</p>
              <h2 className="text-4xl md:text-5xl font-display font-extrabold uppercase tracking-tight">Featured Drops</h2>
            </div>
            <Link to="/shop" className="hidden md:flex items-center text-sm font-bold uppercase tracking-widest hover:underline group">
              View All <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <Link to="/shop" className="md:hidden mt-12 w-full py-4 border border-brand-black flex items-center justify-center text-xs font-bold uppercase tracking-widest">
            View All Products
          </Link>
        </div>
      </section>

      {/* Collection Banner */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto relative h-[600px] overflow-hidden group">
          <img 
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2000&auto=format&fit=crop" 
            alt="Collection Banner" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-brand-black/40 flex flex-col items-center justify-center text-center p-6">
            <h2 className="text-brand-white text-4xl md:text-7xl font-display font-extrabold uppercase tracking-tighter mb-8 max-w-2xl">
              The Strength In Simplicity
            </h2>
            <Link 
              to="/shop?category=Baggy%20Pants" 
              className="bg-brand-white text-brand-black px-12 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-beige transition-all"
            >
              Explore Baggy Pants
            </Link>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-32 px-6 md:px-12 bg-brand-beige/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-dark-grey mb-4">Our Story</p>
            <h2 className="text-4xl md:text-6xl font-display font-extrabold uppercase tracking-tight mb-8 leading-[1.1]">
              Better Form is a Mindset
            </h2>
            <p className="text-brand-dark-grey mb-10 leading-relaxed text-lg">
              We believe that fashion should not compromise performance. Better Form was born from the intersection of high-end streetwear aesthetics and the functional needs of strength training.
            </p>
            <Link to="/about" className="inline-flex items-center text-sm font-bold uppercase tracking-widest border-b-2 border-brand-black pb-2 hover:text-brand-dark-grey transition-colors">
              Read Our Story
            </Link>
          </div>
          <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?q=80&w=1000&auto=format&fit=crop" 
                alt="Brand Image 1" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[3/4] overflow-hidden mt-12">
              <img 
                src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1000&auto=format&fit=crop" 
                alt="Brand Image 2" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
