import React, { useState } from 'react';
import { X, MapPin, Send, CheckCircle2, Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface VisitInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VisitInquiryModal: React.FC<VisitInquiryModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [guests, setGuests] = useState('1-2');
  const [interest, setInterest] = useState('Heritage Breeds Observation');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    setPreferredDate('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="visit-modal-title"
    >
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-xl rounded-3xl bg-white border border-gray-200 shadow-2xl p-6 sm:p-10 text-[#111927] flex flex-col no-scrollbar max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors focus:outline-none"
          aria-label="Close Inquiry Dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-6 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#111927]">{t.visitModal.receivedTitle}</h3>
              <p className="mt-2 text-sm text-gray-600 font-normal max-w-sm mx-auto leading-relaxed">
                {t.visitModal.receivedDesc}
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-[#F8F9FA] border border-gray-200 text-xs text-gray-700 text-left space-y-2 shadow-sm">
              <p className="font-bold text-[#111927] flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-brand-red" />
                {t.visitModal.etiquetteTitle}
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-gray-600">
                {t.visitModal.etiquetteRules.map((rule, idx) => (
                  <li key={idx}>{rule}</li>
                ))}
              </ul>
            </div>
            <button
              onClick={handleReset}
              className="px-8 py-3 rounded-full bg-brand-red text-white text-xs font-semibold uppercase tracking-wider hover:bg-brand-crimson transition-colors shadow-lg"
            >
              {t.visitModal.done}
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-brand-red" />
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-brand-red">
                  {t.visitModal.priorArrangementBadge}
                </span>
              </div>
              <h3 id="visit-modal-title" className="text-2xl sm:text-3xl font-bold text-[#111927] tracking-tight">
                {t.visitModal.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-600 font-normal leading-relaxed">
                {t.visitModal.desc}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono font-semibold tracking-wider text-gray-700 uppercase mb-1.5">
                  {t.visitModal.fullName}
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Anand Varma"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-300 text-[#111927] placeholder-gray-400 focus:outline-none focus:border-brand-red focus:bg-white text-sm transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-semibold tracking-wider text-gray-700 uppercase mb-1.5">
                  {t.visitModal.phone}
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98470 00000"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-300 text-[#111927] placeholder-gray-400 focus:outline-none focus:border-brand-red focus:bg-white text-sm transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-semibold tracking-wider text-gray-700 uppercase mb-1.5">
                    {t.visitModal.date}
                  </label>
                  <input
                    type="date"
                    required
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-300 text-[#111927] placeholder-gray-400 focus:outline-none focus:border-brand-red focus:bg-white text-sm transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold tracking-wider text-gray-700 uppercase mb-1.5">
                    {t.visitModal.partySize}
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-300 text-[#111927] focus:outline-none focus:border-brand-red focus:bg-white text-sm transition-colors"
                  >
                    {t.visitModal.guestOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-semibold tracking-wider text-gray-700 uppercase mb-1.5">
                  {t.visitModal.interest}
                </label>
                <select
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-300 text-[#111927] focus:outline-none focus:border-brand-red focus:bg-white text-sm transition-colors"
                >
                  {t.visitModal.interestOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-brand-red hover:bg-brand-crimson text-white font-semibold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{t.visitModal.submit}</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-gray-500 text-center pt-2">
                <MapPin className="w-3 h-3 text-brand-red" />
                <span>{t.brand.locationShort}</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
