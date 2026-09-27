import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Compass, MapPin, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig } from '../data/siteConfig';

interface NavbarProps {
  onOpenVisitModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenVisitModal }) => {
  const { toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Exact primary links as specified in SECTION 5 with translations
  const primaryLinks = [
    { id: 'story', label: t.nav.story, href: '#story' },
    { id: 'farm', label: t.nav.farm, href: '#farm' },
    { id: 'breeds', label: t.nav.breeds, href: '#breeds' },
    { id: 'life', label: t.nav.life, href: '#life' },
    { id: 'visit', label: t.nav.visit, href: '#visit' },
  ];

  // Secondary deep-dive links with translations
  const secondaryLinks = [
    { label: t.nav.carePhilosophy, href: '#care' },
    { label: t.nav.gallery, href: '#gallery' },
  ];

  // Intelligent Scroll and Active Section Detection (ScrollSpy)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['visit', 'gallery', 'care', 'life', 'breeds', 'farm', 'story'];
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el && scrollPosition >= el.offsetTop) {
          setActiveSection(sectionId);
          return;
        }
      }
      setActiveSection('hero');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [mobileMenuOpen]);

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-cinematic ${
          isScrolled
            ? 'py-3 sm:py-3.5 bg-white/95 backdrop-blur-xl border-b border-gray-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.06)]'
            : 'py-5 sm:py-7 bg-gradient-to-b from-black/50 via-black/20 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 flex items-center justify-between">
          {/* Master Brand Identity Lockup */}
          <a
            href="#"
            className="group flex items-center gap-3.5 focus:outline-none"
            aria-label="Mahalekshmi Goshala Home"
          >
            {/* Master Brand Crest Motif */}
            <div className={`relative w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-500 ${
              isScrolled
                ? 'border-brand-red/30 bg-red-50/50 group-hover:border-brand-red'
                : 'border-white/40 bg-black/30 group-hover:border-white'
            }`}>
              <svg className={`w-4 h-4 transition-colors ${isScrolled ? 'text-brand-red' : 'text-white'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M4 8C8 8 10 11 12 14C14 11 16 8 20 8" strokeLinecap="round" />
                <path d="M7 14C7 18 9 21 12 21C15 21 17 18 17 14" strokeLinecap="round" />
                <circle cx="12" cy="7" r="1.5" fill="currentColor" />
              </svg>
            </div>

            <div className="flex flex-col text-left">
              <span className={`text-[9px] sm:text-[10px] tracking-[0.28em] uppercase font-semibold transition-colors ${
                isScrolled ? 'text-brand-red' : 'text-brand-gold'
              }`}>
                {t.brand.parentTag}
              </span>
              <span className={`text-sm sm:text-base font-bold tracking-[0.16em] uppercase transition-colors ${
                isScrolled ? 'text-[#111927] group-hover:text-brand-red' : 'text-white'
              }`}>
                {t.brand.name}
              </span>
            </div>
          </a>

          {/* Desktop Center Navigation — Floating Capsule Dock */}
          <nav
            aria-label="Primary Navigation"
            className={`hidden md:flex items-center gap-1 p-1.5 rounded-full backdrop-blur-md transition-all duration-500 ${
              isScrolled
                ? 'bg-gray-100/90 border border-gray-200/90 shadow-inner'
                : 'bg-black/35 border border-white/20'
            }`}
          >
            {primaryLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`relative px-4 py-2 rounded-full text-xs tracking-[0.14em] uppercase font-medium transition-all duration-300 ${
                    isActive
                      ? isScrolled
                        ? 'bg-white text-[#111927] shadow-sm font-semibold border border-gray-200/60'
                        : 'bg-white text-[#111927] shadow-md font-semibold'
                      : isScrolled
                      ? 'text-gray-600 hover:text-[#111927] hover:bg-white/60'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-red" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Language Switcher + "Visit Us" Master CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switcher Pill */}
            <button
              onClick={toggleLanguage}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full border text-xs tracking-wider uppercase font-semibold transition-all duration-300 shadow-sm ${
                isScrolled
                  ? 'border-gray-300 bg-white text-gray-800 hover:border-brand-red hover:text-brand-red'
                  : 'border-white/30 bg-black/30 text-white hover:bg-black/50'
              }`}
              title={t.nav.switchLangTitle}
              aria-label={t.nav.switchLangTitle}
            >
              <Globe className="w-3.5 h-3.5 text-brand-red" />
              <span className="text-[11px] font-medium tracking-wider">
                {t.nav.switchLang}
              </span>
            </button>

            {/* Master Brand Red Visit Us CTA */}
            <button
              onClick={onOpenVisitModal}
              className="group relative hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-red hover:bg-brand-crimson text-white text-xs tracking-[0.18em] uppercase font-semibold transition-all duration-500 ease-cinematic shadow-md hover:shadow-xl overflow-hidden"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span>{t.nav.visitUs}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white/80 group-hover:text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2.5 rounded-full border transition-colors focus:outline-none md:hidden ${
                isScrolled
                  ? 'bg-gray-100 border-gray-300 text-gray-800 hover:bg-gray-200'
                  : 'bg-black/40 border-white/30 text-white hover:bg-black/60'
              }`}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Tailored Fullscreen Mobile Menu Overlay in White */}
      <div
        className={`fixed inset-0 z-40 bg-white/98 backdrop-blur-2xl md:hidden flex flex-col justify-between p-6 sm:p-8 pt-24 text-[#111927] transition-all duration-500 ease-cinematic ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-6'
        }`}
      >
        <div className="flex flex-col gap-6 overflow-y-auto no-scrollbar">
          {/* Language Switcher in Mobile Drawer */}
          <div className="flex items-center justify-between pb-3 border-b border-gray-200">
            <span className="text-xs text-gray-500 font-mono">
              {t.nav.langDrawerLabel}
            </span>
            <button
              onClick={toggleLanguage}
              className="px-4 py-1.5 rounded-full bg-gray-100 border border-gray-300 text-xs font-semibold text-brand-red flex items-center gap-1.5 shadow-sm"
              title={t.nav.switchLangTitle}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{t.nav.switchLang}</span>
            </button>
          </div>

          {/* Section 5 Primary Links */}
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-brand-red font-mono mb-4 font-semibold">
              {t.nav.navigation}
            </p>
            <div className="flex flex-col gap-2">
              {primaryLinks.map((link, idx) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`text-xl sm:text-2xl font-normal py-2.5 px-3 rounded-xl transition-all flex items-center justify-between border-b border-gray-100 ${
                    activeSection === link.id
                      ? 'bg-red-50/80 text-brand-red font-semibold'
                      : 'text-gray-800 hover:text-brand-red'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-gray-400 tracking-wider">0{idx + 1}</span>
                    <span>{link.label}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-400" />
                </a>
              ))}
            </div>
          </div>

          {/* Secondary In-depth Links */}
          <div className="pt-2">
            <p className="text-[10px] tracking-[0.3em] uppercase text-gray-500 font-mono mb-3">
              {t.nav.deepDives}
            </p>
            <div className="flex flex-wrap gap-2">
              {secondaryLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="px-3.5 py-1.5 rounded-full bg-gray-100 border border-gray-200 text-xs text-gray-700 hover:text-brand-red hover:border-brand-red transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Menu Footer Information */}
        <div className="pt-6 border-t border-gray-200 flex flex-col gap-4">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenVisitModal();
            }}
            className="w-full py-4 rounded-xl bg-brand-red hover:bg-brand-crimson text-white text-xs tracking-[0.2em] uppercase font-semibold text-center transition-colors flex items-center justify-center gap-2 shadow-lg"
          >
            <Compass className="w-4 h-4" />
            <span>{t.nav.planVisit}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <div className="flex items-center justify-between text-xs text-gray-500 pt-1">
            <div className="flex items-center gap-1.5 text-gray-700">
              <MapPin className="w-3.5 h-3.5 text-brand-red" />
              <span>{t.brand.locationShort}</span>
            </div>
            <a
              href={siteConfig.brand.parentBrandUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-red hover:underline underline-offset-4 font-medium"
            >
              {t.brand.parentBrand}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
