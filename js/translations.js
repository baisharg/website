// Translations for the entire website
const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About',
      activities: 'Activities',
      research: 'Research',
      resources: 'Resources',
      contact: 'Contact',
      joinUs: 'Join Us'
    },

    // Footer
    footer: {
      privacyPolicy: 'Privacy Policy',
      copyright: '© 2025 BAISH - Buenos Aires AI Safety Hub',
      tagline: 'Buenos Aires AI Safety Hub'
    },

    // Privacy Policy page
    privacy: {
      pageHeader: {
        breadcrumb: 'Privacy Policy',
        title: 'Privacy Policy'
      },
      intro: {
        title: 'Our Approach to Privacy',
        content:
          'At BAISH (Buenos Aires AI Safety Hub), we are committed to respecting your privacy. This Privacy Policy outlines our practices regarding the collection, use, and protection of your information when you use our website and services.'
      },
      dataCollection: {
        title: 'Data Collection',
        content:
          'We collect minimal personal information. The only personal data we collect is email addresses when users voluntarily sign up for our newsletter through Substack. This information is stored and managed by Substack according to their privacy policy.'
      },
      noTracking: {
        title: 'No Tracking or Cookies',
        content:
          'We do not use cookies, analytics, tracking tools, or any other technology to collect data about you. We do not monitor your browsing activities or gather information about your online behaviors.'
      },
      thirdParty: {
        title: 'Third-Party Services',
        content:
          "Our newsletter is managed through Substack. When you subscribe to our newsletter, your email address is shared with and stored by Substack. Please refer to Substack's Privacy Policy to understand how they handle your information."
      },
      yourRights: {
        title: 'Your Rights',
        content:
          'You have the right to unsubscribe from our newsletter at any time by clicking the unsubscribe link in any of our emails or by contacting us directly. If you have any questions about your data or wish to access, correct, or delete your information, please contact us.'
      },
      changes: {
        title: 'Changes to This Policy',
        content:
          'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.'
      },
      contact: {
        title: 'Contact Us',
        content:
          'If you have any questions about this Privacy Policy, please contact us through our Contact page.'
      }
    },

    // Home page
    home: {
      hero: {
        title: 'Ensuring AI Benefits Humanity',
        paragraph1:
          'As artificial intelligence models advance in capabilities<sup>1</sup>, we expect them to have an increasingly profound impact on our society<sup>2</sup>. It is essential that this impact is positive, and that the decisions made by these systems are transparent, reliable, and accountable<sup>3</sup> to the people affected by them.',
        paragraph2:
          'We believe that reducing the risks associated with advanced AI models<sup>4</sup> is one of the most important challenges of our time. We also believe it is an open and exciting problem<sup>5</sup>, with ample opportunities for more researchers to advance in this field<sup>6</sup>.',
        paragraph3:
          "BAISH's mission is to support students in entering this field and conducting research on this topic.",
        cta: 'Get Involved'
      },
      intro: {
        title: 'Why AI Safety Matters',
        paragraph1:
          'Advanced AI systems are becoming increasingly capable, with the potential to transform society in profound ways. The field of AI Safety focuses on ensuring these systems are aligned with human values and beneficial to humanity.',
        paragraph2:
          'At the BAISH - Buenos Aires AI Safety Hub, we bring together students from Computer Science, Physics, Mathematics and other enthusiasts to understand and address these challenges through research, education, and community.',
        point1: 'Understanding AI capabilities and risks',
        point2: 'Developing alignment techniques',
        point3: 'Conducting original research',
        point4: 'Building a community of researchers',
        learnMore: 'Learn more about AI Safety →'
      },
      upcomingEvent: {
        title: 'Weekly Discussion Group',
        time: '14:30 - 17:00',
        location: 'Pabellon 0+inf, Room 1603, Ciudad Universitaria',
        description:
          'Join us for our weekly discussion group on AI safety topics.',
        rsvp: 'RSVP Now'
      },
      activities: {
        title: 'Our Activities',
        card1: {
          title: 'AGI Safety Fundamentals Cohort',
          description:
            'An 8-week guided course covering the essential concepts in AI alignment and safety.',
          status: 'Starts second semester 2025',
          link: 'Learn More →'
        },
        card2: {
          title: 'Weekly Discussion Group',
          description:
            'Weekly meetings to discuss recent papers, concepts, and developments in AI safety.',
          status: 'Every Friday @ 2:30pm - 5:00pm',
          link: 'Learn More →'
        },
        card3: {
          title: 'Paper Reading Club',
          description:
            'Deep dives into foundational and recent papers in AI safety research.',
          status: 'Every Thursday @ 2:00pm - 3:00pm',
          link: 'Learn More →'
        },
        card4: {
          title: 'Mech Interp Course',
          description:
            'Intensive 1-month course on mechanistic interpretability methods.',
          status: 'Starts end of April 2025',
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
          },
          luca: {
            name: 'Luca De Leo',
            title: 'Co-founding Director',
            bio: 'Operations Generalist with experience working in AI Safety Organizations'
          },
          lucas: {
            name: 'Lucas Vitali',
            title: 'Communications Director',
            bio: 'Computer Science student with a passion for science communications'
          },
          sergio: {
            name: 'Sergio Abriola, PhD',
            title: 'Advisor',
            bio: 'Mathematics PhD and professor with a passion for AI Safety'
          }
        }
      }
    },

    // Activities page
    activities: {
      pageHeader: {
        breadcrumb: 'Home / Activities',
        title: 'Our Activities',
        subtitle:
          'Join our community and participate in AI safety research and learning'
      },
      agiFundamentals: {
        title: 'AGI Safety Fundamentals Cohort',
        status: 'Currently Active',
        description:
          'The AGI Safety Fundamentals cohort is an 8-week guided course covering the essential concepts in AI alignment and safety. Participants read curated materials and meet weekly to discuss the readings with a facilitator.',
        description2:
          'This program is based on the BlueDot AGI Safety Fundamentals curriculum and provides a structured introduction to the field of AI safety.',
        whatToExpect: {
          title: 'What to Expect',
          items: [
            '2-hour weekly discussion sessions',
            '1-3 hours of reading per week',
            'Small groups of 6-12 participants',
            'Experienced facilitators to guide discussions',
            'Certificate of completion'
          ]
        },
        details: {
          title: 'Program Details',
          duration: 'Duration:',
          durationValue: '10-12 weeks',
          period: 'Fellowship Period:',
          periodValue: 'August - December 2025'
        }
      },
      weeklyDiscussion: {
        title: 'Weekly Discussion Group',
        status: 'Every Friday @ 2:30pm - 5:00pm',
        description:
          'Our Weekly Discussion Group provides a casual forum to discuss recent papers, concepts, and developments in AI safety. These sessions are open to anyone interested in the field, regardless of prior knowledge.',
        description2:
          'Each week features a different topic, announced in advance via our mailing list and Telegram group.',
        format: {
          title: 'Format',
          items: [
            '90-minute discussions led by a rotating facilitator',
            "Brief presentation on the week's topic (15-20 minutes)",
            'Open discussion and Q&A',
            'Optional pre-reading materials shared in advance'
          ]
        },
        participation: {
          title: 'Participation',
          description:
            "No registration required. Just show up! If it's your first time attending, we recommend arriving 10 minutes early to meet the organizers."
        },
        nextDiscussion: {
          title: 'Next Discussion',
          date: 'Date:',
          dateValue: 'March 28, 2025',
          time: 'Time:',
          timeValue: '14:30 - 17:00',
          location: 'Location:',
          locationValue: 'Pabellón 0+inf, Room 1603, Ciudad Universitaria',
          topic: 'Topic:',
          topicValue: 'To be announced',
          facilitator: 'Facilitator:',
          facilitatorValue: 'Eitan Sprejer',
          button: 'Join Telegram for Updates'
        }
      },
      paperReading: {
        title: 'Paper Reading Club',
        status: 'Every Thursday @ 2:00pm - 3:00pm',
        description:
          'The Paper Reading Club conducts deep dives into foundational and recent papers in AI safety research. Unlike the more casual discussion group, this activity involves a close examination of specific research papers.',
        description2:
          'Participants are expected to read the selected paper in advance and come prepared to discuss its methods, results, and implications.',
        selectionCriteria: {
          title: 'Paper Selection Criteria',
          items: [
            'Importance to the field of AI safety',
            'Technical relevance to current research directions',
            'Mix of foundational papers and recent publications',
            'Accessibility to graduate and advanced undergraduate students'
          ]
        },
        sessionFormat: {
          title: 'Session Format',
          items: [
            'Brief overview of the paper (5-10 minutes)',
            'Section-by-section discussion',
            'Examination of methods and results',
            'Critical evaluation of claims and limitations',
            'Discussion of potential follow-up research'
          ]
        },
        nextSession: {
          title: 'Next Paper Session',
          date: 'Date:',
          dateValue: 'March 21, 2025',
          time: 'Time:',
          timeValue: '17:00 - 18:30',
          location: 'Location:',
          locationValue: 'Pabellón 0+inf, Room 1603, Ciudad Universitaria',
          paper: 'Paper:',
          paperValue: '"Mechanistic Interpretability for Language Models"',
          lead: 'Discussion Lead:',
          leadValue: 'Eitan Sprejer',
          button: 'Access Reading List'
        }
      },
      mechInterp: {
        title: 'Mechanistic Interpretability Course',
        status: 'Starts end of April 2025',
        description:
          'The Mechanistic Interpretability Course is an intensive 1-month program focused on techniques for understanding the internal mechanisms of neural networks. This course combines theoretical learning with practical projects.',
        description2:
          'Mechanistic interpretability is a key area of AI safety research, seeking to make AI systems more transparent and understandable.',
        curriculum: {
          title: 'Curriculum Overview',
          items: [
            'Fundamentals of neural network architectures',
            'Feature visualization techniques',
            'Circuit analysis in transformer models',
            'Techniques for analyzing attention mechanisms',
            'Gradient-based attribution methods',
            'Final project: Interpreting a specific model component'
          ]
        },
        timeCommitment: {
          title: 'Time Commitment',
          items: [
            '2 classes per week (2 hours each)',
            '1 practical session per week (3 hours)',
            'Individual project work (5-10 hours per week)',
            'Final project presentation'
          ]
        },
        prerequisites: {
          title: 'Prerequisites',
          items: [
            'Strong programming skills (Python)',
            'Experience with deep learning frameworks (preferably PyTorch)',
            'Familiarity with basic neural network architectures',
            'Linear algebra and calculus'
          ]
        },
        courseDetails: {
          title: 'Course Details',
          duration: 'Duration:',
          durationValue: '4 weeks',
          startDate: 'Start Date:',
          startDateValue: 'June 2, 2025',
          endDate: 'End Date:',
          endDateValue: 'June 27, 2025',
          deadline: 'Application Deadline:',
          deadlineValue: 'May 15, 2025',
          location: 'Location:',
          locationValue: 'Hybrid (In-person and Zoom)',
          instructors: 'Instructors:',
          instructorsValue: 'Dr. Laura Fernandez, Carlos Mendez',
          button: 'Express Interest'
        }
      },
      calendar: {
        title: 'Upcoming Events Calendar',
        subscribe: 'Subscribe to Google Calendar for All Events'
      }
    },

    // Resources page
    resources: {
      pageHeader: {
        breadcrumb: 'Home / Resources',
        title: 'Learning Resources',
        subtitle:
          'Curated materials for exploring AI safety concepts and our newsletter archive'
      },
      learningPathways: {
        title: 'Learning Pathways',
        intro:
          "We've organized resources into three learning paths depending on your background and experience level.",
        pathways: {
          beginners: {
            title: 'Beginners',
            difficulty: 'Accessible to All',
            description:
              'For those new to AI safety concepts who want to understand the key ideas and concerns.',
            resources: {
              resource1: {
                title: 'Future of Life Institute: AI Risk Introduction',
                type: 'Overview'
              },
              resource2: {
                title: 'Cold Takes: Transformative AI series',
                type: 'Blog Series'
              },
              resource3: {
                title: 'Rob Miles: AI Safety Intro',
                type: 'Video'
              },
              resource4: {
                title: '80,000 Hours: AI Risk Problem Profile',
                type: 'Overview'
              },
              resource5: {
                title: "Stampy's AI Safety Wiki",
                type: 'Wiki'
              }
            },
            button: 'Get Beginner Recommendations'
          },
          intermediate: {
            title: 'Intermediate',
            difficulty: 'Some Technical Background',
            description:
              'For those with some understanding of machine learning who want to explore core AI safety challenges.',
            resources: {
              resource1: {
                title: 'AGI Safety Fundamentals Curriculum',
                type: 'Course Materials'
              },
              resource2: {
                title: 'Technical Alignment Fundamentals',
                type: 'Reading List'
              },
              resource3: {
                title: 'Anthropic: Core Views on AI Safety',
                type: 'Company Perspective'
              },
              resource4: {
                title: 'Training Language Models to Follow Instructions',
                type: 'Research Paper'
              },
              resource5: {
                title: 'DeepLearning.AI: Alignment Techniques for LLMs',
                type: 'Course'
              }
            },
            button: 'Get Intermediate Recommendations'
          },
          advanced: {
            title: 'Advanced',
            difficulty: 'Strong Technical Background',
            description:
              'For those with strong ML/AI knowledge who want to engage with cutting-edge research.',
            resources: {
              resource1: {
                title: 'Distill: Circuits Thread',
                type: 'Interpretability Research'
              },
              resource2: {
                title: 'Anthropic: Transformer Circuits',
                type: 'Research Series'
              },
              resource3: {
                title: 'Discovering Latent Knowledge in Language Models',
                type: 'Research Paper'
              },
              resource4: {
                title: 'Language Agents for Alignment Research',
                type: 'Research Paper'
              },
              resource5: {
                title: 'Alignment Forum: Advanced Concepts',
                type: 'Technical Discussion'
              }
            },
            button: 'Get Advanced Recommendations'
          }
        }
      },
      recommendedBooks: {
        title: 'Recommended Books',
        books: {
          book1: {
            title: 'Uncontrollable',
            author: 'Darren McKee (2023)',
            description:
              'Uncontrollable uses engaging analogies and relatable examples to summarize AI for beginners, and unpacks AI risk and safety for readers without a technical background.'
          },
          book2: {
            title: 'Human Compatible',
            author: 'Stuart Russell (2019)',
            description:
              "A leading AI researcher's compelling case for how to ensure that artificial intelligence remains beneficial to humanity."
          },
          book3: {
            title: 'Superintelligence',
            author: 'Nick Bostrom (2014)',
            description:
              'Explores the potential risks and paths to superintelligent AI, addressing key questions about the future of intelligence.'
          },
          book4: {
            title: 'The Alignment Problem',
            author: 'Brian Christian (2020)',
            description:
              'An exploration of the growing field of AI alignment, explaining technical concepts in an accessible way.'
          },
          book5: {
            title: 'Life 3.0',
            author: 'Max Tegmark (2017)',
            description:
              'Examines how artificial intelligence might affect life in the future and what choices we face in shaping that future.'
          }
        }
      }
    },

    // Contact page
    contact: {
      pageHeader: {
        breadcrumb: 'Home / Contact',
        title: 'Contact Us',
        subtitle: 'Get in touch with our team and join our community'
      },
      contactInfo: {
        email: {
          title: 'Email',
          description: 'For general inquiries, suggestions, or questions:'
        },
        telegram: {
          title: 'Telegram',
          description: 'Join our community channel for discussions and updates:'
        },
        location: {
          title: 'Location',
          description: "We're based at the Department of Computer Science:"
        },
        socialMedia: {
          title: 'Social Media',
          description: 'Follow us for updates and announcements:'
        }
      },
      getInvolved: {
        title: 'Get Involved',
        intro:
          'There are multiple ways to participate in our community and activities.',
        mailingList: {
          title: 'Join our Mailing List',
          description:
            'Stay updated with our events, activities, and opportunities by subscribing to our mailing list. We send monthly newsletters and important announcements.'
        }
      },
      form: {
        name: 'What is your name?',
        email: 'What is your email?',
        message: 'Message',
        clear: 'Clear form',
        submit: 'Submit'
      },
      faq: {
        title: 'Frequently Asked Questions',
        questions: {
          q1: {
            question: 'Do I need to be a UBA student to participate?',
            answer:
              'Most of our activities are primarily designed for UBA students, but we welcome participants from other universities for our discussion groups and paper reading sessions. Research fellowships are currently limited to UBA students.'
          },
          q2: {
            question: 'What background do I need to participate?',
            answer:
              'This varies by activity. Our discussion groups are open to anyone with an interest in AI safety, regardless of technical background. For more technical activities like the Mechanistic Interpretability course or the Research Fellowship, some background in computer science, mathematics, or AI/ML is expected.'
          },
          q3: {
            question: 'Are your activities conducted in English or Spanish?',
            answer:
              'We conduct most of our activities in both languages. Discussion groups are typically in Spanish, while some technical sessions may be in English, especially when using materials from international sources. Our written materials are available in both languages whenever possible.'
          },
          q4: {
            question:
              "How can I start learning about AI safety if I'm a complete beginner?",
            answer:
              'We recommend starting with our beginner resources on the Resources page and joining our weekly discussion group. The discussion group is a great place to ask questions and learn from others in an informal setting.'
          },
          q5: {
            question: 'Can I propose a new activity or research direction?',
            answer:
              "Absolutely! We're always open to new ideas. Contact us at aisafetyarg@gmail.com with your proposal, and one of our coordinators will discuss it with you."
          }
        }
      }
    },

    // Research page
    research: {
      pageHeader: {
        breadcrumb: 'Research',
        title: 'Our Research',
        subtitle: 'Student-led projects exploring critical AI safety challenges'
      },
      overview: {
        approach: {
          title: 'Research Approach',
          paragraph1:
            'At BAISH - Buenos Aires AI Safety Hub, we support student-led research into core AI safety challenges. Our projects range from technical work on interpretability and alignment to more conceptual explorations of AI governance and ethics.',
          paragraph2:
            'Research projects are typically conducted through our Research Fellowship program or as collaborations between students and faculty members. We encourage rigorous methods, creative thinking, and interdisciplinary approaches.'
        },
        focusAreas: {
          title: 'Focus Areas',
          interpretability:
            '<strong>Interpretability and Transparency</strong> - Understanding how neural networks represent and process information',
          alignment:
            '<strong>Alignment Techniques</strong> - Developing methods to align AI systems with human values and intentions',
          robustness:
            '<strong>Robustness</strong> - Creating AI systems that maintain safe behavior in new environments',
          valueLearning:
            '<strong>Value Learning</strong> - Inferring human preferences from feedback and demonstration'
        }
      },
      projects: {
        title: 'Research Projects',
        filterBy: 'Filter by:',
        filters: {
          all: 'All',
          interpretability: 'Interpretability',
          alignment: 'Alignment',
          robustness: 'Robustness',
          valueLearning: 'Value Learning'
        }
      },
      publications: {
        title: 'Publications',
        intro: 'Selected publications by our members in peer-reviewed venues.'
      },
      ongoingResearch: {
        title: 'Ongoing Research',
        intro:
          'Current projects under development by our research fellows and collaborators.'
      },
      joinResearch: {
        title: 'Interested in Conducting Research with Us?',
        description:
          "We welcome students from Computer Science, Mathematics, Physics, and related fields to join our research efforts. Whether you're an undergraduate looking for research experience or a graduate student interested in AI safety, we have opportunities for you.",
        buttons: {
          fellowships: 'Learn About Research Fellowships',
          contact: 'Contact Research Coordinators'
        }
      }
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
      home: 'Inicio',
      about: 'Quiénes Somos',
      activities: 'Actividades',
      research: 'Investigación',
      resources: 'Recursos',
      contact: 'Contacto',
      joinUs: 'Sumate'
    },

    // Footer
    footer: {
      privacyPolicy: 'Política de Privacidad',
      copyright: '© 2025 BAISH - Buenos Aires AI Safety Hub',
      tagline: 'Buenos Aires AI Safety Hub'
    },

    // Privacy Policy page
    privacy: {
      pageHeader: {
        breadcrumb: 'Política de Privacidad',
        title: 'Política de Privacidad'
      },
      intro: {
        title: 'Nuestro Enfoque en la Privacidad',
        content:
          'En BAISH (Buenos Aires AI Safety Hub), nos comprometemos a respetar su privacidad. Esta Política de Privacidad describe nuestras prácticas respecto a la recopilación, uso y protección de su información cuando utiliza nuestro sitio web y servicios.'
      },
      dataCollection: {
        title: 'Recopilación de Datos',
        content:
          'Recopilamos información personal mínima. La única información personal que recopilamos es direcciones de correo electrónico cuando los usuarios se suscriben voluntariamente a nuestro boletín informativo a través de Substack. Esta información se almacena y gestiona de acuerdo con la política de privacidad de Substack.'
      },
      noTracking: {
        title: 'Sin Rastreo ni Cookies',
        content:
          'No utilizamos cookies, herramientas de análisis, herramientas de seguimiento o cualquier otra tecnología para recoger datos sobre usted. No monitoreamos sus actividades en línea ni recopilamos información sobre su comportamiento en línea.'
      },
      thirdParty: {
        title: 'Servicios de Terceros',
        content:
          'Nuestro boletín informativo se gestiona a través de Substack. Al suscribirse a nuestro boletín informativo, su dirección de correo electrónico se comparte y almacena con Substack. Por favor, refiérase a la Política de Privacidad de Substack para entender cómo manejan su información.'
      },
      yourRights: {
        title: 'Sus Derechos',
        content:
          'Tiene derecho a darse de baja de nuestro boletín informativo en cualquier momento haciendo clic en el enlace de desuscripción en cualquier correo electrónico de nosotros o contactándonos directamente. Si tiene alguna pregunta sobre sus datos o desea acceder, corregir o eliminar su información, por favor contáctenos.'
      },
      changes: {
        title: 'Cambios a Esta Política',
        content:
          'Podemos actualizar esta Política de Privacidad en cualquier momento. Le notificaremos de cualquier cambio publicando la nueva Política de Privacidad en esta página.'
      },
      contact: {
        title: 'Contáctenos',
        content:
          'Si tiene alguna pregunta sobre esta Política de Privacidad, por favor contáctenos a través de la página de Contacto.'
      }
    },

    // Home page
    home: {
      hero: {
        title: 'Asegurando que la IA Beneficie a la Humanidad',
        paragraph1:
          'A medida que los modelos de inteligencia artificial avanzan en capacidades<sup>1</sup>, esperamos que tengan un impacto cada vez más profundo en nuestra sociedad<sup>2</sup>. Es esencial que este impacto sea positivo, y que las decisiones tomadas por estos sistemas sean transparentes, confiables y responsables<sup>3</sup> ante las personas afectadas por ellos.',
        paragraph2:
          'Creemos que reducir los riesgos asociados a modelos avanzados de IA<sup>4</sup> es uno de los desafíos más importantes de nuestro tiempo. También creemos que es un problema abierto y apasionante<sup>5</sup>, con amplias oportunidades para que más investigadores avancen en este campo<sup>6</sup>.',
        paragraph3:
          'La misión de BAISH es apoyar a estudiantes a entrar a este campo y a realizar investigaciones sobre este tema.',
        cta: 'Participa'
      },
      intro: {
        title: '¿Por qué es Importante la Seguridad de la IA?',
        paragraph1:
          'Los sistemas de IA avanzados son cada vez más capaces, con el potencial de transformar la sociedad de manera profunda. El campo de la Seguridad de la IA se enfoca en garantizar que estos sistemas estén alineados con los valores humanos y sean beneficiosos para la humanidad.',
        paragraph2:
          'En BAISH - Buenos Aires AI Safety Hub, reunimos a estudiantes de Ciencias de la Computación, Física , Matemáticas y demas entusiastas para entender y abordar estos desafíos a través de la investigación, la educación y la comunidad.',
        point1: 'Entendiendo las capacidades y riesgos de la IA',
        point2: 'Desarrollando técnicas de alineamiento',
        point3: 'Realizando investigación original',
        point4: 'Construyendo una comunidad de investigadores',
        learnMore: 'Más sobre Seguridad en IA →'
      },
      upcomingEvent: {
        title: 'Grupo de Discusión Semanal',
        time: '14:30 - 17:00',
        location: 'Pabellón 0+inf, Aula 1603, Ciudad Universitaria',
        description:
          'Sumate a nuestro grupo de discusión semanal sobre temas de seguridad en IA.',
        rsvp: 'Agregalo a tu calendario'
      },
      activities: {
        title: 'Nuestras Actividades',
        card1: {
          title: 'Cohorte de Fundamentos de Seguridad en AGI',
          description:
            'Un curso guiado de 8 semanas cubriendo los conceptos esenciales en alineamiento y seguridad de IA.',
          status: 'Comienza segundo semestre 2025',
          link: 'Ver Más →'
        },
        card2: {
          title: 'Grupo de Discusión Semanal',
          description:
            'Reuniones semanales para discutir papers recientes, conceptos y avances en seguridad de IA.',
          status: 'Cada Viernes @ 14:30 - 17:00',
          link: 'Ver Más →'
        },
        card3: {
          title: 'Club de Lectura de Papers',
          description:
            'Análisis profundos de papers fundamentales y recientes en investigación de seguridad de IA.',
          status: 'Cada Jueves @ 14:00 - 15:00',
          link: 'Ver Más →'
        },
        card4: {
          title: 'Curso de Interpretabilidad Mecanística',
          description:
            'Curso intensivo de 1 mes sobre métodos de interpretabilidad mecánistica.',
          status: 'Comienza en fines de Abril 2025',
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
          button: 'Sumate al grupo de Telegram'
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
            difficulty: 'Introductory',
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
            'Interpretabilidad mecánistica de redes neuronales',
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
          },
          luca: {
            name: 'Luca De Leo',
            title: 'Co-director Fundador',
            bio: 'Generalista de Operaciones con experiencia trabajando en Organizaciones de Seguridad en IA'
          },
          lucas: {
            name: 'Lucas Vitali',
            title: 'Director de Comunicación',
            bio: 'Estudiante de Ciencias de la Computación con pasión por la comunicación científica'
          },
          sergio: {
            name: 'Sergio Abriola, PhD',
            title: 'Advisor',
            bio: 'Doctor en Matemáticas y profesor con pasión por la seguridad en IA'
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
        status: 'Currently Active',
        description:
          'The AGI Safety Fundamentals cohort is an 8-week guided course covering the essential concepts in AI alignment and safety. Participants read curated materials and meet weekly to discuss the readings with a facilitator.',
        description2:
          'This program is based on the BlueDot AGI Safety Fundamentals curriculum and provides a structured introduction to the field of AI safety.',
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
        status: 'Cada Viernes @ 14:30 - 17:00',
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
          dateValue: '28 de Marzo, 2025',
          time: 'Hora:',
          timeValue: '14:30 - 17:00',
          location: 'Ubicación:',
          locationValue: 'Pabellón 0+inf, Aula 1603, Ciudad Universitaria',
          topic: 'Tema:',
          topicValue: 'A anunciar',
          facilitator: 'Facilitador:',
          facilitatorValue: 'Eitan Sprejer',
          button: 'Unite al Telegram para Actualizaciones'
        }
      },
      paperReading: {
        title: 'Club de Lectura de Papers',
        status: 'Cada Jueves @ 14:00 - 15:00',
        description:
          'El Club de Lectura de Papers realiza análisis profundos de papers fundamentales y recientes en investigación de seguridad en IA. A diferencia del grupo de discusión más casual, esta actividad implica un examen minucioso de papers de investigación específicos.',
        description2:
          'Participants are expected to read the selected paper in advance and come prepared to discuss its methods, results, and implications.',
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
          paperValue:
            '"Interpretabilidad Mecanística para Modelos de Lenguaje"',
          lead: 'Líder de Discusión:',
          leadValue: 'Eitan Sprejer',
          button: 'Acceder a la Lista de Lectura'
        }
      },
      mechInterp: {
        title: 'Curso de Interpretabilidad Mecanística',
        status: 'Comienza en fines de Abril 2025',
        description:
          'El Curso de Interpretabilidad Mecanística es un programa intensivo de 1 mes enfocado en técnicas para entender los mecanismos internos de las redes neuronales. Este curso combina aprendizaje teórico con proyectos prácticos.',
        description2:
          'La interpretabilidad mecánistica es un área clave de la investigación en seguridad de IA, que busca hacer que los sistemas de IA sean más transparentes y comprensibles.',
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
      pageHeader: {
        breadcrumb: 'Inicio / Recursos',
        title: 'Recursos de Aprendizaje',
        subtitle:
          'Materiales curados para explorar conceptos de seguridad en IA y nuestro archivo de boletines'
      },
      learningPathways: {
        title: 'Caminos de Aprendizaje',
        intro:
          'Hemos organizado recursos en tres caminos de aprendizaje según tu formación y nivel de experiencia.',
        pathways: {
          beginners: {
            title: 'Principiantes',
            difficulty: 'Accesible para Todos',
            description:
              'Para quienes son nuevos en los conceptos de seguridad en IA y quieren entender las ideas y preocupaciones principales.',
            resources: {
              resource1: {
                title: 'Future of Life Institute: Introducción a Riesgos de IA',
                type: 'Panorama General'
              },
              resource2: {
                title: 'Cold Takes: Serie sobre IA Transformativa',
                type: 'Serie de Blog'
              },
              resource3: {
                title: 'Rob Miles: Intro a Seguridad en IA',
                type: 'Video'
              },
              resource4: {
                title: '80,000 Hours: Perfil del Problema de Riesgo de IA',
                type: 'Panorama General'
              },
              resource5: {
                title: 'Wiki de Seguridad en IA de Stampy',
                type: 'Wiki'
              }
            },
            button: 'Obtener Recomendaciones para Principiantes'
          },
          intermediate: {
            title: 'Intermedio',
            difficulty: 'Algo de Formación Técnica',
            description:
              'Para quienes tienen algún conocimiento de aprendizaje automático y quieren explorar los desafíos centrales de la seguridad en IA.',
            resources: {
              resource1: {
                title: 'Plan de Estudios de Fundamentos de Seguridad en AGI',
                type: 'Materiales de Curso'
              },
              resource2: {
                title: 'Fundamentos de Alineamiento Técnico',
                type: 'Lista de Lectura'
              },
              resource3: {
                title: 'Anthropic: Visiones Centrales sobre Seguridad en IA',
                type: 'Perspectiva de Empresa'
              },
              resource4: {
                title:
                  'Entrenando Modelos de Lenguaje para Seguir Instrucciones',
                type: 'Paper de Investigación'
              },
              resource5: {
                title: 'DeepLearning.AI: Técnicas de Alineamiento para LLMs',
                type: 'Curso'
              }
            },
            button: 'Obtener Recomendaciones Intermedias'
          },
          advanced: {
            title: 'Avanzado',
            difficulty: 'Sólida Formación Técnica',
            description:
              'Para quienes tienen sólidos conocimientos de ML/IA y quieren involucrarse en investigación de vanguardia.',
            resources: {
              resource1: {
                title: 'Distill: Hilo de Circuitos',
                type: 'Investigación de Interpretabilidad'
              },
              resource2: {
                title: 'Anthropic: Circuitos de Transformer',
                type: 'Serie de Investigación'
              },
              resource3: {
                title:
                  'Descubriendo Conocimiento Latente en Modelos de Lenguaje',
                type: 'Paper de Investigación'
              },
              resource4: {
                title: 'Agentes de Lenguaje para Investigación de Alineamiento',
                type: 'Paper de Investigación'
              },
              resource5: {
                title: 'Alignment Forum: Conceptos Avanzados',
                type: 'Discusión Técnica'
              }
            },
            button: 'Obtener Recomendaciones Avanzadas'
          }
        }
      },
      recommendedBooks: {
        title: 'Libros Recomendados',
        books: {
          book1: {
            title: 'Uncontrollable',
            author: 'Darren McKee (2023)',
            description:
              'Uncontrollable utiliza analogías atractivas y ejemplos relacionables para resumir la IA para principiantes, y explica el riesgo y la seguridad de la IA para lectores sin formación técnica.'
          },
          book2: {
            title: 'Human Compatible',
            author: 'Stuart Russell (2019)',
            description:
              'Un caso convincente de un investigador líder en IA sobre cómo asegurar que la inteligencia artificial siga siendo beneficiosa para la humanidad.'
          },
          book3: {
            title: 'Superintelligence',
            author: 'Nick Bostrom (2014)',
            description:
              'Explora los riesgos potenciales y caminos hacia la IA superinteligente, abordando preguntas clave sobre el futuro de la inteligencia.'
          },
          book4: {
            title: 'The Alignment Problem',
            author: 'Brian Christian (2020)',
            description:
              'Una exploración del creciente campo del alineamiento de IA, explicando conceptos técnicos de manera accesible.'
          },
          book5: {
            title: 'Life 3.0',
            author: 'Max Tegmark (2017)',
            description:
              'Examina cómo la inteligencia artificial podría afectar la vida en el futuro y qué elecciones enfrentamos al dar forma a ese futuro.'
          }
        }
      }
    },

    // Contact pages
    contact: {
      pageHeader: {
        breadcrumb: 'Inicio / Contacto',
        title: 'Contactanos',
        subtitle: 'Comunicate con la comunidad de BAISH'
      },
      contactInfo: {
        email: {
          title: 'Email',
          description: 'Para consultas generales, sugerencias o preguntas:'
        },
        telegram: {
          title: 'Telegram',
          description:
            'Únete al canal de la comunidad para discusiones y actualizaciones:'
        },
        location: {
          title: 'Ubicación',
          description:
            'Estamos ubicados en el Departamento de Ciencias de la Computación:'
        },
        socialMedia: {
          title: 'Medios Sociales',
          description: 'Síguenos para actualizaciones y anuncios:'
        }
      },
      getInvolved: {
        title: 'Sumate',
        intro:
          'Hay múltiples formas de participar en nuestra comunidad y actividades.',
        mailingList: {
          title: 'Suscribite a Nuestra Lista de Correo',
          description:
            'Mantenete al día con nuestros eventos, actividades y oportunidades suscribiéndote a nuestra lista de correo. Te enviamos newsletters mensuales y anuncios importantes.'
        }
      },
      form: {
        name: '¿Cuál es tu nombre?',
        email: '¿Cuál es tu correo electrónico?',
        message: 'Mensaje',
        clear: 'Limpiar formulario',
        submit: 'Enviar'
      },
      faq: {
        title: 'Preguntas Frecuentes',
        questions: {
          q1: {
            question: '¿Necesito ser estudiante de la UBA para participar?',
            answer:
              'La mayoría de nuestras actividades están principalmente diseñadas para estudiantes de la UBA, pero estamos abiertos a participantes de otras universidades para nuestras reuniones de grupo y sesiones de lectura de papeles. Los becarios de investigación actualmente están limitados a estudiantes de la UBA.'
          },
          q2: {
            question: '¿Qué antecedentes necesito para participar?',
            answer:
              'Esto varía por actividad. Nuestras reuniones de grupo están abiertas a cualquier persona con interés en la seguridad en IA, independientemente del fondo técnico. Para actividades más técnicas como el curso de Interpretabilidad Mecanística o el becario de investigación, se espera algún conocimiento en ciencias de la computación, matemáticas o IA/ML.'
          },
          q3: {
            question: '¿Se realizan tus actividades en inglés o español?',
            answer:
              'Realizamos la mayoría de nuestras actividades en ambos idiomas. Las reuniones de grupo son típicamente en español, mientras que algunas sesiones técnicas pueden ser en inglés, especialmente cuando se utilizan materiales de fuentes internacionales. Nuestros materiales escritos están disponibles en ambos idiomas siempre que sea posible.'
          },
          q4: {
            question:
              '¿Cómo puedo empezar a aprender sobre seguridad en IA si soy un principiante completo?',
            answer:
              'Te recomendamos empezar con nuestros recursos principiantes en la página de Recursos y unirte a nuestro grupo de reuniones de grupo. El grupo de reuniones de grupo es un gran lugar para hacer preguntas y aprender de otros en un entorno informal.'
          },
          q5: {
            question:
              '¿Puedo proponer una nueva actividad o dirección de investigación?',
            answer:
              '¡Por supuesto! Estamos siempre abiertos a nuevas ideas. Contáctanos en aisafetyarg@gmail.com con tu propuesta y uno de nuestros coordinadores te lo discutirá con vos.'
          }
        }
      }
    },

    // Research page
    research: {
      pageHeader: {
        breadcrumb: 'Investigación',
        title: 'Nuestra Investigación',
        subtitle:
          'Proyectos dirigidos por estudiantes que exploran desafíos críticos de la seguridad de la IA'
      },
      overview: {
        approach: {
          title: 'Enfoque de Investigación',
          paragraph1:
            'En BAISH - Buenos Aires AI Safety Hub, apoyamos la investigación liderada por estudiantes sobre los desafíos fundamentales de la seguridad de la IA. Nuestros proyectos van desde el trabajo técnico en interpretabilidad y alineación hasta exploraciones más conceptuales de gobernanza y ética de la IA.',
          paragraph2:
            'Los proyectos de investigación se realizan típicamente a través de nuestro programa de Becas de Investigación o como colaboraciones entre estudiantes y profesores. Fomentamos métodos rigurosos, pensamiento creativo y enfoques interdisciplinarios.'
        },
        focusAreas: {
          title: 'Áreas de Enfoque',
          interpretability:
            '<strong>Interpretabilidad y Transparencia</strong> - Entender cómo las redes neuronales representan y procesan información',
          alignment:
            '<strong>Técnicas de Alineación</strong> - Desarrollar métodos para alinear sistemas de IA con valores e intenciones humanas',
          robustness:
            '<strong>Robustez</strong> - Crear sistemas de IA que mantengan un comportamiento seguro en nuevos entornos',
          valueLearning:
            '<strong>Aprendizaje de Valores</strong> - Inferir preferencias humanas a partir de retroalimentación y demostración'
        }
      },
      projects: {
        title: 'Proyectos de Investigación',
        filterBy: 'Filtrar por:',
        filters: {
          all: 'Todos',
          interpretability: 'Interpretabilidad',
          alignment: 'Alineación',
          robustness: 'Robustez',
          valueLearning: 'Aprendizaje de Valores'
        }
      },
      publications: {
        title: 'Publicaciones',
        intro:
          'Publicaciones seleccionadas de nuestros miembros en revistas revisadas por pares.'
      },
      ongoingResearch: {
        title: 'Investigación en Curso',
        intro:
          'Proyectos actuales en desarrollo por nuestros becarios de investigación y colaboradores.'
      },
      joinResearch: {
        title: '¿Interesado en Realizar Investigación con Nosotros?',
        description:
          'Damos la bienvenida a estudiantes de Ciencias de la Computación, Matemáticas, Física y campos relacionados para unirse a nuestros esfuerzos de investigación. Ya sea que seas un estudiante de pregrado buscando experiencia en investigación o un estudiante de posgrado interesado en la seguridad de la IA, tenemos oportunidades para ti.',
        buttons: {
          fellowships: 'Conoce las Becas de Investigación',
          contact: 'Contacta a los Coordinadores de Investigación'
        }
      }
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
