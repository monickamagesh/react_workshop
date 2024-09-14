import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <div>
      <ul>
            <li><NavLink to="/home">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li> 
            <li><NavLink to="/web">Web</NavLink></li>
        </ul> 
    </div>
  )
}

export default Header
  