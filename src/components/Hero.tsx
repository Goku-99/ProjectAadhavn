import React from 'react';
import { MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleScrollToSection = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault(); // Prevent the default jump behavior
    const targetId = event.currentTarget.getAttribute('data-section');
    if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <div className="relative h-screen bg-gray-900">
      {/* Background Image Container */}
      <div
        className="absolute inset-0"
        role="img"
        aria-label="Aadhvan Shine Luxury Apartments and Retail Spaces exterior view"
      >
        <img
          src="/images/Exterior_Building_Middle_View_new.webp"
          alt="Aadhvan Shine - Luxury residential and retail development with retail spaces"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        {/* Enhanced gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
      </div>

      {/* Header Container - Logo on Left, Navigation on Right */}
      <div className="absolute -top-6 left-0 right-0 z-10 flex items-center justify-between p-4 lg:p-8">
        {/* Logo - Top Left */}
        <a href="/"> {/* Or the appropriate link for your home page */}
          <img
            src="/images/Aadhvan_Logo.png" // Assuming logo is named logo.png in public/images
            alt="Aadhvan Shine Logo"
            className="h-20 w-auto object-contain" // Adjusted dimensions for better visibility
            loading="lazy"
          />
        </a>

      {/* Navigation Items - Top Right */}
      <nav>
        <ul className="flex items-center space-x-4 lg:space-x-8">
          <li>
            <a
              href="#"
              data-section="lifestyle"
              onClick={handleScrollToSection}
              className="text-accent hover:underline transition-all duration-300 font-medium text-sm lg:text-base p-2 rounded-md"
            >
              Lifestyle
            </a>
          </li>
          <li>
            <a
              href="#home"
              data-section="project-gallery"
              onClick={handleScrollToSection}
              className="text-accent hover:underline transition-all duration-300 font-medium text-sm lg:text-base p-2 rounded-md"
            >
              Project Gallery
            </a>
          </li>
          <li>
            <a
              href="#contact"
              data-section="contact-us"
              onClick={handleScrollToSection}
              className="text-accent hover:underline transition-all duration-300 font-medium text-sm lg:text-base p-2 rounded-md"
            >
              Contact Us
            </a>
          </li>
          <li>
            <a
              href="#"
              data-section="download-brochure"
              onClick={handleScrollToSection}
              className="bg-secondary-white text-accent py-2 px-4 rounded-md hover:bg-neutral hover:text-accent hover:underline transition-all duration-300 font-light text-sm lg:text-base"
            >
              Download Brochure
            </a>
          </li>
        </ul>
      </nav>

      </div>
      {/* Content Container */}
      <div className="relative h-full container mx-auto px-4 lg:px-8">
        {/* Text Content - Left aligned and bottom positioned */}
        <div className="absolute bottom-0 left-0 px-4 lg:px-8 pb-16 lg:pb-24 max-w-2xl">
          {/* Property Name */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-primary tracking-tight">
            Aadhvan Shine
          </h1>

          {/* Property Description */}
          <div className="space-y-4">
            <p className="text-lg md:text-2xl font-light text-neutral">
              Luxury 3 BHK Living & Retail Spaces
            </p>

            {/* Location */}
            <div className="flex items-center text-base md:text-lg text-neutral">
              <MapPin className="w-5 h-5 mr-2" />
              <span>South Bopal</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};