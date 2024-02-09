import React, { useRef } from 'react';
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
            <a href="#" className="main-nav__link">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="main-nav__link">
              About
            </a>
          </li>
          <li>
            <a href="#" className="main-nav__link">
              Menu
            </a>
          </li>
          <li>
            <a href="#" className="main-nav__link">
              Reservations
            </a>
          </li>
          <li>
            <a href="#" className="main-nav__link">
              Order Online
            </a>
          </li>
          <li>
            <a href="#" className="main-nav__link">
              Login
            </a>
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
