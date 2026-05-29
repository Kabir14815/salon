import './TrustBar.css'

const highlights = [
  'Since 1975',
  'Certified Stylists',
  'Premium Products',
  'Unisex Salon',
  'Sector 15, Panchkula',
]

export default function TrustBar() {
  return (
    <div className="trust-bar" aria-label="Salon highlights">
      <div className="trust-bar-inner container">
        <ul className="trust-bar-list">
          {highlights.map((item) => (
            <li key={item} className="trust-bar-item">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
