import React from 'react';
import { Star, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Restaurant } from '../types';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => {
  return (
    <div className="group glass-panel rounded-xl overflow-hidden shadow-2xl hover:shadow-royal-gold/10 transition-all duration-500 transform hover:-translate-y-2 flex flex-col h-full">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={restaurant.imageUrl} 
          alt={restaurant.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-royal-navy/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 border border-royal-gold/30">
          <Star className="h-4 w-4 text-royal-gold fill-royal-gold" />
          <span className="text-white font-bold">{restaurant.rating}</span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-royal-navy to-transparent h-20 opacity-90"></div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-serif font-bold text-white group-hover:text-royal-gold transition-colors">
              {restaurant.name}
            </h3>
            <div className="flex items-center text-slate-400 text-sm mt-1">
              <MapPin className="h-3 w-3 mr-1" />
              {restaurant.city}
            </div>
          </div>
          <span className="text-royal-gold font-serif font-medium tracking-widest">{restaurant.priceRange}</span>
        </div>

        <div className="mb-4">
          <span className="inline-block px-2 py-1 bg-royal-gold/10 text-royal-gold text-xs uppercase tracking-wider rounded border border-royal-gold/20">
            {restaurant.cuisineType}
          </span>
        </div>

        <p className="text-slate-400 text-sm line-clamp-3 mb-6 flex-grow">
          {restaurant.description}
        </p>

        <Link 
          to={`/reserve/${restaurant.id}`}
          className="w-full block text-center py-3 bg-transparent border border-royal-gold text-royal-gold font-bold uppercase tracking-widest text-sm hover:bg-royal-gold hover:text-royal-navy transition-all duration-300 rounded"
        >
          Reserve Now
        </Link>
      </div>
    </div>
  );
};