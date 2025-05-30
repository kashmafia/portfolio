import "./About.css";
import AnimatedGradientText from "../../components/AnimatedGradientText/AnimatedGradientText.jsx";
function About() {
	return (
		<div className="about-container">
			<h1 className="about-title">
				<AnimatedGradientText text=" About Me" />
			</h1>

			<div className="about-grid">
				<div className="section-container">
					<h2 className="section-title">
						<AnimatedGradientText
							colors={["#22092C", "#872341", "#BE3144"]}
							text="Background"
						/>
					</h2>
					<p className="section-text">
						I'm a passionate full-stack developer with a focus on creating
						intuitive and efficient web applications. With experience in modern
						web technologies, I enjoy solving complex problems and building
						user-friendly solutions.
					</p>

					<h2 className="section-title">
						<AnimatedGradientText
							colors={["#22092C", "#872341", "#BE3144"]}
							text="Skills"
						/>
					</h2>
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
								<li>Java</li>
								<li>GoLang</li>
								<li>GoLand</li>
								<li>REST APIs</li>
								<li>Kubernetes</li>
								<li>AWS Cloud</li>
								<li>CI/CD</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="section-container">
					<h2 className="section-title">
						<AnimatedGradientText
							colors={["#22092C", "#872341", "#BE3144"]}
							text="Experience"
						/>
					</h2>
					<div className="experience-item">
						<h3 className="experience-title">Software Engineer - Qualtrics</h3>
						<p className="experience-date">2022 - Present</p>
						<p className="experience-description">
							Led the architecture, development and onboarding of a microservice
							in Go and React that provided enrichments for TBs of call log data
							flowing through the pipeline onto 22 AWS regions globally with
							Grafana and Splunk monitoring and logging achieving 99.99% SLA,
							enabling organizations to evaluate agents autonomously. ▪
							Engineered a multi-faceted infrastructure optimization strategy
							leveraging KEDA-based event-driven Kubernetes autoscaling and
							horizontal pod scaling patterns, resulting in $700,000/year AWS
							cost reduction through precise resource allocation and dynamic
							workload management across multiple availability zones. ▪ Led the
							decomposition of a legacy Java monolith into event-driven,
							pipeline-based microservices, leveraging Kafka for distributed
							messaging and Elasticsearch for optimized indexing. Refactored
							data flows to improve scalability and fault isolation, reducing
							deployment times by 70%, cutting maintenance overhead, and freeing
							up 1 full-time engineer for high-priority initiatives. ▪ Served as
							on-call engineer, working directly with customer reps to resolve
							up to 5+ high-priority issues every rotation while taking measures
							to reduce future recurring issues by 35%+ through preventative
							actions and enhanced monitoring. ▪ Scaled system throughput by 10x
							through implementing asynchronous message processing, autoscaling,
							and optimized resource allocations, enabling the services to
							handle millions of records daily without performance degradation.
							▪ Refactored a legacy TypeScript service by integrating Temporal
							for workflow orchestration, improving observability, error
							handling, and incident recovery and also enhanced monitoring with
							detailed Splunk logs and granular Grafana dashboards, reducing
							service maintenance time by 95% through simplified workflows and
							automated failure recovery. ▪ Contributed to FEDRAMP-certified
							projects by securing federal security clearances and enabling
							critical work for government clients with a 100% compliance rate
							for all security audits. ▪ Mentored and supervised the career
							development of 1 team intern, fostering career development and
							helping deliver intern projects 1 month ahead of schedule.{" "}
						</p>
					</div>

					<div className="experience-item">
						<h3 className="experience-title">Data Science Intern - Kohler</h3>
						<p className="experience-date">2021 - 2022</p>
						<p className="experience-description">
							Developed and maintained multiple client projects using modern web
							technologies.
						</p>
					</div>

					<h2 className="section-title">
						<AnimatedGradientText
							colors={["#22092C", "#872341", "#BE3144"]}
							text="Education"
						/>
					</h2>
					<div>
						<h3 className="education-title">B.S. in Computer Science</h3>
						<p className="education-details">University Name, 2018</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
