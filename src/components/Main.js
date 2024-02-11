import React, { useEffect, useReducer } from 'react';
import Hero from './Hero';
import Specials from './Specials';
import BookingPage from './BookingPage';
import fakeAPI from './data/fakeAPI';
import { Route, Routes } from 'react-router-dom';

export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'SET_TIMES':
      return action.payload;
    default:
      return state;
  }
};

function Main() {
  const [state, dispatch] = useReducer(updateTimes, []);

  useEffect(() => {
    const initializeTimes = async () => {
      const today = new Date();
      try {
        const times = await fakeAPI.fetchAPI(today);
        dispatch({ type: 'SET_TIMES', payload: times });
      } catch (error) {
        console.error('Failed to fetch times:', error);
      }
    };

    initializeTimes();
  }, []);

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
            <BookingPage availableTimes={state} setAvailableTimes={dispatch} />
          }
        />
      </Routes>
    </main>
  );
}

export default Main;
