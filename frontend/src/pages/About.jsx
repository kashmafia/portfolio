function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Background</h2>
          <p className="text-gray-600">
            I'm a passionate full-stack developer with a focus on creating intuitive and efficient web applications. 
            With experience in modern web technologies, I enjoy solving complex problems and building user-friendly solutions.
          </p>
          
          <h2 className="text-2xl font-semibold pt-4">Skills</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium">Frontend</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>React</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Next.js</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium">Backend</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Node.js</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>REST APIs</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Experience</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Senior Developer - Company Name</h3>
              <p className="text-gray-500">2021 - Present</p>
              <p className="text-gray-600">
                Led development of various web applications, focusing on scalability and performance optimization.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium">Full Stack Developer - Another Company</h3>
              <p className="text-gray-500">2018 - 2021</p>
              <p className="text-gray-600">
                Developed and maintained multiple client projects using modern web technologies.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold pt-4">Education</h2>
          <div>
            <h3 className="font-medium">B.S. in Computer Science</h3>
            <p className="text-gray-500">University Name, 2018</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About 