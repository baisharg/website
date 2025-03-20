// Language toggle functionality for BAISH website
document.addEventListener('DOMContentLoaded', function () {
  // Default language is English
  const defaultLang = 'en'

  // Get saved language preference from localStorage or use default
  let currentLang = localStorage.getItem('baish-language') || defaultLang

  // Apply the language on page load
  applyLanguage(currentLang)

  // Add click event listeners to language toggle buttons
  document.querySelectorAll('.lang-toggle').forEach(button => {
    button.addEventListener('click', function () {
      const newLang = this.getAttribute('data-lang')
      console.log(`Changing language from ${currentLang} to ${newLang}`)

      // Only change if it's a different language
      if (newLang !== currentLang) {
        // Save to localStorage
        localStorage.setItem('baish-language', newLang)
        currentLang = newLang

        // Apply the language change
        applyLanguage(newLang)
      }
    })
  })
})

// Apply the language to the page
function applyLanguage (lang) {
  console.log(`Applying language: ${lang}`)

  // Set the HTML lang attribute
  document.documentElement.setAttribute('lang', lang)

  // 1. Handle static content with data-lang-xx attributes
  // Hide all language-specific elements
  document.querySelectorAll('[data-lang-en], [data-lang-es]').forEach(el => {
    el.style.display = 'none'
  })

  // Show elements for the selected language
  const elementsToShow = document.querySelectorAll(`[data-lang-${lang}]`)
  console.log(
    `Found ${elementsToShow.length} static elements for language ${lang}`
  )
  elementsToShow.forEach(el => {
    el.style.display = ''
  })

  // 2. Handle dynamic content with data-translate attributes
  translateDynamicContent(lang)

  // 3. Update the active state of language toggle buttons
  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.classList.remove('active')
  })

  const activeToggle = document.querySelector(
    `.lang-toggle[data-lang="${lang}"]`
  )
  if (activeToggle) {
    activeToggle.classList.add('active')
  }
}

// Translate all dynamic content on the page
function translateDynamicContent (lang) {
  // Check if translations are available
  if (typeof translations === 'undefined') {
    console.error(
      'Translations object is not defined. Make sure translations.js is loaded before language.js'
    )
    return
  }

  // Process elements with data-translate attribute
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate')
    const translation = getTranslationByKey(key, lang)

    if (translation) {
      element.textContent = translation
    }
  })

  // Process placeholder translations
  document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
    const key = element.getAttribute('data-translate-placeholder')
    const translation = getTranslationByKey(key, lang)

    if (translation) {
      element.placeholder = translation
    }
  })
}

// Get a translation value by dot-notation key
function getTranslationByKey (key, lang) {
  if (!key) return null

  const keys = key.split('.')
  let value = translations

  // Navigate through the nested object
  for (const k of keys) {
    if (value && value[k]) {
      value = value[k]
    } else {
      console.warn(`Translation key not found: ${key}`)
      return null
    }
  }

  // Return the translation for the specified language
  if (value && value[lang]) {
    return value[lang]
  }

  return null
}

// Expose global helper function
window.getTranslation = function (key) {
  const lang = localStorage.getItem('baish-language') || 'en'
  return getTranslationByKey(key, lang) || ''
}

// Expose global function to translate dynamic content
window.translateDynamicContent = function () {
  const lang = localStorage.getItem('baish-language') || 'en'
  translateDynamicContent(lang)
}
