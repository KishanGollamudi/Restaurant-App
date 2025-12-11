import { Restaurant } from './types';

export const INITIAL_RESTAURANTS: Restaurant[] = [
  {
    id: '1',
    name: 'The Golden Spoon',
    city: 'New York',
    cuisineType: 'French Fine Dining',
    description: 'Experience the epitome of French culinary art in a setting of unbridled luxury. Award-winning chef and extensive wine list.',
    imageUrl: 'https://picsum.photos/seed/royal1/800/600',
    rating: 4.9,
    priceRange: '$$$$'
  },
  {
    id: '2',
    name: 'Azure Sky Lounge',
    city: 'Dubai',
    cuisineType: 'Modern Mediterranean',
    description: 'Breathtaking skyline views accompany exquisite Mediterranean dishes prepared with the freshest ingredients flown in daily.',
    imageUrl: 'https://picsum.photos/seed/royal2/800/600',
    rating: 4.8,
    priceRange: '$$$'
  },
  {
    id: '3',
    name: 'Sakura Zen',
    city: 'Tokyo',
    cuisineType: 'Omakase Sushi',
    description: 'An intimate 12-seat counter offering a traditional Edomae sushi experience with a modern, artistic twist.',
    imageUrl: 'https://picsum.photos/seed/royal3/800/600',
    rating: 5.0,
    priceRange: '$$$$'
  },
  {
    id: '4',
    name: 'Il Palazzo',
    city: 'Rome',
    cuisineType: 'Classic Italian',
    description: 'Dine like an emperor in a restored 16th-century palace. Authentic Roman flavors elevated to royal standards.',
    imageUrl: 'https://picsum.photos/seed/royal4/800/600',
    rating: 4.7,
    priceRange: '$$$'
  },
  {
    id: '5',
    name: 'Spice Route',
    city: 'London',
    cuisineType: 'Indian Fusion',
    description: 'A vibrant journey through the spices of India, reimagined with contemporary techniques and presentation.',
    imageUrl: 'https://picsum.photos/seed/royal5/800/600',
    rating: 4.6,
    priceRange: '$$'
  },
  {
    id: '6',
    name: 'Nordic Ember',
    city: 'Copenhagen',
    cuisineType: 'New Nordic',
    description: 'Foraged ingredients and open-fire cooking create a rustic yet deeply sophisticated tasting menu.',
    imageUrl: 'https://picsum.photos/seed/royal6/800/600',
    rating: 4.8,
    priceRange: '$$$$'
  }
];