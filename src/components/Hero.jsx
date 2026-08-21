import profileImage from "../images/profile.jpeg"

function Hero() {
  return (
    <section id="home">

      <img
        src={profileImage}
        alt="Camelia"
        className="profile-image"
      />

      <h2>Hello, I'm Camelia 👋</h2>

      <h3>BCA Student & Aspiring Developer</h3>

      <p>
        Welcome to my personal portfolio. I am passionate about
        programming, web development and learning new technologies.
      </p>

      <a href="#contact">Contact Me</a>

    </section>
  )
}

export default Hero