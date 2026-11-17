import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import SectionHead from '../components/SectionHead.jsx'

const METRICS = [
  ['35+', 'YEARS', 'Underground Infrastructure'],
  ['100+', 'PAPERS', 'Published Research & Studies'],
  ['100+', 'FORUMS', 'Global & National Congresses'],
  ['20+', 'YEARS WTC', 'Official ITA / WTC Representation'],
]

const MANDATE = [
  {
    icon: 'layers',
    kicker: 'STRATEGIC DIVISION',
    title: 'Established GRIL Tunnel & Hydro Vertical',
    text: 'Spearheaded the formulation, operational systems, technical staffing, and bidding mechanisms for the specialized Underground Infrastructure division within GRIL from inception.',
    foot: 'PAN-INDIA FOOTPRINT',
  },
  {
    icon: 'award',
    kicker: 'PROJECT VALUE: ₹600 CR',
    title: 'Adenigarh–Purana Katak Rail Line',
    text: '7.492 km rail tunnel package mobilized ahead of schedule. Bestowed with the prestigious TAI Project of the Year 2025 for outstanding execution and engineering safety.',
    foot: 'TAI PROJECT OF THE YEAR 2025',
    strong: true,
  },
  {
    icon: 'zap',
    kicker: 'PROJECT VALUE: ₹400 CR',
    title: 'Dibang Multipurpose Hydro Project (2,880 MW)',
    text: 'Arunachal Pradesh: Mobilized and targeted 9 km of 11 km total critical tunneling package completion inside an aggressive 2.5 year timeline, handling challenging eastern Himalayan strata.',
    foot: '9 KM IN 2.5 YEARS',
  },
]

const DOMAINS = [
  ['Tunnelling & Underground Construction', 'Expertise in hard rock drill-and-blast, complex cavern excavations, underground powerhouses, and deep rail tunnels under challenging geological conditions.', 'layers'],
  ['Hydro Power Infrastructure', 'Mega hydro schemes including pumped storage, head race tunnels (HRT), surge shafts, pressure shafts, and deep desilting chambers.', 'drop'],
  ['Project Leadership', 'End-to-end execution of large-scale infrastructure assets valued above ₹1,000 Cr, from contract mobilization and claim defense to timely handover.', 'flag'],
  ['Construction Management', 'Resource scheduling, heavy equipment deployment, supply chain resilience in remote Himalayan valleys, and precise quality assurance.', 'tool'],
  ['Tunnel Safety & ITA WG5', 'Active national representative on the International Tunnelling and Underground Space Association (ITA) Working Group 5 (Health & Safety in Works).', 'shield'],
  ['Modern Tunnelling Technologies', 'TBM deployment, NATM instrumentation, fiber-reinforced shotcrete, 3D laser profiling, and geological advance probing systems.', 'cpu'],
]

const CITIES = ['Sydney', 'Vancouver', 'Geneva', 'San Francisco', 'Dubai', 'Athens', 'Shenzhen']

const AWARDS = [
  {
    meta: '2025 · STOCKHOLM',
    title: 'ITA Fellow Award',
    text: 'Conferred by the International Tunnelling and Underground Space Association (ITA-AITES) at the World Tunnel Congress 2025 in Stockholm for distinguished lifelong contributions.',
    foot: 'GLOBAL FELLOWSHIP',
    icon: 'award',
  },
  {
    meta: '2025 · NEW DELHI',
    title: 'Project of the Year Award',
    text: 'Awarded by the Tunnelling Association of India (TAI) for the rapid, safe mobilization and tunneling execution of the Adenigarh–Purana Katak rail tunnel.',
    foot: 'TUNNELLING ASSOC. OF INDIA',
    icon: 'flag',
  },
  {
    meta: '2005 · CAMBRIDGE',
    title: 'International Professional of the Year',
    text: 'Honored by the International Biographical Centre (IBC), Cambridge, England, acknowledging early-career groundbreaking contributions to subterranean engineering.',
    foot: 'IBC CAMBRIDGE, UK',
    icon: 'globe',
  },
]

export default function Home() {
  return (
    <div className="home">
      {/* ------------------------------------------------ HERO */}
      <section className="home-hero container">
        <div className="home-hero__grid">
          <div className="home-hero__copy">
            <div className="home-hero__tag">
              <span className="dot" />
              <span className="eyebrow">SENIOR VICE PRESIDENT · TUNNEL · UNDERGROUND WORKS · HYDRO POWER</span>
            </div>
            <span className="eyebrow eyebrow--muted home-hero__sub">CIVIL INFRASTRUCTURE &amp; SUBTERRANEAN STRATEGY</span>
            <h1 className="h-display">
              DR. RAKESH
              <br />
              KUMAR KHALI
            </h1>
            <p className="home-hero__tagline">
              35+ Years of Experience Beneath the <br className="br-lg" />
              Surface.
            </p>
            <p className="body home-hero__intro">
              A civil engineering and tunnelling professional whose career spans more than three decades across hydro
              power, underground infrastructure, railway tunnelling, project leadership and technical innovation.
            </p>
            <div className="home-hero__actions">
              <Link to="/journey" className="btn btn--dark btn--lg btn--shadow">
                Explore the Journey <Icon name="arrow" />
              </Link>
              <Link to="/projects" className="btn btn--soft-2 btn--lg">
                View Projects <Icon name="arrow" />
              </Link>
            </div>
          </div>

          <div className="home-hero__portrait">
            <span className="home-hero__shape home-hero__shape--a" />
            <span className="home-hero__shape home-hero__shape--b" />
            <div className="home-hero__frame">
              <img
                src="/images/hero-portrait.png"
                alt="Dr. Rakesh Kumar Khali delivering a keynote address"
                fetchpriority="high"
              />
              <span className="home-hero__shade" />
              <div className="home-hero__caption">
                <div>
                  <span className="home-hero__caption-k">WORLD STAGE KEYNOTE</span>
                  <span className="home-hero__caption-v">Stockholm / Geneva / New Delhi</span>
                </div>
                <Icon name="globe" />
              </div>
            </div>
            <div className="home-hero__badge">
              <span className="eyebrow" style={{ fontWeight: 600 }}>DIVISION LEADERSHIP</span>
              <span>
                G R Infraprojects Limited
                <br />
                (Tunnel &amp; Hydro)
              </span>
            </div>
          </div>
        </div>

        <div className="metrics-bar">
          {METRICS.map(([n, k, d]) => (
            <div className="metrics-bar__item" key={k}>
              <span className="metrics-bar__n">{n}</span>
              <span className="eyebrow metrics-bar__k">{k}</span>
              <span className="metrics-bar__d">{d}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------ PROFESSIONAL */}
      <section className="section section--surface section--tight">
        <div className="container home-pro">
          <div className="home-pro__left">
            <span className="eyebrow">THE PROFESSIONAL</span>
            <h2 className="h2">
              Experience That <br className="br-lg" />
              Goes Deeper.
            </h2>
            <span className="divider-bar" />
          </div>
          <div className="home-pro__right">
            <p className="lead home-pro__lead">
              Over more than three and a half decades, Dr. Rakesh Kumar Khali has worked across some of India's most
              demanding tunnelling, hydro and underground infrastructure environments, progressing from field
              engineering roles to senior corporate leadership.
            </p>
            <p className="body">
              From tackling high-overburden geological surprises in Himalayan thrust faults to establishing modern
              mechanised underground verticals for leading infrastructure firms, his career synthesises hands-on
              empirical geology with high-level corporate governance.
            </p>
            <Link to="/journey" className="text-link">
              Discover the Journey <Icon name="arrow" />
            </Link>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ CURRENT MANDATE */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="CURRENT MANDATE"
            title={
              <>
                Leading Tunnel, Underground
                <br className="br-lg" /> Works &amp; Hydro Operations.
              </>
            }
            desc="Senior Vice President – Operations at G R Infraprojects Limited. Leading PAN-India operations across subterranean transit and hydro energy since March 2022."
            action={{ to: '/journey', label: 'View current mandate' }}
          />
          <div className="mandate-grid">
            {MANDATE.map((c) => (
              <article className="mandate-card" key={c.title}>
                <div>
                  <span className="mandate-card__icon">
                    <Icon name={c.icon} />
                  </span>
                  <span className="mono mandate-card__kicker">{c.kicker}</span>
                  <h3 className="mandate-card__title">{c.title}</h3>
                  <p className="mandate-card__text">{c.text}</p>
                </div>
                <p className={`mandate-card__foot${c.strong ? ' is-strong' : ''}`}>{c.foot}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ CORE DOMAINS */}
      <section className="section section--surface">
        <div className="container">
          <SectionHead
            eyebrow="CORE DOMAINS"
            title="Built on Technical Depth."
            desc="A comprehensive matrix of operational mastery, modern excavation paradigms, and international technical advisory."
            action={{ to: '/expertise', label: 'Explore expertise', variant: 'btn--dark' }}
          />
          <div className="domain-grid">
            {DOMAINS.map(([title, text, icon], i) => (
              <article className="domain-card" key={title}>
                <div className="domain-card__top">
                  <span className="eyebrow">SYS // 0{i + 1}</span>
                  <Icon name={icon} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ PROJECTS */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="PORTFOLIO HIGHLIGHTS"
            title="Projects Beneath the Surface."
            desc="Engineering benchmarks delivered across high-consequence railway alignments and hydroelectric undertakings."
            action={{ to: '/projects', label: 'View all projects' }}
          />
          <div className="feature-grid">
            <article className="feature-card feature-card--a">
              <div className="feature-card__media feature-card__media--plain">
                <span className="feature-card__shade" />
                <span className="tag tag--ink feature-card__badge">TAI PROJECT OF THE YEAR 2025</span>
                <div className="feature-card__cap">
                  <span className="eyebrow">RAILWAY INFRASTRUCTURE · ODISHA</span>
                  <h3>Adenigarh–Purana Katak Rail Line</h3>
                </div>
              </div>
              <div className="feature-card__body">
                <p>
                  7.492 km railway tunnel executed in record time. Overcoming complex fragile geotechnical rock strata,
                  heavy ingress, and remote logistical constraints to secure national acclaim.
                </p>
                <div className="feature-card__meta">
                  <span>VALUE: ₹600 CR</span>
                  <span>LENGTH: 7.492 KM</span>
                  <strong>GRIL MANDATE</strong>
                </div>
              </div>
            </article>

            <article className="feature-card feature-card--b">
              <div className="feature-card__media">
                <img src="/images/dibang-card.jpg" alt="Dibang Multipurpose Hydro Project tunnel works" />
                <span className="feature-card__shade" />
                <div className="feature-card__cap">
                  <span className="eyebrow">HYDRO POWER · ARUNACHAL PRADESH</span>
                  <h3 style={{ fontWeight: 500 }}>Dibang Multipurpose (2,880 MW)</h3>
                </div>
              </div>
              <div className="feature-card__body">
                <p>
                  Massive 2,880 MW hydroelectric package. Excavating 9 km out of an 11 km complex tunnel system within an
                  aggressive 2.5-year window in challenging Himalayan conditions.
                </p>
                <div className="feature-card__meta">
                  <span>VALUE: ₹400 CR</span>
                  <span>PAC: 9 KM TUNNELLING</span>
                </div>
              </div>
            </article>
          </div>

          <div className="feature-grid feature-grid--2">
            <article className="feature-card feature-card--c feature-card--text">
              <span className="eyebrow">PUMPED STORAGE · UTTARAKHAND</span>
              <h3>Tehri Pump Storage Project (1,000 MW)</h3>
              <p>
                Supervised the construction of large machine hall caverns, transformer halls, and vertical shafts in
                jointed phyllites, establishing critical benchmark practices for pumped-storage installations in India.
              </p>
              <div className="feature-card__meta">
                <span>CAPACITY: 1,000 MW</span>
                <span>GEOLOGY: METASEDIMENTARY</span>
              </div>
            </article>

            <article className="feature-card feature-card--d feature-card--text">
              <span className="eyebrow">HYDRO TUNNELLING · SIKKIM</span>
              <h3>Teesta Head Race Tunnel (14 km)</h3>
              <p>
                Pivotal leadership on the 14-kilometer head race tunnel navigating major squeezing ground, heavy water
                ingress, and fragile fault zones in the Eastern Himalayas.
              </p>
              <div className="feature-card__meta">
                <span>LENGTH: 14 KM HRT</span>
                <span>CHALLENGE: SQUEEZING ROCK</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ GLOBAL */}
      <section className="section section--surface">
        <div className="container global">
          <div>
            <span className="eyebrow">INTERNATIONAL DELEGATION</span>
            <h2 className="h2 global__title">
              From the Himalayas to
              <br className="br-lg" /> the World Tunnel
              <br className="br-lg" /> Congress.
            </h2>
            <p className="body global__text">
              Representing Indian tunneling engineering on global platforms for over two decades. An active voting
              delegate, session chair, and technical author across World Tunnel Congress summits spanning five
              continents.
            </p>
            <span className="mono global__label">WTC SUMMIT PARTICIPATION</span>
            <div className="global__chips">
              {CITIES.map((c) => (
                <span className="chip" key={c}>{c}</span>
              ))}
              <span className="chip chip--hot">Stockholm 2025</span>
              <span className="chip chip--dim">Montreal 2026</span>
            </div>
            <Link to="/journey" className="btn btn--ink btn--lg global__cta">
              Explore Global Journey <Icon name="arrow" />
            </Link>
          </div>

          <div className="global__visual">
            <div className="global__photos">
              <div className="global__photo global__photo--solid" />
              <div className="global__photo">
                <img src="/images/delegation.jpg" alt="International conference delegation group photograph" />
              </div>
            </div>
            <div className="global__bar">
              <span>
                <Icon name="check" className="icon icon--sm" /> Official Indian Delegate &amp; Member · ITA WG5 (Tunnel
                Safety)
              </span>
              <span className="mono">2005—PRESENT</span>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ RECOGNITION */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="HONORS & HONOURS"
            title="Recognition Along the Way."
            desc="National and international industry distinctions celebrating technical excellence and underground innovation."
            action={{ to: '/expertise', label: 'View recognition' }}
          />
          <div className="award-grid">
            {AWARDS.map((a) => (
              <article className="award-card" key={a.title}>
                <div>
                  <span className="eyebrow">{a.meta}</span>
                  <h3>{a.title}</h3>
                  <p>{a.text}</p>
                </div>
                <div className="award-card__foot">
                  <Icon name={a.icon} className="icon icon--sm" />
                  <span>{a.foot}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ LEARNING */}
      <section className="section section--surface">
        <div className="container learn">
          <div>
            <span className="eyebrow">ACADEMIC RIGOR &amp; RESEARCH</span>
            <h2 className="h2" style={{ marginTop: 8 }}>
              Still Learning. Still Evolving.
            </h2>
            <div className="learn__cards">
              <div className="learn__card">
                <span className="eyebrow">M.TECH // MIT-WPU</span>
                <h3>CGPA 9.46</h3>
                <p>Tunnel Engineering Master’s with distinction.</p>
              </div>
              <div className="learn__card">
                <span className="eyebrow">SPECIALIZATION // CH</span>
                <h3>Switzerland</h3>
                <p>Advanced Mechanized Tunnelling certification.</p>
              </div>
              <div className="learn__card">
                <span className="eyebrow">DOCTORAL RESEARCH</span>
                <h3>Tunnel Safety</h3>
                <p>PhD research advancing risk governance models.</p>
              </div>
            </div>
          </div>

          <figure className="quote-card">
            <span className="quote-card__mark" aria-hidden="true">
              “
            </span>
            <blockquote>
              “The deeper the challenge, the greater the opportunity to learn, innovate, and build foundations that
              last generations.”
            </blockquote>
            <figcaption>
              <span className="quote-card__avatar">RK</span>
              <span>
                <strong>DR. RAKESH KUMAR KHALI</strong>
                <em>Tectonic Philosophy</em>
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ------------------------------------------------ FINAL CTA */}
      <section className="section section--dark home-cta">
        <div className="container home-cta__inner">
          <span className="home-cta__tag">
            <span className="dot" />
            <span className="eyebrow" style={{ color: 'var(--sage)' }}>CONTINUOUS PROGRESSION</span>
          </span>
          <h2 className="h2" style={{ color: 'var(--bg)' }}>
            A Career Still Moving Forward.
          </h2>
          <p className="home-cta__text">
            More than three decades of experience provide the foundation. Continuous learning, technical contribution
            and the pursuit of better underground solutions shape what comes next.
          </p>
          <div className="home-cta__actions">
            <Link to="/journey" className="btn btn--light btn--xl btn--lg btn--shadow">
              Explore the Journey
            </Link>
            <a className="btn btn--outline-light btn--xl" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
