const projects = [
  {
    title: 'React Portfolio Dashboard',
    description: 'A single-page React application showcasing projects and technical skills with dynamic data rendering.',
    tech: ['React.js', 'JavaScript', 'CSS'],
    year: '2025',
    highlights: [
      'Built reusable functional components using useState and useEffect hooks',
      'Integrated REST APIs for dynamic data rendering',
      'Improved UI responsiveness through optimized component structure',
    ],
  },
  {
    title: 'Amazon Clone',
    description: 'A responsive e-commerce frontend replicating core Amazon UI features with interactive elements.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    year: '2024',
    highlights: [
      'Designed responsive e-commerce frontend replicating Amazon UI',
      'Implemented navigation, product listings, and hover effects',
      'Used JavaScript for DOM manipulation and dynamic content',
    ],
  },
  {
    title: 'Movie Recommendation System',
    description: 'A content-based movie recommendation system using Python with similarity-based suggestions.',
    tech: ['Python'],
    year: '2024',
    highlights: [
      'Built content-based recommendation engine',
      'Processed and analyzed movie metadata',
      'Focused on clean data handling and logical recommendation flow',
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtext mx-auto">
            A selection of my recent work and personal projects
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="project-card flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                </div>
                <span className="text-sm text-muted-foreground">{project.year}</span>
              </div>

              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-4 flex-grow">
                {project.description}
              </p>

              <ul className="space-y-2 mb-4">
                {project.highlights.map((highlight, hIndex) => (
                  <li key={hIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
