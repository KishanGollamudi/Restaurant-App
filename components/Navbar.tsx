import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Utensils, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled || mobileMenuOpen ? 'bg-royal-navy/95 backdrop-blur-md shadow-lg border-b border-royal-gold/20' : 'bg-transparent'
  }`;

  const isActive = (path: string) => location.pathname === path ? 'text-royal-gold' : 'text-white hover:text-royal-gold';

  return (
    <nav className={navClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 border border-royal-gold/50 rounded-full group-hover:bg-royal-gold/10 transition-colors">
              <Utensils className="h-6 w-6 text-royal-gold" />
            </div>
            <span className="text-2xl font-serif font-bold tracking-wider text-white">
              ROYAL<span className="text-royal-gold">DINE</span>
            </span>
          </Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className={`${isActive('/')} px-3 py-2 text-sm font-medium tracking-widest uppercase transition-colors`}>Home</Link>
              <Link to="/restaurants" className={`${isActive('/restaurants')} px-3 py-2 text-sm font-medium tracking-widest uppercase transition-colors`}>Restaurants</Link>
              <Link to="/admin" className={`${isActive('/admin')} px-3 py-2 text-sm font-medium tracking-widest uppercase transition-colors`}>Admin</Link>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white p-2">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-royal-navy border-b border-royal-gold/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-white hover:text-royal-gold text-center">Home</Link>
            <Link to="/restaurants" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-white hover:text-royal-gold text-center">Restaurants</Link>
            <Link to="/admin" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-white hover:text-royal-gold text-center">Admin Panel</Link>
          </div>
        </div>
      )}
    </nav>
  );
};