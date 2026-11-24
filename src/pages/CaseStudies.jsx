import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import { CASE_STUDIES, KEYNOTE, TOTAL_DOSSIERS } from '../data/caseStudies.js'

export default function CaseStudies() {
  const [q, setQ] = useState('')
  const query = q.trim().toLowerCase()

  const shown = useMemo(
    () =>
      CASE_STUDIES.filter((c) => !query || `${c.title} ${c.summary} ${c.tags}`.toLowerCase().includes(query)),
    [query],
  )
  const showKeynote =
    !query || `${KEYNOTE.title} ${KEYNOTE.summary} tbm keynote presentation`.toLowerCase().includes(query)
  const count = shown.length + (showKeynote ? 1 : 0)

  return (
    <div className="cs">
      <div className="cs-meta">
        <div className="container cs-meta__inner">
          <span className="mono">
            <i className="dot" /> GEOTECHNICAL MONOGRAPHS // FIELD CASE STUDIES &amp; TECHNICAL INVESTIGATIONS
          </span>
          <span className="mono cs-meta__mid">FORMAT: DIGITIZED PDF REPOSITORIES</span>
          <span className="mono cs-meta__end">REGISTERED DOSSIERS: {TOTAL_DOSSIERS} TECHNICAL RECORDS</span>
        </div>
      </div>

      <section className="cs-hero">
        <div className="container cs-hero__grid">
          <div>
            <span className="tag tag--sand-2">
              <Icon name="folder" className="icon icon--xs" /> FIELD INVESTIGATIONS &amp; HYDRO CASE STUDIES //
              TECHNICAL ARCHIVE
            </span>
            <h1 className="h-display cs-hero__title">Tunnelling Case Studies &amp; Field Dossiers</h1>
            <p className="lead">
              An authoritative repository of 40 peer-reviewed case studies, geological failure investigations, NATM
              execution dossiers, and mega-cavern analyses documented across three decades of Himalayan and national
              subsurface excavations — concluding with the landmark TBM technical keynote presentation.
            </p>

            <div className="cs-hero__facts">
              <div>
                <span className="mono">CLASSIFICATION</span>
                <b>FIELD EXECUTION MONOGRAPHS &amp; SEISMIC ANALYSES</b>
              </div>
              <div>
                <span className="mono">GEOGRAPHIC &amp; STRUCTURAL SCOPE</span>
                <b>HIMALAYAS, PIR PANJAL, TEHRI, SEWA, VISHNUGAD &amp; ECoR</b>
              </div>
            </div>

            <div className="cs-search">
              <label className="cs-search__field">
                <Icon name="search" className="icon icon--sm" />
                <input
                  type="search"
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search by title, project, or geology…"
                  aria-label="Search case studies"
                />
              </label>
              <span className="tag tag--sand" aria-live="polite">
                SHOWING {count} / {TOTAL_DOSSIERS}
              </span>
            </div>
          </div>

          <div className="cs-hero__aside">
            <figure className="cs-feature">
              <img src="/images/usbrl-case.jpg" alt="Tunnel face under active field reconnaissance" />
              <div className="cs-feature__top">
                <span className="mono">SEC: HIMALAYAN STRATIGRAPHY // REF 1990-2025</span>
                <span className="mono">NATM / TBM</span>
              </div>
              <figcaption>
                <span className="mono">
                  <Icon name="eye" className="icon icon--xs" /> ACTIVE FIELD RECONNAISSANCE
                </span>
                <b>
                  Subsurface headings inspection in Pir Panjal &amp; Garhwal thrust fault zones. Geotechnical stress
                  verification and deformable NATM canopy monitoring.
                </b>
                <div className="cs-feature__foot">
                  <span className="mono">RECORD SERIES: RKK-GEO-ARCHIVE-{TOTAL_DOSSIERS}</span>
                  <span className="mono">
                    <Icon name="file" className="icon icon--xs" /> {TOTAL_DOSSIERS} DOSSIERS
                  </span>
                </div>
              </figcaption>
            </figure>
            <a href="#index" className="cs-dir">
              <span className="cs-dir__icon">
                <Icon name="book" className="icon icon--sm" />
              </span>
              <span>
                <b className="mono">REPOSITORY DIRECTORY</b>
                <small>Continuous full-text peer documentation series</small>
              </span>
              <span className="mono cs-dir__go">
                SCROLL TO INDEX <Icon name="down" className="icon icon--xs" />
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="cs-index" id="index">
        <div className="container">
          <span className="mono">SUBTERRANEAN MONOGRAPHS // COMPLETE INDEX OF CASE STUDIES &amp; PRESENTATIONS</span>
          <div className="cs-index__head">
            <h2 className="h2">Select and access case study papers, failure analyses, and technical presentation dossiers below.</h2>
            <span className="tag tag--sand">
              <Icon name="filter" className="icon icon--xs" /> ALL {TOTAL_DOSSIERS} COMPLIANT DOSSIERS
            </span>
          </div>

          {count === 0 ? (
            <p className="cs-empty body">
              No dossiers match &ldquo;{q}&rdquo;. Try a project name such as Tehri, Teesta, or Kurichu.
            </p>
          ) : (
            <ul className="cs-list">
              {shown.map((c) => (
                <li key={c.no} className="cs-item">
                  <span className="cs-item__no mono">{c.no}</span>
                  <div className="cs-item__body">
                    <b>{c.title}</b>
                    <span>{c.summary}</span>
                    <span className="mono">{c.tags}</span>
                  </div>
                  {c.file ? (
                    <a className="btn btn--ink btn--sm" href={c.file} target="_blank" rel="noopener noreferrer">
                      Open PDF <Icon name="arrow" />
                    </a>
                  ) : (
                    <span className="btn btn--soft btn--sm is-disabled" aria-disabled="true">
                      Coming soon
                    </span>
                  )}
                </li>
              ))}
            </ul>
          )}

          {showKeynote && (
            <div className="cs-keynote">
              <span className="cs-item__no cs-keynote__no mono">{KEYNOTE.no}</span>
              <div className="cs-keynote__body">
                <span className="tag tag--dark">
                  <Icon name="mountain" className="icon icon--xs" /> KEYNOTE
                </span>
                <h3>
                  <Icon name="gauge" className="icon icon--sm" /> {KEYNOTE.title}
                </h3>
                <p>{KEYNOTE.summary}</p>
              </div>
              <a className="btn btn--light btn--sm" href={KEYNOTE.file} target="_blank" rel="noopener noreferrer">
                Open Slide Dossier <Icon name="arrow" />
              </a>
            </div>
          )}

          <div className="cs-end">
            <span className="mono">
              <Icon name="check" className="icon icon--xs" /> ALL MONOGRAPHS SOURCED FROM DR. RAKESH KUMAR KHALI FIELD
              DOSSIERS // END OF REGISTER: {TOTAL_DOSSIERS} OF {TOTAL_DOSSIERS} LISTED
            </span>
            <a href="#top" className="mono cs-end__top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
              RETURN TO TOP <Icon name="arrow" className="icon icon--xs" />
            </a>
          </div>
          <p className="cs-more">
            Looking for standards and working-group papers? <Link to="/publications">View Publications &amp; Working Guidelines</Link>
          </p>
        </div>
      </section>
    </div>
  )
}
