import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { ThemeContext } from '../../context/ThemeContext';
import AnimatedGradientText from '../AnimatedGradientText/AnimatedGradientText.jsx';

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-title-link">
          <AnimatedGradientText text="Kaushik Kolla" textSize="text-3xl" />
        </Link>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">
            <AnimatedGradientText text="Home" textSize="text-lg" />
          </Link>
          <Link to="/about" className="navbar-link">
            <AnimatedGradientText text="About" textSize="text-lg" />
          </Link>
          <Link to="/projects" className="navbar-link">
            <AnimatedGradientText text="Projects" textSize="text-lg" />
          </Link>
          <label className="theme-toggle">
            <input 
              type="checkbox" 
              checked={theme === 'dark'} 
              onChange={toggleTheme} 
            />
            <span className="slider">
              <i className={`fas ${theme === 'dark' ? 'fa-moon' : 'fa-sun'}`}></i>
            </span>
          </label>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 