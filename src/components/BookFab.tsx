import './BookFab.css'

export default function BookFab() {
  return (
    <a href="#booking" className="book-fab" aria-label="Book appointment">
      <svg className="book-fab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="3" y="5" width="18" height="16" rx="1" />
        <path d="M3 9h18M8 3v4M16 3v4" />
      </svg>
      <span className="book-fab-text">Book</span>
    </a>
  )
}
