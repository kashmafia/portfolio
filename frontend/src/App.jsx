import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import './App.css'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar className="sticky top-0 z-50" />
        <main className="flex-grow container mx-auto px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
        <Footer className="sticky bottom-0" />
      </div>
    </Router>
  )
}

export default App
