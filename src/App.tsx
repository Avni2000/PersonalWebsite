import './App.css'
import { Link, useSearchParams } from 'react-router-dom'
import { getAssetPath } from './utils'
import Navbar from './components/Navbar'
import Resume from './resume.tsx'
import { useEffect, useState, useRef } from 'react'

function App() {
  const [searchParams] = useSearchParams()
  const [showGarageDoor, setShowGarageDoor] = useState(false)
  const [showMessageBox, setShowMessageBox] = useState(false)
  const [message, setMessage] = useState('')
  const [isSending, setIsSending] = useState(false)
  const matrixRef = useRef<HTMLDivElement>(null)
  const name = searchParams.get('name')

  useEffect(() => {
    if (name?.toLowerCase() === 'olivia') {
      // Trigger Matrix animation
      setShowGarageDoor(true)
      // Show message box after Matrix takes over (3.5s total: 1.5s for matrix + 2s fade to black)
      setTimeout(() => {
        setShowMessageBox(true)
      }, 3500)
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
      // Fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      ctx.font = `${fontSize}px monospace`
      
      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)]
        const x = i * fontSize
        const y = drops[i] * fontSize
        
        // Draw character
        ctx.fillStyle = '#0f0'
        ctx.fillText(char, x, y)
        
        // Reset drop
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        
        drops[i]++
      }
    }

    const interval = setInterval(draw, 50)

    // Cleanup
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
      const response = await fetch('/api/message.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: message,
          from: 'Olivia'
        })
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
    <>
      <Navbar />
      <div className="content">
        <div className="text">
          <h3>About Me</h3>
          <p >
            <br />
            Hi there! I'm Avni Badiwale. I'm a student at UW Madison, majoring in CS
            and Math. I often write that I chase fascinating things, and I'd like this
            website to serve as the stack overflow of all of the cool things I've
            learned (and am bound to learn) along the way. That is, a repository of deep
            dives I've gone on, intuition I've gained about certain concepts, attempts
            to explain things I find interesting, projects I've found myself in, etc.
          </p>
          <br />
          <p>If you're interested in my background, my <Resume name="resume"/> is available here. I've spent the last year working on impactful projects and discovering which subfields align with my interests.</p>
          <br />
          <p>So anyway, hello! You should check out my most recent (and only, thus far) <Link to="/blog/why-llms-use-emojis">blog post</Link> on LLMs and Emojis</p>

        </div>
        <div className="mainPFP">
          <figure>
            <img
              src={getAssetPath('assets/mainPFP.jpg')}
              alt="Main profile picture"
              loading="lazy"
              width="250"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
            <figcaption>
              Me, studying in Iceland
              <br /> @ Seljalandsfoss
            </figcaption>
          </figure>
        </div>
      </div>
      
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
    </>
  )
}

export default App
