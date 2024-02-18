import { render, fireEvent, waitFor, act } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import BookingContext from '../components/BookingContext';
import BookingForm from './BookingForm';
import '../components/data/fakeAPI';

jest.mock('./data/fakeAPI', () => ({
  fetchAPI: jest.fn().mockResolvedValue([]),
  submitAPI: jest.fn(),
}));

// Create a custom render function to render the component within the provider
const renderWithProvider = component => {
  const availableTimes = [];
  const setAvailableTimes = jest.fn();
  const submitForm = jest.fn();

  return render(
    <Router>
      <BookingContext.Provider
        value={{ availableTimes, setAvailableTimes, submitForm }}
      >
        {component}
      </BookingContext.Provider>
    </Router>
  );
};

test('date field has correct attributes', () => {
  const { getByLabelText } = renderWithProvider(<BookingForm />);
  const dateInput = getByLabelText(/Choose date/i);
  expect(dateInput).toHaveAttribute('type', 'date');
  expect(dateInput).toHaveAttribute('required');
});

test('time field has correct attributes', () => {
  const { getByLabelText } = renderWithProvider(<BookingForm />);
  const timeSelect = getByLabelText(/Choose time/i);
  expect(timeSelect).toHaveAttribute('required');
});

test('guests field has correct attributes', () => {
  const { getByLabelText } = renderWithProvider(<BookingForm />);
  const guestsInput = getByLabelText(/Number of guests/i);
  expect(guestsInput).toHaveAttribute('type', 'number');
  expect(guestsInput).toHaveAttribute('min', '1');
  expect(guestsInput).toHaveAttribute('max', '10');
  expect(guestsInput).toHaveAttribute('required');
});

test('occasion field has correct attributes', () => {
  const { getByLabelText } = renderWithProvider(<BookingForm />);
  const occasionSelect = getByLabelText(/Occasion/i);
  expect(occasionSelect).toHaveAttribute('required');
});

test('handleDateChange sets error when date is out of range', () => {
  const { getByLabelText, findByText } = renderWithProvider(<BookingForm />);
  const dateInput = getByLabelText(/Choose date/i);

  fireEvent.change(dateInput, { target: { value: '2025-01-01' } });
  fireEvent.blur(dateInput);

  expect(
    waitFor(() => findByText(/Please enter a date from/i))
  ).resolves.toBeTruthy();
});

test('handleGuestsChange sets error for invalid guest number', () => {
  const { getByLabelText, findByText } = renderWithProvider(<BookingForm />);
  const guestsInput = getByLabelText(/Number of guests/i);

  fireEvent.change(guestsInput, { target: { value: 0 } });
  fireEvent.blur(guestsInput);

  expect(
    waitFor(() => findByText(/Please enter the number of guests/i))
  ).resolves.toBeTruthy();
});

test('handleOccasionChange sets error for empty occasion', () => {
  const { getByLabelText, findByText } = renderWithProvider(<BookingForm />);
  const occasionSelect = getByLabelText(/Occasion/i);

  fireEvent.change(occasionSelect, { target: { value: '' } });
  fireEvent.blur(occasionSelect);

  expect(
    waitFor(() => findByText(/Please select an occasion/i))
  ).resolves.toBeTruthy();
});
