import React from 'react'
import portrait from '../img/headshot.jpg'
import './Header.css'

function Header() {
  return (
    <div class = 'header-container'>
      <p class = 'header-name'>Danny Yoo</p>
      <img class = 'header-image' src={portrait} alt = 'portrait'/>
      <ul>
        <li>Fullstack Software Engineer</li>
        <li>Automation Support Specialist</li>
        <li>Code Lover</li>
        <li>Coffee Lover</li>
        <li>Former plumber</li>
      </ul>
    </div>
  )
}

export default Header