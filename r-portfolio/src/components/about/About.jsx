
import React from 'react'
import './About.css'
import {AiTwotoneExperiment} from 'react-icons/ai'

const About = () => (
  <section id="about">
    <h5>GET TO KNOW</h5>
    <h2>ABOUT ME</h2>

    {/*
              <div className='container about_container'>
              <div className='about_me'>
              <div className='about_me-image'>
                <img src='/r-portfolio/src/assets/alien2.png.gif' alt='about image'/>
        
                </div>
                </div>
              </div> */}

    <div className='about_content'>
      <div className='about_cards'>
        <article className='about_card'>
          <AiTwotoneExperiment className='about_icon'/>
          <h5>EXPERIENCE</h5>
          <small>1 YEAR WORKING</small>
          </article>

          <a href='#portfolio'><article className='about_card'>
          <AiTwotoneExperiment  className='about_icon'/>
          <h5 >PROJECTS</h5>
          <small>VIEW SOME OF MY WORK HERE</small>
          </article></a>

          </div>
          <div className='about-text'>
          <p>Hello and welcome to my portfolio! <br></br>
          I am excited to show my work, skills and progress on this page.
           I live in Austin,Tx. On my free time i create art and ride BMX.</p>
          </div>
          <a href='#contact' className='btn btn-primary'>TALK TO ME</a>
    </div>

  </section>
)

export default About