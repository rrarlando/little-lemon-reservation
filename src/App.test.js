import { render, screen } from '@testing-library/react';
import { initializeTimes, updateTimes } from './components/Main';
import fakeAPI from './components/data/fakeAPI';

// Mock the fetchAPI function from fakeAPI
jest.mock('./components/data/fakeAPI', () => ({
  fetchAPI: jest.fn(),
}));

describe('initializeTimes function', () => {
  it('should return a non-empty array', async () => {
    // Define the date and times for testing
    const date = new Date();
    const times = ['--- Select a Time ---', '15:00', '15:30', '16:00'];

    // Mock the implementation of fetchAPI to return the test times
    fakeAPI.fetchAPI.mockImplementationOnce(() => Promise.resolve(times));

    // Mock the dispatch function
    const dispatch = jest.fn();

    // Call the initializeTimes function
    await initializeTimes(date, dispatch);

    // Check that dispatch was called with the correct action
    expect(dispatch).toHaveBeenCalledWith({
      type: 'SET_TIMES',
      payload: times,
    });
  });
});

describe('updateTimes function', () => {
  it('should update times based on action payload', () => {
    // Define the initial state and action
    const initialState = [];
    const date = new Date();
    const times = ['--- Select a Time ---', '15:00', '15:30', '16:00'];
    const action = { type: 'SET_TIMES', payload: { date, times } };

    // Call the updateTimes function
    const newState = updateTimes(initialState, action);

    // Check that the state was updated correctly
    expect(newState).toEqual({ date, times });
  });
});
