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

// Íconos para cada característica
const icons = [
  faLightbulb,
  faCalendarAlt,
  faKey,
  faFileInvoiceDollar,
  faLeaf,
  faCubes,
];

const FeaturesSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  // Datos de traducción
  const featuresData = t('features', { returnObjects: true }) || {};
  const title = featuresData.title || '';
  const features = featuresData.items || []; // Garantiza que sea un array

  // Animación al hacer scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="features" className="features-section py-5" ref={sectionRef}>
      <div className="container">
        {/* Título */}
        <h2 className="text-center mb-5">{title}</h2>

        {/* Características en 2 columnas x 3 filas */}
        <div className="row justify-content-center">
          {Array.isArray(features) && features.length > 0 ? (
            features.map((feature, index) => (
              <div
                className={`col-md-6 mb-4 text-center feature-item ${
                  isVisible ? 'visible' : ''
                }`}
                key={index}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="icon-container mx-auto mb-3">
                  <FontAwesomeIcon icon={icons[index]} size="3x" />
                </div>
                <h4 className="mt-3">{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            ))
          ) : (
            <p className="text-center">
              {t('features.noItems', 'No features available.')}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
