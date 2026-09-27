import React, { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig } from '../data/siteConfig';

interface VideoModalProps {
  video: { id: string; title: string } | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ video, onClose }) => {
  const { t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (video) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [video, onClose]);

  if (!video) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-2xl animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
    >
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-5xl rounded-3xl overflow-hidden bg-[#111927] border border-gray-700 shadow-2xl flex flex-col">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-[#0C1017]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-red animate-pulse" />
            <h3 id="video-modal-title" className="text-sm font-medium text-white tracking-wide truncate max-w-md">
              {video.title}
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={siteConfig.videos.channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-300 hover:text-brand-red flex items-center gap-1.5 transition-colors font-medium"
            >
              <span>{t.videoModal.visitChannel}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors"
              aria-label="Close video player"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 16:9 Video Player */}
        <div className="relative aspect-video w-full bg-black">
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1${
              video.id === 'tf10eWe0gFU' || video.id === siteConfig.hero.youtubeId ? '&start=15' : ''
            }`}
            title={video.title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* Modal Footer Note */}
        <div className="p-4 px-6 bg-[#0C1017] text-xs text-gray-400 flex items-center justify-between">
          <span>{t.videoModal.sanctuaryCredit}</span>
          <span className="font-mono text-gray-500">{t.videoModal.officialFeed}</span>
        </div>
      </div>
    </div>
  );
};
