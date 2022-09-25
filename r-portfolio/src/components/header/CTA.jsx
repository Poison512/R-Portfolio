import React from 'react'
import CV from '../../assets/Adrian_Resume.pdf'
const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn' >RESUME</a>
        <a href="#contact" className='btn btn-primary'> CONTACT INFO</a>
        </div>
  )
}

export default CTA