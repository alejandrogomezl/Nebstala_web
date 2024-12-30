import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../css/domotics/Header.css'; // Para estilos adicionales

const Header = () => {
  const { t } = useTranslation(); // Traducciones

  return (
    <header className="hero-section d-flex align-items-center text-center text-white">
      <div className="container">
        {/* Título */}
        <h1 className="display-4 fw-bold" style={{ fontFamily: 'Lora, serif' }}>
          {t('domotics.title')}
        </h1>

        {/* Descripción */}
        <p className="lead mt-3" style={{ fontFamily: 'Roboto, sans-serif' }}>
          {t('domotics.description')}
        </p>
      </div>
    </header>
  );
};

export default Header;
