// Source: Mark's Upwork freelancer profile, pulled 2026-11-09.
export const profile = {
  name: 'Mark Price',
  role: 'Full-stack WordPress developer',
  email: 'markpricel07@gmail.com',
  upwork: 'https://www.upwork.com/freelancers/~016dc487e08e9bf3a6',
  location: 'Michigan, United States',
  timezone: 'US Central time',
  availability: '30+ hours a week',
  education: "BSc Computer Science, University of Michigan-Flint",
  headline: 'Websites for hotels, studios and luxury shops that stay fast on a phone.',
  intro:
    'I build and fix websites for businesses whose photography does the selling, custom-coded or on WordPress. Easy for your team to update, and never broken by the next plugin update.',
};

export const services = [
  {
    title: 'Custom code',
    tools: 'PHP · JavaScript · HTML · CSS',
    body: 'Hand-written themes, plugins and features in PHP, JavaScript, HTML and CSS when a page builder can’t do the job, including integrations with outside services.',
  },
  {
    title: 'WordPress builds',
    tools: 'Custom themes · Elementor Pro · WPBakery · Block editor',
    body: 'Custom themes, Elementor and Elementor Pro, WPBakery and the block editor. Portfolio sites for designers and architects, hotel sites, landing pages.',
  },
  {
    title: 'WooCommerce stores',
    tools: 'WooCommerce · WooPayments · Stripe',
    body: 'Products, variations and swatches, checkout with WooPayments or Stripe, shipping and tax, and slow product or cart pages made quick.',
  },
  {
    title: 'Multilingual sites',
    tools: 'Polylang · TranslatePress · WPML',
    body: 'Polylang, TranslatePress and WPML, with language switchers, translated menus and hreflang set up correctly.',
  },
  {
    title: 'Speed and Core Web Vitals',
    tools: 'FlyingPress · NitroPack · WP Rocket · PageSpeed',
    body: 'Image-heavy sites made fast: image sizes, lazy loading, caching with FlyingPress, NitroPack or WP Rocket. Measured on PageSpeed before and after.',
  },
  {
    title: 'Fixes, security and care',
    tools: 'Staging · Backups · Malware scans · Updates',
    body: 'Broken layouts after an update, white screens, forms that stopped sending, PHP upgrades, malware clean-ups and monthly maintenance.',
  },
];

// Employment history from the Upwork profile (contract roles; Upwork lists no dates).
// `slug` links the row to its case study.
export const experience = [
  { company: 'Freelance on Upwork', initials: 'MP', role: 'Full-stack WordPress developer', tag: 'Available', now: true },
  { company: 'Huka Lodge', initials: 'HL', role: 'WordPress developer · custom theme, speed', tag: 'Contract', slug: 'huka-lodge' },
  { company: 'South Harlow Interiors', initials: 'SH', role: 'WordPress developer · block theme, speed', tag: 'Contract', slug: 'south-harlow-interiors' },
  { company: 'Lodge Milano & Co', initials: 'LM', role: 'WooCommerce developer · store, checkout', tag: 'Contract', slug: 'lodge-milano' },
  { company: 'NICOLEHOLLIS', initials: 'NH', role: 'WordPress developer · custom theme, galleries', tag: 'Contract', slug: 'nicolehollis' },
  { company: 'Frolov Jewels', initials: 'FJ', role: 'WordPress developer · WooCommerce, multilingual', tag: 'Contract', slug: 'frolov-jewels' },
  { company: 'Rozana Montiel', initials: 'RM', role: 'WordPress developer · Elementor Pro, bilingual', tag: 'Contract', slug: 'rozana-montiel' },
];

// A real sequence, so it is numbered on the page. Four steps keep the 2x2 grid even.
export const process = [
  {
    title: 'Backup and baseline',
    body: 'A full copy of your site is saved, and speed and layout are measured, before anything changes.',
    when: 'Before any change',
    what: 'Safety',
  },
  {
    title: 'Build on staging',
    body: 'Every change is made on a private copy of your site, never on the live one.',
    when: 'During the work',
    what: 'Staging',
  },
  {
    title: 'Test on real screens',
    body: 'Checked on phone and desktop, and measured again, before it goes live.',
    when: 'Before launch',
    what: 'Testing',
  },
  {
    title: 'Plain-English handover',
    body: 'You get a short write-up of what changed and how your team updates it.',
    when: 'After launch',
    what: 'Handover',
  },
];

// Included in every engagement (from the "How I work" section of the Upwork profile).
export const included = [
  'Backup before any change',
  'Baseline measured first',
  'Private staging site',
  'Phone and desktop testing',
  'Plain-English handover',
  'Fixed-price milestones',
];

export const reviews = [
  {
    quote:
      'Mark did an excellent job resolving the mobile responsiveness issue on our WordPress website. He communicated clearly throughout the project, understood the requirements, and kept the changes focused on the specific problem.',
    highlight: 'kept the changes focused on the specific problem',
    source: 'Tech Hub',
    initials: 'TH',
    project: 'WordPress mobile layout fix',
  },
  {
    quote:
      'Mark handled my WordPress website migration professionally. He communicated clearly, followed the agreed scope, and ensured the website’s existing design, content, and functionality were preserved.',
    highlight: 'followed the agreed scope',
    source: 'Big Sam Infotech',
    initials: 'BS',
    project: 'WordPress migration to new hosting',
  },
];

export const certificates = [
  'Meta Front-End Developer Professional Certificate',
  'Certified in Cybersecurity (CC)',
  'Technical SEO Certification',
  'Google Analytics Certification',
  'WebOps Certification',
  'Responsive Web Design',
  'JavaScript Algorithms and Data Structures',
  'TroubleshootWoo: WooCommerce Debugging and Store Recovery',
  'Yoast SEO for WordPress Training',
  'SEO Certification',
];
