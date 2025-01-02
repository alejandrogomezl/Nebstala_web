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
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Estado para menú móvil

  // Cambiar idioma
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setDropdownOpen(false);
  };

  // Navegar entre páginas y hacer scroll
  const handleNavigation = (page, section) => {
    setMenuOpen(false); // Cerrar menú al navegar
    if (page === 'details') {
      navigate('/details');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } else {
      if (location.pathname !== `/${page}`) {
        navigate(`/${page}`);
        setTimeout(() => {
          scrollToSection(section);
        }, 500);
      } else {
        scrollToSection(section);
      }
    }
  };

  // Función para desplazarse suavemente
  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 500,
      smooth: true,
      offset: -70,
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
          <img src="/logo512.png" alt="Logo" className="navbar-logo" />
        </a>

        {/* Botón para menú móvil */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Enlaces */}
        <div
          className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button
                className="nav-link btn"
                onClick={() => handleNavigation('', 'features')}
              >
                {t('navbar.features')}
              </button>
            </li>

            <li className="nav-item">
              <button
                className="nav-link btn"
                onClick={() => handleNavigation('details')}
              >
                {t('navbar.domotics')}
              </button>
            </li>

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
