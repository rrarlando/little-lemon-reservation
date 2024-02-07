import React from 'react';
import Nav from './Nav';
import logo from '../images/Logo.svg';

function Header() {
  return (
    <header className="header container">
      <a href="#" className="header__link">
        <img
          src={logo}
          alt="Little Lemon Restaurant Logo"
          className="header__logo"
        ></img>
      </a>
      <Nav />
    </header>
  );
}

export default Header;
