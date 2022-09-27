import React from 'react'
import './footer.css'
import {RiAliensFill} from 'react-icons/ri'



const Footer = () => {
  return (
    <footer>
    <RiAliensFill href='#' className='footer-logo'/>

    <ul className='permalinks'>
      <li><a href='#'>HOME</a></li>
      <li><a href='#about'>ABOUT</a></li>
      <li><a href='#experience'>EXPERIENCE</a></li>
      <li><a href='#portfolio'>PORTFOLIO</a></li>
      <li><a href='#contact'>CONTACT</a></li>
    </ul>
    
    </footer>
  )
}

export default Footer