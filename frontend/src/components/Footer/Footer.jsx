import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <p>&copy; {new Date().getFullYear()} Kaushik Kolla </p>
        </div>
        <div className="footer-links">
          <a 
            href="https://github.com/kashmafia" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/kaushik-kolla/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-link"
          >
            LinkedIn
          </a>
          <a 
            href="mailto:kaushikkolla2000@gmail.com?subject=Site Inquiry" 
            className="footer-link"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 