import './App.css'

import Header from "./components/Header.jsx"
import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import About from "./components/About.jsx"
import Education from "./components/Education.jsx"
import Skills from "./components/Skills.jsx"
import Contact from "./components/Contact.jsx"
import Footer from "./components/Footer.jsx"

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App