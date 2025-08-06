import React from 'react';

import AppRoutes from './AppRoutes';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import { ThemeProvider } from './context/ThemeContext';
function App() {
  return (
    <div >
      <ThemeProvider>
      <BrowserRouter>
      <Navbar/>

        <AppRoutes />
      </BrowserRouter>
      </ThemeProvider>
    </div>

  );
}

export default App;
