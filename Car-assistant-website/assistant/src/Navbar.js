import { NavLink } from 'react-router-dom'
import './Styles/Navbar.css'
import logo from "./Assets/logo.jpg"
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
        <img src={logo} alt="Logo" className="logo-image" />
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;