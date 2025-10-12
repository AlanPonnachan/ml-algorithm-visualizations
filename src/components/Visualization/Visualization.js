import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Visualization.css';

const Visualization = () => {
  const { algoName } = useParams();

  // Construct the path to the HTML file in the `public` folder
  const vizUrl = `/${algoName}.html`;

  // This effect adds a class to the <body> tag when the component is shown
  // and removes it when the component is hidden. This lets us apply
  // full-screen styles from a global CSS file.
  useEffect(() => {
    document.body.classList.add('fullscreen-active');

    return () => {
      document.body.classList.remove('fullscreen-active');
    };
  }, []); // The empty array ensures this runs only once when the component mounts

  return (
    <div className="viz-container-fullscreen">
      <iframe
        src={vizUrl}
        title={algoName}
        className="viz-iframe-fullscreen"
        sandbox="allow-scripts allow-same-origin"
      />
    </div>
  );
};

export default Visualization;