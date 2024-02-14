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
    // reset form inputs
    setDate('');
    setTime('');
    setGuests('');
    setOccasion('');
  };

  return (
    <div className="container">
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="booking-form__field">
          <label htmlFor="res-date">
            Choose date<span>*</span>
          </label>
          <input
            className="booking-form__input"
            type="date"
            required
            id="res-date"
            value={date}
            onChange={handleDateChange}
          />
        </div>
        <div className="booking-form__field">
          <label htmlFor="res-time">
            Choose time<span>*</span>
          </label>
          <select
            className="booking-form__input"
            id="res-time"
            value={time}
            required
            onChange={e => setTime(e.target.value)}
          >
            {availableTimes?.map(availableTime => (
              <option key={availableTime}>{availableTime}</option>
            ))}
          </select>
        </div>
        <div className="booking-form__field">
          <label htmlFor="guests">
            Number of guests<span>*</span>
          </label>
          <input
            className="booking-form__input"
            type="number"
            required
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            value={guests}
            onChange={e => setGuests(e.target.value)}
          />
        </div>
        <div className="booking-form__field">
          <label htmlFor="occasion">
            Occasion<span>*</span>
          </label>
          <select
            className="booking-form__input"
            id="occasion"
            value={occasion}
            onChange={e => setOccasion(e.target.value)}
          >
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
        </div>
        <div className="booking-form__field">
          <input
            className="booking-form__input button-primary"
            type="submit"
            value="Make Your reservation"
            disabled={!date || !time || !guests || !occasion}
          />
        </div>
      </form>
    </div>
  );
}

export default BookingForm;
