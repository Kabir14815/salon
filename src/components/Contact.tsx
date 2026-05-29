import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { salonImages, salonInfo } from '../data/images'
import SalonImage from './SalonImage'
import './Contact.css'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="container">
        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="section-label">Visit Us</p>
            <h2 className="section-title">
              Find <em>Your Sanctuary</em>
            </h2>
            <div className="gold-line" />
            <p className="contact-intro">
              We&apos;re conveniently located on Main Market Road in Sector 15.
              Walk in or call ahead to reserve your personalized session.
            </p>

            <div className="contact-photo-row">
              <div className="contact-photo-main">
                <SalonImage src={salonImages.contact.main} alt="Taj Salon styling stations" />
              </div>
              <div className="contact-photo-accent">
                <SalonImage src={salonImages.contact.accent} alt="Salon grooming area" />
              </div>
            </div>

            <div className="contact-details">
              <a href={salonInfo.googleMaps} target="_blank" rel="noopener noreferrer" className="contact-item">
                <span className="contact-icon">◉</span>
                <div>
                  <span className="contact-label">Address</span>
                  <span className="contact-value">{salonInfo.address}</span>
                </div>
              </a>

              <a href={salonInfo.phoneLink} className="contact-item">
                <span className="contact-icon">☎</span>
                <div>
                  <span className="contact-label">Phone</span>
                  <span className="contact-value">{salonInfo.phone}</span>
                </div>
              </a>

              <div className="contact-item">
                <span className="contact-icon">◷</span>
                <div>
                  <span className="contact-label">Hours</span>
                  <span className="contact-value">Mon – Sun: 9:00 AM – 9:00 PM</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-visual"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="contact-map-image">
              <SalonImage src={salonImages.heroMain} alt="Taj Unisex Salon interior" />
              <div className="contact-map-overlay">
                <div className="map-pin">
                  <span className="pin-pulse" />
                  <span className="pin-dot" />
                </div>
                <div className="map-info">
                  <p className="map-location">Sector 15, Panchkula</p>
                  <p className="map-address">Main Market Road, First Floor</p>
                  <a href={salonInfo.googleMaps} target="_blank" rel="noopener noreferrer" className="btn-outline map-btn">
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
