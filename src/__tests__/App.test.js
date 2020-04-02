import React from 'react';
import { render } from '@testing-library/react';
import Experiment from '../Experiment';

test('renders learn react link', () => {
  const { getByText } = render(<Experiment />);
  const linkElement = getByText(/Hey, stranger/i);
  expect(linkElement).toBeInTheDocument();
});
