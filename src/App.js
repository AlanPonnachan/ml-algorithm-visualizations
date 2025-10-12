import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import the new layout component
import MainLayout from './components/MainLayout';

// Import the page components
import Home from './components/Home/Home';
import About from './components/About/About';
import Visualization from './components/Visualization/Visualization';

// Import global styles
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Wrap the standard pages in the MainLayout component */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>

        {/* The visualization route is separate, so it will not have the header or footer */}
        <Route path="/viz/:algoName" element={<Visualization />} />
      </Routes>
    </Router>
  );
}

export default App;