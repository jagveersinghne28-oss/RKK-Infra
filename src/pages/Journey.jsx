import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'

const TICKER = [
  ['TUNNELS EXCAVATED', '140+', 'km'],
  ['HYDRO MEGA-PROJECTS', '8,500+', 'MW'],
  ['MAX OVERBURDEN', '1,250', 'm'],
  ['ITA / WTC FORUMS', '24+', 'Yrs'],
]

const ANCHORS = [
  ['epoch-5', '05. GR Infraprojects (2022–Pr.)'],
  ['epoch-4', '04. HCC Limited (2014–22)'],
  ['epoch-3', '03. GVK Power (2011–14)'],
  ['epoch-2', '02. Gammon India (1994–11)'],
  ['epoch-1', '01. Foundations (1990–94)'],
  ['academia', 'Academia & Global'],
]

const ACADEMIC = [
  ['1990', 'B.E. Civil Engineering', 'Bangalore University. Graduated with First Class Honors. Fundamental soil mechanics and reinforced structures.'],
  ['1997', 'Construction & Safety Mgt.', 'NICMAR. Pioneered early statutory safety compliance frameworks for deep subterranean works in India.'],
  ['2002', 'Swiss Tunnelling Practice', 'Switzerland Specialized Training. Hands-on exposure to Alpine mechanized excavation & EDP at NITIE Mumbai.'],
  ['2012', 'MBA Project Management', 'Strategic EPC finance, risk modeling, contract dispute resolutions, and multi-disciplinary program control.'],
  ['2023', 'M.Tech Tunnel Engineering', 'MIT-WPU Pune. Graduated with an outstanding CGPA 9.46, setting institutional academic benchmark.'],
  ['2023', 'Doctor of Philosophy (Hon.)', 'PhD Honoris Causa conferred for extraordinary lifetime contribution to subterranean nation-building and engineering.'],
]

function Epoch({ id, n, years, tagline, org, role, orgSurface, children, surface }) {
  return (
    <section id={id} className={`epoch${surface ? ' epoch--surface' : ''}`}>
      <div className="container epoch__grid">
        <aside className="epoch__side">
          <span className="epoch__n">
            EPOCH 0{n}
            <i />
          </span>
          <h3 className="epoch__years">{years}</h3>
          <span className="mono">{tagline}</span>
          {org && (
            <div className={`epoch__org${orgSurface ? ' epoch__org--lift' : ''}`}>
              <b>{org}</b>
              <span>{role}</span>
            </div>
          )}
        </aside>
        <div className="epoch__main">{children}</div>
      </div>
    </section>
  )
}

function useScrollSpy(ids) {
  const [active, setActive] = useState(null)
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (!('IntersectionObserver' in window)) return undefined
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [ids])
  return active
}

const SPY_IDS = ANCHORS.map(([id]) => id)

export default function Journey() {
  const active = useScrollSpy(SPY_IDS)

  return (
    <div className="journey">
      {/* ------------------------------------------------ BREADCRUMB */}
      <div className="jr-crumb">
        <div className="container jr-crumb__inner">
          <div>
            <span className="mono" style={{ color: 'var(--accent)', letterSpacing: '0.6px' }}>DOC // RKK-CHRONO-2025</span>
            <span className="dot dot--sm" />
            <span className="mono">SECTION: OPERATIONAL BIOGRAPHY</span>
          </div>
          <div>
            <span className="mono">35 YEARS EXECUTION</span>
            <span className="dot dot--sm" />
            <span className="mono" style={{ color: 'var(--ink)' }}>5 STRATEGIC EPOCHS</span>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------ HERO */}
      <section className="container jr-hero">
        <div className="jr-hero__grid">
          <div>
            <span className="jr-pill">
              <span className="dot" />
              <span className="mono" style={{ color: 'var(--accent-deep)' }}>THE CHRONOLOGICAL ARCHIVE · 1990 — PRESENT</span>
            </span>
            <h1 className="h-display jr-hero__title">
              Three Decades.
              <br className="br-lg" /> Countless
              <br className="br-lg" /> Challenges. One
              <br className="br-lg" /> Continuing Pursuit of
              <br className="br-lg" /> Excellence.
            </h1>
            <p className="lead jr-hero__lead">
              Trace Dr. Rakesh Kumar Khali's journey from early civil engineering and site experience to senior
              leadership in tunnelling, hydro power and underground infrastructure across India's most challenging
              alpine and tectonic formations.
            </p>
            <div className="jr-ticker">
              {TICKER.map(([k, v, u]) => (
                <div key={k}>
                  <span className="mono">{k}</span>
                  <strong>
                    {v} <small>{u}</small>
                  </strong>
                </div>
              ))}
            </div>
          </div>

          <aside className="jr-now">
            <div className="jr-now__top">
              <span className="mono" style={{ color: 'var(--accent)', letterSpacing: '0.6px' }}>CURRENT POST</span>
              <span className="jr-now__chip">ACTIVE</span>
            </div>
            <h2>
              Senior Vice
              <br className="br-lg" /> President
            </h2>
            <p>Tunnel, Underground Works &amp; Hydro Power Division</p>
            <span className="mono">G R Infraprojects Limited (GRIL)</span>
            <blockquote>
              "Underground engineering is not just excavation; it is an enduring contract of humility between
              geological unpredictability and human resolve."
              <cite>— Dr. R. K. Khali</cite>
            </blockquote>
          </aside>
        </div>
      </section>

      {/* ------------------------------------------------ STICKY NAV */}
      <nav className="jr-anchors" aria-label="Timeline anchors">
        <div className="container jr-anchors__inner">
          <span className="mono">
            TIMELINE
            <br />
            ANCHORS:
          </span>
          <div className="jr-anchors__list">
            {ANCHORS.map(([id, label]) => (
              <a key={id} href={`#${id}`} className={active === id ? 'is-active' : ''}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ------------------------------------------------ EPOCH 05 */}
      <Epoch
        id="epoch-5"
        n={5}
        years="2022 — PRESENT"
        tagline="NATIONWIDE EXECUTIVE SCALE"
        org="G R INFRAPROJECTS LIMITED"
        role="Senior Vice President – Operations"
      >
        <span className="mono">DIVISION FOUNDATION &amp; SCALE</span>
        <h2 className="h2 epoch__h">
          Architecting the Tunnel, Underground &amp; Hydro Power Vertical
        </h2>
        <p className="lead epoch__lead">
          Tasked with conceptualizing, staffing, and operationalizing an entirely specialized subterranean
          infrastructure vertical within one of India's premier infrastructure giants. Transforming strategic pipeline
          vision into live execution across complex railway, water diversion, and energy corridors.
        </p>

        <article className="spot">
          <header className="spot__head">
            <span className="tag tag--sand-2">FLAGSHIP CORRIDOR</span>
            <div className="spot__row">
              <h3>Adenigarh–Purana Katak Rail Tunnel (T-1)</h3>
              <div className="spot__status">
                <span className="mono">LENGTH / STATUS</span>
                <b className="mono">7.492 KM · AHEAD OF SCHEDULE</b>
              </div>
            </div>
          </header>
          <p className="body">
            Recognized as the TAI Project of the Year 2025 by the Tunnelling Association of India. Excavated through
            intricate Eastern Ghats geologies with precision ballastless track-slab installation, real-time deformation
            monitoring, and accelerated breakthrough milestones well inside contract windows.
          </p>
          <div className="spot__details">
            {[
              ['CONTRACT / CLIENT', 'East Coast Railway (ECoR)', 'Khurda Road–Balangir Project'],
              ['TUNNELLING METHOD', 'Advanced NATM / Drill & Blast', 'Dual Face Simultaneous Drive'],
              ['SAFETY BENCHMARK', 'Zero Reportable LTI', 'Over 4.5 Million Safe Manhours'],
            ].map(([k, v, d]) => (
              <div key={k}>
                <span className="mono">{k}</span>
                <b>{v}</b>
                <span className="mono">{d}</span>
              </div>
            ))}
          </div>
          <figure className="spot__photo">
            <img src="/images/field-supervision.jpg" alt="Dr. Rakesh Kumar Khali conducting specialized tunnel field supervision" />
            <figcaption>
              <span className="mono" style={{ fontWeight: 600, color: 'var(--ink)' }}>FIELD SUPERVISION &amp; DRILLING VERIFICATION</span>
              <span className="mono">GRIL Underground Operations Unit</span>
            </figcaption>
          </figure>
        </article>

        <div className="duo">
          <article className="mini-card">
            <div className="mini-card__top">
              <span className="eyebrow">ARUNACHAL PRADESH</span>
              <span className="mono">2,880 MW</span>
            </div>
            <h4>Dibang Multipurpose Hydro Project</h4>
            <p>
              Execution of over 9 km of critical 11 km headrace and diversion tunnel drives achieved in a rapid
              2.5-year campaign under challenging Himalayan thrust fault conditions.
            </p>
            <div className="mini-card__foot">
              <span className="mono">Focus: High-Pressure Grouting &amp; Alpine Water Inrush Mitigations</span>
            </div>
          </article>
          <article className="mini-card">
            <div className="mini-card__top">
              <span className="eyebrow">MADHYA PRADESH</span>
              <span className="mono">₹2,000 CR</span>
            </div>
            <h4>Sidhi-Singrauli Rail Link Works</h4>
            <p>
              Complex subterranean passages through fragile Gondwana sandstone formations, requiring customized lattice
              girder installations and micro-fine cement consolidation.
            </p>
            <div className="mini-card__foot">
              <span className="mono">Focus: Dense Freight Structural Specifications</span>
            </div>
          </article>
        </div>
      </Epoch>

      {/* ------------------------------------------------ EPOCH 04 */}
      <Epoch
        id="epoch-4"
        n={4}
        surface
        orgSurface
        years="2014 — 2022"
        tagline="THE HIMALAYAN MASTERY"
        org="HINDUSTAN CONSTRUCTION CO. (HCC)"
        role="Project Director – Hydro & Rail"
      >
        <span className="mono">OROGENIC TECTONICS &amp; DEEP SUBTERRANEAN SITES</span>
        <h2 className="h2 epoch__h">Mastering the Pir Panjal Range &amp; High-Head Hydro Caverns</h2>
        <p className="lead epoch__lead">
          An intense eight-year epoch leading India’s most technologically demanding mountain transit and pumped-storage
          power infrastructure, tackling severe rock squeezing, high seismic stress fields, and high-pressure geothermal
          ingress.
        </p>

        <article className="spot spot--lift">
          <header className="spot__head spot__head--sand">
            <span className="tag tag--sand-2">NATIONAL PRIORITY RAIL</span>
            <h3 className="spot__h-bold">Udhampur–Srinagar–Baramulla Rail Link (USBRL)</h3>
            <span className="mono">T-48, T-49A TUNNEL PORTFOLIO</span>
          </header>
          <p className="body">
            Supervised construction through the unforgiving Pir Panjal geological formation, overcoming squeezing ground
            conditions up to 1.5 meters of deformation. Implemented advanced 3D numerical modelling, yielding support
            strategies with heavy yielding rock bolts, shotcrete with steel fibers, and segmental drain conduits.
          </p>
          <div className="trio">
            {[
              ['GEOLOGY', 'Main Boundary Thrust (MBT)'],
              ['CHALLENGE', '1200+ m Overburden & Squeezing'],
              ['TECHNIQUE', 'NATM with Yielding Elements'],
            ].map(([k, v]) => (
              <div key={k}>
                <span className="mono">{k}</span>
                <b>{v}</b>
              </div>
            ))}
          </div>
        </article>

        <div className="triple">
          {[
            ['1,000 MW', 'Tehri Pumped Storage', 'Deep vertical shafts, surge chambers, and massive powerhouse cavern excavation deep in Himalayan phyllite rock.'],
            ['444 MW & 520 MW', 'Vishnugad & Tapovan', 'Strategic technical audits and hydro headrace drives facing high water pressures and brittle rockburst hazards.'],
            ['PACKAGE 09', 'Rishikesh–Karanprayag', 'Strategic rail tunnelling in sensitive Garhwal mountain ecosystems with continuous environmental monitoring.'],
          ].map(([k, t, d]) => (
            <article className="mini-card mini-card--sm" key={t}>
              <span className="eyebrow">{k}</span>
              <h4>{t}</h4>
              <p>{d}</p>
            </article>
          ))}
        </div>
      </Epoch>

      {/* ------------------------------------------------ EPOCH 03 */}
      <Epoch
        id="epoch-3"
        n={3}
        years="2011 — 2014"
        tagline="EPC LEADERSHIP & CLEARANCES"
        org="GVK POWER & INFRASTRUCTURE"
        role="General Manager → AVP (Hydro & EPC)"
      >
        <span className="mono">RIVER CHENAB BASIN CORRIDOR</span>
        <h2 className="h2 epoch__h">
          Ratle 850 MW Hydro Electric Project
          <br className="br-lg" /> (₹6,500 Cr)
        </h2>
        <p className="lead epoch__lead">
          Served as Project Head and Engineer-in-Charge for one of Jammu &amp; Kashmir’s landmark mega-scale
          hydroelectric installations. Led comprehensive techno-commercial EPC mobilization, liaison with central
          statutory boards, and critical early works diversion tunneling along the roaring Chenab River.
        </p>
        <div className="duo duo--tall">
          <article className="info-card">
            <Icon name="users" className="icon info-card__icon" />
            <h4>Statutory Approvals &amp; Community Consensus</h4>
            <p>
              Successfully spearheaded rigorous Environmental Clearances, Stage-II Forest Clearances, and public hearing
              procedures across Kishtwar and surrounding districts with stakeholders and regulatory bodies.
            </p>
          </article>
          <article className="info-card">
            <Icon name="drop" className="icon info-card__icon" />
            <h4>River Diversion Tunnels (RDT)</h4>
            <p>
              Engineered dual 11m diameter diversion tunnels designed to handle peak monsoon river discharges of up to
              4,500 cumecs, enabling safe cofferdam placement and deep foundation preparation.
            </p>
          </article>
        </div>
      </Epoch>

      {/* ------------------------------------------------ EPOCH 02 */}
      <Epoch
        id="epoch-2"
        n={2}
        years="1994 — 2011"
        tagline="17 FORMATIVE CRUCIBLE YEARS"
        org="GAMMON INDIA LIMITED"
        role="Assistant Engineer → Deputy GM (Projects)"
      >
        <span className="mono">THE DEEP UNDERGROUND HYDRO CRUCIBLE</span>
        <h2 className="h2 epoch__h">
          Seventeen Years In The Mountain
          <br className="br-lg" /> Trenches
        </h2>
        <p className="lead epoch__lead">
          The seminal period that shaped Dr. Khali's core execution instincts. Rising from junior site responsibilities
          to leading major turnkey hydro project divisions across Sikkim, Himachal Pradesh, Jammu &amp; Kashmir, and
          Uttarakhand.
        </p>
        <article className="spot spot--plain">
          <header className="spot__head spot__head--soft">
            <div>
              <span className="eyebrow">SIKKIM HIMALAYAS</span>
              <h3 className="spot__h-bold">Teesta Hydro Electric Project (14 km HRT)</h3>
            </div>
            <span className="mono" style={{ color: 'var(--ink)' }}>₹565 CR CONTRACT</span>
          </header>
          <p className="body">
            14 km of complex head race tunnelling through shear zones, high-pressure artesian water pockets, and
            unstable Daling Group schists. Established benchmarks in systematic probe hole drilling, pre-grouting, and
            rapid mucking cycles.
          </p>
        </article>
        <div className="quad">
          {[
            ['800 MW · HP', 'Parbati Stage II', 'Headrace tunnels in high overburden granite formations.'],
            ['66 MW · SIKKIM', 'Rangit Stage II', 'Underground powerhouse excavation and pressure shafts.'],
            ['120 MW · J&K', 'Sewa Hydro Project', 'Desilting basins & surge shaft lining operations.'],
            ['195 MW · UK', 'Kotli Bhel Project', 'River bed investigations and adit portal construction.'],
          ].map(([k, t, d]) => (
            <article className="mini-card mini-card--xs" key={t}>
              <span className="mono">{k}</span>
              <h4>{t}</h4>
              <p>{d}</p>
            </article>
          ))}
        </div>
      </Epoch>

      {/* ------------------------------------------------ EPOCH 01 */}
      <Epoch
        id="epoch-1"
        n={1}
        surface
        years="1990 — 1994"
        tagline="THE ENGINEERING GENESIS"
      >
        <span className="mono">ACADEMIC HONORS TO GROUND-LEVEL SITE RIGOR</span>
        <h2 className="h2 epoch__h">First Principles of Concrete, Soil &amp; Substructure</h2>
        <p className="lead epoch__lead">
          Graduating with First Class Honors in Civil Engineering from Bangalore University in 1990, Dr. Khali began his
          practical career at the grass-roots level, immersing himself in raw construction sites, structural casting, and
          deep foundation mechanics.
        </p>
        <div className="duo">
          <article className="mini-card">
            <span className="mono" style={{ color: 'var(--accent)', fontWeight: 600 }}>1992 — 1994 · DEHRADUN</span>
            <h4>HIHT Hospital Complex Deep Piling</h4>
            <p>
              Cast-in-situ bored piles, large subterranean basement structures, and precision quality control in
              boulder-laden Doon valley geologies.
            </p>
          </article>
          <article className="mini-card">
            <span className="mono" style={{ color: 'var(--accent)', fontWeight: 600 }}>1990 — 1992 · MADHYA PRADESH</span>
            <h4>Vyas Construction · Indira Sarovar HE Project</h4>
            <p>
              First immersion in hydro tunnel shaft lining, shuttering fabrication, aggregate grading, and high-strength
              concrete pours.
            </p>
          </article>
        </div>
      </Epoch>

      {/* ------------------------------------------------ ACADEMIA */}
      <section id="academia" className="jr-learn">
        <div className="container">
          <div className="jr-learn__head">
            <span className="jr-pill jr-pill--center">
              <span className="mono" style={{ color: 'var(--accent)' }}>KNOWLEDGE CAPITAL</span>
            </span>
            <h2 className="h-display">
              Learning Never
              <br className="br-lg" /> Stopped.
            </h2>
            <p className="lead">
              A rare blend of high-echelon field site leadership and relentless scholarly pursuit spanning four decades
              of advanced technical certifications, masters, and doctoral tunnel research.
            </p>
          </div>

          <div className="jr-acad">
            {ACADEMIC.map(([y, t, d]) => (
              <article className="mini-card mini-card--acad" key={t}>
                <span className="mono" style={{ color: 'var(--accent)', fontWeight: 700 }}>{y}</span>
                <h4>{t}</h4>
                <p>{d}</p>
              </article>
            ))}
            <article className="jr-acad__dark">
              <div>
                <span className="mono" style={{ color: '#d1e7e1', fontWeight: 700 }}>2024 — PRESENT</span>
                <span className="jr-acad__chip">CURRENT RESEARCH</span>
              </div>
              <h4>PhD Research in Subterranean Safety Dynamics</h4>
              <p>
                Conducting doctoral research at MIT World Peace University (MIT-WPU) focusing on predictive geotechnical
                safety models, emergency evacuation protocols in complex long-span railway tunnels, and AI-assisted
                hazard identification.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ INDUSTRY */}
      <section className="jr-industry">
        <div className="container">
          <div className="jr-industry__head">
            <div>
              <span className="eyebrow">INSTITUTIONAL STEWARDSHIP</span>
              <h2 className="h2">
                Championing India's
                <br className="br-lg" /> Underground Engineering
                <br className="br-lg" /> Voice Globally
              </h2>
            </div>
            <p className="body">
              Dr. Khali serves in key executive governance roles shaping the national and international agendas for
              underground safety, youth engineering leadership, and geotechnical standards.
            </p>
          </div>

          <div className="triple triple--inst">
            {[
              ['VICE PRESIDENT SINCE 2018', 'Tunnelling Association of India (TAI)', 'Conceived and launched the TAI Young Members Group (Youth Wing), fostering the next generation of subterranean professionals and connecting them with international mentors.'],
              ['OFFICIAL NOMINEE SINCE 2010', 'ITA Working Group 5', 'International Tunnelling and Underground Space Association (ITA) Working Group 5 on Health and Safety in Works, contributing to global standard operating safety guidelines.'],
              ['ADVISORY COUNCIL', 'WTC 2024 & MIT-WPU Board', 'Executive Member of the World Tunnel Congress (WTC 2024) Advisory Committee and active Member, Board of Studies for Tunnel Engineering curriculum development at MIT-WPU.'],
            ].map(([k, t, d]) => (
              <article className="mini-card mini-card--inst" key={t}>
                <span className="eyebrow">{k}</span>
                <h4>{t}</h4>
                <p>{d}</p>
              </article>
            ))}
          </div>

          <div className="jr-gallery">
            <figure>
              <img src="/images/tai-assembly.jpg" alt="Dr. Rakesh Kumar Khali delivering the keynote at the TAI Annual National Assembly" />
              <figcaption>
                <span className="eyebrow">KEYNOTE ADDRESS</span>
                <h4>TAI Annual National Assembly</h4>
                <p>Advocating for mechanized safety protocols and digital monitoring in young Himalayan thrust belts.</p>
              </figcaption>
            </figure>
            <figure>
              <img src="/images/ita-delegation.jpg" alt="Dr. Rakesh Kumar Khali with the international ITA-AITES tunnel delegation" />
              <figcaption>
                <span className="eyebrow">GLOBAL FELLOWSHIP</span>
                <h4>International Tunnel Delegation (ITA-AITES)</h4>
                <p>Representing Indian underground contracting mastery alongside global tunnelling authorities and researchers.</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ MANIFESTO */}
      <section className="jr-manifesto">
        <div className="container jr-manifesto__grid">
          <div>
            <span className="jr-manifesto__pill">ENGINEERING PHILOSOPHY</span>
            <h2 className="h2">
              "A tunnel is not merely a path through earth; it is an irrevocable commitment to safety, technological
              rigor, and the seamless connection of isolated communities."
            </h2>
            <p className="body jr-manifesto__text">
              With over 100 authored technical papers, decades of direct rockface leadership, and continuous engagement
              with global research bodies, Dr. Khali remains dedicated to advancing subterranean engineering excellence
              worldwide.
            </p>
            <div className="jr-manifesto__actions">
              <Link to="/projects" className="btn btn--sand btn--lg">
                View Signature Projects
              </Link>
              <Link to="/expertise" className="btn btn--outline-light btn--lg">
                TBM &amp; NATM Methodologies
              </Link>
            </div>
          </div>
          <aside className="jr-record">
            <span className="mono" style={{ color: 'var(--accent-light)' }}>DOCUMENTED RECORD</span>
            <div>
              <strong>100+</strong>
              <span>Published Technical Papers &amp; Case Studies</span>
            </div>
            <div>
              <strong>14+</strong>
              <span>WTC &amp; Global Conferences Attended</span>
            </div>
            <div>
              <strong>35</strong>
              <span>Years Continuous Executive Field Experience</span>
            </div>
          </aside>
        </div>
      </section>
    </div>
  )
}
