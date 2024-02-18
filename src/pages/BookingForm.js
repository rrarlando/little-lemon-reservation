import React, { useState, useContext, useEffect } from 'react';
import BookingContext from '../components/BookingContext';
import fakeAPI from '../components/data/fakeAPI';

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
  const [loading, setLoading] = useState('');

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

    setDate(e.target.value);
    validateField('date', inputDate);
    setLoading(true);

    const dateToFetch = new Date(e.target.value);
    try {
      const times = await fakeAPI.fetchAPI(dateToFetch);
      setAvailableTimes({ type: 'SET_TIMES', payload: times });
    } catch (error) {
      alert('Failed to fetch times:', error);
    } finally {
      setLoading(false);
    }

    handleBlur('date', e.target.value);
  };

  const handleTimeChange = e => {
    const timeInput = e.target.value;
    setTime(timeInput);

    validateField('time', timeInput);

    handleBlur('time', e.target.value);
  };

  const handleGuestsChange = e => {
    const guestsInput = Number(e.target.value);
    setGuests(guestsInput);
    validateField('guests', guestsInput);
    handleBlur('guests', e.target.value);
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

    handleBlur('occasion', e.target.value);
  };

  const handleBlur = (field, value) => {
    setTouchedFields(prevState => ({ ...prevState, [field]: true }));
    const error = validateField(field, value);
    if (error) {
      setErrorForField(field, error);
    } else {
      setErrorForField(field, ''); // Clear error if validation passes
    }
  };

  const validateField = (field, value) => {
    switch (field) {
      case 'date':
        const minDateObj = new Date(minDate);
        const maxDateObj = new Date(maxDate);
        if (value < minDateObj || value > maxDateObj) {
          return `Please select a date from ${minDate} to ${maxDate}`;
        }
        return null;
      case 'time':
        if (!value & !loading) {
          return 'Please select a time.';
        }
        return null;
      case 'guests':
        if (value < 1 || value > 10) {
          return 'Please enter the number of guests from 1 to 10.';
        }
        return null;
      case 'occasion':
        if (!value) {
          return 'Please select an occasion.';
        }
        return null;
      default:
        return null;
    }
  };

  const setErrorForField = (field, errorMessage) => {
    switch (field) {
      case 'date':
        setDateError(errorMessage);
        break;
      case 'time':
        setTimeError(errorMessage);
        break;
      case 'guests':
        setGuestsError(errorMessage);
        break;
      case 'occasion':
        setOccasionError(errorMessage);
        break;
      default:
        break;
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
            aria-describedby="date-error"
          />
          {dateError && (
            <p className="error" id="date-error">
              {dateError}
            </p>
          )}
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
            aria-describedby="time-error"
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
          {timeError && (
            <p className="error" id="time-error">
              {timeError}
            </p>
          )}
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
            aria-describedby="guests-error"
          />
          {guestsError && (
            <p className="error" id="guests-error">
              {guestsError}
            </p>
          )}
        </div>
        <div className="booking-form__field">
          <label htmlFor="occasion">
            Occasion<span>*</span>
          </label>
          <select
            className="booking-form__input"
            required
            id="occasion"
            value={occasion}
            onChange={handleOccasionChange}
            onBlur={e => handleBlur('occasion', e.target.value)}
            aria-describedby="occasion-error"
          >
            <option value="" disabled hidden>
              -- Choose Occasion --
            </option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Other">Other</option>
            <option value="No Occasion">No Occasion</option>
          </select>
          {occasionError && (
            <p className="error" id="occasion-error">
              {occasionError}
            </p>
          )}
        </div>
        <div className="booking-form__field">
          <button
            className="booking-form__input button-primary"
            // type="submit"
            // value="Make Your reservation"
            disabled={!isFormValid()}
          >
            <span>Make Your Reservation</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default BookingForm;
