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
    <strong>Interactive Visuals:</strong> Explore each algorithm hands-on with visual tools that make the concepts click.
  </span>
</li>
<li>
  <span className="feature-icon">2</span>
  <span className="feature-text">
    <strong>Smooth and Simple:</strong> Everything’s built to feel fast, clear, and easy to use—no matter what device you’re on.
  </span>
</li>
<li>
  <span className="feature-icon">3</span>
  <span className="feature-text">
    <strong>Made for Learning:</strong> Perfect for anyone who wants to truly understand how machine learning works, not just see the results.
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
            <h3 className="author-name">Alan Ponnachan</h3>
            <p className="author-title">ML Engineer | OSS Contributor</p>
            <p className="author-bio">
              Architecting end-to-end machine learning solutions, from open-source foundations to production scale.
            </p>
            <div className="social-links">
              <a href="https://github.com/AlanPonnachan" target="_blank" rel="noopener noreferrer" className="social-link github">GitHub</a>
              <a href="https://www.linkedin.com/in/alan-ponnachan-92731a214/" target="_blank" rel="noopener noreferrer" className="social-link linkedin">LinkedIn</a>
              <a href="https://twitter.com/your-handle" target="_blank" rel="noopener noreferrer" className="social-link twitter">Twitter</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;