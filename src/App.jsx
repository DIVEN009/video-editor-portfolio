import { useState } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import WhyHireMe from './components/WhyHireMe'
import Contact from './components/Contact'

function App() {
  // State to manage current page
  const [currentPage, setCurrentPage] = useState('hero')

  // Function to render current page component
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'hero':
        return <Hero setCurrentPage={setCurrentPage} />
      case 'about':
        return <About />
      case 'work':
        return <Work />
      case 'why-hire-me':
        return <WhyHireMe />
      case 'contact':
        return <Contact />
      default:
        return <Hero setCurrentPage={setCurrentPage} />
    }
  }

  return (
    <div className="App">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="main-content">
        {renderCurrentPage()}
      </main>
    </div>
  )
}

export default App