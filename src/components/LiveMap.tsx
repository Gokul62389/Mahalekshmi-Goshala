import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { ExternalLink, Navigation, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig } from '../data/siteConfig';

interface LiveMapProps {
  className?: string;
}

export const LiveMap: React.FC<LiveMapProps> = ({ className = '' }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const { language, t } = useLanguage();

  const coordinates: [number, number] = [9.425375, 76.623375]; // Mundiappally Farm Location
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${siteConfig.location.mapQuery}`;

  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Avoid duplicate initialization
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
    }

    // Initialize Leaflet map
    const map = L.map(mapContainerRef.current, {
      center: coordinates,
      zoom: 15,
      zoomControl: false,
      scrollWheelZoom: false, // Prevents unintended page-scroll capture
    });

    mapInstanceRef.current = map;

    // Add custom zoom control in bottom-right
    L.control
      .zoom({
        position: 'bottomright',
      })
      .addTo(map);

    // OpenStreetMap official tiles (Free, public, no API key required, no watermarks)
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map);

    // Custom Brand Red Pulse Marker
    const customIcon = L.divIcon({
      className: 'custom-live-marker',
      html: `
        <div style="position: relative; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px;">
          <div style="position: absolute; width: 40px; height: 40px; border-radius: 50%; background-color: rgba(186, 12, 47, 0.25); transform-origin: center;"></div>
          <div style="position: relative; width: 26px; height: 26px; border-radius: 50%; background-color: #BA0C2F; border: 3px solid #ffffff; box-shadow: 0 4px 14px rgba(186,12,47,0.45); display: flex; align-items: center; justify-content: center;">
            <div style="width: 8px; height: 8px; border-radius: 50%; background-color: #ffffff;"></div>
          </div>
        </div>
      `,
      iconSize: [44, 44],
      iconAnchor: [22, 22],
      popupAnchor: [0, -22],
    });

    const popupHtml = `
      <div style="font-family: inherit; padding: 6px; max-width: 220px; text-align: left;">
        <span style="font-size: 10px; font-weight: 700; color: #BA0C2F; text-transform: uppercase; letter-spacing: 0.1em; display: block; margin-bottom: 2px;">
          ${t.brand.parentTag}
        </span>
        <h4 style="font-size: 14px; font-weight: 700; color: #111927; margin: 0 0 4px 0; line-height: 1.2;">
          ${t.brand.name}
        </h4>
        <p style="font-size: 12px; color: #4B5563; margin: 0 0 10px 0; line-height: 1.3;">
          ${t.visit.villageTown}
        </p>
        <a href="${googleMapsUrl}" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 4px; font-size: 11px; font-weight: 600; color: #BA0C2F; text-decoration: none; text-transform: uppercase; letter-spacing: 0.05em;">
          <span>${t.visit.openInMaps} &rarr;</span>
        </a>
      </div>
    `;

    const marker = L.marker(coordinates, { icon: customIcon }).addTo(map);
    marker.bindPopup(popupHtml);

    // Cleanup on unmount
    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, [language, t.brand.name, t.brand.parentTag, t.visit.villageTown, t.visit.openInMaps]);

  return (
    <div className={`relative rounded-3xl overflow-hidden border border-gray-200 shadow-md bg-white ${className}`}>
      {/* Map Interactive Canvas */}
      <div ref={mapContainerRef} className="w-full h-full min-h-[300px] z-0" tabIndex={0} />

      {/* Floating Header Banner */}
      <div className="absolute top-4 left-4 z-[400] flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-gray-200/90 shadow-md pointer-events-auto">
        <div className="p-1.5 rounded-lg bg-red-50 text-brand-red">
          <MapPin className="w-4 h-4" />
        </div>
        <div>
          <p className="text-xs font-bold text-[#111927] leading-none">{t.brand.name}</p>
          <p className="text-[11px] text-gray-500 font-normal mt-0.5">{t.visit.villageTown}</p>
        </div>
      </div>

      {/* Floating Action Button: Open in Google Maps */}
      <div className="absolute bottom-4 left-4 z-[400] pointer-events-auto">
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 hover:bg-brand-red text-gray-800 hover:text-white border border-gray-200 hover:border-brand-red text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg group"
        >
          <Navigation className="w-3.5 h-3.5 text-brand-red group-hover:text-white transition-colors" />
          <span>{t.visit.openInMaps}</span>
          <ExternalLink className="w-3 h-3 opacity-70 group-hover:opacity-100" />
        </a>
      </div>
    </div>
  );
};
