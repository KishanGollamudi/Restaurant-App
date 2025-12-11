import React from 'react';
import { Hero } from '../components/Hero';
import { RestaurantCard } from '../components/RestaurantCard';
import { Restaurant } from '../types';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface HomeProps {
  restaurants: Restaurant[];
}

export const Home: React.FC<HomeProps> = ({ restaurants }) => {
  // Show only top 3 rated restaurants
  const featuredRestaurants = [...restaurants]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <>
      <Hero />
      
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Featured <span className="text-royal-gold">Destinations</span>
            </h2>
            <p className="text-slate-400 max-w-2xl">
              Curated selections from our finest partners, offering impeccable service and unforgettable flavors.
            </p>
          </div>
          <Link to="/restaurants" className="hidden md:flex items-center gap-2 text-royal-gold hover:text-white transition-colors uppercase tracking-widest text-sm font-bold">
            View All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredRestaurants.map(restaurant => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
           <Link to="/restaurants" className="inline-flex items-center gap-2 text-royal-gold hover:text-white transition-colors uppercase tracking-widest text-sm font-bold border border-royal-gold/30 px-6 py-3 rounded hover:border-royal-gold">
            View All Collections
          </Link>
        </div>
      </section>

      <section className="bg-royal-navy border-y border-royal-gold/10 py-24 relative overflow-hidden">
        {/* Abstract decorative circles */}
        <div className="absolute -left-20 top-20 w-64 h-64 border border-royal-gold/10 rounded-full"></div>
        <div className="absolute right-10 bottom-10 w-32 h-32 border border-royal-gold/10 rounded-full"></div>

        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            "Dining is not just about food.<br />It is about the <span className="text-royal-gold">experience</span>."
          </h2>
          <p className="text-slate-400 italic font-serif text-lg">
            — The RoyalDine Philosophy
          </p>
        </div>
      </section>
    </>
  );
};