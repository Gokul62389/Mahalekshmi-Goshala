const base = import.meta.env.BASE_URL;

import type { SiteConfig } from '../types';

export const siteConfig: SiteConfig = {
  brand: {
    name: 'MAHALEKSHMI GOSHALA',
    subline: 'A living heritage of care, cattle and Kerala.',
    parentBrandName: 'Mahalekshmi Silks',
    parentBrandUrl: 'https://mahalekshmisilks.com/',
    parentBrandTag: 'From the house of Mahalekshmi',
  },

  location: {
    estate: 'Mahalekshmi Goshala',
    village: 'Mundiappally',
    town: 'Thiruvalla',
    district: 'Pathanamthitta',
    state: 'Kerala',
    country: 'India',
    fullAddress: 'Mahalekshmi Goshala, Mundiappally, Thiruvalla, Kerala 689593',
    mapQuery: 'Mahalekshmi+Goshala+Mundiappally+Thiruvalla+Kerala',
  },

  contact: {
    phone: '+91 89433 44620',
    email: 'info@mahalekshmigoshala.com',
    inquiryNotice: 'Visits and educational walk-throughs by prior arrangement.',
  },

  socialLinks: {
    youtube: 'https://www.youtube.com/@mahalekshmigoshala1265',
    parentWebsite: 'https://mahalekshmisilks.com/',
  },

  hero: {
    eyebrow: 'MAHALEKSHMI GOSHALA',
    headline: 'Where heritage comes alive.',
    supportingCopy: 'A living home for India’s cattle, rooted in Kerala and shaped by generations of care.',
    primaryCta: 'Explore the Goshala',
    secondaryCta: 'Visit the Farm',
    youtubeId: 'tf10eWe0gFU',
    startTime: 15,
    videoPlaceholderUrl: 'https://www.youtube.com/watch?v=tf10eWe0gFU',
    posterImage: `${base}images/hero-yt-poster.jpg`,
  },

  story: {
    eyebrow: 'THE STORY',
    headline: 'More than a farm. A legacy of care.',
    leadParagraph:
      'Rooted in the agricultural rhythms of Central Travancore, Mahalekshmi Goshala was conceived as a sanctum for indigenous Indian cattle. Carrying the values of trust and cultural stewardship from Mahalekshmi Silks, the goshala reflects an enduring commitment to preserving the quiet dignity of India’s bovine lineage.',
    subParagraph:
      'Here in Thiruvalla, cattle are not treated as industrial assets. Each animal is recognized as part of a living ecosystem — nurtured with clean water, balanced fodder, open pastures, and affectionate daily care.',
    quote: 'In our tradition, the cow is not a commodity, but an elder companion of the soil.',
    quoteAuthor: 'The Mahalekshmi Philosophy',
    image: `${base}images/goshala/caretaker-cow-bond.jpg`,
  },

  farmEnvironment: {
    eyebrow: 'THE PHYSICAL ENVIRONMENT',
    headline: 'Five acres of life.',
    lead: 'Designed from the ground up around bovine well-being, the farm seamlessly integrates Kerala’s tropical greenery with thoughtful agricultural architecture.',
    pillars: [
      {
        stat: '5 ACRES',
        label: 'Farm Environment',
        detail: 'Open pastures, shaded paddocks, and tropical flora nurturing a serene living habitat.',
      },
      {
        stat: 'MODERN SHEDS',
        label: 'Designed Around Cattle Care',
        detail: 'High vaulted ventilation, heat-deflecting roofs, rubber-matted resting zones, and continuous fresh hydration.',
      },
      {
        stat: 'NATURAL SURROUNDINGS',
        label: 'Thiruvalla, Kerala',
        detail: 'Surrounded by the gentle waterways and verdant soil of Central Travancore.',
      },
      {
        stat: 'CARE & MANAGEMENT',
        label: 'A Structured Approach',
        detail: 'Dedicated livestock handlers practicing routine health checks, hygienic maintenance, and compassionate handling.',
      },
    ],
    imagery: {
      landscape: `${base}images/goshala/kerala-pastoral-egret.jpg`,
      sheds: `${base}images/goshala/gir-calves-shed.jpg`,
    },
  },

  breeds: [
    {
      id: 'gir',
      number: '01',
      name: 'Gir',
      nativeName: 'ഗീർ പശു',
      origin: 'Gir Hills & Kathiawar, Gujarat',
      shortDescription:
        'Celebrated for its majestic convex forehead, sweeping pendulous ears, and gentle temperament.',
      fullStory:
        'The Gir is one of India’s most celebrated indigenous zebu breeds. Originating in the dry deciduous Gir hills of Saurashtra, they are instantly distinguished by their pronounced dome-shaped convex forehead and long, pendulous curled ears. Revered for their high tolerance to climate fluctuations and affectionate demeanor, Gir cattle thrive peacefully within our well-ventilated sheds.',
      characteristics: ['Convex forehead shield', 'Pendulous folded ears', 'Prominent dorsal hump', 'Gentle, calm temperament'],
      temperament: 'Remarkably affectionate and docile',
      heritageSignificance: 'One of the world’s cornerstone dairy zebu breeds, preserved across generations.',
      image: `${base}images/gir-cow.jpg`,
      alt: 'Majestic adult Gir cow with signature convex brow and sweeping pendulous ears',
    },
    {
      id: 'vechur',
      number: '02',
      name: 'Vechur',
      nativeName: 'വെച്ചൂർ പശു',
      origin: 'Vechur Village, Kottayam, Kerala',
      shortDescription:
        'The world’s smallest cattle breed, native to Kerala, renowned for its extraordinary resilience and light footprint.',
      fullStory:
        'Native to the low-lying wetland ecosystem of Vechur in Kottayam district, Kerala, the Vechur cow is globally recognized as the smallest cattle breed. Standing at an average height of around 90 cm, this diminutive breed is exceptionally well adapted to hot, humid tropical climates and exhibits natural disease resistance.',
      characteristics: ['Diminutive stature (< 90 cm)', 'Lightweight and agile', 'High tropical adaptability', 'Narrow muzzle and compact horns'],
      temperament: 'Alert, gentle, and quiet',
      heritageSignificance: 'Kerala’s proud indigenous heritage, rescued from near-extinction through dedicated local conservation.',
      image: `${base}images/vechur-cow.jpg`,
      alt: 'Compact indigenous Vechur cow standing calmly in green Kerala pasture',
    },
    {
      id: 'sahiwal',
      number: '03',
      name: 'Sahiwal',
      nativeName: 'സാഹിവാൾ',
      origin: 'Montgomery Region, Punjab',
      shortDescription:
        'Distinguished by its reddish-brown coat, loose skin fold, and unmatched calm in tropical conditions.',
      fullStory:
        'Originating along the Ravi river basin, Sahiwal is recognized as one of the best indigenous dairy breeds of the Indian subcontinent. Their coat color ranges from reddish-dun to pale red, complemented by a substantial dewlap and a quiet, stoic presence.',
      characteristics: ['Reddish-dun glossy coat', 'Voluminous loose dewlap', 'Sturdy symmetrical build', 'Calm and steady demeanor'],
      temperament: 'Placid, composed, and friendly',
      heritageSignificance: 'An ancient dairy lineage prized for centuries across northwest India.',
      image: `${base}images/sahiwal-cow.jpg`,
      alt: 'Red-toned Sahiwal cattle with characteristic dewlap in natural light',
    },
    {
      id: 'tharparkar',
      number: '04',
      name: 'Tharparkar',
      nativeName: 'താർപാർക്കർ',
      origin: 'Thar Desert & Sindh Region',
      shortDescription:
        'Luminous white coat that naturally reflects heat, celebrated for endurance and graceful posture.',
      fullStory:
        'Also known as the White Sindhi, the Tharparkar evolved in the harsh, arid Thar desert. Its white or light grey coat reflects intense radiant sunlight, keeping the animal naturally cool. In our lush Kerala environment, they enjoy abundant shade, fresh grass, and constant hydration.',
      characteristics: ['Silvery-white coat', 'Convex forehead profile', 'Medium lyre-curved horns', 'Exceptional heat tolerance'],
      temperament: 'Intelligent and reserved',
      heritageSignificance: 'Symbol of endurance and survival across desert civilizations.',
      image: `${base}images/tharparkar-cow.jpg`,
      alt: 'Silvery white Tharparkar cow in peaceful surroundings',
    },
    {
      id: 'kankrej',
      number: '05',
      name: 'Kankrej',
      nativeName: 'കാൻക്രേജ്',
      origin: 'Rann of Kutch, Gujarat',
      shortDescription:
        'Stately cattle with magnificent lyre-shaped horns and a dignified, rhythmic gait known as Sawai Chaal.',
      fullStory:
        'The Kankrej is one of the oldest recorded indigenous breeds, immortalized in Indus Valley Civilization seals. Known for their powerful lyre-shaped horns and broad forehead, they possess a unique, fluid walking stride celebrated in Indian folklore as "Sawai Chaal".',
      characteristics: ['Dramatic lyre-shaped horns', 'Distinctive Sawai Chaal stride', 'Deep chest and athletic physique', 'Noble carriage'],
      temperament: 'Confident, dignified, and vigilant',
      heritageSignificance: 'Archaeologically traced to ancient Harappan terracotta seals.',
      image: `${base}images/kankrej-cow.jpg`,
      alt: 'Majestic Kankrej bull with magnificent lyre-shaped horns',
    },
    {
      id: 'kasaragod-dwarf',
      number: '06',
      name: 'Kasaragod Dwarf',
      nativeName: 'കാസർഗോഡ് കുള്ളൻ',
      origin: 'Kasaragod District, Northern Kerala',
      shortDescription:
        'A hardy indigenous miniature breed from northern Kerala, thriving on natural native forage.',
      fullStory:
        'Endemic to the Laterite hills and coastal belt of Kasaragod, this small-stature breed is celebrated for its low maintenance, rugged health, and ability to graze effortlessly across varied terrain.',
      characteristics: ['Compact miniature frame', 'Varied coat shades (black, red, brown)', 'Hardy hooves', 'Natural foraging ability'],
      temperament: 'Spirited, resilient, and friendly',
      heritageSignificance: 'A vital component of Kerala’s traditional homestead agro-ecology.',
      image: `${base}images/kasaragod-dwarf.jpg`,
      alt: 'Indigenous Kasaragod dwarf cattle in Kerala countryside',
    },
    {
      id: 'kangayam',
      number: '07',
      name: 'Kangayam',
      nativeName: 'കങ്കയം',
      origin: 'Kongu Region, Tamil Nadu',
      shortDescription:
        'Renowned for its muscular grey-and-black frame, compact stature, and legendary endurance.',
      fullStory:
        'Bred in the semi-arid Kongu Nadu plains of western Tamil Nadu, Kangayam cattle are legendary for their strength, agility, and hardy constitution. They are an integral part of South India’s pastoral heritage.',
      characteristics: ['Iron-grey or dark grey coat', 'Curved horns curving backward and inward', 'Compact, tightly knit frame', 'Tenacious endurance'],
      temperament: 'Active, robust, and dignified',
      heritageSignificance: 'South India’s storied heritage breed preserved by traditional pastoralists.',
      image: `${base}images/kangayam-bull.jpg`,
      alt: 'Robust Kangayam cattle with characteristic backward horn curvature',
    },
  ],

  rhythm: [
    {
      id: 'morning',
      step: '01',
      timeWindow: '05:30 AM — 07:00 AM',
      title: 'Dawn & Shed Preparation',
      shortDesc: 'The farm stirs in the cool morning mist. Sheds are washed down and inspected before the day begins.',
      editorialNote: 'Fresh well-water flows through the troughs while handlers greet each stall, noting temperament and comfort.',
      image: `${base}images/goshala/goshala-shed-feeding.jpg`,
    },
    {
      id: 'feeding',
      step: '02',
      timeWindow: '07:00 AM — 09:30 AM',
      title: 'Nourishment & Fodder',
      shortDesc: 'Nutrient-rich green fodder, harvested local grass, and natural mineral rations are distributed.',
      editorialNote: 'Feeding is timed carefully to match natural digestive rhythms, ensuring steady rumination without stress.',
      image: `${base}images/goshala/modern-feed-barrier.jpg`,
    },
    {
      id: 'care',
      step: '03',
      timeWindow: '09:30 AM — 11:30 AM',
      title: 'Grooming & Veterinary Check',
      shortDesc: 'Brushing, hooves inspection, and individual health observation with gentle human touch.',
      editorialNote: 'Regular touch fosters deep trust between cattle and handlers, keeping stress levels exceptionally low.',
      image: `${base}images/goshala/caretaker-cow-bond.jpg`,
    },
    {
      id: 'grazing',
      step: '04',
      timeWindow: '11:30 AM — 03:30 PM',
      title: 'Shaded Paddock Grazing',
      shortDesc: 'Cattle take to shaded open paddocks under Kerala’s canopies of coconut and jackfruit trees.',
      editorialNote: 'Free movement and social interaction in the herd are essential for emotional well-being.',
      image: `${base}images/goshala/kerala-pastoral-egret.jpg`,
    },
    {
      id: 'milking',
      step: '05',
      timeWindow: '03:30 PM — 05:00 PM',
      title: 'Calm Afternoon Care',
      shortDesc: 'Clean, stress-free routine conducted in quiet surroundings, honoring natural maternal bonds.',
      editorialNote: 'Calves are prioritized, and milking is performed with gentle, hygienic methods in an unhurried atmosphere.',
      image: `${base}images/goshala/milking-station-sanctuary.jpg`,
    },
    {
      id: 'evening',
      step: '06',
      timeWindow: '05:30 PM — 07:00 PM',
      title: 'Evening Calm & Rest',
      shortDesc: 'Cattle settle into clean, dry rubber-matted stalls as dusk falls over Thiruvalla.',
      editorialNote: 'Soft ambient shed lighting and the chirping of crickets mark the close of another peaceful day.',
      image: `${base}images/goshala/resting-calf-straw.jpg`,
    },
  ],

  care: [
    {
      id: 'nutrition',
      title: 'Wholesome Nutrition',
      tagline: 'Grown on clean soil, balanced by science',
      description:
        'Our cattle receive freshly chopped hybrid Napier grass, legumes, dry straw, and custom mineral balances without artificial stimulants.',
      principle: 'Clean digestion is the foundation of animal longevity and happiness.',
      image: `${base}images/goshala/feed-alley-perspective.jpg`,
    },
    {
      id: 'shelter',
      title: 'Architecture of Well-Being',
      tagline: 'High vaulted eaves, natural airflow',
      description:
        'Sheds are designed with open gables to channel Kerala’s gentle breezes, insulated roofing to reduce heat stress, and hygienic flooring.',
      principle: 'Living space must honor the natural posture and cooling needs of zebu cattle.',
      image: `${base}images/goshala/modern-barn-panorama.jpg`,
    },
    {
      id: 'human-touch',
      title: 'Human Connection',
      tagline: 'Familiar voices, patient hands',
      description:
        'Our handlers live nearby in Thiruvalla and form lifelong bonds with the herd. Every cow is addressed by name and treated with patience.',
      principle: 'Gentleness in everyday interaction removes fear and builds calm contentment.',
      image: `${base}images/goshala/caretaker-cow-bond.jpg`,
    },
    {
      id: 'hygiene',
      title: 'Purity & Cleanliness',
      tagline: 'Washed daily, disinfected naturally',
      description:
        'Continuous fresh water circulation, systematic biosecurity, and natural neem-based repellent treatments safeguard herd health.',
      principle: 'Preventative care and pristine hygiene replace unnecessary medical interventions.',
      image: `${base}images/goshala/kerala-cows-water-trough.jpg`,
    },
  ],

  traditionModern: {
    headline: 'Tradition × Modern Farming',
    subheadline: 'Two philosophies merging into one harmonious agricultural ecosystem.',
    traditionTitle: 'TRADITION',
    traditionPoints: [
      {
        title: 'Indian Cattle Heritage',
        detail: 'Respecting indigenous Bos indicus genetics refined over thousands of years for resilience, intelligence, and climate adaptation.',
      },
      {
        title: 'Kerala’s Agricultural Culture',
        detail: 'Carrying forward Central Travancore’s time-tested respect for cattle as sacred protectors of family and soil fertility.',
      },
      {
        title: 'Generational Knowledge',
        detail: 'Understanding cattle temperament through patient observation, seasonal rhythms, and compassionate daily care.',
      },
    ],
    modernTitle: 'MODERN PRACTICE',
    modernPoints: [
      {
        title: 'Structured Cattle Management',
        detail: 'Digital health logs, biometric tracking, and temperature regulation tailored to individual animal requirements.',
      },
      {
        title: 'Modern Infrastructure',
        detail: 'Engineered cross-ventilation sheds, rubber shock-absorbing flooring, automatic waterers, and biosecure perimeters.',
      },
      {
        title: 'Responsible Resource Management',
        detail: 'Integrated waste recycling, vermicomposting for organic farm enrichment, and rainwater conservation systems.',
      },
    ],
  },

  gallery: [
    {
      id: 'gal-1',
      title: 'Gir Calves in Open Shed',
      category: 'Cattle',
      caption: 'Young Gir calves resting peacefully in airy, high-roof stalls at Thiruvalla.',
      image: `${base}images/goshala/gir-calves-shed.jpg`,
      aspect: 'landscape',
    },
    {
      id: 'gal-2',
      title: 'Kerala Pastoral Harmony',
      category: 'Landscape',
      caption: 'Lush tropical greenery where indigenous cattle and egrets dwell in peaceful symbiosis.',
      image: `${base}images/goshala/kerala-pastoral-egret.jpg`,
      aspect: 'square',
    },
    {
      id: 'gal-3',
      title: 'Maternal Nursing Bond',
      category: 'Daily Care',
      caption: 'Calves are nurtured unhurriedly on clean straw, prioritizing natural maternal affection.',
      image: `${base}images/goshala/mother-nursing-calf.jpg`,
      aspect: 'landscape',
    },
    {
      id: 'gal-4',
      title: 'Caretaker’s Gentle Touch',
      category: 'Daily Care',
      caption: 'Patient daily interaction and gentle touch create calm, trusting relationships.',
      image: `${base}images/goshala/caretaker-cow-bond.jpg`,
      aspect: 'landscape',
    },
    {
      id: 'gal-5',
      title: 'Shed Feeding Canal',
      category: 'Architecture',
      caption: 'Open vaulted architecture featuring continuous clean water channels and fresh fodder alleys.',
      image: `${base}images/goshala/goshala-shed-feeding.jpg`,
      aspect: 'square',
    },
    {
      id: 'gal-6',
      title: 'Continuous Fresh Hydration',
      category: 'Daily Care',
      caption: 'Pure well-water continually accessible through hygienic drinking troughs.',
      image: `${base}images/goshala/kerala-cows-water-trough.jpg`,
      aspect: 'landscape',
    },
    {
      id: 'gal-7',
      title: 'Hygienic Milking Station',
      category: 'Architecture',
      caption: 'Modern stainless-steel dairy standards ensuring absolute hygiene and gentle handling.',
      image: `${base}images/goshala/milking-station-sanctuary.jpg`,
      aspect: 'portrait',
    },
    {
      id: 'gal-8',
      title: 'Calf Resting on Clean Bedding',
      category: 'Cattle',
      caption: 'Low-stress sanctum encouraging natural rumination and deep resting cycles.',
      image: `${base}images/goshala/resting-calf-straw.jpg`,
      aspect: 'landscape',
    },
  ],

  videos: {
    channelUrl: 'https://www.youtube.com/@mahalekshmigoshala1265',
    channelHandle: '@mahalekshmigoshala1265',
    featuredVideo: {
      id: 'feat-1',
      title: 'Mahalekshmi Goshala',
      duration: '0:58',
      description: 'An intimate cinematic glimpse into our daily cattle routines, open sheds, and lush surroundings in Thiruvalla.',
      youtubeId: 'tf10eWe0gFU',
      thumbnail: `${base}images/hero-yt-poster.jpg`,
    },
    supportingVideos: [
      {
        id: 'sup-1',
        title: 'Morning Fodder & Nutrition Routine',
        duration: '3:20',
        description: 'How green fodder and natural balances are prepared fresh every sunrise.',
        youtubeId: 'dQw4w9WgXcQ',
        thumbnail: `${base}images/goshala/modern-feed-barrier.jpg`,
      },
      {
        id: 'sup-2',
        title: 'Caretaker Bonds & Daily Observation',
        duration: '5:45',
        description: 'Exploring the gentle daily handling and care protocols at the farm.',
        youtubeId: 'dQw4w9WgXcQ',
        thumbnail: `${base}images/goshala/caretaker-cow-bond.jpg`,
      },
      {
        id: 'sup-3',
        title: 'Evening Peace at Thiruvalla',
        duration: '2:50',
        description: 'Watch the herd settle into clean resting quarters as twilight falls over the farm.',
        youtubeId: 'dQw4w9WgXcQ',
        thumbnail: `${base}images/goshala/resting-calf-straw.jpg`,
      },
    ],
  },

  visitInformation: {
    headline: 'Come experience the Goshala.',
    supportingCopy:
      'Step away from the city and into a place where life moves at a different pace. Breathe the clean air, listen to the gentle rhythms of the herd, and reconnect with Kerala’s pastoral soul.',
    visitingProtocol:
      'To maintain a peaceful, stress-free sanctuary for the animals, visitor walkthroughs are coordinated by prior inquiry.',
    locationNote: 'Located at Mundiappally, just 10 minutes from Thiruvalla town center.',
  },
};
