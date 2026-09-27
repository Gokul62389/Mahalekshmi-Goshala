import React from 'react';
import { ArrowUpRight, Compass, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FinalCTASectionProps {
  onOpenVisitModal: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onOpenVisitModal }) => {
  const { t } = useLanguage();

  return (
    <section className="relative py-32 sm:py-44 w-full flex items-center justify-center overflow-hidden bg-white text-[#111927] border-t border-gray-200">
      {/* Background Soft Kerala Landscape with Light Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/goshala/kerala-pastoral-egret.jpg"
          alt="Atmospheric Kerala landscape at Mahalekshmi Goshala"
          className="w-full h-full object-cover object-center filter brightness-[1.05] contrast-[1.0] scale-105 opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 mb-8">
          <Sparkles className="w-3.5 h-3.5 text-brand-red" />
          <span className="text-xs uppercase tracking-[0.25em] text-brand-red font-bold">
            {t.brand.parentTag}
          </span>
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#111927] leading-tight">
          {t.finalCta.headlinePart1} <br />
          <span className="font-light italic text-gray-600">{t.finalCta.headlinePart2}</span>
        </h2>

        <p className="mt-4 text-sm sm:text-base font-medium text-gray-500 tracking-widest uppercase font-mono">
          {t.finalCta.estateLocation}
        </p>

        <div className="mt-10 sm:mt-12 flex items-center justify-center">
          <button
            onClick={onOpenVisitModal}
            className="group px-9 py-4 sm:py-5 rounded-full bg-brand-red text-white hover:bg-brand-crimson text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-3"
          >
            <Compass className="w-4 h-4 text-white" />
            <span>{t.finalCta.planYourVisit}</span>
            <ArrowUpRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </section>
  );
};
