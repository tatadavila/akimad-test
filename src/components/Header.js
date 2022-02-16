import React from 'react';
import githubLogo from "../assets/githubLogo.png"
import "./Header.css"

const Header = () => {
  return (
    <div className='headerContainer'>
      <img src={githubLogo} alt="github logo" />
    </div>
  )
}

export default Header;