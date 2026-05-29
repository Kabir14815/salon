import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { salonImages } from '../data/images'
import './Experience.css'

const steps = [
  {
    num: '01',
    title: 'Consultation',
    desc: 'We listen to your vision and assess your unique needs with expert care.',
    image: salonImages.experience.consultation,
  },
  {
    num: '02',
    title: 'Personalized Plan',
    desc: 'A bespoke treatment plan crafted exclusively for your style and preferences.',
    image: salonImages.experience.plan,
  },
  {
    num: '03',
    title: 'Premium Treatment',
    desc: 'Relax as our artisans work their magic with world-class products.',
    image: salonImages.experience.treatment,
  },
  {
    num: '04',
    title: 'The Reveal',
    desc: 'Walk out transformed — confident, radiant, and absolutely stunning.',
    image: salonImages.experience.reveal,
  },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="experience" ref={ref}>
      <div className="container">
        <motion.div
          className="experience-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="section-label">The Journey</p>
          <h2 className="section-title">
            Your <em>Experience</em>
          </h2>
          <div className="gold-line" />
        </motion.div>

        <motion.div
          className="experience-banner"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img src={salonImages.experience.banner} alt="Salon experience at Taj" loading="lazy" />
          <div className="experience-banner-text">
            <span>Luxury grooming in every detail</span>
          </div>
        </motion.div>

        <div className="experience-timeline">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className="experience-step"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="step-image">
                <img src={step.image} alt={step.title} loading="lazy" />
                <span className="step-num-badge">{step.num}</span>
              </div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="experience-cta"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p>Ready to experience luxury grooming?</p>
          <a href="#booking" className="btn-primary">
            <span>Book Your Slot</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
