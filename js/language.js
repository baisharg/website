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
    })
  })

  // Set initial active state for the current language button
  document
    .querySelector(`.lang-toggle[data-lang="${currentLang}"]`)
    ?.classList.add('active')
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
function translateElement (element, translations) {
  const lang = localStorage.getItem('baish-language') || 'en'
  if (element && translations[lang]) {
    element.textContent = translations[lang]
  }
}
