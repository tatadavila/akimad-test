import React from 'react';
import github from "../assets/github.svg"
import githubIcon from '../assets/githubIcon.svg'
import "./Header.css"

const Header = () => {
  return (
    <div className='headerContainer'>
      <img className='icon' src={githubIcon} alt='github icon' />
      <img className='title' src={github} alt="github" />
    </div>
  )
}

export default Header;