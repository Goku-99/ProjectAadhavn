import React, { useState, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useInView } from 'react-intersection-observer';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface GalleryImage {
  id: string;
  url: string;
  webpUrl: string;
  alt: string;
  width: number;
  height: number;
  thumbnail: string;
}

const images: GalleryImage[] = [
  {
    id: 'exterior-view',
    url: '/images/Exterior_Building_Right_Side.jpeg',
    webpUrl: '/images/Exterior_Building_Right_Side.jpeg',
    alt: 'Exterior right view of Aadhvan Shine luxury apartments featuring modern architecture and landscaping',
    width: 1350,
    height: 900,
    thumbnail: '/images/Exterior_Building_Right_Side.jpeg'
  },
  {
    id: 'Entarance-view',
    url: '/images/Entarance_View.jpeg',
    webpUrl: '/images/Entarance_View.jpeg',
    alt: 'Entarance view of Aadhvan Shine luxury apartments featuring modern architecture and landscaping',
    width: 1350,
    height: 900,
    thumbnail: '/images/Entarance_View.jpeg'
  },
  {
    id: 'living-room',
    url: '/images/LivingRoom_Interior.jpeg',
    webpUrl: '/images/LivingRoom_Interior.jpeg',
    alt: 'Living Room view of Aadhvan Shine luxury apartments featuring modern architecture and landscaping',
    width: 1350,
    height: 900,
    thumbnail: '/images/LivingRoom_Interior.jpeg'
  },
  {
    id: 'Yoga-room',
    url: '/images/YogaRoom_Interior.jpeg',
    webpUrl: '/images/YogaRoom_Interior.jpeg',
    alt: 'Yoga Room view of Aadhvan Shine luxury apartments featuring modern architecture and landscaping',
    width: 1350,
    height: 900,
    thumbnail: '/images/YogaRoom_Interior.jpeg'
  },
  {
    id: 'Club-room',
    url: '/images/ClubRoom_Interior.jpeg',
    webpUrl: '/images/ClubRoom_Interior.jpeg',
    alt: 'Club Room view of Aadhvan Shine luxury apartments featuring modern architecture and landscaping',
    width: 1350,
    height: 900,
    thumbnail: '/images/ClubRoom_Interior.jpeg'
  },
  {
    id: 'PlayArea',
    url: '/images/Building_Exterior_Play_area.jpeg',
    webpUrl: '/images/Building_Exterior_Play_area.jpeg',
    alt: 'Play area view of Aadhvan Shine luxury apartments featuring modern architecture and landscaping',
    width: 1350,
    height: 900,
    thumbnail: '/images/Building_Exterior_Play_area.jpeg'
  }
];

export const ImageGallery: React.FC = () => {
  const [fullscreenImage, setFullscreenImage] = useState<GalleryImage | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(-1);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const handleImageClick = useCallback((image: GalleryImage) => {
    setFullscreenImage(image);
    const index = images.findIndex(img => img.id === image.id);
    if (index !== -1) {
      setCurrentImageIndex(index);
    }
  }, []);

  const handlePrevImage = useCallback(() => {
    setCurrentImageIndex(prevIndex => {
      const newIndex = (prevIndex - 1 + images.length) % images.length;
      setFullscreenImage(images[newIndex]);
      return newIndex;
    });
  }, []);

  const handleNextImage = useCallback(() => {
    setCurrentImageIndex(prevIndex => {
      const newIndex = (prevIndex + 1) % images.length;
      setFullscreenImage(images[newIndex]);
      return newIndex;
    });
  }, []);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (fullscreenImage) {
      if (event.key === 'ArrowLeft') handlePrevImage();
      if (event.key === 'ArrowRight') handleNextImage();
    }}, [fullscreenImage, handlePrevImage, handleNextImage]);React.useEffect(() => {window.addEventListener('keydown', handleKeyDown);return () => {window.removeEventListener('keydown', handleKeyDown);};}, [handleKeyDown]);

  return (
    <section 
      ref={ref}
      className="py-20 bg-neutral"
      id="project-gallery"      itemScope
      itemType="https://schema.org/ImageGallery"
    >
      <div className="max-w-7xl mx-auto px-8">
        <h2 
          className="text-3xl font-bold text-accent tracking-normal mb-12 text-center"
          itemProp="name"
        >
          PROJECT GALLERY
        </h2>
        
        <meta itemProp="description" content="Gallery showcasing Aadhvan Shine's luxury apartments and amenities" />
        
        <div className="relative max-w-6xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            navigation={{
              prevEl: '.custom-swiper-button-prev',
              nextEl: '.custom-swiper-button-next',
            }}
            pagination={{ 
              clickable: true,
              bulletClass: 'swiper-pagination-bullet !bg-secondary-black/60',
              bulletActiveClass: '!bg-accent'
            }}
            loop={true}
            className="relative group"
            a11y={{
              prevSlideMessage: 'Previous slide',
              nextSlideMessage: 'Next slide',
              firstSlideMessage: 'This is the first slide',
              lastSlideMessage: 'This is the last slide',
              paginationBulletMessage: 'Go to slide {{index}}'
            }}
          >
            {images.map((image) => (
              <SwiperSlide 
                key={image.id}
                itemScope 
                itemType="https://schema.org/ImageObject"
              >
                <div 
                  className="cursor-pointer"
                  onClick={() => handleImageClick(image)} // This seems to be duplicated later
                >
                  {inView && (
                    <>
                      <meta itemProp="contentUrl" content={image.url} />
                      <meta itemProp="name" content={image.alt} />
                      <meta itemProp="width" content={image.width.toString()} />
                      <meta itemProp="height" content={image.height.toString()} />
                      
                      <picture>
                        <source
                          srcSet={image.webpUrl}
                          type="image/webp"
                        />
                        <LazyLoadImage
                          src={image.url}
                          alt={image.alt}
                          width={image.width}
                          height={image.height}
                          placeholderSrc={image.thumbnail}
                          effect="blur"
                          className="max-w-full max-h-[90vh] object-contain rounded-lg"
                          wrapperClassName="max-w-full max-h-[90vh]"
                        />
                      </picture>
                    </>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <button 
            className="custom-swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/70 p-4 rounded-full shadow-lg hover:bg-white/90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black/20 touch-manipulation"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 text-secondary-black" />
          </button>
          <button 
            className="custom-swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/70 p-4 rounded-full shadow-lg hover:bg-white/90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black/20 touch-manipulation"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 text-gray-900" />
          </button>
        </div>
      </div>

      {/* Fullscreen Image Container */}
      {fullscreenImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={() => setFullscreenImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Fullscreen image view"
        >
          <button
            // Close Button
            onClick={(e) => {
              e.stopPropagation();
              setFullscreenImage(null);
            }}
            className="absolute top-6 right-6 text-secondary-white/70 hover:text-secondary-white hover:bg-secondary-white/10 transition-colors p-2 rounded-full z-50"
            aria-label="Close fullscreen view"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigation Buttons */}
          {currentImageIndex > 0 && (
 <button
 onClick={(e) => { e.stopPropagation(); handlePrevImage(); }}
 className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-secondary-white/70 hover:text-secondary-white hover:bg-secondary-white/10 transition-colors p-3 rounded-full"
 aria-label="Previous image"
 >
 <ChevronLeft className="w-10 h-10" />
 </button>
          )}

          {currentImageIndex < images.length - 1 && (
 <button
 onClick={(e) => { e.stopPropagation(); handleNextImage(); }}
 className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-secondary-white/70 hover:text-secondary-white hover:bg-secondary-white/10 transition-colors p-3 rounded-full"
 aria-label="Next image"
 >
 <ChevronRight className="w-10 h-10" />
 </button>
          )}


          <picture>
            <source
              srcSet={fullscreenImage.webpUrl}
              type="image/webp"
            />
            <img
              src={fullscreenImage.url}
              alt={fullscreenImage.alt}
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
              loading="eager"
              width={fullscreenImage.width}
              height={fullscreenImage.height}
            />
          </picture>
        </div>
      )}
    </section>
  );
};