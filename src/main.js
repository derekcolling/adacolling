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

// ===== Bubble Wrap Fidget Feature =====
const BUBBLE_COUNT = 48 // 6 rows × 8 columns
let poppedCount = 0

// Pop sound using Web Audio API
function createPopSound() {
  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)()
    const oscillator = audioContext.createOscillator()
    const gainNode = audioContext.createGain()
    
    oscillator.connect(gainNode)
    gainNode.connect(audioContext.destination)
    
    oscillator.frequency.setValueAtTime(300 + Math.random() * 200, audioContext.currentTime)
    oscillator.frequency.exponentialRampToValueAtTime(100, audioContext.currentTime + 0.1)
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1)
    
    oscillator.start(audioContext.currentTime)
    oscillator.stop(audioContext.currentTime + 0.1)
  } catch (e) {
    // Audio not supported, continue silently
  }
}

// Create bubble grid
function createBubbles() {
  const bubbleGrid = document.getElementById('bubble-grid')
  if (!bubbleGrid) return
  
  bubbleGrid.innerHTML = ''
  poppedCount = 0
  updateCounter()
  
  for (let i = 0; i < BUBBLE_COUNT; i++) {
    const bubble = document.createElement('div')
    bubble.className = 'bubble'
    bubble.dataset.index = i
    bubble.addEventListener('click', handleBubblePop)
    bubble.addEventListener('touchstart', handleBubblePop, { passive: true })
    bubbleGrid.appendChild(bubble)
  }
}

// Handle bubble pop
function handleBubblePop(e) {
  e.preventDefault()
  const bubble = e.currentTarget
  
  if (bubble.classList.contains('popped')) return
  
  // Play pop sound
  createPopSound()
  
  // Add popping animation
  bubble.classList.add('popping')
  
  // Create pop emoji effect
  createPopEmoji(bubble)
  
  // After animation, mark as popped
  setTimeout(() => {
    bubble.classList.remove('popping')
    bubble.classList.add('popped')
  }, 300)
  
  // Update counter
  poppedCount++
  updateCounter()
  
  // Celebrate when all bubbles are popped!
  if (poppedCount === BUBBLE_COUNT) {
    celebrateAllPopped()
  }
}

// Create floating emoji on pop
function createPopEmoji(bubble) {
  const emojis = ['✨', '💫', '⭐', '🌟', '💖', '💕', '🎀', '🦋']
  const emoji = document.createElement('span')
  emoji.className = 'pop-emoji'
  emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)]
  
  const rect = bubble.getBoundingClientRect()
  emoji.style.left = `${rect.left + rect.width / 2}px`
  emoji.style.top = `${rect.top + rect.height / 2}px`
  
  document.body.appendChild(emoji)
  
  setTimeout(() => emoji.remove(), 600)
}

// Update the pop counter
function updateCounter() {
  const counterEl = document.getElementById('pop-count')
  if (counterEl) {
    counterEl.textContent = poppedCount
    // Trigger pulse animation
    counterEl.style.animation = 'none'
    counterEl.offsetHeight // Force reflow
    counterEl.style.animation = 'counterPulse 0.3s ease'
  }
}

// Celebration when all bubbles popped
function celebrateAllPopped() {
  for (let i = 0; i < 15; i++) {
    setTimeout(() => {
      const x = Math.random() * window.innerWidth
      const y = Math.random() * window.innerHeight * 0.5
      createSparkle(x, y)
    }, i * 100)
  }
}

// Reset bubbles button
document.addEventListener('DOMContentLoaded', () => {
  createBubbles()
  
  const resetBtn = document.getElementById('reset-bubbles')
  if (resetBtn) {
    resetBtn.addEventListener('click', (e) => {
      e.stopPropagation() // Prevent sparkle on click
      createBubbles()
    })
  }
})
