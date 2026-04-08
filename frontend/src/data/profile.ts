import type { Profile, SkillGroup } from '../types'

export const profile: Profile = {
  name: 'John Tran',
  nameFirst: 'John',
  nameLast: 'Tran',
  title: 'Business Designer & Developer',
  positioning:
    'I work at the intersection of business strategy, AI, and systems thinking — building and shaping things that matter.',
  bio:
    'MSc student in Entrepreneurship and Business Design at Chalmers University of Technology, Gothenburg. I love AI, tech, and turning ambiguous problems into concrete systems. Currently building AI infrastructure at Chalmers, driving business development at an anti-hallucination AI startup, and completing a master thesis in innovation strategy at Autoliv.',
  email: 'johntrann99@gmail.com',
  photo: 'https://i.postimg.cc/TPb4Nf5W/Namnlo-s-design-(5).png',
  location: 'Gothenburg, Sweden',
  availability: '',
  social: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/lejohntran/' },
    { label: 'GitHub', url: 'https://github.com/tranolta/portfolioexperiment/' },
  ],
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Business',
    skills: [
      'Business Design',
      'Entrepreneurship',
      'Strategy',
      'Business Development',
      'Innovation Management',
      'M&A',
      'Stakeholder Management',
      'Consulting',
    ],
  },
  {
    category: 'Technology',
    skills: [
      'AI / Machine Learning',
      'System Development',
      'Python',
      'React',
      'TypeScript',
      'Data Integration',
      'Smart Systems',
      'REST APIs',
    ],
  },
  {
    category: 'Design & Research',
    skills: [
      'Business Design',
      'Design Thinking',
      'UX Research',
      'Systems Thinking',
      'Workshop Facilitation',
      'Qualitative Research',
    ],
  },
  {
    category: 'Tools',
    skills: [
      'Figma',
      'Notion',
      'Linear',
      'GitHub',
      'Vercel',
      'Excel / Sheets',
    ],
  },
]
