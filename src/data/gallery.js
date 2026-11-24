// Photo archive — files live in public/images/gallery/
const CAPTIONS = [
  'Opening address from the lectern',
  'Dignitaries assembled on the dais',
  'Unveiling of Tunnel Engineering Basics',
  'Keynote presentation by Dr. Rakesh Kumar Khali',
  'Address to the CBIP auditorium',
  'Panel seated at the launch dais',
  'Guest address on the future of tunnelling',
  'Technical address from the lectern',
  'Dr. Khali following the proceedings',
  'Dais members during the programme',
  'Address by a senior dignitary',
  'Deliberations from the podium',
  'Speaker addressing the audience',
  'Proceedings beneath the launch screen',
  'Dignitaries on the dais with the new volume',
  'Remarks from the editorial committee',
  'Dignitaries standing for the opening ceremony',
  'Dr. Khali in conversation after the launch',
  'Post-launch discussion with senior colleagues',
  'Technical exchange after the launch',
  'Roundtable in the committee room',
  'Informal talks on curriculum integration',
  'Group photograph outside the CBIP office',
]

export const GALLERY = CAPTIONS.map((caption, i) => ({
  src: `/images/gallery/book-launch-${String(i + 1).padStart(2, '0')}.jpg`,
  caption,
}))
