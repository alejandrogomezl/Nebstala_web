import React, { useEffect, useRef, useState } from 'react';
import '../../css/domotics/SystemControl.css';
import { useTranslation } from 'react-i18next';

const SystemControl = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Definir rutas de imágenes al principio
  const images = [
    '',
    '',
    '/images/Alexa.jpg',
    '/images/Dashboard.jpg',
  ];

  // Estado para verificar si la imagen se ha cargado correctamente
  const [imagesLoaded, setImagesLoaded] = useState(
    Array(images.length).fill(true)
  );

  // Obtener datos de traducción
  const controlData = t('systemControl', { returnObjects: true }) || {};
  const title = controlData.title || '';
  const description = controlData.description || '';
  const features = controlData.features || [];

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
    <section id="system-control" className="system-control-section py-5" ref={sectionRef}>
      <div className="container">
        {/* Título y descripción - Ancho completo */}
        <div className="text-center mb-5">
          <h2 className="mb-4">{title}</h2>
          <p className="description-text">{description}</p>
        </div>

        {/* Características Divididas */}
        <div className="row justify-content-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`col-lg-6 d-flex align-items-center justify-content-center mb-4 feature-itemdom ${
                isVisible ? 'visible' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Imagen o marcador de posición */}
              <div className="col-md-6 text-center me-4">
                {imagesLoaded[index] ? (
                  <img
                    src={images[index]} // Usar la imagen predefinida
                    alt={feature.title}
                    className="img-fluid control-image"
                    onError={() => {
                      const newImagesLoaded = [...imagesLoaded];
                      newImagesLoaded[index] = false;
                      setImagesLoaded(newImagesLoaded);
                    }}
                  />
                ) : (
                  <div className="placeholder-image"></div>
                )}
              </div>

              {/* Texto */}
              <div className="col-md-6 text-center">
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemControl;
