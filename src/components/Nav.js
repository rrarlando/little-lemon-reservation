import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
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
        <ul className="main-nav__list">
          <li className="main-nav__item">
            <Link to="/" onClick={toggleNavbar} className="main-nav__link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleNavbar} className="main-nav__link">
              About
            </Link>
          </li>
          <li>
            <Link to="/menu" onClick={toggleNavbar} className="main-nav__link">
              Menu
            </Link>
          </li>
          <li>
            <Link
              to="/booking"
              onClick={toggleNavbar}
              className="main-nav__link"
            >
              Reservations
            </Link>
          </li>
          <li>
            <Link to="/order" onClick={toggleNavbar} className="main-nav__link">
              Order Online
            </Link>
          </li>
          <li>
            <Link to="/login" onClick={toggleNavbar} className="main-nav__link">
              Login
            </Link>
          </li>
        </ul>
        <button onClick={toggleNavbar} className="main-nav__btn close-btn">
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
