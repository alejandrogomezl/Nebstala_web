import React, { useEffect, useRef, useState } from 'react';
import '../../css/domotics/SecuritySystem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faShieldAlt, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

// Íconos para las características
const icons = [faLock, faShieldAlt, faMobileAlt];

const SecuritySystem = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(true); // Para comprobar si la imagen carga correctamente

  // Obtener datos de traducción
  const securityData = t('securitySystem', { returnObjects: true }) || {};
  const title = securityData.title || '';
  const description = securityData.description || '';
  const features = securityData.features || [];

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

  return (
    <section id="security-system" className="security-section py-5" ref={sectionRef}>
      <div className="container">
        {/* Título y Texto Largo - Ancho Completo */}
        <div className="text-center mb-5">
          <h2 className="mb-4">{title}</h2>
          <p className="description-text">{description}</p>
        </div>

        {/* Características e Imagen - Mitad y Mitad */}
        <div className="row align-items-center">
          {/* Imagen a la izquierda */}
          <div className="col-lg-6 text-center">
            {imageLoaded ? (
              <img
                src="/images/security-system.jpg"
                alt="Security System"
                className="img-fluid security-image"
                onError={() => setImageLoaded(false)} // Si hay un error, desactiva la imagen
              />
            ) : (
              <div className="placeholder-image"></div> // Marcador de posición negro
            )}
          </div>

          {/* Características a la derecha */}
          <div className="col-lg-6">
            <div className="features-list">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`feature-item mb-4 d-flex ${
                    isVisible ? 'visible' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="icon-container me-3">
                    <FontAwesomeIcon icon={icons[index]} size="2x" />
                  </div>
                  <div>
                    <h4 className="mt-1">{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySystem;
