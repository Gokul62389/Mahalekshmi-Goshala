import React from 'react';
import { HeartHandshake, ShieldCheck, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig } from '../data/siteConfig';

export const StorySection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="story"
      className="relative z-20 -mt-6 sm:-mt-10 rounded-t-[2.5rem] sm:rounded-t-[3.5rem] bg-white text-[#111927] overflow-hidden shadow-2xl pt-24 sm:pt-36 pb-28 sm:pb-36 border-t border-gray-100"
    >
      {/* Subtle ambient luxury warmth */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-red-50/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-amber-50/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-[2px] bg-brand-red" />
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-brand-red">
            {t.story.eyebrow}
          </span>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Typography */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111927] leading-[1.12]">
              {t.story.headlinePart1} <br />
              <span className="font-light italic text-gray-600">{t.story.headlinePart2}</span>
            </h2>

            <div className="mt-8 space-y-6 text-gray-600 font-normal text-base sm:text-lg leading-relaxed">
              <p>{t.story.p1}</p>
              <p>{t.story.p2}</p>
            </div>

            {/* Philosophy Pull Quote */}
            <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-[#FAF8F5] border border-[#E7DFD3] relative shadow-sm">
              <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-brand-red text-[10px] tracking-widest uppercase text-white font-semibold shadow-sm">
                {t.story.quoteTag}
              </div>
              <blockquote className="text-lg sm:text-xl font-medium italic text-[#111927] leading-snug">
                "{t.story.quote}"
              </blockquote>
              <div className="mt-4 flex items-center gap-2 text-xs uppercase tracking-wider text-gray-500 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                <span>{t.story.quoteAuthor}</span>
              </div>
            </div>

            {/* Brand Relationship Note */}
            <div className="mt-8 flex items-center gap-4 text-xs text-gray-600 tracking-wider font-medium">
              <span className="inline-flex items-center gap-1.5 text-gray-800">
                <ShieldCheck className="w-4 h-4 text-brand-red" />
                {t.story.preservingBadge}
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1.5 text-gray-800">
                <HeartHandshake className="w-4 h-4 text-brand-red" />
                {t.story.crueltyFreeBadge}
              </span>
            </div>
          </div>

          {/* Right Column: Photography Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-gray-200 shadow-xl image-zoom-container group bg-gray-100">
              <img
                src={siteConfig.story.image}
                alt="Indigenous cattle at Mahalekshmi Goshala in Thiruvalla"
                className="w-full h-[450px] sm:h-[580px] object-cover object-center filter contrast-[1.02]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

              {/* Floating Badge in Bottom Left */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-gray-200/90 flex items-center justify-between shadow-lg">
                <div>
                  <p className="text-[11px] uppercase tracking-widest text-brand-red font-bold">
                    {t.story.nativeLineages}
                  </p>
                  <p className="text-sm font-semibold text-[#111927]">{t.story.travancoreStewardship}</p>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-gray-600 font-mono font-medium">
                  <MapPin className="w-3.5 h-3.5 text-brand-red" />
                  <span>{t.brand.locationShort.split(',')[0]}</span>
                </div>
              </div>
            </div>

            {/* Decorative Offset Frame Accent */}
            <div className="hidden sm:block absolute -bottom-5 -right-5 -z-10 w-full h-full rounded-3xl border border-gray-200 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};
