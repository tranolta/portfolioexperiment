import type { Project } from '../types'

export const projects: Project[] = [
  // ── FEATURED — shown in "What I'm Currently Building" ────

  {
    id: 'smart-campus',
    title: 'SMART CAMPUS',
    tagline: 'AI-powered campus infrastructure at Chalmers',
    summary:
      'Exploring and implementing AI solutions at Chalmers University — smart data integration across campus services, navigation, energy efficiency, space utilization, and security.',
    description:
      'A research and development project within Team Smart Campus at Chalmers University of Technology. The goal is to investigate what campus data is available, identify high-impact use cases, and build AI-driven systems that improve the everyday experience for students and staff. Work spans data pipeline design, AI integration, and stakeholder alignment.',
    tags: ['AI/ML', 'System Development', 'Smart Systems', 'Python'],
    layout: 'hero-full',
    theme: 'dark',
    accentColor: '#1848D6',
    featured: true,
    year: '2025',
    role: 'System Developer',
  },

  {
    id: 'talkamatic',
    title: 'TALKAMATIC',
    tagline: 'Preventing AI hallucinations through pre-generative conversation',
    summary:
      'Business development at a Gothenburg-based startup building pre-generative conversational AI — a fundamentally different approach to making AI reliable and trustworthy.',
    description:
      'Talkamatic is a startup specializing in preventing hallucinations in AI systems through pre-generative dialogue. As Business Developer, I work on growth strategy, partnerships, and market positioning for a technology that challenges the assumptions behind most current LLM deployments.',
    tags: ['Business Development', 'AI', 'Strategy', 'Startups'],
    layout: 'split-image',
    theme: 'default',
    accentColor: '#C82800',
    featured: true,
    year: '2025',
    role: 'Business Developer',
  },

  {
    id: 'autoliv-thesis',
    title: 'AUTOLIV',
    tagline: 'Master thesis in innovation and intellectual asset strategy',
    summary:
      'Innovation project at one of the world\'s leading automotive safety companies, addressing sales strategy, finance, management of intellectual assets, organizational change, and structure.',
    description:
      'Master thesis project at Autoliv, the global automotive safety supplier. The project tackles a cross-functional innovation challenge spanning IP strategy, sales processes, financial modeling, and organizational design. Work involves both analytical frameworks and direct stakeholder engagement.',
    tags: ['Innovation', 'Strategy', 'IP Management', 'Automotive'],
    layout: 'type-statement',
    theme: 'default',
    accentColor: '#C82800',
    featured: false,
    year: '2025–2026',
    role: 'Master Thesis Student',
  },

  // ── ADDITIONAL ────────────────────────────────────────────

  {
    id: 'idea-league',
    title: 'IDEA LEAGUE',
    tagline: 'Healthcare AI consulting across 5 European universities',
    summary:
      'Selected for the IDEA League Challenge Programme — consulting on secure AI use of electronic health records at Sahlgrenska University Hospital alongside students from ETH Zurich, TU Delft, RWTH Aachen, and Politecnico di Milano.',
    description:
      'A prestigious extra-curricular programme across five IDEA League partner universities. The challenge: secure management and use of electronic health records for AI and machine learning applications. Four modules hosted at TU Delft/Polimi, ETH Zurich, RWTH Aachen, and Chalmers. Culminated in a live presentation and panel with Sahlgrenska University Hospital leadership.',
    tags: ['Healthcare AI', 'Consulting', 'Strategy', 'International'],
    layout: 'minimal-row',
    theme: 'default',
    featured: false,
    year: '2024–2025',
    role: 'Challenge Participant',
  },

  {
    id: 'skanska-thesis',
    title: 'SKANSKA',
    tagline: 'Bachelor thesis on efficiency and safety in foundation production',
    summary:
      'Research into construction efficiency and safety in foundation production across different climates, conducted in collaboration with Skanska.',
    description:
      'Bachelor thesis project with Skanska investigating how climate conditions affect efficiency and safety in foundation construction work. Combined field research, data analysis, and engineering methodology.',
    tags: ['Construction', 'Research', 'Civil Engineering', 'Safety'],
    layout: 'minimal-row',
    theme: 'tone',
    featured: false,
    year: '2023',
    role: 'Bachelor Thesis Student',
  },
]

export const featuredProjects    = projects.filter(p => p.featured)
export const additionalProjects  = projects.filter(p => !p.featured)
