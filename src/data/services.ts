export const serviceOptions = [
  'Hair Styling',
  'Hair Coloring',
  'Skin & Facials',
  'Grooming & Beard',
  'Spa & Wellness',
  'Bridal & Events',
  'Nail Art',
  'Kids Haircut',
  'Other',
] as const

export type ServiceOption = (typeof serviceOptions)[number]
