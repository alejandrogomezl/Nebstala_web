import React, { useEffect, useRef, useState } from 'react';
import '../css/FeaturesSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLightbulb,
  faCalendarAlt,
  faKey,
  faFileInvoiceDollar,
  faLeaf,
  faCubes,
} from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const icons = [
  faLightbulb,
  faCalendarAlt,
  faKey,
  faFileInvoiceDollar,
  faLeaf,
  faCubes,
];

const FeaturesSection = () => {
  const { t } = useTranslation();
  const featuresRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [features, setFeatures] = useState([]); // Estado local para almacenar las características

  // Detectar visibilidad de la sección
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2, // Activa la animación cuando el 20% del elemento es visible
      }
    );

    if (featuresRef.current) observer.observe(featuresRef.current);

    return () => {
      if (featuresRef.current) observer.unobserve(featuresRef.current);
    };
  }, []);

  // Cargar características desde las traducciones
  useEffect(() => {
    const items = t('features.items', { returnObjects: true });
    if (Array.isArray(items)) {
      setFeatures(items);
    } else {
      console.error('Error: Features data is not an array.', items);
    }
  }, [t]);

  return (
    <section id="features" className="features-section py-5" ref={featuresRef}>
      <div className="container">
        {/* Título */}
        <h2 className="text-center mb-5">{t('features.title')}</h2>

        {/* Lista de características */}
        <div className="row justify-content-center">
          {features.map((feature, index) => (
            <div
              className={`col-md-4 mb-4 feature-item text-center ${
                isVisible ? 'visible' : ''
              }`}
              key={index}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="icon-container mx-auto">
                <FontAwesomeIcon icon={icons[index]} size="3x" />
              </div>
              <h4 className="mt-3">{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Botón Saber Más */}
        <div className="text-center mt-5">
          <button
            className="btn btn-primary"
            onClick={() => window.location.href = '/details'}
          >
            {t('features.moreInfo')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
