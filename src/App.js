import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from '../src/Pages/Landing/Landing';
import Dashboard from '../src/Pages/Dashboard/Dashboard';




const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />




        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Dashboard />} /> {/* Optional: Catch-all for 404 */}

      </Routes>
    </Router>
    </>
  );
};

export default App;
