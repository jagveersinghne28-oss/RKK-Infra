import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'

const BENCH = [
  ['FIELD OPERATIONS', '30+', 'Years Subsurface Mastery'],
  ['GLOBAL GOVERNANCE', 'ITA-WG5', 'India Representative (Since 2010)'],
  ['RESEARCH CORPUS', '100+', 'Published Technical Papers'],
  ['ACADEMIC GRADE', '9.46', 'M.Tech Tunnel Engineering (Distinction)'],
]

const NATM = [
  ['NATM & SEM Protocols', 'Empirical rock classification (Barton’s Q, Bieniawski RMR), optical 3D displacement monitoring, radial lattice girders, steel fiber-reinforced shotcrete (SFRC), and sub-horizontal forepoling umbrellas.'],
  ['TBM & Mechanized Tunnelling', 'Double Shield TBM, Robbins, Mitsubishi, Terratec systems; disc cutter metallurgical wear dynamics, bicomponent annular grout injection, gripper reaction analysis in brittle fault zones.'],
  ['Conventional Drill & Blast', 'Controlled perimeter smooth blasting, electronic millisecond detonator sequencing, pre-splitting for slope stabilization, and high-efficiency burn-cut pull designs.'],
  ['Corridor Classifications', 'Railway single & double track gauges, subterranean metros, high-altitude highway pass crossings, and extreme gradient escape tunnels.'],
]

const HYDRO = [
  ['Machine & Transformer Caverns:', ' Large-span subterranean cavities exceeding 25m spans.'],
  ['Vertical & Inclined Pressure Shafts:', ' Steel liner backs, high-angle raises, mechanized slipforming.'],
  ['Water Conveyance:', ' Head Race Tunnels (HRT), Tail Race Tunnels (TRT), and surge complexes.'],
  ['Desilting Basins:', ' High-volume underground sedimentation control systems.'],
]

const STRATA = [
  ['DEEP SHAFT SINKING', 'Pilot shaft raise-boring, reverse circulation reaming, stage-wise benching, and structural cast-in-place concrete lining collars.'],
  ['PRESSURE GROUTING & CHEMICAL CUTOFFS', 'Microfine cement injection up to 60 bar pressure, fast-reacting polyurethane (PU) hydro-reactive resins to halt artesian water inflow.'],
  ['PRESTRESSED ANCHORAGES', 'Multi-strand prestressed rock cables up to 60-tonne proof load capacity for cavern crown arches and deep portal stabilization.'],
]

const EPC = [
  ['EQUIPMENT MOBILIZATION & METHODOLOGY', 'Deploying high-output drilling jumbos, segment erectors, batching automation, and slurry separation systems customized for alpine logistics.'],
  ['CASH FLOW BUDGETING & SCHEDULING', 'Dynamic Earned Value Management (EVM), critical path alignment, contingency capital allocation, and raw material reserve governance.'],
  ['DISPUTE ARBITRATION & JOINT VENTURES', 'Contractual claims under FIDIC conditions, engineering dispute settlement, and high-performance joint-venture consortium leadership.'],
]

const CREDENTIALS = [
  { tag: 'DISTINCTION', title: 'M.Tech in Tunnel Engineering (CGPA 9.46)', org: 'MIT World Peace University (MIT-WPU), Pune', text: 'Top percentile scholarly performance focused on computational geotechnical analysis, ground-structure interaction, and rock deformation dynamics.' },
  { tag: 'SWITZERLAND', title: 'Specialized Modern Tunnelling Technical Program', org: 'Swiss Alpine Tunnelling Institutes & Facilities', text: 'On-site deep alpine case reviews of Gotthard base systems, mechanized cutter optimization, and international waterproofing architectures.' },
  { tag: 'ACADEMIA', title: 'Board of Studies Member & Curriculum Architect', org: 'School of Construction Engineering & Management, MIT-WPU', text: 'Advising graduate curricula to harmonize classroom theory with real-world high-overburden excavation risks and modern mechanized operations.' },
]

const FACULTY = ['NICMAR', 'CBIP (Central Board of Irrigation & Power)', 'INCOLD', 'TAI (Tunnelling Association of India)', 'GRIL Academy of Operations']

const PAPERS = [
  { cat: 'hydro', tag: 'HYDRO', ref: 'REF: DOYANG', title: 'Construction of Doyang Diversion Tunnel Under Adverse North-East Strata', text: 'Technical methodology addressing high pore-pressure ingress, river diversion schedules, and sequential bench lining.', a: 'JOURNAL: CBIP SPECIAL', b: 'PEER-REVIEWED' },
  { cat: 'hydro', tag: 'HYDRO', ref: 'REF: MALANA', title: 'Construction of Malana Head Race Tunnel: Fast-Track Incline Engineering', text: 'Rapid tunneling through high-quartzite Himalayan formations with advanced burn-cut rounds and minimal overbreak.', a: 'HYDRO POWER PROC.', b: 'HIMACHAL PRADESH' },
  { cat: 'geology', tag: 'HYDRO // ADVERSE', ref: 'REF: SEWA-II', title: 'Construction of Sewa Head Race Tunnel: Addressing Artesian Traps', text: 'Field-tested PU resin chemical cutoff barriers to arrest catastrophic 400 L/sec groundwater breakthrough.', a: 'JAMMU & KASHMIR', b: 'GEO-HAZARD' },
  { cat: 'geology', tag: 'HYDRO // ADVERSE', ref: 'REF: TEESTA-V', title: 'Construction of Teesta Head Race Tunnel in Severe Sheared Phyllites', text: 'Overcoming extensive crown squeezing, lattice arch deformability, and high-frequency convergence monitoring.', a: 'SIKKIM HIMALAYAS', b: 'NATIONAL AWARD CASE' },
  { cat: 'tbm', tag: 'TBM // HYDRO', ref: 'REF: MECH-IPS', title: 'Inclined Pressure Shafts by Double Shield TBM: Mechanized Feasibility', text: 'Technical kinematics of steep-angle mechanized boring, continuous muck removal, and anti-sliding gripper systems.', a: 'WTC ARCHIVES', b: 'MECHANIZATION' },
  { cat: 'geology', tag: 'ADVERSE GEOLOGY', ref: 'REF: RAIL-HIM', title: 'Railway Tunnels in Highly Adverse Geological Conditions: NATM Paradigm', text: 'Deep Himalayan railway alignments, heavy ground swelling mitigation, and dynamic yieldable support systems.', a: 'INDIAN RAILWAYS TECH', b: 'PEER-REVIEWED' },
  { cat: 'geology', tag: 'ADVERSE GEOLOGY', ref: 'REF: USBRL-T74R', title: 'Managing Severe Squeezing Ground in USBRL (J&K Alignment)', text: 'Long-term rock deformation tracking, yielding shotcrete slots, and umbrella grouting through sheared thrust zones.', a: 'KASHMIR LINK', b: 'STRATA AUDIT' },
  { cat: 'safety', tag: 'SAFETY & RISK', ref: 'REF: CAVERN-VENT', title: 'Safety & Ventilation Architectures in High-Overburden Caverns', text: 'ITA Working Group 5 compliant CFD airflow modelling, gas evacuation velocity profiles, and emergency subterranean muster designs.', a: 'ITA-WG5 PAPERS', b: 'GENEVA ARCHIVE' },
  { cat: 'geology', tag: 'HYDRO // ADVERSE', ref: 'REF: DIBANG-2880', title: 'Dibang Multipurpose Project: Subterranean Geotechnical Challenges', text: 'Frontier engineering for India’s largest hydro scheme (2,880 MW): deep canyon portal stabilization and fault intersection analysis.', a: 'ARUNACHAL PRADESH', b: 'MEGA-SCHEME' },
]

const FILTERS = [
  ['all', 'ALL DISCIPLINES'],
  ['geology', 'ADVERSE GEOLOGY'],
  ['hydro', 'HYDRO MECHANICS'],
  ['tbm', 'TBM EXECUTION'],
  ['safety', 'SAFETY & RISK'],
]

export default function Expertise() {
  const [filter, setFilter] = useState('all')
  const shown = PAPERS.filter((p) => filter === 'all' || p.cat === filter)

  return (
    <div className="expertise">
      {/* ------------------------------------------------ HERO */}
      <section className="container xp-hero">
        <div className="xp-hero__marker">
          <span className="xp-hero__id">SEC-04 // FIELD SPECIFICATION &amp; AUDIT</span>
          <span className="dot" />
          <span className="mono">GEO-STRATA • ITA-WG5 • ROCK MECHANICS</span>
        </div>

        <div className="xp-hero__grid">
          <div>
            <h1 className="h-display">
              Built on Technical
              <br className="br-lg" /> Depth.
            </h1>
            <p className="lead xp-hero__lead">
              More than three decades of specialized mastery across tunnelling methodologies, hydro power
              infrastructure, cavern geotechnics, safety governance, and academic research.
            </p>
          </div>
          <aside className="xp-hero__aside">
            <div className="xp-hero__aside-top">
              <span className="mono">ACTIVE MANDATE</span>
              <span className="mono" style={{ color: 'var(--accent)' }}>SVP / OPS</span>
            </div>
            <h3>G R Infraprojects Limited</h3>
            <p>Leading mega hydro caverns, Himalayan tunnels, and railway subsurface works with precision geocontrols.</p>
          </aside>
        </div>

        <div className="xp-bench">
          {BENCH.map(([k, v, d]) => (
            <div key={k}>
              <span className="mono" style={{ letterSpacing: '0.6px' }}>{k}</span>
              <strong>{v}</strong>
              <span>{d}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------ MATRIX */}
      <section className="container xp-matrix">
        <div className="xp-matrix__head">
          <div>
            <span className="mono">01 / SYSTEM DOMAINS</span>
            <h2 className="h2">Technical Competency Matrix</h2>
          </div>
          <span className="mono">REF: NATM // TBM // PRESSURE SHAFTS // CAVERNS</span>
        </div>

        <div className="xp-bento">
          <article className="xp-card xp-card--methods">
            <div className="xp-card__tagrow">
              <span className="tag">01.0 // METHODOLOGY</span>
              <Icon name="layers" className="icon xp-card__icon" />
            </div>
            <h3 className="xp-card__h">Tunnelling &amp; Subsurface Methodologies</h3>
            <p className="body">
              Pioneering sequential excavation, mechanical boring, and precision rock reinforcement under adverse
              squeezing ground and complex Himalayan thrusts.
            </p>
            <div className="xp-subgrid">
              {NATM.map(([t, d]) => (
                <div className="xp-sub" key={t}>
                  <h4>{t}</h4>
                  <p>{d}</p>
                </div>
              ))}
            </div>
            <div className="xp-card__foot">
              <span className="mono">METRIC: 100+ KM TUNNEL RUNS EXECUTED</span>
              <span className="mono" style={{ fontWeight: 600, color: 'var(--ink)' }}>HANKEN-NATM PROTOCOL ACTIVE</span>
            </div>
          </article>

          <article className="xp-card xp-card--hydro">
            <div className="xp-card__tagrow">
              <span className="tag tag--sand">02.0 // HYDRO POWER</span>
              <Icon name="drop" className="icon xp-card__icon" />
            </div>
            <h3 className="xp-card__h xp-card__h--lg">
              Hydro Underground
              <br className="br-lg" /> Complexes
            </h3>
            <p className="body" style={{ marginTop: 16 }}>
              Execution of deep subterranean water conveyance and multi-stage cavern developments under immense
              hydraulic head.
            </p>
            <ul className="xp-hydro-list">
              {HYDRO.map(([b, t]) => (
                <li key={b}>
                  <Icon name="check" className="icon xp-hydro-list__icon" />
                  <p>
                    <strong>{b}</strong>
                    {t}
                  </p>
                </li>
              ))}
            </ul>
            <div className="xp-hydro-case">
              CASE: Inclined Pressure Shafts via Double Shield Mechanization
            </div>
          </article>

          <article className="xp-card xp-card--strata">
            <div className="xp-card__tagrow">
              <span className="tag">03.0 // GEOTECHNICS</span>
              <Icon name="mountain" className="icon xp-card__icon" />
            </div>
            <h3 className="xp-card__h xp-card__h--lg">
              Underground Construction &amp;
              <br className="br-lg" /> Strata Consolidation
            </h3>
            <p className="body" style={{ marginTop: 16 }}>
              Stabilizing fractured lithologies, mitigating heavy water ingress, and deep shaft formation under high
              hydrostatic heads.
            </p>
            <div className="xp-stack">
              {STRATA.map(([t, d]) => (
                <div className="xp-sub xp-sub--row" key={t}>
                  <span className="eyebrow">{t}</span>
                  <p>{d}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="xp-card xp-card--epc">
            <div className="xp-card__tagrow">
              <span className="tag">04.0 // EPC GOVERNANCE</span>
              <Icon name="gauge" className="icon xp-card__icon" />
            </div>
            <h3 className="xp-card__h xp-card__h--lg">
              Project Leadership &amp; EPC
              <br className="br-lg" /> Controls
            </h3>
            <p className="body" style={{ marginTop: 16 }}>
              Direct executive control of multi-billion rupee infrastructure contracts, equipment mobilization, and risk
              mitigation.
            </p>
            <div className="xp-stack">
              {EPC.map(([t, d]) => (
                <div className="xp-sub xp-sub--row" key={t}>
                  <span className="eyebrow">{t}</span>
                  <p>{d}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      {/* ------------------------------------------------ SAFETY */}
      <section className="section section--dark xp-safety">
        <div className="container">
          <div className="xp-safety__tag">
            <span className="xp-safety__pill">GLOBAL STANDARDS PROTOCOL</span>
            <span className="mono" style={{ color: 'var(--sage)' }}>ITA WORKING GROUP 5 // SAFETY REPRESENTATIVE</span>
          </div>

          <div className="xp-safety__grid">
            <div>
              <h2 className="h2" style={{ color: 'var(--bg)' }}>
                “Safety Is Part of the
                <br className="br-lg" /> Engineering.”
              </h2>
              <p className="lead xp-safety__lead">
                Safety in subterranean works is not a procedural checklist; it is an active geotechnical design
                parameter. Under immense earth pressures, human lives and project survivability demand zero-compromise
                governance.
              </p>
              <div className="glass">
                <h3>
                  <Icon name="users" className="icon" /> Official Indian Voting Nominee Since 2010
                </h3>
                <p>
                  Appointed to the prestigious ITA Working Group 5 (Health &amp; Safety in Works), representing India on
                  the International Tunnelling and Underground Space Association governing body.
                </p>
              </div>
              <div className="glass">
                <h3>
                  <Icon name="shield" className="icon" /> International Standard Formulations
                </h3>
                <p>
                  Formulating global guidelines for underground emergency egress, multi-gas autonomous telemetry
                  sensing, refuge chamber life-support parameters, and geotechnical red-stop protocols.
                </p>
              </div>
            </div>

            <aside className="glass glass--lg">
              <span className="mono" style={{ color: 'var(--accent-light)' }}>DOCTORAL RESEARCH PLATFORM</span>
              <h3 className="glass__title">
                PhD in Tunnel Safety
                <br className="br-lg" /> Governance
              </h3>
              <span className="mono" style={{ color: 'var(--sage)' }}>MIT World Peace University (MIT-WPU), Pune</span>
              <p className="glass__text">
                Bridging decades of empirical ground instrumentation observations with modern academic mathematical risk
                models to predict catastrophic collapse pre-conditions in squeezing terrain.
              </p>
              <div className="meter">
                <div className="meter__row">
                  <span>Autonomous Gas Detection Protocol</span>
                  <b>STANDARDIZED</b>
                </div>
                <span className="meter__bar"><i style={{ width: '92%' }} /></span>
              </div>
              <div className="meter">
                <div className="meter__row">
                  <span>
                    Underground Egress &amp; Refuge
                    <br />
                    Mandates
                  </span>
                  <b>
                    ITA
                    <br />
                    COMPLIANT
                  </b>
                </div>
                <span className="meter__bar"><i style={{ width: '100%' }} /></span>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ SCHOLARSHIP */}
      <section className="container xp-edu">
        <span className="mono">02 / PEDAGOGY &amp; SCHOLARSHIP</span>
        <h2 className="h2 xp-edu__title">
          Experience Provides Perspective.
          <br className="br-lg" /> Learning Keeps It Relevant.
        </h2>
        <p className="body xp-edu__lead">
          A lifelong devotion to rigorous technical scholarship, international tunnel specialization, and shaping the
          future curriculum of underground engineering.
        </p>

        <div className="xp-edu__grid">
          <div className="xp-edu__creds">
            {CREDENTIALS.map((c) => (
              <article className="xp-cred" key={c.title}>
                <span className="tag tag--cred">{c.tag}</span>
                <div>
                  <h3>{c.title}</h3>
                  <span className="mono">{c.org}</span>
                  <p>{c.text}</p>
                </div>
              </article>
            ))}
            <article className="xp-faculty">
              <span className="eyebrow" style={{ letterSpacing: '0.6px' }}>FACULTY &amp; MASTERCLASS INSTRUCTION</span>
              <p>Frequent keynote lecturer and executive educator across India's premier engineering institutions:</p>
              <div className="xp-faculty__chips">
                {FACULTY.map((f) => (
                  <span className="tag tag--sand" key={f}>{f}</span>
                ))}
              </div>
            </article>
          </div>

          <div className="xp-edu__photos">
            <figure className="xp-photo">
              <div className="xp-photo__img">
                <img src="/images/keynote-tai.jpg" alt="Dr. Rakesh Kumar Khali delivering a keynote at the TAI Annual Forum" />
                <span className="xp-photo__shade" />
                <figcaption>
                  <span className="mono" style={{ color: 'var(--accent-light)' }}>KEYNOTE SPEAKER</span>
                  <h4>Tunnelling Association of India (TAI) Annual Forum</h4>
                </figcaption>
              </div>
              <div className="xp-photo__bar">
                <span className="mono">EVENT: TAI ANNUAL CONVENTION</span>
                <span className="mono" style={{ fontWeight: 600, color: 'var(--ink)' }}>ORATOR</span>
              </div>
            </figure>
            <div className="xp-edu__small">
              <figure className="xp-mini">
                <img src="/images/book-launch.jpg" alt="Dr. Rakesh Kumar Khali presenting at a CBIP book launch" />
                <figcaption>
                  <span className="mono">CBIP Book Launch</span>
                  <b>Engineering Basics</b>
                </figcaption>
              </figure>
              <figure className="xp-mini">
                <img src="/images/tbm-group.jpg" alt="Dr. Rakesh Kumar Khali with a technical consortium delegation" />
                <figcaption>
                  <span className="mono">Executive Syndicate</span>
                  <b>TBM Working Group</b>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ PAPERS */}
      <section className="container xp-papers">
        <div className="xp-papers__head">
          <div>
            <span className="mono">03 / INDEXED CORPUS</span>
            <h2 className="h2">Curated Published Research</h2>
          </div>
          <p className="xp-papers__note">
            A peer-reviewed selection representing over 100 technical contributions to WTC, CBIP, ITA, and global
            tunneling proceedings.
          </p>
        </div>

        <div className="xp-filters" role="tablist" aria-label="Filter papers by discipline">
          {FILTERS.map(([key, label]) => (
            <button
              key={key}
              role="tab"
              aria-selected={filter === key}
              className={`filter-pill${filter === key ? ' is-active' : ''}`}
              onClick={() => setFilter(key)}
            >
              {label}
              {key === 'all' ? ` [${PAPERS.length}]` : ''}
            </button>
          ))}
        </div>

        <div className="xp-papers__grid">
          {shown.map((p) => (
            <article className="paper" key={p.ref}>
              <div className="paper__top">
                <span className="tag paper__tag">{p.tag}</span>
                <span className="mono" style={{ color: 'var(--accent)' }}>{p.ref}</span>
              </div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <div className="paper__foot">
                <span className="mono">{p.a}</span>
                <span className="mono" style={{ fontWeight: 600, color: 'var(--ink)' }}>{p.b}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="xp-bibliography">
          <div>
            <span className="xp-bibliography__icon"><Icon name="library" /></span>
            <div>
              <h3>Complete 100+ Paper Bibliography</h3>
              <p>Full citations cataloged across CBIP, ITA-AITES, TAI, and international proceedings.</p>
            </div>
          </div>
          <Link to="/journey" className="btn btn--ink">
            Review Citations &amp; Fellowships <Icon name="arrow" />
          </Link>
        </div>
      </section>

      {/* ------------------------------------------------ ADVISORY */}
      <section className="container xp-advisory">
        <div className="xp-advisory__card">
          <div>
            <div className="xp-advisory__tags">
              <span className="tag tag--bg">EXECUTIVE AUDIT GATEWAY</span>
              <span className="mono">CONFIDENTIAL</span>
            </div>
            <h2 className="h2">
              Independent Technical
              <br className="br-lg" /> Advisory &amp; TBM Peer Review
            </h2>
            <p className="body" style={{ marginTop: 16 }}>
              Available for board-level risk committees, mega-tunnel arbitration tribunals, high-overburden geological
              emergency panels, and university visiting masterclasses.
            </p>
            <ul className="xp-advisory__bullets">
              {['Dispute Adjudication', 'ITA-WG5 Safety Audits', 'Mechanized TBM Selection'].map((b) => (
                <li key={b}>
                  <Icon name="check" className="icon" /> {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="xp-advisory__actions">
            <a className="btn btn--ink btn--lg btn--shadow btn--block" href="mailto:?subject=Technical%20Brief">
              Submit Technical Brief
            </a>
            <Link className="btn btn--soft btn--lg btn--block" to="/projects">
              Explore 100+ KM Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
