import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { scroller } from 'react-scroll';
import { useNavigate, useLocation } from 'react-router-dom';
import '../css/Navbar.css';
import useScroll from '../hooks/useScroll';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const scrolled = useScroll();
  const navigate = useNavigate();
  const location = useLocation(); // Detectar la página actual
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Cambiar idioma
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setDropdownOpen(false);
  };

  // Navegar entre páginas y hacer scroll
  const handleNavigation = (page, section) => {
    if (page === 'details') {
      // Si el botón es Domotics, redirige a /details y desplaza al inicio
      navigate('/details');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll al inicio
      }, 100); // Espera para asegurar la carga del DOM
    } else {
      if (location.pathname !== `/${page}`) {
        // Redirige primero si no estás en la página deseada
        navigate(`/${page}`);
        setTimeout(() => {
          scrollToSection(section);
        }, 500);
      } else {
        // Si ya estás en la página, solo hace scroll
        scrollToSection(section);
      }
    }
  };

  // Función para desplazarse suavemente a una sección
  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 500,
      smooth: true,
      offset: -70 // Ajuste para el tamaño del navbar fijo
    });
  };

  return (
    <nav
      className={`navbar navbar-expand-lg py-3 shadow ${
        scrolled ? 'scrolled navbar-dark' : 'navbar-dark'
      }`}
    >
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand logo" href="/">
          <img 
            src="/logo512.png" 
            alt="Logo" 
            className="navbar-logo"
          />
        </a>


        {/* Botón de colapso para móviles */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Enlaces */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* Features */}
            <li className="nav-item">
              <button
                className="nav-link btn"
                onClick={() => handleNavigation('', 'features')}
              >
                {t('navbar.features')}
              </button>
            </li>

            {/* Domotics (Redirige a /details y desplaza al inicio) */}
            <li className="nav-item">
              <button
                className="nav-link btn"
                onClick={() => handleNavigation('details')}
              >
                {t('navbar.domotics')}
              </button>
            </li>

            {/* Contact */}
            <li className="nav-item">
              <button
                className="nav-link btn"
                onClick={() => handleNavigation('', 'contact')}
              >
                {t('navbar.contact')}
              </button>
            </li>
          </ul>

          {/* Selector de Idioma */}
          <div className="dropdown ms-3">
            <button
              className="btn btn-outline-light dropdown-toggle"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              {i18n.language.toUpperCase()}
            </button>
            {dropdownOpen && (
              <ul className="dropdown-menu show">
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => changeLanguage('en')}
                  >
                    English
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => changeLanguage('es')}
                  >
                    Español
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
