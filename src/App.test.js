import { render, screen } from '@testing-library/react';
import { initializeTimes, updateTimes } from './components/Main';

test('initializeTimes function returns the correct times', () => {
  const times = initializeTimes();
  expect(times).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00']);
});

describe('updateTimes function', () => {
  it('returns the same state', () => {
    const state = ['17:00', '18:00', '19:00', '20:00', '21:00'];
    const action = { type: 'TEST_ACTION', payload: {} };
    const newState = updateTimes(state, action);
    expect(newState).toEqual(state);
  });
});
