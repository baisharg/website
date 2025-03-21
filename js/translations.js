// Translations for the entire website
const translations = {
  en: {
    // Navigation
    nav: {
      about: 'About',
      activities: 'Activities',
      resources: 'Resources',
      contact: 'Contact',
      joinUs: 'Join Us'
    },

    // Home page
    home: {
      hero: {
        title: 'Ensuring AI Benefits Humanity',
        subtitle:
          "BAISH's student-led initiative exploring safe and beneficial AI development",
        cta: 'Get Involved'
      },
      intro: {
        title: 'Why AI Safety Matters',
        paragraph1:
          'Advanced AI systems are becoming increasingly capable, with the potential to transform society in profound ways. The field of AI Safety focuses on ensuring these systems are aligned with human values and beneficial to humanity.',
        paragraph2:
          'At the BAISH - Buenos Aires AI Safety Hub, we bring together students from Computer Science, Physics, and Mathematics to understand and address these challenges through research, education, and community.',
        point1: 'Understanding AI capabilities and risks',
        point2: 'Developing alignment techniques',
        point3: 'Conducting original research',
        point4: 'Building a community of researchers',
        learnMore: 'Learn more about AI Safety →'
      },
      upcomingEvent: {
        title: 'Weekly Discussion Group: Interpretability Methods',
        time: '18:00 - 19:30',
        location: 'Pabellon 0+inf, Room 1603, Ciudad Universitaria',
        description:
          'Join us for an interactive discussion on recent advances in neural network interpretability methods and their implications for AI alignment.',
        rsvp: 'RSVP Now'
      },
      activities: {
        title: 'Our Activities',
        card1: {
          title: 'AGI Safety Fundamentals Cohort',
          description:
            'An 8-week guided course covering the essential concepts in AI alignment and safety.',
          status: 'Currently Active',
          link: 'Learn More →'
        },
        card2: {
          title: 'Weekly Discussion Group',
          description:
            'Weekly meetings to discuss recent papers, concepts, and developments in AI safety.',
          status: 'Every Tuesday @ 18:00',
          link: 'Learn More →'
        },
        card3: {
          title: 'Paper Reading Club',
          description:
            'Deep dives into foundational and recent papers in AI safety research.',
          status: 'Every Friday @ 17:00',
          link: 'Learn More →'
        },
        card4: {
          title: 'Mech Interp Course',
          description:
            'Intensive 1-month course on mechanistic interpretability methods.',
          status: 'Starts June 2025',
          link: 'Learn More →'
        }
      },
      getInvolved: {
        title: 'Get Involved',
        mailingList: {
          title: 'Join our Mailing List',
          description:
            'Stay updated with our activities, events, and opportunities.'
        },
        telegram: {
          title: 'Join our Telegram Community',
          description: 'Connect with fellow students interested in AI safety.',
          button: 'Join Telegram Group'
        }
      }
    },

    // About page
    about: {
      pageHeader: {
        breadcrumb: 'Home / About AI Safety',
        title: 'Understanding AI Safety'
      },
      coreConcepts: {
        whatIs: {
          title: 'What is AI Safety?',
          content:
            'AI Safety is a research field focused on ensuring that advanced artificial intelligence systems remain beneficial, aligned with human values, and under human control as they become more capable. It encompasses technical research areas like alignment, interpretability, and robustness, as well as governance considerations about how AI systems should be developed and deployed.'
        },
        whyMatters: {
          title: 'Why It Matters',
          content:
            "As AI systems become more powerful and autonomous, they may develop capabilities that could lead to unintended consequences if not properly designed and controlled. The stakes are high: advanced AI could help solve humanity's greatest challenges, but also poses significant risks if developed without adequate safety measures. The field aims to maximize the benefits while minimizing potential harms."
        },
        challenges: {
          title: 'Key Risks & Challenges',
          alignment: {
            title: 'Alignment Problem',
            content:
              'Ensuring AI systems pursue goals aligned with human values and intentions, even as they become more capable.'
          },
          interpretability: {
            title: 'Interpretability',
            content:
              'Developing techniques to understand how AI systems make decisions and represent knowledge.'
          },
          robustness: {
            title: 'Robustness',
            content:
              'Creating systems that behave safely even when deployed in new environments or facing unexpected situations.'
          },
          powerSeeking: {
            title: 'Power-seeking Behavior',
            content:
              'Preventing AI systems from developing instrumental goals that conflict with human welfare.'
          },
          coordination: {
            title: 'Coordination Challenges',
            content:
              'Ensuring that safety standards are maintained across all major AI development efforts globally.'
          }
        }
      },
      externalResources: {
        title: 'Learn More About AI Safety',
        cards: {
          alignmentForum: {
            title: 'Alignment Forum',
            description:
              'A forum dedicated to technical research in AI alignment, with papers and discussions from leading researchers.',
            difficulty: 'Technical',
            cta: 'Visit'
          },
          lessWrong: {
            title: 'LessWrong',
            description:
              'A community blog focused on human rationality and the implications of artificial intelligence.',
            difficulty: 'Intermediate',
            cta: 'Visit'
          },
          eightyThousandHours: {
            title: '80,000 Hours',
            description:
              "Career guidance for working on the world's most pressing problems, including AI safety.",
            difficulty: 'Introductory',
            cta: 'Visit'
          },
          stampy: {
            title: "Stampy's Wiki",
            description:
              'A collaborative wiki providing accessible explanations of AI alignment concepts.',
            difficulty: 'Introductory',
            cta: 'Visit'
          }
        }
      },
      ourApproach: {
        title: 'Our Approach',
        focusAreas: {
          title: 'Focus Areas',
          intro:
            'At BAISH - Buenos Aires AI Safety Hub, we focus on several key areas within AI safety research:',
          areas: [
            'Mechanistic interpretability of neural networks',
            'Alignment techniques for large language models',
            'Robust training methodologies',
            'Value learning and preference inference'
          ]
        },
        contributions: {
          title: 'Our Contribution',
          intro: 'We contribute to the field through:',
          items: [
            'Supporting student research projects',
            'Developing educational resources in Spanish',
            'Building a regional community of AI safety researchers',
            'Organizing workshops and training programs',
            'Mentoring students interested in AI safety careers'
          ]
        }
      },
      team: {
        title: 'Core Team',
        members: {
          eitan: {
            name: 'Eitan Sprejer',
            title: 'Co-founding Director',
            bio: 'Physics student with a passion for AI safety and alignment.'
          }
        }
      }
    },

    // Activities page
    activities: {
      // Add translations for activities page
    },

    // Resources page
    resources: {
      // Add translations for resources page
    },

    // Contact page
    contact: {
      // Add translations for contact page
    },

    // Common elements
    common: {
      learnMore: 'Learn More',
      readMore: 'Read More',
      upcoming: 'Upcoming',
      active: 'Active',
      completed: 'Completed'
    }
  },

  es: {
    // Navigation
    nav: {
      about: 'Quiénes Somos',
      activities: 'Actividades',
      resources: 'Recursos',
      contact: 'Contacto',
      joinUs: 'Sumate'
    },

    // Home page
    home: {
      hero: {
        title: 'Asegurando que la IA Beneficie a la Humanidad',
        subtitle:
          'Iniciativa estudiantil de BAISH explorando el desarrollo seguro y beneficioso de la IA',
        cta: 'Sumate'
      },
      intro: {
        title: '¿Por qué es Importante la Seguridad de la IA?',
        paragraph1:
          'Los sistemas de IA avanzados son cada vez más capaces, con el potencial de transformar la sociedad de manera profunda. El campo de la Seguridad de la IA se enfoca en garantizar que estos sistemas estén alineados con los valores humanos y sean beneficiosos para la humanidad.',
        paragraph2:
          'En BAISH - Buenos Aires AI Safety Hub, reunimos a estudiantes de Ciencias de la Computación, Física y Matemáticas para entender y abordar estos desafíos a través de la investigación, la educación y la comunidad.',
        point1: 'Entendiendo las capacidades y riesgos de la IA',
        point2: 'Desarrollando técnicas de alineamiento',
        point3: 'Realizando investigación original',
        point4: 'Construyendo una comunidad de investigadores',
        learnMore: 'Más sobre Seguridad en IA →'
      },
      upcomingEvent: {
        title: 'Grupo de Discusión Semanal: Métodos de Interpretabilidad',
        time: '18:00 - 19:30',
        location: 'Pabellón 0+inf, Aula 1603, Ciudad Universitaria',
        description:
          'Sumate a una discusión interactiva sobre avances recientes en métodos de interpretabilidad de redes neuronales y sus implicaciones para el alineamiento de la IA.',
        rsvp: 'Anotate Ahora'
      },
      activities: {
        title: 'Nuestras Actividades',
        card1: {
          title: 'Cohorte de Fundamentos de Seguridad en AGI',
          description:
            'Un curso guiado de 8 semanas cubriendo los conceptos esenciales en alineamiento y seguridad de IA.',
          status: 'Actualmente Activo',
          link: 'Ver Más →'
        },
        card2: {
          title: 'Grupo de Discusión Semanal',
          description:
            'Reuniones semanales para discutir papers recientes, conceptos y avances en seguridad de IA.',
          status: 'Cada Martes @ 18:00',
          link: 'Ver Más →'
        },
        card3: {
          title: 'Club de Lectura de Papers',
          description:
            'Análisis profundos de papers fundamentales y recientes en investigación de seguridad de IA.',
          status: 'Cada Viernes @ 17:00',
          link: 'Ver Más →'
        },
        card4: {
          title: 'Curso de Interpretabilidad Mecánica',
          description:
            'Curso intensivo de 1 mes sobre métodos de interpretabilidad mecánica.',
          status: 'Comienza en Junio 2025',
          link: 'Ver Más →'
        }
      },
      getInvolved: {
        title: 'Sumate',
        mailingList: {
          title: 'Suscribite a Nuestra Lista de Correo',
          description:
            'Mantenete al día con nuestras actividades, eventos y oportunidades.'
        },
        telegram: {
          title: 'Unite a Nuestra Comunidad de Telegram',
          description:
            'Conectate con otros estudiantes interesados en la seguridad de la IA.',
          button: 'Unirse al Grupo de Telegram'
        }
      }
    },

    // About page
    about: {
      pageHeader: {
        breadcrumb: 'Inicio / Seguridad en IA',
        title: 'Entendiendo la Seguridad en IA'
      },
      coreConcepts: {
        whatIs: {
          title: '¿Qué es la Seguridad en IA?',
          content:
            'La Seguridad en IA es un campo de investigación enfocado en asegurar que los sistemas avanzados de inteligencia artificial sigan siendo beneficiosos, alineados con los valores humanos y bajo control humano a medida que se vuelven más capaces. Abarca áreas técnicas de investigación como alineamiento, interpretabilidad y robustez, así como consideraciones de gobernanza sobre cómo deberían desarrollarse e implementarse los sistemas de IA.'
        },
        whyMatters: {
          title: '¿Por qué es Importante?',
          content:
            'A medida que los sistemas de IA se vuelven más poderosos y autónomos, pueden desarrollar capacidades que podrían llevar a consecuencias no deseadas si no están diseñados y controlados adecuadamente. Lo que está en juego es importante: la IA avanzada podría ayudar a resolver los mayores desafíos de la humanidad, pero también presenta riesgos significativos si se desarrolla sin medidas de seguridad adecuadas. El campo busca maximizar los beneficios mientras minimiza los daños potenciales.'
        },
        challenges: {
          title: 'Riesgos y Desafíos Principales',
          alignment: {
            title: 'Problema de Alineamiento',
            content:
              'Asegurar que los sistemas de IA persigan objetivos alineados con los valores e intenciones humanas, incluso cuando se vuelven más capaces.'
          },
          interpretability: {
            title: 'Interpretabilidad',
            content:
              'Desarrollar técnicas para entender cómo los sistemas de IA toman decisiones y representan conocimiento.'
          },
          robustness: {
            title: 'Robustez',
            content:
              'Crear sistemas que se comporten de manera segura incluso cuando se implementan en nuevos entornos o enfrentan situaciones inesperadas.'
          },
          powerSeeking: {
            title: 'Comportamiento de Búsqueda de Poder',
            content:
              'Prevenir que los sistemas de IA desarrollen objetivos instrumentales que entren en conflicto con el bienestar humano.'
          },
          coordination: {
            title: 'Desafíos de Coordinación',
            content:
              'Garantizar que se mantengan estándares de seguridad en todos los principales esfuerzos de desarrollo de IA a nivel mundial.'
          }
        }
      },
      externalResources: {
        title: 'Aprendé Más Sobre Seguridad en IA',
        cards: {
          alignmentForum: {
            title: 'Alignment Forum',
            description:
              'Un foro dedicado a la investigación técnica en alineamiento de IA, con papers y discusiones de investigadores destacados.',
            difficulty: 'Técnico',
            cta: 'Visitar'
          },
          lessWrong: {
            title: 'LessWrong',
            description:
              'Un blog comunitario enfocado en la racionalidad humana y las implicaciones de la inteligencia artificial.',
            difficulty: 'Intermedio',
            cta: 'Visitar'
          },
          eightyThousandHours: {
            title: '80,000 Hours',
            description:
              'Orientación profesional para trabajar en los problemas más urgentes del mundo, incluida la seguridad de la IA.',
            difficulty: 'Introductorio',
            cta: 'Visitar'
          },
          stampy: {
            title: 'Wiki de Stampy',
            description:
              'Una wiki colaborativa que proporciona explicaciones accesibles de conceptos de alineamiento de IA.',
            difficulty: 'Introductorio',
            cta: 'Visitar'
          }
        }
      },
      ourApproach: {
        title: 'Nuestro Enfoque',
        focusAreas: {
          title: 'Áreas de Enfoque',
          intro:
            'En BAISH - Buenos Aires AI Safety Hub, nos enfocamos en varias áreas clave dentro de la investigación de seguridad en IA:',
          areas: [
            'Interpretabilidad mecánica de redes neuronales',
            'Técnicas de alineamiento para modelos grandes de lenguaje',
            'Metodologías de entrenamiento robustas',
            'Aprendizaje de valores e inferencia de preferencias'
          ]
        },
        contributions: {
          title: 'Nuestra Contribución',
          intro: 'Contribuimos al campo a través de:',
          items: [
            'Apoyando proyectos de investigación estudiantil',
            'Desarrollando recursos educativos en español',
            'Construyendo una comunidad regional de investigadores en seguridad de IA',
            'Organizando talleres y programas de formación',
            'Mentoreando a estudiantes interesados en carreras de seguridad en IA'
          ]
        }
      },
      team: {
        title: 'Equipo Principal',
        members: {
          eitan: {
            name: 'Eitan Sprejer',
            title: 'Co-director Fundador',
            bio: 'Estudiante de Física con pasión por la seguridad y el alineamiento de la IA.'
          }
        }
      }
    },

    // Activities page
    activities: {
      pageHeader: {
        breadcrumb: 'Inicio / Actividades',
        title: 'Nuestras Actividades',
        subtitle:
          'Sumate a nuestra comunidad y participá en investigación y aprendizaje sobre seguridad en IA'
      },
      agiFundamentals: {
        title: 'Cohorte de Fundamentos de Seguridad en AGI',
        status: 'Actualmente Activo',
        description:
          'La cohorte de Fundamentos de Seguridad en AGI es un curso guiado de 8 semanas que cubre los conceptos esenciales en alineamiento y seguridad de IA. Los participantes leen materiales seleccionados y se reúnen semanalmente para discutir las lecturas con un facilitador.',
        description2:
          'Este programa está basado en el plan de estudios de Fundamentos de Seguridad en AGI de BlueDot y proporciona una introducción estructurada al campo de la seguridad en IA.',
        whatToExpect: {
          title: 'Qué Esperar',
          items: [
            'Sesiones de discusión semanales de 2 horas',
            '1-3 horas de lectura por semana',
            'Grupos pequeños de 6-12 participantes',
            'Facilitadores experimentados para guiar las discusiones',
            'Certificado de finalización'
          ]
        },
        details: {
          title: 'Detalles del Programa',
          duration: 'Duración:',
          durationValue: '10-12 semanas',
          period: 'Período de Fellowship:',
          periodValue: 'Agosto - Diciembre 2025'
        }
      },
      weeklyDiscussion: {
        title: 'Grupo de Discusión Semanal',
        status: 'Cada Martes @ 18:00',
        description:
          'Nuestro Grupo de Discusión Semanal proporciona un foro casual para discutir papers recientes, conceptos y avances en seguridad de IA. Estas sesiones están abiertas a cualquier persona interesada en el campo, independientemente de conocimientos previos.',
        description2:
          'Cada semana presenta un tema diferente, anunciado con anticipación a través de nuestra lista de correo y grupo de Telegram.',
        format: {
          title: 'Formato',
          items: [
            'Discusiones de 90 minutos dirigidas por un facilitador rotativo',
            'Breve presentación del tema de la semana (15-20 minutos)',
            'Discusión abierta y preguntas y respuestas',
            'Materiales de lectura previa opcionales compartidos con anticipación'
          ]
        },
        participation: {
          title: 'Participación',
          description:
            'No se requiere inscripción. ¡Simplemente vení! Si asistís por primera vez, te recomendamos llegar 10 minutos antes para conocer a los organizadores.'
        },
        nextDiscussion: {
          title: 'Próxima Discusión',
          date: 'Fecha:',
          dateValue: '25 de Marzo, 2025',
          time: 'Hora:',
          timeValue: '18:00 - 19:30',
          location: 'Ubicación:',
          locationValue: 'Pabellón 0+inf, Aula 1603, Ciudad Universitaria',
          topic: 'Tema:',
          topicValue: 'Métodos de Interpretabilidad',
          facilitator: 'Facilitador:',
          facilitatorValue: 'Eitan Sprejer',
          button: 'Unite al Telegram para Actualizaciones'
        }
      },
      paperReading: {
        title: 'Club de Lectura de Papers',
        status: 'Cada Viernes @ 17:00',
        description:
          'El Club de Lectura de Papers realiza análisis profundos de papers fundamentales y recientes en investigación de seguridad en IA. A diferencia del grupo de discusión más casual, esta actividad implica un examen minucioso de papers de investigación específicos.',
        description2:
          'Se espera que los participantes lean el paper seleccionado con anticipación y vengan preparados para discutir sus métodos, resultados e implicaciones.',
        selectionCriteria: {
          title: 'Criterios de Selección de Papers',
          items: [
            'Importancia para el campo de la seguridad en IA',
            'Relevancia técnica para las direcciones de investigación actuales',
            'Mezcla de papers fundamentales y publicaciones recientes',
            'Accesibilidad para estudiantes de posgrado y de grado avanzados'
          ]
        },
        sessionFormat: {
          title: 'Formato de la Sesión',
          items: [
            'Breve descripción general del paper (5-10 minutos)',
            'Discusión sección por sección',
            'Examen de métodos y resultados',
            'Evaluación crítica de afirmaciones y limitaciones',
            'Discusión de posible investigación de seguimiento'
          ]
        },
        nextSession: {
          title: 'Próxima Sesión de Paper',
          date: 'Fecha:',
          dateValue: '21 de Marzo, 2025',
          time: 'Hora:',
          timeValue: '17:00 - 18:30',
          location: 'Ubicación:',
          locationValue: 'Pabellón 0+inf, Aula 1603, Ciudad Universitaria',
          paper: 'Paper:',
          paperValue: '"Interpretabilidad Mecánica para Modelos de Lenguaje"',
          lead: 'Líder de Discusión:',
          leadValue: 'Eitan Sprejer',
          button: 'Acceder a la Lista de Lectura'
        }
      },
      mechInterp: {
        title: 'Curso de Interpretabilidad Mecánica',
        status: 'Comienza en Junio 2025',
        description:
          'El Curso de Interpretabilidad Mecánica es un programa intensivo de 1 mes enfocado en técnicas para entender los mecanismos internos de las redes neuronales. Este curso combina aprendizaje teórico con proyectos prácticos.',
        description2:
          'La interpretabilidad mecánica es un área clave de la investigación en seguridad de IA, que busca hacer que los sistemas de IA sean más transparentes y comprensibles.',
        curriculum: {
          title: 'Descripción General del Plan de Estudios',
          items: [
            'Fundamentos de arquitecturas de redes neuronales',
            'Técnicas de visualización de características',
            'Análisis de circuitos en modelos de transformers',
            'Técnicas para analizar mecanismos de atención',
            'Métodos de atribución basados en gradientes',
            'Proyecto final: Interpretación de un componente específico del modelo'
          ]
        },
        timeCommitment: {
          title: 'Dedicación de Tiempo',
          items: [
            '2 clases por semana (2 horas cada una)',
            '1 sesión práctica por semana (3 horas)',
            'Trabajo de proyecto individual (5-10 horas por semana)',
            'Presentación de proyecto final'
          ]
        },
        prerequisites: {
          title: 'Requisitos Previos',
          items: [
            'Sólidas habilidades de programación (Python)',
            'Experiencia con frameworks de aprendizaje profundo (preferiblemente PyTorch)',
            'Familiaridad con arquitecturas básicas de redes neuronales',
            'Álgebra lineal y cálculo'
          ]
        },
        courseDetails: {
          title: 'Detalles del Curso',
          duration: 'Duración:',
          durationValue: '4 semanas',
          startDate: 'Fecha de Inicio:',
          startDateValue: '2 de Junio, 2025',
          endDate: 'Fecha de Finalización:',
          endDateValue: '27 de Junio, 2025',
          deadline: 'Fecha Límite de Solicitud:',
          deadlineValue: '15 de Mayo, 2025',
          location: 'Ubicación:',
          locationValue: 'Híbrido (Presencial y Zoom)',
          instructors: 'Instructores:',
          instructorsValue: 'Dra. Laura Fernandez, Carlos Mendez',
          button: 'Expresar Interés'
        }
      },
      calendar: {
        title: 'Calendario de Próximos Eventos',
        subscribe: 'Suscribirse al Calendario de Google de Todos los Eventos'
      }
    },

    // Resources page
    resources: {
      // Add translations for resources page
    },

    // Contact page
    contact: {
      // Add translations for contact page
    },

    // Common elements
    common: {
      learnMore: 'Ver Más',
      readMore: 'Leer Más',
      upcoming: 'Próximamente',
      active: 'Activo',
      completed: 'Finalizado'
    }
  }
}
