// Language toggle functionality

// Set default language and get stored language preference
let currentLanguage = localStorage.getItem('language') || 'es'

// Initialize the page with the correct language
document.addEventListener('DOMContentLoaded', () => {
  // Force the default language if none is stored
  if (!localStorage.getItem('language')) {
    localStorage.setItem('language', 'es')
  }

  // Set language toggle button states
  updateLanguageToggleUI()

  // Apply initial translations
  applyTranslations()

  // Add event listeners to language toggle buttons
  document.getElementById('lang-en').addEventListener('click', () => {
    setLanguage('en')
  })

  document.getElementById('lang-es').addEventListener('click', () => {
    setLanguage('es')
  })
})

/**
 * Updates the language toggle UI to reflect the current language
 */
function updateLanguageToggleUI () {
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
  // Don't do anything if the language is already set
  if (currentLanguage === lang) return

  // Update current language
  currentLanguage = lang

  // Save to localStorage
  localStorage.setItem('language', lang)

  // Update UI
  updateLanguageToggleUI()

  // Apply translations
  applyTranslations()
}

/**
 * Applies translations to all elements with data-i18n attributes
 */
function applyTranslations () {
  // Get all elements with data-i18n attribute
  const elements = document.querySelectorAll('[data-i18n]')

  elements.forEach(element => {
    // Get the translation key
    const key = element.getAttribute('data-i18n')

    // Get the translation text
    const text = getTranslationByKey(key)

    // Update the element text if translation exists
    if (text) {
      // Handle different element types
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        // For input elements, update placeholder or value based on attribute
        const targetAttr =
          element.getAttribute('data-i18n-attr') || 'placeholder'
        element.setAttribute(targetAttr, text)
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
    const text = getTranslationByKey(key)

    if (text && attr) {
      element.setAttribute(attr, text)
    }
  })
}

/**
 * Gets a translation by its key
 * @param {string} key - The translation key (dot notation, e.g. 'nav.about')
 * @returns {string|null} - The translated text or null if not found
 */
function getTranslationByKey (key) {
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
