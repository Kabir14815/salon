import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="footer-name">Taj Unisex Beauty Salon</span>
            <span className="footer-tagline">A salon that feels like home</span>
          </div>
        </div>

        <div className="footer-links">
          <a href="#booking">Book Now</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="tel:+919915311821">099153 11821</a>
        </div>

        <div className="footer-bottom">
          <p>&copy; {year} Taj Unisex Beauty Salon. All rights reserved.</p>
          <p className="footer-location">Sector 15, Panchkula, Haryana</p>
        </div>
      </div>
    </footer>
  )
}
