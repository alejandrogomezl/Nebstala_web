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
                question: "What devices are compatible?",
                answer:
                  "Nebstala is compatible with smart lights, thermostats, locks, and other IoT devices using Zigbee or Tuya standards.",
              },
              {
                question: "How secure is the automation system?",
                answer:
                  "We use encrypted communications and advanced protocols to ensure the security of your data and devices.",
              },
              {
                question: "Can I customize Nebstala for my business?",
                answer:
                  "Yes, Nebstala is modular and can be adapted to your specific needs as your business grows.",
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
            description: "Smart climate control systems provide a revolutionary way to manage air conditioning and heating in modern properties. By integrating intelligent thermostats and sensors for temperature and presence detection, property owners can significantly reduce energy consumption and enhance guest comfort. These systems automatically adjust the temperature based on occupancy, preventing energy waste caused by running air conditioners or heaters when rooms are unoccupied. The use of smart thermostats not only improves energy efficiency but also extends the lifespan of HVAC (Heating, Ventilation, and Air Conditioning) systems. By maintaining optimal settings, these devices reduce wear and tear, minimizing maintenance costs and the need for premature replacements. Additionally, presence sensors detect movements and adjust climate settings in real-time, ensuring rooms are only cooled or heated when needed. This proactive approach not only lowers operational costs but also contributes to a more sustainable and eco-friendly property management solution. Investing in smart climate control technologies is essential for short-term rental properties and hotels looking to modernize their operations. Guests benefit from increased comfort, while property managers enjoy reduced utility bills and simplified climate management.",
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
                question: "¿Qué dispositivos son compatibles?",
                answer:
                  "Nebstala es compatible con luces inteligentes, termostatos, cerraduras y otros dispositivos IoT que utilicen Zigbee o Tuya.",
              },
              {
                question: "¿Qué tan seguro es el sistema de automatización?",
                answer:
                  "Utilizamos comunicaciones cifradas y protocolos avanzados para garantizar la seguridad de tus datos y dispositivos.",
              },
              {
                question: "¿Puedo personalizar Nebstala para mi negocio?",
                answer:
                  "Sí, Nebstala es modular y se puede adaptar a tus necesidades específicas a medida que tu negocio crece.",
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
            description: "Los sistemas de control climático inteligente ofrecen una solución revolucionaria para gestionar el aire acondicionado y la calefacción en propiedades modernas. Al integrar termostatos inteligentes y sensores para detectar temperatura y presencia, los propietarios pueden reducir significativamente el consumo energético y mejorar el confort de los huéspedes. Estos sistemas ajustan automáticamente la temperatura en función de la ocupación, evitando el desperdicio de energía causado por mantener encendidos los aires acondicionados o calefactores cuando las habitaciones están vacías. El uso de termostatos inteligentes no solo mejora la eficiencia energética, sino que también prolonga la vida útil de los sistemas HVAC. Al mantener configuraciones óptimas, estos dispositivos reducen el desgaste, minimizando los costos de mantenimiento y la necesidad de reemplazos prematuros. Además, los sensores de presencia detectan movimientos y ajustan el clima en tiempo real, asegurando que las habitaciones solo se enfríen o calienten cuando sea necesario. Este enfoque proactivo no solo reduce los costos operativos, sino que también contribuye a una gestión de propiedades más sostenible y ecológica.",
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
        }
      }
    },
    fallbackLng: 'en', // Idioma por defecto
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;