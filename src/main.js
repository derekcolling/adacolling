import './style.css'

// Add interactive sparkle effect on click
document.addEventListener('click', (e) => {
  createSparkle(e.clientX, e.clientY)
})

function createSparkle(x, y) {
  const sparkle = document.createElement('span')
  sparkle.className = 'click-sparkle'
  sparkle.textContent = ['✨', '💖', '⭐', '🌟', '💫'][Math.floor(Math.random() * 5)]
  sparkle.style.cssText = `
    position: fixed;
    left: ${x}px;
    top: ${y}px;
    font-size: 2rem;
    pointer-events: none;
    z-index: 9999;
    animation: sparkleClick 1s ease-out forwards;
  `
  document.body.appendChild(sparkle)

  setTimeout(() => sparkle.remove(), 1000)
}

// Add the sparkle animation to the page
const style = document.createElement('style')
style.textContent = `
  @keyframes sparkleClick {
    0% {
      transform: translate(-50%, -50%) scale(0) rotate(0deg);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) scale(2) rotate(180deg);
      opacity: 0;
    }
  }
`
document.head.appendChild(style)

// Add random extra sparkles occasionally
setInterval(() => {
  const hearts = document.querySelectorAll('.heart')
  hearts.forEach(heart => {
    if (Math.random() > 0.7) {
      heart.style.animationDuration = `${6 + Math.random() * 4}s`
    }
  })
}, 5000)

console.log('✨ Welcome to Ada Colling\'s Magical World! ✨')
