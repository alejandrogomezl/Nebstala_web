import React, { useEffect, useRef, useState } from 'react';
import '../css/BenefitsSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faBolt, faSmile } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const icons = [faClock, faBolt, faSmile];

const BenefitsSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  const benefits = t('benefits.items', { returnObjects: true });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } // Activa las animaciones cuando el 30% de la sección es visible
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
        <h2 className="text-center mb-5">{t('benefits.title')}</h2>
        <div className="row justify-content-center">
          {benefits.map((benefit, index) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;