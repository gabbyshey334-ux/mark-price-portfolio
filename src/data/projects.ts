// Source: Upwork portfolio + employment history, pulled 2026-11-09.
// Images: covers captured from each live site (1200x1220 desktop viewport,
// banners hidden), saved as public/work/<slug>/cover.webp at 800x813.
// Results: add only real, measured numbers (PageSpeed before/after).

export interface Project {
  slug: string;
  client: string;
  sector: string;
  place?: string;
  title: string;
  summary: string;
  built: string[];
  stack: string[];
  image?: string;
  /** Card colour: placeholder fill and badge tint until a screenshot is added. */
  tone: string;
  url?: string;
  /** Wide cover for the case page (1200x840). */
  wide?: string;
  /** Case-study copy, drawn from the Upwork portfolio descriptions. */
  story: { heading: string; intro: string; subheading: string; body: string };
  results?: { label: string; before: string; after: string }[];
}

export const projects: Project[] = [
  {
    slug: 'huka-lodge',
    wide: '/work/huka-lodge/wide.webp',
    story: {
      heading: "Big photography, still fast on a phone",
      intro: "Huka Lodge sells a riverside stay through its photography, so the pages had to stay image-led without keeping guests waiting on mobile.",
      subheading: "A custom theme with a speed layer",
      body: "I built a custom WordPress theme around large images and added a NitroPack speed layer, so full-width photography loads quickly on a phone.",
    },
    url: 'https://hukalodge.com',
    image: '/work/huka-lodge/cover.webp',
    tone: '#3f5a4e',
    client: 'Huka Lodge',
    sector: 'Hotel',
    place: 'Taupo, New Zealand',
    title: 'A five-star lodge whose photography stays fast on a phone',
    summary:
      'Custom WordPress theme with image-led pages and a NitroPack speed layer, so large riverside photography loads quickly on mobile.',
    built: ['Custom WordPress theme', 'Image-led page templates', 'NitroPack speed layer'],
    stack: ['WordPress', 'PHP', 'NitroPack'],
  },
  {
    slug: 'south-harlow-interiors',
    wide: '/work/south-harlow-interiors/wide.webp',
    story: {
      heading: "A studio site with two moods",
      intro: "South Harlow Interiors works across San Diego and Jacksonville and wanted a site as calm and considered as its rooms.",
      subheading: "Block theme, light and dark",
      body: "A custom block theme with a light and dark toggle, smooth page transitions between projects, and FlyingPress caching to keep every page quick.",
    },
    url: 'https://southharlow.com',
    image: '/work/south-harlow-interiors/cover.webp',
    tone: '#b39d84',
    client: 'South Harlow Interiors',
    sector: 'Interior design',
    place: 'San Diego and Jacksonville',
    title: 'An interior studio site with light and dark modes',
    summary:
      'Custom block theme with a light and dark toggle, smooth page transitions and FlyingPress caching.',
    built: ['Custom block theme', 'Light and dark toggle', 'Page transitions', 'FlyingPress caching'],
    stack: ['WordPress block editor', 'FlyingPress'],
  },
  {
    slug: 'lodge-milano',
    wide: '/work/lodge-milano/wide.webp',
    story: {
      heading: "Luxury pieces, a simple checkout",
      intro: "Lodge Milano & Co sells authenticated luxury fashion, watches and bags, so the store had to feel premium and make buying easy.",
      subheading: "A custom WooCommerce theme",
      body: "A custom WooCommerce theme for the whole store, with WooPayments handling card payments at checkout.",
    },
    url: 'https://lodgemilanoandco.com',
    image: '/work/lodge-milano/cover.webp',
    tone: '#2d2b33',
    client: 'Lodge Milano & Co',
    sector: 'Luxury fashion',
    title: 'A luxury fashion store with a clean checkout',
    summary: 'Custom WooCommerce theme for an authenticated luxury fashion house, with WooPayments checkout.',
    built: ['Custom WooCommerce theme', 'WooPayments checkout'],
    stack: ['WooCommerce', 'WooPayments'],
  },
  {
    slug: 'nicolehollis',
    wide: '/work/nicolehollis/wide.webp',
    story: {
      heading: "Galleries first",
      intro: "NICOLEHOLLIS is a San Francisco interior design studio whose work is best seen at full size.",
      subheading: "A theme built around big galleries",
      body: "A custom theme built around large project galleries, with Google Analytics tracking so the studio can see which projects people spend time on.",
    },
    url: 'https://www.nicolehollis.com',
    image: '/work/nicolehollis/cover.webp',
    tone: '#8a7867',
    client: 'NICOLEHOLLIS',
    sector: 'Interior design',
    place: 'San Francisco',
    title: 'A design studio portfolio built around large galleries',
    summary: 'Custom theme built around large project galleries, with Google Analytics tracking.',
    built: ['Custom theme', 'Project galleries', 'Google Analytics'],
    stack: ['WordPress', 'PHP'],
  },
  {
    slug: 'frolov-jewels',
    wide: '/work/frolov-jewels/wide.webp',
    story: {
      heading: "One-of-a-kind pieces, many languages",
      intro: "Frolov Jewels makes handmade Ukrainian jewellery and ships worldwide, so the store needed to work in more than one language.",
      subheading: "WooCommerce with Polylang",
      body: "An Elementor and WooCommerce store translated with Polylang, with colour and size swatches and card payments.",
    },
    url: 'https://frolovjewels.com',
    image: '/work/frolov-jewels/cover.webp',
    tone: '#6e4b5a',
    client: 'Frolov Jewels',
    sector: 'Jewellery',
    title: 'A multilingual store for handmade jewellery',
    summary:
      'Elementor and WooCommerce store in several languages with Polylang, colour and size swatches and card payments.',
    built: ['WooCommerce store', 'Polylang translations', 'Colour and size swatches', 'Card payments'],
    stack: ['Elementor', 'WooCommerce', 'Polylang'],
  },
  {
    slug: 'rozana-montiel',
    wide: '/work/rozana-montiel/wide.webp',
    story: {
      heading: "One portfolio, two languages",
      intro: "Rozana Montiel Estudio de Arquitectura in Mexico City publishes its projects for Spanish and English readers.",
      subheading: "Elementor Pro with TranslatePress",
      body: "An Elementor Pro portfolio published in both languages with TranslatePress, so every project reads naturally for both audiences.",
    },
    url: 'https://rozanamontiel.com',
    image: '/work/rozana-montiel/cover.webp',
    tone: '#9a5f4a',
    client: 'Rozana Montiel',
    sector: 'Architecture',
    place: 'Mexico City',
    title: 'An architecture portfolio in Spanish and English',
    summary: 'Elementor Pro portfolio published in two languages with TranslatePress.',
    built: ['Elementor Pro portfolio', 'Bilingual with TranslatePress'],
    stack: ['Elementor Pro', 'TranslatePress'],
  },
  {
    slug: 'kestie-lane-studio',
    wide: '/work/kestie-lane-studio/wide.webp',
    story: {
      heading: "A site the studio runs itself",
      intro: "Kestie Lane Studio, an interior studio in Melbourne, wanted to add and update projects without calling a developer.",
      subheading: "A custom theme on WPBakery",
      body: "A custom theme set up on WPBakery, so the team edits and publishes its own projects.",
    },
    url: 'https://www.kestielanestudio.com',
    image: '/work/kestie-lane-studio/cover.webp',
    tone: '#9d977f',
    client: 'Kestie Lane Studio',
    sector: 'Interior design',
    place: 'Melbourne',
    title: 'A studio site the team updates without code',
    summary: 'Custom theme on WPBakery, so the studio adds and edits projects themselves.',
    built: ['Custom theme', 'WPBakery editing setup'],
    stack: ['WordPress', 'WPBakery'],
  },
];
