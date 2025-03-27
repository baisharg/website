/**
 * BAISH - English translations
 */
const translationsEN = {
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

  // Home page
  home: {
    hero: {
      title: 'Ensuring AI Benefits Humanity',
      subtitle:
        "BAISH's student-led initiative exploring safe and beneficial AI development",
      cta: 'Get Involved'
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
    team: {
      title: 'Our Core Team',
      members: {
        eitan: {
          name: 'Eitan Sprejer',
          title: 'Co-founding Director'
        },
        luca: {
          name: 'Luca De Leo',
          title: 'Co-founding Director'
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
    }
  },

  // Activities page
  activities: {
    pageHeader: {
      breadcrumb: 'Home / Activities',
      title: 'Our Activities'
    },
    intro: {
      content:
        'BAISH offers a range of activities designed to help students and researchers engage with AI safety concepts, from introductory discussions to hands-on research projects.'
    }
  },

  // Contact page
  contact: {
    pageHeader: {
      breadcrumb: 'Home / Contact',
      title: 'Get in Touch'
    },
    intro: {
      content:
        "We'd love to hear from you! Whether you're interested in joining our activities, collaborating on research, or just learning more about AI safety, reach out through any of the channels below."
    },
    form: {
      title: 'Contact Form',
      name: 'Your Name',
      email: 'Your Email',
      subject: 'Subject',
      message: 'Message',
      submit: 'Send Message'
    }
  }
}
