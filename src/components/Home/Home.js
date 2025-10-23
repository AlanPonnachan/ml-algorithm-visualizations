import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


const algorithms = [
  {
    path: 'k-means',
    title: 'K-Means Clustering',
    description: 'An unsupervised learning algorithm for partitioning data into K distinct clusters.'
  },
  {
    path: 'gradient-descent',
    title: 'Gradient Descent',
    description: 'An optimization algorithm that iteratively adjusts parameters in the direction of the negative gradient to minimize a function’s value.'
  },
  {
    path: 'linear-regression',
    title: 'Linear Regression',
    description: 'A statistical method that models the relationship between a dependent variable and one or more independent variables by fitting a straight line that minimizes prediction errors.'
  },
  {
    path: 'pca',
    title: 'PCA (Principal Component Analysis)',
    description: 'A dimensionality reduction technique that transforms correlated variables into a smaller set of uncorrelated components capturing the maximum variance in the data.'
  },
  {
    path: 'random-forest',
    title: 'Random Forest',
    description: 'A ensemble learning algorithm that builds multiple decision trees and combines their predictions to improve accuracy and reduce overfitting.'
  },
  
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