import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4'; // Importar Google Analytics
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import DomoticsPage from './pages/DomoticsPage';

// Iniciar Google Analytics con tu ID de seguimiento
const GA_TRACKING_ID = 'G-6Q6NZ0D4EJ'; // Sustituye con tu ID real
ReactGA.initialize(GA_TRACKING_ID);

// Componente para registrar cada página visitada
const AnalyticsTracker = () => {
  const location = useLocation(); // Detecta la ubicación actual

  useEffect(() => {
    // Registra la vista de página cada vez que cambia la ruta
    ReactGA.send({ hitType: 'pageview', page: location.pathname });
  }, [location]);

  return null;
};

// Desactivar selección de texto
document.addEventListener('selectstart', (e) => {
  e.preventDefault();
});

const App = () => (
  <Router>
    <AnalyticsTracker /> {/* Añade el rastreo de analíticas */}
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<DomoticsPage />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
