import React from 'react';
import CheckCircle from './icons/CheckCircle';

function ConfirmedBooking() {
  return (
    <div className="container confirmed-booking">
      <CheckCircle />
      <h2 className="subtitle">Your table has been reserved!</h2>
      <p>
        We look forward to serving you! Please check your email for your booking
        receipt.
      </p>
    </div>
  );
}

export default ConfirmedBooking;
