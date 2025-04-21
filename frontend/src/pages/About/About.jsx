import './About.css';
import AnimatedGradientText from '../../components/AnimatedGradientText/AnimatedGradientText.jsx';
function About() {
  return (
    <div className="about-container">
      <h1 className="about-title"><AnimatedGradientText text=" About Me" /></h1>
      
      <div className="about-grid">
        <div className="section-container">
          <h2 className="section-title"><AnimatedGradientText text="Background" /></h2>
          <p className="section-text">
            I'm a passionate full-stack developer with a focus on creating intuitive and efficient web applications. 
            With experience in modern web technologies, I enjoy solving complex problems and building user-friendly solutions.
          </p>
          
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            <div>
              <h3 className="skill-category">Frontend</h3>
              <ul className="skill-list">
                <li>React</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Next.js</li>
              </ul>
            </div>
            <div>
              <h3 className="skill-category">Backend</h3>
              <ul className="skill-list">
                <li>Node.js</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>REST APIs</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="section-container">
          <h2 className="section-title">Experience</h2>
          <div className="experience-item">
            <h3 className="experience-title">Senior Developer - Company Name</h3>
            <p className="experience-date">2021 - Present</p>
            <p className="experience-description">
              Led development of various web applications, focusing on scalability and performance optimization.
            </p>
          </div>
          
          <div className="experience-item">
            <h3 className="experience-title">Full Stack Developer - Another Company</h3>
            <p className="experience-date">2018 - 2021</p>
            <p className="experience-description">
              Developed and maintained multiple client projects using modern web technologies.
            </p>
          </div>

          <h2 className="section-title">Education</h2>
          <div>
            <h3 className="education-title">B.S. in Computer Science</h3>
            <p className="education-details">University Name, 2018</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About 