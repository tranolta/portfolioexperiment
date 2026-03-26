export interface SideProject {
  id: string
  title: string
  tagline: string
  description?: string
  status: 'active' | 'retired'
  tags: string[]
  year: string
  image?: string
  accentColor?: string
  size?: 'lg' | 'md' | 'sm'
  link?: string
}

export const sideProjects: SideProject[] = [
  // ── ACTIVE ────────────────────────────────────────────────
  {
    id: 'this-site',
    title: 'THIS SITE',
    tagline: "You're looking at it. Always a work in progress.",
    description: 'A personal portfolio and brand experiment — built with React, TypeScript, and Vite. Designed and coded from scratch.',
    status: 'active',
    tags: ['React', 'TypeScript', 'Design'],
    year: '2025',
    accentColor: '#1848D6',
    size: 'lg',
  },
  {
    id: 'ai-experiments',
    title: 'AI EXPERIMENTS',
    tagline: 'Building small things to understand AI better.',
    description: 'A running collection of personal AI experiments — testing models, building small tools, and exploring what pre-generative and generative AI can and cannot do.',
    status: 'active',
    tags: ['AI/ML', 'Python', 'Research'],
    year: '2025',
    accentColor: '#C82800',
    size: 'md',
  },

  // ── RETIRED ───────────────────────────────────────────────
  {
    id: 'mobility-xlab',
    title: 'MOBILITY',
    tagline: 'Exploring the autonomous vehicle and mobility ecosystem.',
    description: 'Attended MobilityXlab community events and engaged with leaders in autonomous driving, including conversations with Zenseact CEO Ödgärd Andersson on geopolitics and AV development.',
    status: 'retired',
    tags: ['Mobility', 'Autonomous Driving', 'Networking'],
    year: '2024',
    size: 'md',
  },
  {
    id: 'civil-engineering',
    title: 'CIVIL ENG.',
    tagline: 'BSc in Civil & Environmental Engineering, Chalmers.',
    description: 'Three years studying Civil and Environmental Engineering at Chalmers. Built a foundation in engineering thinking, quantitative methods, and systems analysis before pivoting to entrepreneurship and business design.',
    status: 'retired',
    tags: ['Engineering', 'Chalmers', 'Research'],
    year: '2020–2023',
    size: 'sm',
  },
  {
    id: 'sahlgrenska',
    title: 'HEALTH AI',
    tagline: 'Healthcare data ethics and AI at Sahlgrenska.',
    description: 'Part of the IDEA League Challenge consulting on ethical AI use in electronic health records. Presented to Sahlgrenska University Hospital leadership and an expert panel.',
    status: 'retired',
    tags: ['Healthcare', 'AI Ethics', 'Consulting'],
    year: '2024–2025',
    size: 'sm',
  },
  {
    id: 'skanska-proj',
    title: 'SKANSKA',
    tagline: 'Construction safety research in extreme climates.',
    status: 'retired',
    tags: ['Construction', 'Civil Engineering'],
    year: '2023',
    size: 'sm',
  },
]

export const activeSideProjects  = sideProjects.filter(p => p.status === 'active')
export const retiredSideProjects = sideProjects.filter(p => p.status === 'retired')
