const experiences = [
  {
    type: 'training',
    title: 'IBM Artificial Intelligence Training',
    organization: 'IBM',
    year: '2024',
    description: [
      'Gained practical exposure to Python-based data processing and application logic',
      'Worked with real-world datasets to build functional analytical solutions',
    ],
  },
  {
    type: 'education',
    title: 'B.Tech in Computer Science and Engineering',
    organization: 'Lovely Professional University',
    year: '2022 – 2026',
    description: ['CGPA: 8.64'],
  },
];

const certifications = [
  { name: 'React.JS', issuer: 'HackerRank' },
  { name: 'Artificial Intelligence', issuer: 'IBM' },
  { name: 'Java Certification', issuer: 'Infosys' },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtext mx-auto">
            My professional journey and academic background
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 mb-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 mt-6 z-10 ring-4 ring-background" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="experience-card">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${
                          exp.type === 'training'
                            ? 'bg-primary/10 text-primary'
                            : 'bg-secondary text-foreground'
                        }`}
                      >
                        {exp.type === 'training' ? 'Training' : 'Education'}
                      </span>
                      <span className="text-sm text-muted-foreground">{exp.year}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-1">{exp.title}</h3>
                    <p className="text-primary text-sm mb-3">{exp.organization}</p>
                    <ul className="space-y-1">
                      {exp.description.map((desc, descIndex) => (
                        <li key={descIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-center mb-8">
              Certifications
            </h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="glass-card p-4 text-center hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h4 className="font-medium text-sm">{cert.name}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
