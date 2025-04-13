import React from 'react';
import { Home, MapPin, Ruler } from 'lucide-react';

const properties = [
  {
    type: '2 BHK Premium',
    area: 1250,
    price: 599000,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    type: '2.5 BHK Luxury',
    area: 1450,
    price: 699000,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  }
];

export const Properties = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Properties</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {properties.map((property, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div 
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${property.image})` }}
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">{property.type}</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Ruler className="w-5 h-5 mr-2 text-gray-600" />
                    <span>{property.area} sq ft</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-gray-600" />
                    <span>Prime Location</span>
                  </div>
                  <div className="flex items-center">
                    <Home className="w-5 h-5 mr-2 text-gray-600" />
                    <span>Ready to Move</span>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-2xl font-bold">${property.price.toLocaleString()}</span>
                  <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors duration-300">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};