import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../css/ContactForm.css';
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
  const { t } = useTranslation(); // Traducción
  const sectionRef = useRef(null); // Referencia para animación
  const [isVisible, setIsVisible] = useState(false); // Estado para animación
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  // Detectar visibilidad para animación
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Manejar cambios en los campos
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Enviar formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'nebstala', // Reemplazar con el ID del servicio
        'template_oxd0ayi', // Reemplazar con el ID de la plantilla
        formData,
        'iJzKn-2CHaS-jh08S' // Reemplazar con la clave pública
      )
      .then(
        () => {
          setIsSent(true);
          setFormData({ name: '', email: '', message: '' });
        },
        () => {
          setError(t('contact.error'));
        }
      );
  };

  return (
    <section
      id="contact"
      className={`contact-section py-5 ${isVisible ? 'visible' : ''}`}
      ref={sectionRef}
    >
      <div className="container">
        <h2 className="text-center mb-4">{t('contact.title')}</h2>
        <p className="text-center mb-5">{t('contact.description')}</p>

        {isSent && (
          <p className="alert alert-success text-center">
            {t('contact.success')}
          </p>
        )}
        {error && (
          <p className="alert alert-danger text-center">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="contact-form mx-auto">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              {t('contact.name')}
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              {t('contact.email')}
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              {t('contact.message')}
            </label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              {t('contact.button')}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
