import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import restaurantfood from '../images/restaurantfood.jpg';

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero__text">
          <h1 className="display-title">Little Lemon</h1>
          <h2 className="subtitle">Chicago</h2>
          <p className="lead-text">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          {/* <a href="#" className="hero__cta lead-text">
            Reserve a Table
          </a> */}
          <Link to="/booking" className="hero__cta lead-text">
            Reserve a Table
          </Link>
        </div>
        <img
          src={restaurantfood}
          alt="food served in a tray"
          className="hero__img"
        />
      </div>
    </section>
  );
}

export default Hero;
