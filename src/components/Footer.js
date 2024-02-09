import React from 'react';
import small_logo from '../images/small_logo.png';
import facebook from '../images/facebook-square-logo-24.png';
import instagram from '../images/instagram-alt-logo-24.png';
import pinterest from '../images/pinterest-logo-24.png';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <img
          className="footer__logo"
          src={small_logo}
          alt="little lemon logo"
        />
        <div className="footer__content">
          <h4 className="footer__heading">Sitemap</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/booking">Reservations</Link>
            </li>
            <li>
              <Link to="/order">Order Online</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
        <div className="footer__content">
          <h4 className="footer__heading">Contact</h4>
          <ul>
            <li>
              <strong>Address: </strong>1234 Lake Shore Drive, Chicago, IL
              60605, USA{' '}
            </li>
            <li>
              <strong>Phone: </strong>
              (312) 555-0123
            </li>
            <li>
              <strong>Email: </strong>info@littlelemon.com
            </li>
          </ul>
        </div>
        <div className="footer__content">
          <h4 className="footer__heading">Follow us!</h4>
          <ul className="social-media">
            <li>
              <a href="#">
                <img className="social-icon" src={facebook}></img>
              </a>
            </li>
            <li>
              <a href="#">
                <img className="social-icon" src={instagram}></img>
              </a>
            </li>
            <li>
              <a href="#">
                <img className="social-icon" src={pinterest}></img>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
