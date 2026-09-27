import React, { useEffect } from 'react';
import { X, MapPin, Sparkles, CheckCircle2, Shield, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import type { BreedItem } from '../types';

interface BreedModalProps {
  breed: BreedItem | null;
  onClose: () => void;
}

export const BreedModal: React.FC<BreedModalProps> = ({ breed, onClose }) => {
  const { language, t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (breed) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [breed, onClose]);

  if (!breed) return null;

  const breedData = t.breedsData[breed.id] || {
    name: language === 'ml' && breed.nativeName ? breed.nativeName : breed.name,
    origin: breed.origin,
    shortDesc: breed.shortDescription,
    fullStory: breed.fullStory,
    temperament: breed.temperament,
    heritageSignificance: breed.heritageSignificance,
    characteristics: breed.characteristics,
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/60 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="breed-modal-title"
    >
      {/* Backdrop click handler */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Dialog Card in Pure White */}
      <div className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white border border-gray-200 shadow-2xl text-[#111927] flex flex-col no-scrollbar">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 p-2.5 rounded-full bg-white/90 border border-gray-200 text-gray-700 hover:text-black hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-red shadow-lg"
          aria-label="Close breed details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Media */}
        <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-gray-100 border-b border-gray-200">
          <img
            src={breed.image}
            alt={breed.alt}
            className="w-full h-full object-cover object-center filter contrast-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Floating Archive Info */}
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-brand-red drop-shadow">
                  {t.breeds.modalArchivePrefix} #{breed.number}
                </span>
              </div>
              <h3 id="breed-modal-title" className="text-3xl sm:text-5xl font-bold text-white tracking-tight drop-shadow-md">
                {breedData.name}
              </h3>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-white/95 drop-shadow-md">
              <MapPin className="w-3.5 h-3.5 text-brand-red" />
              <span>{breedData.origin}</span>
            </div>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-10 space-y-8">
          {/* Origin for mobile */}
          <div className="sm:hidden flex items-center gap-1.5 text-xs text-brand-red font-semibold">
            <MapPin className="w-3.5 h-3.5" />
            <span>{breedData.origin}</span>
          </div>

          {/* Editorial Story */}
          <div>
            <span className="text-[11px] font-mono font-bold tracking-widest text-brand-red uppercase">
              {t.breeds.modalStoryTitle}
            </span>
            <p className="mt-2 text-base sm:text-lg text-gray-700 font-normal leading-relaxed">
              {breedData.fullStory}
            </p>
          </div>

          {/* Key Traits & Characteristics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-200">
            <div>
              <span className="text-[11px] font-mono font-bold tracking-widest text-gray-500 uppercase">
                {t.breeds.modalTraitsTitle}
              </span>
              <ul className="mt-3 space-y-2">
                {breedData.characteristics.map((trait) => (
                  <li key={trait} className="flex items-start gap-2.5 text-sm text-gray-700 font-normal">
                    <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                    <span>{trait}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-[11px] font-mono font-bold tracking-widest text-gray-500 uppercase">
                  {t.breeds.modalTemperamentTitle}
                </span>
                <p className="mt-1 text-sm text-gray-800 font-normal flex items-center gap-2">
                  <Heart className="w-4 h-4 text-brand-red shrink-0" />
                  <span>{breedData.temperament}</span>
                </p>
              </div>

              <div>
                <span className="text-[11px] font-mono font-bold tracking-widest text-gray-500 uppercase">
                  {t.breeds.modalSignificanceTitle}
                </span>
                <p className="mt-1 text-sm text-gray-800 font-normal flex items-start gap-2">
                  <Shield className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                  <span>{breedData.heritageSignificance}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Farm Sanctuary Notice */}
          <div className="p-4 rounded-xl bg-[#F8F9FA] border border-gray-200 flex items-center justify-between text-xs text-gray-600 shadow-sm">
            <span className="flex items-center gap-2 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-brand-red" />
              {t.breeds.modalSanctuaryNotice}
            </span>
            <span className="font-mono text-[11px] text-brand-red font-semibold">{t.brand.locationShort.split(',')[0]}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
