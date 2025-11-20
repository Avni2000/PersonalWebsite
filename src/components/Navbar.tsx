import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="header-container">
      <div className="name-home">
        <h1>Avni Badiwale</h1>
      </div>
      <div className="navbar">
        <ul className="menu">
          <li className="item">
            <Link to="/">Home</Link>
          </li>
          <li className="item">
            <Link to="/resume">Resume</Link>
          </li>
          <li className="item">
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
