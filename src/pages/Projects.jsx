import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'

const STRIPS = [
  { k: 'SUBTERRANEAN EXTENT', n: '120', u: 'KILOMETERS EXCAVATED', d: 'Spanning NATM drill-and-blast, double-shield TBM, and cut-and-cover arteries.' },
  { k: 'INSTALLED CAPACITY', n: '8,400', u: 'MEGAWATTS DIRECTED', d: 'Hydroelectric and pumped storage schemes engineered across northern rivers.' },
  { k: 'FISCAL STEWARDSHIP', n: '₹18,000', u: 'CRORES CAPEX GOVERNED', d: 'EPC contracts, item-rate delivery, and government agency joint ventures.' },
]

const CASES = [
  {
    id: 'dibang',
    cat: 'hydro',
    chip: 'HYDRO & DIVERSION',
    value: '₹400 CR PACKAGE',
    place: 'ARUNACHAL PRADESH',
    title: 'Dibang Multipurpose Project (2,880 MW)',
    text: "Directing the subterranean vanguard for India's largest planned hydroelectric installation. Governing high-velocity access tunnel excavation through the fragile, young geologies of the Eastern Himalayas under critical monsoon deadlines.",
    stats: [['CLIENT AUTHORITY', 'NHPC Limited'], ['EXCAVATION METRIC', '9 km of 11 km Driven'], ['EXECUTION WINDOW', '2.5 Years Total', true]],
    roleLabel: 'ROLE ASSIGNED',
    role: 'Senior Executive Leadership / Vertical Head — GRIL',
    badge: 'CONTROLLED DRILL & BLAST',
    img: '/images/dibang-case.jpg',
    imgAlt: 'Dibang tunnel face with rock bolts and shotcrete',
    logLabel: 'FIELD LOG',
    log: 'Driven through severe shear seams with self-drilling friction rock bolts and fiber-reinforced shotcrete rounds.',
  },
  {
    id: 'adenigarh',
    cat: 'railway',
    flip: true,
    chip: 'BROAD GAUGE RAILWAY',
    value: '₹600 CR',
    place: 'ODISHA // EAST COAST RAILWAY',
    title: 'Adenigarh – Purana Katak Rail Line',
    text: 'Execution of the critical 7.492 km broad gauge subterranean artery through challenging Eastern Ghats lithology. Mobilized ahead of scheduled baselines with a certified zero-harm incident record.',
    stats: [['METHODOLOGY', 'Full-Face NATM'], ['TOTAL BORE LENGTH', '7.492 Kilometers'], ['ACCOLADE', 'TAI National Winner', true]],
    roleLabel: 'LEADERSHIP RESPONSIBILITY',
    role: 'Senior Vice President — Operations (GRIL)',
    badge: 'PRE-TARGET BREAKTHROUGH',
    img: '/images/adenigarh-case.jpg',
    imgAlt: 'Adenigarh–Purana Katak rail tunnel works',
    corner: 'TAI PROJECT OF THE YEAR 2025',
  },
  {
    id: 'usbrl',
    cat: 'railway',
    chip: 'STRATEGIC RAILWAY',
    value: 'NATIONAL PRIORITY PROJECT',
    place: 'JAMMU & KASHMIR // NORTHERN RAILWAY',
    title: 'USBRL Pir Panjal: T-48 & T-49A',
    text: 'Pioneering advanced NATM tunneling through the high-stress Murree Formation. Implemented yielding steel support systems, heavy forepoling umbrellas, and 3D optical target convergence monitoring to counteract severe squeezing ground.',
    stats: [['CONTRACTOR GROUP', 'Hindustan Construction'], ['GEOLOGICAL STRESS', 'Severe Squeezing'], ['SUPPORT TECHNOLOGY', 'Yielding Steel Ribs', true]],
    roleLabel: 'SUPERVISORY COMMAND',
    role: 'Tunnel In-Charge & Technical Specialist',
    badge: 'REAL-TIME 3D CONVERGENCE',
    img: '/images/usbrl-case.jpg',
    imgAlt: 'T-49A tunnel breakthrough crew',
    logLabel: 'FACE EXCAVATION LOG',
    log: 'T-49A Breakthrough Crew upon reaching stable granite intersection under 800m rock overburden.',
    logBox: true,
  },
]

const BENTO = [
  { id: 'tehri', cat: 'caverns', chip: 'CAVERNS & SHAFTS', value: '1,000 MW', title: 'Tehri Pump Storage Project', text: 'Twin vertical pressure shafts plunging over 600m depth, massive machine cavern and transformer hall excavation under rigid EPC parameters in Uttarakhand.', rows: [['VERTICAL DEPTH', '600+ Meters'], ['FACILITY TYPE', 'Underground Machine Hall'], ['LOCATION', 'Tehri, Uttarakhand']], foot: 'Deep Shaft Slipform Concreting' },
  { id: 'vishnugad', cat: 'hydro', chip: 'TBM HYDRO', value: '444 MW', title: 'Vishnugad Pipalkoti HEP', text: 'Deployment of 9.86 m diameter Double Shield Tunnel Boring Machine (TBM) under high overburden, managing thrust block installations and segmental lining integrity.', rows: [['CUTTERHEAD DIA.', '9.86 Meters'], ['SYSTEM', 'Double Shield TBM'], ['LOCATION', 'Alaknanda Basin, UK']], foot: 'Segmental Precast Ring Lining' },
  { id: 'tapovan', cat: 'hydro', chip: 'CRITICAL DIVERSION', value: '520 MW', title: 'Tapovan Vishnugad HEP', text: 'Head Race Tunnel (HRT) drive navigating cataclysmic mud and high-pressure geothermal ingress events, salvaging mechanized heading under extreme hydraulic pressure.', rows: [['WATER INGRESS CONTROL', '> 1,200 L/sec'], ['TUNNEL ELEMENT', 'Head Race Tunnel'], ['LOCATION', 'Dhauliganga, UK']], foot: 'Polyurethane Grout Cutoff' },
  { id: 'sidhi', cat: 'railway', chip: 'RAILWAY / EPC', value: '₹2,000 CR', title: 'Sidhi – Singrauli BG Rail Line', text: 'Strategic heavy-haul rail corridor for Western Central Railway. Executed hybrid EPC contracts across multiple cut-and-cover transitions, viaduct approaches, and rail tunnels.', rows: [['CORRIDOR CLASS', 'Heavy Coal / Freight'], ['DELIVERY FORMAT', 'Hybrid EPC + Item Rate'], ['LOCATION', 'Madhya Pradesh']], foot: 'Freight Transit Corridor' },
  { id: 'teesta', cat: 'hydro', chip: 'HIMALAYAN HYDRO', value: '₹565 CR', title: 'Teesta Head Race Tunnel (14 km)', text: 'A landmark benchmark in the Sikkim Himalayas: 14 km horseshoe tunnel driven across multiple high-displacement regional fault zones under heavy hydrostatic pressure.', rows: [['TUNNEL PROFILE', '14.0 km Horseshoe'], ['OVERBURDEN', 'Max 1,100 Meters'], ['LOCATION', 'Teesta Basin, Sikkim']], foot: 'Active Thrust Crossings' },
  { id: 'parbati', cat: 'caverns', chip: 'TBM & CAVERNS', value: '800 MW', title: 'Parbati H.E. Project – Stage II', text: 'Scale package of ₹603 Cr: Twin inclined pressure shafts, 6.693 km HRT, and subterranean powerhouse cavern driven through high-strength granitic gneiss.', rows: [['PRESSURE SHAFTS', 'Twin 30° Inclined'], ['POWERHOUSE SPAN', '22m x 45m x 150m'], ['LOCATION', 'Kullu, Himachal Pradesh']], foot: 'Granitic Mass Cavities' },
  { id: 'sewa', cat: 'hydro', chip: 'HYDRO EXCAVATION', value: '120 MW', title: 'Sewa H.E. Project', text: 'Excavation of 10.02 km Head Race Tunnel (3.6m finished diameter), underground desilting basins, and surge chamber systems under high water-table conditions.', rows: [['BORE PROFILE', '10.02 km @ 3.6m Ø'], ['FACILITY', 'Desilting Complex'], ['LOCATION', 'Kathua, Jammu & Kashmir']], foot: 'High-Velocity Sediment Traps' },
  { id: 'ratle', cat: 'hydro', chip: 'RIVER DIVERSION / CAVERN', value: '₹6,500 CR', title: 'Ratle H.E. Project (850 MW)', text: 'Role as Project Head & Engineer-in-Charge on the raging Chenab River. Directed complete river diversion tunnels, portal development, and preparatory deep shafts ahead of seasonal monsoons.', rows: [['ROLE', 'Project Head / EiC'], ['DIVERSION STATUS', 'Pre-Flood Commissioning'], ['LOCATION', 'Kishtwar, J&K']], foot: 'High-Discharge River Rerouting' },
  { id: 'rishikesh', cat: 'railway', chip: 'NATIONAL CORRIDOR', value: 'PACKAGE 9', title: 'Rishikesh – Karanprayag Rail Line', text: 'Critical Garhwal Himalayan rail link. NATM tunnel excavation through brittle quartzites and phyllite shears directly adjacent to the Main Central Thrust (MCT) zone.', rows: [['CLIENT', 'RVNL'], ['GEOLOGICAL BOUNDARY', 'Main Central Thrust (MCT)'], ['LOCATION', 'Garhwal, Uttarakhand']], foot: 'Brittle Fracture Control' },
]

const FILTERS = [
  ['all', 'ALL', 12],
  ['hydro', 'HYDRO', 6],
  ['railway', 'RAILWAY', 4],
  ['caverns', 'CAVERNS & SHAFTS', 2],
]

const METHODS = [
  ['METHOD // 01', 'High-Speed Headings', 'Optimized drill-and-blast cycle rotations using precision electronic detonators and parallel computer-guided jumbos, delivering up to 180m monthly advance in hard rock.', 'ADVANCE METRIC', 'Continuous 3-Shift Cycle Control'],
  ['METHOD // 02', '3D Deformation Monitoring', 'Real-time bi-reflector optical convergence targets and multipoint borehole extensometers connected to live dataloggers for predicting ground relaxation curves.', 'TOLERANCE BOUND', '±1.0 mm Optical Precision'],
  ['METHOD // 03', 'Hydraulic Ingress Sealing', 'High-pressure microfine cementitious and polyurethane pre-grouting forward umbrellas drilled ahead of the face to cut off explosive groundwater conduits before excavation.', 'SEALING PRESSURE', 'Up to 60 Bar Grout Injection'],
  ['METHOD // 04', 'Squeezing Rock Containment', 'Yielding steel arches with slotted frictional connection couplings and fiber shotcrete decompression slots that accommodate severe strain energy without sudden collapse.', 'STRAIN ALLOWANCE', 'Controlled Dissipation Margins'],
]

function Case({ c }) {
  return (
    <article className={`case${c.flip ? ' case--flip' : ''}`}>
      <div className="case__body">
        <div className="case__meta">
          <span className="tag tag--text">{c.chip}</span>
          <span className="mono" style={{ color: 'var(--accent)' }}>{c.value}</span>
          <span className="dot dot--sm" />
          <span className="mono">{c.place}</span>
        </div>
        <h3 className="case__title">{c.title}</h3>
        <p className="body">{c.text}</p>
        <div className="case__stats">
          {c.stats.map(([k, v, hot]) => (
            <div key={k}>
              <span className="mono">{k}</span>
              <b className={hot ? 'is-hot' : ''}>{v}</b>
            </div>
          ))}
        </div>
        <div className="case__role">
          <div>
            <span className="mono">{c.roleLabel}</span>
            <p>{c.role}</p>
          </div>
          <span className="case__badge">
            <Icon name="check" className="icon" /> {c.badge}
          </span>
        </div>
      </div>

      <div className="case__media">
        <img src={c.img} alt={c.imgAlt} loading="lazy" />
        {c.corner && <span className="case__corner">{c.corner}</span>}
        {c.log && (
          <div className={`case__log${c.logBox ? ' case__log--box' : ''}`}>
            <span className="mono" style={{ color: 'var(--accent-light)', letterSpacing: c.logBox ? '0.6px' : undefined }}>
              {c.logLabel}
            </span>
            <p>{c.log}</p>
          </div>
        )}
      </div>
    </article>
  )
}

export default function Projects() {
  const [cat, setCat] = useState('all')
  const show = (c) => cat === 'all' || c.cat === cat

  return (
    <div className="projects">
      {/* ------------------------------------------------ HEADER */}
      <section className="pj-head">
        <div className="container">
          <div className="pj-head__tag">
            <span className="eyebrow">PORTFOLIO INDEX // SEC. 03</span>
            <span className="dot" />
            <span className="mono">1989 — 2025 COMPREHENSIVE DOSSIER</span>
          </div>

          <div className="pj-head__grid">
            <div>
              <h1 className="h2">Projects Beneath the Surface.</h1>
              <p className="lead" style={{ marginTop: 16 }}>
                A portfolio shaped by subterranean rail systems, high-head hydro energy corridors, deep rock caverns,
                and extreme Himalayan civil infrastructure directed over 35 years of field command.
              </p>
            </div>
            <aside className="pj-head__aside">
              <span className="mono">OPERATIONAL MANDATE</span>
              <p>
                Geotechnical containment, high-speed tunnel advance, and zero-compromise safety across the world's most
                unstable thrust faults.
              </p>
            </aside>
          </div>

          <div className="pj-strips">
            {STRIPS.map((s) => (
              <div className="pj-strip" key={s.k}>
                <span className="mono">{s.k}</span>
                <div className="pj-strip__n">
                  {s.n}
                  <i>+</i>
                </div>
                <b className="mono">{s.u}</b>
                <p>{s.d}</p>
              </div>
            ))}
            <div className="pj-strip">
              <span className="mono">STRATA CONQUERED</span>
              <h3>Himalayan Thrusts &amp; Murree Squeezing</h3>
              <b className="mono" style={{ color: 'var(--accent)', fontWeight: 500 }}>GRANITIC GNEISS / HEAVY OVERBURDEN</b>
              <p>Overcoming high hydrostatic heads, fault clay gouges, and rockburst hazards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ FILTER */}
      <section className="container pj-filter">
        <div className="pj-filter__label">
          <Icon name="grid" className="icon" />
          <span className="mono">FILTER PORTFOLIO DOMAIN:</span>
        </div>
        <div className="pj-filter__pills" role="tablist" aria-label="Filter projects by domain">
          {FILTERS.map(([key, label, n]) => (
            <button
              key={key}
              role="tab"
              aria-selected={cat === key}
              className={`pj-pill${cat === key ? ' is-active' : ''}`}
              onClick={() => setCat(key)}
            >
              {label} ({n})
            </button>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------ CASES */}
      <section className="container pj-cases">
        {CASES.filter(show).map((c) => (
          <Case key={c.id} c={c} />
        ))}

        <div className="pj-bento">
          {BENTO.filter(show).map((p) => (
            <article className="bento" key={p.id}>
              <div className="bento__top">
                <span className="tag tag--text">{p.chip}</span>
                <span className="mono" style={{ color: 'var(--accent)', fontWeight: 600 }}>{p.value}</span>
              </div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <dl className="bento__spec">
                {p.rows.map(([k, v]) => (
                  <div key={k}>
                    <dt>{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
              <div className="bento__foot">
                <Icon name="radio" className="icon" />
                <span className="mono">{p.foot}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------ BLUEPRINT */}
      <section className="pj-blueprint">
        <div className="pj-blueprint__inner">
          <div className="container">
            <span className="eyebrow">ENGINEERING PROTOCOL</span>
            <h2 className="h2" style={{ marginTop: 8 }}>Subterranean Execution Breakdown</h2>
            <p className="body" style={{ marginTop: 8, maxWidth: 651 }}>
              Four proprietary operational protocols deployed across 35 years of high-risk tunnel driving under unstable
              geologies.
            </p>
            <div className="pj-methods">
              {METHODS.map(([k, t, d, ml, mv]) => (
                <article className="method" key={k}>
                  <span className="eyebrow">{k}</span>
                  <h3>{t}</h3>
                  <p>{d}</p>
                  <div className="method__metric">
                    <span className="mono">{ml}</span>
                    <b>{mv}</b>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ GEOGRAPHY */}
      <section className="container pj-geo">
        <div className="pj-geo__card">
          <div className="pj-geo__text">
            <div className="pj-geo__label">
              <Icon name="globe" className="icon" />
              <span className="mono">SUBTERRANEAN CORRIDOR ARCHIVE</span>
            </div>
            <h2>
              Spatially Distributed
              <br className="br-lg" /> Engineering Command
            </h2>
            <p className="body">
              From the deep shear zones of Jammu &amp; Kashmir to the high-rainfall folded geology of Arunachal Pradesh
              and the crystalline metamorphic shield of Odisha, Dr. Khali's tunnel operational portfolios represent
              unmatched pan-Indian subterranean deployment.
            </p>
            <div className="pj-geo__rows">
              {[
                ['Himalayan Thrust Belts (J&K, HP, UK)', '8 Mega Projects'],
                ['Eastern Sub-Himalayas (Arunachal & Sikkim)', '2 Mega Projects'],
                ['Peninsular & Eastern Ghats (Odisha & MP)', '2 Mega Projects'],
              ].map(([a, b]) => (
                <div key={a}>
                  <span>{a}</span>
                  <b className="mono">{b}</b>
                </div>
              ))}
            </div>
            <Link to="/expertise" className="text-link">
              Inspect full TBM &amp; NATM technical specs <Icon name="arrow" />
            </Link>
          </div>
          <div className="pj-geo__map">
            <img src="/images/map.png" alt="Map of India showing tunnelling project locations" loading="lazy" />
            <span className="pj-geo__veil" />
            <div className="pj-geo__hq">
              <span className="mono">HEADQUARTERS COMMAND</span>
              <b>G R Infraprojects Ltd — Gurugram / Delhi NCR</b>
            </div>
            <span className="pj-geo__btn">MAP INTERFACE: 12 STRATEGIC PORTFOLIOS</span>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ CTA */}
      <section className="pj-cta">
        <div className="container pj-cta__inner">
          <div>
            <span className="eyebrow" style={{ color: 'var(--accent-light)' }}>STRATEGIC COLLABORATION</span>
            <h2 className="h2" style={{ color: '#fff', marginTop: 8 }}>
              Need Operational Tunneling
              <br className="br-lg" /> Leadership?
            </h2>
            <p className="body" style={{ marginTop: 16, maxWidth: 624, color: 'rgba(242, 224, 194, 0.85)' }}>
              Available for high-stakes executive consultation, international tunneling panels, failure mitigation
              audits, and complex subterranean EPC directorship.
            </p>
          </div>
          <div className="pj-cta__actions">
            <Link to="/expertise" className="btn btn--light btn--lg btn--wrap btn--shadow">
              Methodologies &amp; Patents
            </Link>
            <a className="btn btn--accent btn--lg btn--wrap" href="mailto:?subject=Executive%20Session">
              Schedule Executive Session
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
