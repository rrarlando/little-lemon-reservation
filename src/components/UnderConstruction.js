import React from 'react';
import somethingCooking from '../images/something-cooking.png';

function UnderConstruction() {
  return (
    <div className="container under-construction fade-in">
      <img
        className="under-construction__image"
        src={somethingCooking}
        alt="Coming Soon... page is under construction"
      />
      <h2 className="subtitle">
        Coming soon... <br />
        We're cooking up something delicious!
      </h2>
      <p>
        This page is under construction, but stay tuned for a taste of what's to
        come!
      </p>
    </div>
  );
}

export default UnderConstruction;
