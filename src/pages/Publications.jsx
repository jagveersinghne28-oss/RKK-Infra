import Icon from '../components/Icon.jsx'
import { PUBLICATIONS } from '../data/publications.js'

export default function Publications() {
  const total = PUBLICATIONS.length

  return (
    <div className="pub">
      <div className="pb-meta">
        <div className="container pb-meta__inner">
          <span className="mono">
            <i className="dot" /> ARCHIVE SERIES // ITA-AITES / BTS SPEC
          </span>
          <span className="mono pb-meta__mid">FORMAT: DIGITIZED PDF REPOSITORIES</span>
          <span className="tag tag--sand">DOCS: {total} REGISTERED</span>
        </div>
      </div>

      <section className="pb-hero">
        <div className="container pb-hero__grid">
          <div>
            <span className="tag tag--sand-2">
              <Icon name="check" className="icon icon--xs" /> ITA-AITES &amp; BTS REPOSITORY // TECHNICAL ARCHIVE
            </span>
            <h1 className="h-display pb-hero__title">Publications &amp; Working Guidelines</h1>
            <p className="lead">
              Codified international technical standards and working group publications established by the
              International Tunnelling and Underground Space Association (ITA-AITES) and the British Tunnelling Society
              (BTS) — governing global subsurface engineering, health, safety, and mechanized excavation practices.
            </p>
            <ul className="pb-hero__meta">
              <li className="mono">
                <Icon name="folder" className="icon icon--xs" /> CLASSIFICATION: OPEN TECHNICAL STANDARDS
              </li>
              <li className="mono">
                <Icon name="folder" className="icon icon--xs" /> WORKING GROUP: WG-5 &amp; ALLIED COMMITTEES
              </li>
            </ul>
          </div>

          <figure className="pb-feature">
            <div className="pb-feature__img">
              <img src="/images/field-supervision.jpg" alt="Engineers inspecting a TBM tunnel" />
              <span className="mono">SEC: EXCAVATION STANDARDS</span>
              <span className="mono">REF 2024.RKK</span>
            </div>
            <figcaption>
              <div>
                <span className="mono">TECHNICAL DOSSIER</span>
                <b>INTERNATIONAL WORKING STANDARDS — {total} Master Documents</b>
              </div>
              <span className="pb-feature__icon">
                <Icon name="book" className="icon icon--sm" />
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="pb-index">
        <div className="container">
          <span className="mono">CODIFIED MONOGRAPHS // INDEX OF WORKING GUIDELINES</span>
          <div className="pb-index__head">
            <h2 className="h2">Select and access technical guideline papers and working group documents below.</h2>
            <span className="tag tag--sand">
              <Icon name="filter" className="icon icon--xs" /> ALL {total} COMPLIANT FILES
            </span>
          </div>

          <ul className="pb-list">
            {PUBLICATIONS.map((p, i) => (
              <li key={p.title} className="pb-item">
                <span className="pb-item__no mono">{String(i + 1).padStart(2, '0')}</span>
                <div className="pb-item__body">
                  <b>{p.title}</b>
                  <span className="mono">{p.sub}</span>
                </div>
                {p.file ? (
                  <a className="btn btn--ink btn--sm" href={p.file} target="_blank" rel="noopener noreferrer">
                    Open PDF <Icon name="arrow" />
                  </a>
                ) : (
                  <button className="btn btn--ink btn--sm" type="button" title="PDF will be available soon">
                    Open PDF <Icon name="arrow" />
                  </button>
                )}
              </li>
            ))}
          </ul>

          <div className="pb-end">
            <span className="mono">
              <Icon name="info" className="icon icon--xs" /> ALL MONOGRAPHS SOURCED FROM ITA-AITES / BTS OFFICIAL
              ARCHIVAL DISTRIBUTIONS
            </span>
            <span className="mono">
              END OF DOCUMENT REGISTER // {total} OF {total} LISTED
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}
