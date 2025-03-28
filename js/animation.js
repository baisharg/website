// Animation utilities for enhanced theme

document.addEventListener('DOMContentLoaded', () => {
  // Initialize animations
  initRevealAnimations()
  initStaggeredAnimations()

  // Initialize header scroll effects
  initHeaderScrollEffects()

  // Ensure footer is always visible regardless of animation state
  const footer = document.querySelector('.site-footer')
  if (footer) {
    const footerContent = footer.querySelector('.footer-content')
    if (footerContent && footerContent.classList.contains('reveal')) {
      footerContent.classList.add('active')
    }
    footer.style.display = 'block'
    footer.style.visibility = 'visible'
  }
})

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

/**
 * Add reveal animation to elements that match the selector
 * @param {string} selector - CSS selector for elements to animate
 */
function addRevealToElements (selector) {
  const elements = document.querySelectorAll(selector)

  elements.forEach(element => {
    if (!element.classList.contains('reveal')) {
      element.classList.add('reveal')
    }
  })

  // Reinitialize animations
  initRevealAnimations()
}

/**
 * Setup staggered animations for grid container
 * @param {string} containerSelector - CSS selector for the container
 * @param {string} itemSelector - CSS selector for the items inside the container
 */
function setupStaggeredContainer (containerSelector, itemSelector) {
  const containers = document.querySelectorAll(containerSelector)

  containers.forEach(container => {
    if (!container.classList.contains('stagger-container')) {
      container.classList.add('stagger-container')

      const items = container.querySelectorAll(itemSelector)
      items.forEach(item => {
        if (!item.classList.contains('stagger-item')) {
          item.classList.add('stagger-item')
        }
      })
    }
  })

  // Reinitialize animations
  initStaggeredAnimations()
}

/**
 * Initialize header scroll effects
 */
function initHeaderScrollEffects() {
  const header = document.querySelector('.site-header')
  if (!header) return

  // Set initial transparency based on scroll position
  updateHeaderTransparency()

  // Update on scroll
  window.addEventListener('scroll', () => {
    updateHeaderTransparency()
  })

  function updateHeaderTransparency() {
    const scrollPosition = window.scrollY
    const maxScroll = 200

    // Calculate opacity - starts at 0.85 and increases to 0.98
    let opacity = 0.85 + (Math.min(scrollPosition, maxScroll) / maxScroll) * 0.13

    // Apply background color with calculated opacity
    header.style.backgroundColor = `rgba(30, 30, 48, ${opacity})`

    // Add a class to indicate scrolling state for additional styling
    if (scrollPosition > 50) {
      header.classList.add('scrolled')
    } else {
      header.classList.remove('scrolled')
    }

    // Adjust the border opacity based on scroll position
    const borderOpacity = 0.15 + (Math.min(scrollPosition, maxScroll) / maxScroll) * 0.15
    header.style.borderBottomColor = `rgba(255, 255, 255, ${borderOpacity})`

    // Adjust the shadow intensity based on scroll position
    const shadowIntensity = 0.2 + (Math.min(scrollPosition, maxScroll) / maxScroll) * 0.1
    header.style.boxShadow = `0 2px 15px rgba(0, 0, 0, ${shadowIntensity})`
  }
}
