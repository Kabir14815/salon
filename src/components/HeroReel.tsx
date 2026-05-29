import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SalonImage from './SalonImage'
import { salonImages } from '../data/images'
import './HeroReel.css'

const INTERVAL_MS = 4500

export default function HeroReel() {
  const [index, setIndex] = useState(0)
  const slides = salonImages.heroReel
  const slide = slides[index]

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length)
    }, INTERVAL_MS)

    return () => window.clearInterval(timer)
  }, [slides.length])

  return (
    <div className="hero-reel" aria-label="Salon transformations preview" aria-live="polite">
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.src}
          className="hero-reel-slide"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          <SalonImage
            src={slide.src}
            alt={slide.alt}
            loading={index === 0 ? 'eager' : 'lazy'}
            fetchPriority={index === 0 ? 'high' : undefined}
          />
          <div className="hero-reel-overlay" />
          <div className="hero-reel-caption">
            <span className="hero-reel-tag">{slide.tag}</span>
            <span className="hero-reel-label">{slide.label}</span>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="hero-reel-progress" aria-hidden="true">
        {slides.map((item, i) => (
          <button
            key={item.src}
            type="button"
            className={`hero-reel-dot ${i === index ? 'active' : ''}`}
            onClick={() => setIndex(i)}
            aria-label={`Show slide ${i + 1}: ${item.label}`}
          />
        ))}
      </div>
    </div>
  )
}
