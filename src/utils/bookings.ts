export type Booking = {
  id: string
  name: string
  phone: string
  email: string
  service: string
  date: string
  time: string
  notes: string
  createdAt: string
  status: 'pending' | 'confirmed'
}

const STORAGE_KEY = 'taj-salon-bookings'

export function getBookings(): Booking[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as Booking[]) : []
  } catch {
    return []
  }
}

export function saveBooking(booking: Omit<Booking, 'id' | 'createdAt' | 'status'>): Booking {
  const entry: Booking = {
    ...booking,
    id: `TAJ-${Date.now().toString(36).toUpperCase()}`,
    createdAt: new Date().toISOString(),
    status: 'pending',
  }
  const existing = getBookings()
  localStorage.setItem(STORAGE_KEY, JSON.stringify([entry, ...existing]))
  return entry
}

export function buildWhatsAppLink(booking: Booking): string {
  const text = [
    'Hello Taj Unisex Beauty Salon,',
    '',
    'I would like to book an appointment:',
    '',
    `Name: ${booking.name}`,
    `Phone: ${booking.phone}`,
    `Service: ${booking.service}`,
    `Date: ${booking.date}`,
    `Time: ${booking.time}`,
    booking.notes ? `Notes: ${booking.notes}` : '',
    '',
    `Booking ID: ${booking.id}`,
  ]
    .filter(Boolean)
    .join('\n')

  return `https://wa.me/919915311821?text=${encodeURIComponent(text)}`
}

export function getTimeSlots(): string[] {
  const slots: string[] = []
  for (let hour = 9; hour <= 20; hour++) {
    for (const min of [0, 30]) {
      if (hour === 20 && min === 30) break
      const h = hour % 12 || 12
      const period = hour < 12 ? 'AM' : 'PM'
      const m = min.toString().padStart(2, '0')
      slots.push(`${h}:${m} ${period}`)
    }
  }
  return slots
}

export function getMinDate(): string {
  return new Date().toISOString().split('T')[0]
}
