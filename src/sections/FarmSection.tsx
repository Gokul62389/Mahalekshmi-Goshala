import React, { useState } from 'react';
import { Wind, Droplets, SunMedium } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig } from '../data/siteConfig';

export const FarmSection: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'overview' | 'sheds'>('overview');

  const pillars = [
    { stat: t.farm.p1Stat, label: t.farm.p1Label, detail: t.farm.p1Desc },
    { stat: t.farm.p2Stat, label: t.farm.p2Label, detail: t.farm.p2Desc },
    { stat: t.farm.p3Stat, label: t.farm.p3Label, detail: t.farm.p3Desc },
    { stat: t.farm.p4Stat, label: t.farm.p4Label, detail: t.farm.p4Desc },
  ];

  return (
    <section id="farm" className="relative py-28 sm:py-36 bg-[#F8F9FA] text-[#111927] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 sm:mb-20">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-brand-red" />
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-brand-red">
                {t.farm.eyebrow}
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#111927] leading-tight">
              {t.farm.headlinePart1} <br />
              <span className="font-light italic text-gray-600">{t.farm.headlinePart2}</span>
            </h2>
          </div>

          <p className="max-w-md text-gray-600 font-normal text-base leading-relaxed">
            {t.farm.lead}
          </p>
        </div>

        {/* 4 Pillars Stats Grid in Clean White */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-white border border-gray-200/90 hover:border-brand-red transition-all duration-500 hover:translate-y-[-2px] group shadow-sm hover:shadow-lg"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-bold text-brand-red tracking-widest">0{idx + 1}</span>
                <span className="w-2.5 h-2.5 rounded-full bg-brand-red/20 group-hover:bg-brand-red transition-colors" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111927] group-hover:text-brand-red transition-colors">
                {pillar.stat}
              </h3>
              <p className="mt-2 text-xs font-bold tracking-[0.16em] uppercase text-gray-800">
                {pillar.label}
              </p>
              <p className="mt-4 text-sm font-normal text-gray-600 leading-relaxed">
                {pillar.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Dual Architectural Visual Showcase in White */}
        <div className="relative rounded-3xl overflow-hidden border border-gray-200 bg-white p-6 sm:p-10 shadow-xl">
          {/* Switcher Controls */}
          <div className="flex items-center justify-between flex-wrap gap-4 pb-8 border-b border-gray-200">
            <div>
              <span className="text-[11px] font-mono tracking-widest text-brand-red uppercase font-semibold">
                {t.farm.eyebrow}
              </span>
              <h4 className="text-xl font-bold text-[#111927] mt-1">
                {activeTab === 'overview' ? t.farm.landscapeTitle : t.farm.architectureTitle}
              </h4>
            </div>

            <div className="flex items-center gap-2 p-1 rounded-full bg-gray-100 border border-gray-200">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-4 py-2 rounded-full text-xs tracking-wider uppercase font-semibold transition-all ${
                  activeTab === 'overview'
                    ? 'bg-brand-red text-white shadow-md'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                {t.farm.overviewTab}
              </button>
              <button
                onClick={() => setActiveTab('sheds')}
                className={`px-4 py-2 rounded-full text-xs tracking-wider uppercase font-semibold transition-all ${
                  activeTab === 'sheds'
                    ? 'bg-brand-red text-white shadow-md'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                {t.farm.shedsTab}
              </button>
            </div>
          </div>

          {/* Interactive Visual Display */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 overflow-hidden rounded-2xl image-zoom-container relative h-[380px] sm:h-[480px] bg-gray-100 border border-gray-200 shadow-md">
              <img
                src={
                  activeTab === 'overview'
                    ? siteConfig.farmEnvironment.imagery.landscape
                    : siteConfig.farmEnvironment.imagery.sheds
                }
                alt={activeTab === 'overview' ? 'Farm pasture landscape' : 'Modern cattle shed interior'}
                className="w-full h-full object-cover object-center filter contrast-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white text-xs">
                <span className="font-semibold text-white/95 drop-shadow-md tracking-wide">
                  {activeTab === 'overview' ? t.farm.habitatLabel : t.farm.aerodynamicsLabel}
                </span>
              </div>
            </div>

            {/* Architectural Highlights Detail */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-5">
              <div className="p-6 rounded-2xl bg-[#F8F9FA] border border-gray-200/90 shadow-sm">
                <div className="flex items-center gap-3 text-brand-red mb-2">
                  <Wind className="w-5 h-5" />
                  <span className="text-xs uppercase tracking-widest font-bold text-[#111927]">{t.farm.ventilationTitle}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed font-normal">
                  {t.farm.ventilationDesc}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F8F9FA] border border-gray-200/90 shadow-sm">
                <div className="flex items-center gap-3 text-brand-red mb-2">
                  <Droplets className="w-5 h-5" />
                  <span className="text-xs uppercase tracking-widest font-bold text-[#111927]">{t.farm.waterTitle}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed font-normal">
                  {t.farm.waterDesc}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F8F9FA] border border-gray-200/90 shadow-sm">
                <div className="flex items-center gap-3 text-brand-red mb-2">
                  <SunMedium className="w-5 h-5" />
                  <span className="text-xs uppercase tracking-widest font-bold text-[#111927]">{t.farm.thermalTitle}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed font-normal">
                  {t.farm.thermalDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
