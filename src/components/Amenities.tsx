import React from 'react';
import { School as Pool, Trees as Tree, Shield, Dumbbell, Coffee, Car } from 'lucide-react';

const amenities = [
  { icon: Pool, name: 'Swimming Pool', description: 'Temperature controlled pool' },
  { icon: Tree, name: 'Garden Area', description: 'Landscaped gardens' },
  { icon: Shield, name: '24/7 Security', description: 'Advanced security systems' },
  { icon: Dumbbell, name: 'Fitness Center', description: 'Modern gym equipment' },
  { icon: Coffee, name: 'Club House', description: 'Community space' },
  { icon: Car, name: 'Parking', description: 'Reserved parking' },
];

export const Amenities = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Lifestyle Amenities</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                <Icon className="w-12 h-12 mx-auto mb-4 text-black" />
                <h3 className="text-xl font-semibold mb-2">{amenity.name}</h3>
                <p className="text-gray-600">{amenity.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};