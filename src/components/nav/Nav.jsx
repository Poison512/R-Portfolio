import React from 'react'
import './nav.css'
import {SiHomeassistantcommunitystore} from 'react-icons/si'
import {RiAliensFill} from 'react-icons/ri'
import {AiTwotoneExperiment} from 'react-icons/ai'
import {GiUfo} from 'react-icons/gi'
import {GiRotaryPhone} from 'react-icons/gi'
import { useState } from 'react';
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={()=> setActiveNav ('#')} className={activeNav === '#' ? 'active': ''}><SiHomeassistantcommunitystore/></a>
      <a href='#about' onClick={() => setActiveNav ('#about')} className={activeNav === '#about' ? 'active': ''}><RiAliensFill/></a>
      <a href='#experience'onClick={() => setActiveNav ('#experience')} className={activeNav === '#experience' ? 'active': ''}><AiTwotoneExperiment/></a>
      <a href='#portfolio'onClick={() => setActiveNav ('#portfolio')} className={activeNav === '#portfolio' ? 'active': ''}><GiUfo/></a>
      <a href='#contact'onClick={() => setActiveNav ('#contact')} className={activeNav === '#contact' ? 'active': ''}><GiRotaryPhone/></a>
    </nav>
  )
}

export default Nav