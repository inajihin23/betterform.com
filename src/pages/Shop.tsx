import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, ChevronDown, Search, X } from 'lucide-react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Category } from '../types';
import { cn } from '../lib/utils';

export const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const activeCategory = searchParams.get('category') as Category | null;
  const activeSort = searchParams.get('sort') || 'newest';

  const categories: Category[] = ['Baggy Pants', 'Oversize T-Shirt'];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory) {
      result = result.filter(p => p.category === activeCategory);
    }

    if (searchQuery) {
      result = result.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (activeSort === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (activeSort === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [activeCategory, activeSort, searchQuery]);

  const handleCategoryClick = (category: Category | null) => {
    if (category) {
      searchParams.set('category', category);
    } else {
      searchParams.delete('category');
    }
    setSearchParams(searchParams);
  };

  const handleSortChange = (sort: string) => {
    searchParams.set('sort', sort);
    setSearchParams(searchParams);
  };

  return (
    <div className="pt-32 pb-20 px-6 md:px-12 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-display font-extrabold uppercase tracking-tight mb-4">
            {activeCategory || 'All Collections'}
          </h1>
          <p className="text-brand-dark-grey uppercase tracking-widest text-xs font-medium">
            Showing {filteredProducts.length} Products
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-y border-brand-grey py-6">
          <div className="flex items-center space-x-4 overflow-x-auto no-scrollbar pb-2 md:pb-0">
            <button 
              onClick={() => handleCategoryClick(null)}
              className={cn(
                "whitespace-nowrap text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full transition-all",
                !activeCategory ? "bg-brand-black text-brand-white" : "bg-brand-grey text-brand-dark-grey hover:bg-brand-beige"
              )}
            >
              All
            </button>
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => handleCategoryClick(cat)}
                className={cn(
                  "whitespace-nowrap text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full transition-all",
                  activeCategory === cat ? "bg-brand-black text-brand-white" : "bg-brand-grey text-brand-dark-grey hover:bg-brand-beige"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-dark-grey" />
              <input 
                type="text" 
                placeholder="Search..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-brand-grey border-none rounded-full py-2 pl-10 pr-4 text-xs focus:ring-1 focus:ring-brand-black outline-none"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>
            
            <div className="relative group">
              <button className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest border border-brand-grey px-4 py-2 rounded-full hover:border-brand-black transition-all">
                <span>Sort By</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute right-0 top-full mt-2 w-48 bg-brand-white shadow-xl rounded-xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20 border border-brand-grey">
                <button onClick={() => handleSortChange('newest')} className="w-full text-left px-4 py-2 text-xs uppercase font-bold hover:bg-brand-grey rounded-lg">Newest</button>
                <button onClick={() => handleSortChange('price-low')} className="w-full text-left px-4 py-2 text-xs uppercase font-bold hover:bg-brand-grey rounded-lg">Price: Low to High</button>
                <button onClick={() => handleSortChange('price-high')} className="w-full text-left px-4 py-2 text-xs uppercase font-bold hover:bg-brand-grey rounded-lg">Price: High to Low</button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <AnimatePresence mode="wait">
          {filteredProducts.length > 0 ? (
            <motion.div 
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16"
            >
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </motion.div>
          ) : (
            <motion.div 
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-40 text-center"
            >
              <h3 className="text-2xl font-display font-bold uppercase mb-4">No products found</h3>
              <p className="text-brand-dark-grey mb-8">Try adjusting your search or filters.</p>
              <button 
                onClick={() => {
                  setSearchQuery('');
                  handleCategoryClick(null);
                }}
                className="bg-brand-black text-brand-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest"
              >
                Clear All Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
