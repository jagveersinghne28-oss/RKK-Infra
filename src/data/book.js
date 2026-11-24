// Tunnel Engineering Basics — chapter PDFs live in public/documents/book/
const ch = (n) => `/documents/book/chapter-${String(n).padStart(2, '0')}.pdf`

export const CHAPTERS = [
  { no: '01', title: 'Introduction', desc: 'Why tunnels matter, India’s tunnelling boom, and the role of underground infrastructure.', file: ch(1) },
  { no: '02', title: 'History of Tunnel & Underground Space Use', desc: 'From prehistoric caves and qanats to Roman aqueducts and modern mechanized tunnelling.', file: ch(2) },
  { no: '03', title: 'Underground Space & Usage', desc: 'Transport, utilities, storage caverns, and the specialist terms used to describe underground structures.', file: ch(3) },
  { no: '04', title: 'Tunnel Basics', desc: 'Definitions, tunnel types, cross-sections, and the common geological features along a tunnel profile.', file: ch(4) },
  { no: '05', title: 'Engineering Geology & Tunnelling', desc: 'Lithology, discontinuities, groundwater, and how engineering geology guides tunnel design.', file: ch(5) },
  { no: '06', title: 'Effects of Geological Setup in Tunnelling', desc: 'How rock strength, structure and in-situ stress govern stability, safety and construction method.', file: ch(6) },
  { no: '07', title: 'Planning & Geometric Design of Tunnels', desc: 'Surveys, alignment selection, cross-section geometry, and multidisciplinary planning.', file: ch(7) },
  { no: '08', title: 'General Procedure in Designing a Tunnel', desc: 'Feasibility, geotechnical investigations, structural design, and the full design workflow.', file: ch(8) },
  { no: '09', title: 'Tunnel Excavation Methods & Machinery', desc: 'Drill-and-blast, heading and benching, drift methods, and Tunnel Boring Machines (TBM).', file: ch(9) },
  { no: '10', title: 'Design of Tunnel Supporting Systems', desc: 'Rock bolts, shotcrete, steel ribs and lining — managing stress redistribution and convergence.', file: ch(10) },
  { no: '11', title: 'Underground Environment in Tunnelling', desc: 'Ventilation, gases, fire and the safety protocols of a high-risk working environment.', file: ch(11) },
  { no: '12', title: 'Tunnel Maintenance & Rehabilitation', desc: 'Inspection regimes, defect detection, repair techniques, and lining rehabilitation.', file: ch(12) },
  { no: '13', title: 'Underwater Tunnelling', desc: 'Immersed-tube, bored and cut-and-cover undersea tunnels and their water-pressure challenges.', file: ch(13) },
  { no: '14', title: 'Future Prospects of the Tunnelling Sector in India', desc: 'Investment outlook, railway, highway and hydro tunnels, and emerging technologies.', file: ch(14) },
  {
    no: 'APP',
    title: 'Glossary of Tunnels: Key Terminology & Definitions',
    desc: 'Reference list of standard tunnelling terms, from “A” Line and “B” Line onward.',
    file: '/documents/book/glossary.pdf',
    core: true,
  },
]

export const BOOK_FILES = {
  about: '/documents/book/about-book.pdf',
  frontCover: '/documents/book/front-cover.pdf',
  backCover: '/documents/book/back-cover.pdf',
  letter: '/documents/book/letter-of-commendation.pdf',
}
