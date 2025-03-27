/**
 * BAISH - Buenos Aires AI Safety Hub
 * Main JavaScript file - Consolidated functionality
 */

// Wait for the DOM to be fully loaded before executing code
document.addEventListener('DOMContentLoaded', () => {
  // Initialize all site functionality
  initLanguageToggle()
  initMobileNavigation()
  initAnimations()
})

/**
 * Language Toggle System
 * Handles switching between English and Spanish
 */
function initLanguageToggle () {
  // Set default language and get stored language preference
  let currentLanguage = localStorage.getItem('language') || 'es'

  // Force the default language if none is stored
  if (!localStorage.getItem('language')) {
    localStorage.setItem('language', 'es')
  }

  // Get language toggle buttons
  const enButton = document.getElementById('lang-en')
  const esButton = document.getElementById('lang-es')

  if (!enButton || !esButton) return // Guard clause if buttons don't exist

  // Set initial toggle state
  updateLanguageToggleUI(currentLanguage)

  // Apply initial translations
  applyTranslations(currentLanguage)

  // Add event listeners to language toggle buttons
  enButton.addEventListener('click', () => {
    setLanguage('en')
  })

  esButton.addEventListener('click', () => {
    setLanguage('es')
  })
}

/**
 * Updates the language toggle UI to reflect the current language
 * @param {string} currentLanguage - Current language code ('en' or 'es')
 */
function updateLanguageToggleUI (currentLanguage) {
  const enButton = document.getElementById('lang-en')
  const esButton = document.getElementById('lang-es')

  if (currentLanguage === 'en') {
    enButton.classList.add('active')
    esButton.classList.remove('active')
  } else {
    enButton.classList.remove('active')
    esButton.classList.add('active')
  }
}

/**
 * Sets the language and updates the UI
 * @param {string} lang - The language code ('en' or 'es')
 */
function setLanguage (lang) {
  // Get current language
  const currentLanguage = localStorage.getItem('language')

  // Don't do anything if the language is already set
  if (currentLanguage === lang) return

  // Save to localStorage
  localStorage.setItem('language', lang)

  // Update UI
  updateLanguageToggleUI(lang)

  // Apply translations
  applyTranslations(lang)
}

/**
 * Applies translations to all elements with data-i18n attributes
 * @param {string} currentLanguage - Current language code ('en' or 'es')
 */
function applyTranslations (currentLanguage) {
  // Get all elements with data-i18n attribute
  const elements = document.querySelectorAll('[data-i18n]')

  elements.forEach(element => {
    // Get the translation key
    const key = element.getAttribute('data-i18n')

    // Get the translation text
    const text = getTranslationByKey(key, currentLanguage)

    // Update the element text if translation exists
    if (text) {
      // Handle different element types
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        // For input elements, update placeholder or value based on attribute
        const targetAttr =
          element.getAttribute('data-i18n-attr') || 'placeholder'
        element.setAttribute(targetAttr, text)
      } else if (element.tagName === 'BUTTON') {
        // For button elements, check if it has children with data-i18n
        // If it doesn't have children with data-i18n, update the button text
        if (element.querySelectorAll('[data-i18n]').length === 0) {
          element.textContent = text
        }
      } else if (element.tagName === 'LABEL') {
        // For label elements, update the text content
        element.textContent = text
      } else {
        // For other elements, update the inner text
        element.textContent = text
      }
    }
  })

  // Handle elements with attributes that need translation
  const attrElements = document.querySelectorAll('[data-i18n-attr]')

  attrElements.forEach(element => {
    if (!element.hasAttribute('data-i18n')) return // Skip if no data-i18n attribute

    const key = element.getAttribute('data-i18n')
    const attr = element.getAttribute('data-i18n-attr')
    const text = getTranslationByKey(key, currentLanguage)

    if (text && attr) {
      element.setAttribute(attr, text)
    }
  })
}

/**
 * Gets a translation by its key
 * @param {string} key - The translation key (dot notation, e.g. 'nav.about')
 * @param {string} currentLanguage - Current language code ('en' or 'es')
 * @returns {string|null} - The translated text or null if not found
 */
function getTranslationByKey (key, currentLanguage) {
  // Check if translations object exists
  if (typeof translations === 'undefined') {
    console.error('Translations object is not defined')
    return null
  }

  // Split the key by dots
  const keys = key.split('.')

  // Start at the root of the translations object
  let translation = translations[currentLanguage]

  // Traverse the keys
  for (const k of keys) {
    if (translation && k in translation) {
      translation = translation[k]
    } else {
      // Key not found
      console.warn(`Translation key not found: ${key}`)
      return null
    }
  }

  return translation
}

/**
 * Mobile Navigation
 * Handles the mobile menu toggling
 */
function initMobileNavigation () {
  const mobileMenuButton = document.querySelector('.mobile-menu-button')
  const mainNav = document.querySelector('.main-nav')

  if (!mobileMenuButton || !mainNav) return // Guard clause if elements don't exist

  // Toggle menu when the button is clicked
  mobileMenuButton.addEventListener('click', () => {
    mainNav.classList.toggle('open')
    mobileMenuButton.classList.toggle('open')
    document.body.classList.toggle('menu-open')
  })

  // Close menu when clicking on a link
  const navLinks = mainNav.querySelectorAll('a')
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open')
      mobileMenuButton.classList.remove('open')
      document.body.classList.remove('menu-open')
    })
  })
}

/**
 * Animation System
 * Handles reveal and staggered animations
 */
function initAnimations () {
  initRevealAnimations()
  initStaggeredAnimations()
}

/**
 * Initialize reveal animations using Intersection Observer
 */
function initRevealAnimations () {
  const revealElements = document.querySelectorAll('.reveal')

  if (revealElements.length === 0) return

  const revealObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
          revealObserver.unobserve(entry.target) // Only animate once
        }
      })
    },
    {
      threshold: 0.1, // Trigger when 10% of the element is visible
      rootMargin: '0px 0px -50px 0px' // Trigger slightly before the element is in view
    }
  )

  revealElements.forEach(element => {
    revealObserver.observe(element)
  })
}

/**
 * Initialize staggered animations for grid items
 */
function initStaggeredAnimations () {
  const staggerContainers = document.querySelectorAll('.stagger-container')

  if (staggerContainers.length === 0) return

  staggerContainers.forEach(container => {
    const staggerItems = container.querySelectorAll('.stagger-item')

    // Automatically add delay classes if not present
    if (staggerItems.length > 0) {
      staggerItems.forEach((item, index) => {
        if (
          !item.classList.contains('delay-1') &&
          !item.classList.contains('delay-2') &&
          !item.classList.contains('delay-3') &&
          !item.classList.contains('delay-4') &&
          !item.classList.contains('delay-5')
        ) {
          // Add delay class based on position (modulo 5 to cycle through delay classes)
          const delayClass = `delay-${(index % 5) + 1}`
          item.classList.add(delayClass)
        }
      })
    }

    const staggerObserver = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          staggerItems.forEach(item => {
            item.classList.add('active')
          })
          staggerObserver.unobserve(container) // Only animate once
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    staggerObserver.observe(container)
  })
}
