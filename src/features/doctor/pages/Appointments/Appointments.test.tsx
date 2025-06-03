import React from 'react';
import { render } from '@testing-library/react-native';
import Appointment from './Appointment';

jest.spyOn(console, 'error').mockImplementation((msg) => {
  if (msg.toString().includes('act(...)')) return;
  console.error(msg);
});

describe('Appointment Screen', () => {
  it('renders header', () => {
    const { getByText } = render(<Appointment />);
    expect(getByText('Appointments')).toBeTruthy();
  });

  it('renders appointments list container', () => {
    const { getByTestId } = render(<Appointment />);
    expect(getByTestId('appointments-list')).toBeTruthy();
  });
});
