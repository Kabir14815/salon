import './HeroEmblem.css'

const RAYS = 32

export default function HeroEmblem() {
  return (
    <div className="hero-emblem" aria-hidden="true">
      <svg viewBox="0 0 220 220" className="emblem-svg">
        <defs>
          <path
            id="emblemCircle"
            d="M 110,110 m -82,0 a 82,82 0 1,1 164,0 a 82,82 0 1,1 -164,0"
          />
        </defs>

        <circle cx="110" cy="110" r="104" className="emblem-ring emblem-ring-outer" />
        <circle cx="110" cy="110" r="88" className="emblem-ring emblem-ring-inner" />

        <text className="emblem-text">
          <textPath href="#emblemCircle" startOffset="0%">
            TAJ UNISEX BEAUTY SALON · THIS SPACE WAS MADE FOR YOU ·
          </textPath>
        </text>

        <g className="emblem-sunburst">
          {Array.from({ length: RAYS }, (_, i) => {
            const angle = (i / RAYS) * Math.PI * 2
            const inner = 18 + (i % 3) * 4
            const outer = 52 + (i % 4) * 8
            const x1 = 110 + Math.cos(angle) * inner
            const y1 = 110 + Math.sin(angle) * inner
            const x2 = 110 + Math.cos(angle) * outer
            const y2 = 110 + Math.sin(angle) * outer
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                className="emblem-ray"
                style={{ opacity: 0.35 + (i % 5) * 0.1 }}
              />
            )
          })}
        </g>

        <circle cx="110" cy="110" r="14" className="emblem-core" />
        <circle cx="110" cy="110" r="6" className="emblem-core-inner" />
      </svg>
    </div>
  )
}
