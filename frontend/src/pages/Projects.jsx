function Projects() {
  // You can move this to a separate data file later
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio website built with React, Node.js, and integrated with LLM capabilities.",
      technologies: ["React", "Node.js", "Tailwind CSS", "LLM API"],
      imageUrl: "/project-placeholder.jpg", // Add your project image
      githubUrl: "https://github.com/yourusername/portfolio",
      liveUrl: "https://yourportfolio.com"
    },
    {
      title: "Project Two",
      description: "A full-stack application that demonstrates modern web development practices and real-time features.",
      technologies: ["Next.js", "PostgreSQL", "WebSocket", "Docker"],
      imageUrl: "/project-placeholder.jpg",
      githubUrl: "https://github.com/yourusername/project-two",
      liveUrl: "https://project-two.com"
    },
    // Add more projects as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">My Projects</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img 
              src={project.imageUrl} 
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              
              <div className="mb-4">
                <h3 className="text-sm font-medium mb-2">Technologies Used:</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  GitHub →
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Live Demo →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects 