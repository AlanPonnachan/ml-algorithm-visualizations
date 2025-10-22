import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page-container">
      <section className="about-hero">
        <div className="hero-content">
          <div className="hero-icon">📚</div>
          <h1 className="hero-title">About The Project</h1>
          <p className="hero-subtitle">
            An interactive collection of machine learning algorithm visualizations designed to make complex concepts intuitive and accessible.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="section-header">
          <h2>Project Overview</h2>
          <div className="header-accent"></div>
        </div>
        <div className="author-content">
          <p className="author-bio">
            This collection represents a personal exploration of foundational machine learning algorithms, implemented from scratch and visualized interactively to make their inner workings clear and approachable.
          </p>
          <ul className="feature-list">
  <li>
    <span className="feature-icon">1</span>
    <span className="feature-text">
      <strong>Interactive Visualizations:</strong> Engaging, configurable modules that bring each algorithm to life through dynamic exploration.
    </span>
  </li>
  <li>
    <span className="feature-icon">2</span>
    <span className="feature-text">
      <strong>Seamless Experience:</strong> Designed for clarity, responsiveness, and smooth interaction across all devices.
    </span>
  </li>
  <li>
    <span className="feature-icon">3</span>
    <span className="feature-text">
      <strong>Educational Focus:</strong> Created for learners and practitioners seeking an intuitive understanding of core machine learning concepts.
    </span>
  </li>
</ul>
     </div>
      </section>

      <section className="about-section author-section">
         <div className="section-header">
          <h2>About the Author</h2>
          <div className="header-accent"></div>
        </div>
        <div className="author-card">
          <div className="author-info">
            <h3 className="author-name">Your Name</h3>
            <p className="author-title">Technology Writer & AI Enthusiast</p>
            <p className="author-bio">
              Passionate about exploring the intersection of artificial intelligence and enterprise technology. Dedicated to making complex technical concepts accessible to a wider audience through comprehensive, well-researched content.
            </p>
            <div className="social-links">
              <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="social-link github">GitHub</a>
              <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="social-link linkedin">LinkedIn</a>
              <a href="https://twitter.com/your-handle" target="_blank" rel="noopener noreferrer" className="social-link twitter">Twitter</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;