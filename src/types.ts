export interface Property {
  id: string;
  type: '2BHK' | '2.5BHK';
  area: number; // in sq ft
  price: number;
  features: string[];
  images: string[];
  floorPlan: string;
}

export interface Amenity {
  name: string;
  icon: string;
  description: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  propertyType: '2BHK' | '2.5BHK';
  message: string;
}