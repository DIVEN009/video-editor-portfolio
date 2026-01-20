import retentionImage from '../assets/Retention-Focused Edits.png'
import beatSyncImage from '../assets/Beat-Synced Cuts.png'
import captionsImage from '../assets/Clean Readable Captions.png'
import turnaroundImage from '../assets/Fast Turnaround & Remote Workflow.png'
import whyHireMeBackground from '../assets/whyhireme.png'

const WhyHireMe = () => {
  // Exact benefits as specified with corresponding images
  const benefits = [
    {
      title: 'Retention-focused edits',
      description: 'Every cut designed to maximize watch time',
      image: retentionImage
    },
    {
      title: 'Beat-synced cuts',
      description: 'Perfectly timed to music and audio',
      image: beatSyncImage
    },
    {
      title: 'Clean readable captions',
      description: 'Professional subtitles that enhance content',
      image: captionsImage
    },
    {
      title: 'Fast turnaround & remote workflow',
      description: 'Efficient delivery without compromising quality',
      image: turnaroundImage
    }
  ]

  return (
    <section id="why-hire-me" className="why-hire-me">
      {/* Why Hire Me background image */}
      <div 
        className="why-hire-me-background" 
        style={{ backgroundImage: `url(${whyHireMeBackground})` }}
      ></div>
      
      {/* Dark overlay for text readability */}
      <div className="why-hire-me-overlay"></div>
      
      <div className="container">
        <div className="why-hire-me-content">
          <h2 className="section-title">WHY HIRE ME</h2>
          
          {/* 2 or 4 column grid with clear separation from Work section */}
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                {/* Full background image for each benefit */}
                <div 
                  className="benefit-background"
                  style={{ backgroundImage: `url(${benefit.image})` }}
                ></div>
                
                {/* Dark overlay for text readability */}
                <div className="benefit-overlay"></div>
                
                {/* Benefit content */}
                <div className="benefit-content">
                  <h3 className="benefit-title">{benefit.title}</h3>
                  <p className="benefit-description">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyHireMe