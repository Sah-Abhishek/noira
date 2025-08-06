
import React from 'react';
import { Routes, Route } from 'react-router';


import CareerPage from './pages/CareerPage';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/About.jsx';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>} />
     
      <Route path="/careers" element={<CareerPage />} />  
      {/* Add more routes as needed */}
      <Route path="/about" element={<AboutPage />} />
      {/* <Route path="/contact" element={<ContactPage />} /> */}
      {/* <Route path="/services" element={<ServicesPage />} /> */}

  
    </Routes>
  );
};

export default AppRoutes;
