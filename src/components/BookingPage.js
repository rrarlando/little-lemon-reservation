import React from 'react';
import BookingForm from './BookingForm';

function BookingPage() {
  return (
    <>
      <div className="booking-title">
        <h2 className="subtitle">Reservations</h2>
        <h3 className="lead-text">Book a Table</h3>
      </div>
      <BookingForm />
    </>
  );
}

export default BookingPage;
