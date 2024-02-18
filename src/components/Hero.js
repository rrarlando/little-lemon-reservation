import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import restaurantfood from '../images/restaurantfood.jpg';

function Hero() {
  return (
    <section className="hero fade-in" role="banner">
      <div className="container hero-grid">
        <div className="hero__text">
          <h1 className="display-title" id="hero-title">
            Little Lemon
          </h1>
          <h2 className="subtitle">Chicago</h2>
          <p className="lead-text">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link to="/booking" className="hero__cta button-primary lead-text">
            <span>Reserve a Table</span>
          </Link>
        </div>
        <img
          src={restaurantfood}
          alt="food served in a tray"
          className="hero__img"
          aria-labelledby="hero-title"
        />
      </div>
    </section>
  );
}

export default Hero;
