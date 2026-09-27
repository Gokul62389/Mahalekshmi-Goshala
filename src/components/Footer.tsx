import React from 'react';
import { ArrowUp, ExternalLink, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig } from '../data/siteConfig';

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: t.nav.story, href: '#story' },
    { label: t.nav.farm, href: '#farm' },
    { label: t.nav.breeds, href: '#breeds' },
    { label: t.nav.life, href: '#life' },
    { label: t.nav.carePhilosophy, href: '#care' },
    { label: t.nav.gallery, href: '#gallery' },
    { label: t.nav.visit, href: '#visit' },
  ];

  return (
    <footer className="bg-white text-gray-700 border-t border-gray-200 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-gray-200">
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-[10px] tracking-[0.25em] uppercase text-brand-red font-bold">
                {t.brand.parentTag}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-[0.16em] uppercase text-[#111927] mt-1">
                {t.brand.name}
              </h3>
              <p className="mt-3 text-sm text-gray-600 font-normal max-w-sm leading-relaxed">
                {t.brand.subline}
              </p>
            </div>

            <div className="text-xs text-gray-500 space-y-1 font-normal">
              <p>{t.footer.addressLine1}</p>
              <p>{t.footer.addressLine2}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#111927] font-bold">
              {t.footer.sanctuaryExploration}
            </span>
            <div className="grid grid-cols-2 gap-3 mt-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs uppercase tracking-wider text-gray-600 hover:text-brand-red transition-colors py-1 font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Heritage Parent Brand & Social */}
          <div className="md:col-span-3 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#111927] font-bold">
                {t.footer.parentBrandTitle}
              </span>
              <div className="mt-3 p-4 rounded-2xl bg-gray-50 border border-gray-200 shadow-sm">
                <p className="text-xs text-gray-500">{t.footer.parentBrandDesc}</p>
                <a
                  href={siteConfig.socialLinks.parentWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-brand-red hover:text-brand-crimson mt-1 inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>{t.brand.parentBrand}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#111927] font-bold">
                {t.footer.documentaryChannel}
              </span>
              <div className="mt-2">
                <a
                  href={siteConfig.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-gray-700 hover:text-brand-red transition-colors"
                >
                  <YoutubeIcon className="w-4 h-4 text-brand-red" />
                  <span>{siteConfig.videos.channelHandle}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-normal">
          <p>© {new Date().getFullYear()} {t.footer.rightsReserved}</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 font-medium text-gray-700">
              <Heart className="w-3.5 h-3.5 text-brand-red fill-brand-red" />
              <span>{t.footer.rootedWithLove}</span>
            </span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="hover:text-brand-red transition-colors flex items-center gap-1 text-gray-600 font-semibold"
            >
              <span>{t.footer.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
