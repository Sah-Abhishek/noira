
import React from 'react';
import { Routes, Route } from 'react-router';


import CareerPage from './pages/CareerPage';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/About.jsx';
import AdmiLogin from './pages/AdminLogin.jsx';
import AdminDashoboard from './pages/AdminDashboard.jsx';
import OtpInput from './pages/OtpInput.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import UserSignup from './pages/UserSignup.jsx';
import UserLogin from './pages/UserLogin.jsx';
import TherapistDashboard from './pages/TherapistDashobard.jsx'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route path="/careers" element={<CareerPage />} />
      {/* Add more routes as needed */}
      <Route path="/about" element={<AboutPage />} />
      <Route path="/adminlogin" element={<AdmiLogin />} />
      <Route path="/otpinput" element={<OtpInput />} />
      <Route path="/usersignup" element={<UserSignup />} />
      <Route path="/userlogin" element={<UserLogin />} />

      {/* <Route path="/contact" element={<ContactPage />} /> */}
      {/* <Route path="/services" element={<ServicesPage />} /> */}


      <Route path="/admindashboard" element={<ProtectedRoute ><AdminDashoboard /></ProtectedRoute>} />
      <Route path="/therapistdashboard" element={<TherapistDashboard />} />

    </Routes >
  );
};

export default AppRoutes;
