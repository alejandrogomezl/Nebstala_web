import React, { useEffect, useRef, useState } from 'react';
import '../css/DomoticsBenefits.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faLock, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom'; // Navegación

const icons = [faBolt, faLock, faMobileAlt];

const DomoticsBenefits = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate(); // Para redirigir

  // Obtener los beneficios desde i18n
  const benefits = t('domotics.benefits', { returnObjects: true }) || [];

  // Observador para animaciones al hacer scroll
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

  // Navegación a /details con desplazamiento al inicio
  const handleNavigation = () => {
    navigate('/details'); // Redirige a la página
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Desplazamiento al inicio
    }, 100); // Espera breve para garantizar la carga
  };

  return (
    <section id="domotics-benefits" className="domotics-section py-5" ref={sectionRef}>
      <div className="container">
        {/* Título y Descripción */}
        <h2 className="text-center mb-4">{t('domotics.title')}</h2>
        <p className="text-center mb-5">{t('domotics.description')}</p>

        {/* Lista de Beneficios */}
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
            <p className="text-center">{t('domotics.noItems')}</p>
          )}
        </div>

        {/* Botón de Redirección */}
        <div className="text-center mt-4">
          <button className="btn btn-primary" onClick={handleNavigation}>
            {t('domotics.button')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default DomoticsBenefits;
