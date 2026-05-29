import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { salonImages } from '../data/images'
import './Services.css'

const services = [
  {
    title: 'Hair Styling',
    desc: 'Precision cuts, creative coloring, keratin treatments & bridal hair artistry by master stylists.',
    tag: 'Signature',
    image: salonImages.services.hair,
  },
  {
    title: 'Skin & Facials',
    desc: 'Luxurious facials, de-tanning, anti-aging treatments & customized skincare rituals.',
    tag: 'Premium',
    image: salonImages.services.skin,
  },
  {
    title: 'Grooming',
    desc: 'Expert beard sculpting, luxury shaves, head massages & complete grooming packages.',
    tag: 'For Him',
    image: salonImages.services.grooming,
  },
  {
    title: 'Spa & Wellness',
    desc: 'Relaxing body spa, aromatherapy, head-to-toe pampering in a serene atmosphere.',
    tag: 'Relax',
    image: salonImages.services.spa,
  },
  {
    title: 'Bridal & Events',
    desc: 'Complete bridal makeover, pre-wedding packages & special occasion glam.',
    tag: 'Exclusive',
    image: salonImages.services.bridal,
  },
  {
    title: 'Nail Art',
    desc: 'Manicure, pedicure, gel extensions & intricate nail art by skilled technicians.',
    tag: 'Trending',
    image: salonImages.services.nails,
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" className="services" ref={ref}>
      <div className="services-bg" />
      <div className="container">
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="section-label">What We Offer</p>
          <h2 className="section-title">
            Curated <em>Services</em>
          </h2>
          <div className="gold-line" />
          <p className="services-intro">
            Every service is a bespoke experience — tailored to your unique style,
            using premium products and time-honored techniques.
          </p>
        </motion.div>

        <motion.div
          className="services-showcase"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {salonImages.servicesBanner.map((src, i) => (
            <div key={src} className="showcase-item">
              <img src={src} alt={`Salon service showcase ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </motion.div>

        <div className="services-grid">
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              className="service-card"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="service-image-wrap">
                <img src={service.image} alt={service.title} loading="lazy" />
                <span className="service-tag">{service.tag}</span>
              </div>
              <div className="service-card-inner">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
                <div className="service-line" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
