export type Card = {
  id: string
  image: string
  title: string
  description: string
  link?: { text: string; href: string }
  wip?: boolean
}

export const row1: Card[] = [
  {
    id: 'chalmers',
    image: '/images/work-chalmers.png',
    title: 'System Developer @Chalmers',
    description: 'Developed a bunch of cool stuff here as part of team campus...',
    link: { text: 'Check out our team webpage →', href: 'https://www.chalmers.se/aktuellt/explorativa-ai-projekt-2025/team-smart-campus/' },
  },
  {
    id: 'autoliv',
    image: '/images/work-autoliv.png',
    title: 'Business Developer @Autoliv',
    description: "Master's thesis where we explored innovative processes and how you can take inspiration from some of the world's largest startup accelerators to improve innovativeness in large organizations",
  },
  {
    id: 'talkamatic',
    image: '/images/work-talkamatic.png',
    title: 'Intern @Talkamatic',
    description: 'Volunteer at Talkamatic, a GU Ventures startup. Doing everything from handling communication material and building graphics to being a representative at events',
  },
]

export const row1Wip: Card[] = [
  { id: 'wip-work-1', image: '', title: 'Coming soon...', description: '', wip: true },
  { id: 'wip-work-2', image: '', title: 'Coming soon...', description: '', wip: true },
  { id: 'wip-work-3', image: '', title: 'Coming soon...', description: '', wip: true },
]

export const row2: Card[] = [
  {
    id: 'hackathons',
    image: '/images/work-hackathons.png',
    title: 'Hackathons...',
    description: "This is something I'm recently getting into! My friend and I attended our very first hackathon as part of our school. We decided to build a tool that can find you great food & wine recommendations... and we were crowned the winners!",
  },
  {
    id: 'design',
    image: '/images/work-design.png',
    title: 'Design...?',
    description: "The first iteration of this was testing an entrepreneurial endeavor going into magazines, highlighting young entrepreneurs... This has now evolved into something else — heading towards designing a tool to help interior designers... stay tuned!",
  },
  {
    id: 'this-site',
    image: '/images/work-thissite.png',
    title: 'My first web designing experience',
    description: "...it's this portfolio! I'm building it with Figma, Claude Code, React, and TypeScript. Sorry in advance for any bugs or visual errors!",
  },
]

export const row2Wip: Card[] = [
  { id: 'wip-hobby-1', image: '', title: 'Coming soon...', description: '', wip: true },
  { id: 'wip-hobby-2', image: '', title: 'Coming soon...', description: '', wip: true },
  { id: 'wip-hobby-3', image: '', title: 'Coming soon...', description: '', wip: true },
]
