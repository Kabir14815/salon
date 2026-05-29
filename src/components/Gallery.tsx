import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { salonImages } from '../data/images'
import './Gallery.css'

export default function Gallery() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [active, setActive] = useState<number | null>(null)

  return (
    <section id="gallery" className="gallery" ref={ref}>
      <div className="gallery-bg" />
      <div className="container">
        <motion.div
          className="gallery-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="section-label">Our Work</p>
          <h2 className="section-title">
            Salon <em>Gallery</em>
          </h2>
          <div className="gold-line" />
          <p className="gallery-intro">
            Step inside our world — premium interiors, expert styling, and transformations
            that speak for themselves.
          </p>
        </motion.div>

        <div className="gallery-grid">
          {salonImages.gallery.map((item, i) => (
            <motion.button
              key={item.label}
              type="button"
              className={`gallery-item ${i === 0 ? 'gallery-item-featured' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              onClick={() => setActive(i)}
            >
              <img src={item.src} alt={item.alt} loading="lazy" />
              <div className="gallery-item-overlay">
                <span className="gallery-label">{item.label}</span>
                <span className="gallery-zoom">View</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="gallery-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="lightbox-close"
                onClick={() => setActive(null)}
                aria-label="Close"
              >
                ×
              </button>
              <img
                src={salonImages.gallery[active].src.replace('w=900', 'w=1400')}
                alt={salonImages.gallery[active].alt}
              />
              <p className="lightbox-caption">{salonImages.gallery[active].label}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
