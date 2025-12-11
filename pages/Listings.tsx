import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { RestaurantCard } from '../components/RestaurantCard';
import { Restaurant } from '../types';
import { Search, SlidersHorizontal } from 'lucide-react';

interface ListingsProps {
  restaurants: Restaurant[];
}

export const Listings: React.FC<ListingsProps> = ({ restaurants }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialCity = searchParams.get('city') || '';

  const [searchTerm, setSearchTerm] = useState(initialCity);
  const [filterCuisine, setFilterCuisine] = useState('All');

  // Get unique cuisines
  const cuisines = ['All', ...Array.from(new Set(restaurants.map(r => r.cuisineType)))];

  const filteredRestaurants = restaurants.filter(r => {
    const matchesSearch = r.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          r.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCuisine = filterCuisine === 'All' || r.cuisineType === filterCuisine;
    return matchesSearch && matchesCuisine;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-20 min-h-screen px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl font-serif font-bold text-white mb-6">
          Exclusive <span className="text-royal-gold">Tables</span>
        </h1>
        <p className="text-slate-400 mb-8 max-w-3xl">
          Browse our complete collection of fine-dining establishments. Use the filters below to find the perfect ambiance for your evening.
        </p>

        {/* Filter Bar */}
        <div className="glass-panel p-4 rounded-lg flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
            <input 
              type="text" 
              placeholder="Search by name or city..." 
              className="w-full pl-10 pr-4 py-2 bg-royal-navy/50 border border-slate-700 rounded text-white focus:border-royal-gold focus:outline-none transition-colors"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
             <SlidersHorizontal className="text-royal-gold h-5 w-5 flex-shrink-0" />
             <div className="flex gap-2">
                {cuisines.map(c => (
                  <button
                    key={c}
                    onClick={() => setFilterCuisine(c)}
                    className={`px-4 py-2 rounded text-sm whitespace-nowrap transition-colors ${
                      filterCuisine === c 
                        ? 'bg-royal-gold text-royal-navy font-bold' 
                        : 'bg-royal-navy/50 text-slate-300 hover:text-white border border-slate-700'
                    }`}
                  >
                    {c}
                  </button>
                ))}
             </div>
          </div>
        </div>
      </div>

      {filteredRestaurants.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRestaurants.map(restaurant => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white/5 rounded-lg border border-dashed border-slate-700">
          <h3 className="text-xl text-white font-serif mb-2">No restaurants found</h3>
          <p className="text-slate-400">Try adjusting your search criteria.</p>
        </div>
      )}
    </div>
  );
};