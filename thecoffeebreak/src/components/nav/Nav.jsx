import React from 'react'
import { useState } from 'react'

import './nav.css'

import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import {FaItchIo} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {FaLinkedin} from 'react-icons/fa'

import Logo from '../../assets/Logo.png'

/*============== RETURN MENU LINKS ===============*/
const Menu = () =>(
  <>
  <p><a href='Home'> Home</a></p>
  <p><a href='About'> Who are we?</a></p>
  <p><a href='Projects'> Our Projects</a></p>
  <p><a href='Blog'> Blog</a></p>
  <p><a href='Contacts'> Contact Us</a></p>
  </>
)

const Socials = () =>(
  <>
    <p><a href='Projects' target='_blank'><FaItchIo/></a></p>
    <p><a href='https://www.instagram.com/thecoffeebrkstudio/' target='_blank'> <FiInstagram/></a></p>
    <p><a href='https://www.linkedin.com/company/86360060/admin/' target='_blank'><FaLinkedin/></a></p>
  </>
)

const Nav = () => {
  const[toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='navbar'>
      <div className='navbar-links'>
        <div className='navbar-links_logo'>
          <img src={Logo} alt='logo'/>
        </div>
        <div className='navbar-links_container'>
          <Menu/>
        </div>
      </div>
      <div className='navbar-socials'>
        <Socials/>
      </div>
     
      {/*======================MOBILE MENU=======================*/}
      {/*==Activate/Deactivate==*/}
      <div className='navbar-menu'>
        {toggleMenu 
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)}/>
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)}/>
        }
        {/*==Display Content==*/}
        {toggleMenu &&(
          <div className='navbar-menu_container scale-up-center'>
            <div className='navbar-menu_container-links'>
              <Menu/>
            </div>
            <div className='navbar-menu_container-socials'>
              <Socials/>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Nav