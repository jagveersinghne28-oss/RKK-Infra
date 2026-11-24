import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import { CERTIFICATES } from '../data/certificates.js'

const FILTERS = [
  ['all', 'ALL PORTFOLIOS'],
  ['training', 'TECHNICAL TRAININGS'],
  ['academic', 'ACADEMIC & SYMPOSIA'],
]

const STATS = [
  { n: '13+', t: 'Cataloged Accreditations', s: 'TAI • NAIDCL • CBIP • MIT-WPU' },
  { n: 'ITA', t: 'Global Endorsements', s: 'ACADEMIC & RESEARCH WORKING GROUPS' },
  { n: '35Y', t: 'Continuous Upskilling', s: '1990 – PRESENT EVOLUTIONARY RECORD' },
]

const INFO = [
  ['SUBTERRANEAN CLASSIFICATION', 'TBM, NATM & Observational Systems'],
  ['SAFETY & COLLAPSE PROTOCOL', 'Forensic Diagnostics & Risk Mitigation'],
  ['INSTITUTIONAL AFFILIATION', 'ITA-AITES / TAI / INCOLD Member'],
  ['ARCHIVE REGISTRY STATE', 'Verified Operational Evidence'],
]

export default function Certificates() {
  const [filter, setFilter] = useState('all')
  const list = CERTIFICATES.filter((c) => filter === 'all' || c.group === filter)

  return (
    <div className="certs">
      <section className="ct-hero">
        <div className="container">
          <span className="tag tag--sand-2">
            <Icon name="award" className="icon icon--xs" /> CREDENTIALS &amp; ACCREDITATIONS // LIFELONG MASTERY
          </span>

          <div className="ct-hero__grid">
            <div>
              <h1 className="h2 ct-hero__title">Certificates of Distinction &amp; Continuous Mastery</h1>
              <p className="lead">
                Across more than three and a half decades in extreme subterranean engineering and mega-infrastructure
                leadership, continuous learning and formal accreditation have anchored Dr. Rakesh Kumar Khali&apos;s
                journey. Each milestone reflects rigorous technical immersion, international training, institutional
                recognition, and specialized knowledge gained alongside groundbreaking field execution.
              </p>
            </div>
            <ul className="ct-stats">
              {STATS.map((s) => (
                <li key={s.t} className="ct-stat">
                  <b>{s.n}</b>
                  <div>
                    <strong>{s.t}</strong>
                    <span className="mono">{s.s}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <dl className="ct-info">
            {INFO.map(([k, v]) => (
              <div key={k}>
                <dt className="mono">{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="ct-list">
        <div className="container">
          <div className="ct-bar">
            <div className="ct-bar__title">
              <Icon name="folder" className="icon icon--sm" />
              <span className="mono">
                Archival Dossier ({CERTIFICATES.length} Records) &nbsp; CLASSIFICATION: OPERATIONAL INTEGRITY
              </span>
            </div>
            <div className="ct-bar__filters" role="group" aria-label="Filter certificates">
              <span className="mono ct-bar__label">
                <Icon name="filter" className="icon icon--xs" /> FILTER VIEW:
              </span>
              {FILTERS.map(([k, label]) => (
                <button
                  key={k}
                  className={`filter-pill${filter === k ? ' is-active' : ''}`}
                  aria-pressed={filter === k}
                  onClick={() => setFilter(k)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <ul className="ct-grid">
            {list.map((c) => (
              <li key={c.id} className="ct-card">
                <div className="ct-card__top">
                  <span className="mono">DOC REF // {c.ref}</span>
                  <span className="tag tag--dark">{c.badge}</span>
                </div>
                <a
                  className="ct-card__thumb"
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open certificate: ${c.title}`}
                >
                  <img src={c.image} alt={`Certificate: ${c.title}`} loading="lazy" decoding="async" />
                  <span className="ct-card__open">
                    <Icon name="eye" className="icon icon--sm" /> {c.pdf ? 'OPEN PDF' : 'OPEN IMAGE'}
                  </span>
                </a>
                <span className="mono ct-card__cat">{c.category}</span>
                <h3 className="ct-card__title">{c.title}</h3>
                <dl className="ct-card__meta">
                  <div>
                    <dt>Issuing Body</dt>
                    <dd>{c.issuer}</dd>
                  </div>
                  <div>
                    <dt>Field / Domain</dt>
                    <dd>{c.field}</dd>
                  </div>
                  <div>
                    <dt>Date / Scope</dt>
                    <dd>{c.scope}</dd>
                  </div>
                </dl>
                <div className="ct-card__notes">
                  <span className="mono">NOTES / ANNOTATION</span>
                  <p>{c.notes}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--dark ct-cta">
        <div className="container ct-cta__inner">
          <div>
            <span className="tag tag--dark ct-cta__tag">
              <Icon name="shield" className="icon icon--xs" /> ZERO-HARM SUBTERRANEAN GOVERNANCE
            </span>
            <h2 className="ct-cta__title">Translating Rigorous Accreditation into Zero-Harm Field Reality</h2>
            <p className="ct-cta__text">
              The breadth of Dr. Khali&apos;s certifications is not merely an archival record — it is the operational
              doctrine executed daily across rock excavation faces, complex hydro caverns, and mechanized TBM drives
              across India&apos;s most demanding terrain.
            </p>
          </div>
          <div className="ct-cta__actions">
            <Link to="/expertise" className="btn btn--accent btn--lg">
              Explore Technical Expertise
            </Link>
            <Link to="/projects" className="btn btn--outline-light btn--lg">
              View Signature Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
