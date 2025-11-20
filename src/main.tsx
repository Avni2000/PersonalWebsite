import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import Resume from './resume.tsx'
import BlogHome from './blog/blog.tsx'
import WhyLLMsUseEmojis from './blog/WhyLLMsUseEmojis.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/*" element={<App />} />
        <Route path="/resume/*" element={<Resume />} />
        <Route path="/blog/*" element={<BlogHome />} />
        <Route path="/blog/why-llms-use-emojis/*" element={<WhyLLMsUseEmojis />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
