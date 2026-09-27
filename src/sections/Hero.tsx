import React from 'react';
import { ArrowDown, Compass, Play, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig } from '../data/siteConfig';

interface HeroProps {
  onOpenVisitModal: () => void;
  onOpenVideoModal: (videoId: string, title: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenVisitModal, onOpenVideoModal }) => {
  const { t } = useLanguage();

  const scrollToStory = () => {
    const el = document.getElementById('story');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#0C1017]">
      {/* Background Media Container */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* High-res YouTube Poster Fallback */}
        <img
          src={siteConfig.hero.posterImage}
          alt="Mahalekshmi Goshala cattle farm in Thiruvalla"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105 filter brightness-[0.7] contrast-[1.05]"
          loading="eager"
        />

        {/* Cinematic Ambient YouTube Hero Video */}
        {siteConfig.hero.youtubeId && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <iframe
              className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 object-cover filter brightness-[0.78] contrast-[1.08] pointer-events-none"
              src={`https://www.youtube-nocookie.com/embed/${siteConfig.hero.youtubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${siteConfig.hero.youtubeId}&start=${siteConfig.hero.startTime || 15}&playsinline=1&rel=0&showinfo=0&iv_load_policy=3&modestbranding=1&disablekb=1&fs=0`}
              title="Mahalekshmi Goshala Hero Video"
              allow="autoplay; encrypted-media"
            />
          </div>
        )}

        {/* Multi-layered cinematic gradient overlays (dark for contrast, no muddy white fog) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/60 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 pointer-events-none" />
      </div>

      {/* Atmospheric Controls Top Right */}
      <div className="absolute top-24 sm:top-28 right-6 sm:right-12 z-20 flex items-center gap-3">
        <button
          onClick={() =>
            onOpenVideoModal(
              siteConfig.hero.youtubeId || siteConfig.videos.featuredVideo.youtubeId,
              t.videosData.featured.title || siteConfig.videos.featuredVideo.title
            )
          }
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 hover:bg-white text-[#111927] hover:text-brand-red text-xs tracking-wider uppercase font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
        >
          <Play className="w-3.5 h-3.5 text-brand-red fill-brand-red" />
          <span>{t.hero.playReel}</span>
        </button>
      </div>

      {/* Hero Central Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center pt-16 sm:pt-12">
        {/* Master Brand Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-earth-700/50 bg-[#111927]/60 backdrop-blur-sm mb-6 animate-fade-in shadow-lg">
          <Sparkles className="w-3 h-3 text-brand-gold" />
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-earth-300">
            {t.hero.eyebrow}
          </span>
          <span className="text-[10px] text-earth-500 font-mono">|</span>
          <span className="text-[11px] sm:text-xs tracking-[0.2em] uppercase text-brand-gold font-medium">
            {t.brand.locationShort}
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-white leading-[1.08] max-w-4xl">
          {t.hero.headlinePart1} <br className="hidden sm:inline" />
          <span className="font-light italic text-earth-200">{t.hero.headlinePart2}</span>
        </h1>

        {/* Supporting Copy */}
        <p className="mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg md:text-xl font-light text-earth-200/90 leading-relaxed tracking-wide">
          {t.hero.supportingCopy}
        </p>

        {/* Dual CTAs with Master Brand Red */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          <button
            onClick={scrollToStory}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-[#111927] hover:bg-earth-100 text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02] flex items-center justify-center gap-2 group"
          >
            <span>{t.hero.primaryCta}</span>
            <ArrowDown className="w-4 h-4 text-[#111927] transition-transform group-hover:translate-y-1" />
          </button>

          <button
            onClick={onOpenVisitModal}
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-earth-400/40 bg-[#111927]/60 hover:bg-brand-red hover:border-brand-red backdrop-blur-md text-earth-100 hover:text-white text-xs sm:text-sm font-medium tracking-[0.16em] uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
          >
            <Compass className="w-4 h-4 text-brand-gold group-hover:text-white" />
            <span>{t.hero.secondaryCta}</span>
          </button>
        </div>
      </div>

      {/* Atmospheric Scroll Action at Bottom */}
      <div className="absolute bottom-6 sm:bottom-8 left-0 right-0 z-10 flex flex-col items-center justify-center">
        <button
          onClick={scrollToStory}
          className="group flex flex-col items-center text-white/80 hover:text-white transition-colors focus:outline-none"
          aria-label={t.hero.scrollPrompt}
        >
          <span className="text-[10px] tracking-[0.3em] uppercase mb-2 font-medium drop-shadow-md">
            {t.hero.scrollPrompt}
          </span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-white/80 via-brand-gold/60 to-transparent group-hover:h-10 transition-all duration-300" />
        </button>
      </div>
    </section>
  );
};
