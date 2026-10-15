import { useState } from 'react'
import {
  ArrowDownRight, ArrowUpRight, BriefcaseBusiness, Check, Code2, Database,
  Github, Linkedin, Mail, MapPin, Menu, Monitor, Send, Settings2, Users, X,
  Lightbulb, FolderKanban, Layers3, ExternalLink
} from 'lucide-react'

const projects = [
  {
    number: '01',
    title: 'HRMS Database Migration',
    type: 'Backend · Data migration',
    description: 'Investigating schema differences between HRMS versions and working through migration consistency, table changes, and application compatibility.',
    tags: ['Django', 'PostgreSQL', 'Python'],
    icon: Database,
  },
  {
    number: '02',
    title: 'RFID Access Card Management',
    type: 'Access control · API integration',
    description: 'Worked on card assignment and lifecycle flows, including status handling, history, deallocation, replacement, and employee-facing UI states.',
    tags: ['Django', 'REST APIs', 'React'],
    icon: Layers3,
  },
  {
    number: '03',
    title: 'RFID Events & Movement',
    type: 'Search · Pagination · Integration',
    description: 'Worked on card-history lookups, movement filtering, pagination behavior, and handling external API responses in the UI.',
    tags: ['React', 'TypeScript', 'API integration'],
    icon: FolderKanban,
  },
  {
    number: '04',
    title: 'Property Management UI',
    type: 'Frontend · Workflow UI',
    description: 'Contributed to a React-based property management interface with responsive layouts and booking and visitor-related workflows.',
    tags: ['React', 'Vite', 'Tailwind CSS'],
    link: 'https://kind-glacier-0f2139b03.7.azurestaticapps.net/',
    icon: Monitor,
  },
]

const skillGroups = [
  { title: 'Project delivery', icon: BriefcaseBusiness, items: ['Planning & coordination', 'Requirements analysis', 'Issue tracking', 'Cross-team collaboration'] },
  { title: 'Web development', icon: Code2, items: ['React', 'TypeScript', 'JavaScript', 'HTML & CSS'] },
  { title: 'Backend & data', icon: Database, items: ['Python', 'Django', 'REST APIs', 'PostgreSQL'] },
  { title: 'Tools & ways of working', icon: Settings2, items: ['Git', 'GitHub/Git workflows', 'Debugging', 'Continuous improvement'] },
]

const resumeSkillGroups = [
  { title: 'Frontend', icon: Code2, items: ['React.js', 'Next.js (SSR)', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS'] },
  { title: 'Forms & APIs', icon: Layers3, items: ['Formik', 'Yup', 'REST APIs'] },
  { title: 'Databases', icon: Database, items: ['SQL', 'MongoDB'] },
  { title: 'Build & tooling', icon: Settings2, items: ['Git', 'Vite', 'Webpack', 'ESLint'] },
  { title: 'Agile & reporting', icon: BriefcaseBusiness, items: ['Agile', 'Jira', 'Trello', 'Excel', 'Tableau'] },
]

const resumeExperience = [
  'Develop and maintain responsive web applications using React.js, JavaScript, and Tailwind CSS.',
  'Build reusable UI components and scalable frontend architectures.',
  'Integrate REST APIs and dynamic content using Next.js.',
  'Implement form-heavy interfaces using Formik and Yup validation.',
  'Participate in Agile ceremonies, sprint planning, and stakeholder discussions.',
  'Optimize application performance and troubleshoot frontend issues.',
]

const resumeProjects = [
  {
    title: 'Detention Shelter Website (UK)',
    link: 'https://intranet.sosproperty.co.uk/',
    points: [
      'Developed a responsive React/Next.js application with reusable UI components.',
      'Implemented secure form workflows, validation, and REST API integrations.',
      'Optimized application performance and cross-browser compatibility.',
    ],
  },
  {
    title: 'Institute of Acoustics (IOA)',
    link: 'https://ioa.org.uk',
    points: [
      'Built responsive and accessible user interfaces using React.js and modern JavaScript.',
      'Developed reusable components and dynamic content modules.',
      'Enhanced user experience through form validation and performance optimization.',
    ],
  },
  {
    title: 'Uptake AI Publication Platform',
    link: 'https://pub.uptakeai.co.uk',
    points: [
      'Developed reusable React components for an AI-powered publishing platform.',
      'Integrated frontend modules with REST APIs and scalable backend services.',
      'Improved maintainability through component-based architecture and code reuse.',
    ],
  },
  {
    title: 'SOS Property Management',
    link: 'https://kind-glacier-0f2139b03.7.azurestaticapps.net/',
    points: [
      'Contributed to a React-based property management interface built with Vite and Tailwind CSS.',
      'Built responsive layouts for booking and visitor-related workflows.',
    ],
  },
]

const coreCapabilities = [
  'Reusable React Components', 'Responsive Web Development', 'REST API Integration',
  'UI Performance Optimization', 'Agile Delivery', 'Git Workflows',
  'Frontend Architecture', 'Client Requirement Analysis',
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const closeMenu = () => setMenuOpen(false)
  const copyEmail = async () => {
    // Replace this placeholder with your real email before publishing.
    await navigator.clipboard?.writeText('karan.bakshi005@gmail.com')
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`)
    // Replace karan.bakshi005@gmail.com with your preferred public contact email.
    window.location.href = `mailto:karan.bakshi005@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu}>Karan<span>.</span></a>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
        <a className="nav-cta" href="#contact">Let's talk <ArrowUpRight size={16} /></a>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> FRONTEND DEVELOPMENT × PROJECT DELIVERY</div>
            <h1>Hi, I'm Karan<br /><span>Bakshi.</span></h1>
            <p className="hero-subtitle">I build thoughtful interfaces with a project-minded approach.</p>
            <p className="hero-description">
              A frontend developer with a project-minded approach, focused on building responsive interfaces,
              improving digital workflows, and turning requirements into practical solutions. I bring 4 years
              of overall experience across new product development and project management.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowDownRight size={17} /></a>
              <a className="button button-quiet" href="#contact">Get in touch <ArrowUpRight size={17} /></a>
            </div>
            <div className="hero-note"><span className="status-dot" /> Open to suitable job and freelance opportunities</div>
          </div>
          <div className="hero-art" aria-label="Abstract portfolio artwork">
            <div className="art-glow" />
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-panel panel-back"><span>PLAN</span><span>BUILD</span><span>IMPROVE</span></div>
            <div className="art-panel panel-front">
              <div className="panel-top"><span className="mini-dot" /><span className="mini-dot" /><span className="mini-dot" /><span className="panel-label">WORKFLOW / 01</span></div>
              <div className="panel-title">Make complexity<br /><span>manageable.</span></div>
              <div className="workflow-row"><span className="workflow-icon"><Users size={17} /></span><div><b>People</b><small>Align & communicate</small></div><Check size={16} className="check-icon" /></div>
              <div className="workflow-row"><span className="workflow-icon"><FolderKanban size={17} /></span><div><b>Process</b><small>Plan & deliver</small></div><Check size={16} className="check-icon" /></div>
              <div className="workflow-row"><span className="workflow-icon"><Code2 size={17} /></span><div><b>Technology</b><small>Build & refine</small></div><ArrowUpRight size={16} className="check-icon" /></div>
              <div className="panel-progress"><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /></div>
              <small className="panel-caption">SMALL STEPS. USEFUL OUTCOMES.</small>
            </div>
            <div className="floating-chip chip-top"><span className="chip-icon"><Lightbulb size={16} /></span><span><b>Problem solver</b><small>Curious by default</small></span></div>
            <div className="floating-chip chip-bottom"><span className="chip-icon blue"><Layers3 size={16} /></span><span><b>End-to-end mindset</b><small>From requirements to delivery</small></span></div>
            <div className="art-scribble">Better work<br />starts with<br /><span>clarity ↗</span></div>
          </div>
          <a className="scroll-cue" href="#about"><span /> Scroll to explore</a>
        </section>

        <section className="about section-wrap section-block" id="about">
          <div className="section-kicker">01 / A LITTLE ABOUT ME</div>
          <div className="about-grid">
            <div>
              <h2>Bridging the gap between<br /><span>ideas and execution.</span></h2>
            </div>
            <div className="about-copy">
              <p>
                I bring 4 years of total experience, including 2 years in new product development and 2 years in project management. My background combines a B.Tech in Mechanical Engineering with an MBA. I enjoy work that needs structured coordination and a hands-on technical approach—from understanding a requirement to refining a user-facing workflow.
              </p>
              <p>
                My recent project work has touched HRMS data migration, RFID access-card workflows,
                API integration, and property-management interfaces. I value clear communication,
                thoughtful problem-solving, and changes that solve the real problem without adding
                unnecessary complexity.
              </p>
              <p>
                On the development side, I work as a Software Developer building responsive web applications with
                React.js, Next.js, JavaScript, HTML5, CSS3, and Tailwind CSS. I build reusable UI components, integrate
                REST APIs, and create form-heavy interfaces with Formik and Yup, working in Agile teams on enterprise-grade
                applications for international clients.
              </p>
              <div className="location-line"><MapPin size={16} /> Interested in opportunities in Delhi/NCR or Indore, including suitable remote work.</div>
            </div>
          </div>
          <div className="value-strip">
            <div><span>01</span><b>Understand first</b><small>Clarify the problem before changing the solution.</small></div>
            <div><span>02</span><b>Work collaboratively</b><small>Keep people, priorities, and delivery aligned.</small></div>
            <div><span>03</span><b>Keep improving</b><small>Prefer practical, maintainable improvements.</small></div>
          </div>
        </section>

        <section className="skills section-wrap section-block" id="skills">
          <div className="section-heading">
            <div><div className="section-kicker">02 / WHAT I BRING</div><h2>Skills & <span>toolkit.</span></h2></div>
            <p>A blend of delivery-focused thinking and hands-on technical work.</p>
          </div>
          <div className="skill-grid">
            {skillGroups.map((group) => {
              const Icon = group.icon
              return <article className="skill-card" key={group.title}>
                <div className="skill-card-head"><span className="skill-icon"><Icon size={20} /></span><h3>{group.title}</h3></div>
                <div className="skill-tags">{group.items.map(item => <span key={item}>{item}</span>)}</div>
              </article>
            })}
          </div>
          <p className="small-note">Skills listed reflect tools and work areas represented in this portfolio draft. Please confirm proficiency levels before publishing.</p>

          <div className="rs-block">
            <div className="rs-head">
              <h3>Frontend developer skills</h3>
              <p>Technologies and responsibilities from my current frontend role.</p>
            </div>
            <div className="rs-grid">
              {resumeSkillGroups.map((group) => {
                const Icon = group.icon
                return <article className="skill-card rs-card" key={group.title}>
                  <div className="skill-card-head"><span className="skill-icon"><Icon size={20} /></span><h3>{group.title}</h3></div>
                  <div className="skill-tags">{group.items.map(item => <span key={item}>{item}</span>)}</div>
                </article>
              })}
            </div>
            <div className="rs-columns">
              <article className="rs-panel">
                <h4>What I do day to day</h4>
                <ul>{resumeExperience.map(point => <li key={point}>{point}</li>)}</ul>
              </article>
              <article className="rs-panel">
                <h4>Key projects</h4>
                {resumeProjects.map(project => (
                  <div className="rs-project" key={project.title}>
                    <b>{project.link
                      ? <a href={project.link} target="_blank" rel="noreferrer">{project.title} <ExternalLink size={12} /></a>
                      : project.title}</b>
                    <ul>{project.points.map(point => <li key={point}>{point}</li>)}</ul>
                  </div>
                ))}
              </article>
            </div>
            <div className="rs-capabilities">
              <h4>Core capabilities</h4>
              <div className="skill-tags">{coreCapabilities.map(item => <span key={item}>{item}</span>)}</div>
            </div>
          </div>
        </section>

        <section className="projects section-wrap section-block" id="projects">
          <div className="section-heading">
            <div><div className="section-kicker">03 / SELECTED WORK</div><h2>Projects with a <span>purpose.</span></h2></div>
            <p>A selection of project areas from my recent technical work.</p>
          </div>
          <div className="project-grid">
            {projects.map(project => {
              const Icon = project.icon
              return <article className="project-card" key={project.number}>
                <div className="project-visual">
                  <div className="project-visual-top"><span>{project.number} / CASE STUDY</span><Icon size={19} /></div>
                  <div className="visual-lines"><i /><i /><i /></div>
                  <div className="visual-window">
                    <div className="window-dots"><i /><i /><i /></div>
                    <div className="window-content"><span /><span /><span /><span /></div>
                  </div>
                  <span className="visual-orb" />
                </div>
                <div className="project-content">
                  <div className="project-type">{project.type}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                  <button className="text-link" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                    Discuss this project <ArrowUpRight size={15} />
                  </button>
                  {project.link && (
                    <a className="live-link" href={project.link} target="_blank" rel="noreferrer">
                      <ExternalLink size={14} /> Live site: {project.link.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                    </a>
                  )}
                </div>
              </article>
            })}
          </div>
          <p className="small-note">Project summaries are intentionally high-level. Add approved screenshots, measurable outcomes, and public links where available—do not publish confidential client or company information.</p>
        </section>

        <section className="contact section-wrap section-block" id="contact">
          <div className="contact-panel">
            <div className="contact-copy">
              <div className="section-kicker">04 / WHAT'S NEXT?</div>
              <h2>Let's make<br /><span>something useful.</span></h2>
              <p>Have a role, project, or idea in mind? Send a message and let's see how I can help.</p>
              <div className="contact-detail"><Mail size={17} /><span>Reach me at karan.bakshi005@gmail.com.</span></div>
              <button className="email-copy" onClick={copyEmail}>{copied ? <Check size={16} /> : <Mail size={16} />}{copied ? 'Email copied' : 'Copy email address'}</button>
              <div className="social-row">
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn (replace with profile link)"><Linkedin size={18} /></a>
                <a href="https://github.com/karanbaksh005" target="_blank" rel="noreferrer" aria-label="GitHub profile"><Github size={18} /></a>
                <span className="social-hint">LinkedIn profile link to be added</span>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-heading"><span>Send a message</span><ArrowUpRight size={17} /></div>
              <label>Your name<input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="How should I address you?" /></label>
              <label>Email address<input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" /></label>
              <label>What would you like to discuss?<textarea required rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Tell me a little about the opportunity or project..." /></label>
              <button className="button button-primary submit-button" type="submit">Open email draft <Send size={16} /></button>
              <small>This form opens your email app; it does not store or send messages through a server.</small>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand footer-brand" href="#home">Karan<span>.</span></a>
        <p>Built with intention. Always learning.</p>
        <a className="back-top" href="#home" aria-label="Back to top"><ArrowUpRight size={17} /></a>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Karan Bakshi</span><span>Frontend Development <i>×</i> Project Delivery</span></div>
      </footer>
    </div>
  )
}

export default App