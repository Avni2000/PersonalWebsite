import { createRoot } from 'react-dom/client'
import { BrowserRouter, useSearchParams } from 'react-router-dom'
import Resume from './resume'
import { useEffect, useState, useRef } from 'react'
import './App.css'

function ConstructionApp() {
  const [searchParams] = useSearchParams()
  const [showGarageDoor, setShowGarageDoor] = useState(false)
  const [showMessageBox, setShowMessageBox] = useState(false)
  const [message, setMessage] = useState('')
  const [isSending, setIsSending] = useState(false)
  const matrixRef = useRef<HTMLDivElement | null>(null)
  const name = searchParams.get('name')

  useEffect(() => {
    if (name?.toLowerCase() === 'olivia') {
      setShowGarageDoor(true)
      setTimeout(() => setShowMessageBox(true), 3500)
    } else {
      setShowGarageDoor(false)
      setShowMessageBox(false)
    }
  }, [name])

  useEffect(() => {
    if (!showGarageDoor || !matrixRef.current) return

    const canvas = document.createElement('canvas')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    canvas.style.display = 'block'
    matrixRef.current.appendChild(canvas)

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+-=[]{}|;:,.<>?/~'
    const fontSize = 16
    const columns = Math.floor(canvas.width / fontSize)
    const drops: number[] = []

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * canvas.height / fontSize) * -1
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)]
        const x = i * fontSize
        const y = drops[i] * fontSize
        ctx.fillStyle = '#0f0'
        ctx.fillText(char, x, y)
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 50)
    return () => {
      clearInterval(interval)
      canvas.remove()
    }
  }, [showGarageDoor])

  const handleSendMessage = async () => {
    if (!message.trim()) {
      alert('Please enter a message!')
      return
    }

    setIsSending(true)
    try {
      const topic = 'Ikosi2fcnV'
      const response = await fetch(`https://ntfy.sh/${topic}`, {
        method: 'POST',
        headers: {
          Title: 'Message from Olivia',
          Priority: 'high',
          Tags: 'love,heart,sparkling_heart'
        },
        body: message
      })

      if (response.ok) {
        alert('Message sent! 💌')
        setMessage('')
        setShowMessageBox(false)
        setShowGarageDoor(false)
      } else {
        alert('Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      alert('Failed to send message. Please check your connection.')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
      <h1>Under Construction </h1>
      <p>Download my <Resume name="Resume" /> here.</p>

      {/* Matrix Hacker Overlay */}
      {showGarageDoor && (
        <div className="garage-door-overlay">
          <div className="garage-door" ref={matrixRef}></div>
        </div>
      )}

      {/* Message Box */}
      {showMessageBox && (
        <div className="message-overlay">
          <div className="message-box">
            <h2>Hi lovely :)</h2>
            <textarea
              className="message-input"
              placeholder="Type your message here..."
              rows={8}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={isSending}
            />
            <button
              className="message-submit"
              onClick={handleSendMessage}
              disabled={isSending}
            >
              {isSending ? 'Sending...' : 'Send'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <ConstructionApp />
  </BrowserRouter>
)