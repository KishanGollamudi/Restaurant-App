import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-royal-navy border-t border-royal-gold/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="space-y-4">
            <h3 className="text-2xl font-serif text-royal-gold">ROYALDINE</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Experience the world's finest dining. We curate exclusive tables at the most sought-after restaurants globally, ensuring an unforgettable culinary journey.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-serif text-white tracking-widest uppercase">Contact Concierge</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-royal-gold" />
                <span>123 Luxury Lane, Beverly Hills, CA 90210</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-royal-gold" />
                <span>+1 (888) ROYAL-01</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-royal-gold" />
                <span>concierge@royaldine.com</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-serif text-white tracking-widest uppercase">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="p-2 border border-slate-700 rounded-full hover:border-royal-gold hover:text-royal-gold transition-all duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 border border-slate-700 rounded-full hover:border-royal-gold hover:text-royal-gold transition-all duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 border border-slate-700 rounded-full hover:border-royal-gold hover:text-royal-gold transition-all duration-300">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <p className="text-xs text-slate-500 pt-4">
              © {new Date().getFullYear()} RoyalDine Inc. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};