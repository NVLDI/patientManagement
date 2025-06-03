// Appointments.test.tsx

import React from 'react';
import { render } from '@testing-library/react-native';
import Appointments from './Appointment';

describe('Appointments Screen', () => {
  it('renders correctly with appointment data', () => {
    const { getByText } = render(<Appointments />);

    // Update these texts to what’s actually rendered in your component
    expect(getByText('Appointments')).toBeTruthy();
  });

  it('does not crash when no appointments are present', () => {
    const { getByTestId } = render(<Appointments />);
    
    // Assuming you have a fallback text or empty state
    expect(getByTestId('appointments-list')).toBeTruthy();
  });
});
