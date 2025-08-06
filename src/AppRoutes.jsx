
import React from 'react';
import { Routes, Route } from 'react-router';


import CareerPage from './pages/CareerPage';
import LandingPage from './pages/LandingPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>} />
     
      <Route path="/careers" element={<CareerPage />} />  
  
    </Routes>
  );
};

export default AppRoutes;
