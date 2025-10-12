import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';

// This component acts as a template for pages with a standard layout
const MainLayout = () => {
  return (
    <div className="app-container">
      <Header />
      <main>
        {/* The Outlet component renders the matched child route's element */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;