import React from 'react';
import Nav from './Nav';
import logo from '../images/Logo.svg';

function Header() {
  return (
    <header className='header'>
      <img
        src={logo}
        alt="Little Lemon Restaurant Logo"
        className="header__logo"
      ></img>
      <Nav />
    </header>
  );
}

export default Header;
