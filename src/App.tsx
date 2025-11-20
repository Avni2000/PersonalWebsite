import './App.css'
import { Link } from 'react-router-dom'
import { getAssetPath } from './utils'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <div className="content">
        <div className="text">
          <h3>About Me</h3>
          <p >
          <br/>
          Hi there! I'm Avni Badiwale. I'm a student at UW Madison, majoring in CS
          and Math. I often write that I chase fascinating things, and I'd like this
          website to serve as the stack overflow of all of the cool things I've
          learned (and am bound to learn) along the way. That is, a repository of deep
          dives I've gone on, intuition I've gained about certain concepts, attempts
          to explain things I find interesting, projects I've found myself in, etc.
          </p>
          <br />
          <p>If you're interested in my background, my <Link to="/resume">resume</Link> is available here. I've spent the last year working on impactful projects and discovering which subfields align with my interests.</p>
          <br/>
          <p>So anyway, hello! You should check out my most recent (and only, thus far) <Link to="/blog/why-llms-use-emojis">blog post</Link> on LLMs and Emojis</p>

        </div>
        <div className="mainPFP">
          <figure>
            <img 
              src={getAssetPath('assets/mainPFP.jpg')}
              alt="Main profile picture"
            />
            <figcaption>
              Me, studying in Iceland
              <br /> @ Seljalandsfoss
            </figcaption>
          </figure>
        </div>
      </div>
    </>
  )
}

export default App
