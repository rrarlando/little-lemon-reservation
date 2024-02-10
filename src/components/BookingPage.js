import React from 'react';
import BookingForm from './BookingForm';

function BookingPage({ availableTimes, setAvailableTimes }) {
  return (
    <>
      <div className="booking-title">
        <h2 className="subtitle">Reservations</h2>
        <h3 className="lead-text">Book a Table</h3>
      </div>
      <BookingForm
        availableTimes={availableTimes}
        setAvailableTimes={setAvailableTimes}
      />
    </>
  );
}

export default BookingPage;
