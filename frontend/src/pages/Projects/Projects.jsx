import "./Projects.css";

function Projects() {
	// You can move this to a separate data file later
	const projects = [
		{
			title: "Portfolio Website",
			description:
				"A personal portfolio website built with React, Node.js, and integrated with LLM capabilities.",
			technologies: ["React", "Node.js", "Tailwind CSS", "LLM API"],
			imageUrl: "/project-placeholder.jpg", // Add your project image
			githubUrl: "https://github.com/yourusername/portfolio",
			liveUrl: "https://yourportfolio.com",
		},
		{
			title: "Project Two",
			description:
				"A full-stack application that demonstrates modern web development practices and real-time features.",
			technologies: ["Next.js", "PostgreSQL", "WebSocket", "Docker"],
			imageUrl: "/project-placeholder.jpg",
			githubUrl: "https://github.com/yourusername/project-two",
			liveUrl: "https://project-two.com",
		},
	];

	return (
		<div className="projects-container">
			<h1 className="projects-title">My Projects</h1>

			<div className="projects-grid">
				{projects.map((project, index) => (
					<div key={index} className="project-card">
						<img
							src={project.imageUrl}
							alt={project.title}
							className="project-image"
						/>

						<div className="project-content">
							<h2 className="project-title">{project.title}</h2>
							<p className="project-description">{project.description}</p>

							<div className="technologies-section">
								<h3 className="technologies-title">Technologies Used:</h3>
								<div className="technologies-container">
									{project.technologies.map((tech, techIndex) => (
										<span key={techIndex} className="technology-tag">
											{tech}
										</span>
									))}
								</div>
							</div>

							<div className="project-links">
								<a
									href={project.githubUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="project-link"
								>
									GitHub →
								</a>
								<a
									href={project.liveUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="project-link"
								>
									Live Demo →
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Projects;
