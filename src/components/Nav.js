import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
import CloseButton from './icons/CloseButton';
import HamburgerMenu from './icons/HamburgerMenu';

function Nav() {
  const navRef = useRef();

  const toggleNavbar = () => {
    navRef.current.classList.toggle('toggle-nav');
  };

  return (
    <>
      <nav ref={navRef} className="main-nav">
        <ul role="menubar" className="main-nav__list">
          <li role="menuitem">
            <NavLink to="/" onClick={toggleNavbar} className="main-nav__link">
              Home
            </NavLink>
          </li>
          <li role="menuitem">
            <NavLink
              to="/about"
              onClick={toggleNavbar}
              className="main-nav__link"
            >
              About
            </NavLink>
          </li>
          <li role="menuitem">
            <NavLink
              to="/menu"
              onClick={toggleNavbar}
              className="main-nav__link"
            >
              Menu
            </NavLink>
          </li>
          <li role="menuitem">
            <NavLink
              to="/booking"
              onClick={toggleNavbar}
              className="main-nav__link"
            >
              Reservations
            </NavLink>
          </li>
          <li role="menuitem">
            <NavLink
              to="/order"
              onClick={toggleNavbar}
              className="main-nav__link"
            >
              Order Online
            </NavLink>
          </li>
          <li role="menuitem">
            <NavLink
              to="/login"
              onClick={toggleNavbar}
              className="main-nav__link"
            >
              Login
            </NavLink>
          </li>
        </ul>
        <button
          onClick={toggleNavbar}
          className="main-nav__btn close-btn"
          aria-label="Close navigation"
        >
          <CloseButton />
        </button>
      </nav>
      <button onClick={toggleNavbar} className="main-nav__btn open-btn">
        <HamburgerMenu />
      </button>
    </>
  );
}

export default Nav;
