import React, { useEffect, useRef, useState } from 'react';
import '../css/FaqSection.css';
import { useTranslation } from 'react-i18next';

const FAQSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  const faqs = t('faq.items', { returnObjects: true });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } // Se activa cuando el 20% de la sección es visible
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
    <section id="faq" className="faq-section py-5" ref={sectionRef}>
      <div className="container">
        <h2 className="text-center mb-5">{t('faq.title')}</h2>
        <div className="accordion">
          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${isVisible ? 'visible' : ''}`}
              key={index}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <button
                className="faq-question"
                onClick={(e) => {
                  e.target.nextElementSibling.classList.toggle('open');
                }}
              >
                {faq.question}
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
