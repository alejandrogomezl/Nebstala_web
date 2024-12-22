import React, { useEffect, useRef, useState } from 'react';
import '../css/DomoticsBenefits.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faLock, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const icons = [faBolt, faLock, faMobileAlt];

const DomoticsBenefits = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const benefits = t('domotics.benefits', { returnObjects: true });

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
    <section id="domotics-benefits" className="domotics-section py-5" ref={sectionRef}>
      <div className="container">
        <h2 className="text-center mb-4">{t('domotics.title')}</h2>
        <p className="text-center mb-5">{t('domotics.description')}</p>

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

        <div className="text-center mt-4">
          <Link to="/details" className="btn btn-primary">
            {t('domotics.button')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DomoticsBenefits;
