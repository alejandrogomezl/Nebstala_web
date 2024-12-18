import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import '../css/Navbar.css';
import useScroll from '../hooks/useScroll';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const scrolled = useScroll();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setDropdownOpen(false);
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
          {t('navbar.logo')}
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
            <li className="nav-item">
              <Link
                to="features"
                smooth={true}
                duration={500}
                className="nav-link"
              >
                {t('navbar.features')}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="pricing"
                smooth={true}
                duration={500}
                className="nav-link"
              >
                {t('navbar.pricing')}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="nav-link"
              >
                {t('navbar.contact')}
              </Link>
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
