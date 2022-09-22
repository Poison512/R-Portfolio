import React from 'react'
import CV from '../../assets/Adrian_Resume.pdf'
const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download >RESUME</a>
        <a href="#contact"> CONTACT INFO</a>
        </div>
  )
}

export default CTA