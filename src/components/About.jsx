import React from 'react';

const About = () => {
  const skills = [
    'HTML5', 'CSS3', 'JavaScript (ES6+)', 'React', 'Vite', 
    'Tailwind CSS', 'Git & GitHub', 'Responsive Design', 'Node.js', 'Figma'
  ];

  return (
    <section id="about" className="section container">
      <h2 className="section-title">About Me</h2>
      <div className="about-grid">
        <div className="about-img-box">
          <img 
            src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Developer working at desk" 
            className="about-img" 
          />
        </div>
        <div className="about-text glass" style={{ padding: '2rem', borderRadius: '20px' }}>
          <p>
            Hello! I enjoy creating things that live on the internet. My interest in web development started 
            back in 2015 when I decided to try editing custom Tumblr themes — turns out hacking together 
            HTML & CSS taught me a lot about web development!
          </p>
          <p>
            Fast-forward to today, and I've had the privilege of building high-quality websites and applications 
            for various clients. My main focus these days is building accessible, inclusive products and digital 
            experiences for a variety of audiences.
          </p>
          
          <div className="skills-wrapper">
            <h3 className="skills-title">Here are a few technologies I've been working with recently:</h3>
            <div className="skills-list">
              {skills.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
