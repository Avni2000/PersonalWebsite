import './style.css'
import { Link } from 'react-router-dom'
import { getAssetPath } from './utils'

function App() {
  return (
    <>
      <div className="navbar">
        <ul className="menu">
          <li className="item">
            <Link to="/">Home</Link>
          </li>
          <li className="item">
            <Link to="/resume">Resume</Link>
          </li>
          <li className="item">
            <a href="#">Blog</a>
          </li>
        </ul>
      </div>
      <div className="name-home">
        <h1>Avni Badiwale</h1>
      </div>
      <div className="content">
        <div className="text">
          <h3>About Me</h3>
          <p >
          Hi there! I'm Avni Badiwale. I'm a student at UW Madison, majoring in CS
          and Math. I often write that I chase fascinating things, and I'd like this
          website to serve as the stack overflow of all of the cool things I've
          learned (and am bound to learn) along the way. I.E. a repository of deep
          dives I've gone on, intuition I've gained about certain concepts, attempts
          to explain things I find interesting, projects I've found myself in, etc.
          </p>
          <br />
          If you're interested in my background, my <Link to="/resume">resume</Link> is available here. I've spent the last year working on impactful projects and discovering which subfields align with my interests.


          <br />
          <br/>
          <p >So anyway, hello! I'll have more to share as soon as I find time to write
          + figure out how to get KaTeX working</p>
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
