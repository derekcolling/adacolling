import './style.css'

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn')
if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', () => {
    // Add mobile menu functionality here
    console.log('Mobile menu clicked')
  })
}

// Navbar scroll effect
const navbar = document.getElementById('navbar')
if (navbar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('shadow-lg')
    } else {
      navbar.classList.remove('shadow-lg')
    }
  })
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute('href'))
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  })
})
