import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector) // Detecta el idioma del navegador
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          hero: {
            title: "Automate Your Property Management",
            description: "Discover how Nebstala can transform your business with automation and efficiency.",
            button: "Learn More"
          }
        }
      },
      es: {
        translation: {
          hero: {
            title: "Automatiza la gestión de tus propiedades",
            description: "Descubre cómo Nebstala puede transformar tu negocio con automatización y eficiencia.",
            button: "Saber más"
          }
        }
      }
    },
    fallbackLng: 'en', // Idioma por defecto
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
