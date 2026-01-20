import contactBackground from '../assets/letsworktogether.png'

const Contact = () => {
  return (
    <section id="contact" className="contact">
      {/* Contact background image */}
      <div 
        className="contact-background" 
        style={{ backgroundImage: `url(${contactBackground})` }}
      ></div>
      
      {/* Dark overlay for text readability */}
      <div className="contact-overlay"></div>
      
      <div className="container">
        <div className="contact-content">
          {/* Heading: Let's work together */}
          <h2 className="contact-title">Let's work together</h2>
          
          {/* Email contact */}
          <a 
            href="mailto:sainidiven@gmail.com" 
            className="contact-email"
          >
           ✉️ sainidiven@gmail.com
          </a>
          
          {/* WhatsApp contact */}
          <a 
            href="https://wa.me/919876438029?text=Hi%20Diven,%20I%20would%20like%20to%20discuss%20a%20video%20editing%20project" 
            target="_blank"
            rel="noopener noreferrer"
            className="contact-whatsapp"
          >
            💬 WhatsApp: +91 9876438029
          </a>
        </div>
      </div>
      
      {/* Footer - Thin top border, small text */}
      <footer className="footer">
        <div className="container">
          <p className="footer-text">© 2026 Diven — Video Editor</p>
        </div>
      </footer>
    </section>
  )
}

export default Contact