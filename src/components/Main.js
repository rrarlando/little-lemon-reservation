import React, { useEffect, useReducer } from 'react';
import Hero from './Hero';
import Specials from './Specials';
import BookingPage from '../pages/BookingPage';
import ConfirmedBooking from '../pages/ConfirmedBooking';
import Menu from '../pages/Menu';
import Order from '../pages/Order';
import Login from '../pages/Login';
import About from '../pages/About';
import fakeAPI from './data/fakeAPI';
import BookingContext from './BookingContext';
import { Route, Routes, useNavigate } from 'react-router-dom';

export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'SET_TIMES':
      return action.payload;
    default:
      return state;
  }
};

export const initializeTimes = async (date, dispatch) => {
  try {
    const times = await fakeAPI.fetchAPI(date);
    dispatch({ type: 'SET_TIMES', payload: times });
  } catch (error) {
    console.error('Failed to fetch times:', error);
  }
};

function Main() {
  const [state, dispatch] = useReducer(updateTimes, []);

  useEffect(() => {
    const today = new Date();
    initializeTimes(today, dispatch);
  }, []);

  const navigate = useNavigate();

  const submitForm = async formData => {
    try {
      const response = await fakeAPI.submitAPI(formData);
      if (response) {
        navigate('/confirmed');
      } else {
        alert('Form submission failed');
      }
    } catch (error) {
      alert('Failed to submit form:', error);
    }
  };

  return (
    <BookingContext.Provider
      value={{ availableTimes: state, setAvailableTimes: dispatch, submitForm }}
    >
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
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/confirmed" element={<ConfirmedBooking />} />
          <Route path="/order" element={<Order />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </BookingContext.Provider>
  );
}

export default Main;
