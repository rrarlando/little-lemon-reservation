import React from 'react';
import PageHeading from '../components/PageHeading';
import BookingForm from './BookingForm';

function BookingPage() {
  return (
    <>
      <PageHeading title="Reservations" subtitle="Book a table" />
      <BookingForm />
    </>
  );
}

export default BookingPage;
