const PATHS = {
  arrow: 'M7 17 17 7M8 7h9v9',
  layers: 'm12 2 10 5-10 5L2 7l10-5ZM2 17l10 5 10-5M2 12l10 5 10-5',
  award: 'M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM8.2 13.9 7 23l5-3 5 3-1.2-9.1',
  zap: 'M13 2 3 14h9l-1 8 10-12h-9l1-8Z',
  drop: 'M12 2.7s7 7.1 7 12.3a7 7 0 1 1-14 0c0-5.2 7-12.3 7-12.3Z',
  rail: 'M5 3h14v13H5V3ZM5 11h14M8 20l-2 2M16 20l2 2M9 14h.01M15 14h.01',
  shield: 'M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3ZM9 12l2 2 4-4',
  users:
    'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8',
  cpu: 'M6 6h12v12H6V6ZM9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4',
  tool: 'M14.7 6.3a4 4 0 0 0-5 5L3 18l3 3 6.7-6.7a4 4 0 0 0 5-5l-2.5 2.5-2.4-.6-.6-2.4 2.5-2.5Z',
  check: 'M20 6 9 17l-5-5',
  globe:
    'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20ZM2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20',
  pin: 'M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0ZM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
  flag: 'M4 22V4M4 4h12l-2 4 2 4H4',
  menu: 'M4 7h16M4 12h16M4 17h16',
  close: 'M6 6l12 12M18 6 6 18',
  library: 'M4 19V5a2 2 0 0 1 2-2h12v16H6a2 2 0 0 0-2 2ZM4 19a2 2 0 0 0 2 2h12M9 8h6',
  grid: 'M4 4h7v7H4V4ZM13 4h7v7h-7V4ZM4 13h7v7H4v-7ZM13 13h7v7h-7v-7Z',
  mountain: 'm3 20 6-11 4 6 2-3 6 8H3Z',
  gauge: 'M12 14l4-4M3.5 17a9 9 0 1 1 17 0',
  radio: 'M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM8 8a5.7 5.7 0 0 0 0 8M16 8a5.7 5.7 0 0 1 0 8M5 5a10 10 0 0 0 0 14M19 5a10 10 0 0 1 0 14',
}

export default function Icon({ name, className = 'icon', strokeWidth = 1.75 }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={name === 'arrow' ? 2.5 : strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={PATHS[name]} />
    </svg>
  )
}
