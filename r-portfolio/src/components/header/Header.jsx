import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>HELLO MY NAME IS</h5>
        <h1> ADRIAN </h1>
        <h5 className='text-light'>I AM A FULL STACK DEVELOPER</h5>
        <HeaderSocials/>
        <CTA/>
        
        </div>
    </header>
  )
}

export default Header