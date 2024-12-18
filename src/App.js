import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import ContactForm from './components/ContactForm';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<><HeroSection /><Features /><ContactForm /></>} />
      <Route path="/about" element={<div>About Page</div>} />
      <Route path="/features" element={<Features />} />
      <Route path="/contact" element={<ContactForm />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
