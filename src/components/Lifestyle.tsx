import React from 'react';

export const Lifestyle: React.FC = () => {
  return (
    <section id="lifestyle" className="py-16">
      <div className="max-w-7xl px-4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Text Content */}
        <div >
        <h2 className="text-3xl font-bold text-accent tracking-normal mb-12">LIFESTYLE</h2>
        
            <p className="text-lg text-gray-900">
              Accessible Luxury: Experience the prestige of high-end living, Aadhvan Shine brings your dream of a luxurious home within reach.
            </p>
            <p className="text-lg text-gray-900">
              Elegance: Elevate your everyday life in a home that combines style, comfort, and convenience. Find joy in the details and create lasting memories in a space designed for your well-being.
            </p>
            <p className="text-lg text-gray-900">
              Balanced Life: Experience the best of both worlds – the vibrancy of city living and the tranquility of a thoughtfully designed home. Aadhvan Shine offers a perfect equilibrium of excitement and relaxation.
            </p>
          
        </div>
         {/* Image */}
         <div>
           <img
             src="/images/YogaRoom_Interior.jpeg"
             alt="Yoga Room Interior"
             className="w-full h-auto object-cover rounded-lg shadow-md"
           />
         </div>
      </div>
    </section>
  );
};