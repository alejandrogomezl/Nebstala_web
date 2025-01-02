import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import '../css/HeroSection.css'; // Para estilos adicionales

const HeroSection = () => {
  const { t } = useTranslation();
  
  return (
    <header className="hero-section d-flex align-items-center text-center text-white">
      <div className="container">
        {/* Título */}
        <h1 className="display-4 fw-bold" style={{ fontFamily: 'Lora, serif' }}>
          {t('hero.title')}
        </h1>

        {/* Descripción */}
        <p className="lead mt-33" style={{ fontFamily: 'Roboto, sans-serif' }}>
          {t('hero.description')}
        </p>

        {/* Botón */}
        <Link
          //href="#features"
          className="btn mt-4"
          style={{ fontFamily: 'Poppins, sans-serif' }}
          to="features"
          smooth={true}
          duration={500}
        >
          {t('hero.button')}
        </Link>
      </div>
    </header>
  );
};

export default HeroSection;
