export type Card = {
  id: string
  image: string
  title: string
  description: string
  tagline?: string
  video?: string
  techStack?: { category: string; tools: string[]; note?: string }[]
  hasTechStack?: boolean
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
        hasTechStack: true,
        tagline: 'AI-powered image understanding and object detection',
        isProject: true,
        description: `I built a computer vision platform for my university campus that started as a room search tool for students.

The idea was simple: you need a room with a projector and 8 chairs, but there's no way to search for that. You just walk around hoping to find something.

So I took 700 panoramic photos of campus rooms and ran them through Google's AI vision model to detect and count everything inside each room, chairs, TVs, whiteboards, windows, all of it. That data gets stored so when you search, it's instant. You just type what you need in plain English and it returns the best matching rooms, ranked by relevance, with photos.

But the real potential goes further than search. Because the system knows exactly what's in every room and how many, it opens the door to things like inventory management, asset tracking, and space utilization analysis, all from just photos.

The technical challenge was that the images are 360 degree panoramic, meaning objects wrap around the edges of the photo. I built custom logic to handle that so detections don't get missed.`,
        techStack: [
          { category: 'Language',          tools: ['Python', 'TypeScript'] },
          { category: 'Backend',           tools: ['Flask'] },
          { category: 'Frontend',          tools: ['React', 'TypeScript', 'HTML'] },
          { category: 'Primary AI',        tools: ['Google Gemini 2.5 Pro'], note: 'analyzes room images' },
          { category: 'Object Detection',  tools: ['YOLOv8'], note: 'validates Gemini results' },
          { category: 'Panoramic ML',      tools: ['Panoramic-BlitzNet CNN'], note: 'specialized 360° model' },
          { category: 'Computer Vision',   tools: ['OpenCV', 'Pillow'] },
          { category: 'Deep Learning',     tools: ['PyTorch', 'TensorFlow'] },
          { category: 'Data',              tools: ['CSV', 'JSON cache'] },
          { category: 'Infrastructure',    tools: ['Docker', 'Google Cloud Run', 'Heroku'] },
        ],
      },
      {
        id: 'campus-flow',
        image: '/images/project-campusflow.png',
        video: '/images/project-campusflow.mp4',
        title: 'Campus Forecast & Flow',
        tagline: 'Campus movement platform',
        hasTechStack: true,
        isProject: true,
        description: `I built a campus movement intelligence platform that processes millions of location records from connected devices across a university campus. The system ingests and parses multi-gigabyte JSON datasets using memory-mapped streaming techniques to handle data that exceeds available RAM.

What makes the prediction model interesting is the feature set. I combined three data sources: historical movement patterns showing where users have gone at every time of day and day of week, real-time and historical weather data pulled from the SMHI API (Sweden's national meteorological institute), and CO2 sensor readings from building sensors across campus, which act as a proxy for occupancy and air quality.

The intuition is that movement behavior is not just habitual, it is environmental. People avoid walking between buildings in heavy rain, they leave crowded rooms when CO2 spikes, and lecture-driven patterns shift depending on the weather. A Random Forest classifier learns those combined signals and predicts a user's most likely next destination with a confidence score.

The model is served via a Flask REST API and the frontend visualizes everything on an interactive Google Maps interface, showing historical playback, live prediction overlays, and predicted vs actual path comparisons. Routes are pre-cached to minimize Google API calls.

The practical applications are space utilization, HVAC optimization based on predicted occupancy, campus safety, and event planning.`,
      },
      {
        id: 'chalmers-go',
        image: '/images/project-chalmers-go.png',
        title: 'Chalmers GO',
        tagline: 'AR indoor navigation app',
        hasTechStack: true,
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
    groupTitle: 'Business Developer, Master Thesis @ Autoliv',
    logo: '/images/logo-autoliv.png',
    color: '#F9E6F0',
    employer: {
      id: 'autoliv',
      image: '/images/work-autoliv.png',
      title: 'Business Developer @Autoliv',
      description: '10-month Master\'s Thesis in Entrepreneurship and Business Design (Industrial Engineering and Management) focusing on innovation',
    },
    projects: [
      {
        id: 'autoliv-value',
        image: '/images/project-autoliv-value.png',
        title: 'Transforming a Component Company into a Value Company',
        tagline: 'Strategic repositioning from parts to solutions',
        isProject: true,
        description: `At Autoliv, I explore how a company known for selling physical safety components can create value in broader ways. More specifically, I look at how Autoliv's strengths in safety engineering, validation, and system knowledge can be turned into offerings that matter more directly to OEMs.

This includes studying customer needs, identifying pain points connected to safety integration and future requirements, and exploring what types of added value could sit around the component itself. A key part of the work is understanding how a traditional tier-one supplier can move from a product-based logic toward a stronger value-based logic, where what is offered is not only a part, but also insight, capability, and a clearer contribution to the customer's broader goals.`,
      },
      {
        id: 'autoliv-accelerators',
        image: '/images/project-autoliv-accelerators.png',
        title: 'Using the World\'s Largest Accelerators to Improve Innovativity',
        tagline: 'Applying startup accelerator models to large organizations',
        isProject: true,
        description: `In my thesis work, I study what makes the world's largest accelerators, such as Y Combinator, so effective at helping ideas move quickly from early concept to real progress. The focus is on identifying the mechanisms behind that success, such as speed, structured feedback, pressure to validate, strong founder ownership, and a clear bias toward action.

From there, I explore how these principles can be translated into a large organization like Autoliv, where innovation often happens under very different conditions. Rather than copying startup methods blindly, the work is about understanding which parts of accelerator logic actually create momentum and whether those same principles can help strengthen how ideas are supported, challenged, and moved forward inside a complex corporate setting. As part of this, we are running a workshop series to examine whether these ideas hold up in practice.`,
      },
      {
        id: 'autoliv-research',
        image: '/images/project-autoliv-research.png',
        title: 'Cross-functional Collaborative Research',
        tagline: 'Studying innovation across nine organizations in different industries',
        isProject: true,
        description: `As part of my thesis, I work in cross-collaborative research with CPAC Systems, CampX, Mont Blanc Group, Vattenfall, VGR Sahlgrenska, Autoliv, JENSEN Sweden, Volvo Penta, and the Swedish Maritime Administration.

The work is structured through the modules strategy and structure, entrepreneurial finance, organizational change, managing intellectual assets, organizational friction, and transformational leadership. In practice, this means studying how different organizations approach innovation, where ideas get stuck, and what factors shape whether they move forward or not. What makes this especially valuable is the chance to compare patterns across very different industries and use lessons from one organization to sharpen the understanding of another.`,
      },
    ],
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
    projects: [
      {
        id: 'talkamatic-marketing',
        image: '',
        title: 'Brand & Communication',
        tagline: 'Marketing, graphics, and event representation',
        isProject: true,
        description: ``,
        wip: false,
      },
      {
        id: 'talkamatic-wip-1',
        image: '',
        title: 'Coming soon...',
        description: '',
        wip: true,
      },
      {
        id: 'talkamatic-wip-2',
        image: '',
        title: 'Coming soon...',
        description: '',
        wip: true,
      },
    ],
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
