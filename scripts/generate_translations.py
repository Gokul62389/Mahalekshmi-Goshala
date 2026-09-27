# -*- coding: utf-8 -*-
"""Generate high-quality bilingual translation dictionary for Mahalekshmi Goshala."""

translations_content = '''export type Language = 'en' | 'ml';

export interface BreedTranslation {
  name: string;
  origin: string;
  shortDesc: string;
  fullStory: string;
  temperament: string;
  heritageSignificance: string;
  characteristics: string[];
}

export interface RhythmTranslation {
  tabTitle: string;
  title: string;
  shortDesc: string;
  editorialNote: string;
  timeWindow: string;
}

export interface CareTranslation {
  title: string;
  tagline: string;
  description: string;
  principle: string;
}

export interface GalleryTranslation {
  title: string;
  caption: string;
  category: string;
}

export interface VideoTranslation {
  title: string;
  description: string;
}

export interface SelectOption {
  value: string;
  label: string;
}

export interface TranslationDict {
  brand: {
    name: string;
    subline: string;
    parentTag: string;
    parentBrand: string;
    locationShort: string;
  };
  nav: {
    story: string;
    farm: string;
    breeds: string;
    life: string;
    visit: string;
    visitUs: string;
    planVisit: string;
    navigation: string;
    deepDives: string;
    carePhilosophy: string;
    gallery: string;
    switchLang: string;
    switchLangTitle: string;
    langDrawerLabel: string;
  };
  hero: {
    eyebrow: string;
    headlinePart1: string;
    headlinePart2: string;
    supportingCopy: string;
    primaryCta: string;
    secondaryCta: string;
    scrollPrompt: string;
    playReel: string;
  };
  story: {
    eyebrow: string;
    headlinePart1: string;
    headlinePart2: string;
    p1: string;
    p2: string;
    quoteTag: string;
    quote: string;
    quoteAuthor: string;
    preservingBadge: string;
    crueltyFreeBadge: string;
    nativeLineages: string;
    travancoreStewardship: string;
  };
  farm: {
    eyebrow: string;
    headlinePart1: string;
    headlinePart2: string;
    lead: string;
    overviewTab: string;
    shedsTab: string;
    architectureTitle: string;
    landscapeTitle: string;
    ventilationTitle: string;
    ventilationDesc: string;
    waterTitle: string;
    waterDesc: string;
    thermalTitle: string;
    thermalDesc: string;
    habitatLabel: string;
    aerodynamicsLabel: string;
    p1Stat: string;
    p1Label: string;
    p1Desc: string;
    p2Stat: string;
    p2Label: string;
    p2Desc: string;
    p3Stat: string;
    p3Label: string;
    p3Desc: string;
    p4Stat: string;
    p4Label: string;
    p4Desc: string;
  };
  breeds: {
    eyebrow: string;
    headlinePart1: string;
    headlinePart2: string;
    exploreRecord: string;
    swipeHint: string;
    modalArchivePrefix: string;
    modalStoryTitle: string;
    modalTraitsTitle: string;
    modalTemperamentTitle: string;
    modalSignificanceTitle: string;
    modalSanctuaryNotice: string;
  };
  breedsData: Record<string, BreedTranslation>;
  life: {
    eyebrow: string;
    headlinePart1: string;
    headlinePart2: string;
    lead: string;
    watchOnYoutube: string;
    cycleOfNaturalDay: string;
    rhythmOfPrefix: string;
    rhythmStepTotal: string;
    archiveTitle: string;
    archiveDesc: string;
    viewAllVideos: string;
    featuredFilmBadge: string;
    playVideo: string;
  };
  rhythmItems: RhythmTranslation[];
  care: {
    eyebrow: string;
    headlinePart1: string;
    headlinePart2: string;
    lead: string;
    standardBadgeTitle: string;
    standardBadgeSubtitle: string;
  };
  careItems: CareTranslation[];
  gallery: {
    eyebrow: string;
    headlinePart1: string;
    headlinePart2: string;
    allFilter: string;
    cattleFilter: string;
    landscapeFilter: string;
    careFilter: string;
    architectureFilter: string;
  };
  galleryItems: Record<string, GalleryTranslation>;
  videosData: {
    featured: VideoTranslation;
    supporting: Record<string, VideoTranslation>;
  };
  visit: {
    eyebrow: string;
    headlinePart1: string;
    headlinePart2: string;
    supportingCopy: string;
    protocolNotice: string;
    getDirections: string;
    scheduleWalkthrough: string;
    locationCardTitle: string;
    travancoreTitle: string;
    travancoreDesc: string;
    inquiryTitle: string;
    openInMaps: string;
    villageTown: string;
    districtStateCountry: string;
  };
  finalCta: {
    headlinePart1: string;
    headlinePart2: string;
    estateLocation: string;
    planYourVisit: string;
  };
  footer: {
    sanctuaryExploration: string;
    parentBrandTitle: string;
    parentBrandDesc: string;
    documentaryChannel: string;
    rightsReserved: string;
    rootedWithLove: string;
    backToTop: string;
    addressLine1: string;
    addressLine2: string;
  };
  visitModal: {
    priorArrangementBadge: string;
    title: string;
    desc: string;
    fullName: string;
    phone: string;
    date: string;
    partySize: string;
    interest: string;
    submit: string;
    receivedTitle: string;
    receivedDesc: string;
    etiquetteTitle: string;
    etiquetteRules: string[];
    guestOptions: SelectOption[];
    interestOptions: SelectOption[];
    done: string;
  };
  videoModal: {
    visitChannel: string;
    officialFeed: string;
    sanctuaryCredit: string;
  };
}

export const translations: Record<Language, TranslationDict> = {
  en: {
    brand: {
      name: 'MAHALEKSHMI GOSHALA',
      subline: 'A living heritage of care, cattle and Kerala.',
      parentTag: 'From the house of Mahalekshmi',
      parentBrand: 'Mahalekshmi Silks',
      locationShort: 'Thiruvalla, Kerala',
    },
    nav: {
      story: 'Story',
      farm: 'The Farm',
      breeds: 'Our Breeds',
      life: 'Life at Goshala',
      visit: 'Visit',
      visitUs: 'Visit Us',
      planVisit: 'Plan Your Visit',
      navigation: 'Sanctuary Navigation',
      deepDives: 'Deep Dives',
      carePhilosophy: 'Care Philosophy',
      gallery: 'Documentary Gallery',
      switchLang: 'MALAYALAM',
      switchLangTitle: 'Switch language to Malayalam',
      langDrawerLabel: 'Language',
    },
    hero: {
      eyebrow: 'MAHALEKSHMI GOSHALA',
      headlinePart1: 'Where heritage',
      headlinePart2: 'comes alive.',
      supportingCopy: 'A living home for India’s cattle, rooted in Kerala and shaped by generations of care.',
      primaryCta: 'Explore the Goshala',
      secondaryCta: 'Visit the Farm',
      scrollPrompt: 'Scroll to explore',
      playReel: 'Play Reel',
    },
    story: {
      eyebrow: 'THE STORY',
      headlinePart1: 'More than a farm.',
      headlinePart2: 'A legacy of care.',
      p1: 'Rooted in the agricultural rhythms of Central Travancore, Mahalekshmi Goshala was conceived as a sanctum for indigenous Indian cattle. Carrying the values of trust and cultural stewardship from Mahalekshmi Silks, the goshala reflects an enduring commitment to preserving the quiet dignity of India’s bovine lineage.',
      p2: 'Here in Thiruvalla, cattle are not treated as industrial assets. Each animal is recognized as part of a living ecosystem — nurtured with clean water, balanced fodder, open pastures, and affectionate daily care.',
      quoteTag: 'Ethos',
      quote: 'In our tradition, the cow is not a commodity, but an elder companion of the soil.',
      quoteAuthor: 'The Mahalekshmi Philosophy',
      preservingBadge: 'Preserving Heritage',
      crueltyFreeBadge: 'Cruelty-Free Sanctuary',
      nativeLineages: 'Native Lineages',
      travancoreStewardship: 'Central Travancore Stewardship',
    },
    farm: {
      eyebrow: 'THE PHYSICAL ENVIRONMENT',
      headlinePart1: 'Five acres',
      headlinePart2: 'of life.',
      lead: 'Designed from the ground up around bovine well-being, the farm seamlessly integrates Kerala’s tropical greenery with thoughtful agricultural architecture.',
      overviewTab: 'Pastures & Lands',
      shedsTab: 'Modern Sheds',
      architectureTitle: 'Modern Cattle Sheds',
      landscapeTitle: 'Open Pastures & Flora',
      ventilationTitle: 'Ventilation',
      ventilationDesc: 'Continuous air displacement reduces heat humidity stress common in tropical climates, keeping the cattle calm and content.',
      waterTitle: 'Fresh Water',
      waterDesc: 'Continuous clean water troughs supplied by deep groundwater recharge wells, tested regularly for chemical purity.',
      thermalTitle: 'Thermal Protection',
      thermalDesc: 'Overhanging eaves deflect monsoon rains and midday ultraviolet heat, keeping ambient temperatures up to 4°C cooler.',
      habitatLabel: 'Thiruvalla Agro-climatic Habitat',
      aerodynamicsLabel: 'Convective Aerodynamics',
      p1Stat: '5 ACRES',
      p1Label: 'Farm Environment',
      p1Desc: 'Open pastures, shaded paddocks, and tropical flora nurturing a serene living habitat.',
      p2Stat: 'MODERN SHEDS',
      p2Label: 'Designed Around Cattle Care',
      p2Desc: 'High vaulted ventilation, heat-deflecting roofs, rubber-matted resting zones, and continuous fresh hydration.',
      p3Stat: 'NATURAL SURROUNDINGS',
      p3Label: 'Thiruvalla, Kerala',
      p3Desc: 'Surrounded by the gentle waterways and verdant soil of Central Travancore.',
      p4Stat: 'CARE & MANAGEMENT',
      p4Label: 'A Structured Approach',
      p4Desc: 'Dedicated livestock handlers practicing routine health checks, hygienic maintenance, and compassionate handling.',
    },
    breeds: {
      eyebrow: 'INDIGENOUS LINEAGES',
      headlinePart1: 'India’s cattle heritage,',
      headlinePart2: 'living under one roof.',
      exploreRecord: 'Explore Breed Record',
      swipeHint: '← Swipe to explore more breeds →',
      modalArchivePrefix: 'Archive',
      modalStoryTitle: 'Lineage & Narrative',
      modalTraitsTitle: 'Distinctive Physical Traits',
      modalTemperamentTitle: 'Demeanor & Temperament',
      modalSignificanceTitle: 'Heritage Significance',
      modalSanctuaryNotice: 'Protected under peaceful care at Mahalekshmi Goshala',
    },
    breedsData: {
      gir: {
        name: 'Gir',
        origin: 'Gir Hills & Kathiawar, Gujarat',
        shortDesc: 'Celebrated for its majestic convex forehead, sweeping pendulous ears, and gentle temperament.',
        fullStory: 'The Gir is one of India’s most celebrated indigenous zebu breeds. Originating in the dry deciduous Gir hills of Saurashtra, they are instantly distinguished by their pronounced dome-shaped convex forehead and long, pendulous curled ears. Revered for their high tolerance to climate fluctuations and affectionate demeanor, Gir cattle thrive peacefully within our well-ventilated sheds.',
        temperament: 'Remarkably affectionate and docile',
        heritageSignificance: 'One of the world’s cornerstone dairy zebu breeds, preserved across generations.',
        characteristics: [
          'Convex forehead shield',
          'Pendulous folded ears',
          'Prominent dorsal hump',
          'Gentle, calm temperament',
        ],
      },
      vechur: {
        name: 'Vechur',
        origin: 'Vechur Village, Kottayam, Kerala',
        shortDesc: 'The world’s smallest cattle breed, native to Kerala, renowned for its extraordinary resilience and light footprint.',
        fullStory: 'Native to the low-lying wetland ecosystem of Vechur in Kottayam district, Kerala, the Vechur cow is globally recognized as the smallest cattle breed. Standing at an average height of around 90 cm, this diminutive breed is exceptionally well adapted to hot, humid tropical climates and exhibits natural disease resistance.',
        temperament: 'Alert, gentle, and quiet',
        heritageSignificance: 'Kerala’s proud indigenous heritage, rescued from near-extinction through dedicated local conservation.',
        characteristics: [
          'Diminutive stature (< 90 cm)',
          'Lightweight and agile',
          'High tropical adaptability',
          'Narrow muzzle and compact horns',
        ],
      },
      sahiwal: {
        name: 'Sahiwal',
        origin: 'Montgomery Region, Punjab',
        shortDesc: 'Distinguished by its reddish-brown coat, loose skin fold, and unmatched calm in tropical conditions.',
        fullStory: 'Originating along the Ravi river basin, Sahiwal is recognized as one of the best indigenous dairy breeds of the Indian subcontinent. Their coat color ranges from reddish-dun to pale red, complemented by a substantial dewlap and a quiet, stoic presence.',
        temperament: 'Placid, composed, and friendly',
        heritageSignificance: 'An ancient dairy lineage prized for centuries across northwest India.',
        characteristics: [
          'Reddish-dun glossy coat',
          'Voluminous loose dewlap',
          'Sturdy symmetrical build',
          'Calm and steady demeanor',
        ],
      },
      tharparkar: {
        name: 'Tharparkar',
        origin: 'Thar Desert & Sindh Region',
        shortDesc: 'Luminous white coat that naturally reflects heat, celebrated for endurance and graceful posture.',
        fullStory: 'Also known as the White Sindhi, the Tharparkar evolved in the harsh, arid Thar desert. Its white or light grey coat reflects intense radiant sunlight, keeping the animal naturally cool. In our lush Kerala environment, they enjoy abundant shade, fresh grass, and constant hydration.',
        temperament: 'Intelligent and reserved',
        heritageSignificance: 'Symbol of endurance and survival across desert civilizations.',
        characteristics: [
          'Silvery-white coat',
          'Convex forehead profile',
          'Medium lyre-curved horns',
          'Exceptional heat tolerance',
        ],
      },
      kankrej: {
        name: 'Kankrej',
        origin: 'Rann of Kutch, Gujarat',
        shortDesc: 'Stately cattle with magnificent lyre-shaped horns and a dignified, rhythmic gait known as Sawai Chaal.',
        fullStory: 'The Kankrej is one of the oldest recorded indigenous breeds, immortalized in Indus Valley Civilization seals. Known for their powerful lyre-shaped horns and broad forehead, they possess a unique, fluid walking stride celebrated in Indian folklore as "Sawai Chaal".',
        temperament: 'Confident, dignified, and vigilant',
        heritageSignificance: 'Archaeologically traced to ancient Harappan terracotta seals.',
        characteristics: [
          'Dramatic lyre-shaped horns',
          'Distinctive Sawai Chaal stride',
          'Deep chest and athletic physique',
          'Noble carriage',
        ],
      },
      'kasaragod-dwarf': {
        name: 'Kasaragod Dwarf',
        origin: 'Kasaragod District, Northern Kerala',
        shortDesc: 'A hardy indigenous miniature breed from northern Kerala, thriving on natural native forage.',
        fullStory: 'Endemic to the Laterite hills and coastal belt of Kasaragod, this small-stature breed is celebrated for its low maintenance, rugged health, and ability to graze effortlessly across varied terrain.',
        temperament: 'Spirited, resilient, and friendly',
        heritageSignificance: 'A vital component of Kerala’s traditional homestead agro-ecology.',
        characteristics: [
          'Compact miniature frame',
          'Varied coat shades (black, red, brown)',
          'Hardy hooves',
          'Natural foraging ability',
        ],
      },
      kangayam: {
        name: 'Kangayam',
        origin: 'Kongu Region, Tamil Nadu',
        shortDesc: 'Renowned for its muscular grey-and-black frame, compact stature, and legendary endurance.',
        fullStory: 'Bred in the semi-arid Kongu Nadu plains of western Tamil Nadu, Kangayam cattle are legendary for their strength, agility, and hardy constitution. They are an integral part of South India’s pastoral heritage.',
        temperament: 'Active, robust, and dignified',
        heritageSignificance: 'South India’s storied heritage breed preserved by traditional pastoralists.',
        characteristics: [
          'Iron-grey or dark grey coat',
          'Curved horns curving backward and inward',
          'Compact, tightly knit frame',
          'Tenacious endurance',
        ],
      },
    },
    life: {
      eyebrow: 'LIFE AT THE GOSHALA',
      headlinePart1: 'A day at the',
      headlinePart2: 'Goshala.',
      lead: 'Experience the unhurried cadence of our farm, shaped by Kerala’s solar arc, fresh well-water, and the gentle needs of the herd.',
      watchOnYoutube: 'Watch on YouTube',
      cycleOfNaturalDay: 'Natural Daily Cycle',
      rhythmOfPrefix: 'Stage',
      rhythmStepTotal: 'of 06',
      archiveTitle: 'Visual Stories from Thiruvalla',
      archiveDesc: 'An intimate cinematic glimpse into our daily cattle routines, open sheds, and lush surroundings in Thiruvalla.',
      viewAllVideos: 'View All Videos',
      featuredFilmBadge: 'Featured Film',
      playVideo: 'Play Video',
    },
    rhythmItems: [
      {
        tabTitle: 'Dawn',
        title: 'Dawn & Shed Preparation',
        shortDesc: 'The farm stirs in the cool morning mist. Sheds are washed down and inspected before the day begins.',
        editorialNote: 'Fresh well-water flows through the troughs while handlers greet each stall, noting temperament and comfort.',
        timeWindow: '05:30 AM — 07:00 AM',
      },
      {
        tabTitle: 'Nourishment',
        title: 'Nourishment & Fodder',
        shortDesc: 'Nutrient-rich green fodder, harvested local grass, and natural mineral rations are distributed.',
        editorialNote: 'Feeding is timed carefully to match natural digestive rhythms, ensuring steady rumination without stress.',
        timeWindow: '07:00 AM — 09:30 AM',
      },
      {
        tabTitle: 'Veterinary Check',
        title: 'Grooming & Veterinary Check',
        shortDesc: 'Brushing, hooves inspection, and individual health observation with gentle human touch.',
        editorialNote: 'Regular touch fosters deep trust between cattle and handlers, keeping stress levels exceptionally low.',
        timeWindow: '09:30 AM — 11:30 AM',
      },
      {
        tabTitle: 'Shaded Grazing',
        title: 'Shaded Paddock Grazing',
        shortDesc: 'Cattle take to shaded open paddocks under Kerala’s canopies of coconut and jackfruit trees.',
        editorialNote: 'Free movement and social interaction in the herd are essential for emotional well-being.',
        timeWindow: '11:30 AM — 03:30 PM',
      },
      {
        tabTitle: 'Afternoon Care',
        title: 'Calm Afternoon Care',
        shortDesc: 'Clean, stress-free routine conducted in quiet surroundings, honoring natural maternal bonds.',
        editorialNote: 'Calves are prioritized, and milking is performed with gentle, hygienic methods in an unhurried atmosphere.',
        timeWindow: '03:30 PM — 05:00 PM',
      },
      {
        tabTitle: 'Evening Rest',
        title: 'Evening Calm & Rest',
        shortDesc: 'Cattle settle into clean, dry rubber-matted stalls as dusk falls over Thiruvalla.',
        editorialNote: 'Soft ambient shed lighting and the chirping of crickets mark the close of another peaceful day.',
        timeWindow: '05:30 PM — 07:00 PM',
      },
    ],
    care: {
      eyebrow: 'ETHICAL HUSBANDRY',
      headlinePart1: 'Every animal',
      headlinePart2: 'has a story.',
      lead: 'In an era of industrial speed, we choose stillness. Our care philosophy is built around gentle routines, attentive observation, and deep respect for the sacred nature of cattle in Kerala’s landscape.',
      standardBadgeTitle: 'Responsible, Low-Stress Environment',
      standardBadgeSubtitle: 'No hormone injections, no aggressive milking, no confinement cages.',
    },
    careItems: [
      {
        title: 'Wholesome Nutrition',
        tagline: 'Grown on clean soil, balanced by science',
        description: 'Our cattle receive freshly chopped hybrid Napier grass, legumes, dry straw, and custom mineral balances without artificial stimulants.',
        principle: 'Clean digestion is the foundation of animal longevity and happiness.',
      },
      {
        title: 'Architecture of Well-Being',
        tagline: 'High vaulted eaves, natural airflow',
        description: 'Sheds are designed with open gables to channel Kerala’s gentle breezes, insulated roofing to reduce heat stress, and hygienic flooring.',
        principle: 'Living space must honor the natural posture and cooling needs of zebu cattle.',
      },
      {
        title: 'Human Connection',
        tagline: 'Familiar voices, patient hands',
        description: 'Our handlers live nearby in Thiruvalla and form lifelong bonds with the herd. Every cow is addressed by name and treated with patience.',
        principle: 'Gentleness in everyday interaction removes fear and builds calm contentment.',
      },
      {
        title: 'Purity & Cleanliness',
        tagline: 'Washed daily, disinfected naturally',
        description: 'Continuous fresh water circulation, systematic biosecurity, and natural neem-based repellent treatments safeguard herd health.',
        principle: 'Preventative care and pristine hygiene replace unnecessary medical interventions.',
      },
    ],
    gallery: {
      eyebrow: 'DOCUMENTARY ARCHIVE',
      headlinePart1: 'Farm Life',
      headlinePart2: 'in Frames.',
      allFilter: 'All',
      cattleFilter: 'Cattle',
      landscapeFilter: 'Landscape',
      careFilter: 'Daily Care',
      architectureFilter: 'Architecture',
    },
    galleryItems: {
      'gal-1': {
        title: 'Gir Calves in Open Shed',
        category: 'Cattle',
        caption: 'Young Gir calves resting peacefully in airy, high-roof stalls at Thiruvalla.',
      },
      'gal-2': {
        title: 'Kerala Pastoral Harmony',
        category: 'Landscape',
        caption: 'Lush tropical greenery where indigenous cattle and egrets dwell in peaceful symbiosis.',
      },
      'gal-3': {
        title: 'Maternal Nursing Bond',
        category: 'Daily Care',
        caption: 'Calves are nurtured unhurriedly on clean straw, prioritizing natural maternal affection.',
      },
      'gal-4': {
        title: 'Caretaker’s Gentle Touch',
        category: 'Daily Care',
        caption: 'Patient daily interaction and gentle touch create calm, trusting relationships.',
      },
      'gal-5': {
        title: 'Shed Feeding Canal',
        category: 'Architecture',
        caption: 'Open vaulted architecture featuring continuous clean water channels and fresh fodder alleys.',
      },
      'gal-6': {
        title: 'Continuous Fresh Hydration',
        category: 'Daily Care',
        caption: 'Pure well-water continually accessible through hygienic drinking troughs.',
      },
      'gal-7': {
        title: 'Hygienic Milking Station',
        category: 'Architecture',
        caption: 'Modern stainless-steel dairy standards ensuring absolute hygiene and gentle handling.',
      },
      'gal-8': {
        title: 'Calf Resting on Clean Bedding',
        category: 'Cattle',
        caption: 'Low-stress sanctum encouraging natural rumination and deep resting cycles.',
      },
    },
    videosData: {
      featured: {
        title: 'Mahalekshmi Goshala',
        description: 'An intimate cinematic glimpse into our daily cattle routines, open sheds, and lush surroundings in Thiruvalla.',
      },
      supporting: {
        'sup-1': {
          title: 'Morning Fodder & Nutrition Routine',
          description: 'How green fodder and natural balances are prepared fresh every sunrise.',
        },
        'sup-2': {
          title: 'Caretaker Bonds & Daily Observation',
          description: 'Exploring the gentle daily handling and care protocols at the farm.',
        },
        'sup-3': {
          title: 'Evening Peace at Thiruvalla',
          description: 'Watch the herd settle into clean resting quarters as twilight falls over the farm.',
        },
      },
    },
    visit: {
      eyebrow: 'SANCTUARY ACCESS',
      headlinePart1: 'Come experience',
      headlinePart2: 'the Goshala.',
      supportingCopy: 'Step away from the city and into a place where life moves at a different pace. Breathe the clean air, listen to the gentle rhythms of the herd, and reconnect with Kerala’s pastoral soul.',
      protocolNotice: 'To maintain a peaceful, stress-free sanctuary for the animals, visitor walkthroughs are coordinated by prior inquiry.',
      getDirections: 'Get Directions',
      scheduleWalkthrough: 'Schedule a Walkthrough',
      locationCardTitle: 'Farm Location & Estate',
      travancoreTitle: 'Central Travancore Heartland',
      travancoreDesc: 'Conveniently situated in Mundiappally, approximately 10 minutes from the heart of Thiruvalla town and the historic temples of the Pamba river basin.',
      inquiryTitle: 'Direct Inquiries',
      openInMaps: 'Open in Maps',
      villageTown: 'Mundiappally, Thiruvalla',
      districtStateCountry: 'Pathanamthitta District, Kerala, India',
    },
    finalCta: {
      headlinePart1: 'A legacy worth',
      headlinePart2: 'experiencing.',
      estateLocation: 'Mahalekshmi Goshala · Thiruvalla, Kerala',
      planYourVisit: 'Plan Your Visit',
    },
    footer: {
      sanctuaryExploration: 'Sanctuary Exploration',
      parentBrandTitle: 'Parent Brand',
      parentBrandDesc: 'Associated with the legacy of',
      documentaryChannel: 'Documentary Channel',
      rightsReserved: 'Mahalekshmi Goshala. All rights reserved.',
      rootedWithLove: 'Rooted in Thiruvalla, Kerala',
      backToTop: 'Back to Top',
      addressLine1: 'Mahalekshmi Goshala, Mundiappally, Thiruvalla, Kerala 689593',
      addressLine2: 'Pathanamthitta District, Kerala, India',
    },
    visitModal: {
      priorArrangementBadge: 'PRIOR ARRANGEMENT',
      title: 'Plan a Visit to the Sanctuary',
      desc: 'To maintain a peaceful habitat for our cattle, guest walkthroughs are scheduled in small, guided groups.',
      fullName: 'Full Name',
      phone: 'Phone / WhatsApp Number',
      date: 'Preferred Date',
      partySize: 'Party Size',
      interest: 'Primary Interest',
      submit: 'Submit Visit Request',
      receivedTitle: 'Visit Request Received',
      receivedDesc: 'Thank you for your interest. Our farm coordinator will review your requested date and contact you with visiting protocols.',
      etiquetteTitle: 'Sanctuary Visiting Etiquette:',
      etiquetteRules: [
        'Quiet voices are requested to maintain cattle calm.',
        'Outside animal treats or food are not permitted.',
        'Footwear sanitizing dip provided at farm gate.',
      ],
      guestOptions: [
        { value: '1-2', label: '1 – 2 Persons' },
        { value: '3-5', label: '3 – 5 Family Members' },
        { value: 'School / Group', label: 'Educational Group (6+)' },
      ],
      interestOptions: [
        { value: 'Heritage Breeds Observation', label: 'Heritage Breeds Observation' },
        { value: 'Natural Dairy Practices', label: 'Natural Farm Architecture & Care' },
        { value: 'Student Educational Walk', label: 'Student Educational Walk' },
        { value: 'General Peaceful Visit', label: 'General Quiet Farm Visit' },
      ],
      done: 'Done',
    },
    videoModal: {
      visitChannel: 'Visit YouTube Channel',
      officialFeed: 'Official Channel Feed',
      sanctuaryCredit: 'Mahalekshmi Dairy Farm & Goshala · Thiruvalla, Kerala',
    },
  },

  ml: {
    brand: {
      name: 'മഹാലക്ഷ്മി ഗോശാല',
      subline: 'കരുതലും പൈതൃകവും നിറയുന്ന കേരളത്തിന്റെ തനത് ഗോസങ്കേതം.',
      parentTag: 'മഹാലക്ഷ്മിയുടെ കുടുംബത്തിൽ നിന്ന്',
      parentBrand: 'മഹാലക്ഷ്മി സിൽക്സ്',
      locationShort: 'തിരുവല്ല, കേരളം',
    },
    nav: {
      story: 'ചരിത്രം',
      farm: 'ഫാം കാഴ്ച്ചകൾ',
      breeds: 'നാടൻ ഗോവംശങ്ങൾ',
      life: 'ഗോശാലാ ദിനം',
      visit: 'സന്ദർശനം',
      visitUs: 'സന്ദർശിക്കാം',
      planVisit: 'സന്ദർശനം പ്ലാൻ ചെയ്യാം',
      navigation: 'ഗോശാലാ വഴികാട്ടി',
      deepDives: 'കൂടുതൽ വിവരങ്ങൾ',
      carePhilosophy: 'പരിചരണ ദർശനം',
      gallery: 'ചിത്രശാല',
      switchLang: 'ഇംഗ്ലീഷ്',
      switchLangTitle: 'ഇംഗ്ലീഷിലേക്ക് ഭാഷ മാറ്റുക',
      langDrawerLabel: 'ഭാഷ',
    },
    hero: {
      eyebrow: 'മഹാലക്ഷ്മി ഗോശാല',
      headlinePart1: 'ഭാരതീയ ഗോപൈതൃകം',
      headlinePart2: 'ജീവസ്സുറ്റതാകുന്ന ഇടം.',
      supportingCopy: 'തലമുറകളുടെ സ്നേഹവും കരുതലുമായി കേരളത്തിന്റെ മണ്ണിൽ തദ്ദേശീയ പശുക്കൾക്കായൊരു പവിത്ര സങ്കേതം.',
      primaryCta: 'ഗോശാലയെ അറിയാം',
      secondaryCta: 'ഫാം സന്ദർശിക്കാം',
      scrollPrompt: 'കൂടുതൽ അറിയാൻ താഴേക്ക് സ്ക്രോൾ ചെയ്യുക',
      playReel: 'വീഡിയോ കാണാം',
    },
    story: {
      eyebrow: 'ഞങ്ങളുടെ ചരിത്രം',
      headlinePart1: 'വെറുമൊരു ഡെയറി ഫാമല്ല,',
      headlinePart2: 'കരുതലിന്റെ പാരമ്പര്യം.',
      p1: 'മധ്യതിരുവിതാംകൂറിന്റെ കാർഷിക സംസ്കാരത്തിൽ വേരൂന്നിയ മഹാലക്ഷ്മി ഗോശാല, ഇന്ത്യൻ തദ്ദേശീയ പശുക്കൾക്കായുള്ള പവിത്ര സങ്കേതമാണ്. മഹാലക്ഷ്മി സിൽക്സിന്റെ വിശ്വസ്തതയും സാംസ്കാരിക പ്രതിബദ്ധതയും ഉൾക്കൊണ്ട്, നമ്മുടെ നാടൻ പശുക്കളുടെ തനിമയും പാരമ്പര്യവും സംരക്ഷിക്കാൻ ഞങ്ങൾ പ്രതിജ്ഞാബദ്ധരാണ്.',
      p2: 'തിരുവല്ലയിലെ ഈ മണ്ണിൽ പശുക്കൾ വാണിജ്യപരമായ ഉൽപാദന യന്ത്രങ്ങളല്ല. മറിച്ച് ഓരോ ജീവനും ഒരു കുടുംബാംഗത്തെപ്പോലെ സ്നേഹത്തോടെയും സ്വാതന്ത്ര്യത്തോടെയും ശുദ്ധജലവും പോഷകാഹാരവും ലഭിച്ച് ശാന്തമായി ജീവിക്കുന്നു.',
      quoteTag: 'ആപ്തവാക്യം',
      quote: 'നമ്മുടെ പാരമ്പര്യത്തിൽ പശു ഒരു കച്ചവടച്ചരക്കല്ല, മണ്ണിന്റെയും കുടുംബത്തിന്റെയും ജ്യേഷ്ഠ സഹോദരനാണ്.',
      quoteAuthor: 'മഹാലക്ഷ്മി തത്ത്വചിന്ത',
      preservingBadge: 'പൈതൃക സംരക്ഷണം',
      crueltyFreeBadge: 'അഹിംസാ സങ്കേതം',
      nativeLineages: 'നാടൻ വംശങ്ങൾ',
      travancoreStewardship: 'മധ്യതിരുവിതാംകൂർ കാർഷിക സംസ്കാരം',
    },
    farm: {
      eyebrow: 'ഭൂമിയും വാസ്തുവിദ്യയും',
      headlinePart1: 'അഞ്ച് ഏക്കർ',
      headlinePart2: 'പ്രകൃതിയും ജീവനും.',
      lead: 'പശുക്കളുടെ പൂർണ്ണ ക്ഷേമത്തെ മുൻനിർത്തി നിർമ്മിക്കപ്പെട്ട ഈ ഫാം, കേരളത്തിന്റെ പ്രകൃതിഭംഗിയെയും ശാസ്ത്രീയ കാർഷിക വാസ്തുവിദ്യയെയും ഇണക്കിച്ചേർക്കുന്നു.',
      overviewTab: 'മേച്ചിൽപ്പുറങ്ങൾ',
      shedsTab: 'ആധുനിക ഷെഡുകൾ',
      architectureTitle: 'വായുസഞ്ചാരമുള്ള ആധുനിക ഷെഡുകൾ',
      landscapeTitle: 'പച്ചപ്പുനിറഞ്ഞ ഫാം പരിസരം',
      ventilationTitle: 'വായു സഞ്ചാരം',
      ventilationDesc: 'കേരളത്തിലെ ഈർപ്പമുള്ള ഉഷ്ണമേഖലാ കാലാവസ്ഥയിൽ പശുക്കൾക്ക് ചൂട് അനുഭവപ്പെടാത്ത വിധത്തിൽ സ്വാഭാവിക വായുസഞ്ചാരമുള്ള മേൽക്കൂരകൾ.',
      waterTitle: 'ശുദ്ധജലം',
      waterDesc: 'ഭൂഗർഭ ജലസ്രോതസ്സുകളിൽ നിന്ന് നേരിട്ട് ശുദ്ധീകരിച്ച ശുദ്ധജലം പശുക്കൾക്ക് എപ്പോഴും കുടിക്കാൻ ലഭ്യമാക്കുന്നു.',
      thermalTitle: 'താപ നിയന്ത്രണം',
      thermalDesc: 'മഴയിൽ നിന്നും അത്യുഷ്ണത്തിൽ നിന്നും സംരക്ഷണം നൽകുന്ന തണുപ്പുള്ള നിർമ്മാണരീതി, അന്തരീക്ഷ താപനില 4°C വരെ കുറയ്ക്കുന്നു.',
      habitatLabel: 'തിരുവല്ല കാർഷിക-കാലാവസ്ഥാ ആവാസവ്യവസ്ഥ',
      aerodynamicsLabel: 'സ്വാഭാവിക വായുസഞ്ചാര സാങ്കേതികത',
      p1Stat: '5 ഏക്കർ',
      p1Label: 'ഫാം വിസ്തൃതി',
      p1Desc: 'പച്ചപ്പുനിറഞ്ഞ മേച്ചിൽപ്പുറങ്ങളും തണൽമരങ്ങളും നിറഞ്ഞ സുന്ദരമായ അന്തരീക്ഷം.',
      p2Stat: 'ആധുനിക ഷെഡുകൾ',
      p2Label: 'ശാസ്ത്രാധിഷ്ഠിത നിർമ്മിതി',
      p2Desc: 'ഉയർന്ന മേൽക്കൂര, റബ്ബർ മാറ്റിട്ട തറ, തടസ്സമില്ലാത്ത ശുദ്ധജല ലഭ്യത എന്നിവ ഒരുക്കിയിരിക്കുന്നു.',
      p3Stat: 'പ്രകൃതിരമണീയം',
      p3Label: 'തിരുവല്ല, കേരളം',
      p3Desc: 'മധ്യതിരുവിതാംകൂറിന്റെ പമ്പാതീര സംസ്കാരവും ഫലഭൂയിഷ്ഠമായ മണ്ണും.',
      p4Stat: 'ശാസ്ത്രീയ പരിചരണം',
      p4Label: 'പൂർണ്ണ മേൽനോട്ടം',
      p4Desc: 'പരിചയസമ്പന്നരായ പരിചാരകരും കൃത്യമായ വെറ്ററിനറി പരിശോധനകളും സ്നേഹപൂർണ്ണമായ പെരുമാറ്റവും.',
    },
    breeds: {
      eyebrow: 'തദ്ദേശീയ ഗോവംശങ്ങൾ',
      headlinePart1: 'ഇന്ത്യയുടെ ഗോപൈതൃകം,',
      headlinePart2: 'ഒരൊറ്റ മേൽക്കൂരയ്ക്ക് കീഴിൽ.',
      exploreRecord: 'വംശവിവരങ്ങൾ കാണുക',
      swipeHint: '← കൂടുതൽ ഇനങ്ങൾ കാണാൻ സ്വൈപ്പ് ചെയ്യുക →',
      modalArchivePrefix: 'ആർക്കൈവ്',
      modalStoryTitle: 'വംശാവലിയും ചരിത്രവും',
      modalTraitsTitle: 'പ്രധാന ശാരീരിക ലക്ഷണങ്ങൾ',
      modalTemperamentTitle: 'സ്വഭാവ വിശേഷതകൾ',
      modalSignificanceTitle: 'സാംസ്കാരിക പ്രാധാന്യം',
      modalSanctuaryNotice: 'മഹാലക്ഷ്മി ഗോശാലയിൽ സ്നേഹത്തോടും ആദരവോടും സംരക്ഷിക്കപ്പെടുന്നു',
    },
    breedsData: {
      gir: {
        name: 'ഗീർ പശു',
        origin: 'ഗീർ കുന്നുകൾ, ഗുജറാത്ത്',
        shortDesc: 'ഗാംഭീര്യമുള്ള വലിയ നെറ്റിയും നീണ്ട ചെവികളും ശാന്തമായ സ്വഭാവവുമുള്ള ഇന്ത്യയുടെ അഭിമാന ഗോവംശം.',
        fullStory: 'സൗരാഷ്ട്രയിലെ ഗീർ വനമേഖലയിൽ ഉത്ഭവിച്ച ഗീർ പശുക്കൾ ഇന്ത്യയിലെ ഏറ്റവും പ്രശസ്തമായ തദ്ദേശീയ പശു ഇനങ്ങളിൽ ഒന്നാണ്. മുന്നിലേക്ക് ഉന്തിനിൽക്കുന്ന വലിയ നെറ്റിയും ചുരുണ്ട് നീണ്ട ചെവികളും ഇവയുടെ പ്രത്യേകതയാണ്. കഠിനമായ കാലാവസ്ഥാ വ്യതിയാനങ്ങളെ അതിജീവിക്കാനുള്ള അപാരമായ ശേഷിയും മനുഷ്യരോട് ഇണങ്ങുന്ന ശാന്തമായ പെരുമാറ്റവും ഇവയെ വേറിട്ടുനിർത്തുന്നു.',
        temperament: 'ഏറെ സ്നേഹശീലവും സൗമ്യവുമായ സ്വഭാവം',
        heritageSignificance: 'ലോകപ്രശസ്തമായ ഇന്ത്യൻ തദ്ദേശീയ ക്ഷീരവംശം, തലമുറകളായി സംരക്ഷിക്കപ്പെടുന്ന പൈതൃകം.',
        characteristics: [
          'ഉന്തിനിൽക്കുന്ന വിസ്തൃതമായ നെറ്റിത്തടം',
          'ചുരുണ്ട് നീണ്ട ചെവികൾ',
          'ഉയർന്നുനിൽക്കുന്ന പൂഞ്ഞ (Hump)',
          'ഏറെ ശാന്തവും അനുസരണയുമുള്ള പ്രകൃതം',
        ],
      },
      vechur: {
        name: 'വെച്ചൂർ പശു',
        origin: 'വെച്ചൂർ ഗ്രാമം, കോട്ടയം, കേരളം',
        shortDesc: 'ലോകത്തിലെ ഏറ്റവും ചെറിയ പശു ഇനം; കേരളത്തിന്റെ തനത് പൈതൃകവും അപാരമായ രോഗപ്രതിരോധ ശേഷിയും.',
        fullStory: 'കോട്ടയം ജില്ലയിലെ വേമ്പനാട്ടു കായൽതീര ഗ്രാമമായ വെച്ചൂരിൽ ഉത്ഭവിച്ച വെച്ചൂർ പശുക്കൾ ലോകത്തിലെ ഏറ്റവും ചെറിയ പശുക്കളായി ഗിന്നസ് റെക്കോർഡിൽ ഇടംപിടിച്ചവയാണ്. ശരാശരി 90 സെന്റിമീറ്റർ മാത്രം ഉയരമുള്ള ഈ പശുക്കൾ കേരളത്തിന്റെ ഈർപ്പമുള്ള ഉഷ്ണമേഖലാ കാലാവസ്ഥയ്ക്ക് ഏറ്റവും അനുയോജ്യവും സ്വാഭാവിക രോഗപ്രതിരോധ ശേഷിയുള്ളതുമാണ്.',
        temperament: 'ജാഗ്രതയുള്ളതും സൗമ്യവും ശാന്തവുമായ സ്വഭാവം',
        heritageSignificance: 'വംശനാശത്തിന്റെ വക്കിൽ നിന്ന് വീണ്ടെടുത്ത കേരളത്തിന്റെ അഭിമാനകരമായ നാടൻ പൈതൃകം.',
        characteristics: [
          'കുറിയ ശാരീരിക പ്രകൃതി (90 സെ.മീ താഴെ)',
          'ഭാരക്കുറവും ചടുലമായ നീക്കങ്ങളും',
          'കേരളത്തിന്റെ കാലാവസ്ഥയോടുള്ള ഇണക്കം',
          'ചെറിയ കൊമ്പുകളും കൂർത്ത മുഖവും',
        ],
      },
      sahiwal: {
        name: 'സാഹിവാൾ',
        origin: 'മോണ്ട്ഗോമറി പ്രവിശ്യ, പഞ്ചാബ്',
        shortDesc: 'തവിട്ടു കലർന്ന ചുവപ്പു നിറവും അയഞ്ഞ താടരോമങ്ങളും ശാന്ത ഗാംഭീര്യവുമുള്ള മികച്ച കറവപ്പശു.',
        fullStory: 'രവി നദീതീരത്ത് ഉത്ഭവിച്ച സാഹിവാൾ ഉപഭൂഖണ്ഡത്തിലെ ഏറ്റവും മികച്ച തദ്ദേശീയ കറവ ഇനങ്ങളിലൊന്നാണ്. തവിട്ടു കലർന്ന ചുവപ്പുനിറവും വലിയ താടരോമങ്ങളും ഇവയുടെ ലക്ഷണമാണ്. ഉഷ്ണമേഖലാ കാലാവസ്ഥയിലും പതറാതെ ശാന്തമായി നിലകൊള്ളാൻ ഇവയ്ക്ക് പ്രത്യേക കഴിവുണ്ട്.',
        temperament: 'ഏറെ ശാന്തവും വിശ്വസ്തവുമായ പ്രകൃതം',
        heritageSignificance: 'വടക്കുപടിഞ്ഞാറൻ ഇന്ത്യയുടെ നൂറ്റാണ്ടുകൾ പഴക്കമുള്ള സമ്പന്ന ക്ഷീരപൈതൃകം.',
        characteristics: [
          'മിനുസമുള്ള ചുവപ്പ്-തവിട്ട് രോമക്കുപ്പായം',
          'വലിപ്പമുള്ള അയഞ്ഞ താടരോമം (Dewlap)',
          'ശക്തവും സമതുലിതവുമായ ശരീരഘടന',
          'ശാന്തവും സൗഹൃദപരവുമായ പെരുമാറ്റം',
        ],
      },
      tharparkar: {
        name: 'താർപാർക്കർ',
        origin: 'താർ മരുഭൂമി, സിന്ധ് മേഖല',
        shortDesc: 'വെള്ളിനിറത്തിലുള്ള തിളങ്ങുന്ന രോമക്കുപ്പായവും കഠിനമായ ചൂടിനെ പ്രതിരോധിക്കാനുള്ള അപാര ശേഷിയും.',
        fullStory: 'വെള്ള സിന്ധി എന്ന പേരിലും അറിയപ്പെടുന്ന താർപാർക്കർ ഇനങ്ങൾ താർ മരുഭൂമിയിലെ കഠിന കാലാവസ്ഥയിലാണ് വളർന്നുവന്നത്. സൂര്യപ്രകാശത്തെ പ്രതിഫലിപ്പിക്കുന്ന വെള്ള രോമക്കുപ്പായം ഇവയുടെ ശരീരം തണുപ്പിച്ചു നിർത്താൻ സഹായിക്കുന്നു. ഞങ്ങളുടെ ഫാമിന്റെ പച്ചപ്പിലും തണലിലും ഇവർ അതീവ സന്തുഷ്ടരായി ജീവിക്കുന്നു.',
        temperament: 'ബുദ്ധിശക്തിയും അന്തസ്സുമുള്ള ശാന്ത സ്വഭാവം',
        heritageSignificance: 'മരുഭൂ സംസ്കാരങ്ങളുടെ അതിജീവനത്തിന്റെയും കരുത്തിന്റെയും പ്രതീകം.',
        characteristics: [
          'വെള്ളിനിറത്തിലുള്ള തിളങ്ങുന്ന രോമം',
          'ഉയർന്നുനിൽക്കുന്ന നെറ്റി',
          'മുകളിലേക്ക് വളഞ്ഞ മനോഹര കൊമ്പുകൾ',
          'അത്യുഷ്ണത്തെ അതിജീവിക്കാനുള്ള ശേഷി',
        ],
      },
      kankrej: {
        name: 'കാൻക്രേജ്',
        origin: 'റാൻ ഓഫ് കച്ച്, ഗുജറാത്ത്',
        shortDesc: 'കമാന ആകൃതിയിലുള്ള ഭീമൻ കൊമ്പുകളും "സവായ് ചാൽ" എന്ന രാജകീയ നടത്തവുമുള്ള പ്രൗഢഗംഭീര ഗോവംശം.',
        fullStory: 'സിന്ധുനദീതട സംസ്കാരത്തിന്റെ മുദ്രകളിൽ കൊത്തിവെക്കപ്പെട്ടിട്ടുള്ള ഏറ്റവും പുരാതനമായ ഗോവംശമാണ് കാൻക്രേജ്. ഇവയുടെ കമാന ആകൃതിയിലുള്ള വലിയ കൊമ്പുകളും വിശാലമായ നെറ്റിയും പ്രസിദ്ധമാണ്. ഭാരതീയ പുരാവൃത്തങ്ങളിൽ "സവായ് ചാൽ" എന്നറിയപ്പെടുന്ന തനത് താളാത്മക നടത്തം ഇവയുടെ മാത്രം പ്രത്യേകതയാണ്.',
        temperament: 'ആത്മവിശ്വാസവും രാജകീയ ഗാംഭീര്യവുമുള്ള സ്വഭാവം',
        heritageSignificance: 'ഹാരപ്പൻ കളിമൺ മുദ്രകളിൽ വരെ രേഖപ്പെടുത്തപ്പെട്ട പൗരാണിക പൈതൃകം.',
        characteristics: [
          'അതിമനോഹരമായ കമാന കൊമ്പുകൾ',
          'പ്രസിദ്ധമായ "സവായ് ചാൽ" നടത്തം',
          'വിശാലമായ നെഞ്ചും കരുത്തുറ്റ ശരീരവും',
          'രാജകീയ ഗാംഭീര്യമുള്ള നിൽപ്പ്',
        ],
      },
      'kasaragod-dwarf': {
        name: 'കാസർഗോഡ് കുള്ളൻ',
        origin: 'കാസർഗോഡ് ജില്ല, വടക്കൻ കേരളം',
        shortDesc: 'വടക്കൻ കേരളത്തിലെ നാട്ടിൻപുറങ്ങളിൽ തഴച്ചുവളരുന്ന, രോഗപ്രതിരോധശേഷി നിറഞ്ഞ കുഞ്ഞൻ നാടൻ പശു.',
        fullStory: 'കാസർഗോട്ടെ ചെങ്കൽക്കുന്നുകളിലും തീരദേശങ്ങളിലും പരമ്പരാഗതമായി വളർന്നുവന്ന ചെറിയ ഇനം പശുക്കളാണിവ. കുറഞ്ഞ തീറ്റച്ചിലവും മികച്ച ആരോഗ്യവും പരുക്കൻ ഭൂപ്രകൃതികളിൽ അനായാസം മേഞ്ഞുനടക്കാനുള്ള കഴിവും ഇവയെ കർഷകരുടെ പ്രിയപ്പെട്ടതാക്കുന്നു.',
        temperament: 'ചടുലവും ഊർജ്ജസ്വലവും ഇണങ്ങുന്നതുമായ സ്വഭാവം',
        heritageSignificance: 'കേരളത്തിന്റെ പരമ്പരാഗത ഗൃഹാധിഷ്ഠിത കാർഷിക സംസ്കാരത്തിന്റെ അവിഭാജ്യ ഘടകം.',
        characteristics: [
          'കുറിയ ചെറിയ ശാരീരിക ഘടന',
          'വിവിധ വർണ്ണങ്ങളിലുള്ള രോമം (കറുപ്പ്, ചുവപ്പ്, തവിട്ട്)',
          'കരുത്തുറ്റ കുളമ്പുകൾ',
          'സ്വാഭാവിക മേച്ചിൽ ശീലം',
        ],
      },
      kangayam: {
        name: 'കങ്കയം',
        origin: 'കൊങ്കുനാട്, തമിഴ്നാട്',
        shortDesc: 'ചാരനിറത്തിലുള്ള കരുത്തുറ്റ ശരീരവും പിന്നിലേക്ക് വളഞ്ഞ കൊമ്പുകളുമുള്ള തെക്കേ ഇന്ത്യയുടെ പ്രൗഢ വംശം.',
        fullStory: 'പടിഞ്ഞാറൻ തമിഴ്നാട്ടിലെ കൊങ്കു മേഖലയിൽ നിന്നുള്ള കങ്കയം പശുക്കൾ അവയുടെ അസാധാരണമായ കരുത്തിനും ചുറുചുറുക്കിനും കഠിനാധ്വാന ശേഷിക്കും പേരുകേട്ടവയാണ്. ദക്ഷിണേന്ത്യയുടെ കാർഷിക പാരമ്പര്യത്തിന്റെ ജീവിക്കുന്ന അടയാളമാണിവ.',
        temperament: 'ചടുലവും ധീരവും അന്തസ്സുള്ളതുമായ പെരുമാറ്റം',
        heritageSignificance: 'പരമ്പരാഗത ഇടയ സംസ്കാരം തലമുറകളായി കാത്തുസൂക്ഷിച്ച തെന്നിന്ത്യൻ പൈതൃകം.',
        characteristics: [
          'കടും ചാര നിറത്തിലുള്ള രോമാവരണം',
          'പിന്നിലേക്കും അകത്തേക്കും വളഞ്ഞ കൊമ്പുകൾ',
          'ഒതുക്കമുള്ള ഉറച്ച പേശീബലമുള്ള ശരീരം',
          'ദീർഘകാലം അധ്വാനിക്കാനുള്ള കരുത്ത്',
        ],
      },
    },
    life: {
      eyebrow: 'ഗോശാലയിലെ ജീവിതം',
      headlinePart1: 'ഗോശാലയിലെ',
      headlinePart2: 'ഒരു ദിനം.',
      lead: 'സൂര്യോദയം മുതൽ സന്ധ്യ വരെയുള്ള പ്രകൃതിയുടെ താളത്തിനൊപ്പം പശുക്കളുടെ സൗഖ്യത്തിനായി ചിട്ടപ്പെടുത്തിയ ശാന്തമായ ദിനചര്യകൾ.',
      watchOnYoutube: 'യൂട്യൂബിൽ കാണാം',
      cycleOfNaturalDay: 'പ്രകൃതിദത്ത ദിനചര്യ',
      rhythmOfPrefix: 'ഘട്ടം',
      rhythmStepTotal: '-ാം ഘട്ടം (06-ൽ)',
      archiveTitle: 'തിരുവല്ലയിൽ നിന്നുള്ള വീഡിയോ ദൃശ്യങ്ങൾ',
      archiveDesc: 'ഗോശാലയിലെ ദൈനംദിന ജീവിതവും ശാന്തമായ അന്തരീക്ഷവും നേരിൽ കാണാം.',
      viewAllVideos: 'എല്ലാ വീഡിയോകളും കാണുക',
      featuredFilmBadge: 'പ്രത്യേക വീഡിയോ',
      playVideo: 'വീഡിയോ കാണുക',
    },
    rhythmItems: [
      {
        tabTitle: 'പ്രഭാതം',
        title: 'പ്രഭാതവും ഷെഡ് ശുചീകരണവും',
        shortDesc: 'പ്രഭാത മഞ്ഞിൽ ഫാം ഉണരുന്നു. പുതിയൊരു ദിനം തുടങ്ങും മുൻപ് ഷെഡുകൾ കഴുകി വൃത്തിയാക്കുന്നു.',
        editorialNote: 'ശുദ്ധമായ കിണർവെള്ളം തൊട്ടികളിൽ നിറയുമ്പോൾ ഓരോ പശുവിനെയും സ്നേഹത്തോടെ അഭിവാദ്യം ചെയ്യുന്നു.',
        timeWindow: 'രാവിലെ 05:30 — 07:00',
      },
      {
        tabTitle: 'തീറ്റയും പോഷണവും',
        title: 'പ്രഭാത തീറ്റയും പോഷണവും',
        shortDesc: 'പച്ചപ്പുല്ലും തദ്ദേശീയമായി ശേഖരിച്ച തീറ്റപ്പുല്ലുകളും സ്വാഭാവിക ധാതുലവണങ്ങളും നൽകുന്നു.',
        editorialNote: 'പശുക്കളുടെ സ്വാഭാവിക ദഹന താളത്തിന് അനുസൃതമായി കൃത്യമായ സമയത്താണ് തീറ്റ നൽകുന്നത്.',
        timeWindow: 'രാവിലെ 07:00 — 09:30',
      },
      {
        tabTitle: 'പരിശോധന',
        title: 'ശരീരം തടവലും വെറ്ററിനറി പരിശോധനയും',
        shortDesc: 'ബ്രഷ് ചെയ്യലും കുളമ്പ് പരിശോധനയും സ്നേഹപൂർണ്ണമായ ആരോഗ്യ നിരീക്ഷണവും നടത്തുന്നു.',
        editorialNote: 'സ്നേഹപൂർണ്ണമായ സാമീപ്യം മനുഷ്യരും പശുക്കളും തമ്മിലുള്ള വിശ്വസ്തതയും ശാന്തതയും വർദ്ധിപ്പിക്കുന്നു.',
        timeWindow: 'രാവിലെ 09:30 — 11:30',
      },
      {
        tabTitle: 'മേച്ചിൽ സമയം',
        title: 'തണലിലെ മേച്ചിൽ സമയം',
        shortDesc: 'തെങ്ങും പ്ലാവും നിറഞ്ഞ ഫാമിലെ തണലുള്ള വിശാലമായ മേച്ചിൽപ്പുറങ്ങളിലേക്ക് പശുക്കൾ ഇറങ്ങുന്നു.',
        editorialNote: 'കൂട്ടമായി സ്വതന്ത്രമായി മേയുന്നത് പശുക്കളുടെ മാനസിക സന്തോഷത്തിന് അത്യന്താപേക്ഷിതമാണ്.',
        timeWindow: 'ഉച്ചയ്ക്ക് 11:30 — വൈകിട്ട് 03:30',
      },
      {
        tabTitle: 'കറവ പരിചരണം',
        title: 'ഉച്ചതിരിഞ്ഞുള്ള പരിചരണം',
        shortDesc: 'മാതൃ-കിടാവ് ബന്ധങ്ങളെ മാനിച്ചുകൊണ്ട് തികച്ചും ശാന്തമായ അന്തരീക്ഷത്തിൽ നടക്കുന്ന ശുദ്ധമായ പരിചരണം.',
        editorialNote: 'കിടാക്കൾക്ക് മുൻഗണന നൽകിക്കൊണ്ട് വളരെ സാവധാനത്തിലും ശാന്തമായും കറവ നിർവഹിക്കുന്നു.',
        timeWindow: 'വൈകിട്ട് 03:30 — 05:00',
      },
      {
        tabTitle: 'സന്ധ്യാ വിശ്രമം',
        title: 'സന്ധ്യാ വിശ്രമവും നിദ്രയും',
        shortDesc: 'തിരുവല്ലയിൽ സന്ധ്യ മയങ്ങുമ്പോൾ റബ്ബർ മാറ്റുകൾ വിരിച്ച സുഖകരമായ കൂടുകളിലേക്ക് പശുക്കൾ ചേക്കേറുന്നു.',
        editorialNote: 'ഇളം വെളിച്ചവും ചീവീടുകളുടെ നാദവും പശുക്കൾക്ക് സുഖനിദ്രയും ശാന്തതയും സമ്മാനിക്കുന്നു.',
        timeWindow: 'സന്ധ്യയ്ക്ക് 05:30 — രാത്രി 07:00',
      },
    ],
    care: {
      eyebrow: 'ധാർമ്മിക പരിചരണം',
      headlinePart1: 'ഓരോ ജീവനും',
      headlinePart2: 'ഒരു കഥയുണ്ട്.',
      lead: 'വേഗതയേറിയ ആധുനികതയ്ക്കിടയിൽ ഞങ്ങൾ ക്ഷമയും ശാന്തതയും തിരഞ്ഞെടുക്കുന്നു. സ്നേഹപൂർണ്ണമായ പരിചരണവും പ്രകൃതിദത്ത സമീപനവുമാണ് ഞങ്ങളുടെ കരുത്ത്.',
      standardBadgeTitle: 'സമ്മർദ്ദരഹിതമായ പരിപാലന രീതി',
      standardBadgeSubtitle: 'കൃത്രിമ ഹോർമോണുകളോ ഇൻജക്ഷനുകളോ അമിതമായ കറവയോ ഇവിടെയില്ല.',
    },
    careItems: [
      {
        title: 'പോഷകസമൃദ്ധമായ ആഹാരം',
        tagline: 'വിഷരഹിത മണ്ണിൽ വിളഞ്ഞത്, ശാസ്ത്രീയ സമീകൃതാഹാരം',
        description: 'ഹൈബ്രിഡ് നേപ്പിയർ പുല്ല്, പയർവർഗ്ഗങ്ങൾ, ഉണക്കവൈക്കോൽ, സ്വാഭാവിക ധാതുക്കൾ എന്നിവ കൃത്രിമ ഉത്തേജകങ്ങളില്ലാതെ കൃത്യമായ അളവിൽ നൽകുന്നു.',
        principle: 'ശുദ്ധമായ ദഹനമാണ് മൃഗങ്ങളുടെ ആയുസ്സിനും ആരോഗ്യത്തിനും മനസ്സംതൃപ്തിക്കും ആധാരം.',
      },
      {
        title: 'സ്വാഭാവിക സൗഖ്യമേകുന്ന വാസ്തുവിദ്യ',
        tagline: 'ഉയർന്ന മേൽക്കൂരകൾ, തടസ്സമില്ലാത്ത ശുദ്ധവായു',
        description: 'കേരളത്തിലെ ഇളംകാറ്റിനെ തടസ്സമില്ലാതെ കടത്തിവിടുന്ന ഉയർന്ന മേൽക്കൂരകളും, അത്യുഷ്ണത്തെ തടയുന്ന തണുപ്പുള്ള നിർമ്മിതിയും, മൃദുവായ റബ്ബർ മാറ്റുകളും ഒരുക്കിയിരിക്കുന്നു.',
        principle: 'ഫാമിലെ വാസ്തുവിദ്യ നാടൻ പശുക്കളുടെ ശാരീരിക ഘടനയെയും സ്വാഭാവിക തണുപ്പിനെയും ആദരിക്കുന്നതായിരിക്കണം.',
      },
      {
        title: 'മനുഷ്യസ്നേഹത്തിന്റെ ആത്മബന്ധം',
        tagline: 'പരിചിതമായ സ്വരങ്ങൾ, ക്ഷമയുള്ള കൈകൾ',
        description: 'തിരുവല്ലയിലെ തദ്ദേശീയരായ പരിചാരകർ പശുക്കളുമായി കുടുംബാംഗങ്ങളെപ്പോലെ ആത്മബന്ധം പുലർത്തുന്നു. ഓരോ പശുവിനെയും പേരെടുത്തുവിളിച്ച് സ്നേഹത്തോടെ പരിചരിക്കുന്നു.',
        principle: 'ദൈനംദിന പരിചരണത്തിലെ സ്നേഹവാത്സല്യങ്ങൾ മൃഗങ്ങളിലെ ഭയമകറ്റി തികഞ്ഞ ശാന്തതയും വിശ്വാസവും വളർത്തുന്നു.',
      },
      {
        title: 'പവിത്രമായ ശുദ്ധിയും ശുചിത്വവും',
        tagline: 'ദിനവും ശുദ്ധജലത്തിൽ കുളി, പ്രകൃതിദത്ത സംരക്ഷണം',
        description: 'തടസ്സമില്ലാത്ത ശുദ്ധജല വിതരണവും വേപ്പെണ്ണയും കാർഷിക പാരമ്പര്യവും അടിസ്ഥാനമാക്കിയുള്ള പ്രകൃതിദത്ത ശുചീകരണവും പശുക്കളുടെ ആരോഗ്യം ഉറപ്പാക്കുന്നു.',
        principle: 'മുൻകരുതലോടെയുള്ള ശുചിത്വവും കരുതലുമാണ് ഏറ്റവും വലിയ ചികിത്സാരീതി.',
      },
    ],
    gallery: {
      eyebrow: 'ഫോട്ടോ ആർക്കൈവ്',
      headlinePart1: 'ഫാം ജീവിതം',
      headlinePart2: 'ചിത്രങ്ങളിലൂടെ.',
      allFilter: 'എല്ലാം',
      cattleFilter: 'പശുക്കൾ',
      landscapeFilter: 'പ്രകൃതി',
      careFilter: 'പരിചരണം',
      architectureFilter: 'വാസ്തുവിദ്യ',
    },
    galleryItems: {
      'gal-1': {
        title: 'തുറന്ന ഷെഡിൽ ഗീർ കിടാവുകൾ',
        category: 'പശുക്കൾ',
        caption: 'തിരുവല്ലയിലെ വായുസഞ്ചാരമുള്ള ഉയർന്ന ഷെഡുകളിൽ ശാന്തമായി വിശ്രമിക്കുന്ന കുഞ്ഞു ഗീർ കിടാവുകൾ.',
      },
      'gal-2': {
        title: 'ഗ്രാമീണ കാർഷിക സൗന്ദര്യം',
        category: 'പ്രകൃതി',
        caption: 'പച്ചപ്പുനിറഞ്ഞ ഫാമിൽ കൊക്കുകളും നാടൻ പശുക്കളും ഇണങ്ങി ജീവിക്കുന്ന പ്രകൃതിദൃശ്യം.',
      },
      'gal-3': {
        title: 'വാത്സല്യം തുളുമ്പുന്ന മാതൃബന്ധം',
        category: 'പരിചരണം',
        caption: 'ശുദ്ധമായ വൈക്കോൽ വിരിച്ച തറയിൽ അമ്മപ്പശുവിൽ നിന്ന് സ്നേഹത്തോടെ പാൽ കുടിക്കുന്ന കിടാവ്.',
      },
      'gal-4': {
        title: 'പരിചാരകന്റെ സ്നേഹസ്പർശം',
        category: 'പരിചരണം',
        caption: 'പരിചാരകരുടെ ക്ഷമയും സ്നേഹവുമുള്ള സാമീപ്യം പശുക്കളിൽ സുരക്ഷിതത്വബോധം വളർത്തുന്നു.',
      },
      'gal-5': {
        title: 'വിശാലമായ തീറ്റത്തോണികൾ',
        category: 'വാസ്തുവിദ്യ',
        caption: 'ശുദ്ധജലവും പച്ചപ്പുല്ലും തടസ്സമില്ലാതെ നൽകുന്ന വായുസഞ്ചാരമുള്ള വിശാലമായ നിർമ്മിതി.',
      },
      'gal-6': {
        title: 'നിരന്തര ശുദ്ധജല ലഭ്യത',
        category: 'പരിചരണം',
        caption: 'ഭൂഗർഭ സ്രോതസ്സിൽ നിന്നുള്ള തെളിഞ്ഞ ശുദ്ധജലം പശുക്കൾക്ക് എപ്പോഴും കുടിക്കാൻ ലഭ്യമാക്കുന്നു.',
      },
      'gal-7': {
        title: 'അത്യാധുനിക ശുദ്ധമായ കറവകേന്ദ്രം',
        category: 'വാസ്തുവിദ്യ',
        caption: 'സ്റ്റെയിൻലെസ്സ് സ്റ്റീൽ മാനദണ്ഡങ്ങളോടെ തികഞ്ഞ ശുചിത്വം പാലിക്കുന്ന അത്യാധുനിക സങ്കേതം.',
      },
      'gal-8': {
        title: 'കിടാവിന്റെ സുഖനിദ്ര',
        category: 'പശുക്കൾ',
        caption: 'ശാന്തവും സുരക്ഷിതവുമായ തറയിൽ സുഖമായി വിശ്രമിക്കുന്ന കുഞ്ഞുകിടാവ്.',
      },
    },
    videosData: {
      featured: {
        title: 'മഹാലക്ഷ്മി ഗോശാല',
        description: 'തിരുവല്ലയിലെ ഗോശാലയുടെ മനോഹരമായ കാഴ്ചകളും ദൈനംദിന ജീവിതവും ഉൾക്കൊള്ളുന്ന സിനിമീയ ദൃശ്യാവിഷ്കാരം.',
      },
      supporting: {
        'sup-1': {
          title: 'പ്രഭാത തീറ്റക്രമവും പോഷണവും',
          description: 'എല്ലാ പ്രഭാതത്തിലും പച്ചപ്പുല്ലും സ്വാഭാവിക സമീകൃതാഹാരങ്ങളും തയ്യാറാക്കുന്ന രീതികൾ.',
        },
        'sup-2': {
          title: 'പരിചാരകരും പശുക്കളുമായുള്ള ആത്മബന്ധം',
          description: 'ഫാമിലെ പശുക്കളോട് പരിചാരകർ പുലർത്തുന്ന സ്നേഹവും സവിശേഷമായ പരിചരണ രീതികളും.',
        },
        'sup-3': {
          title: 'തിരുവല്ലയിലെ ശാന്തമായ സന്ധ്യ',
          description: 'സന്ധ്യാസമയത്ത് പശുക്കൾ കൂടുകളിലേക്ക് മടങ്ങുന്ന തിരുവല്ലയിലെ ശാന്തമായ ദൃശ്യങ്ങൾ.',
        },
      },
    },
    visit: {
      eyebrow: 'സന്ദർശന വിവരം',
      headlinePart1: 'ഗോശാലയിലേക്ക്',
      headlinePart2: 'സ്വാഗതം.',
      supportingCopy: 'നഗരത്തിരക്കുകളിൽ നിന്ന് മാറി പ്രകൃതിയുടെയും ഗോക്കളുടെയും ശാന്തതയിലേക്ക് കടന്നുവരൂ. ശുദ്ധവായു ശ്വസിച്ച് മനസ്സിന് ശാന്തി നേടാം.',
      protocolNotice: 'പശുക്കളുടെ സ്വസ്ഥത ഉറപ്പാക്കാൻ മുൻകൂട്ടിയുള്ള അറിയിപ്പിലൂടെ മാത്രമേ സന്ദർശനം അനുവദിക്കാറുള്ളൂ.',
      getDirections: 'വഴികാട്ടി (Google Maps)',
      scheduleWalkthrough: 'സന്ദർശനം മുൻകൂട്ടി ബുക്ക് ചെയ്യാം',
      locationCardTitle: 'ഫാം വിലാസം',
      travancoreTitle: 'മധ്യതിരുവിതാംകൂറിന്റെ ഹൃദയഭൂമി',
      travancoreDesc: 'മുണ്ടിയപ്പള്ളിയിൽ, തിരുവല്ല പട്ടണത്തിൽ നിന്ന് 10 മിനിറ്റ് യാത്രാദൂരത്തിൽ പമ്പാ നദീതട സംസ്കാരത്തിന്റെ ഭാഗമായി സ്ഥിതിചെയ്യുന്നു.',
      inquiryTitle: 'നേരിട്ടുള്ള അന്വേഷണങ്ങൾക്ക്',
      openInMaps: 'മാപ്പിൽ കാണുക',
      villageTown: 'മുണ്ടിയപ്പള്ളി, തിരുവല്ല',
      districtStateCountry: 'പത്തനംതിട്ട ജില്ല, കേരളം, ഇന്ത്യ',
    },
    finalCta: {
      headlinePart1: 'നേരിട്ട് അനുഭവിച്ചറിയേണ്ട',
      headlinePart2: 'ഒരു പാരമ്പര്യം.',
      estateLocation: 'മഹാലക്ഷ്മി ഗോശാല · തിരുവല്ല, കേരളം',
      planYourVisit: 'സന്ദർശനം പ്ലാൻ ചെയ്യാം',
    },
    footer: {
      sanctuaryExploration: 'ഗോശാലാ വഴികാട്ടി',
      parentBrandTitle: 'മാതൃ ബ്രാൻഡ്',
      parentBrandDesc: 'ഈ പാരമ്പര്യത്തിന്റെ തണലിൽ:',
      documentaryChannel: 'ഔദ്യോഗിക യൂട്യൂബ് ചാനൽ',
      rightsReserved: 'മഹാലക്ഷ്മി ഗോശാല. എല്ലാ അവകാശങ്ങളും നിക്ഷിപ്തം.',
      rootedWithLove: 'തിരുവല്ല, കേരളത്തിൽ വേരൂന്നിയത്',
      backToTop: 'മുകളിലേക്ക് പോകാം',
      addressLine1: 'മഹാലക്ഷ്മി ഗോശാല, മുണ്ടിയപ്പള്ളി, തിരുവല്ല, കേരളം 689593',
      addressLine2: 'പത്തനംതിട്ട ജില്ല, കേരളം, ഇന്ത്യ',
    },
    visitModal: {
      priorArrangementBadge: 'മുൻകൂർ അനുമതിയോടെ',
      title: 'ഗോശാല സന്ദർശനത്തിന് രജിസ്റ്റർ ചെയ്യാം',
      desc: 'പശുക്കൾക്ക് സമ്മർദ്ദമില്ലാത്ത അന്തരീക്ഷം ഉറപ്പാക്കാൻ ചെറിയ ഗ്രൂപ്പുകളായാണ് സന്ദർശനം അനുവദിക്കുന്നത്.',
      fullName: 'മുഴുവൻ പേര്',
      phone: 'ഫോൺ / വാട്സ്ആപ്പ് നമ്പർ',
      date: 'സന്ദർശിക്കാൻ ആഗ്രഹിക്കുന്ന തീയതി',
      partySize: 'ആളുകളുടെ എണ്ണം',
      interest: 'പ്രധാന താല്പര്യം',
      submit: 'അപേക്ഷ സമർപ്പിക്കുക',
      receivedTitle: 'സന്ദർശന അപേക്ഷ ലഭിച്ചു',
      receivedDesc: 'നന്ദി! ഞങ്ങളുടെ ഫാം കോർഡിനേറ്റർ നിങ്ങളെ ഫോണിൽ ബന്ധപ്പെട്ട് സന്ദർശന മാർഗ്ഗനിർദ്ദേശങ്ങൾ നൽകുന്നതാണ്.',
      etiquetteTitle: 'സന്ദർശക മര്യാദകൾ:',
      etiquetteRules: [
        'പശുക്കളുടെ ശാന്തതയ്ക്കായി ശബ്ദമുയർത്തി സംസാരിക്കാതിരിക്കുക.',
        'പുറത്തുനിന്നുള്ള ഭക്ഷ്യവസ്തുക്കളോ പലഹാരങ്ങളോ പശുക്കൾക്ക് നൽകരുത്.',
        'പ്രവേശന കവാടത്തിൽ പാദരക്ഷകൾ അണുവിമുക്തമാക്കുക.',
      ],
      guestOptions: [
        { value: '1-2', label: '1 – 2 വ്യക്തികൾ' },
        { value: '3-5', label: '3 – 5 കുടുംബാംഗങ്ങൾ' },
        { value: 'School / Group', label: 'വിദ്യാഭ്യാസ ഗ്രൂപ്പ് (6+)' },
      ],
      interestOptions: [
        { value: 'Heritage Breeds Observation', label: 'നാടൻ പശുക്കളുടെ വംശനിരീക്ഷണം' },
        { value: 'Natural Dairy Practices', label: 'സ്വാഭാവിക ഫാം വാസ്തുവിദ്യയും പരിചരണവും' },
        { value: 'Student Educational Walk', label: 'വിദ്യാർത്ഥികൾക്കായുള്ള പഠന സന്ദർശനം' },
        { value: 'General Peaceful Visit', label: 'ശാന്തമായ ഫാം സന്ദർശനം' },
      ],
      done: 'പൂർത്തിയായി',
    },
    videoModal: {
      visitChannel: 'യൂട്യൂബ് ചാനൽ സന്ദർശിക്കുക',
      officialFeed: 'ഔദ്യോഗിക ചാനൽ',
      sanctuaryCredit: 'മഹാലക്ഷ്മി ഡെയറി ഫാം & ഗോശാല · തിരുവല്ല, കേരളം',
    },
  },
};
'''

with open('/Users/gokul/.gemini/antigravity/scratch/mahalekshmi-goshala/src/data/translations.ts', 'w', encoding='utf-8') as f:
    f.write(translations_content)

print("Translations written successfully!")
