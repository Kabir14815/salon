import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { salonImages } from '../data/images'
import './About.css'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container about-grid">
        <motion.div
          className="about-visual"
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="about-frame">
            <img src={salonImages.about} alt="Taj Unisex Salon studio" />
          </div>
          <div className="about-secondary-image">
            <img src={salonImages.heroSecondary} alt="Hair styling session" loading="lazy" />
          </div>
          <div className="about-float-card">
            <span className="float-number">★ 4.9</span>
            <span className="float-text">Client Rating</span>
          </div>
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="section-label">Our Story</p>
          <h2 className="section-title">
            A Legacy of <em>Luxury</em>
          </h2>
          <div className="gold-line" />
          <p className="about-text">
            Nestled in the heart of Sector 15, Panchkula, Taj Unisex Beauty Salon has been
            the destination of choice for those who demand nothing but the finest in grooming
            and beauty care.
          </p>
          <p className="about-text">
            Our team of skilled artisans combines international techniques with personalized
            attention, creating transformative experiences in an atmosphere of understated elegance.
            From everyday grooming to your most special occasions — we craft perfection.
          </p>

          <div className="about-features">
            {[
              'Certified Professionals',
              'Premium Product Lines',
              'Hygienic & Modern Facility',
              'Unisex — All Welcome',
            ].map((feature) => (
              <div key={feature} className="about-feature">
                <span className="feature-dot" />
                {feature}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
