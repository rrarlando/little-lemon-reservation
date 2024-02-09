import React from 'react';
import Nav from './Nav';
import logo from '../images/Logo.svg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header container">
      <Link to="/" className="header__link">
        <img
          src={logo}
          alt="Little Lemon Restaurant Logo"
          className="header__logo"
        ></img>
      </Link>
      <Nav />
    </header>
  );
}

export default Header;
