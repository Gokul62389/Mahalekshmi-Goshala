import React from 'react';
import { MapPin, Navigation, Calendar, Phone, Compass, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig } from '../data/siteConfig';
import { LiveMap } from '../components/LiveMap';

interface VisitSectionProps {
  onOpenVisitModal: () => void;
}

export const VisitSection: React.FC<VisitSectionProps> = ({ onOpenVisitModal }) => {
  const { t } = useLanguage();
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${siteConfig.location.mapQuery}`;

  return (
    <section id="visit" className="relative py-28 sm:py-36 bg-[#F8F9FA] text-[#111927] overflow-hidden border-t border-gray-200">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 -left-32 w-80 h-80 bg-red-50/70 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Invitation Copy & Conversion CTAs */}
          <div className="lg:col-span-5 flex flex-col justify-center sticky top-28">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-brand-red" />
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-brand-red">
                {t.visit.eyebrow}
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111927] leading-tight">
              {t.visit.headlinePart1} <br />
              <span className="font-light italic text-gray-600">{t.visit.headlinePart2}</span>
            </h2>

            <p className="mt-6 text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
              {t.visit.supportingCopy}
            </p>

            <div className="mt-8 p-5 rounded-2xl bg-white border border-gray-200 shadow-sm">
              <div className="flex items-start gap-3">
                <Compass className="w-4 h-4 text-brand-red mt-1 shrink-0" />
                <p className="text-xs sm:text-sm text-gray-700 font-normal leading-relaxed">
                  {t.visit.protocolNotice}
                </p>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-red hover:bg-brand-crimson text-white text-xs uppercase tracking-widest font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-xl"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>{t.visit.getDirections}</span>
                <ExternalLink className="w-3 h-3 opacity-80" />
              </a>

              <button
                onClick={onOpenVisitModal}
                className="w-full sm:w-auto px-8 py-4 rounded-full border border-gray-300 bg-white hover:border-brand-red hover:text-brand-red text-gray-800 text-xs uppercase tracking-widest font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
              >
                <Calendar className="w-3.5 h-3.5 text-brand-red" />
                <span>{t.visit.scheduleWalkthrough}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Location & Estate Card with Live Map in Pure White */}
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-3xl bg-white border border-gray-200 p-6 sm:p-8 md:p-10 shadow-xl space-y-6 relative overflow-hidden">
              <div>
                <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-brand-red">
                  {t.visit.locationCardTitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#111927] mt-1">
                  {t.brand.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-700 font-normal mt-1">
                  {t.visit.villageTown}
                </p>
                <p className="text-xs text-gray-500 font-normal">
                  {t.visit.districtStateCountry}
                </p>
              </div>

              {/* Geographical Context & Accessibility */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-red-50 border border-red-200 text-brand-red shrink-0 shadow-sm">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#111927]">{t.visit.travancoreTitle}</h4>
                    <p className="text-xs text-gray-600 font-normal mt-0.5 leading-relaxed">
                      {t.visit.travancoreDesc}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-red-50 border border-red-200 text-brand-red shrink-0 shadow-sm">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#111927]">{t.visit.inquiryTitle}</h4>
                    <p className="text-xs text-gray-700 font-mono mt-0.5 font-medium">
                      {siteConfig.contact.phone}
                    </p>
                    <p className="text-xs text-gray-500 font-mono mt-0.5">
                      {siteConfig.contact.email}
                    </p>
                  </div>
                </div>
              </div>

              {/* Interactive Live Map */}
              <div className="pt-2">
                <LiveMap className="h-80 sm:h-96 w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
