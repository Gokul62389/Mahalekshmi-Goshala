import React, { useState } from 'react';
import { Expand } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig } from '../data/siteConfig';
import { LightboxModal } from '../components/LightboxModal';

export const GallerySection: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const categories = [
    { id: 'All', label: t.gallery.allFilter },
    { id: 'Cattle', label: t.gallery.cattleFilter },
    { id: 'Landscape', label: t.gallery.landscapeFilter },
    { id: 'Daily Care', label: t.gallery.careFilter },
    { id: 'Architecture', label: t.gallery.architectureFilter },
  ];

  const filteredPhotos =
    activeCategory === 'All'
      ? siteConfig.gallery
      : siteConfig.gallery.filter((item) => item.category === activeCategory);

  const handleOpenLightbox = (index: number) => {
    setCurrentPhotoIndex(index);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setCurrentPhotoIndex((prev) => (prev < filteredPhotos.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setCurrentPhotoIndex((prev) => (prev > 0 ? prev - 1 : filteredPhotos.length - 1));
  };

  return (
    <section id="gallery" className="relative py-28 sm:py-36 bg-white text-[#111927] overflow-hidden border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-brand-red" />
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-brand-red">
                {t.gallery.eyebrow}
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111927] leading-tight">
              {t.gallery.headlinePart1} <br />
              <span className="font-light italic text-gray-600">{t.gallery.headlinePart2}</span>
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-brand-red text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:text-black border border-gray-200 shadow-sm'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Masonry/Grid Showcase in White */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, idx) => {
            const photoText = t.galleryItems[photo.id] || photo;
            return (
              <div
                key={photo.id}
                onClick={() => handleOpenLightbox(idx)}
                className={`group relative rounded-3xl overflow-hidden bg-gray-100 border border-gray-200 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-700 ease-cinematic image-zoom-container hover:border-brand-red ${
                  idx === 0 || idx === 3 ? 'sm:col-span-2 lg:col-span-2 h-[380px] sm:h-[440px]' : 'h-[380px] sm:h-[440px]'
                }`}
              >
                <img
                  src={photo.image}
                  alt={photoText.title}
                  className="w-full h-full object-cover object-center filter contrast-[1.02]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                {/* Hover Badge */}
                <div className="absolute top-4 right-4 p-2 rounded-full bg-white/95 backdrop-blur-md border border-gray-200 text-[#111927] opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-105 shadow-md">
                  <Expand className="w-4 h-4 text-brand-red" />
                </div>

                {/* Bottom Metadata */}
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div className="bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-gray-200/90 shadow-lg max-w-sm">
                    <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-brand-red">
                      {photoText.category}
                    </span>
                    <h3 className="text-lg font-bold text-[#111927] mt-1 group-hover:text-brand-red transition-colors">
                      {photoText.title}
                    </h3>
                    <p className="text-xs text-gray-600 font-normal mt-0.5 line-clamp-1">
                      {photoText.caption}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lightbox Dialog */}
        <LightboxModal
          photos={filteredPhotos}
          currentIndex={currentPhotoIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      </div>
    </section>
  );
};
