import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/NavBar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Projects from './pages/Projects/Projects'
import './App.css'

function App() {
  return (
    <ThemeProvider>
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
    </ThemeProvider>
  )
}

export default App
