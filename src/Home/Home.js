import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


const algorithms = [
  {
    path: 'k-means',
    title: 'K-Means Clustering',
    description: 'An unsupervised learning algorithm for partitioning data into K distinct clusters.'
  },
  // {
  //   path: 'another-algo',
  //   title: 'Another Algorithm',
  //   description: 'A description of your next amazing visualization.'
  // }
];

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Interactive Machine Learning Visualizations</h1>
        <p>Explore classic algorithms in action. Click on a card to see the visualization.</p>
      </div>
      <div className="algorithms-grid">
        {algorithms.map((algo) => (
          <Link to={`/viz/${algo.path}`} key={algo.path} className="algo-card">
            <h3>{algo.title}</h3>
            <p>{algo.description}</p>
            <span className="view-viz">View Visualization &rarr;</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;