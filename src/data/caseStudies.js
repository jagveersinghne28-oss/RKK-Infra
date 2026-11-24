// Case study dossiers — PDFs live in public/documents/case-studies/case-study-NN.pdf
// Entries with `file: false` have no source document yet (case study 28); drop the PDF in
// the folder under that name and flip it to true.
const rows = [
  ['Case Study-1-Construction of Diversion Tunnel', 'Hydrological Diversion & River-inflow Controls', 'HYDROLOGY // DIVERSION'],
  ['Case Study-2 Teesta-V HEP, Sikkim', 'Squeezing Ground Geology & NATM Excavation Support', 'SIKKIM // SQUEEZING ROCK'],
  ['Case Study-3-Malana HRT-1, Himachal', 'High-Altitude Head Race Tunnel Construction Dynamics', 'HIMACHAL // HRT ALIGNMENT'],
  ['Case Study-4-Teesta Management of Plant', 'Plant & Heavy Mechanization Logistics in Alpine Terrains', 'OPERATIONS // PLANT FLEET'],
  ['Case Study-5-Sewa HRT 10.02 Km', 'Long-Distance Water Conductor Geological Navigation', 'SEWA HEP // 10.02 KM CONDUIT'],
  ['Case Study-6-Boring of Inclined Pressure Shaft by Double Shield TBM for Parbati-II HEP', 'Steep Shaft Mechanized Excavation & Shield Logistics', 'TBM // INCLINED PRESSURE SHAFT'],
  ['Case Study-7-Significance of Shotcrete and Grouting in Hydro Projects in the Himalayas-India', 'Rock Reinforcement, Fiber Shotcrete & Consolidation', 'GEO-SUPPORT // SHOTCRETE & GROUT'],
  ['Case Study-8-Risk Sharing in Tunneling and Underground Projects', 'Contractual Governance & Underground Risk Allocation Models', 'STRATEGY // CONTRACTUAL RISK'],
  ['Case Study-9-Safety in Construction of Underground Structures', 'Occupational Health, Gas Influx & Subsurface Safety Frameworks', 'SAFETY // ZERO-INCIDENT PROTOCOLS'],
  ['Case Study-10-Construction of Tehri Pump Storage Project (4x250 MW) – Innovation in Technology in Vertical Shafts and TRTs', 'Deep Shaft Sinking & Tail Race Surge Tunnels', 'TEHRI PSP // VERTICAL SHAFTS'],
  ['Case Study-11-Managing Geological Complexity in BVC and PAC of Tehri PSP, India', 'Butterfly Valve & Penstock Assembly Cavern Geotechnics', 'TEHRI // BVC & PAC CAVERNS'],
  ['Case Study-12-Foundation Treatment of Concrete Gravity Dam Design & Execution of Shear Zone Treatment', 'Seismic Fault Zone & Weak Stratum Deep Chemical Grouting', 'DAM FOUNDATION // SHEAR ZONE'],
  ['Case Study-13-Construction of Tunnel T-49A on Dharam – Qazigund Section of Udhampur-Srinagar-Baramulla New BG Railway Line Project in Highly Adverse Geological Conditions', 'Pir Panjal Fault Zones & Dynamic Convergence Control', 'USBRL // TUNNEL T-49A'],
  ['Case Study-14-Construction of Desilting Chambers and Connecting Tunnels for Vishnugad Pipalkoti HE Project (444 MW) in Adverse Geological Conditions and Very Remote Location', 'Deep Underground Cavern Stability & Remote Valley Logistics', 'VPHEP // DESILTING CAVERNS'],
  ['Case Study-15-Ventilation System in Large Hydro Projects-A Case Study', 'Subsurface Atmospheric Controls, Dust & Toxic Gas Evacuation', 'VENTILATION // ATMOSPHERE REGIMES'],
  ['Case Study-16-Design and Excavation Sequence and Blasting Techniques in Large Underground Caverns', 'Controlled Smooth Blasting & Heading-and-Benching Regimes', 'DRILL & BLAST // CAVERN EXCAVATION'],
  ['Case Study-17-Geological Investigations for Dam Foundation Treatment at Sewa HE Project', 'Core Drilling, In-Situ Permeability & Hydrostatic Foundation Sealing', 'DAM GEOLOGY // SEWA PROJECT'],
  ['Case Study-18-Optimization of the Orientation of Large Underground Caverns in High Stress Condition', 'Principal In-Situ Stress Tensors & Anisotropic Rockmass Modeling', 'STRESS ANALYSIS // CAVERN ORIENTATION'],
  ['Case Study-19-Construction of Railway Tunnel T-49A in Highly Adverse Geological Conditions in Himalayas by Using NATM – A Case Study', 'Flexible Deformable Support & Rockburst Mitigation via NATM', 'NATM // T-49A HIMALAYAS'],
  ['Case Study-20-Ranganadi Dam A Success Story of Foolproof Planning and Speedy Construction', 'Rapid River Valley Infrastructure & Monsoonal Turnaround', 'DAM SCHEDULING // RANGANADI'],
  ['Case Study-21-Conventional Tunnelling Challenges in the Himalayas', 'Drill-and-Blast Methodologies in Sheared Squeezing Strata', 'CONVENTIONAL // COMPLEX STRATA'],
  ['Case Study-22-Paper on Optimization of Orientation of Large Cavern', 'Geological Discontinuity Joint Sets & Axis Alignment', 'STRUCTURAL // JOINT SETS'],
  ['Case Study-23-Managing Geological Risk in Engineering and Construction of Tunnels', 'Geotechnical Baseline Reports & Real-Time Monitoring Protocols', 'RISK PROTOCOLS // GBR'],
  ['Case Study-24-Construction of Head Race Tunnel of Vishnugad-Pipalkoti HE Project (444 MW) in Extreme Geological Conditions Issues and Challenges', 'High Overburden Stress & Heavy Water Inrush Mitigation', 'VPHEP // WATER INRUSH'],
  ['Case Study-25-Design and Planning of Excavation Sequence and Blasting Techniques for Large UG Caverns', 'Vibration Attenuation & Controlled Rockmass Preservation', 'BLAST DESIGN // UG CAVERNS'],
  ['Case Study-26-Issues and Challenges in Construction of Hydro Tunnel in Extreme Geological Conditions in India – An Empirical Study', 'Empirical Analysis Across 14 Himalayan Hydro Conduits', 'EMPIRICAL SYNTHESIS // 14 PROJECTS'],
  ['Case Study-27-Seismic Load Consideration in Design of Tunnels', 'Dynamic Pseudo-Static Analysis & Active Fault Line Crossing', 'SEISMOLOGY // TUNNEL DYNAMICS'],
  ['Case Study-28-Construction of Vishnugad-Pipalkoti HE Project (444 MW) with Innovation – A Case Study of Dam Excavation in Steep Terrain', 'Extreme Slope Stabilization & Deep Spoil Cut-and-Cover Works', 'DAM EXCAVATION // STEEP TERRAIN', false],
  ['Case Study-29-Managing Geological Complexity in Tail Race Tunnels and the Outfall Structures of Tehri Pumped Storage Project – A Case Study', 'High Head Hydrostatic Pressure & Concrete Lining Optimization', 'TEHRI PSP // TRT OUTFALL'],
  ['Case Study-30-Construction of Tehri Pump Storage Project (4 x 250 MW) in Highly Adverse Geological Conditions – A Case Study', 'Phyllite Grade Rockmass Reinforcement & 1,000 MW Subsurface Complex', 'TEHRI PSP // 1000MW POWERHOUSE'],
  ['Case Study-31-Construction of Railway Tunnels for East Coast Railway from Adanigarh to Purana Katak – Issues and Challenges for Fastest Construction – A Case Study', 'Rapid Mobilization, Mechanized Headings & Breakthrough Timelines', 'ECoR // ADANIGARH PURANA KATAK'],
  ['Case Study-32-Design and Planning of Large Diameter Underground Surge Shafts', 'Hydrodynamic Surge Damping & Specialized Slipform Concreting', 'SURGE SHAFTS // SLIPFORM CONCRETE'],
  ['Case Study-33-Construction of NATM Tunnels – Experience with Steel Fibre in Railway Project India (T80, T-48 and T49A)', 'Steel Fibre Ductility, Energy Absorption & Crack Minimization', 'SFRS // FIBRE SHOTCRETE (T80/T48/T49A)'],
  ['Case Study-34-Construction of Railway Tunnels in Highly Adverse Geological Conditions in Himalayas – A Case Study', 'Heavy Squeezing & Canopy Forepoling Systems', 'FOREPOLING // SQUEEZING ROCK'],
  ['Case Study-35-Performance of Dam and Foundation System', 'Piezometer Instrumentation, Uplift Pressure & Seepage Monitoring', 'DAM MONITORING // INSTRUMENTATION'],
  ['Case Study-36-Construction of Diversion Tunnel for Doyang Hydroelectric Project', 'Monsoonal Flash Flood Routing & Hydraulic Profile Excavation', 'DOYANG // DIVERSION HYDRAULICS'],
  ['Case Study-37-Construction of Inclined Tunnel for Ranganadi Hydroelectric Project', 'Inclined Winch Haulage & High-Angle Mucking Mechanics', 'RANGANADI // INCLINED HAULAGE'],
  ['Case Study-38-Project Scope Formulation – Time, Cost and Resource Management', 'Mega-Project Critical Path Scheduling & Capex Governance', 'CAPEX & SCOPE // PM GOVERNANCE'],
  ['Case Study-39-Construction Planning of Kurichu Power House – Fastest Construction in the Sub-continent – A Case Study', 'Cross-Border Rapid Subsurface Execution in Bhutan', 'BHUTAN // KURICHU HYDRO'],
  ['Case Study-40-Fastest Power House Construction in Sub-continent Kurichu', 'Accelerated Turnkey Delivery & Subsurface Civil Works Benchmark', 'TURNKEY RECORD // KURICHU BENCHMARK'],
]

export const CASE_STUDIES = rows.map(([title, summary, tags, hasFile = true], i) => {
  const n = String(i + 1).padStart(2, '0')
  return { no: n, title, summary, tags, file: hasFile ? `/documents/case-studies/case-study-${n}.pdf` : null }
})

export const KEYNOTE = {
  no: '41',
  title: 'TBM Presentation',
  summary:
    'Keynote Slide Dossier // Mechanized Tunnel Boring Machine Methodologies, Shield Mechanics & Operational Innovations in Himalayan Geology. Complete synthesis of cutterhead torque, disc cutter wear kinetics, and shielded extrusion in thrust shear zones.',
  file: '/documents/case-studies/case-study-41.pdf',
}

export const TOTAL_DOSSIERS = CASE_STUDIES.length + 1
