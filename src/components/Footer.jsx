import React from 'react';

const Footer = () => (
  <footer className="bg-dark text-white text-center py-3">
    <div className="container">
      <p>&copy; {new Date().getFullYear()} Nebstala. All rights reserved.</p>
      <div>
        <a href="#features" className="text-white me-3">Features</a>
        <a href="#pricing" className="text-white me-3">Pricing</a>
        <a href="#contact" className="text-white">Contact</a>
      </div>
    </div>
  </footer>
);

export default Footer;
