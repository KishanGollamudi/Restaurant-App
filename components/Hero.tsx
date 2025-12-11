import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Hero: React.FC = () => {
  const [city, setCity] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      navigate(`/restaurants?city=${encodeURIComponent(city)}`);
    } else {
      navigate('/restaurants');
    }
  };

  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transform scale-105 animate-slow-zoom"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-royal-navy/70 via-royal-navy/50 to-royal-navy"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-8 animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight">
          Taste the <span className="text-royal-gold italic">Extraordinary</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-200 font-light tracking-wide max-w-2xl mx-auto">
          Discover and book the finest dining experiences in your city. 
          Reserved for those who appreciate the art of cuisine.
        </p>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4 justify-center items-center mt-8 w-full max-w-2xl mx-auto">
          <div className="relative w-full">
            <input 
              type="text" 
              placeholder="Enter your city (e.g., New York, Tokyo)" 
              className="w-full px-6 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-slate-300 focus:outline-none focus:border-royal-gold focus:ring-1 focus:ring-royal-gold transition-all shadow-xl"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <button 
            type="submit"
            className="w-full md:w-auto px-8 py-4 rounded-full bg-royal-gold hover:bg-yellow-600 text-royal-navy font-bold tracking-wider uppercase transition-all duration-300 shadow-lg hover:shadow-royal-gold/20 flex items-center justify-center gap-2"
          >
            <Search className="h-5 w-5" />
            <span>Search</span>
          </button>
        </form>
      </div>
      
      {/* Decorative scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-royal-gold/50">
        <div className="w-0.5 h-16 bg-gradient-to-b from-transparent via-royal-gold to-transparent"></div>
      </div>
    </div>
  );
};