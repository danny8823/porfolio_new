import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css';

function NavBar() {
  return ( 
    <div class = 'navbar-container'>
        <Link to = '/'>Home</Link>
        <Link to = '/projects'>Projects</Link>
        <Link to = '/contact'>Contact</Link>
        <Link to = '/about'>About</Link>
    </div>
  )
}

export default NavBar