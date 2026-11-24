import Icon from '../components/Icon.jsx'
import { useContact } from '../components/ContactModal.jsx'
import { BOOK_FILES, CHAPTERS } from '../data/book.js'

const EVENT = [
  {
    cls: 'bk-ev--wide',
    tag: 'KEYNOTE ADDRESS',
    img: '04',
    title: 'Keynote Presentation by Dr. Rakesh Kumar Khali',
    text: 'Dr. Khali addresses the assembly of infrastructure leaders, explaining the impetus for standardized undergraduate technical educational curricula.',
  },
  {
    cls: 'bk-ev--wide',
    tag: 'UNVEILING CEREMONY',
    img: '03',
    title: 'Unveiling with Senior Leadership',
    text: 'Dr. R.K. Khali with CBIP and TAI office-bearers on the ceremonial podium, presenting the first edition.',
  },
  {
    tag: 'AUTHOR DESK',
    img: '15',
    title: 'The Unveiled Volume',
    text: 'The dais assembled with the first copies of the guidebook at the head of the auditorium.',
  },
  {
    tag: 'SYMPOSIUM',
    img: '12',
    title: 'Deliberations & Q&A',
    text: 'Engaging with senior delegates and the audience on pedagogy, applicability, and the future of tunnelling education.',
  },
  {
    tag: 'PEER REVIEW',
    img: '19',
    title: 'Institutional Synergy',
    text: 'Dr. Khali with fellow committee members in conversation following the formal release.',
  },
  {
    cls: 'bk-ev--full',
    tag: 'EXECUTIVE ROUNDTABLE',
    img: '22',
    title: 'Post-Launch Committee Roundtable & Technical Curriculum Integration',
    text: 'Following the formal release, the editorial team held closed deliberations on integrating the guidebook into curricula at leading institutes of technology, engineering colleges, and border infrastructure training divisions.',
  },
]

export default function Book() {
  const { openContact } = useContact()

  return (
    <div className="book">
      <div className="bk-meta">
        <div className="container bk-meta__inner">
          <span className="mono">
            <i className="dot" /> ARCHIVE // PUBLICATIONS · CBIP-TAI-MANUAL-2024
          </span>
          <span className="tag tag--sand">INSTITUTIONAL TECHNICAL STANDARD</span>
        </div>
      </div>

      {/* ------------------------------------------------ HERO */}
      <section className="bk-hero">
        <div className="container">
          <span className="eyebrow eyebrow--muted">
            TECHNICAL PUBLICATION &amp; EDUCATIONAL RESOURCE // UNDER THE AEGIS OF CBIP &amp; TAI
          </span>
          <h1 className="h-display bk-hero__title">Tunnel Engineering Basics</h1>
          <p className="lead bk-hero__sub">Where Soil &amp; Rock Mechanics Meet the Art of Underground Design</p>
          <ul className="bk-hero__tags">
            <li className="tag tag--sand">Target: Undergraduate Engineers &amp; Young Practitioners</li>
            <li className="tag tag--sand">Endorsed by: Tunnelling Association of India &amp; CBIP</li>
            <li className="tag tag--sand">Note: Co-Author &amp; Publication Committee Editor</li>
            <li className="tag tag--sand">Format: Comprehensive Academic Guide &amp; Field Manual</li>
          </ul>

          <div className="bk-hero__grid">
            <figure className="bk-covers">
              <figcaption className="bk-covers__cap">
                <span className="mono">FIGURE ARCHIVE: VOL. 01 · JACKET SPECIFICATION SCHEMATIC</span>
                <span className="tag tag--sand-2">SET PRINTING</span>
              </figcaption>
              <div className="bk-covers__pair">
                <a href={BOOK_FILES.frontCover} target="_blank" rel="noopener noreferrer" className="bk-cover">
                  <img src="/images/book/front-cover.jpg" alt="Tunnel Engineering Basics — front cover" />
                  <span className="mono">OFFICIAL FRONT COVER</span>
                  <small>Front cover page — high-resolution visual jacket · 300 DPI hardback specification</small>
                </a>
                <a href={BOOK_FILES.backCover} target="_blank" rel="noopener noreferrer" className="bk-cover">
                  <img src="/images/book/back-cover.jpg" alt="Tunnel Engineering Basics — back cover" />
                  <span className="mono">OFFICIAL BACK COVER</span>
                  <small>Back cover jacket — includes endorsement blurb &amp; barcode</small>
                </a>
              </div>
            </figure>

            <aside className="bk-specs">
              <span className="mono">PUBLICATION SPECS</span>
              <span className="mono bk-specs__sub">INSTITUTIONAL METADATA</span>
              <dl>
                <div>
                  <dt>Edition</dt>
                  <dd>1st Technical Edition (2024)</dd>
                </div>
                <div>
                  <dt>Heads &amp; Affiliation</dt>
                  <dd>
                    Central Board of Irrigation &amp; Power (CBIP) &amp; Tunnelling Association of India (TAI)
                    <small>Affiliated to International Tunnelling &amp; Underground Space Association (ITA-AITES)</small>
                  </dd>
                </div>
                <div>
                  <dt>Editorial Board</dt>
                  <dd>
                    <small className="bk-specs__row">
                      <b>Credit:</b> Mr. A.K. Dinkar
                    </small>
                    <small className="bk-specs__row">
                      <b>Editor:</b> Dr. R.K. Khali
                    </small>
                    <small className="bk-specs__row">
                      <b>Editor:</b> Mr. Ananda Sen
                    </small>
                  </dd>
                </div>
                <div>
                  <dt>Key Structural Features</dt>
                  <dd>
                    <ul className="bk-specs__list">
                      <li>14 Master Technical Chapters</li>
                      <li>Standard Glossary of Tunnels &amp; Key Terminology</li>
                      <li>Field-tested numerical rules and case histories</li>
                      <li>Illustrated geometry and ground behaviour diagrams</li>
                    </ul>
                  </dd>
                </div>
              </dl>
              <a href="#chapters" className="btn btn--ink btn--block">
                Explore Document Modules <Icon name="down" className="icon icon--sm" />
              </a>
              <a href={BOOK_FILES.about} target="_blank" rel="noopener noreferrer" className="btn btn--soft btn--block">
                About the Book <Icon name="arrow" />
              </a>
            </aside>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ QUOTE */}
      <section className="bk-quote">
        <div className="container">
          <blockquote className="bk-quote__box">
            <span className="bk-quote__icon">
              <Icon name="quote" className="icon icon--sm" />
            </span>
            <p>
              &ldquo;Tunneling is where the science of soil/rock mechanics meets the art of design, making it arguably
              the most exciting field in civil engineering.&rdquo;
            </p>
            <footer className="mono">— DR. RAKESH KUMAR KHALI • CO-AUTHOR &amp; PUBLICATION COMMITTEE EDITOR</footer>
          </blockquote>

          <div className="bk-trio">
            <article>
              <span className="mono">PEDAGOGICAL IMPETUS</span>
              <h3>Bridging the Intimidating Gap in Technical Literature</h3>
              <p>
                For far too long, practical knowledge on underground construction remained buried within highly
                specialized, intimidating technical handbooks and scattered academic papers, leaving students and
                early-career professionals struggling to find accessible, holistic guidance.
              </p>
            </article>
            <article>
              <span className="mono">TARGET AUDIENCE &amp; SCOPE</span>
              <p>
                Tailored specifically for <b>undergraduate civil engineering students</b> and young professionals
                engaged in tunnelling projects and underground space development across South Asia and global
                infrastructure networks.
              </p>
              <p>
                The book demystifies subterranean execution by guiding the reader from the entire life cycle of a
                tunnel — from initial reconnaissance, geomechanical profiling, structural sizing, to full commissioning
                and digital monitoring.
              </p>
            </article>
            <article>
              <span className="mono">PEDAGOGICAL PHILOSOPHY</span>
              <p>
                Rather than burdening students immediately with dense, multi-variable numerical algorithms and abstract
                constructive equations, the text prioritizes foundational mechanics: selecting optimal tunnel geometry,
                identifying ground behaviors, and executing practical excavation methods safely.
              </p>
              <div className="bk-trio__feature">
                <span className="mono">SPECIAL STANDARDIZED FEATURE</span>
                <p>Comprehensive Glossary of Tunnels — Key Definitions &amp; Unified Terminology</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ LETTER */}
      <section className="bk-letter">
        <div className="container">
          <span className="mono bk-letter__eyebrow">OFFICIAL ACCREDITATION &amp; ENDORSEMENT</span>
          <div className="bk-letter__grid">
            <a className="bk-letter__doc" href={BOOK_FILES.letter} target="_blank" rel="noopener noreferrer">
              <div className="bk-letter__doc-head">
                <span className="mono">OFFICIAL DOCUMENT SCAN: TAI RECOMMENDATION LETTER</span>
                <span className="mono">REF: TAI/CBIP/RKK/FOR</span>
              </div>
              <img src="/images/book/letter-of-commendation.jpg" alt="Tunnelling Association of India letter of commendation" loading="lazy" />
              <div className="bk-letter__doc-foot">
                <span className="mono">DOCUMENT INTEGRITY: VERIFIED</span>
                <span className="mono">NEW DELHI SECRETARIAT</span>
              </div>
            </a>
            <div className="bk-letter__text">
              <h2 className="bk-letter__title">High Commendation for National Underground Literature</h2>
              <p className="body">
                Official recognition from the Tunnelling Association of India (TAI) — affiliated directly with ITA-AITES
                — under the aegis of the Central Board of Irrigation and Power (CBIP).
              </p>
              <p className="body">
                The letter formally commends Dr. Rakesh Kumar Khali for his decisive editorial leadership,
                co-authorship role, and voluntary stewardship in translating decades of Himalayan tunnelling mastery
                into an accessible pedagogical manual for young engineers.
              </p>
              <dl className="bk-letter__facts">
                <div>
                  <dt className="mono">AFFILIATION</dt>
                  <dd>ITA-AITES (Geneva)</dd>
                  <small>Global Umbrella Body</small>
                </div>
                <div>
                  <dt className="mono">BODY</dt>
                  <dd>CBIP Secretariat</dd>
                  <small>Ministry of Water &amp; Power, India</small>
                </div>
              </dl>
              <a href={BOOK_FILES.letter} target="_blank" rel="noopener noreferrer" className="text-link">
                Open Letter PDF <Icon name="arrow" className="icon" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ CHAPTERS */}
      <section className="bk-chapters" id="chapters">
        <div className="container">
          <div className="bk-chapters__head">
            <div>
              <span className="mono">CURRICULUM DIRECTORY // {CHAPTERS.length} MASTER MODULES</span>
              <h2 className="h2">Chapter Directory &amp; Inspection Reader</h2>
            </div>
            <p className="body">
              Each chapter represents a complete technical module. Click any module to launch the direct document view
              in a separate window.
            </p>
          </div>

          <div className="bk-chapters__note">
            <span>
              <Icon name="file" className="icon icon--sm" /> <b>PDF Document Links:</b> each module opens its PDF in a
              separate tab for direct reader inspection.
            </span>
            <span className="mono">TARGET: _BLANK</span>
          </div>

          <ul className="bk-chlist">
            {CHAPTERS.map((c) => (
              <li key={c.no}>
                <a
                  className={`bk-ch${c.core ? ' bk-ch--core' : ''}`}
                  href={c.file}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="bk-ch__no mono">{c.no === 'APP' ? 'APP' : `CH ${c.no}`}</span>
                  <span className="bk-ch__body">
                    <b>{c.title}</b>
                    <small>{c.desc}</small>
                  </span>
                  {c.core && <span className="tag tag--dark">CORE ASSET</span>}
                  <span className="bk-ch__cta mono">
                    OPEN PDF READER <Icon name="arrow" className="icon" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ------------------------------------------------ LAUNCH */}
      <section className="bk-launch">
        <div className="container">
          <div className="bk-launch__head">
            <div>
              <span className="mono">EVENT ARCHIVE // OFFICIAL COMMEMORATIVE RELEASE</span>
              <h2 className="h2">Official Book Launch Chronicle</h2>
            </div>
            <span className="tag tag--sand">
              <Icon name="pin" className="icon icon--xs" /> CBIP HEADQUARTERS • CHANAKYAPURI, NEW DELHI
            </span>
          </div>

          <div className="bk-ev-grid">
            {EVENT.map((e) => (
              <figure key={e.title} className={`bk-ev ${e.cls || ''}`}>
                <div className="bk-ev__img">
                  <img src={`/images/gallery/book-launch-${e.img}.jpg`} alt={e.title} loading="lazy" decoding="async" />
                  <span className="tag tag--ink">{e.tag}</span>
                </div>
                <figcaption>
                  <b>{e.title}</b>
                  <span>{e.text}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ CTA */}
      <section className="bk-cta">
        <div className="container">
          <div className="bk-cta__box">
            <span className="tag tag--dark">ACADEMIC DISTRIBUTION // DESK COPIES</span>
            <h2>Integrate &ldquo;Tunnel Engineering Basics&rdquo; Into Your Engineering Syllabus</h2>
            <p>
              Universities, engineering colleges, polytechnics, and corporate training divisions are invited to request
              instructional desk copies or arrange technical masterclasses conducted by Dr. Rakesh Kumar Khali.
            </p>
            <button className="btn btn--light btn--lg" onClick={openContact}>
              Request Desk Copies &amp; Masterclass <Icon name="arrow" />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
