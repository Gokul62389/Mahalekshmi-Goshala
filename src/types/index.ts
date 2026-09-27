export interface BreedItem {
  id: string;
  number: string;
  name: string;
  nativeName?: string;
  origin: string;
  shortDescription: string;
  fullStory: string;
  characteristics: string[];
  temperament: string;
  heritageSignificance: string;
  image: string;
  alt: string;
}

export interface FarmRhythm {
  id: string;
  step: string;
  timeWindow: string;
  title: string;
  shortDesc: string;
  editorialNote: string;
  image: string;
  videoId?: string;
}

export interface CareAspect {
  id: string;
  title: string;
  tagline: string;
  description: string;
  principle: string;
  image: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'Cattle' | 'Landscape' | 'Daily Care' | 'Architecture';
  caption: string;
  image: string;
  aspect: 'portrait' | 'landscape' | 'square';
}

export interface VideoItem {
  id: string;
  title: string;
  duration: string;
  description: string;
  youtubeId: string;
  thumbnail: string;
}

export interface SiteConfig {
  brand: {
    name: string;
    subline: string;
    parentBrandName: string;
    parentBrandUrl: string;
    parentBrandTag: string;
    establishedYear?: string;
  };
  location: {
    estate: string;
    village: string;
    town: string;
    district: string;
    state: string;
    country: string;
    fullAddress: string;
    mapQuery: string;
  };
  contact: {
    phone: string;
    email: string;
    inquiryNotice: string;
  };
  socialLinks: {
    youtube: string;
    parentWebsite: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    supportingCopy: string;
    primaryCta: string;
    secondaryCta: string;
    youtubeId?: string;
    startTime?: number;
    videoPlaceholderUrl: string;
    posterImage: string;
  };
  story: {
    eyebrow: string;
    headline: string;
    leadParagraph: string;
    subParagraph: string;
    quote: string;
    quoteAuthor: string;
    image: string;
  };
  farmEnvironment: {
    eyebrow: string;
    headline: string;
    lead: string;
    pillars: {
      stat: string;
      label: string;
      detail: string;
    }[];
    imagery: {
      landscape: string;
      sheds: string;
    };
  };
  breeds: BreedItem[];
  rhythm: FarmRhythm[];
  care: CareAspect[];
  traditionModern: {
    headline: string;
    subheadline: string;
    traditionTitle: string;
    traditionPoints: { title: string; detail: string }[];
    modernTitle: string;
    modernPoints: { title: string; detail: string }[];
  };
  gallery: GalleryPhoto[];
  videos: {
    channelUrl: string;
    channelHandle: string;
    featuredVideo: VideoItem;
    supportingVideos: VideoItem[];
  };
  visitInformation: {
    headline: string;
    supportingCopy: string;
    visitingProtocol: string;
    locationNote: string;
  };
}
