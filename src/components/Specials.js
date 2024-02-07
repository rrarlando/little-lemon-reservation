import React from 'react';
import menu from './data/menu';

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
          <a href="#" className="specials__delivery-btn">
            Order a delivery
          </a>
        </div>
      </div>
    );
  });

  return (
    <section className="specials container">
      <div className="specials__heading">
        <h2 className="subtitle">This week's specials!</h2>
        <a href="#" className="specials__cta lead-text">
          Online Menu
        </a>
      </div>
      <div className="specials__cards grid-3-cols">{menuCard}</div>
    </section>
  );
}

export default Specials;
