import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import DomoticsPage from './pages/DomoticsPage';

document.addEventListener('selectstart', (e) => {
  e.preventDefault();
});

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/domotics" element={<DomoticsPage />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
