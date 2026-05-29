/** Mix of real Taj Salon photos and premium AI imagery */
const ai = {
  hero: '/salon/hero-main.png',
  interior: '/salon/interior.png',
  hair: '/salon/hair.png',
  grooming: '/salon/grooming.png',
  bridal: '/salon/bridal.png',
  spa: '/salon/spa.png',
  nails: '/salon/nails.png',
  logo: '/salon/logo.png',
} as const

const real = {
  hair: '/salon/real-hair.png',
  bridalStudio: '/salon/real-bridal-studio.png',
  reception: '/salon/real-reception.png',
  bridal: '/salon/real-bridal.png',
  events: '/salon/real-events.png',
} as const

export const fallbackImage = real.reception

export const salonImages = {
  heroMain: real.bridal,
  heroMobile: real.bridal,
  heroSecondary: real.bridalStudio,
  heroAccent: real.hair,
  heroReel: [
    {
      src: real.bridal,
      alt: 'Traditional bridal makeover at Taj Salon',
      label: 'Bridal Transformation',
      tag: 'Bridal Glam',
    },
    {
      src: real.hair,
      alt: 'Signature ombre hair styling result',
      label: 'Hair Color & Styling',
      tag: 'Before & After',
    },
    {
      src: real.bridalStudio,
      alt: 'Bridal styling inside Taj Salon studio',
      label: 'Luxury Salon Studio',
      tag: 'Our Studio',
    },
    {
      src: ai.bridal,
      alt: 'Bridal makeup artistry',
      label: 'Bridal Makeover',
      tag: 'Makeup Artistry',
    },
    {
      src: ai.hair,
      alt: 'Professional hairstyling close-up',
      label: 'Expert Hair Styling',
      tag: 'Signature Look',
    },
    {
      src: ai.interior,
      alt: 'Elegant luxury salon interior',
      label: 'Premium Interiors',
      tag: 'Salon Experience',
    },
  ],
  about: real.reception,
  aboutSecondary: real.bridalStudio,
  logo: ai.logo,
  servicesBanner: [real.hair, real.bridal, ai.grooming],
  experience: {
    banner: real.bridalStudio,
    consultation: real.reception,
    plan: real.hair,
    treatment: ai.spa,
    reveal: real.bridal,
  },
  booking: {
    main: real.reception,
    accent: real.bridal,
  },
  contact: {
    main: real.bridalStudio,
    accent: real.reception,
  },
  services: {
    hair: real.hair,
    skin: ai.spa,
    grooming: ai.grooming,
    spa: ai.spa,
    bridal: real.bridal,
    nails: ai.nails,
  },
  gallery: [
    { src: real.reception, alt: 'Taj Salon reception — Sector 15, Panchkula', label: 'Our Salon' },
    { src: real.bridalStudio, alt: 'Bridal makeover at Taj Salon', label: 'Bridal Studio' },
    { src: real.hair, alt: 'Signature ombre and styling', label: 'Hair Color' },
    { src: real.bridal, alt: 'Traditional bridal makeup and styling', label: 'Bridal Glam' },
    { src: real.events, alt: 'Creative makeup for events and parties', label: 'Event Makeup' },
    { src: ai.grooming, alt: 'Men grooming services', label: 'Grooming' },
    { src: ai.spa, alt: 'Spa and facial treatments', label: 'Skin & Spa' },
    { src: ai.nails, alt: 'Luxury nail art', label: 'Nail Art' },
  ],
} as const

export const salonInfo = {
  name: 'Taj Unisex Beauty Salon',
  shortName: 'Taj Salon',
  established: '1975',
  address:
    'SCO 14, Taj Unisex Salon, First Floor, Main Market Road, Sector 15, Panchkula, Haryana 134113',
  phone: '099153 11821',
  phoneLink: 'tel:+919915311821',
  googleMaps:
    'https://www.google.com/maps/search/?api=1&query=SCO+14+Taj+Unisex+Salon+Sector+15+Panchkula+Haryana+134113',
} as const

export function imageUrl(path: string): string {
  return path
}
