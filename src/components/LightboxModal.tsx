import React, { useEffect } from 'react';
import { X, ArrowLeft, ArrowRight, Camera } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import type { GalleryPhoto } from '../types';

interface LightboxModalProps {
  photos: GalleryPhoto[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  photos,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}) => {
  const { t } = useLanguage();
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || photos.length === 0) return null;

  const currentPhoto = photos[currentIndex];
  const photoText = t.galleryItems[currentPhoto.id] || currentPhoto;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-earth-950/95 backdrop-blur-2xl animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="Gallery Lightbox"
    >
      <div className="absolute inset-0" onClick={onClose} />

      {/* Top Bar Navigation */}
      <div className="absolute top-6 left-6 right-6 z-20 flex items-center justify-between pointer-events-none">
        <div className="pointer-events-auto flex items-center gap-3 px-4 py-2 rounded-full bg-earth-950/80 backdrop-blur-md border border-earth-800 text-xs text-earth-300">
          <Camera className="w-3.5 h-3.5 text-brand-gold" />
          <span className="font-mono">
            {currentIndex + 1} / {photos.length}
          </span>
          <span className="text-earth-600">|</span>
          <span className="uppercase tracking-widest text-[10px] text-brand-gold font-medium">
            {photoText.category}
          </span>
        </div>

        <button
          onClick={onClose}
          className="pointer-events-auto p-2.5 rounded-full bg-earth-900 border border-earth-700 text-earth-300 hover:text-white hover:bg-earth-800 transition-colors"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image Container */}
      <div className="relative z-10 max-w-5xl max-h-[80vh] flex flex-col items-center">
        <img
          src={currentPhoto.image}
          alt={photoText.title}
          className="max-h-[72vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl border border-earth-800"
        />

        {/* Caption Bar */}
        <div className="mt-4 text-center">
          <h4 className="text-lg font-medium text-white">{photoText.title}</h4>
          <p className="text-xs text-earth-400 font-light mt-0.5">{photoText.caption}</p>
        </div>
      </div>

      {/* Next & Prev Arrows */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-earth-900/80 border border-earth-700 text-earth-200 hover:text-white hover:bg-brand-red transition-all"
        aria-label="Previous photograph"
      >
        <ArrowLeft className="w-5 h-5" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-earth-900/80 border border-earth-700 text-earth-200 hover:text-white hover:bg-brand-red transition-all"
        aria-label="Next photograph"
      >
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
};
