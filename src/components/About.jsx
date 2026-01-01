const About = () => {
  const highlights = [
    { number: '220+', label: 'DSA Problems Solved' },
    { number: '3+', label: 'Projects Built' },
    { number: '8.64', label: 'CGPA' },
  ];

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-heading">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="section-subtext mx-auto">
              Passionate about building exceptional web experiences
            </p>
          </div>

          <div className="glass-card p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl bg-secondary/30 border border-border/30"
                >
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {item.number}
                  </div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I'm a <span className="text-foreground font-medium">Frontend Developer</span> with 
                strong hands-on experience in JavaScript and React.js. I specialize in building 
                responsive, component-driven web applications with modern UI features and efficient 
                state management.
              </p>
              <p>
                Currently pursuing my <span className="text-foreground font-medium">B.Tech in Computer 
                Science and Engineering</span> at Lovely Professional University (2022-2026), I'm actively 
                developing React-based projects aligned with production-ready frontend practices.
              </p>
              <p>
                My focus areas include implementing modern UI patterns, integrating REST APIs, 
                and optimizing application performance. I'm passionate about writing clean, 
                maintainable code and staying updated with the latest frontend technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
