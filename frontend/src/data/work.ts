export type Card = {
  id: string
  image: string
  title: string
  description: string
  tagline?: string
  video?: string
  link?: { text: string; href: string }
  wip?: boolean
  isProject?: boolean
}

export type WorkGroup = {
  id: string
  groupTitle: string
  logo: string
  color: string
  employer: Card
  projects: Card[]
}

export const workGroups: WorkGroup[] = [
  {
    id: 'chalmers-group',
    groupTitle: 'System Developer at Chalmers',
    logo: '/images/logo-chalmers.png',
    color: '#F9E6F0',
    employer: {
      id: 'chalmers',
      image: '/images/work-chalmers.png',
      title: 'System Developer @Chalmers',
      description: 'Developed a bunch of cool stuff here as part of team campus...',
      link: { text: 'Check out our team webpage →', href: 'https://www.chalmers.se/aktuellt/explorativa-ai-projekt-2025/team-smart-campus/' },
    },
    projects: [
      {
        id: 'campus-vision',
        image: '/images/project-campusvision.png',
        video: '/images/project-campusvision.mp4',
        title: 'Campus Vision',
        tagline: 'AI-powered image understanding and object detection',
        isProject: true,
        description: `AI-powered image understanding and object detection`,
      },
      {
        id: 'chalmers-go',
        image: '/images/project-chalmers-go.png',
        title: 'Chalmers GO',
        tagline: 'AR indoor navigation app',
        isProject: true,
        description: `I built an AR indoor navigation app — think Google Maps Live View, but for navigating inside buildings.

The core idea: you open the app on your iPhone, point your camera, and it overlays directional arrows on the real world guiding you to whatever room you're looking for.

On the backend I wrote a Python service that reads an architectural building file (IFC format — the standard format architects use for 3D building models), extracts all the rooms, walls and doors, and runs a pathfinding algorithm to calculate the optimal walking route.

On the mobile side I used Xcode and Apple's ARKit — which handles all the hard parts of AR: tracking where you are in physical space, understanding your camera angle, and anchoring virtual objects to real-world surfaces. The app calls my backend API to get the route, then ARKit renders 3D arrows in the camera view that stay locked to the real world as you move.

`,
      },
    ],
  },
  {
    id: 'autoliv-group',
    groupTitle: 'Business Developer at Autoliv',
    logo: '/images/logo-autoliv.png',
    color: '#F9E6F0',
    employer: {
      id: 'autoliv',
      image: '/images/work-autoliv.png',
      title: 'Business Developer @Autoliv',
      description: "Master's thesis where we explored innovative processes and how you can take inspiration from some of the world's largest startup accelerators to improve innovativeness in large organizations",
    },
    projects: [],
  },
  {
    id: 'talkamatic-group',
    groupTitle: 'Intern at Talkamatic',
    logo: '/images/logo-talkamatic.png',
    color: '#F9E6F0',
    employer: {
      id: 'talkamatic',
      image: '/images/work-talkamatic.png',
      title: 'Intern @Talkamatic',
      description: 'Volunteer at Talkamatic, a GU Ventures startup. Doing everything from handling communication material and building graphics to being a representative at events',
    },
    projects: [],
  },
]

// Flat list for the main homepage row
export const row1: Card[] = workGroups.map(g => g.employer)

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
    description: "This is something I'm recently getting into! My friend and I attended our very first hackathon as part of our school. We decided to build a tool that can find you great food & wine recommendations based on image recognition... and we were crowned the winners!",
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
