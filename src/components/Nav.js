import React from 'react';
import '../App.css';

function Nav() {
  return (
    <>
      <nav className="main-nav">
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
      </nav>
    </>
  );
}

export default Nav;
