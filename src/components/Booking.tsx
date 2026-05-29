import { useState, useRef, type FormEvent } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { serviceOptions } from '../data/services'
import { salonImages, salonInfo } from '../data/images'
import {
  saveBooking,
  buildWhatsAppLink,
  getTimeSlots,
  getMinDate,
  type Booking as BookingRecord,
} from '../utils/bookings'
import './Booking.css'

type FormData = {
  name: string
  phone: string
  email: string
  service: string
  date: string
  time: string
  notes: string
}

const emptyForm: FormData = {
  name: '',
  phone: '',
  email: '',
  service: serviceOptions[0],
  date: '',
  time: '',
  notes: '',
}

export default function Booking() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState<FormData>(emptyForm)
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})
  const [submitted, setSubmitted] = useState<BookingRecord | null>(null)
  const [loading, setLoading] = useState(false)

  const timeSlots = getTimeSlots()

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormData, string>> = {}

    if (!form.name.trim()) next.name = 'Please enter your name'
    if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, ''))) {
      next.phone = 'Enter a valid 10-digit mobile number'
    }
    if (!form.date) next.date = 'Please select a date'
    if (!form.time) next.time = 'Please select a time slot'

    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setLoading(true)
    setTimeout(() => {
      const booking = saveBooking({
        name: form.name.trim(),
        phone: form.phone.replace(/\s/g, ''),
        email: form.email.trim(),
        service: form.service,
        date: form.date,
        time: form.time,
        notes: form.notes.trim(),
      })
      setSubmitted(booking)
      setLoading(false)
      setForm(emptyForm)
    }, 600)
  }

  const update = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  return (
    <section id="booking" className="booking" ref={ref}>
      <div className="container booking-grid">
        <motion.div
          className="booking-info"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">Reserve Your Visit</p>
          <h2 className="section-title">
            Book an <em>Appointment</em>
          </h2>
          <div className="gold-line" />

          <div className="booking-visual">
            <div className="booking-photo-main">
              <img src={salonImages.booking.main} alt="Premium salon chair at Taj" loading="lazy" />
            </div>
            <div className="booking-photo-accent">
              <img src={salonImages.booking.accent} alt="Relaxing salon treatment" loading="lazy" />
            </div>
          </div>

          <p className="booking-intro">
            Choose your preferred service and time slot. We&apos;ll confirm your appointment
            shortly. You can also reach us directly at{' '}
            <a href={salonInfo.phoneLink}>{salonInfo.phone}</a>.
          </p>

          <div className="booking-perks">
            {[
              'Instant booking request',
              'Flexible time slots 9 AM – 9 PM',
              'Confirm via call or WhatsApp',
              'Walk-ins welcome',
            ].map((perk) => (
              <div key={perk} className="booking-perk">
                <span className="perk-dot" />
                {perk}
              </div>
            ))}
          </div>

          <div className="booking-hours">
            <strong>Opening Hours</strong>
            <span>Monday – Sunday · 9:00 AM – 9:00 PM</span>
          </div>
        </motion.div>

        <motion.div
          className="booking-form-wrap"
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                className="booking-success"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
              >
                <div className="success-icon">✓</div>
                <h3>Booking Request Sent!</h3>
                <p className="success-id">Reference: <strong>{submitted.id}</strong></p>
                <div className="success-details">
                  <p><span>Service</span>{submitted.service}</p>
                  <p><span>Date</span>{submitted.date}</p>
                  <p><span>Time</span>{submitted.time}</p>
                  <p><span>Name</span>{submitted.name}</p>
                </div>
                <p className="success-note">
                  Our team will contact you to confirm. For faster confirmation:
                </p>
                <div className="success-actions">
                  <a
                    href={buildWhatsAppLink(submitted)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <span>Confirm on WhatsApp</span>
                  </a>
                  <a href={salonInfo.phoneLink} className="btn-outline">
                    Call {salonInfo.phone}
                  </a>
                </div>
                <button
                  type="button"
                  className="book-another"
                  onClick={() => setSubmitted(null)}
                >
                  Book another appointment
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                className="booking-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      className={errors.name ? 'error' : ''}
                    />
                    {errors.name && <span className="field-error">{errors.name}</span>}
                  </div>
                  <div className="form-field">
                    <label htmlFor="phone">Mobile Number *</label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="10-digit number"
                      maxLength={10}
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value.replace(/\D/g, ''))}
                      className={errors.phone ? 'error' : ''}
                    />
                    {errors.phone && <span className="field-error">{errors.phone}</span>}
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="email">Email (optional)</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@email.com"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="service">Service *</label>
                  <select
                    id="service"
                    value={form.service}
                    onChange={(e) => update('service', e.target.value)}
                  >
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="date">Preferred Date *</label>
                    <input
                      id="date"
                      type="date"
                      min={getMinDate()}
                      value={form.date}
                      onChange={(e) => update('date', e.target.value)}
                      className={errors.date ? 'error' : ''}
                    />
                    {errors.date && <span className="field-error">{errors.date}</span>}
                  </div>
                  <div className="form-field">
                    <label htmlFor="time">Preferred Time *</label>
                    <select
                      id="time"
                      value={form.time}
                      onChange={(e) => update('time', e.target.value)}
                      className={errors.time ? 'error' : ''}
                    >
                      <option value="">Select time</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                    {errors.time && <span className="field-error">{errors.time}</span>}
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="notes">Special Requests</label>
                  <textarea
                    id="notes"
                    rows={3}
                    placeholder="Any preferences or notes for our team..."
                    value={form.notes}
                    onChange={(e) => update('notes', e.target.value)}
                  />
                </div>

                <button type="submit" className="btn-primary booking-submit" disabled={loading}>
                  <span>{loading ? 'Submitting...' : 'Book Appointment'}</span>
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
