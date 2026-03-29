export interface Profile {
  name: string
  nameFirst: string
  nameLast: string
  title: string
  positioning: string
  bio: string
  email: string
  photo?: string
  location: string
  availability: string
  social: { label: string; url: string }[]
}

export interface SkillGroup {
  category: string
  skills: string[]
}

export interface WorkExperience {
  id: string
  company: string
  role: string
  period: string
  location: string
  description: string
  highlights: string[]
}

export interface Project {
  id: string
  title: string
  tagline: string
  summary: string
  description: string
  tags: string[]
  layout: string
  theme: string
  accentColor?: string
  featured: boolean
  year: string
  role: string
  image?: string
  link?: string
}
