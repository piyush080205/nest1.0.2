export interface TourPackage {
  id: string;
  title: string;
  state: string;
  category: string;
  duration: string;
  price: number;
  groupSize: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  season: string;
  description: string;
  highlights: string[];
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  images: string[];
  location: {
    lat: number;
    lng: number;
  };
  rating: number;
  reviews: number;
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  activities: string[];
}

export interface BookingForm {
  packageId: string;
  fullName: string;
  email: string;
  phone: string;
  numberOfTravelers: number;
  travelDate: string;
  specialRequests?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface Destination {
  name: string;
  state: string;
  description: string;
  image: string;
  attractions: number;
}
