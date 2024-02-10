import React, { useState } from 'react';
import Hero from './Hero';
import Specials from './Specials';
import BookingPage from './BookingPage';
import { Route, Routes } from 'react-router-dom';

function Main() {
  const [availableTimes, setAvailableTimes] = useState([
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
  ]);

  return (
    <main className="main">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Specials />
            </>
          }
        />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              setAvailableTimes={setAvailableTimes}
            />
          }
        />
      </Routes>
    </main>
  );
}

export default Main;
