import React, { useState, useContext, useEffect } from 'react';
import BookingContext from './BookingContext';
import fakeAPI from './data/fakeAPI';

function BookingForm() {
  const { availableTimes, setAvailableTimes, submitForm } =
    useContext(BookingContext);

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('1');
  const [occasion, setOccasion] = useState('');

  const [minDate, setMinDate] = useState('');
  const [maxDate, setMaxDate] = useState('');

  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

  useEffect(() => {
    const today = new Date();
    const nextYear = new Date();
    nextYear.setFullYear(today.getFullYear() + 1);

    setMinDate(formatDate(today));
    setMaxDate(formatDate(nextYear));
  }, []);

  const handleDateChange = async e => {
    const inputDate = new Date(e.target.value);
    const minDateObj = new Date(minDate);
    const maxDateObj = new Date(maxDate);

    if (inputDate < minDateObj || inputDate > maxDateObj) {
      alert('Please enter a date within the allowed range.');
      return;
    }
    setDate(e.target.value);
    console.log(e.target.value);
    console.log(typeof e.target.value);
    const date = new Date(e.target.value);
    try {
      const times = await fakeAPI.fetchAPI(date);
      setAvailableTimes({ type: 'SET_TIMES', payload: times });
    } catch (error) {
      console.error('Failed to fetch times:', error);
    }
  };

  const clearForm = () => {
    setDate('');
    setTime('');
    setGuests('');
    setOccasion('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formData = { date, time, guests, occasion };
    submitForm(formData);
    clearForm();
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
            min={minDate}
            max={maxDate}
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
            <option value="" disabled hidden>
              --- Select a Time ---
            </option>
            {availableTimes?.map(availableTime => (
              <option key={availableTime} value={availableTime}>
                {availableTime}
              </option>
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
            <option value="" disabled hidden>
              -- Choose Occasion --
            </option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Other">Other</option>
            <option value="No Occasion">No Occasion</option>
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
