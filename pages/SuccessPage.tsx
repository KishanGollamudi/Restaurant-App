import React from 'react';
import { useLocation, Link, Navigate } from 'react-router-dom';
import { CheckCircle, Calendar, Clock, MapPin, Users } from 'lucide-react';
import { Reservation } from '../types';

export const SuccessPage: React.FC = () => {
  const location = useLocation();
  const reservation = location.state?.reservation as Reservation;

  if (!reservation) {
    return <Navigate to="/" />;
  }

  return (
    <div className="min-h-screen pt-24 pb-12 flex items-center justify-center px-4">
      <div className="glass-panel max-w-lg w-full rounded-2xl p-8 md:p-12 text-center border-t-4 border-t-royal-gold shadow-2xl animate-fade-in-up">
        
        <div className="flex justify-center mb-6">
          <div className="rounded-full bg-green-500/20 p-4 animate-pulse">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
        </div>

        <h1 className="text-3xl font-serif font-bold text-white mb-2">Reservation Confirmed</h1>
        <p className="text-slate-400 mb-8">We look forward to hosting you, {reservation.customerName}.</p>

        <div className="bg-royal-navy/50 rounded-lg p-6 mb-8 border border-white/5 text-left space-y-4">
          <div className="flex justify-between items-center border-b border-white/10 pb-3">
            <span className="text-slate-400 text-sm">Restaurant</span>
            <span className="text-royal-gold font-bold font-serif text-lg">{reservation.restaurantName}</span>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <Calendar className="h-4 w-4 text-slate-500" />
              <span className="text-white text-sm">{reservation.date}</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-4 w-4 text-slate-500" />
              <span className="text-white text-sm">{reservation.time}</span>
            </div>
            <div className="flex items-center gap-3">
              <Users className="h-4 w-4 text-slate-500" />
              <span className="text-white text-sm">{reservation.numberOfGuests} Guests</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-slate-500" />
              <span className="text-green-500 text-sm font-bold">Confirmed</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <Link to="/" className="block w-full bg-royal-gold text-royal-navy font-bold py-3 rounded hover:bg-yellow-600 transition-colors">
            Return to Home
          </Link>
          <p className="text-xs text-slate-500">
            A confirmation email has been sent to your registered address.
          </p>
        </div>
      </div>
    </div>
  );
};