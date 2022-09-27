import React from 'react'
import './Contact.css'
import {GiPoisonBottle} from 'react-icons/gi'
import {RiMailOpenFill} from 'react-icons/ri'

const Contact = () => {
  return (
    <section id="contact">
      <h5>GET IN TOUCH</h5>
      <h2>CONTACT ME</h2>

      <div className="container contact-container">
        <a href='mailto:adrianalanizmex@gmail.com'>
        <div className="contact-options">
          <article className="contact-option">
            <RiMailOpenFill className='contact-option-icon'/>
            <h4>EMAIL</h4>
            <h5>adrianalanizmex@gmail.com</h5>
            </article>
          </div> 
          </a>

          <a href='https://github.com/Poison512'>
            <div className="contact-options">
          <article className="contact-option">
            <GiPoisonBottle className='contact-option-icon'/>
            <h4>GITHUB</h4>
            
            <h5>Poison512</h5>
            </article>
          </div>
          </a>
        {/* <form action=''>
          <input type='text' name='name' placeholder='YOUR NAME' required/>
          <input type='email' name='email' placeholder='YOUR EMAIL' required/>
          <textarea  name='message' rows='7' placeholder='YOUR MESSAGE' required/>
          <button type='submit' className='btn btn-primary'>SEND</button>
          </form> */}

        </div>
      </section>
  )
}

export default Contact