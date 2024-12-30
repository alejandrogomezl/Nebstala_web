import React, { useEffect, useRef, useState } from 'react';
import '../css/BenefitsSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faBolt, faSmile } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

// Íconos para cada beneficio
const icons = [faClock, faBolt, faSmile];

const BenefitsSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  // Obtener los datos de beneficios desde las traducciones
  const benefitsData = t('benefits', { returnObjects: true }) || {};
  const title = benefitsData.title || '';
  const benefits = benefitsData.items || []; // Garantiza que sea un array

  // Animación al hacer scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } // 30% visible activa la animación
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
    <section
      id="benefits"
      className="benefits-section py-5"
      ref={sectionRef}
    >
      <div className="container">
        <h2 className="text-center mb-5">{title}</h2>
        <div className="row justify-content-center">
          {Array.isArray(benefits) && benefits.length > 0 ? (
            benefits.map((benefit, index) => (
              <div
                className={`col-md-4 mb-4 text-center benefit-item ${
                  isVisible ? 'visible' : ''
                }`}
                key={index}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="icon-container mx-auto">
                  <FontAwesomeIcon icon={icons[index]} size="3x" />
                </div>
                <h4 className="mt-3">{benefit.title}</h4>
                <p>{benefit.description}</p>
              </div>
            ))
          ) : (
            <p className="text-center">
              {t('benefits.noItems', 'No benefits available.')}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
