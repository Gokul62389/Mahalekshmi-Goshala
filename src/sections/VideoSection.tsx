import React, { useState } from 'react';
import { Play, Clock, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig } from '../data/siteConfig';

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

interface VideoSectionProps {
  onOpenVideoModal: (videoId: string, title: string) => void;
}

export const VideoSection: React.FC<VideoSectionProps> = ({ onOpenVideoModal }) => {
  const { t } = useLanguage();
  const [activeRhythmIndex, setActiveRhythmIndex] = useState(0);
  const activeRhythm = siteConfig.rhythm[activeRhythmIndex];
  const activeRhythmText = t.rhythmItems[activeRhythmIndex] || {
    title: activeRhythm.title,
    shortDesc: activeRhythm.shortDesc,
    editorialNote: activeRhythm.editorialNote,
    timeWindow: activeRhythm.timeWindow,
  };

  return (
    <section id="life" className="relative py-28 sm:py-36 bg-[#F8F9FA] text-[#111927] overflow-hidden border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-brand-red" />
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-brand-red">
                {t.life.eyebrow}
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111927] leading-tight">
              {t.life.headlinePart1} <br />
              <span className="font-light italic text-gray-600">{t.life.headlinePart2}</span>
            </h2>
          </div>

          <div className="max-w-md space-y-4">
            <p className="text-gray-600 font-normal text-base leading-relaxed">
              {t.life.lead}
            </p>
            <a
              href={siteConfig.videos.channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-brand-red hover:underline transition-all"
            >
              <YoutubeIcon className="w-4 h-4 text-brand-red" />
              <span>{t.life.watchOnYoutube} {siteConfig.videos.channelHandle}</span>
            </a>
          </div>
        </div>

        {/* Part 1: Interactive Rhythm of the Day (Timeline / Step Selector) */}
        <div className="mb-24">
          {/* Horizontal Step Tabs in Clean Light Mode */}
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar pb-4 mb-8">
            {siteConfig.rhythm.map((item, idx) => {
              const itemText = t.rhythmItems[idx] || item;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveRhythmIndex(idx)}
                  className={`flex-shrink-0 px-4 sm:px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 flex items-center gap-2.5 ${
                    activeRhythmIndex === idx
                      ? 'bg-brand-red text-white shadow-md scale-105'
                      : 'bg-white text-gray-700 hover:text-black border border-gray-200 shadow-sm'
                  }`}
                >
                  <span className="font-mono text-[10px] opacity-80">0{idx + 1}</span>
                  <span>{itemText.tabTitle || itemText.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Rhythm Interactive Feature Card in White */}
          <div className="rounded-3xl bg-white border border-gray-200 overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-xl">
            {/* Visual Media */}
            <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-[460px] image-zoom-container bg-gray-100">
              <img
                src={activeRhythm.image}
                alt={activeRhythmText.title}
                className="w-full h-full object-cover object-center filter contrast-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />

              <div className="absolute top-6 left-6 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-gray-200 text-xs font-semibold text-[#111927] flex items-center gap-2 shadow-md">
                <Clock className="w-3.5 h-3.5 text-brand-red" />
                <span className="font-mono">{activeRhythmText.timeWindow}</span>
              </div>
            </div>

            {/* Editorial Story for this stage */}
            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-[11px] font-mono font-bold tracking-widest text-brand-red uppercase">
                  {t.life.rhythmOfPrefix} {activeRhythm.step} {t.life.rhythmStepTotal}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#111927] mt-2 mb-4 tracking-tight">
                  {activeRhythmText.title}
                </h3>
                <p className="text-base text-gray-700 font-normal leading-relaxed">
                  {activeRhythmText.shortDesc}
                </p>
                <p className="mt-4 text-sm text-gray-600 font-normal italic leading-relaxed border-l-2 border-brand-red pl-4 bg-[#FAF8F5] p-3 rounded-r-xl">
                  "{activeRhythmText.editorialNote}"
                </p>
              </div>

              <div className="pt-6 border-t border-gray-200 flex items-center justify-between">
                <span className="text-xs text-gray-500 uppercase tracking-widest font-mono font-semibold">
                  {t.life.cycleOfNaturalDay}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      setActiveRhythmIndex((prev) => (prev > 0 ? prev - 1 : siteConfig.rhythm.length - 1))
                    }
                    className="p-2.5 rounded-full border border-gray-300 bg-white hover:bg-brand-red hover:border-brand-red hover:text-white text-gray-700 transition-colors shadow-sm"
                    aria-label="Previous rhythm"
                  >
                    ←
                  </button>
                  <button
                    onClick={() =>
                      setActiveRhythmIndex((prev) => (prev < siteConfig.rhythm.length - 1 ? prev + 1 : 0))
                    }
                    className="p-2.5 rounded-full border border-gray-300 bg-white hover:bg-brand-red hover:border-brand-red hover:text-white text-gray-700 transition-colors shadow-sm"
                    aria-label="Next rhythm"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Part 2: Editorial Video Cinema Section */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-[11px] font-mono font-bold tracking-widest text-brand-red uppercase">
                {siteConfig.videos.channelHandle}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#111927] mt-1">
                {t.life.archiveTitle}
              </h3>
            </div>
            <a
              href={siteConfig.videos.channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 text-xs text-brand-red font-bold hover:underline uppercase tracking-wider transition-colors"
            >
              <span>{t.life.viewAllVideos}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Featured Video (Large) */}
            <div className="lg:col-span-7 group">
              <div
                onClick={() =>
                  onOpenVideoModal(
                    siteConfig.videos.featuredVideo.youtubeId,
                    t.videosData.featured.title || siteConfig.videos.featuredVideo.title
                  )
                }
                className="relative h-80 sm:h-96 rounded-3xl overflow-hidden cursor-pointer border border-gray-200 shadow-xl bg-gray-100 image-zoom-container"
              >
                <img
                  src={siteConfig.videos.featuredVideo.thumbnail}
                  alt={siteConfig.videos.featuredVideo.title}
                  className="w-full h-full object-cover object-center filter contrast-[1.02]"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />

                {/* Big Master Brand Red Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-brand-red text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500 ease-cinematic">
                    <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-white ml-1" />
                  </div>
                </div>

                {/* Bottom Information */}
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div>
                    <span className="px-3 py-1 rounded-full bg-brand-red text-white text-[10px] font-mono font-bold tracking-widest uppercase shadow-md">
                      {t.life.featuredFilmBadge}
                    </span>
                    <h4 className="text-xl sm:text-2xl font-bold text-white mt-2 drop-shadow">
                      {t.videosData.featured.title}
                    </h4>
                  </div>
                  <span className="text-xs font-mono font-semibold text-white px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-sm border border-white/20">
                    {siteConfig.videos.featuredVideo.duration}
                  </span>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-600 font-normal leading-relaxed">
                {t.videosData.featured.description}
              </p>
            </div>

            {/* Supporting Video Cards in White */}
            <div className="lg:col-span-5 space-y-4">
              {siteConfig.videos.supportingVideos.map((video) => {
                const vidText = t.videosData.supporting[video.id] || video;
                return (
                  <div
                    key={video.id}
                    onClick={() => onOpenVideoModal(video.youtubeId, vidText.title)}
                    className="group flex gap-4 p-4 rounded-2xl bg-white border border-gray-200/90 hover:border-brand-red transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
                  >
                    <div className="relative w-32 h-24 sm:w-40 sm:h-28 rounded-xl overflow-hidden bg-gray-100 shrink-0 border border-gray-200">
                      <img
                        src={video.thumbnail}
                        alt={vidText.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-white text-[#111927] flex items-center justify-center group-hover:bg-brand-red group-hover:text-white transition-colors shadow-md">
                          <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                        </div>
                      </div>
                      <span className="absolute bottom-1.5 right-1.5 text-[10px] font-mono font-bold bg-black/80 text-white px-1.5 py-0.5 rounded">
                        {video.duration}
                      </span>
                    </div>

                    <div className="flex flex-col justify-between py-1">
                      <div>
                        <h4 className="text-sm font-bold text-[#111927] group-hover:text-brand-red transition-colors line-clamp-2">
                          {vidText.title}
                        </h4>
                        <p className="mt-1 text-xs text-gray-500 font-normal line-clamp-2">
                          {vidText.description}
                        </p>
                      </div>
                      <span className="text-[11px] text-brand-red font-bold uppercase tracking-wider flex items-center gap-1">
                        {t.life.playVideo} <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
