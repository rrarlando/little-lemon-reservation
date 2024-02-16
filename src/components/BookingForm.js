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

  const [touchedFields, setTouchedFields] = useState({});

  const [dateError, setDateError] = useState('');
  const [timeError, setTimeError] = useState('');
  const [guestsError, setGuestsError] = useState('');
  const [occasionError, setOccasionError] = useState('');

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

    if (touchedFields.date) {
      if (inputDate < minDateObj || inputDate > maxDateObj) {
        setDateError(`Please enter a date from ${minDate} to ${maxDate}`);
        return;
      } else {
        setDateError('');
      }
    }

    setDate(e.target.value);

    const dateToFetch = new Date(e.target.value);
    try {
      const times = await fakeAPI.fetchAPI(dateToFetch);
      setAvailableTimes({ type: 'SET_TIMES', payload: times });
    } catch (error) {
      alert('Failed to fetch times:', error);
    }
  };

  const handleTimeChange = e => {
    const timeInput = e.target.value;
    setTime(timeInput);

    if (touchedFields.time) {
      if (!timeInput) {
        setTimeError('Please select a time.');
      } else {
        setTimeError('');
      }
    }
  };

  const handleGuestsChange = e => {
    const guestsInput = e.target.value;
    setGuests(guestsInput);

    if (touchedFields.guests) {
      if (!guestsInput || Number(guestsInput) < 1 || Number(guestsInput) > 10) {
        setGuestsError('Please enter the number of guests from 1 to 10.');
      } else {
        setGuestsError('');
      }
    }
  };

  const handleOccasionChange = e => {
    const occasionInput = e.target.value;
    setOccasion(occasionInput);

    if (touchedFields.occasion) {
      if (!occasionInput) {
        setOccasionError('Please select an occasion.');
      } else {
        setOccasionError('');
      }
    }
  };

  const handleBlur = (field, value) => {
    setTouchedFields(prevState => ({ ...prevState, [field]: true }));

    // Call the respective handleChange function
    if (field === 'date') {
      if (value) {
        handleDateChange({ target: { value } });
      } else if (touchedFields.date) {
        setDateError(`Please enter a date from ${minDate} to ${maxDate}`);
      }
    } else if (field === 'time') {
      handleTimeChange({ target: { value } });
    } else if (field === 'guests') {
      handleGuestsChange({ target: { value } });
    } else if (field === 'occasion') {
      handleOccasionChange({ target: { value } });
    }
  };

  const isFormValid = () => {
    return (
      date &&
      time &&
      guests &&
      occasion &&
      !dateError &&
      !timeError &&
      !guestsError &&
      !occasionError
    );
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
            onBlur={e => handleBlur('date', e.target.value)}
          />
          {dateError && <p className="error">{dateError}</p>}
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
            onChange={handleTimeChange}
            onBlur={e => handleBlur('time', e.target.value)}
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
          {timeError && <p className="error">{timeError}</p>}
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
            onChange={handleGuestsChange}
            onBlur={e => handleBlur('guests', e.target.value)}
          />
          {guestsError && <p className="error">{guestsError}</p>}
        </div>
        <div className="booking-form__field">
          <label htmlFor="occasion">
            Occasion<span>*</span>
          </label>
          <select
            className="booking-form__input"
            id="occasion"
            value={occasion}
            onChange={handleOccasionChange}
            onBlur={e => handleBlur('occasion', e.target.value)}
          >
            <option value="" disabled hidden>
              -- Choose Occasion --
            </option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Other">Other</option>
            <option value="No Occasion">No Occasion</option>
          </select>
          {occasionError && <p className="error">{occasionError}</p>}
        </div>
        <div className="booking-form__field">
          <input
            className="booking-form__input button-primary"
            type="submit"
            value="Make Your reservation"
            disabled={!isFormValid()}
          />
        </div>
      </form>
    </div>
  );
}

export default BookingForm;
