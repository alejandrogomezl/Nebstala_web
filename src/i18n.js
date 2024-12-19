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
          },
          navbar: {
            logo: "Nebstala",
            features: "Features",
            pricing: "Pricing",
            contact: "Contact",
          },
          features: {
            title: "Key Features",
            items: [
              {
                title: "Smart Automation",
                description:
                  "Control lights, climate, and access intelligently to provide comfort and efficiency.",
              },
              {
                title: "Simplified Reservation Management",
                description:
                  "Easily manage bookings with an interactive calendar and clear availability view.",
              },
              {
                title: "Keyless Access",
                description:
                  "Forget physical keys with smart locks that ensure security and convenience.",
              },
              {
                title: "Customizable Invoicing",
                description:
                  "Create invoices tailored to the specific needs of each client.",
              },
              {
                title: "Intelligent Energy Savings",
                description:
                  "Reduce costs with presence sensors and optimized lighting and climate systems.",
              },
              {
                title: "Modular and Scalable System",
                description:
                  "Adapt Nebstala to the needs of your business as it grows.",
              },
            ],
            moreInfo: "Lern more",
          },
          benefits: {
            title: "Key Benefits",
            items: [
              {
                title: "Time Savings",
                description:
                  "Reduce manual booking management and automate key tasks, saving up to 70% of your time.",
              },
              {
                title: "Energy Efficiency",
                description:
                  "Save up to 30% on energy costs with smart sensors and consumption optimization.",
              },
              {
                title: "Enhanced Experience",
                description:
                  "Provide comfort and security to guests with keyless access and advanced automation.",
              },
            ],
          },
        }
      },
      es: {
        translation: {
          hero: {
            title: "Automatiza la gestión de tus propiedades",
            description: "Descubre cómo Nebstala puede transformar tu negocio con automatización y eficiencia.",
            button: "Saber más"
          },
          navbar: {
            logo: "Nebstala",
            features: "Características",
            pricing: "Precios",
            contact: "Contacto",
          },
          features: {
            title: "Características Principales",
            items: [
              {
                title: "Automatización Domótica",
                description:
                  "Controla luces, climatización y accesos de forma inteligente para ofrecer comodidad y eficiencia.",
              },
              {
                title: "Gestión de Reservas Simplificada",
                description:
                  "Administra reservas fácilmente con un calendario interactivo y visualización clara de la disponibilidad.",
              },
              {
                title: "Acceso Sin Llaves",
                description:
                  "Olvídate de las llaves físicas con cerraduras inteligentes que garantizan seguridad y comodidad.",
              },
              {
                title: "Facturación Personalizada",
                description:
                  "Crea facturas adaptadas a las necesidades específicas de cada cliente.",
              },
              {
                title: "Ahorro Energético Inteligente",
                description:
                  "Reduce costos con sensores de presencia y sistemas optimizados de iluminación y climatización.",
              },
              {
                title: "Sistema Modular y Escalable",
                description:
                  "Adapta Nebstala a las necesidades de tu negocio a medida que crece.",
              },
            ],
            moreInfo: "Saber más",
          },
          benefits: {
            title: "Beneficios Clave",
            items: [
              {
                title: "Ahorro de Tiempo",
                description:
                  "Reduce la gestión manual de reservas y automatiza tareas clave, ahorrando hasta un 70% de tiempo.",
              },
              {
                title: "Eficiencia Energética",
                description:
                  "Ahorra hasta un 30% en costos de energía con sensores inteligentes y optimización del consumo.",
              },
              {
                title: "Experiencia Mejorada",
                description:
                  "Proporciona comodidad y seguridad a los huéspedes con acceso sin llaves y automatización avanzada.",
              },
            ],
          },
        }
      }
    },
    fallbackLng: 'en', // Idioma por defecto
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
