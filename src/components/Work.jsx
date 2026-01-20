import { useState } from 'react'
import showreelVideo from '../assets/Video_Editor_Showreel_Generation_Request.mp4'
import gamingCardImage from '../assets/Gamingcardimage.png'
import showreelCover from '../assets/showreel.png'
import factImage from '../assets/fact.png'

const Work = () => {
  // State for video modal
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [currentVideo, setCurrentVideo] = useState(null)

  // Professional video editor portfolio links
  const projects = [
    {
      id: 1,
      title: 'SHOWREEL',
      videoUrl: showreelVideo, // Local showreel video
      isShowreel: true,
      isLocal: true, // Flag to indicate this is a local video file
      cardClass: 'showreel',
      backgroundImage: showreelCover // Showreel cover image
    },
    {
      id: 2,
      title: 'SHORTS / REELS',
      videoUrl: 'https://www.youtube.com/@divensaini9906/videos', // Your shorts/reels channel
      isShowreel: false,
      isLocal: false,
      cardClass: 'shorts',
      backgroundImage: factImage // Fact image for shorts/reels
    },
    {
      id: 3,
      title: 'GAMING EDITS',
      videoUrl: 'https://www.youtube.com/@divengaming094', // Your gaming channel
      isShowreel: false,
      isLocal: false,
      cardClass: 'gaming',
      backgroundImage: gamingCardImage // Gaming card background image
    },
    {
      id: 4,
      title: 'FACTS / DOCUMENTARY EDITS',
      videoUrl: 'https://www.youtube.com/watch?v=WfGMYdalClU', // Educational/documentary style
      isShowreel: false,
      isLocal: false,
      cardClass: 'documentary',
      backgroundImage: null // Add image path here when provided
    }
  ]

  // Handle card click - opens video modal or external link
  const handleCardClick = (project) => {
    if (project.isLocal) {
      // For local video files, open in modal
      setCurrentVideo(project)
      setIsVideoModalOpen(true)
    } else {
      // For external links, open in new tab
      window.open(project.videoUrl, '_blank', 'noopener,noreferrer')
    }
  }

  // Close video modal
  const closeVideoModal = () => {
    setIsVideoModalOpen(false)
    setCurrentVideo(null)
  }

  return (
    <section id="work" className="work">
      <div className="container">
        <div className="work-content">
          <h2 className="section-title">WORK</h2>
          
          {/* Responsive CSS grid - 3 columns desktop, 2 tablet, 1 mobile */}
          <div className="work-grid">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className={`work-card ${project.cardClass}`}
                onClick={() => handleCardClick(project)}
              >
                <div className="work-card-image">
                  {/* Background image for cards */}
                  {project.backgroundImage && (
                    <div 
                      className="work-card-background"
                      style={{ backgroundImage: `url(${project.backgroundImage})` }}
                    ></div>
                  )}
                  
                  {/* Video preview only for showreel on hover, but cover image shows by default */}
                  {project.isLocal && (
                    <video 
                      className="work-card-video-preview"
                      muted
                      loop
                      onMouseEnter={(e) => e.target.play()}
                      onMouseLeave={(e) => {
                        e.target.pause()
                        e.target.currentTime = 0
                      }}
                      style={{ opacity: 0 }} // Hidden by default, shows on hover
                    >
                      <source src={project.videoUrl} type="video/mp4" />
                    </video>
                  )}
                  <div className="work-card-overlay">
                    {/* Title text bottom-left */}
                    <h3 className="work-card-title">{project.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && currentVideo && (
        <div className="video-modal" onClick={closeVideoModal}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="video-modal-close" onClick={closeVideoModal}>
              ×
            </button>
            <div className="video-container">
              <video 
                controls 
                autoPlay
                className="modal-video"
              >
                <source src={currentVideo.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <h3 className="video-modal-title">{currentVideo.title}</h3>
          </div>
        </div>
      )}
    </section>
  )
}

export default Work