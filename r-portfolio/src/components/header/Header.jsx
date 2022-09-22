import React from 'react'
import './header.css'
import CTA from './CTA'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>HELLO IM</h5>
        <h1> ADRIAN ALANIZ</h1>
        <h5 className='text-light'>I AM A FULL STACK DEVELOPER</h5>
        <CTA/>
        </div>
    </header>
  )
}

export default Header