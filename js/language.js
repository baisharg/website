// Language toggle functionality
document.addEventListener('DOMContentLoaded', function () {
  // Default language is English
  let currentLang = localStorage.getItem('baish-language') || 'en'

  // Apply stored language preference on page load
  setLanguage(currentLang)

  // Add event listener to language toggle buttons
  document.querySelectorAll('.lang-toggle').forEach(button => {
    button.addEventListener('click', function () {
      const newLang = this.getAttribute('data-lang')
      setLanguage(newLang)
      localStorage.setItem('baish-language', newLang)

      // Update active state of language toggle buttons
      document.querySelectorAll('.lang-toggle').forEach(btn => {
        btn.classList.remove('active')
      })
      this.classList.add('active')

      // Translate any dynamic content
      translateDynamicContent()
    })
  })

  // Set initial active state for the current language button
  document
    .querySelector(`.lang-toggle[data-lang="${currentLang}"]`)
    ?.classList.add('active')

  // Initialize dynamic content translation
  translateDynamicContent()
})

function setLanguage (lang) {
  document.documentElement.setAttribute('lang', lang)

  // Hide all language elements
  document.querySelectorAll('[data-lang-en], [data-lang-es]').forEach(el => {
    el.style.display = 'none'
  })

  // Show elements for the selected language
  document.querySelectorAll(`[data-lang-${lang}]`).forEach(el => {
    el.style.display = ''
  })
}

// Helper function to translate a specific element
function translateElement (element, translationKey) {
  if (!element || !translationKey) return

  const lang = localStorage.getItem('baish-language') || 'en'

  // Parse the translation key (e.g., "common.submit" becomes translations.common.submit)
  const keys = translationKey.split('.')
  let translation = translations

  // Navigate through the translation object
  for (const key of keys) {
    if (translation[key]) {
      translation = translation[key]
    } else {
      console.warn(`Translation key not found: ${translationKey}`)
      return
    }
  }

  // Apply the translation if found
  if (translation[lang]) {
    element.textContent = translation[lang]
  }
}

// Function to translate all dynamic content on the page
function translateDynamicContent () {
  // Find all elements with data-translate attribute
  document.querySelectorAll('[data-translate]').forEach(element => {
    const translationKey = element.getAttribute('data-translate')
    translateElement(element, translationKey)
  })

  // Find all elements with data-translate-placeholder attribute (for input fields)
  document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
    const translationKey = element.getAttribute('data-translate-placeholder')
    const lang = localStorage.getItem('baish-language') || 'en'

    // Parse the translation key
    const keys = translationKey.split('.')
    let translation = translations

    // Navigate through the translation object
    for (const key of keys) {
      if (translation[key]) {
        translation = translation[key]
      } else {
        console.warn(`Translation key not found: ${translationKey}`)
        return
      }
    }

    // Apply the translation to the placeholder if found
    if (translation[lang]) {
      element.placeholder = translation[lang]
    }
  })
}

// Add a global helper to get a translation by key
window.getTranslation = function (translationKey) {
  const lang = localStorage.getItem('baish-language') || 'en'

  // Parse the translation key
  const keys = translationKey.split('.')
  let translation = translations

  // Navigate through the translation object
  for (const key of keys) {
    if (translation[key]) {
      translation = translation[key]
    } else {
      console.warn(`Translation key not found: ${translationKey}`)
      return ''
    }
  }

  // Return the translation if found
  if (translation[lang]) {
    return translation[lang]
  }

  return ''
}
