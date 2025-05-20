import React from 'react';
import { Hero } from './components/Hero';
import { Lifestyle } from './components/Lifestyle';
import { ImageGallery } from './components/ImageGallery';
import { Specifications } from './components/Specifications';
import { Contact } from './components/Contact';


const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
        <Hero />        
        <Lifestyle />        
        <ImageGallery />
        <Specifications />
        <Contact />
    </div>
  );
};

export default App;