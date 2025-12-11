import React, { useState } from 'react';
import { Restaurant, Reservation, RestaurantFormData } from '../types';
import { Plus, Edit, List, CalendarCheck, Utensils } from 'lucide-react';

interface AdminDashboardProps {
  restaurants: Restaurant[];
  reservations: Reservation[];
  addRestaurant: (r: Restaurant) => void;
  updateRestaurant: (r: Restaurant) => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ 
  restaurants, 
  reservations, 
  addRestaurant,
  updateRestaurant 
}) => {
  const [activeTab, setActiveTab] = useState<'restaurants' | 'reservations'>('restaurants');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const initialFormState: RestaurantFormData = {
    name: '',
    city: '',
    cuisineType: '',
    description: '',
    imageUrl: 'https://picsum.photos/seed/new/800/600',
    priceRange: '$$$'
  };

  const [formData, setFormData] = useState<RestaurantFormData>(initialFormState);

  const handleEdit = (restaurant: Restaurant) => {
    setFormData({
      name: restaurant.name,
      city: restaurant.city,
      cuisineType: restaurant.cuisineType,
      description: restaurant.description,
      imageUrl: restaurant.imageUrl,
      priceRange: restaurant.priceRange
    });
    setEditingId(restaurant.id);
    setIsModalOpen(true);
  };

  const handleAddNew = () => {
    setFormData(initialFormState);
    setEditingId(null);
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      updateRestaurant({ ...formData, id: editingId, rating: 4.5 }); // Keep existing rating or default
    } else {
      addRestaurant({ 
        ...formData, 
        id: Math.random().toString(36).substr(2, 9), 
        rating: 0 // New restaurants start with 0 rating
      });
    }
    setIsModalOpen(false);
  };

  return (
    <div className="pt-28 pb-20 min-h-screen px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-3xl font-serif font-bold text-white">Admin Dashboard</h1>
        
        <div className="flex bg-royal-navy/50 p-1 rounded-lg border border-slate-700">
          <button 
            onClick={() => setActiveTab('restaurants')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${activeTab === 'restaurants' ? 'bg-royal-gold text-royal-navy' : 'text-slate-400 hover:text-white'}`}
          >
            <Utensils className="h-4 w-4" /> Restaurants
          </button>
          <button 
            onClick={() => setActiveTab('reservations')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${activeTab === 'reservations' ? 'bg-royal-gold text-royal-navy' : 'text-slate-400 hover:text-white'}`}
          >
            <CalendarCheck className="h-4 w-4" /> Reservations
          </button>
        </div>
      </div>

      <div className="glass-panel rounded-xl overflow-hidden border border-slate-700">
        
        {activeTab === 'restaurants' && (
          <div className="p-6">
            <div className="flex justify-between mb-6">
              <h2 className="text-xl text-white font-bold">Restaurant Management</h2>
              <button 
                onClick={handleAddNew}
                className="bg-royal-navy border border-royal-gold text-royal-gold hover:bg-royal-gold hover:text-royal-navy px-4 py-2 rounded flex items-center gap-2 transition-colors text-sm font-bold uppercase"
              >
                <Plus className="h-4 w-4" /> Add New
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-400">
                <thead className="bg-royal-navy/50 text-royal-gold uppercase font-bold text-xs">
                  <tr>
                    <th className="px-6 py-3">Name</th>
                    <th className="px-6 py-3">City</th>
                    <th className="px-6 py-3">Cuisine</th>
                    <th className="px-6 py-3">Price</th>
                    <th className="px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                  {restaurants.map(r => (
                    <tr key={r.id} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 font-medium text-white">{r.name}</td>
                      <td className="px-6 py-4">{r.city}</td>
                      <td className="px-6 py-4">{r.cuisineType}</td>
                      <td className="px-6 py-4">{r.priceRange}</td>
                      <td className="px-6 py-4">
                        <button onClick={() => handleEdit(r)} className="text-blue-400 hover:text-blue-300">
                          <Edit className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'reservations' && (
          <div className="p-6">
            <h2 className="text-xl text-white font-bold mb-6">Reservation Log</h2>
            {reservations.length === 0 ? (
              <p className="text-slate-500 italic">No reservations booked yet.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-slate-400">
                  <thead className="bg-royal-navy/50 text-royal-gold uppercase font-bold text-xs">
                    <tr>
                      <th className="px-6 py-3">Customer</th>
                      <th className="px-6 py-3">Restaurant</th>
                      <th className="px-6 py-3">Date</th>
                      <th className="px-6 py-3">Time</th>
                      <th className="px-6 py-3">Guests</th>
                      <th className="px-6 py-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700">
                    {reservations.map(r => (
                      <tr key={r.id} className="hover:bg-white/5 transition-colors">
                        <td className="px-6 py-4 text-white font-medium">{r.customerName}</td>
                        <td className="px-6 py-4">{r.restaurantName}</td>
                        <td className="px-6 py-4">{r.date}</td>
                        <td className="px-6 py-4">{r.time}</td>
                        <td className="px-6 py-4">{r.numberOfGuests}</td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 rounded text-xs font-bold uppercase bg-green-500/20 text-green-500 border border-green-500/30">
                            {r.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Modal Form */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="glass-panel w-full max-w-lg rounded-xl p-8 border border-slate-600 shadow-2xl">
            <h3 className="text-2xl font-serif text-white mb-6">
              {editingId ? 'Edit Restaurant' : 'Add Restaurant'}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-slate-400 mb-1">Name</label>
                <input 
                  className="w-full bg-royal-navy border border-slate-600 rounded p-2 text-white"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  required 
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm text-slate-400 mb-1">City</label>
                    <input 
                    className="w-full bg-royal-navy border border-slate-600 rounded p-2 text-white"
                    value={formData.city}
                    onChange={e => setFormData({...formData, city: e.target.value})}
                    required 
                    />
                </div>
                <div>
                    <label className="block text-sm text-slate-400 mb-1">Cuisine</label>
                    <input 
                    className="w-full bg-royal-navy border border-slate-600 rounded p-2 text-white"
                    value={formData.cuisineType}
                    onChange={e => setFormData({...formData, cuisineType: e.target.value})}
                    required 
                    />
                </div>
              </div>
              <div>
                 <label className="block text-sm text-slate-400 mb-1">Price Range</label>
                 <select 
                    className="w-full bg-royal-navy border border-slate-600 rounded p-2 text-white"
                    value={formData.priceRange}
                    onChange={e => setFormData({...formData, priceRange: e.target.value as any})}
                 >
                    <option value="$$">$$</option>
                    <option value="$$$">$$$</option>
                    <option value="$$$$">$$$$</option>
                 </select>
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-1">Description</label>
                <textarea 
                  className="w-full bg-royal-navy border border-slate-600 rounded p-2 text-white"
                  rows={3}
                  value={formData.description}
                  onChange={e => setFormData({...formData, description: e.target.value})}
                  required 
                />
              </div>
              <div className="flex justify-end gap-3 mt-6">
                <button 
                    type="button" 
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 text-slate-400 hover:text-white"
                >
                    Cancel
                </button>
                <button 
                    type="submit" 
                    className="px-6 py-2 bg-royal-gold text-royal-navy font-bold rounded hover:bg-yellow-600"
                >
                    Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};