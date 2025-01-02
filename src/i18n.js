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
            title: "Domotics and Management",
            description: "Efficient technology to transform your property.",
            button: "Learn More"
          },
          navbar: {
            logo: "Nebstala",
            features: "Features",
            pricing: "Pricing",
            contact: "Contact",
            domotics: "Domotics",
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
          faq: {
            title: "Frequently Asked Questions",
            items: [
              {
                question: "Is Nebstala compatible with other property management systems (PMS)?",
                answer:
                  "Yes, we are working to add compatibility with some of the most popular property management systems, enabling seamless integration and data synchronization.",
              },
              {
                question: "What smart home devices are compatible with Nebstala?",
                answer:
                  "Nebstala is compatible with smart lights, thermostats, motion sensors, smart locks, and other IoT devices that use Zigbee or Tuya. We are continuously expanding compatibility with more devices and popular brands.",
              },
              {
                question: "Can Nebstala be used with smart locks from other manufacturers?",
                answer:
                  "Yes, Nebstala is currently compatible with smart locks from well-known brands. We are also working to add support for more models in the future.",
              },
              {
                question: "How does Nebstala improve energy efficiency in properties?",
                answer:
                  "Nebstala uses motion and temperature sensors to optimize the use of heating, cooling, and lighting systems by turning them off when no presence is detected and automatically setting ideal conditions for each stay.",
              },
              {
                question: "Does the system require an internet connection to work?",
                answer:
                  "The basic version of Nebstala requires a stable internet connection for advanced features like automation and sensor usage. However, we also offer a premium plan that includes a dedicated controller (powered by Home Assistant) to manage these actions locally. This enhances fault tolerance and privacy by processing data locally. Additionally, the premium plan supports advanced features such as image processing and AI-driven automation.",
              },
            ],
          },
          domotics: {
            title: "Benefits of Home Automation",
            description:
              "Discover how Nebstala's home automation system can save energy, improve security, and simplify property management.",
            benefits: [
              {
                title: "Energy Savings",
                description:
                  "Optimize energy use with smart sensors and presence detectors, reducing costs by up to 30%.",
              },
              {
                title: "Security and Access",
                description:
                  "Keyless entry and smart locks ensure safety and convenience for property managers and guests.",
              },
              {
                title: "Remote Management",
                description:
                  "Control lights, climate, and devices remotely, making property management easier and more efficient.",
              },
            ],
            button: "Learn More",
          },
          domoticsPage: {
            title: "Smart Home Automation",
            description: "Discover how Nebstala's automation system can improve efficiency, security, and convenience.",
            intro: {
              title: "How Domotics Benefits Short-Term Rentals",
              description: "Smart home automation systems enhance comfort, security, and energy efficiency, providing a modern and seamless experience for guests. From smart locks to automated climate control, domotics streamline property management and reduce operational costs.",
              features: [
                {
                  title: "Automated Climate Control",
                  description: "Keep guests comfortable while optimizing energy consumption with smart thermostats."
                },
                {
                  title: "Keyless Access",
                  description: "Simplify check-ins and enhance security with smart locks and remote access."
                },
                {
                  title: "Energy Efficiency",
                  description: "Lower energy costs with automated lighting, sensors, and climate control systems."
                },
                {
                  title: "Remote Monitoring",
                  description: "Control and monitor your property remotely for improved management and guest experience."
                }
              ]
            }
          },
          climateControl: {
            title: "Smart Climate Control for Energy Efficiency",
            description: "Smart climate control systems optimize energy consumption and enhance guest comfort through intelligent thermostats and temperature and presence sensors. These devices automatically adjust temperature based on occupancy, preventing energy waste and extending HVAC system lifespan. Additionally, they enable real-time climate management, reducing operating costs and promoting more sustainable and eco-friendly property management.",
            features: [
              {
                title: "Intelligent Temperature Control",
                description: "Automatically adjusts temperature settings based on occupancy to avoid unnecessary energy consumption."
              },
              {
                title: "Energy Efficiency Optimization",
                description: "Reduces utility costs by up to 30% with smart sensors and automated settings."
              },
              {
                title: "Extended Device Lifespan",
                description: "Prevents overuse and overheating, protecting HVAC systems and minimizing maintenance needs."
              }
            ]
          },
          smartLocks: {
            title: "Smart Locks and Secure Access",
            description: "Enhance security and convenience with smart locks that use unique codes for each guest. Smart locks eliminate the need for physical keys, streamline check-ins, and improve property management efficiency.",
            features: [
              {
                title: "Unique Guest Codes",
                description: "Generate secure, time-limited access codes for each guest to simplify check-ins and check-outs."
              },
              {
                title: "Keyless Entry",
                description: "Remove the hassle of lost keys with keyless access using smart locks and mobile apps."
              },
              {
                title: "Enhanced Security",
                description: "Monitor and manage access logs remotely, ensuring greater security and control over your property."
              }
            ]
          },
          userExperience: {
            title: "Enhancing Guest Experience with Smart Automation",
            description: "Transform your guests' experience by leveraging smart sensors for automatic lighting and climate control. Allow users to prepare their accommodations before arrival, ensuring maximum comfort and convenience.",
            features: [
              {
                title: "Automatic Lighting Control",
                description: "Presence sensors turn lights on and off automatically, providing convenience and energy savings."
              },
              {
                title: "Pre-Arrival Climate Settings",
                description: "Enable guests to activate air conditioning or heating minutes before arrival for optimal comfort."
              },
              {
                title: "Feel at Home",
                description: "Create an environment where guests feel as comfortable as, or even better than, at home."
              }
            ]
          },
          securitySystem: {
            title: "Secure and Encrypted Smart Systems",
            description: "Ensure maximum security with encrypted wireless connections and unique guest credentials. Monitor vacant properties for unexpected movements and receive real-time notifications for enhanced control.",
            features: [
              {
                title: "Encrypted Connections",
                description: "Protect data and communications with advanced encryption technologies for wireless devices."
              },
              {
                title: "Motion Monitoring",
                description: "Detect unexpected movements in vacant properties and receive immediate notifications."
              },
              {
                title: "Unique Guest Credentials",
                description: "Provide guests with secure, time-limited credentials to control devices and access their accommodations."
              }
            ]
          },
          systemControl: {
            title: "Complete Control of Smart Automation",
            description: "Manage your property with ease using our web or mobile app for full administrative control. Guests can control devices during their stay, use voice assistants, and access smart dashboards for a seamless experience.",
            features: [
              {
                title: "Web and App Control",
                description: "Administrators can monitor and manage all devices remotely from a dedicated app or web portal."
              },
              {
                title: "Guest Device Control",
                description: "Guests can control devices like lights, climate, and locks from any device during their stay."
              },
              {
                title: "Voice Assistants",
                description: "Integrate with voice assistants for hands-free control and enhanced convenience."
              },
              {
                title: "Smart Dashboards",
                description: "Monitor and manage device performance in real-time using interactive dashboards."
              }
            ]
          },
          contact: {
            title: "Contact Us",
            description: "Fill out the form to get in touch with us.",
            name: "Name",
            email: "Email Address",
            message: "Message",
            button: "Send",
            success: "Message sent successfully!",
            error: "There was an error sending the form. Please try again."
          },
        }
      },
      es: {
        translation: {
          hero: {
            title: "Domótica y Gestión",
            description: "Tecnología eficiente para transformar tu propiedad.",
            button: "Saber más"
          },
          navbar: {
            logo: "Nebstala",
            features: "Características",
            pricing: "Precios",
            contact: "Contacto",
            domotics: "Domótica",
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
          faq: {
            title: "Preguntas Frecuentes",
            items: [
              {
                question: "¿Nebstala es compatible con otros sistemas de gestión de propiedades (PMS)?",
                answer:
                  "Sí, estamos trabajando para añadir compatibilidad con otros de los sistemas de gestión de propiedades más populares del mercado, facilitando la integración y sincronización de datos.",
              },
              {
                question: "¿Qué dispositivos domóticos son compatibles con Nebstala?",
                answer:
                  "Nebstala es compatible con luces inteligentes, termostatos, sensores de presencia, cerraduras inteligentes y otros dispositivos IoT que utilicen Zigbee o Tuya. Seguimos ampliando compatibilidad con más dispositivos y marcas populares.",
              },
              {
                question: "¿Se pueden utilizar cerraduras inteligentes de otros fabricantes con Nebstala?",
                answer:
                  "Sí, actualmente Nebstala es compatible con cerraduras inteligentes de marcas reconocidas. Además, seguimos trabajando para añadir soporte a más modelos en el futuro.",
              },
              {
                question: "¿Cómo mejora Nebstala la eficiencia energética en los alojamientos?",
                answer:
                  "Nebstala utiliza sensores de presencia y temperatura para optimizar el uso de climatización e iluminación, apagando los dispositivos cuando no se detecta presencia y configurando automáticamente las condiciones ideales para cada estancia.",
              },
              {
                question: "¿Se necesita conexión a internet para que el sistema funcione?",
                answer:
                  "La versión básica de Nebstala requiere una conexión a internet estable para funciones avanzadas como automatizaciones o el uso de sensores. Sin embargo, también ofrecemos un plan superior que incluye un controlador dedicado (basado en Home Assistant) capaz de gestionar estas acciones de manera local. Esto mejora la tolerancia a fallos y la privacidad al procesar los datos en local. Además, el plan premium añade funcionalidades avanzadas como el procesamiento de imágenes y automatizaciones impulsadas por inteligencia artificial.",
              },
            ],
          },
          domotics: {
            title: "Beneficios del Sistema Domótico",
            description:
              "Descubre cómo el sistema domótico de Nebstala puede ahorrar energía, mejorar la seguridad y simplificar la gestión de propiedades.",
            benefits: [
              {
                title: "Ahorro Energético",
                description:
                  "Optimiza el uso de energía con sensores inteligentes y detectores de presencia, reduciendo costos hasta un 30%.",
              },
              {
                title: "Seguridad y Acceso",
                description:
                  "Entrada sin llaves y cerraduras inteligentes garantizan seguridad y comodidad para gestores y huéspedes.",
              },
              {
                title: "Gestión Remota",
                description:
                  "Controla luces, climatización y dispositivos de forma remota, facilitando la gestión de propiedades.",
              },
            ],
            button: "Saber Más",
          },
          domoticsPage: {
            title: "Automatización Domótica",
            description: "Descubre cómo el sistema de automatización de Nebstala puede mejorar la eficiencia, seguridad y comodidad.",
            intro: {
              title: "Cómo Ayuda la Domótica en los Alojamientos Temporales",
              description: "Los sistemas de automatización inteligente mejoran la comodidad, seguridad y eficiencia energética, proporcionando una experiencia moderna y fluida para los huéspedes. Desde cerraduras inteligentes hasta control climático automatizado, la domótica simplifica la gestión y reduce los costos operativos.",
              features: [
                {
                  title: "Control Climático Automatizado",
                  description: "Mantén a los huéspedes cómodos mientras optimizas el consumo energético con termostatos inteligentes."
                },
                {
                  title: "Acceso Sin Llaves",
                  description: "Simplifica los registros y mejora la seguridad con cerraduras inteligentes y acceso remoto."
                },
                {
                  title: "Eficiencia Energética",
                  description: "Reduce los costos energéticos con iluminación automatizada, sensores y sistemas de control climático."
                },
                {
                  title: "Monitoreo Remoto",
                  description: "Controla y monitorea tu propiedad de forma remota para mejorar la gestión y la experiencia del huésped."
                }
              ]
            }
          },
          climateControl: {
            title: "Control Climático Inteligente para Eficiencia Energética",
            description: "Los sistemas de control climático inteligente optimizan el consumo energético y mejoran el confort de los huéspedes mediante termostatos inteligentes y sensores de temperatura y presencia. Estos dispositivos ajustan automáticamente la temperatura según la ocupación, evitando el desperdicio de energía y prolongando la vida útil de los sistemas HVAC. Además, permiten gestionar el clima en tiempo real, reduciendo costos operativos y promoviendo una gestión más sostenible y ecológica.",
            features: [
              {
                title: "Control Inteligente de Temperatura",
                description: "Ajusta automáticamente la temperatura según la ocupación para evitar el consumo innecesario de energía."
              },
              {
                title: "Optimización de la Eficiencia Energética",
                description: "Reduce los costos de energía hasta un 30% con sensores inteligentes y configuraciones automatizadas."
              },
              {
                title: "Mayor Durabilidad de los Dispositivos",
                description: "Evita el uso excesivo y el sobrecalentamiento, protegiendo los sistemas HVAC y minimizando las necesidades de mantenimiento."
              }
            ]
          },
          smartLocks: {
            title: "Cerraduras Inteligentes y Acceso Seguro",
            description: "Mejora la seguridad y la comodidad con cerraduras inteligentes que utilizan códigos únicos para cada huésped. Estas cerraduras eliminan la necesidad de llaves físicas, simplifican el proceso de check-in y check-out, y optimizan la gestión de propiedades.",
            features: [
              {
                title: "Códigos Únicos para Huéspedes",
                description: "Genera códigos seguros y con tiempo limitado para cada huésped, simplificando los procesos de entrada y salida."
              },
              {
                title: "Entrada sin Llaves",
                description: "Evita problemas con llaves perdidas gracias al acceso sin llaves mediante cerraduras inteligentes y aplicaciones móviles."
              },
              {
                title: "Seguridad Mejorada",
                description: "Monitorea y gestiona registros de acceso de forma remota, garantizando mayor seguridad y control sobre su propiedad."
              }
            ]
          },
          userExperience: {
            title: "Mejora de la Experiencia del Huésped con Automatización Inteligente",
            description: "Transforma la experiencia de tus huéspedes utilizando sensores inteligentes para el control automático de iluminación y climatización. Permite que los usuarios preparen su alojamiento antes de llegar, asegurando el máximo confort y comodidad.",
            features: [
              {
                title: "Control Automático de Iluminación",
                description: "Los sensores de presencia encienden y apagan las luces automáticamente, proporcionando comodidad y ahorro energético."
              },
              {
                title: "Configuración Climática Antes de Llegar",
                description: "Permite a los huéspedes activar el aire acondicionado o la calefacción minutos antes de su llegada para garantizar el confort óptimo."
              },
              {
                title: "Como en Casa",
                description: "Crea un entorno donde los huéspedes se sientan tan cómodos como en casa, o incluso mejor."
              }
            ]
          },
          securitySystem: {
            title: "Sistemas Inteligentes Seguros y Cifrados",
            description: "Garantiza la máxima seguridad con conexiones inalámbricas cifradas y credenciales únicas para los huéspedes. Supervisa propiedades vacías en busca de movimientos inesperados y recibe notificaciones en tiempo real para un control mejorado.",
            features: [
              {
                title: "Conexiones Cifradas",
                description: "Protege los datos y las comunicaciones con tecnologías avanzadas de cifrado para dispositivos inalámbricos."
              },
              {
                title: "Monitoreo de Movimientos",
                description: "Detecta movimientos inesperados en propiedades vacías y recibe notificaciones inmediatas."
              },
              {
                title: "Credenciales Únicas para Huéspedes",
                description: "Proporciona a los huéspedes credenciales seguras y limitadas en el tiempo para controlar los dispositivos y acceder a sus alojamientos."
              }
            ]
          },
          systemControl: {
            title: "Control Total del Sistema Domótico",
            description: "Gestiona tu propiedad de manera eficiente con nuestra aplicación web o móvil para un control administrativo completo. Los huéspedes pueden controlar los dispositivos durante su estancia, utilizar asistentes de voz y acceder a dashboards inteligentes para disfrutar de una experiencia sin complicaciones.",
            features: [
              {
                title: "Control desde Web y App",
                description: "Los administradores pueden monitorear y gestionar todos los dispositivos de forma remota a través de una aplicación dedicada o un portal web."
              },
              {
                title: "Control para Huéspedes",
                description: "Los huéspedes pueden controlar dispositivos como luces, climatización y cerraduras desde cualquier dispositivo durante su estancia."
              },
              {
                title: "Asistentes de Voz",
                description: "Integra asistentes de voz para un control manos libres y una experiencia más conveniente."
              },
              {
                title: "Dashboards Inteligentes",
                description: "Monitorea y gestiona el rendimiento de los dispositivos en tiempo real mediante dashboards interactivos."
              }
            ]
          },
          contact: {
            title: "Contáctanos",
            description: "Completa el formulario para ponerte en contacto con nosotros.",
            name: "Nombre",
            email: "Correo Electrónico",
            message: "Mensaje",
            button: "Enviar",
            success: "¡Mensaje enviado con éxito!",
            error: "Hubo un error al enviar el formulario. Inténtalo de nuevo."
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