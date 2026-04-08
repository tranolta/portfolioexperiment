import { profile } from '../../data/profile'

const ASCII_PORTRAIT = `



              ......:==:.
             .-#@%%@@@@%%=.
            .#@%+======#%@#.
           .%@*+===----==+@+
           +@%*+==----=+==+@*.
           =@##+===------==%:
           .%+++*+-=---=--=*.
           .##===-==-------=.
           .%%*=--++=+------.
           .+%*+=-==-------:.
            .:#+==+=====---.
              +#++==----==..
             .=%#*+=======..
          ..-%%*##**+==--=#:..
       .:*%%%%*+++++==----#%%#+:.
...-=*%@%%%%%*-======-----###%%##*=.
:#%%%%%%%%%@@%+::--------::*#######.
:#%%%%%#%%%%@@%=::::::--::.:+######.
=%######%%%%%@%=::::.......:+#***#*.
-%%#####%%%%%%%#=:::::.:...::=#****.
-%%%####%%%%%%%%#=:::::.....::=#***.
.%%%%####%%%%%%%%%+:::.......::=#**.
.+%%%%%%%%%%#%%%%%%+:........:::=**.`

const ASCII_NAME = `     ██╗ ██████╗ ██╗  ██╗███╗   ██╗    ████████╗██████╗  █████╗ ███╗   ██╗
     ██║██╔═══██╗██║  ██║████╗  ██║    ╚══██╔══╝██╔══██╗██╔══██╗████╗  ██║
     ██║██║   ██║███████║██╔██╗ ██║       ██║   ██████╔╝███████║██╔██╗ ██║
██   ██║██║   ██║██╔══██║██║╚██╗██║       ██║   ██╔══██╗██╔══██║██║╚██╗██║
╚█████╔╝╚██████╔╝██║  ██║██║ ╚████║       ██║   ██║  ██║██║  ██║██║ ╚████║
 ╚════╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝       ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝`

const capabilities = [
  { verb: 'Understand', detail: 'Problems, systems, people',              sub: 'turning messy situations into something clear' },
  { verb: 'Build',      detail: 'AI prototypes, data pipelines, backend', sub: 'FastAPI, Python, LLM workflows' },
  { verb: 'Apply AI',   detail: 'Use cases > hype',                       sub: 'finding where AI actually creates value' },
  { verb: 'Explore',    detail: 'Ideas, edge cases, rabbit holes',         sub: 'constant curiosity, fast learning loops' },
  { verb: 'Translate',  detail: 'Tech → value, data → decisions',         sub: 'making things useful, not just working' },
  { verb: 'Test',       detail: 'MVPs, assumptions, real-world feedback',  sub: 'build → learn → iterate' },
  { verb: 'Own',        detail: 'Projects, ambiguity, direction',          sub: 'starting before everything is defined' },
]

const tools = ['Python', 'FastAPI', 'SQL', 'APIs', 'OpenAI', 'Claude', 'RAG', 'PowerBI', 'Excel']

export default function Header() {
  const githubUrl = profile.social.find(s => s.label === 'GitHub')?.url ?? '#'

  return (
    <header className="terminal-hero" id="about">
      <div className="th-inner">

        {/* Window chrome */}
        <div className="th-topbar">
          <div className="th-topbar-left">
            <span className="th-dot th-dot--r" />
            <span className="th-dot th-dot--y" />
            <span className="th-dot th-dot--g" />
            <span className="th-topbar-label">tranolta@portfolioexperiment ~ bash</span>
          </div>
          <nav className="th-nav">
            <a href="#about-me" className="th-nav-link">about</a>
            <a href="#work"    className="th-nav-link">work</a>
            <a href="#contact" className="th-nav-link">contact</a>
          </nav>
        </div>

        {/* ASCII name banner */}
        <div className="th-banner">
          <pre className="th-ascii-name">{ASCII_NAME}</pre>
        </div>

        <div className="th-welcome">Welcome, this is my portfolio that is very much work in progress. Currently deciding what visual theme to go for as well as adding content...</div>

        {/* Two-column body */}
        <div className="th-cols">

          {/* Portrait + identity */}
          <div className="th-portrait">
            <pre>{ASCII_PORTRAIT}</pre>
            <div className="th-identity">
              <div className="th-iname">John Tran</div>
              <div className="th-irole">MSc Entrepreneurship &amp; Business Design</div>
              <div className="th-prompt-line">
                <span className="th-prompt-sym">$</span>
                <span>building things that matter</span>
                <span className="th-blink">▋</span>
              </div>
            </div>
          </div>

          {/* Capabilities + tools */}
          <div className="th-right">
            <div>
              <div className="th-section-header">Capabilities</div>
              <div className="th-cap-list">
                {capabilities.map((cap, i) => (
                  <div
                    key={cap.verb}
                    className="th-cap"
                    style={{ animationDelay: `${0.6 + i * 0.1}s` }}
                  >
                    <span className="th-cap-verb">{cap.verb}</span>
                    <span className="th-cap-detail">
                      {cap.detail}
                      <em>{cap.sub}</em>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="th-tools-wrap">
              <div className="th-section-header">Tools</div>
              <div className="th-tools">
                {tools.map(tool => (
                  <span key={tool} className="th-tool">{tool}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Status bar */}
        <div className="th-statusbar">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="th-gh-link">
            github
          </a>
        </div>

      </div>
    </header>
  )
}
