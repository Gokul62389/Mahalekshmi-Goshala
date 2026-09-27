import React, { useState } from 'react';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { StorySection } from './sections/StorySection';
import { FarmSection } from './sections/FarmSection';
import { BreedGallery } from './sections/BreedGallery';
import { VideoSection } from './sections/VideoSection';
import { CareSection } from './sections/CareSection';
import { GallerySection } from './sections/GallerySection';
import { VisitSection } from './sections/VisitSection';
import { FinalCTASection } from './sections/FinalCTASection';
import { Footer } from './components/Footer';
import { BreedModal } from './components/BreedModal';
import { VideoModal } from './components/VideoModal';
import { VisitInquiryModal } from './components/VisitInquiryModal';
import type { BreedItem } from './types';

const MainContent: React.FC = () => {
  // Activate silky Lenis smooth scrolling with accessibility check
  useSmoothScroll();

  // Interactive Modal States
  const [selectedBreed, setSelectedBreed] = useState<BreedItem | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<{ id: string; title: string } | null>(null);
  const [isVisitModalOpen, setIsVisitModalOpen] = useState(false);

  const handleOpenVideoModal = (videoId: string, title: string) => {
    setSelectedVideo({ id: videoId, title });
  };

  const handleOpenVisitModal = () => {
    setIsVisitModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#111927] flex flex-col selection:bg-brand-red selection:text-white">
      {/* Intelligent Minimal Floating Navbar */}
      <Navbar onOpenVisitModal={handleOpenVisitModal} />

      {/* Main Single-page Cinematic Journey */}
      <main className="flex-1 w-full">
        {/* Section 01: Hero */}
        <Hero
          onOpenVisitModal={handleOpenVisitModal}
          onOpenVideoModal={handleOpenVideoModal}
        />

        {/* Section 02: The Story */}
        <StorySection />

        {/* Section 03: The Farm */}
        <FarmSection />

        {/* Section 04: Our Breeds */}
        <BreedGallery onSelectBreed={(breed) => setSelectedBreed(breed)} />

        {/* Section 05: Life at the Goshala (Farm Rhythm & Cinema) */}
        <VideoSection onOpenVideoModal={handleOpenVideoModal} />

        {/* Section 06: Care ("Every animal has a story") */}
        <CareSection />

        {/* Section 07: Gallery */}
        <GallerySection />

        {/* Section 09: Visit The Goshala */}
        <VisitSection onOpenVisitModal={handleOpenVisitModal} />

        {/* Section 10: Final Cinematic CTA */}
        <FinalCTASection onOpenVisitModal={handleOpenVisitModal} />
      </main>

      {/* Section 11: Minimal Footer */}
      <Footer />

      {/* Modals & Dialogs */}
      <BreedModal
        breed={selectedBreed}
        onClose={() => setSelectedBreed(null)}
      />

      <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />

      <VisitInquiryModal
        isOpen={isVisitModalOpen}
        onClose={() => setIsVisitModalOpen(false)}
      />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
};

export default App;
