function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 sticky bottom-0">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p>&copy; {new Date().getFullYear()} Kaushik Kolla. All rights reserved.</p>
        </div>
        <div className="space-x-4">
          <a 
            href="https://github.com/kashmafia" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/kaushik-kolla/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer 