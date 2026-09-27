import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig } from '../data/siteConfig';
import type { BreedItem } from '../types';

interface BreedGalleryProps {
  onSelectBreed: (breed: BreedItem) => void;
}

export const BreedGallery: React.FC<BreedGalleryProps> = ({ onSelectBreed }) => {
  const { language, t } = useLanguage();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="breeds" className="relative py-28 sm:py-36 bg-white text-[#111927] overflow-hidden border-t border-gray-200">
      {/* Background accents */}
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-red-50/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-brand-red" />
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-brand-red">
                {t.breeds.eyebrow}
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111927] leading-tight">
              {t.breeds.headlinePart1} <br />
              <span className="font-light italic text-gray-600">{t.breeds.headlinePart2}</span>
            </h2>
          </div>

          {/* Navigation Controls for Desktop */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-3 rounded-full border border-gray-300 bg-white hover:bg-brand-red hover:border-brand-red text-gray-700 hover:text-white transition-all shadow-sm"
              aria-label="Previous breeds"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-full border border-gray-300 bg-white hover:bg-brand-red hover:border-brand-red text-gray-700 hover:text-white transition-all shadow-sm"
              aria-label="Next breeds"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrolling Gallery Container in Crisp White */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 sm:gap-8 overflow-x-auto no-scrollbar scroll-smooth pb-8 -mx-6 px-6 sm:-mx-10 sm:px-10 cursor-grab active:cursor-grabbing"
        >
          {siteConfig.breeds.map((breed) => (
            <article
              key={breed.id}
              onClick={() => onSelectBreed(breed)}
              className="flex-shrink-0 w-[290px] sm:w-[350px] md:w-[380px] group rounded-3xl bg-white border border-gray-200/90 hover:border-brand-red p-5 sm:p-6 transition-all duration-500 ease-cinematic hover:-translate-y-1.5 cursor-pointer shadow-sm hover:shadow-xl flex flex-col justify-between"
            >
              {/* Card Top: Number & Origin */}
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                  <span className="font-mono text-xs sm:text-sm font-bold tracking-widest text-brand-red">
                    {breed.number}
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-gray-500 font-semibold truncate max-w-[200px]">
                    {t.breedsData[breed.id]?.origin || breed.origin}
                  </span>
                </div>

                {/* Breed Title */}
                <div className="mt-4 mb-5 flex items-baseline justify-between">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#111927] tracking-tight group-hover:text-brand-red transition-colors">
                    {t.breedsData[breed.id]?.name || (language === 'ml' && breed.nativeName ? breed.nativeName : breed.name)}
                  </h3>
                </div>

                {/* Museum Specimen Image */}
                <div className="relative h-60 sm:h-72 w-full rounded-2xl overflow-hidden bg-gray-100 image-zoom-container border border-gray-200/80 shadow-inner">
                  <img
                    src={breed.image}
                    alt={breed.alt}
                    className="w-full h-full object-cover object-center filter contrast-[1.02]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                </div>

                {/* Short Description */}
                <p className="mt-5 text-sm text-gray-600 font-normal leading-relaxed line-clamp-2">
                  {t.breedsData[breed.id]?.shortDesc || breed.shortDescription}
                </p>
              </div>

              {/* Card Footer: Explore Breed CTA */}
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs tracking-wider uppercase font-semibold text-gray-700 group-hover:text-brand-red transition-colors">
                <span>{t.breeds.exploreRecord}</span>
                <div className="p-2 rounded-full bg-gray-100 group-hover:bg-brand-red text-gray-700 group-hover:text-white transition-all transform group-hover:translate-x-1 shadow-sm">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Swipe Hint for Mobile */}
        <div className="mt-4 flex sm:hidden items-center justify-center gap-2 text-xs text-gray-500 tracking-wider">
          <span>{t.breeds.swipeHint}</span>
        </div>
      </div>
    </section>
  );
};
