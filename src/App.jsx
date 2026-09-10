import { useEffect, useRef, useState } from 'react'
import './App.css'
import profileImage from './images/profile.jpeg'


// ==============================
// SCROLL REVEAL COMPONENT
// ==============================

function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current

    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(element)
        }
      },
      {
        threshold: 0.15
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'reveal-visible' : ''} ${className}`}
      style={{ '--delay': `${delay}s` }}
    >
      {children}
    </div>
  )
}


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
// SECTION NAVIGATION BUTTON
// ==============================

function NextButton({ href, text, direction = 'down' }) {
  return (
    <div className="next-button-container">

      <a href={href} className="next-button">

        <span>{text}</span>

        <b>
          {direction === 'up' ? '↑' : '↓'}
        </b>

      </a>

    </div>
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
      <div className="hero-glow glow-three"></div>

      <div className="floating-star star-one">✦</div>
      <div className="floating-star star-two">✧</div>
      <div className="floating-star star-three">✦</div>
      <div className="floating-star star-four">✧</div>


      {/* HERO CONTENT */}

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


        {/* MAIN BUTTONS */}

        <div className="hero-buttons">

          <a href="#about" className="primary-button">
            Explore My Portfolio
            <span>↓</span>
          </a>

          <a
            href="/Camelia_Pramanick_CV.pdf"
            download="Camelia_Pramanick_CV.pdf"
            className="secondary-button"
          >
            Download CV
            <span>↓</span>
          </a>

        </div>


        {/* CONTINUE BUTTON */}

        <NextButton
          href="#about"
          text="Continue to About"
        />

      </div>


      {/* SCROLL INDICATOR */}

      <div className="scroll-indicator">

        <span>↓</span>

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

      <Reveal className="about-image">

        <div className="image-ring">

          <div className="image-circle">

            <img
              src={profileImage}
              alt="Camelia"
            />

          </div>

        </div>

      </Reveal>


      <Reveal className="about-text" delay={0.15}>

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

          <p>
            Always learning. Always building.
          </p>
        </div>

      </Reveal>


      <Reveal className="about-next" delay={0.25}>

        <NextButton
          href="#education"
          text="Continue to Education"
        />

      </Reveal>

    </section>
  )
}


// ==============================
// EDUCATION
// ==============================

function Education() {
  return (
    <section id="education" className="section">

      <Reveal className="section-heading">

        <p className="small-title">
          MY JOURNEY
        </p>

        <h2 className="section-title">
          Education
        </h2>

      </Reveal>


      <Reveal delay={0.15}>

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

      </Reveal>


      <Reveal delay={0.3}>

        <NextButton
          href="#skills"
          text="Continue to Skills"
        />

      </Reveal>

    </section>
  )
}


// ==============================
// SKILLS
// ==============================

function Skills() {

  const skills = [
    ['01', 'HTML', 'Web Structure'],
    ['02', 'CSS', 'Web Design'],
    ['03', 'JavaScript', 'Programming'],
    ['04', 'React', 'Frontend Development'],
    ['05', 'Python', 'Programming'],
    ['06', 'C', 'Programming'],
    ['07', 'C++', 'Programming'],
    ['08', 'Java', 'Programming']
  ]

  return (
    <section id="skills" className="section skills-section">

      <Reveal className="section-heading">

        <p className="small-title">
          WHAT I WORK WITH
        </p>

        <h2 className="section-title">
          My Skills
        </h2>

      </Reveal>


      <div className="skills">

        {skills.map((skill, index) => (

          <Reveal
            key={skill[1]}
            delay={index * 0.08}
          >

            <div className="skill-card">

              <div className="skill-number">
                {skill[0]}
              </div>

              <h3>
                {skill[1]}
              </h3>

              <p>
                {skill[2]}
              </p>

              <div className="skill-glow"></div>

            </div>

          </Reveal>

        ))}

      </div>


      <Reveal delay={0.3}>

        <NextButton
          href="#cv"
          text="Continue to CV"
        />

      </Reveal>

    </section>
  )
}


// ==============================
// CV SECTION
// ==============================

function CV() {
  return (
    <section id="cv" className="cv-section">

      <Reveal>

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
            href="/Camelia_Pramanick_CV.pdf"
            download="Camelia_Pramanick_CV.pdf"
            className="cv-button"
          >
            <span>
              Download CV
            </span>

            <b>
              ↓
            </b>

          </a>

        </div>

      </Reveal>


      <Reveal delay={0.2}>

        <NextButton
          href="#contact"
          text="Continue to Contact"
        />

      </Reveal>

    </section>
  )
}


// ==============================
// CONTACT
// ==============================

function Contact() {
  return (
    <section id="contact" className="contact-section">

      <Reveal>

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

      </Reveal>


      <div className="contact-card">

        <Reveal delay={0.1}>

          <div className="contact-item">

            <span>
              ✉
            </span>

            <div>

              <small>
                Email
              </small>

              <a href="mailto:cameliapramanick12345@gmail.com">
                cameliapramanick12345@gmail.com
              </a>

            </div>

          </div>

        </Reveal>


        <Reveal delay={0.2}>

          <div className="contact-item">

            <span>
              ☎
            </span>

            <div>

              <small>
                Phone
              </small>

              <a href="tel:+916290155555">
                +91 62901 55555
              </a>

            </div>

          </div>

        </Reveal>

      </div>


      <Reveal delay={0.3}>

        <NextButton
          href="#home"
          text="Back to Top"
          direction="up"
        />

      </Reveal>

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