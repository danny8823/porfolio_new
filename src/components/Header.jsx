import React from 'react'
import portrait from '../img/headshot.jpg'
import './Header.css'

function Header() {
  return (
    <div class = 'header-container'>
      <p class = 'header-name'>Danny Yoo</p>
      <img class = 'header-image' src={portrait} alt = 'portrait'/>
      <p class = 'header-intro'>
        Hey,<br/> my name is Danny Yoo and I am a software engineer. 
        Thanks for visiting my portfolio, feel free to look around.
      </p>
    </div>
  )
}

export default Header