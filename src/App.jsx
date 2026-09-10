import './App.css'
import profileImage from './images/profile.jpeg'


// ==============================
// HEADER + NAVIGATION
// ==============================

function Header() {
  return (
    <header>
      <nav>

        <a href="#home" className="logo">
          Camelia<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>

      </nav>
    </header>
  )
}


// ==============================
// HERO
// ==============================

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-glow glow-one"></div>
      <div className="hero-glow glow-two"></div>

      <div className="floating-star star-one">✦</div>
      <div className="floating-star star-two">✧</div>
      <div className="floating-star star-three">✦</div>

      <div className="hero-content">

        <p className="welcome">
          WELCOME TO MY PORTFOLIO
        </p>

        <h1>
          Hello, I'm <span>Camelia</span>
        </h1>

        <h2>
          BCA Student <span>·</span> Aspiring Developer
        </h2>

        <p className="hero-description">
          I love exploring technology, building projects,
          learning new things and turning ideas into reality
          through code.
        </p>

        <div className="hero-buttons">

          <a href="#about" className="primary-button">
            Explore My Portfolio
            <span>↓</span>
          </a>

          <a
            href="/cv.pdf"
            download="Camelia-Pramanick-CV.pdf"
            className="secondary-button"
          >
            Download CV
            <span>↓</span>
          </a>

        </div>

      </div>

      <div className="scroll-indicator">
        <span></span>
        Scroll to explore
      </div>

    </section>
  )
}


// ==============================
// ABOUT
// ==============================

function About() {
  return (
    <section id="about" className="about-section">

      <div className="about-image">

        <div className="image-ring">

          <div className="image-circle">
            <img
              src={profileImage}
              alt="Camelia"
            />
          </div>

        </div>

      </div>


      <div className="about-text">

        <p className="small-title">
          ABOUT ME
        </p>

        <h2>
          Turning curiosity
          <br />
          into <span>code.</span>
        </h2>

        <p>
          Hello! I'm Camelia, a BCA student and aspiring
          developer with a strong interest in programming,
          web development and emerging technologies.
        </p>

        <p>
          I enjoy creating projects that allow me to learn,
          experiment and transform ideas into useful digital
          experiences.
        </p>

        <div className="about-highlight">
          <span>01</span>
          <p>Always learning. Always building.</p>
        </div>

      </div>

    </section>
  )
}


// ==============================
// EDUCATION
// ==============================

function Education() {
  return (
    <section id="education" className="section">

      <div className="section-heading">

        <p className="small-title">
          MY JOURNEY
        </p>

        <h2 className="section-title">
          Education
        </h2>

      </div>


      <div className="education-card">

        <div className="education-icon">
          🎓
        </div>

        <div className="education-content">

          <p className="year">
            CURRENTLY PURSUING
          </p>

          <h3>
            Bachelor of Computer Applications
          </h3>

          <p className="college">
            Techno India University, West Bengal
          </p>

          <p className="description">
            Building a strong foundation in computer science,
            programming, software development and modern
            web technologies.
          </p>

        </div>

        <div className="education-arrow">
          →
        </div>

      </div>

    </section>
  )
}


// ==============================
// SKILLS
// ==============================

function Skills() {
  return (
    <section id="skills" className="section skills-section">

      <div className="section-heading">

        <p className="small-title">
          WHAT I WORK WITH
        </p>

        <h2 className="section-title">
          My Skills
        </h2>

      </div>


      <div className="skills">

        <div className="skill-card">
          <div className="skill-number">01</div>
          <h3>HTML</h3>
          <p>Web Structure</p>
        </div>

        <div className="skill-card">
          <div className="skill-number">02</div>
          <h3>CSS</h3>
          <p>Web Design</p>
        </div>

        <div className="skill-card">
          <div className="skill-number">03</div>
          <h3>JavaScript</h3>
          <p>Programming</p>
        </div>

        <div className="skill-card">
          <div className="skill-number">04</div>
          <h3>React</h3>
          <p>Frontend Development</p>
        </div>

        <div className="skill-card">
          <div className="skill-number">05</div>
          <h3>Python</h3>
          <p>Programming</p>
        </div>

        <div className="skill-card">
          <div className="skill-number">06</div>
          <h3>C</h3>
          <p>Programming</p>
        </div>

      </div>

    </section>
  )
}


// ==============================
// CV SECTION
// ==============================

function CV() {
  return (
    <section className="cv-section">

      <div className="cv-box">

        <div>
          <p className="small-title">
            MY RESUME
          </p>

          <h2>
            Want to know more
            <br />
            about <span>me?</span>
          </h2>

          <p>
            Take a look at my CV to learn more about my
            education, skills, projects and experience.
          </p>
        </div>

        <a
          href="/cv.pdf"
          download="Camelia-Pramanick-CV.pdf"
          className="cv-button"
        >
          <span>Download CV</span>
          <b>↓</b>
        </a>

      </div>

    </section>
  )
}


// ==============================
// CONTACT
// ==============================

function Contact() {
  return (
    <section id="contact" className="contact-section">

      <p className="small-title">
        GET IN TOUCH
      </p>

      <h2>
        Let's connect<span>.</span>
      </h2>

      <p className="contact-text">
        Have an idea, opportunity or simply want to say hello?
        Feel free to reach out.
      </p>

      <div className="contact-card">

        <div className="contact-item">
          <span>✉</span>
          <div>
            <small>Email</small>
            <p>your-email@example.com</p>
          </div>
        </div>

        <div className="contact-item">
          <span>☎</span>
          <div>
            <small>Phone</small>
            <p>+91 XXXXX XXXXX</p>
          </div>
        </div>

      </div>

    </section>
  )
}


// ==============================
// FOOTER
// ==============================

function Footer() {
  return (
    <footer>

      <div className="footer-logo">
        Camelia<span>.</span>
      </div>

      <p>
        © 2026 Camelia. Made with ❤️ and React.
      </p>

      <a href="#home">
        Back to top ↑
      </a>

    </footer>
  )
}


// ==============================
// APP
// ==============================

function App() {
  return (
    <div className="portfolio">

      <Header />

      <main>

        <Hero />

        <About />

        <Education />

        <Skills />

        <CV />

        <Contact />

      </main>

      <Footer />

    </div>
  )
}

export default App