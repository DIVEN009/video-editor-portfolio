import heroBackground from '../assets/Herobackgroundimage.png'
import myImage from '../assets/My iimage.png'

const Hero = ({ setCurrentPage }) => {
  return (
    <section className="hero">
      {/* Hero background image */}
      <div 
        className="hero-background" 
        style={{ backgroundImage: `url(${heroBackground})` }}
      ></div>
      
      {/* Enhanced dark overlay for text readability */}
      <div className="hero-overlay"></div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-layout">
            {/* Left side - Enhanced text content */}
            <div className="hero-text">
              {/* Premium headline with improved spacing */}
              <h1 className="hero-title">VIDEO EDITOR</h1>
              
              {/* Refined subtitle with elegant styling */}
              <p className="hero-subtitle">Shorts • Reels • YouTube</p>
              
              {/* Polished description */}
              <p className="hero-description">
                High-retention edits built for watch time and engagement
              </p>
              
              {/* Premium CTA buttons */}
              <div className="hero-buttons">
                <button 
                  onClick={() => setCurrentPage && setCurrentPage('work')} 
                  className="btn btn-primary"
                >
                  View Work
                </button>
                <button 
                  onClick={() => setCurrentPage && setCurrentPage('contact')} 
                  className="btn btn-secondary"
                >
                  Contact
                </button>
              </div>
            </div>
            
            {/* Right side - Enhanced profile image */}
            <div className="hero-image">
              <div className="image-container">
                <div className="image-inner">
                  <img src={myImage} alt="Diven - Video Editor" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero