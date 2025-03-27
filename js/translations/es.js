/**
 * BAISH - Spanish translations
 */
const translationsES = {
  // Navigation
  nav: {
    home: 'Inicio',
    about: 'Acerca de',
    activities: 'Actividades',
    research: 'Investigación',
    resources: 'Recursos',
    mechInterpCourse: 'Curso Interp. Mec.',
    contact: 'Contacto',
    joinUs: 'Únete'
  },

  // Footer
  footer: {
    privacyPolicy: 'Política de privacidad',
    copyright: '© 2025 BAISH - Buenos Aires AI Safety Hub',
    tagline: 'Buenos Aires AI Safety Hub'
  },

  // Home page
  home: {
    hero: {
      title: 'Asegurando que la IA Beneficie a la Humanidad',
      subtitle:
        'Iniciativa estudiantil dedicada a la investigación y desarrollo seguro y beneficioso de la IA',
      cta: 'Involúcrate'
    },
    activities: {
      title: 'Nuestras Actividades',
      card1: {
        title: 'Cohorte AGI Safety Fundamentals',
        description:
          'Un curso guiado de 8 semanas que cubre los conceptos esenciales en alineamiento y seguridad de IA.',
        status: 'Actualmente Activo',
        link: 'Más Información →'
      },
      card2: {
        title: 'Grupo de Discusión Semanal',
        description:
          'Reuniones semanales para discutir papers recientes, conceptos y desarrollos en seguridad de IA.',
        status: 'Cada martes @ 18:00',
        link: 'Más Información →'
      },
      card3: {
        title: 'Club de Lectura de Papers',
        description:
          'Inmersiones profundas en papers fundamentales y recientes en investigación de seguridad de IA.',
        status: 'Cada viernes @ 17:00',
        link: 'Más Información →'
      },
      card4: {
        title: 'Curso de Interp. Mecánica',
        description:
          'Curso intensivo de 1 mes sobre métodos de interpretabilidad mecanicista.',
        status: 'Comienza a fines de abril 2025',
        link: 'Más Información →'
      }
    },
    getInvolved: {
      title: 'Involúcrate',
      mailingList: {
        title: 'Suscríbete a nuestra Lista',
        description:
          'Mantente al día con nuestras actividades, eventos y oportunidades.'
      },
      telegram: {
        title: 'Únete a nuestra Comunidad en Telegram',
        description:
          'Conéctate con otros estudiantes interesados en seguridad de IA.',
        button: 'Unirse al Grupo de Telegram'
      }
    }
  },

  // About page
  about: {
    pageHeader: {
      breadcrumb: 'Inicio / Acerca de la Seguridad en IA',
      title: 'Entendiendo la Seguridad en IA'
    },
    coreConcepts: {
      whatIs: {
        title: '¿Qué es la Seguridad en IA?',
        content:
          'La Seguridad en IA es un campo de investigación enfocado en asegurar que los sistemas avanzados de inteligencia artificial permanezcan beneficiosos, alineados con los valores humanos y bajo control humano a medida que se vuelven más capaces. Abarca áreas de investigación técnica como alineamiento, interpretabilidad y robustez, así como consideraciones de gobernanza sobre cómo los sistemas de IA deben ser desarrollados e implementados.'
      },
      whyMatters: {
        title: 'Por qué es Importante',
        content:
          'A medida que los sistemas de IA se vuelven más poderosos y autónomos, pueden desarrollar capacidades que podrían llevar a consecuencias no intencionadas si no están debidamente diseñados y controlados. Lo que está en juego es alto: la IA avanzada podría ayudar a resolver los mayores desafíos de la humanidad, pero también plantea riesgos significativos si se desarrolla sin medidas de seguridad adecuadas. El campo busca maximizar los beneficios mientras minimiza los posibles daños.'
      },
      challenges: {
        title: 'Riesgos y Desafíos Clave',
        alignment: {
          title: 'Problema de Alineamiento',
          content:
            'Asegurar que los sistemas de IA persigan objetivos alineados con los valores e intenciones humanas, incluso a medida que se vuelven más capaces.'
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
            'Asegurar que los estándares de seguridad se mantengan en todos los principales esfuerzos de desarrollo de IA a nivel mundial.'
        }
      }
    },
    team: {
      title: 'Nuestro Equipo Principal',
      members: {
        eitan: {
          name: 'Eitan Sprejer',
          title: 'Co-director Fundador'
        },
        luca: {
          name: 'Luca De Leo',
          title: 'Co-director Fundador'
        }
      }
    },
    ourApproach: {
      title: 'Nuestro Enfoque',
      focusAreas: {
        title: 'Áreas de Enfoque',
        intro:
          'En BAISH - Buenos Aires AI Safety Hub, nos enfocamos en varias áreas clave dentro de la investigación en seguridad de IA:',
        areas: [
          'Interpretabilidad mecanicista de redes neuronales',
          'Técnicas de alineamiento para grandes modelos de lenguaje',
          'Metodologías de entrenamiento robustas',
          'Aprendizaje de valores e inferencia de preferencias'
        ]
      },
      contributions: {
        title: 'Nuestra Contribución',
        intro: 'Contribuimos al campo a través de:',
        items: [
          'Apoyo a proyectos de investigación estudiantil',
          'Desarrollo de recursos educativos en español',
          'Construcción de una comunidad regional de investigadores en seguridad de IA',
          'Organización de talleres y programas de capacitación',
          'Mentoría a estudiantes interesados en carreras de seguridad de IA'
        ]
      }
    }
  },

  // Activities page
  activities: {
    pageHeader: {
      breadcrumb: 'Inicio / Actividades',
      title: 'Nuestras Actividades'
    },
    intro: {
      content:
        'BAISH ofrece una variedad de actividades diseñadas para ayudar a estudiantes e investigadores a involucrarse con conceptos de seguridad en IA, desde discusiones introductorias hasta proyectos de investigación prácticos.'
    }
  },

  // Contact page
  contact: {
    pageHeader: {
      breadcrumb: 'Inicio / Contacto',
      title: 'Ponte en Contacto'
    },
    intro: {
      content:
        '¡Nos encantaría saber de ti! Ya sea que estés interesado en unirte a nuestras actividades, colaborar en investigación o simplemente aprender más sobre seguridad en IA, contáctanos a través de cualquiera de los canales a continuación.'
    },
    form: {
      title: 'Formulario de Contacto',
      name: 'Tu Nombre',
      email: 'Tu Email',
      subject: 'Asunto',
      message: 'Mensaje',
      submit: 'Enviar Mensaje'
    }
  }
}
