import React from 'react';
import { render } from '@testing-library/react';
import Experiment from '../Experiment';

it('renders welcome message', () => {
  const { getByText } = render(<Experiment />);
  expect(getByText(/Hey/i)).toBeInTheDocument();
});

