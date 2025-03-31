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
      mechInterpCourse: 'Mech Interp Course',
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
        subtitle:
          "BAISH's student-led initiative exploring safe and beneficial AI development",
        paragraph1_part1:
          'As artificial intelligence models advance in capabilities',
        paragraph1_part2:
          ', we expect them to have an increasingly profound impact on our society',
        paragraph1_part3:
          '. It is essential that this impact is positive, and that the decisions made by these systems are transparent, reliable, and accountable',
        paragraph1_part4: ' to the people affected by them.',
        paragraph2_part1:
          'We believe that reducing the risks associated with advanced AI models',
        paragraph2_part2:
          ' is one of the most important challenges of our time. We also believe it is an open and exciting problem',
        paragraph2_part3:
          ', with ample opportunities for more researchers to advance in this field',
        paragraph2_part4: '.',
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
        title: 'Weekly Discussion Group: Interpretability Methods',
        eventType: 'Upcoming Event',
        time: '18:00 - 19:30',
        location: 'Pabellon 0+inf, Room 1604, Ciudad Universitaria',
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
          status: 'Starting in the second semester',
          link: 'Learn More →'
        },
        card2: {
          title: 'Weekly Discussion Group',
          description:
            'Weekly meetings to discuss recent papers, concepts, and developments in AI safety.',
          status: 'Every Friday @ 3pm',
          link: 'Learn More →'
        },
        card3: {
          title: 'Paper Reading Club',
          description: 'Student led presentations of AI Safety papers.',
          status: 'Every Thursday @ 2pm',
          link: 'Learn More →'
        },
        card4: {
          title: 'Mech Interp Course',
          description:
            'Intensive 1-month course on mechanistic interpretability methods.',
          status: 'Starts end of April 2025',
          link: 'Learn More →'
        },
        discussion: {
          title: 'Weekly Discussion Group',
          description:
            'Join our weekly discussion group on AI safety topics and recent field advancements.',
          addToCalendar: 'Add to Calendar'
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
      },
      events: {
        // Added new events section
        title: 'Upcoming Events',
        description:
          'Join our upcoming events, discussions, and workshops on AI safety. All events are open to the community.'
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
        status: 'Starting in the second semester',
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
        },
        viewCurriculumButton: 'View Curriculum'
      },
      weeklyDiscussion: {
        title: 'Weekly Discussion Group',
        status: 'Every Tuesday @ 3pm',
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
          dateValue: 'March 25, 2025',
          time: 'Time:',
          timeValue: '18:00 - 19:30',
          location: 'Location:',
          locationValue: 'Pabellón 0+inf, Room 1604, Ciudad Universitaria',
          topic: 'Topic:',
          topicValue: 'Interpretability Methods',
          facilitator: 'Facilitator:',
          facilitatorValue: 'Eitan Sprejer',
          button: 'Join Telegram for Updates'
        }
      },
      paperReading: {
        title: 'Paper Reading Club',
        status: 'Every Thursday @ 2pm',
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
          locationValue: 'Pabellón 0+inf, Room 1604, Ciudad Universitaria',
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
        },
        viewCourseButton: 'View Detailed Course Information'
      },
      calendar: {
        title: 'Upcoming Events Calendar',
        subscribe: 'Subscribe to Google Calendar for All Events',
        subscribeLuma: 'Subscribe to Events Calendar' // Added Luma button text
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
            '<strong>Interpretabilidad y Transparencia</strong> - Understanding how neural networks represent and process information',
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
          interpretability: 'Interpretabilidad',
          alignment: 'Alineación',
          robustness: 'Robustez',
          valueLearning: 'Aprendizaje de Valores'
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
    },

    // Mech Interp Course page
    mechInterpCourse: {
      pageHeader: {
        title: 'Mechanistic Interpretability Course',
        subtitle:
          'A comprehensive introduction to Mechanistic Interpretability for Large Language Models'
      },
      backToHome: '← Back to Home',
      intro: {
        paragraph1:
          'This is a quick 4-session course designed to introduce the field of Mechanistic Interpretability for Large Language Models (LLMs). The course includes theoretical materials, introduces Python libraries for interpretability, discusses recent papers in the field (published by organizations such as Anthropic and Google DeepMind), and provides practical exercises.',
        paragraph2:
          'The field of Mechanistic Interpretability has rapidly gained popularity in recent years, with more than 90 papers accepted at ICML 2024. Its main goal is to understand the logic behind the decisions of machine learning models. This knowledge can be applied to improve transparency and trust in existing models, as well as to better understand how these models learn.',
        paragraph3:
          'Shortly after the completion of this course, BAISH will organize a Mechanistic Interpretability Hackathon at FGV — details to be announced! We strongly recommend that anyone interested in participating in the Hackathon complete this course as an introduction to the topic, which will also increase their chances of receiving an award in the competition.'
      },
      schedule: {
        title: 'Course Schedule',
        session1: {
          title: 'Session 1 - Transformers and Interpretability',
          date: 'August 23, Friday, starting at 2:30 PM',
          location: 'Auditorium 537',
          scheduleTitle: 'Schedule:',
          preparationTitle: 'Preparation:',
          preparation: 'Handbook Chapters 2 and 3',
          part1: '45 min: Introduction to transformers and attention',
          part2: '20 min: Coffee break',
          part3: '45 min: Introduction to Mechanistic Interpretability',
          part4: '30 min: Coding: PyTorch and TransformerLens',
          materialsTitle: 'Materials:',
          handbookTitle: 'Handbook:',
          papersTitle: 'Papers:',
          codingTitle: 'Coding:',
          videosTitle: 'Videos:'
        },
        session2: {
          title: 'Session 2 - Circuits',
          date: 'August 30, Friday, starting at 2:30 PM',
          location: 'Auditorium 418',
          scheduleTitle: 'Schedule:',
          preparationTitle: 'Preparation:',
          preparation: 'Handbook Chapters 3 and 4',
          part1: '40 min: Circuits and the induction circuit',
          part2:
            '20 min: Exploration of the paper "A Mathematical Framework for Transformer Circuits"',
          part3: '20 min: Coffee break',
          part4: '60 min: Coding: circuit discovery'
        },
        session3: {
          title: 'Session 3 - Superposition',
          date: 'September 6, Friday, starting at 2:30 PM',
          location: 'Auditorium 537',
          scheduleTitle: 'Schedule:',
          preparationTitle: 'Preparation:',
          preparation: 'Handbook Chapter 5',
          part1: '30 min: Superposition',
          part2:
            '30 min: 3Blue1Brown video "How might LLMs store facts" and discussion',
          part3: '20 min: Coffee break',
          part4: '60 min: Coding: superposition in toy models'
        },
        session4: {
          title: 'Session 4 - Sparse Autoencoders (SAE)',
          date: 'September 13, Friday, starting at 3:00 PM',
          location: 'Auditorium 418',
          scheduleTitle: 'Schedule:',
          preparationTitle: 'Preparación:',
          preparation: 'Handbook Chapter 6',
          part1: '30 min: Sparse Autoencoders (SAE) and practical exploration',
          part2:
            '30 min: Exploration of the papers "Towards Monosemanticity: Decomposing Language Models With Dictionary Learning" and "Scaling Monosemanticity: Extracting Interpretable Features from Claude 3 Sonnet"',
          part3: '20 min: Coffee break',
          part4: '40 min: Coding: Using SAEs',
          part5: '30 min: New areas of exploration and tips for the Hackathon!'
        }
      },
      resources: {
        title: 'Additional Resources',
        opportunitiesTitle: 'Opportunities',
        arenaTitle: 'ARENA',
        arenaDescription:
          'Opportunity to spend 4 weeks in London studying practical content relevant to AI Safety research',
        arenaButton: 'Learn More',
        matsTitle: 'MATS',
        matsDescription:
          'Program to start research in AI Safety with guidance from mentors with extensive experience in the field. Several authors of papers used in this course are MATS mentors.',
        matsButton: 'View Mentors'
      }
    },

    // Handbook common elements
    handbook: {
      tableOfContents: 'Table of Contents',
      prevChapter: '← Previous Chapter',
      nextChapter: 'Next Chapter →',
      noNextChapter: 'End of Handbook',
      furtherReading: 'Further Reading',
      backToHome: '← Back to Course',

      // Chapter 4: Circuits
      chapter4: {
        title: 'Chapter 4: Circuits',
        subtitle:
          'Understanding circuit-based interpretability in neural networks',
        sections: {
          intro: 'Introduction to Circuits',
          defining: 'Defining Neural Circuits',
          induction: 'The Induction Circuit',
          discovery: 'Circuit Discovery Methods',
          examples: 'Practical Examples',
          conclusion: 'Conclusion'
        },
        intro: {
          p1: 'The "circuits" framework is a key concept in mechanistic interpretability, offering a way to understand how neural networks process information through connected components that collectively implement specific functions.',
          p2: 'This chapter explores how circuit-based interpretability helps us reverse-engineer the computations performed by neural networks, with a focus on transformer architectures used in large language models.'
        },
        defining: {
          p1: 'A neural circuit is a subset of a neural network that implements a specific, identifiable function. Circuits consist of neurons (or groups of neurons) connected across layers that collectively perform a computation.',
          p2: 'Key properties of circuits include:',
          list1:
            'Modularity: Circuits can be studied in isolation from the rest of the network',
          list2:
            'Functionality: Circuits implement specific, meaningful computations',
          list3:
            'Composition: Complex behaviors emerge from combinations of simpler circuits',
          list4:
            'Distributed representation: Information is often represented across multiple neurons rather than in individual neurons'
        },
        induction: {
          p1: 'The induction circuit is one of the most well-studied circuits in transformer models. This circuit enables language models to continue patterns like "A, B, A, B, A, ?" with "B".',
          p2: 'The circuit works by:',
          step1:
            'Detecting when a token has appeared previously in the sequence',
          step2:
            'Identifying what token came after it in that previous occurrence',
          step3:
            'Predicting that the same token will follow in the current context',
          p3: 'This circuit involves specific attention heads working together across layers:',
          component1:
            'Previous token detection: Attention heads that look for repeated tokens',
          component2:
            'Information copying: Mechanisms to retrieve what followed the previous occurrence',
          component3:
            'Output projection: Components that influence the final prediction'
        },
        discovery: {
          p1: 'Identifying circuits within neural networks involves several techniques:',
          method1title: 'Activation Patching',
          method1:
            'This involves replacing activations at specific locations in the network when processing one input with activations from another input, then observing how the output changes. It helps identify which components are causally important for a given task.',
          method2title: 'Causal Mediation Analysis',
          method2:
            'This approach quantifies how much specific paths in the network contribute to a particular prediction, helping identify the most important connections.',
          method3title: 'Attention Analysis',
          method3:
            'Examining attention patterns can reveal which parts of the input sequence influence other parts, providing insights into information flow.'
        },
        examples: {
          p1: 'Beyond induction, researchers have identified several other circuits:',
          circuit1:
            'Indirect Object Identification: Circuits that track relationships between subjects, verbs, and objects in sentences',
          circuit2:
            'Negation Circuits: Components that detect and process negation in text',
          circuit3:
            'Name Mover Circuits: Mechanisms for tracking and referencing entities throughout a text',
          p2: 'These examples demonstrate how complex language understanding emerges from specific circuit implementations.'
        },
        conclusion: {
          p1: 'The circuits framework provides a powerful approach for understanding how neural networks implement specific functions. By identifying and studying these circuits, researchers can gain insights into how models process information and make predictions.',
          p2: 'This understanding is crucial for improving interpretability, enhancing model safety, and developing more reliable AI systems. The next chapter will explore how neural networks handle information when they have limited capacity through the concept of superposition.'
        },
        reading1: 'In-context Learning and Induction Heads',
        reading2: 'A Mathematical Framework for Transformer Circuits',
        reading3: 'Zoom In: An Introduction to Circuits'
      },

      // Chapter 5: Superposition
      chapter5: {
        title: 'Chapter 5: Superposition',
        subtitle:
          'Understanding how neural networks represent more features than they have dimensions',
        sections: {
          intro: 'Introduction to Superposition',
          competition: 'Feature Competition',
          polysemanticity: 'Polysemanticity',
          toyModels: 'Toy Models of Superposition',
          implications: 'Implications for Interpretability',
          conclusion: 'Conclusion'
        },
        intro: {
          p1: 'Superposition refers to the phenomenon where neural networks represent more features than they have neurons or dimensions. This occurs because networks often need to track many more features than they have parameters available to represent them individually.',
          p2: 'The concept was formalized in the paper "Toy Models of Superposition" by Anthropic, which demonstrated how networks can encode multiple features in a lower-dimensional space by exploiting the geometry of feature co-occurrence patterns.'
        },
        competition: {
          p1: 'When a neural network has fewer dimensions than the features it needs to represent, these features must "compete" for representation space. The network learns to allocate its limited representational capacity efficiently.',
          p2: 'Key factors that influence which features get represented include:',
          list1:
            'Frequency: More common features are more likely to be represented',
          list2:
            'Importance: Features that strongly affect the loss function are prioritized',
          list3:
            'Correlation: Features that often co-occur can share representation space',
          list4:
            'Orthogonality: Features that can be represented in orthogonal directions are easier to separate'
        },
        polysemanticity: {
          p1: 'Polysemanticity is a direct consequence of superposition. It refers to the phenomenon where individual neurons or network directions respond to multiple unrelated features.',
          p2: 'In a polysemantic network:',
          list1:
            'Single neurons may respond to multiple semantically distinct concepts',
          list2: 'Feature representations are distributed across many neurons',
          list3:
            'There may not be a clear one-to-one mapping between network components and human-interpretable concepts',
          p3: 'This makes interpretation challenging, as we cannot simply analyze individual neurons to understand what the network is representing.'
        },
        toyModels: {
          p1: 'Researchers have developed simplified models to study superposition. These toy models help illustrate how networks can embed many features in lower-dimensional spaces.',
          p2: 'A typical toy model might involve:',
          step1:
            'Generating synthetic data with a known number of sparse features',
          step2: 'Training a model with fewer dimensions than features',
          step3:
            'Analyzing how the model represents these features in its limited space',
          p3: 'These experiments have revealed that networks can use clever geometric arrangements to encode features efficiently, often exploiting properties like sparsity (features rarely appearing simultaneously).'
        },
        implications: {
          p1: 'Superposition poses several challenges for interpretability research:',
          list1:
            'Direct neuron analysis may reveal misleading or incomplete information',
          list2:
            'Features may be encoded in complex, distributed patterns across many neurons',
          list3:
            'Simple linear probing techniques may fail to detect important features',
          p2: 'However, understanding superposition also provides opportunities:',
          list4:
            'It suggests focusing on finding the right basis for analysis, rather than examining individual neurons',
          list5:
            'Techniques like Sparse Autoencoders (covered in the next chapter) can help extract features from superposed representations',
          list6:
            'Knowledge of superposition patterns can inform better training and architecture design'
        },
        conclusion: {
          p1: 'Superposition is a fundamental property of neural networks that arises when they need to represent more features than they have dimensions. This leads to polysemantic neurons and distributed representations that complicate interpretability efforts.',
          p2: 'Understanding superposition is essential for developing effective methods to interpret neural networks, especially large language models with billions of parameters tracking potentially trillions of features. The next chapter will explore how Sparse Autoencoders can help address this challenge by disentangling these superposed representations.'
        },
        reading1: 'Toy Models of Superposition (Anthropic)',
        reading2:
          'Progress Measures for Grokking via Mechanistic Interpretability',
        reading3: '3Blue1Brown: How LLMs might store facts?'
      },

      // Chapter 6: Sparse Autoencoders
      chapter6: {
        title: 'Chapter 6: Sparse Autoencoders',
        subtitle:
          'Using Sparse Autoencoders to disentangle superposition in neural networks',
        sections: {
          intro: 'Introduction to Sparse Autoencoders',
          architecture: 'Architecture and Training',
          features: 'Feature Extraction',
          applications: 'Applications in Interpretability',
          research: 'Recent Research',
          conclusion: 'Conclusion'
        },
        intro: {
          p1: 'As we saw in the previous chapter, neural networks often represent information in a superposed manner, with many features sharing the same neurons or dimensions. This polysemanticity makes interpretation challenging. Sparse Autoencoders (SAEs) are a powerful tool designed to address this challenge by disentangling these superposed representations.',
          p2: 'The goal of an SAE is to transform the polysemantic, distributed representations in a neural network into a monosemantic, sparse representation, where each feature corresponds to a specific, interpretable concept.'
        },
        architecture: {
          p1: 'A Sparse Autoencoder consists of:',
          list1:
            "An encoder network that maps the original neural network's activations to a higher-dimensional, sparse space",
          list2:
            'A decoder network that reconstructs the original activations from this sparse representation',
          p2: 'The key constraints in training an SAE are:',
          constraint1:
            'Reconstruction loss: The decoder should accurately reconstruct the original activations',
          constraint2:
            'Sparsity constraint: Each input should activate only a small number of features in the encoded representation',
          p3: "These constraints ensure that the SAE learns a dictionary of interpretable features that can be activated individually or in small groups to represent the network's internal states."
        },
        features: {
          p1: 'After training an SAE on a large dataset of activations from a neural network, we can analyze the features it has learned:',
          list1:
            'Each feature can be visualized by examining what types of inputs most strongly activate it',
          list2:
            'Features can be named based on the patterns they recognize (e.g., "quotes detector" or "multiplication operator")',
          list3:
            "The dictionary of features provides a new basis for understanding the network's internal representations",
          p2: "Unlike analyzing individual neurons, SAE features often correspond to meaningful, human-interpretable concepts because they're designed to disentangle the superposed representations."
        },
        applications: {
          p1: 'Sparse Autoencoders can be used for various interpretability tasks:',
          task1title: 'Circuit Discovery',
          task1:
            'By tracking which SAE features activate in response to specific inputs, researchers can identify the computational circuits within the network.',
          task2title: 'Feature Attribution',
          task2:
            'SAEs can help determine which features contribute to specific predictions, providing insight into how the model makes decisions.',
          task3title: 'Editing Model Behavior',
          task3:
            "Once interpretable features are identified, it's possible to modify the model's behavior by intervening on specific features, potentially enabling safer AI systems."
        },
        research: {
          p1: 'Recent advances in SAE research include:',
          advance1:
            'Scaling SAEs to larger models, such as Claude 3 Sonnet by Anthropic',
          advance2:
            'Improving training techniques to identify more interpretable features',
          advance3:
            'Developing automatic methods to name and categorize the discovered features',
          advance4:
            'Using SAEs to understand higher-level abstractions in language models',
          p2: 'Papers like "Towards Monosemanticity: Decomposing Language Models With Dictionary Learning" and "Scaling Monosemanticity: Extracting Interpretable Features from Claude 3 Sonnet" demonstrate the potential of SAEs for understanding increasingly complex models.'
        },
        conclusion: {
          p1: 'Sparse Autoencoders represent one of the most promising approaches for addressing the superposition problem in neural networks. By transforming polysemantic representations into monosemantic features, SAEs provide a powerful tool for mechanistic interpretability.',
          p2: 'As research in this area continues to advance, SAEs may play a crucial role in building more transparent, trustworthy, and alignable AI systems. Understanding the internal workings of neural networks is not just an academic pursuit but a practical necessity as these systems become increasingly powerful and integrated into our society.'
        },
        reading1:
          'Towards Monosemanticity: Decomposing Language Models With Dictionary Learning',
        reading2:
          'Scaling Monosemanticity: Extracting Interpretable Features from Claude 3 Sonnet',
        reading3: 'SolidGoldMagikarp & Indirect Object Identification'
      }
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
      mechInterpCourse: 'Curso Mech Interp',
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
        title: 'Nuestro Enfoque de Privacidad',
        content:
          'En BAISH (Buenos Aires AI Safety Hub), estamos comprometidos a respetar tu privacidad. Esta Política de Privacidad describe nuestras prácticas con respecto a la recopilación, uso y protección de tu información cuando utilizas nuestro sitio web y servicios.'
      },
      dataCollection: {
        title: 'Recopilación de Datos',
        content:
          'Recopilamos información personal mínima. Los únicos datos personales que recopilamos son las direcciones de correo electrónico cuando los usuarios se registran voluntariamente para recibir nuestro boletín a través de Substack. Esta información es almacenada y gestionada por Substack de acuerdo con su política de privacidad.'
      },
      noTracking: {
        title: 'Sin Seguimiento ni Cookies',
        content:
          'No utilizamos cookies, análisis, herramientas de seguimiento ni ninguna otra tecnología para recopilar datos sobre ti. No monitoreamos tus actividades de navegación ni recopilamos información sobre tus comportamientos en línea.'
      },
      thirdParty: {
        title: 'Servicios de Terceros',
        content:
          'Nuestro boletín se gestiona a través de Substack. Cuando te suscribes a nuestro boletín, tu dirección de correo electrónico se comparte y almacena con Substack. Consulta la Política de Privacidad de Substack para comprender cómo manejan tu información.'
      },
      yourRights: {
        title: 'Tus Derechos',
        content:
          'Tienes derecho a cancelar la suscripción a nuestro boletín en cualquier momento haciendo clic en el enlace para cancelar la suscripción en cualquiera de nuestros correos electrónicos o contactándonos directamente. Si tienes alguna pregunta sobre tus datos o deseas acceder, corregir o eliminar tu información, contáctanos.'
      },
      changes: {
        title: 'Cambios a Esta Política',
        content:
          'Podemos actualizar esta Política de Privacidad de vez en cuando. Te notificaremos cualquier cambio publicando la nueva Política de Privacidad en esta página.'
      },
      contact: {
        title: 'Contáctanos',
        content:
          'Si tienes alguna pregunta sobre esta Política de Privacidad, contáctanos a través de nuestra página de Contacto.'
      }
    },

    // Home page
    home: {
      hero: {
        title: 'Asegurando que la IA Beneficie a la Humanidad',
        subtitle:
          'Iniciativa estudiantil de BAISH explorando el desarrollo seguro y beneficioso de la IA',
        paragraph1_part1:
          'A medida que los modelos de inteligencia artificial avanzan en capacidades',
        paragraph1_part2:
          ', esperamos que tengan un impacto cada vez más profundo en nuestra sociedad',
        paragraph1_part3:
          '. Es esencial que este impacto sea positivo, y que las decisiones tomadas por estos sistemas sean transparentes, confiables y responsables',
        paragraph1_part4: ' ante las personas afectadas por ellos.',
        paragraph2_part1:
          'Creemos que reducir los riesgos asociados a modelos avanzados de IA',
        paragraph2_part2:
          ' es uno de los desafíos más importantes de nuestro tiempo. También creemos que es un problema abierto y apasionante',
        paragraph2_part3:
          ', con amplias oportunidades para que más investigadores avancen en este campo',
        paragraph2_part4: '.',
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
        title: 'Grupo de Discusión Semanal: Métodos de Interpretabilidad',
        eventType: 'Próximo Evento',
        time: '18:00 - 19:30',
        location: 'Pabellón 0+inf, Aula 1603, Ciudad Universitaria',
        description:
          'Sumate a una discusión interactiva sobre avances recientes en métodos de interpretabilidad de redes neuronales y sus implicaciones para el alineamiento de la IA.',
        rsvp: 'Agregalo a tu calendario'
      },
      activities: {
        title: 'Nuestras Actividades',
        card1: {
          title: 'Cohorte de Fundamentos de Seguridad en AGI',
          description:
            'Un curso guiado de 8 semanas cubriendo los conceptos esenciales en alineamiento y seguridad de IA.',
          status: 'Comienza en el segundo semestre',
          link: 'Ver Más →'
        },
        card2: {
          title: 'Grupo de Discusión Semanal',
          description:
            'Reuniones semanales para discutir papers recientes, conceptos y avances en seguridad de IA.',
          status: 'Todos los martes a las 14:30',
          link: 'Saber Más →'
        },
        card3: {
          title: 'Club de Lectura de Papers',
          description:
            'Presentaciones de estudiantes sobre papers de Seguridad en IA.',
          status: 'Todos los martes a las 14:00',
          link: 'Saber Más →'
        },
        card4: {
          title: 'Curso de Interpretabilidad Mecanística',
          description:
            'Curso intensivo de 1 mes sobre métodos de interpretabilidad mecánica.',
          status: 'Comienza en fines de Abril 2025',
          link: 'Saber Más →'
        },
        discussion: {
          title: 'Grupo de Discusión Semanal',
          description:
            'Sumate a nuestro grupo de discusión semanal sobre temas de seguridad de IA y avances recientes del campo.',
          addToCalendar: 'Agregalo a tu calendario'
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
          title: 'Sumate a Nuestra Comunidad de Telegram',
          description:
            'Conectate con otros estudiantes interesados en la seguridad de la IA.',
          button: 'Sumate al grupo de Telegram'
        }
      },
      events: {
        // Added new events section
        title: 'Próximos Eventos',
        description:
          'Sumate a nuestros próximos eventos, discusiones y talleres sobre seguridad de la IA. Todos los eventos están abiertos a la comunidad.'
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
        status: 'Comienza en el segundo semestre',
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
        },
        viewCurriculumButton: 'Ver Plan de Estudios'
      },
      weeklyDiscussion: {
        title: 'Grupo de Discusión Semanal',
        status: 'Todos los martes a las 14:30',
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
          button: 'Sumate al Telegram para Actualizaciones'
        }
      },
      paperReading: {
        title: 'Club de Lectura de Papers',
        status: 'Todos los martes a las 14:00',
        description:
          'Profundizamos en papers fundacionales y recientes sobre investigación en seguridad de IA. Se espera que los participantes lean el paper seleccionado con antelación y vengan preparados para discutir.',
        description2:
          'Se espera que los participantes lean el paper seleccionado con antelación y vengan preparados para discutir sus métodos, resultados e implicaciones.',
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
        },
        viewCourseButton: 'Ver Información Detallada del Curso'
      },
      calendar: {
        title: 'Calendario de Próximos Eventos',
        subscribe: 'Suscribirse al Calendario de Google de Todos los Eventos',
        subscribeLuma: 'Suscribirse al Calendario de Eventos' // Added Luma button text
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
    },

    // Mech Interp Course page
    mechInterpCourse: {
      pageHeader: {
        title: 'Curso de Interpretabilidad Mecanística',
        subtitle:
          'Una introducción completa a la Interpretabilidad Mecanística para Modelos de Lenguaje Grande'
      },
      backToHome: '← Volver al Inicio',
      intro: {
        paragraph1:
          'Este es un curso rápido de 4 sesiones diseñado para introducir el campo de la Interpretabilidad Mecanística para Modelos de Lenguaje Grandes (LLMs). El curso incluye materiales teóricos, introduces Python libraries for interpretability, discusses recent papers in the field (published by organizations such as Anthropic and Google DeepMind), and provides practical exercises.',
        paragraph2:
          'El campo de la Interpretabilidad Mecanística ha ganado popularidad rápidamente en los últimos años, con más de 90 artículos aceptados en ICML 2024. Su objetivo principal es entender la lógica detrás de las decisiones de los modelos de aprendizaje automático. Este conocimiento puede aplicarse para mejorar la transparencia y la confianza en los modelos existentes, así como para entender mejor cómo estos modelos aprenden.',
        paragraph3:
          'Poco después de la finalización de este curso, BAISH organizará un Hackathon de Interpretabilidad Mecanística en la FGV — ¡detalles por anunciar! Recomendamos encarecidamente que cualquier persona interesada en participar en el Hackathon complete este curso como introducción al tema, lo que también aumentará sus posibilidades de recibir un premio en la competición.'
      },
      schedule: {
        title: 'Programa del Curso',
        session1: {
          title: 'Sesión 1 - Transformers e Interpretabilidad',
          date: '23 de agosto, viernes, a partir de las 14:30',
          location: 'Auditorio 537',
          scheduleTitle: 'Programa:',
          preparationTitle: 'Preparación:',
          preparation: 'Handbook Chapters 2 and 3',
          part1: '45 min: Introducción a transformers y atención',
          part2: '20 min: Coffee break',
          part3: '45 min: Introducción a la Interpretabilidad Mecanística',
          part4: '30 min: Coding: PyTorch and TransformerLens',
          materialsTitle: 'Materiales:',
          handbookTitle: 'Handbook:',
          papersTitle: 'Artículos:',
          codingTitle: 'Codificación:',
          videosTitle: 'Videos:'
        },
        session2: {
          title: 'Sesión 2 - Circuits',
          date: '30 de agosto, viernes, a partir de las 14:30',
          location: 'Auditorio 418',
          scheduleTitle: 'Programa:',
          preparationTitle: 'Preparación:',
          preparation: 'Handbook Chapters 3 and 4',
          part1: '40 min: Circuits and the induction circuit',
          part2:
            '20 min: Exploration of the paper "A Mathematical Framework for Transformer Circuits"',
          part3: '20 min: Coffee break',
          part4: '60 min: Coding: circuit discovery'
        },
        session3: {
          title: 'Sesión 3 - Superposición',
          date: '6 de septiembre, viernes, a partir de las 14:30',
          location: 'Auditorio 537',
          scheduleTitle: 'Programa:',
          preparationTitle: 'Preparación:',
          preparation: 'Handbook Chapter 5',
          part1: '30 min: Superposition',
          part2:
            '30 min: 3Blue1Brown video "How might LLMs store facts" and discussion',
          part3: '20 min: Coffee break',
          part4: '60 min: Coding: superposition in toy models'
        },
        session4: {
          title: 'Sesión 4 - Sparse Autoencoders (SAE)',
          date: '13 de septiembre, viernes, a partir de las 15:00',
          location: 'Auditorio 418',
          scheduleTitle: 'Programa:',
          preparationTitle: 'Preparación:',
          preparation: 'Handbook Chapter 6',
          part1: '30 min: Sparse Autoencoders (SAE) and practical exploration',
          part2:
            '30 min: Exploration of the papers "Towards Monosemanticity: Decomposing Language Models With Dictionary Learning" and "Scaling Monosemanticity: Extracting Interpretable Features from Claude 3 Sonnet"',
          part3: '20 min: Coffee break',
          part4: '40 min: Coding: Using SAEs',
          part5: '30 min: New areas of exploration and tips for the Hackathon!'
        }
      },
      resources: {
        title: 'Recursos Adicionales',
        opportunitiesTitle: 'Oportunidades',
        arenaTitle: 'ARENA',
        arenaDescription:
          'Opportunity to spend 4 weeks in London studying practical content relevant to AI Safety research',
        arenaButton: 'Más Información',
        matsTitle: 'MATS',
        matsDescription:
          'Programa para iniciar investigación en Seguridad de IA con la orientación de mentores con amplia experiencia en el campo. Varios autores de artículos utilizados en este curso son mentores de MATS.',
        matsButton: 'Ver Mentores'
      }
    },

    // Handbook common elements
    handbook: {
      tableOfContents: 'Índice de Contenidos',
      prevChapter: '← Capítulo Anterior',
      nextChapter: 'Siguiente Capítulo →',
      noNextChapter: 'Fin del Manual',
      furtherReading: 'Lecturas Adicionales',
      backToHome: '← Volver al Curso',

      // Chapter 4: Circuits
      chapter4: {
        title: 'Capítulo 4: Circuitos',
        subtitle:
          'Entendiendo la interpretabilidad basada en circuitos en redes neuronales',
        sections: {
          intro: 'Introducción a los Circuitos',
          defining: 'Definiendo Circuitos Neuronales',
          induction: 'El Circuito de Inducción',
          discovery: 'Métodos de Descubrimiento de Circuitos',
          examples: 'Ejemplos Prácticos',
          conclusion: 'Conclusión'
        },
        intro: {
          p1: 'El marco de "circuitos" es un concepto clave en interpretabilidad mecanística, ofreciendo una manera de entender cómo las redes neuronales procesan información a través de componentes conectados que colectivamente implementan funciones específicas.',
          p2: 'Este capítulo explora cómo la interpretabilidad basada en circuitos nos ayuda a hacer ingeniería inversa de los cálculos realizados por redes neuronales, con un enfoque en arquitecturas transformer utilizadas en modelos de lenguaje grandes.'
        },
        defining: {
          p1: 'Un circuito neuronal es un subconjunto de una red neuronal que implementa una función específica e identificable. Los circuitos consisten en neuronas (o grupos de neuronas) conectadas a través de capas que colectivamente realizan un cálculo.',
          p2: 'Las propiedades clave de los circuitos incluyen:',
          list1:
            'Modularidad: Los circuitos pueden estudiarse de forma aislada del resto de la red',
          list2:
            'Funcionalidad: Los circuitos implementan cálculos específicos y significativos',
          list3:
            'Composición: Los comportamientos complejos emergen de combinaciones de circuitos más simples',
          list4:
            'Representación distribuida: La información a menudo se representa a través de múltiples neuronas en lugar de en neuronas individuales'
        },
        induction: {
          p1: 'El circuito de inducción es uno de los circuitos más estudiados en modelos transformer. Este circuito permite a los modelos de lenguaje continuar patrones como "A, B, A, B, A, ?" con "B".',
          p2: 'El circuito funciona mediante:',
          step1:
            'Detectar cuando un token ha aparecido previamente en la secuencia',
          step2: 'Identificar qué token vino después en esa ocurrencia previa',
          step3: 'Predecir que el mismo token seguirá en el contexto actual',
          p3: 'Este circuito involucra cabezas de atención específicas trabajando juntas a través de capas:',
          component1:
            'Detección de token previo: Cabezas de atención que buscan tokens repetidos',
          component2:
            'Copia de información: Mecanismos para recuperar lo que siguió a la ocurrencia previa',
          component3:
            'Proyección de salida: Componentes que influyen en la predicción final'
        },
        discovery: {
          p1: 'Identificar circuitos dentro de redes neuronales implica varias técnicas:',
          method1title: 'Parcheo de Activaciones',
          method1:
            'Esto implica reemplazar activaciones en ubicaciones específicas de la red al procesar una entrada con activaciones de otra entrada, y luego observar cómo cambia la salida. Ayuda a identificar qué componentes son causalmente importantes para una tarea determinada.',
          method2title: 'Análisis de Mediación Causal',
          method2:
            'Este enfoque cuantifica cuánto contribuyen caminos específicos en la red a una predicción particular, ayudando a identificar las conexiones más importantes.',
          method3title: 'Análisis de Atención',
          method3:
            'Examinar patrones de atención puede revelar qué partes de la secuencia de entrada influyen en otras partes, proporcionando información sobre el flujo de información.'
        },
        examples: {
          p1: 'Más allá de la inducción, los investigadores han identificado varios otros circuitos:',
          circuit1:
            'Identificación de Objetos Indirectos: Circuitos que rastrean relaciones entre sujetos, verbos y objetos en oraciones',
          circuit2:
            'Circuitos de Negación: Componentes que detectan y procesan la negación en el texto',
          circuit3:
            'Circuitos de Movimiento de Nombres: Mecanismos para rastrear y referenciar entidades a lo largo de un texto',
          p2: 'Estos ejemplos demuestran cómo la comprensión compleja del lenguaje emerge de implementaciones específicas de circuitos.'
        },
        conclusion: {
          p1: 'El marco de circuitos proporciona un enfoque poderoso para entender cómo las redes neuronales implementan funciones específicas. Al identificar y estudiar estos circuitos, los investigadores pueden obtener información sobre cómo los modelos procesan información y hacen predicciones.',
          p2: 'Esta comprensión es crucial para mejorar la interpretabilidad, aumentar la seguridad del modelo y desarrollar sistemas de IA más confiables. El próximo capítulo explorará cómo las redes neuronales manejan la información cuando tienen capacidad limitada a través del concepto de superposición.'
        },
        reading1: 'Aprendizaje en Contexto y Cabezas de Inducción',
        reading2: 'Un Marco Matemático para Circuitos Transformer',
        reading3: 'Acercamiento: Una Introducción a los Circuitos'
      },

      // Chapter 5: Superposition
      chapter5: {
        title: 'Capítulo 5: Superposición',
        subtitle:
          'Entendiendo cómo las redes neuronales representan más características de las que tienen dimensiones',
        sections: {
          intro: 'Introducción a la Superposición',
          competition: 'Competencia de Características',
          polysemanticity: 'Polisemántica',
          toyModels: 'Modelos Simplificados de Superposición',
          implications: 'Implicaciones para la Interpretabilidad',
          conclusion: 'Conclusión'
        },
        intro: {
          p1: 'La superposición se refiere al fenómeno donde las redes neuronales representan más características de las que tienen neuronas o dimensiones. Esto ocurre porque las redes a menudo necesitan rastrear muchas más características de las que tienen parámetros disponibles para representarlas individualmente.',
          p2: 'El concepto fue formalizado en el artículo "Modelos Simplificados de Superposición" por Anthropic, que demostró cómo las redes pueden codificar múltiples características en un espacio de menor dimensión aprovechando la geometría de los patrones de co-ocurrencia de características.'
        },
        competition: {
          p1: 'Cuando una red neuronal tiene menos dimensiones que las características que necesita representar, estas características deben "competir" por el espacio de representación. La red aprende a asignar su capacidad de representación limitada de manera eficiente.',
          p2: 'Los factores clave que influyen en qué características se representan incluyen:',
          list1:
            'Frecuencia: Las características más comunes tienen más probabilidades de ser representadas',
          list2:
            'Importancia: Se priorizan las características que afectan fuertemente a la función de pérdida',
          list3:
            'Correlación: Las características que a menudo co-ocurren pueden compartir espacio de representación',
          list4:
            'Ortogonalidad: Las características que pueden representarse en direcciones ortogonales son más fáciles de separar'
        },
        polysemanticity: {
          p1: 'La polisemántica es una consecuencia directa de la superposición. Se refiere al fenómeno donde neuronas individuales o direcciones de la red responden a múltiples características no relacionadas.',
          p2: 'En una red polisemántica:',
          list1:
            'Las neuronas individuales pueden responder a múltiples conceptos semánticamente distintos',
          list2:
            'Las representaciones de características se distribuyen a través de muchas neuronas',
          list3:
            'Puede no haber una correspondencia clara uno a uno entre los componentes de la red y los conceptos interpretables por humanos',
          p3: 'Esto hace que la interpretación sea desafiante, ya que no podemos simplemente analizar neuronas individuales para entender lo que la red está representando.'
        },
        toyModels: {
          p1: 'Los investigadores han desarrollado modelos simplificados para estudiar la superposición. Estos modelos ayudan a ilustrar cómo las redes pueden incorporar muchas características en espacios de dimensiones más bajas.',
          p2: 'Un modelo simplificado típico podría involucrar:',
          step1:
            'Generar datos sintéticos con un número conocido de características dispersas',
          step2: 'Entrenar un modelo con menos dimensiones que características',
          step3:
            'Analizar cómo el modelo representa estas características en su espacio limitado',
          p3: 'Estos experimentos han revelado que las redes pueden usar disposiciones geométricas inteligentes para codificar características de manera eficiente, a menudo aprovechando propiedades como la dispersión (características que rara vez aparecen simultáneamente).'
        },
        implications: {
          p1: 'La superposición plantea varios desafíos para la investigación de interpretabilidad:',
          list1:
            'El análisis directo de neuronas puede revelar información engañosa o incompleta',
          list2:
            'Las características pueden estar codificadas en patrones complejos distribuidos a través de muchas neuronas',
          list3:
            'Las técnicas simples de sondeo lineal pueden fallar en detectar características importantes',
          p2: 'Sin embargo, entender la superposición también ofrece oportunidades:',
          list4:
            'Sugiere enfocarse en encontrar la base correcta para el análisis, en lugar de examinar neuronas individuales',
          list5:
            'Técnicas como los Autoencoders Dispersos (cubiertos en el próximo capítulo) pueden ayudar a extraer características de representaciones superpuestas',
          list6:
            'El conocimiento de los patrones de superposición puede informar un mejor diseño y entrenamiento de arquitecturas'
        },
        conclusion: {
          p1: 'La superposición es una propiedad fundamental de las redes neuronales que surge cuando necesitan representar más características de las que tienen dimensiones. Esto lleva a neuronas polisemánticas y representaciones distribuidas que complican los esfuerzos de interpretabilidad.',
          p2: 'Entender la superposición es esencial para desarrollar métodos efectivos para interpretar redes neuronales, especialmente modelos de lenguaje grandes con miles de millones de parámetros que rastrean potencialmente billones de características. El próximo capítulo explorará cómo los Autoencoders Dispersos pueden ayudar a abordar este desafío desenredando estas representaciones superpuestas.'
        },
        reading1: 'Modelos Simplificados de Superposición (Anthropic)',
        reading2:
          'Medidas de Progreso para la Comprensión Profunda mediante Interpretabilidad Mecanística',
        reading3: '3Blue1Brown: ¿Cómo los LLMs podrían almacenar hechos?'
      },

      // Chapter 6: Sparse Autoencoders
      chapter6: {
        title: 'Capítulo 6: Autoencoders Dispersos',
        subtitle:
          'Usando Autoencoders Dispersos para desenredar la superposición en redes neuronales',
        sections: {
          intro: 'Introducción a los Autoencoders Dispersos',
          architecture: 'Arquitectura y Entrenamiento',
          features: 'Extracción de Características',
          applications: 'Aplicaciones en Interpretabilidad',
          research: 'Investigación Reciente',
          conclusion: 'Conclusión'
        },
        intro: {
          p1: 'Como vimos en el capítulo anterior, las redes neuronales a menudo representan información de manera superpuesta, con muchas características compartiendo las mismas neuronas o dimensiones. Esta polisemántica hace que la interpretación sea desafiante. Los Autoencoders Dispersos (SAEs) son una herramienta poderosa diseñada para abordar este desafío desenredando estas representaciones superpuestas.',
          p2: 'El objetivo de un SAE es transformar las representaciones polisemánticas y distribuidas en una red neuronal en una representación monosemántica y dispersa, donde cada característica corresponde a un concepto específico e interpretable.'
        },
        architecture: {
          p1: 'Un Autoencoder Disperso consiste en:',
          list1:
            'Una red codificadora que mapea las activaciones de la red neuronal original a un espacio disperso de mayor dimensión',
          list2:
            'Una red decodificadora que reconstruye las activaciones originales a partir de esta representación dispersa',
          p2: 'Las restricciones clave en el entrenamiento de un SAE son:',
          constraint1:
            'Pérdida de reconstrucción: El decodificador debe reconstruir con precisión las activaciones originales',
          constraint2:
            'Restricción de dispersión: Cada entrada debe activar solo un pequeño número de características en la representación codificada',
          p3: 'Estas restricciones aseguran que el SAE aprenda un diccionario de características interpretables que pueden activarse individualmente o en pequeños grupos para representar los estados internos de la red.'
        },
        features: {
          p1: 'Después de entrenar un SAE en un gran conjunto de datos de activaciones de una red neuronal, podemos analizar las características que ha aprendido:',
          list1:
            'Cada característica puede visualizarse examinando qué tipos de entradas la activan más fuertemente',
          list2:
            'Las características pueden nombrarse según los patrones que reconocen (por ejemplo, "detector de comillas" u "operador de multiplicación")',
          list3:
            'El diccionario de características proporciona una nueva base para entender las representaciones internas de la red',
          p2: 'A diferencia del análisis de neuronas individuales, las características del SAE a menudo corresponden a conceptos significativos e interpretables por humanos porque están diseñadas para desenredar las representaciones superpuestas.'
        },
        applications: {
          p1: 'Los Autoencoders Dispersos pueden usarse para varias tareas de interpretabilidad:',
          task1title: 'Descubrimiento de Circuitos',
          task1:
            'Al rastrear qué características del SAE se activan en respuesta a entradas específicas, los investigadores pueden identificar los circuitos computacionales dentro de la red.',
          task2title: 'Atribución de Características',
          task2:
            'Los SAEs pueden ayudar a determinar qué características contribuyen a predicciones específicas, proporcionando información sobre cómo el modelo toma decisiones.',
          task3title: 'Edición del Comportamiento del Modelo',
          task3:
            'Una vez que se identifican características interpretables, es posible modificar el comportamiento del modelo interviniendo en características específicas, potencialmente habilitando sistemas de IA más seguros.'
        },
        research: {
          p1: 'Los avances recientes en la investigación de SAE incluyen:',
          advance1:
            'Escalar SAEs a modelos más grandes, como Claude 3 Sonnet de Anthropic',
          advance2:
            'Mejorar las técnicas de entrenamiento para identificar características más interpretables',
          advance3:
            'Desarrollar métodos automáticos para nombrar y categorizar las características descubiertas',
          advance4:
            'Usar SAEs para entender abstracciones de nivel superior en modelos de lenguaje',
          p2: 'Artículos como "Hacia la Monosemántica: Descomponiendo Modelos de Lenguaje con Aprendizaje de Diccionario" y "Escalando la Monosemántica: Extrayendo Características Interpretables de Claude 3 Sonnet" demuestran el potencial de los SAEs para entender modelos cada vez más complejos.'
        },
        conclusion: {
          p1: 'Los Autoencoders Dispersos representan uno de los enfoques más prometedores para abordar el problema de superposición en redes neuronales. Al transformar representaciones polisemánticas en características monosemánticas, los SAEs proporcionan una herramienta poderosa para la interpretabilidad mecanística.',
          p2: 'A medida que la investigación en esta área continúa avanzando, los SAEs pueden jugar un papel crucial en la construcción de sistemas de IA más transparentes, confiables y alineables. Entender el funcionamiento interno de las redes neuronales no es solo una búsqueda académica sino una necesidad práctica a medida que estos sistemas se vuelven cada vez más poderosos e integrados en nuestra sociedad.'
        },
        reading1:
          'Hacia la Monosemántica: Descomponiendo Modelos de Lenguaje con Aprendizaje de Diccionario',
        reading2:
          'Escalando la Monosemántica: Extrayendo Características Interpretables de Claude 3 Sonnet',
        reading3: 'SolidGoldMagikarp e Identificación de Objetos Indirectos'
      }
    }
  }
}
