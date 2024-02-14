import React from 'react';
import menu from './data/menu';
import { Link } from 'react-router-dom';

function Specials() {
  const menuCard = menu.map(item => {
    return (
      <div key={item.id} className="specials__item">
        <img src={item.image} alt={item.title} className="specials__img" />
        <div className="specials__content">
          <div className="specials__title-container">
            <h3 className="specials__title">{item.title}</h3>
            <p className="specials__price">${item.price}</p>
          </div>
          <p className="specials__description">{item.description}</p>
          <Link to="/menu" className="specials__delivery-btn">
            Order a delivery
          </Link>
        </div>
      </div>
    );
  });

  return (
    <section className="specials container">
      <div className="specials__heading">
        <h2 className="subtitle">This week's specials!</h2>
        <Link to="/menu" className="specials__cta button-primary lead-text">
          Online Menu
        </Link>
      </div>
      <div className="specials__cards">{menuCard}</div>
    </section>
  );
}

export default Specials;
