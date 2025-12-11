import React, { useState } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Listings } from './pages/Listings';
import { ReservationPage } from './pages/ReservationPage';
import { SuccessPage } from './pages/SuccessPage';
import { AdminDashboard } from './pages/AdminDashboard';
import { Restaurant, Reservation } from './types';
import { INITIAL_RESTAURANTS } from './constants';
import { Toaster } from 'react-hot-toast';

export default function App() {
  // Global State for "Database" simulation
  const [restaurants, setRestaurants] = useState<Restaurant[]>(INITIAL_RESTAURANTS);
  const [reservations, setReservations] = useState<Reservation[]>([]);

  // Actions
  const addReservation = (reservation: Reservation) => {
    setReservations(prev => [...prev, reservation]);
  };

  const addRestaurant = (restaurant: Restaurant) => {
    setRestaurants(prev => [...prev, restaurant]);
  };

  const updateRestaurant = (updated: Restaurant) => {
    setRestaurants(prev => prev.map(r => r.id === updated.id ? updated : r));
  };

  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen bg-royal-navy font-sans text-slate-200">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home restaurants={restaurants} />} />
            <Route path="/restaurants" element={<Listings restaurants={restaurants} />} />
            <Route path="/reserve/:restaurantId" element={<ReservationPage restaurants={restaurants} addReservation={addReservation} />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="/admin" element={
              <AdminDashboard 
                restaurants={restaurants} 
                reservations={reservations} 
                addRestaurant={addRestaurant}
                updateRestaurant={updateRestaurant}
              />
            } />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
        <Toaster 
          position="top-center"
          toastOptions={{
            style: {
              background: '#1e293b',
              color: '#fff',
              border: '1px solid #d4af37'
            }
          }}
        />
      </div>
    </HashRouter>
  );
}