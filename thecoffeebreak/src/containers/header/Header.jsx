import React from 'react'
import './header.css'
import logo from '../../assets/Logo_2.png'

const Header = () => {
  return (
    <div className='header section_padding' id='Home'>
      <div className='header-content'>
        <h1 className='gradient_text'>Lorem ipsum dolor, sit amet consectetur adipisicing.</h1>
        <div className='header-content_text'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae illum optio quos. Neque, voluptas est.</p>
        </div>
        <div className='header-image'>
          <img src={logo} alt='The Coffee Break'/>
        </div>
      </div>
    </div>
  )
}

export default Header