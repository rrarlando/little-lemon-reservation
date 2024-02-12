import React, { useState, useContext } from 'react';
import BookingContext from './BookingContext';
import fakeAPI from './data/fakeAPI';

function BookingForm() {
  const { availableTimes, setAvailableTimes, submitForm } =
    useContext(BookingContext);

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [occasion, setOccasion] = useState('');

  const handleDateChange = async e => {
    setDate(e.target.value);
    const date = new Date(e.target.value);
    try {
      const times = await fakeAPI.fetchAPI(date);
      setAvailableTimes({ type: 'SET_TIMES', payload: times });
    } catch (error) {
      console.error('Failed to fetch times:', error);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formData = { date, time, guests, occasion };
    submitForm(formData);
  };

  return (
    <div className="container">
      <form className="booking-form" onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={handleDateChange}
        />
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          onChange={e => setTime(e.target.value)}
        >
          {availableTimes?.map(availableTime => (
            <option key={availableTime}>{availableTime}</option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={e => setGuests(e.target.value)}
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={e => setOccasion(e.target.value)}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" />
      </form>
    </div>
  );
}

export default BookingForm;
