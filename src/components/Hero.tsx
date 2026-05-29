import { motion } from 'framer-motion'
import SalonImage from './SalonImage'
import HeroReel from './HeroReel'
import HeroParticles from './HeroParticles'
import { salonImages, salonInfo } from '../data/images'
import './Hero.css'

function IconStar() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z" />
    </svg>
  )
}

function IconClients() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

function IconHeritage() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 3l2.2 4.46 4.93.72-3.57 3.48.84 4.91L12 14.9l-4.4 2.67.84-4.91L4.87 8.18l4.93-.72L12 3z" />
    </svg>
  )
}

function IconCertified() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 2l3 2 3.5-.5.5 3.5 2.5 2.5-2.5 2.5-.5 3.5L15 20l-3 2-3-2-3.5.5-.5-3.5-2.5-2.5 2.5-2.5.5-3.5L9 4l3-2z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  )
}

const trustItems = [
  { icon: IconStar, value: '4.9', label: 'Google Rating' },
  { icon: IconClients, value: '10,000+', label: 'Happy Clients' },
  { icon: IconHeritage, value: 'Since 1975', label: 'Trusted Heritage' },
  { icon: IconCertified, value: 'Certified', label: 'Professionals' },
]

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <SalonImage
          src={salonImages.heroMain}
          alt=""
          className="hero-bg-image"
          loading="eager"
          fetchPriority="high"
        />
        <div className="hero-overlay" />
        <HeroParticles />
      </div>

      <div className="hero-inner container">
        <div className="hero-grid">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="hero-eyebrow">Bridal · Hair · Skin · Luxury Grooming</p>

            <h1 className="hero-title">
              Because You Deserve
              <br />
              <em>To Feel Beautiful</em>
            </h1>

            <p className="hero-desc">
              Luxury beauty experience in Panchkula — expert bridal, hair, skin &amp; grooming
              at {salonInfo.shortName} since {salonInfo.established}.
            </p>

            <div className="hero-trust">
              {trustItems.map((item) => (
                <div key={item.label} className="hero-trust-item">
                  <span className="hero-trust-icon">
                    <item.icon />
                  </span>
                  <span className="hero-trust-text">
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </span>
                </div>
              ))}
            </div>

            <div className="hero-actions">
              <a href="#booking" className="hero-btn-primary">
                <span>Book Appointment</span>
              </a>
              <a href="#services" className="hero-btn-secondary">
                Explore Services
              </a>
            </div>

            <p className="hero-location">
              <span aria-hidden="true">📍</span>
              <span>Sector 15, Panchkula · {salonInfo.phone}</span>
            </p>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <HeroReel />
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        className="hero-scroll"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2.2, repeat: Infinity }}
        aria-label="Scroll to about"
      >
        Scroll
      </motion.a>
    </section>
  )
}
