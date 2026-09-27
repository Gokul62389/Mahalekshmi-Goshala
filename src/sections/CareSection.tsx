import React from 'react';
import { Feather, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig } from '../data/siteConfig';

export const CareSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="care" className="relative py-28 sm:py-36 bg-white text-[#111927] overflow-hidden border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-brand-red" />
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-brand-red">
              {t.care.eyebrow}
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#111927] leading-tight">
            {t.care.headlinePart1} <br />
            <span className="font-light italic text-gray-600">{t.care.headlinePart2}</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
            {t.care.lead}
          </p>
        </div>

        {/* 4 Care Pillars (Alternating Clean White Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {siteConfig.care.map((aspect, idx) => {
            const careText = t.careItems[idx] || aspect;
            return (
              <div
                key={aspect.id}
                className="group rounded-3xl bg-white border border-gray-200/90 hover:border-brand-red overflow-hidden transition-all duration-700 ease-cinematic flex flex-col justify-between shadow-sm hover:shadow-xl"
              >
                {/* Pillar Image */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-gray-100 image-zoom-container border-b border-gray-200">
                  <img
                    src={aspect.image}
                    alt={careText.title}
                    className="w-full h-full object-cover object-center filter contrast-[1.02]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                </div>

                {/* Pillar Body */}
                <div className="p-8 sm:p-10 flex flex-col justify-between flex-1 space-y-6">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-gray-500 font-bold">
                      {careText.tagline}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#111927] tracking-tight mt-1 mb-4 group-hover:text-brand-red transition-colors">
                      {careText.title}
                    </h3>
                    <p className="text-gray-600 font-normal text-sm sm:text-base leading-relaxed">
                      {careText.description}
                    </p>
                  </div>

                  {/* Principle Statement */}
                  <div className="pt-6 border-t border-gray-100">
                    <p className="text-xs text-gray-600 font-normal italic flex items-start gap-2 bg-[#FAF8F5] p-3 rounded-xl border border-gray-200/70">
                      <Feather className="w-3.5 h-3.5 text-brand-red shrink-0 mt-0.5" />
                      <span>"{careText.principle}"</span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quiet Sanctuary Badge in White */}
        <div className="mt-16 p-8 rounded-2xl bg-[#F8F9FA] border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-red-100 border border-red-200 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-brand-red" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#111927]">{t.care.standardBadgeTitle}</h4>
              <p className="text-xs text-gray-600 mt-0.5 font-normal">{t.care.standardBadgeSubtitle}</p>
            </div>
          </div>
          <span className="text-xs font-mono font-bold text-brand-red tracking-wider uppercase">
            {t.brand.locationShort}
          </span>
        </div>
      </div>
    </section>
  );
};
