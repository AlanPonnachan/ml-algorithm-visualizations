import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; // Added Link import just in case you use the back button code
import './Visualization.css';

const Visualization = () => {
  const { algoName } = useParams();

  // FIX: Use process.env.PUBLIC_URL to get the correct path (e.g., /ml-algorithm-visualizations)
  // This ensures it works both locally and on GitHub Pages.
  const vizUrl = `${process.env.PUBLIC_URL}/${algoName}.html`;

  useEffect(() => {
    document.body.classList.add('fullscreen-active');
    return () => {
      document.body.classList.remove('fullscreen-active');
    };
  }, []);

  return (
    <div className="viz-container-fullscreen">
      {/* 
         If you want a back button overlaid on the full screen, 
         uncomment the following lines:
      */}
      {/* 
      <div style={{position: 'absolute', top: '10px', left: '10px', zIndex: 1000}}>
        <Link to="/" style={{color: 'white', textDecoration: 'none', background: 'rgba(0,0,0,0.5)', padding: '5px 10px', borderRadius: '5px'}}>
           &larr; Back
        </Link>
      </div> 
      */}

      <iframe
        src={vizUrl}
        title={algoName}
        className="viz-iframe-fullscreen"
        // Removing 'allow-same-origin' can sometimes fix the sandbox warning, 
        // but your scripts might need it. Keep it if your JS needs to access DOM.
        sandbox="allow-scripts allow-same-origin" 
      />
    </div>
  );
};

export default Visualization;