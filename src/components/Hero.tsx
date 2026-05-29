import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import HeroEmblem from './HeroEmblem'
import { salonImages, salonInfo } from '../data/images'
import './Hero.css'

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <picture>
          <source media="(max-width: 768px)" srcSet={salonImages.heroMobile} />
          <img
            src={salonImages.heroMain}
            alt="Taj Unisex Beauty Salon interior"
            className="hero-bg-image"
            style={{ transform: `scale(1.08) translateY(${scrollY * 0.15}px)` }}
          />
        </picture>
        <div className="hero-overlay" />
      </div>

      <div className="hero-center">
        <motion.div
          className="hero-brand"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <HeroEmblem />

          <p className="hero-tagline">A Salon That Feels Like Home</p>

          <p className="hero-welcome">
            Welcome to {salonInfo.name}. Experience premium hair, skin &amp; grooming
            in a warm, luxurious space crafted just for you.
          </p>

          <p className="hero-address">{salonInfo.address}</p>

          <div className="hero-actions">
            <a href="#booking" className="btn-ghost btn-ghost-filled">
              Book Appointment
            </a>
            <a href={salonInfo.phoneLink} className="btn-ghost">
              Call Us
            </a>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#services"
        className="hero-scroll"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2.2, repeat: Infinity }}
        aria-label="Scroll to services"
      >
        <span />
      </motion.a>
    </section>
  )
}
