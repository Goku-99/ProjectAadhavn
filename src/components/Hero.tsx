import React from 'react';
import { MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen bg-gray-900">
      {/* Background Image Container */}
      <div 
        className="absolute inset-0"
        role="img"
        aria-label="Aadhvan Shine Luxury Apartments and Retail Spaces exterior view"
      >
        <img          
          /*src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" */
          src="/images/Exterior_Building_Middle_View_new.webp"

          alt="Aadhvan Shine - Luxury residential and retail development with retail spaces"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        {/* Enhanced gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
      </div>
      
      {/* Content Container */}
      <div className="relative h-full container mx-auto px-4 lg:px-8">
        {/* Text Content - Left aligned and bottom positioned */}
        <div className="absolute bottom-0 left-0 px-4 lg:px-8 pb-16 lg:pb-24 max-w-2xl">
          {/* Property Name */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-white tracking-tight">
            Aadhvan Shine
          </h1>
          
          {/* Property Description */}
          <div className="space-y-4">
            <p className="text-lg md:text-2xl font-light text-white/90">
              Luxury 3 BHK Living & Retail Spaces
            </p>
            
            {/* Location */}
            <div className="flex items-center text-base md:text-lg text-white/90">
              <MapPin className="w-5 h-5 mr-2" />
              <span>South Bopal</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};