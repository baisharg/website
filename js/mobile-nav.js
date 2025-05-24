document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuButton = document.querySelector('.mobile-menu-button')
  const mainNav = document.querySelector('.main-nav')

  if (mobileMenuButton && mainNav) {
    mobileMenuButton.addEventListener('click', function () {
      mainNav.classList.toggle('open')
      mobileMenuButton.classList.toggle('open')
      document.body.classList.toggle('menu-open')
    })

    // Close menu when clicking on a link
    const navLinks = mainNav.querySelectorAll('a')
    navLinks.forEach(link => {
      link.addEventListener('click', function () {
        mainNav.classList.remove('open')
        mobileMenuButton.classList.remove('open')
        document.body.classList.remove('menu-open')
      })
    })

    // Close menu when clicking outside
    document.addEventListener('click', function (event) {
      const isMenuOpen = mainNav.classList.contains('open')
      const isClickInsideNav = mainNav.contains(event.target)
      const isClickOnMenuButton = mobileMenuButton.contains(event.target)

      if (isMenuOpen && !isClickInsideNav && !isClickOnMenuButton) {
        mainNav.classList.remove('open')
        mobileMenuButton.classList.remove('open')
        document.body.classList.remove('menu-open')
      }
    })

    // Close menu when pressing Escape key
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && mainNav.classList.contains('open')) {
        mainNav.classList.remove('open')
        mobileMenuButton.classList.remove('open')
        document.body.classList.remove('menu-open')
      }
    })
  }
})
