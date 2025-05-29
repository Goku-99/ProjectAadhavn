import React from 'react';
import { Building2, Grid, ChefHat, Zap, DoorOpen as Door, Bath } from 'lucide-react';

interface Specifications {
  icon: React.FC<{ className?: string }>;
  title: string;
  details: string[];
}

const specifications: Specifications[] = [
  {
    icon: Building2,
    title: 'Structure',
    details: [
      'Earthquake resistant.',
      'R.C.C Frame structure.'
    ]
  },
  {
    icon: Grid,
    title: 'Flooring',
    details: [
      'Vitrified tiles in all bedrooms, kitchen, living and dining area.',
      'Ceramic tiles in all bathrooms.',
      'Kota stone or similar in store and wash area.'
    ]
  },
  {
    icon: ChefHat,
    title: 'Kitchen',
    details: [
      'Polished Natural granite platforms.',
      'Stainless steel kitchen sink.',
      'Glazed ceramic tile dado up to the lintel level on walls above the platforms.'
    ]
  },
  {
    icon: Zap,
    title: 'Electrification',
    details: [
      'Concealed PVC Conduits with PVC insulated ISI grade copper wiring.',
      'Adequate points for lighting and power.',
      'Decorative modular switches with MCB distribution board.',
      'Air conditioning points in all bedrooms.',
      'Geyser points in all bathrooms.',
      'Provision for DTH and broadband internet connection.'
    ]
  },
  {
    icon: Door,
    title: 'Doors & Windows',
    details: [
      'Decorative main door with wooden framing.',
      'Flush doors with wooden framing in all bedrooms and bathrooms.',
      'Powders coated / analized aluminium sliding windows with stone jambs.'
    ]
  },
  {
    icon: Bath,
    title: 'Bathrooms & Toilets',
    details: [
      'Glazed ceramic tiles dado on, the wall up to lintel level.',
      'High quality sanitary ware and plumbing fixtures.'
    ]
  }
];

export const Specifications: React.FC = () => {
  return (
    <section id="specifications" className="py-16 px-4 bg-secondary-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-accent tracking-normal mb-12">SPECIFICATIONS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specifications.map((spec, index) => {
            const Icon = spec.icon;
            return (
              <div key={index} className="border border-neutral rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-6 h-6 stroke-[1.5px] text-primary" />
                  <h3 className="text-lg font-medium text-secondary-black">{spec.title}</h3>
                </div>
                <ul className="space-y-2.5">
                  {spec.details.map((detail, idx) => (
                    <li key={idx} className="text-gray-700 text-sm leading-relaxed flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};