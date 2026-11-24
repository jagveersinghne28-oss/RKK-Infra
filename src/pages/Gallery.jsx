import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import { GALLERY } from '../data/gallery.js'

const pad = (n) => String(n).padStart(2, '0')

export default function Gallery() {
  const total = GALLERY.length

  return (
    <div className="gallery">
      <div className="gl-meta">
        <div className="container gl-meta__inner">
          <span className="mono">
            <i className="dot" /> ARCHIVE VAULT // SEC-09 · INDEX {total}-FRAME MASTER REPOSITORY
          </span>
          <span className="mono gl-meta__mid">DATUM: 31°06&apos;N / 77°10&apos;E — GLOBAL REGISTRY</span>
          <span className="tag tag--sand">SYS.VER: 4.8.1-EDITORIAL</span>
        </div>
      </div>

      <section className="gl-hero">
        <div className="container">
          <span className="tag tag--sand-2 gl-hero__tag">
            <Icon name="camera" className="icon icon--xs" /> ARCHIVAL DOSSIER // VISUAL CHRONICLE · 1990 — PRESENT
          </span>
          <h1 className="h-display gl-hero__title">
            Moments from the Underground &amp; the Global Stage
          </h1>
          <p className="lead gl-hero__lead">
            Over three and a half decades documenting breakthrough excavations, mega-infrastructure field milestones,
            international delegations across the World Tunnel Congress, technical keynote forums, and collaborative
            engineering moments across India and worldwide.
          </p>
        </div>
      </section>

      <section className="gl-grid-wrap">
        <div className="container">
          <ul className="gl-grid">
            {GALLERY.map((g, i) => (
              <li key={g.src} className="gl-card">
                <div className="gl-card__head">
                  <span className="mono">
                    <i className="dot dot--sm" /> ARCHIVE REF: RKK-PL-{pad(i + 1)}/{pad(total)}
                  </span>
                  <span className="tag tag--sand gl-card__slot">FRAME {pad(i + 1)}</span>
                </div>
                <a
                  className="gl-card__media"
                  href={g.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open full-size photo: ${g.caption}`}
                >
                  <img src={g.src} alt={g.caption} loading="lazy" decoding="async" />
                  <span className="gl-card__badge">BOOK LAUNCH ARCHIVE</span>
                </a>
                <p className="gl-card__caption">{g.caption}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="gl-epilogue">
        <div className="container gl-epilogue__inner">
          <div>
            <span className="tag tag--dark gl-epilogue__tag">
              <Icon name="mountain" className="icon icon--xs" /> EPILOGUE &amp; PERSPECTIVE
            </span>
            <h2 className="gl-epilogue__title">&ldquo;A Visual Record of Ground Conquered &amp; Knowledge Shared.&rdquo;</h2>
            <p className="gl-epilogue__text">
              Every breakthrough is fundamentally a collaborative victory over geological chaos. This visual archive
              preserves the faces, the rockfaces, and the international consensus that built tomorrow&apos;s sub-surface
              passages.
            </p>
          </div>
          <div className="gl-epilogue__actions">
            <Link to="/journey" className="btn btn--accent btn--lg">
              Explore the Journey <Icon name="arrow" />
            </Link>
            <Link to="/projects" className="btn btn--outline-light btn--lg">
              View Mega Projects <Icon name="anchor" className="icon icon--sm" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
