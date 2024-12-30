import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faThermometerHalf,
  faKey,
  faLightbulb,
  faMobileAlt,
} from '@fortawesome/free-solid-svg-icons';
import '../../css/domotics/DomoticsPage.css'; // CSS para diseño

const icons = [
  faThermometerHalf,
  faKey,
  faLightbulb,
  faMobileAlt,
];

const IntroDomotics = () => {
  const { t } = useTranslation(); // Traducciones
  const features = t('domoticsPage.intro.features', { returnObjects: true }) || [];

  return (
    <section className="domotics-section animate-fade-in">
      <div className="container text-center">
        <h2 className="mb-4">{t('domoticsPage.intro.title')}</h2>
        <p className="lead mb-5">{t('domoticsPage.intro.description')}</p>

        <div className="row justify-content-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="col-md-4 mb-4 text-center benefit-item animate-fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="icon-container mx-auto mb-3">
                <FontAwesomeIcon icon={icons[index]} size="3x" />
              </div>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroDomotics;
