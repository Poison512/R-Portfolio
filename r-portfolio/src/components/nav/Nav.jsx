import React from 'react'
import './nav.css'
import {SiHomeassistantcommunitystore} from 'react-icons/si'
import {RiAliensFill} from 'react-icons/ri'
import {AiTwotoneExperiment} from 'react-icons/ai'
import {GiUfo} from 'react-icons/gi'
import {GiRotaryPhone} from 'react-icons/gi'

const Nav = () => {
  return (
    <nav>
      <a href='#' className='active'><SiHomeassistantcommunitystore/></a>
      <a href='#about'><RiAliensFill/></a>
      <a href='#experience'><AiTwotoneExperiment/></a>
      <a href='#services'><GiUfo/></a>
      <a href='#contact'><GiRotaryPhone/></a>
    </nav>
  )
}

export default Nav