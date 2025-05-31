import React from 'react';

export const Lifestyle: React.FC = () => {
  return (
    <section id="lifestyle" className="py-16">
      <div className="max-w-7xl px-4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Text Content */}
        <div >
        <h2 className="text-3xl font-bold text-accent tracking-normal mb-12">LIFESTYLE</h2>
        
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              <strong>Luxury:</strong> Experience the prestige of high-end living, Aadhvan Shine offers luxurious living where modern living meets elegance.              
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              <strong>Indulge:</strong> Immerse yourself in a world where every detail at Aadhvan Shine embodies sophistication and comfort. Find joy in a space meticulously crafted for your well-being, creating lasting memories in a home that truly reflects your success.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              <strong>Balance:</strong> Experience the best of both worlds – the vibrancy of city living and the tranquility of a thoughtfully designed home. Aadhvan Shine offers a perfect equilibrium of excitement and relaxation.
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