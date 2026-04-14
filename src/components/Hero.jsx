import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content animate-fade-in">
          <span className="hero-subtitle">Frontend Developer</span>
          <h1 className="hero-title">
            Hi, I'm <span style={{ color: 'var(--accent-color)' }}>John Doe</span>. <br />
            I build things for the web.
          </h1>
          <div className="hero-desc">
            <div className="typing-text-container">
              <p className="typing-text">Crafting beautiful, modern, and responsive digital experiences.</p>
            </div>
            <p style={{ marginTop: '1rem' }}>
              I'm a passionate developer specializing in building exceptional web pages, mobile apps, and everything in between using modern React toolchains.
            </p>
          </div>
          
          <div className="hero-buttons">
            <a href="#projects" className="btn">View My Work</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
