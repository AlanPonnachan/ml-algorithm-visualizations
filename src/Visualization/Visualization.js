import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './Visualization.css';

const Visualization = () => {
  const { algoName } = useParams();
  const vizUrl = `/${algoName}.html`;

  return (
    <div className="viz-container">
      <div className="viz-header">
        <Link to="/" className="back-button">&larr; Back to Home</Link>
        <h1 className="viz-title">{algoName.replace('-', ' ')}</h1>
      </div>
      <div className="viz-frame-container">
        <iframe
          src={vizUrl}
          title={algoName}
          className="viz-iframe"
          sandbox="allow-scripts allow-same-origin"
        />
      </div>
    </div>
  );
};

export default Visualization;