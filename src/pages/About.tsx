import { motion } from 'motion/react';
import { ArrowRight, Shield, Target, Heart } from 'lucide-react';

export const About = () => {
  return (
    <div className="pt-32 pb-20">
      {/* Hero */}
      <section className="px-6 md:px-12 mb-32">
        <div className="max-w-7xl mx-auto">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-bold uppercase tracking-[0.3em] text-brand-dark-grey mb-6"
          >
            Our Philosophy
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-8xl font-display font-extrabold uppercase tracking-tighter leading-[0.9] mb-12 max-w-4xl"
          >
            Strength in <br /> Every Form.
          </motion.h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-brand-dark-grey leading-relaxed"
            >
              Better Form was founded in 2024 with a singular vision: to create apparel that bridges the gap between high-performance training gear and premium minimalist streetwear.
            </motion.p>
            <div className="h-[1px] bg-brand-black w-full hidden md:block"></div>
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="px-6 md:px-12 mb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="aspect-[3/4] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1000&auto=format&fit=crop" 
              alt="Training" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="aspect-[3/4] overflow-hidden md:mt-12">
            <img 
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000&auto=format&fit=crop" 
              alt="Streetwear" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="aspect-[3/4] overflow-hidden md:mt-24">
            <img 
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop" 
              alt="Lifestyle" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="px-6 md:px-12 py-32 bg-brand-black text-brand-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-display font-extrabold uppercase tracking-tight mb-12">
            The Better Form Mindset
          </h2>
          <div className="space-y-8 text-brand-grey/70 text-lg leading-relaxed">
            <p>
              We believe that self-improvement is a continuous journey. Whether you are under the barbell or navigating the urban landscape, your apparel should empower your confidence and reflect your dedication.
            </p>
            <p>
              Our design process is rooted in minimalism. We strip away the unnecessary to focus on what matters: silhouette, fabric quality, and functional details. Every piece in our collection is a testament to the "Better Form" philosophy—striving for the best version of yourself, every single day.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 md:px-12 py-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          <div>
            <Target className="w-10 h-10 mb-6" />
            <h3 className="text-xl font-bold uppercase mb-4">Intentional Design</h3>
            <p className="text-brand-dark-grey text-sm leading-relaxed">
              Every seam, pocket, and fabric choice is intentional. We design for longevity, not for trends.
            </p>
          </div>
          <div>
            <Shield className="w-10 h-10 mb-6" />
            <h3 className="text-xl font-bold uppercase mb-4">Uncompromising Quality</h3>
            <p className="text-brand-dark-grey text-sm leading-relaxed">
              We source the finest materials to ensure our apparel stands up to the rigors of daily use and intense training.
            </p>
          </div>
          <div>
            <Heart className="w-10 h-10 mb-6" />
            <h3 className="text-xl font-bold uppercase mb-4">Community Focused</h3>
            <p className="text-brand-dark-grey text-sm leading-relaxed">
              Better Form is more than a brand; it's a community of individuals dedicated to growth and excellence.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
