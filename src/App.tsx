import React from 'react';
import { Hero } from './components/Hero';
import { Lifestyle } from './components/Lifestyle';
const LazyImageGallery = React.lazy(() => import('./components/ImageGallery'));
const LazyAmenities = React.lazy(() => import('./components/Amenities'));
const LazyContact = React.lazy(() => import('./components/Contact'));
const LazySpecifications = React.lazy(() => import('./components/Specifications'));


const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
        <Hero />        
        <Lifestyle />        
        <React.Suspense fallback={<p>Loading gallery...</p>}>
          <LazyImageGallery />
        </React.Suspense>
        <React.Suspense fallback={<p>Loading amenities...</p>}>
          <LazyAmenities />
        </React.Suspense>
        <React.Suspense fallback={<p>Loading specifications...</p>}>
          <LazySpecifications />
        </React.Suspense>
        <React.Suspense fallback={<p>Loading contact form...</p>}>
          <LazyContact />
        </React.Suspense>
    </div>
  );
};

export default App;