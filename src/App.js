// src/App.js
import React from 'react';
// 1. Make sure BrowserRouter is imported
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import MainLayout from './components/MainLayout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Visualization from './components/Visualization/Visualization';
import './App.css';

function App() {
  return (
    // 2. ADD basename={process.env.PUBLIC_URL} HERE
    <Router basename={process.env.PUBLIC_URL}> 
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="/viz/:algoName" element={<Visualization />} />
      </Routes>
    </Router>
  );
}

export default App;