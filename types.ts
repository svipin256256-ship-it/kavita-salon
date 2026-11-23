export interface SalonService {
  id: string;
  name: string;
  category: 'hair' | 'skin' | 'bridal' | 'grooming';
  price: string;
  startingPriceNumber: number;
  duration: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  image: string;
  popular?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'hairstyles' | 'color' | 'skincare' | 'bridal' | 'salon';
  categoryLabel: string;
  image: string;
  description: string;
  stylist: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  date: string;
  service: string;
  quote: string;
  avatarText: string;
}

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  serviceId: string;
  preferredDate: string;
  preferredTime: string;
  stylistPreference?: string;
  specialRequests?: string;
}

export interface BookingRecord extends AppointmentFormData {
  id: string;
  createdAt: string;
  serviceName: string;
  status: 'confirmed' | 'pending';
}
