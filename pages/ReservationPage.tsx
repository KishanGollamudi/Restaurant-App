import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Restaurant, Reservation } from '../types';
import { Calendar, Clock, User, Phone, Users } from 'lucide-react';
import toast from 'react-hot-toast';

interface ReservationPageProps {
  restaurants: Restaurant[];
  addReservation: (res: Reservation) => void;
}

export const ReservationPage: React.FC<ReservationPageProps> = ({ restaurants, addReservation }) => {
  const { restaurantId } = useParams();
  const navigate = useNavigate();
  const restaurant = restaurants.find(r => r.id === restaurantId);

  const [formData, setFormData] = useState({
    customerName: '',
    customerPhone: '',
    date: '',
    time: '',
    numberOfGuests: 2
  });

  if (!restaurant) {
    return <div className="pt-32 text-center text-white">Restaurant not found</div>;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate API call
    const reservation: Reservation = {
      id: Math.random().toString(36).substr(2, 9),
      restaurantId: restaurant.id,
      restaurantName: restaurant.name,
      ...formData,
      status: 'Confirmed'
    };

    // Random delay for realism
    const loadingToast = toast.loading('Securing your table...');
    
    setTimeout(() => {
      addReservation(reservation);
      toast.dismiss(loadingToast);
      toast.success('Reservation Confirmed!');
      navigate('/success', { state: { reservation } });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="pt-32 pb-20 min-h-screen px-4 flex justify-center items-center bg-cover bg-center bg-fixed"
         style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.95)), url(${restaurant.imageUrl})` }}>
      
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Info */}
        <div className="space-y-6 animate-fade-in-left">
          <div className="inline-block px-3 py-1 border border-royal-gold/50 text-royal-gold rounded uppercase text-xs tracking-widest">
            Reserve Your Table
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
            {restaurant.name}
          </h1>
          <p className="text-lg text-slate-300">
            {restaurant.description}
          </p>
          <div className="flex gap-4 pt-4">
             <div className="bg-white/5 p-4 rounded border border-white/10 text-center min-w-[100px]">
               <span className="block text-2xl font-bold text-royal-gold">{restaurant.rating}</span>
               <span className="text-xs text-slate-400 uppercase tracking-wide">Rating</span>
             </div>
             <div className="bg-white/5 p-4 rounded border border-white/10 text-center min-w-[100px]">
               <span className="block text-2xl font-bold text-royal-gold">{restaurant.priceRange}</span>
               <span className="text-xs text-slate-400 uppercase tracking-wide">Price</span>
             </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="glass-panel p-8 md:p-10 rounded-2xl shadow-2xl border-t border-royal-gold/20 animate-fade-in-right">
          <h2 className="text-2xl font-serif text-white mb-6 border-b border-white/10 pb-4">Reservation Details</h2>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm text-slate-400 mb-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-royal-gold h-4 w-4" />
                <input 
                  required
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleChange}
                  type="text" 
                  className="w-full bg-royal-navy/50 border border-slate-600 rounded-lg py-3 pl-10 pr-4 text-white focus:border-royal-gold focus:ring-1 focus:ring-royal-gold outline-none transition-all"
                  placeholder="Enter your name"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-slate-400 mb-1">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-royal-gold h-4 w-4" />
                <input 
                  required
                  name="customerPhone"
                  value={formData.customerPhone}
                  onChange={handleChange}
                  type="tel" 
                  className="w-full bg-royal-navy/50 border border-slate-600 rounded-lg py-3 pl-10 pr-4 text-white focus:border-royal-gold focus:ring-1 focus:ring-royal-gold outline-none transition-all"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-400 mb-1">Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-royal-gold h-4 w-4" />
                  <input 
                    required
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    type="date" 
                    className="w-full bg-royal-navy/50 border border-slate-600 rounded-lg py-3 pl-10 pr-4 text-white focus:border-royal-gold focus:ring-1 focus:ring-royal-gold outline-none transition-all [&::-webkit-calendar-picker-indicator]:invert"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-slate-400 mb-1">Time</label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-royal-gold h-4 w-4" />
                  <input 
                    required
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    type="time" 
                    className="w-full bg-royal-navy/50 border border-slate-600 rounded-lg py-3 pl-10 pr-4 text-white focus:border-royal-gold focus:ring-1 focus:ring-royal-gold outline-none transition-all [&::-webkit-calendar-picker-indicator]:invert"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm text-slate-400 mb-1">Guests</label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-royal-gold h-4 w-4" />
                <select 
                  name="numberOfGuests"
                  value={formData.numberOfGuests}
                  onChange={handleChange}
                  className="w-full bg-royal-navy/50 border border-slate-600 rounded-lg py-3 pl-10 pr-4 text-white focus:border-royal-gold focus:ring-1 focus:ring-royal-gold outline-none transition-all appearance-none"
                >
                  {[1,2,3,4,5,6,7,8,9,10].map(num => (
                    <option key={num} value={num} className="bg-royal-navy text-white">{num} Guests</option>
                  ))}
                </select>
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full mt-4 bg-gradient-to-r from-royal-gold to-yellow-600 text-royal-navy font-bold py-4 rounded-lg shadow-lg hover:shadow-royal-gold/30 transition-all duration-300 transform hover:-translate-y-1 uppercase tracking-widest"
            >
              Confirm Reservation
            </button>
            
            <p className="text-xs text-center text-slate-500 mt-4">
              By booking, you agree to our cancellation policy. A credit card may be required upon arrival.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};