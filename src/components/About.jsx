import aboutBackground from '../assets/aboutpagebackground.png'

const About = () => {
  // Skill badges as specified
  const skills = [
    'Premiere Pro',
    'After Effects',
    'Shorts / Reels',
    'YouTube',
    'Remote'
  ]

  return (
    <section id="about" className="about">
      {/* About background image */}
      <div 
        className="about-background" 
        style={{ backgroundImage: `url(${aboutBackground})` }}
      ></div>
      
      {/* Dark overlay for text readability */}
      <div className="about-overlay"></div>
      
      <div className="container">
        <div className="about-content">
          {/* Short intro text (2 lines max) */}
          <p className="about-text">
            Hi, I'm Diven.<br />
            I edit short-form and long-form videos focused on pacing, retention, and clarity.
          </p>
          
          {/* Skill badges in flexible row/grid */}
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-badge">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About