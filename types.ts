export interface Restaurant {
  id: string;
  name: string;
  city: string;
  cuisineType: string;
  description: string;
  imageUrl: string;
  rating: number;
  priceRange: '$$' | '$$$' | '$$$$';
}

export interface Reservation {
  id: string;
  restaurantId: string;
  restaurantName: string;
  customerName: string;
  customerPhone: string;
  date: string;
  time: string;
  numberOfGuests: number;
  status: 'Confirmed' | 'Pending' | 'Cancelled';
}

export interface RestaurantFormData {
  name: string;
  city: string;
  cuisineType: string;
  description: string;
  imageUrl: string;
  priceRange: '$$' | '$$$' | '$$$$';
}